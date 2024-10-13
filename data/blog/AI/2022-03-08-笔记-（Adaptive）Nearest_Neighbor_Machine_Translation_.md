---
title: 笔记-（Adaptive）Nearest_Neighbor_Machine_Translation_
date: 2022-03-08
lastmod: 2022-03-08
tags: ['AI']
draft: false
summary: Nearest Neighbor Machine Translation (KNN-MT)
layout: PostSimple
---

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-2007333394.png)

> Nearest Neighbor Machine Translation

SOTA German-English 翻译模型提升1.5BLEU

比zero-shot transfer提升平均9.2BLEU

多语言翻译，在英德和英中提升了3BLEU。

## 原理：

对NMT的概率分布和KNN的概率分布做加权。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-1936347486.png)

## KNN概率分布的计算方式

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-1279056054.png)

source language : $s=(s_1,...,s_{M_1})$

target sequence: $t=(t_1,...,t_{M_2})$

目标 token $t_i$的概率为$p(t_i|s,t_{1:i-1})$,其中$(s,t_{1:i-1})$表示target token$t_i$的翻译上下文。

### 构建Datastore

数据存储是key-value对，在decode的每一步中，ground true target token $t_i$作为value。key为decoder中提取目标token的分布式表示特征，在预测时候，计算当前表示和数据库中k向量的距离，生成候选token。

$f(s,t_{1:i-1})$，针对target token $t_i$生成k。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-270673578.png)

### 计算KNN的分布

计算当前$f(s,t_{1:t-1})$表示和datastore中$k_j$的距离，选择k个nearest的结果。除以T（Temperature超参数）温度来平滑分布，在通过exp做Normalizaiton，将target相同的做一个求和。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-3717518659.png)

> KNN-MT和knn-LM的区别：
>
> 1. knn-mt需要src和tgt的context
> 2. knn-mt增加了一个超参数temperature，防止对检索上下文过拟合。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-726049670.png)

feature采用是decoder的输出。

## Experiments

### 单一语言对翻译

使用7.7亿 token的WMT19训练数据构成datastore，将高度调优的模型BLEU提高到39.08，提高了1.5BLEU。

### 多语言模型

使用训练数据的子集生成datastore

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-1864905435.png)

增加datastore之后，所有的BLEU都有提升。其中en-zh，en-de，zh-en BLEU提升了3。

BLEU的提升和datastore的大小关系不明显。

并且作者发现，英语作为目标语言BLEU提升(1.23)小于英语作为源语言（1.94）,说明KNN-mT方法可以提高decoder阶段低资源语言训练欠拟合

> 作者还测试了模型的跨语言检索能力。表现较好。提高1BLEU平均。

### 域适应

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-2324126970.png)

KNN-MT在多个domain datastore和单个domain sotre的BLEU增加近似，说明这个算法是比较rubust。

## 关键超参数调整

### softmax temperature

防止模型对单个neighbor的概率分配较大。损害多样性。实验说明，设置为10，100较好。下图，邻居的个数在16也较好。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-3370754496.png)

### 查询neighbors的个数

检索邻居较多时，性能不仅没有提升，反而有些下降。说明检索过多的neighbors可能会增加噪音，以至结果恶化。neighbors个数不同情况可能需要不同的调整。

### datastore大小

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-989383657.png)

需要权衡大小和检索耗时。

### T和lambda

固定neighbors k=64.

结果：$\lambda$的值0.5对所有方向都有提升，实验数据上不会带来负面效果。

T在10或100实验都是最优的。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-4272766209.png)

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-3962600120.png)

## 案例

KNN示例检索不仅正确预测了target word，而且上下文都是语义相关的。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-3467080491.png)

在模型可以访问非常少量的模棱两可的目标端上下文的示例中。KNN-MT能够依赖源上下文来解决此问题并生成正确的目标令牌，will

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-797282224.png)

KNN匹配局部的上下文，而不是全局，比如Papua

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-4132078010.png)

## 其他优化

### Adaptive Nearest Neighbor Machine Translation

提出了轻量的meta-k network，可以通过少样本进行有效训练，对每个target token动态决定邻居 k的个数，过滤检索结果中的噪声。并且不同领域都可以通用。

根据**检索到的邻居的距离**和**不同值的计数**动态地评估和聚合一组KNN预测

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-692906177.png)

上图看出，正确预测应为spreadsheet，但是table出现了很多次，导致KNN-MT最后结果是table。

meta-k网络实现：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-2988224032.png)

d,c是距离和次数特征。$f_{Meta}()$是一个前向传播层，隐层大小32（使用2k sents 训练了Meta-k 5k steps）。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-2000080115.png)

NMT模型和不同的KNN预测与Meta-k网络的输出进行聚合，得到最终的预测

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-2535489193.png)

### Learning Kernel-Smoothed Machine Translation with RetrievedExamples

https://www.tzer.top/index.php/archives/399/

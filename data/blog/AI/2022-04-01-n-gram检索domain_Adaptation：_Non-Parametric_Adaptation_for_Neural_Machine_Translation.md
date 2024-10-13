---
title: n-gram检索domain_Adaptation：_Non-Parametric_Adaptation_for_Neural_Machine_Translation
date: 2022-04-01
lastmod: 2022-04-01
tags: ['AI']
draft: false
summary: 这篇文章提出了一种半参数方法,通过n-gram检索来实现神经机器翻译在新领域的无参数适应。作者设计了新的架构来编码源语言和目标语言信息,并通过消融分析验证了方法的有效性。该方法在异构数据和稀有短语翻译上表现良好,避免了微调可能带来的灾难性遗忘问题。
layout: PostSimple
---

> Non-Parametric Adaptation for Neural Machine Translation

作者提出了一个半参数方法，使MT新的domains上无需参数更新，依赖n-gram检索获得好的效果。

1. 检索相似n-gram样本：基于IDF和dense vector
2. 设计了新的架构编码source-target信息。让模型能够区分噪音，进行了消融分析

模型在异构数据，稀有短语的翻译能力弱，而微调会有灾难性遗忘问题，所以非参数方法就比较重要。作者说其他的检索方法有效可能是领域的狭窄导致翻译过渡依赖检索。

检索的目的是为了提高翻译质量，最大化句子相似度和翻译性能之间的影响还需要进一步实验。

## 检索方法

### IDF句子检索

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-649296299.png)

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-1603808443.png)

### IDF N-gram检索

$X=(t^1,...t^T)$ 为了避免表示句子n-gram的数量

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-3205576800.png)

考虑重复，如果一个句子已经添加到检索集，要找下一个相似的句子。

每个句子检索到的邻居数量和长度成正比

### N-gram向量

n-gram subword 的那部分求平均

## 新架构

### 架构

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-1151532922.png)

### CSTM

其中Conditional Source Target Memory生成采用如下方法：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-170544655.png)

CSTM介绍：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-2937273686.png)

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-2613978517.png)

## 模型效果

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-04-1831651985.png)

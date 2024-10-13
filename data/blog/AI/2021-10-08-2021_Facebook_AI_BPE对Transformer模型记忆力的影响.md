---
title: 2021_Facebook_AI_BPE对Transformer模型记忆力的影响
date: 2021-10-08
lastmod: 2021-10-08
tags: ['AI']
draft: false
summary: 这篇文章主要研究了BPE词表大小对Transformer模型记忆能力的影响。实验表明,增加BPE词表大小可以提高模型的记忆能力,原因可能是BPE减少了训练序列的长度。作者通过三个任务验证了这一结论,并排除了其他可能的解释,最终确定序列长度的减少是观察到记忆效果增强的主要因素。
layout: PostSimple
---

> HOW BPE AFFECTS MEMORIZATION IN TRANSFORMERS

证明了增加BPE vocab大小可以进一步提高模型的记忆能力。（记忆可能导致数据泄漏，所以需要在更好的时候记忆，在不需要的时候避免记忆。）

通常，我们认为数据增强，参数量，正则会影响模型记忆。作者通过实验发现BPE词表越大，记忆越强。作者推测原因可能是：bpe减少训练序列的长度

Their conclusion that it is the sequence length that matters makes intuitive sense. The Transformer architecture internally compares all input token pairs many times and the number of token combinations grows quadratically with the sequence length. **When we imagine the classification as searching for particular relation in the input, it totally makes sense that the fewer possible relations we have, the easier it is to find something.**

## 学习记忆任务

如何验证模型的记忆能力，作者提出了三个任务来验证模型的记忆能力。

### 学习随机标签映射

学习一个非系统映射的任务，来衡量模型的记忆能力。假设更高的训练准确率意味着更高的记忆能力。使用SNLI（斯坦福自然语言推理数据集）将前提和假设通过`::` 进行拼接，过滤掉中性的句子。转化为二分类任务。通过随机抽样标签替换原有标签。通过准确率来分析模型的记忆能力。

### 成员推理

度量模型对成员推理攻击的脆弱性来判断模型记忆的程度大小。如果很容易的准确判断一个例子是否用于训练，那我们就可以认为他以某种形式记忆在模型的权重中。（具体方法看原始论文）

### 训练数据恢复

关注问答领域，判断模型对训练数据中的问题的答案生成和原始答案的匹配度。数据集使用PAQ

## 模型和超参数

作者使用三个Transformer模型，(因果)语言模型LM，masked language model(MLM), 和一个Encoder。在学习随机标签映射和成员推理上使用全部三个架构，问答使用LM。

### BPE 设置

> 改变词汇表的大小

对于SNLI数据采用`(0.5,1.5,10,20)✖️10^3`步，对应的vocab size是611,1097,4943,9574,18336。

PAQ dataset，`(0.5,1.5,10,,15,20)✖️10^3`对应1280, 1784, 5784, 10784, 15784, 20776 vocab size

### 控制学习参数的数量

更改词表大小后，模型参数也会发生变换，为了解决这一影响，作者控制了模型的参数量，将嵌入层替换为一个一个嵌入层和一个全连接层的组合。

### 改变模型为分类器

EOS token 映射等方法将模型改变为分类器

### 模型和训练细节

略

## BPE影响记忆实验

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-2417897024.png)

Memorizing random Labels：a,b两图模型随着BPE词表的大小增加，对随机标签拟合的更好。

Membership inference: c图中看到，(M)LM的检验精度具有不同的增长区域，表明：泛化与记忆并不直接矛盾，有一定程度的粒度可以实现更好的记忆的更好的泛化

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-782379925.png)

Question answer recovery: 任务采用了两个不同的模型，transformer-large和base。可以看出large的效果总比base好，这说明模型大小对记忆力影响较大。并且随着vocab size的提升，准确度也提升。在参数控制上效果也是如此。

## 解释

作者发现，BPE学习的词汇量越大，在Transforme模型中记忆能力越强。作者提出三个假设：长度假设(BPE vocab增加使输入序列变短)，冗余假设（BPE是一种压缩算法，对数据进行压缩，模型可以更容易记忆没有冗余的数据），词汇量假设（词汇量增加，在极限情况家，每个序列都可能有一个唯一的标记，标记和标签之间会存在一对一的关系）

作者进行了实验，去除了冗余假设。如下图a在不压缩数据上，vocab越大，记忆越强。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-4136876816.png)

作者通过对两个新token替换一个等概率替换一个旧token，增大了两倍词汇量，如上图b，观测出vocab增加相对较大，记忆力增强效果，并且在一开始对记忆力是有害的。去除词汇量假设。

排除法：序列长度的减少是观察到记忆效果的主要因素。

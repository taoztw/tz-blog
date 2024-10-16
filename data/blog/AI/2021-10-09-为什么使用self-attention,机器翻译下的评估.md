---
title: 为什么使用self-attention,机器翻译下的评估
date: 2021-10-09
lastmod: 2021-10-09
tags: ['AI']
draft: false
summary: 这篇文章主要比较了RNNs、CNNs和self-attention网络在机器翻译中的表现。实验发现,在长距离主谓一致任务中,RNNs的表现优于CNNs和self-attention网络;而在词义消歧任务中,self-attention网络(Transformer)的语义特征提取能力最强。文章指出评估神经机器翻译模型架构需要考虑内在因素的权衡,而不仅仅关注BLEU分数。
layout: PostSimple
---

> Why Self-Attention? A Targeted Evaluation of Neural Machine Translation Architectures EMNLP 2018

作者针对RNNs,CNNs,self-attention网络进行了两个任务分析：

1. 主谓一致任务。检测不同模型的长距离依赖捕获能力
2. 词义消歧任务。检测模型语义特征提取能力

实验表明：

1. CNNs长距离主谓一致任务比RNNs差很多，Self-attention网络(Transformer)在过长距离依赖效果不如RNNs。
2. self-attention网络的语义特征提取能力最好

## Introduction

Transformer的提出在EN-De和EN-FR任务上BLEU取得了SOTA，但是BLEU仍是粗粒度的评价，并不能体现出不同模型结构在哪些方面对机器翻译做出了改进。2017年一些论文的认为神经网络中相互依赖元素之间的距离对模型依赖捕获能力的影响很大，认为Tansformers和CNNs比RNNs依赖捕获能力强但并没有实验证明，只停留在理论层面。作者假设Transformers和CNNs BLEU的提升是因为语义特征提取能力增强。

文章贡献

1. 验证了一个理论，具有较短路径的网络架构(如Transformer和CNNs)更能捕获远程依赖关系。但是主谓一致任务的实验结果并不能证明Transformers或cnn在这方面比RNNs好
2. 经验表明，多头注意力的头数越多，模型长距离捕获能力越强
3. Transformers更擅长语义特征提取

## 相关工作

这里记录一下相关工作，可能对以后工作有帮助。

Comparative study of cnn and rnn for natural language processing. 2017在几个NLP任务上比较了CNN，LSTM和GRU，发现CNNs在语义任务好，RNNs在语法相关任务，尤其是长句子效果好。

...发现RNNs 在主谓一致任务上比CNNs好。

...2018发现Transformer语言模型比RNN语言模型在主谓一致任务上差.当主语和谓语之间距离增大之后尤其如此

2018年，LSTM更适用于序列建模问题。（2021年不太了解，Transformer在序列建模问题上应该会有提升。）

2018在historical spelling normalization任务上发现只有在大资源的情况下Transformer效果比RNNs好

## 背景

介绍了RNNs，CNNs，Transformer模型。

对于主谓一致任务，使用Lingeval97数据集，English-》German生成对比评估测试集35,105，如果模型给正确的目标句子比一个包含错误的对比变体赋予更高的分析，认为这是一个正确的决定。在测试集中，模型的准确性仅仅是正确的目标句子高于所有对比变体的百分比。

table1：一个对比的例子

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-2553144813.png)

词义消歧，使用ContraWSD,German->English翻译，ContraWSD使用德语对应歧义词替换英语。

使用2017 WMT翻译news数据

## 主谓一致

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-1235318782.png)

Transformer长距离依赖的评分最高。RNN-bideep与之很接近。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-1349902472.png)

RNN-bideep在13距离之后，捕获长距离依赖能力大于Transformer

### 针对CNNs研究

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-1973246227.png)

随着layer增加，BLEU获得了提升，随着Kernel增加，长距离捕获能力增加，但BLEU反而没有提升。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-1688504391.png)

CNNs的长距离捕获能力没有RNNs好。

CNNs受限的context size可能是影响性能的主要原因，参数之间的距离变化是灵活的。

### RNNs vs. Transformer

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-4176198085.png)

作者调整了参数，并且使用小的训练数据对RNNs和Transformer进行了对比，发现多头数量对长依赖能力的影响。

## WSD词义消歧

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-4144459600.png)

可以看到Transformer的Acc比RNNs和CNNs都高出很多。并且作者做了TransRNN（使用Tranformer的encode和RNN的decoder）的实验，发现BLEU和WSD高于RNN低于原始Tranformer。语义特征的影响不只是Encoder，还有decoder。

## Post-publication Experiments

作者又做了很多实验，防止模型参数，结构的影响，（使用fairseq 训练更深的CNNs，应用Transformer的架构到CNN和RNN中），结果同样表明，RNN的长序列依赖捕获能力强。Tranformer语义特征提取能力强，

## 结论

评估NMT模型架构的性能需要找到内在因素的权衡，而不是仅仅观察BLEU评分。清楚这些因素对于进一步的工作是很有必要的。如何更好的结合self attention和RNN？如何解决CNN的长距离捕获能力问题？

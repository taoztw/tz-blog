---
title: 2018_ACL_The_Best_of_Both_Worlds:_Combining_Recent_Advances_in_Neural_Machine_翻译笔记
date: 2021-09-28
lastmod: 2021-09-28
tags: ['AI']
draft: false
summary: 这篇论文提出了改进的RNMT+模型,单模型效果优于Transformer和原始RNN。作者对多头注意力、层归一化等技术进行了消融分析,并通过混合Transformer和RNMT+的编码器和解码器,实验出了更好的模型架构。
layout: PostSimple
---

> The Best of Both Worlds: Combining Recent Advances in Neural Machine Translation Google AI 2018 ACL

这篇论文，作者根据Transformer的架构和训练设计了RNMT+，单模型效果好于Transformer和原始RNN。

并且对多头注意力，层归一化，同步训练，label smoothing技术进行了消融分析。

不同方式混合Transformer和RNMT+的编码器和解码器，实验出了更好的模型架构。

## Introduction

RNN基础的NMT模型2016年在百度，google，systran公司大规模工业应用。RNMT之后，基于卷积的翻译模型训练速度和效果优势展现了更好的性能(ConvS2S)。Transformer提出self attention和feed forward架构在翻译质量和收敛速度都获得进步。

1. 在消融研究中，量化了模型的提升（多头注意力和层归一化）和优化技术（synchronous replica training和label smoothing），演示了不同模型的相关技术应用
2. 提出了改进后的RNMT+模型，效果优于所有基础模型。在模型质量，大小，训练和推理速度分析比较了RNMT+, ConvS2S,Transformer
3. 针对单个模型的缺点，提出了RNMT和Transformer结合的模型，获得了更好的结果

> Massive exploration of neural machine translation architectures.作者研究了NMT架构对翻译效果的影响
>
> Stronger Baselines for Trustable Results in Neural Machine Translation。作者证明了了三种加强NMT系统的具体技术

## Background

### RNN-based NMT Models -RNMT

Google-NMT encoder采用1个双向LSTM层和7个单向LSTM层。decoder由一个注意力网络和8个单向LSTM layers组成。encoder和decoder在层之间使用残差连接。作者使用GNMT作者RNMT+的基础架构

## Convolutional NMT Models - ConvS2S

positional information 提供位置信息。为了稳定的训练，作者scale encoder的梯度。在每个卷积层添加了residual connections。应用weight normalization加速收敛

### Conditional Transformation-based NMT Models - Transformer

Transformer解决了两个问题：RNN encoder中的序列依赖问题，加速训练。convS2S中的上下文窗口大小问题。

每一个sublayer（self-attention, cross-attention ,feed-forward ）计算序列相同，normalize-transform-dropout-residual-add。编码器的最后输出也要归一化，防止residual-add的blow up。

### A Theory-Based Characterization of NMT Architectures

从理论上看，RNN具有最强的表达能力，有无限的马尔可夫结构，可以有效的建模序列数据。但RNN很难训练。

卷积固定的，狭窄的接受域限制了信息的获取，但是可以通过叠加更多的卷积层，比如叠加15层缓解这一弱点。但这样带来的问题就是难以训练。

Transformer可以认为是一个强大的特征提取器，可以从整个序列中获得信息。但是没有序列的信息,需要添加额外的位置信息。

## Experiment Setup

WMT14 EN-Fr 36.3M En-De4.5M

模型收敛后，选定一个窗口内的所有模型进行测试评分平均 。防止偏差。

## RNMT+

![RNMT+模型架构](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-3118539119.png)

如图，在embedding和每一层上都使用了Dropout。

label smoothing：作者发现模型使用label smoothing训练，使用大的beam size，如16，20会带来好的效果。

weight decay：L2正则 $\lambda=10^{-5}$。EN-DE数据较少，只对en-de采取该方法

Adam optimizer，learning rate shedule，简单的说就是在warmup steps中线性增加学习率，然后指数衰减，最终保持在$5*10^{-5}$,这样的方法在训练非常大的batch size Resnet-50 取的成功。

使用synchronous training，提升模型收敛速度和模型质量。还对梯度进行了一些操作（裁剪等）。

### 模型分析比较

RNMT+ 4096 sents batch。convS2S Transformer采用65536 tokens batch（一个句子长度是16个tokens）训练。

对于En-Fr数据集上的训练：

![En-Fr test BLEU](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-1530106400.png)

En-De数据集训练：

![En-De test BLEU](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-4021625620.png)

上面两次训练，RNMT+都取得了较好的BLEU分数，并且收敛后标准差很小。

性能比较：

![模型性能比较](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-1643035177.png)

## 消融研究

对label smoothing, multi-head attention, layer norm, sync Training.四个技术在RNMT+和Transformer模型上进行消融分析。 `*`表示训练不稳定

![消融研究分析RNMT+&Transformer](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-3400296103.png)

Layer norm是稳定训练模型的关键。

作者发现 同步训练只有在与learning rate schedule结合时才会成功。

## 混合NMT模型

混合RNMT+模型和Transformer模型的编码器和解码器

![混合编码器解码器En-Fr test BLEU](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-2672979706.png)

Transformer编码器特征提取的能力更强。RNMT+的解码器更强。证明了直觉，有状态的Decoder生成效果较好。

下一步解码器确定为RNMT+，垂直水平混合编码器。

![不同混合方式](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-1058408684.png)

Cascaded Encoder冻结了RNMT+ Encoder（避免优化困难），微调Transformer Encoder。BLEU得到提升，说明使用RNN结构提取序列信息后，Transformer能够提取到更丰富的表示。

Multi-Column，主要在于如何合并两个模型的信息到统一的表示上。实验表明concat的效果最好。

![垂直水平混合比较](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-3488055788.png)

## Conclusion

这样的新架构如何处理多语言翻译问题？在bytes或characters输入下哪种架构更有效？ 每种架构的典型错误是什么？

## 模型参数说明

RNMT+：

hidden size，embedding size=1024，将双向输出2048投影为1024.使用4个注意力头

![RNMT+ learning rate schedule](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-508990219.png)

EN-DE:p=500,s=600000,e=1200000,所有dropout=0.3，$\lambda=10^{-5}$

EN-Fr:p=500,s=1200000,e=3600000,dp=0.2

使用32个GPU同步训练

Transformer Big ：

![Transformer learning rate schedule](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-09-1444399149.png)

dimension 1024, hidden dimension 8192 and 16 attention heads.

En-De：dp=0.1,r0=2，p=8000(normal)

For the Trans-former Big model, only residual dropout and input dropout are applied.dp=0,3,r0=3.0,p=40000（En-Fr相同）学习率从4.6875e-8 增加到4.68e-4然后慢慢减小，50万步学习率0.00013258238889015506

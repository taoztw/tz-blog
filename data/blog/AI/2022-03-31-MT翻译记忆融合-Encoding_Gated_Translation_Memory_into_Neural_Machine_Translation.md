---
title: MT翻译记忆融合-Encoding_Gated_Translation_Memory_into_Neural_Machine_Translation
date: 2022-03-31
lastmod: 2022-03-31
tags: ['AI']
draft: false
summary: 这篇文章提出了一种将翻译记忆(TM)融入神经机器翻译(NMT)的方法。通过两个独立的编码器对输入和TM匹配进行编码,并使用TM门控网络计算权重,将TM信息加权融入翻译生成过程。实验验证了不同模糊匹配分数(FMS)对结果的影响,并分析了TM门控值与语义相似度的关系。
layout: PostSimple
---

> Encoding Gated Translation Memory into Neural Machine Translation

将翻译记忆融入NMT中。

在TM中找到与输入最相似的句子，通过两个独立的encoder对输入和TM匹配分别编码，将二者编码通过TM gating Nerwork（sigmoid）计算出权重，加权与其他信息生成y_t。

模型结构：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-889268367.png)

在输入和TM匹配时，作者采用如下公式fuzzy match score（FMS）：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-3823838402.png)

验证了不同的FMS对结果的影响：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-3549224305.png)

并且将参考译文作为TM匹配输入，分析得出，TM gated的值在语义近似度大时越大

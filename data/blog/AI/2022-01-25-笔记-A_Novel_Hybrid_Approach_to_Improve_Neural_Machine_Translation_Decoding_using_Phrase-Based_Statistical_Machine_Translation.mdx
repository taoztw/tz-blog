---
title: 笔记-A_Novel_Hybrid_Approach_to_Improve_Neural_Machine_Translation_Decoding_using_Phrase-Based_Statistical_Machine_Translation
date: 2022-01-25
lastmod: 2022-01-25
tags: ['AI']
draft: false
summary: 这篇文章提出了一种结合短语统计机器翻译(SMT)来改进神经机器翻译(NMT)解码的混合方法。在beam search过程中,如果SMT翻译的token存在于beam中,就将其概率提升至beam中的最大概率。实验结果显示,该方法在某些策略下可以小幅提升BLEU和METEOR分数。
layout: PostSimple
---

> A Novel Hybrid Approach to Improve Neural Machine Translation Decoding using Phrase-Based Statistical Machine Translation 2021

使用SMT指导NMT翻译；在beam search 过程中，如果SMT翻译的token存在beam中，那么就让该token的概率与当前beam中最大概率相等。为了让NMT能够使用SMT的翻译结果，需要将SMT的输出进行bpe encode。

实验中尝试了应用该方法的三个策略：

- 1. 只在最开始的几个token decode step 最大化SMT结果概率
- 2. 如果SMT结果存在beam 就最大化SMT结果概率
- 3. 整的decode过程都最大化SMT结果概率。

实验结果显示1，2的效果比较好。BLEU最大提升0.2， METEOR最大提升0.3。提升很小。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-01-984562737.png)

数据：WMT2018 英德 德英，3,533,496

SMT：mose短语翻译模型 KenLM语言模型 giza++对齐模型

NMT：Transformer（Google 原始参数）

16k subword vocab；beam size 5；traning step 100k

给出的一个案例：

系统的流程：首先SMT进行Translate，然后对结果BPE encode，与NMT用作者提出的beam search解码，最后将输出decoding by BPE。

German -> English

原文：München 1856 : vier Karten , die Ihren Blick auf die Stadt verändern

SMT：Munich 1856 : four cards , which your attention to the city of change

SMT encode by BPE：▁Munich ▁18 56 ▁: ▁four ▁cards ▁, ▁which ▁your ▁attention ▁to ▁the ▁city ▁of ▁change

Reference：Munich 1856 : four maps that will change your view of the city

第一步：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-01-3546663524.png)

对于NMT的候选来说，SMT 结果\_Munich 存在与NMT候选中，所以将`_Munich`的概率与`_there`相等

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-01-2282842410.png)

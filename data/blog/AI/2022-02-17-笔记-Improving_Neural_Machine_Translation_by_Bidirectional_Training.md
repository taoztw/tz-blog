---
title: 笔记-Improving_Neural_Machine_Translation_by_Bidirectional_Training
date: 2022-02-17
lastmod: 2022-02-17
tags: ['AI']
draft: false
summary: 这篇文章提出了一种名为BiT的新方法,通过使用双向模型作为单向模型的初始化来提高机器翻译性能。BiT方法在训练早期阶段将源语言到目标语言的数据组合为源语言+目标语言到目标语言+源语言的形式进行预训练,然后再使用常规的源语言到目标语言数据进行训练。实验表明,BiT方法在8个语言对上都取得了优于现有最佳方法的性能提升,并且能提高模型的对齐质量和低资源场景下的效果。
layout: PostSimple
---

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-02-2943632440.png)

核心idea：使用双向模型作为单向模型的初始化。

将src->tgt数据 组合为 src+tgt -> tgt+src进行第一步（早期）（预）训练，然后再使用src->tgt训练。训练不修改模型结构，不增加额外的训练损失。

在8个语言对（数量160k-38M）上提高了SOTA的性能。

在总训练步数的1/3处停止了训练

BPE 32K

beam size 5 ，length penalty 1.0

大batch size，458k

训练细节：

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-02-1480253527.png)

作者验证了不同的early-stop step，都有较好的性能。选出一个简单有效的1/3。

针对不同训练数据集大小的验证

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-02-1588951904.png)

针对远距离语言对的验证

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-02-1132216017.png)

增加了三种数据操作查看BLEU，Tagged Back Translation（BT），Knowledge Distillation（KD）， data diversification（DD）

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-02-201265600.png)

与其他的模型进行了比较

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-02-3150851693.png)

作者还证明了，BiT能够提高对齐质量，和低资源场景模型效果。

**经过tensor2tensor Transformer复现BiT方法，结果BLEU 提升均值 1.1。**

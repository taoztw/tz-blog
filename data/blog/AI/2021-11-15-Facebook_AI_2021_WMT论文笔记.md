---
title: Facebook_AI_2021_WMT论文笔记
date: 2021-11-15
lastmod: 2021-11-15
tags: ['AI']
draft: false
summary: Facebook AI在WMT21新闻翻译任务中采用了多语言翻译模型和Mixture-of-Expert技术，在14个翻译方向上取得了第一名的成绩。他们使用了加深的Transformer模型作为基线，并通过大规模回译、增加训练数据、模型微调和模型平均等技术进一步提升了翻译质量。
layout: PostSimple
---

> Facebook AI’s WMT21 News Translation Task Submission

自动评测14个方向第一。

采用了热门的多语言翻译模型，使用Mixture-of-Expert（MoE ）模型，在不大量增加模型参数前提下，实现了较好的效果。（back translation，finetuning，averaging，rerank）

对于baseline模型，使用了加深的Transformer，batch size 76800 tokens，学习率 0.001, Adam优化器

![Dense Transformer配置](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-11-1460627793.png)

大规模的回译，每个语言有500million数据。

训练数据增加，加深和加宽模型

微调10个epoch，选择验证集loss最低的模型。

平均最后5个模型。

为了解决finetuning容易过拟合的问题，将微调后的模型和初始训练的valid loss低的模型进行average

加深模型可能会带来不好的结果，可能有点过拟合。

对于训练数据较多的方向，使用back translation会使模型效果下降一点。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-11-1610669092.png)

Figure 1表示，微调修正了过拟合。

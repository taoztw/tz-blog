---
title: 增强术语翻译（修改输入）-Training_Neural_Machine_Translation_To_Apply_Terminology_Constraints_
date: 2022-03-31
lastmod: 2022-03-31
tags: ['AI']
draft: false
summary: 这篇文章介绍了一种通过在输入中增加目标端术语信息来提高神经机器翻译模型术语翻译能力的方法。该方法使用replace和append两种方式添加术语注解，让模型学习"复制机制"，并考虑术语的形态变化。研究结果显示这种方法可以提高术语翻译准确性，但在BLEU评分上有所下降，且通用性有限。
layout: PostSimple
---

> Training Neural Machine Translation To Apply Terminology Constraints

在输入中通过replace和append两种方式增加目标端术语信息（annotations），让模型学到一种“复制机制”，从而提高术语翻译能力，同时该方法对也可以考虑到术语的形态变化。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-162435048.png)

- 希望模型在一般情况和有注解情况下性能都好，所以限制注解的数量。（通过随机忽略一些匹配）
- 在术语重叠的情况下保留最长匹配。使用近似匹配来允许术语的形态变化。作者使用简单的字符序列匹配，允许将基本单词形式视为匹配，即使是变形的或者作为复合词的一部分。
- 为了避免spurious虚假匹配。过滤掉了500个频率最高的的术语。

**术语约束的解码方式BLEU下降**

![image-20220330171913081.png](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-3711669738.png)

**结果**

![image-20220330172619090.png](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2022-03-2862243651.png)

> 没有通用性。

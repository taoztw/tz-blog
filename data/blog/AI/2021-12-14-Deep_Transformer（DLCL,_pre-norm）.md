---
title: Deep_Transformer（DLCL,_pre-norm）
date: 2021-12-14
lastmod: 2021-12-14
tags: ['AI']
draft: false
summary: 这篇文章提出了两种方法来改进Transformer模型用于机器翻译:pre-norm和dlcl。这些方法可以训练更深的网络,缓解梯度消失问题,同时减小模型大小并加快训练速度。实验结果显示BLEU分数提升0.4-2.4分,但整体性能提升不大。
layout: PostSimple
---

> Learning Deep Transformer Models for Machine Translation ACL

提出了两个方法,pre-norm和dlcl，比transformer big 更小的模型大小 和更快的训练。BLEU提升0.4～2.4.

通过这个方法 可以训练更深的网络，缓解梯度消失的问题。但是性能没有很大的提升。

## pre-norm

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-12-1836475694.png)

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-12-353755345.png)

通过求导可以发现在网络更深时候$l$较大时候，post-norm容易出现梯度消失，![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-12-3450908376.png).

## Dynamic Linear Combination of Layers

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-12-696447278.png)

![pre-norm式子](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-12-3417847989.png)

![post-norm式子](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-12-1415597430.png)

W是一个learnable参数。

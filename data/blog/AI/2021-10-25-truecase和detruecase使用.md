---
title: truecase和detruecase使用
date: 2021-10-25
lastmod: 2021-10-25
tags: ['AI']
draft: false
summary: truecase模型文件的结构和使用方法。文章解释了模型如何记录单词的大小写出现次数,以及在truecase过程中如何保留某些词的原有大小写形式。最后提到通常需要在truecase后进行detruecase,以恢复句首字母的大写。
layout: PostSimple
---

训练出来的模型文件：

![truecase model文件](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-2440191718.png)

如`satisfying (368/370) Satisfying(2)` 370是语料中单词出现的总次数，2，368分别是大小写对应出现的次数。在truecase中，只要模型文件中，出现过该词的任一形式，原句子改词就不会改变。如：

![expected大小写形式](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-10-3243014253.png)

truecase句子：hello tbc to EXPECTED for the acf

结果为：hello tbc to EXPECTED for the acf

通常在truecase之后，需要进行detruecase。truecase保留了一些固有名词的大写形式，但有时会使得句子首字母小写。detruecase是为了让句子首字母恢复大写。

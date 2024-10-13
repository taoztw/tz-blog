---
title: 翻译-Finding_the_Words_to_Say:_Hiddent_State_Visualizations_for_Language_Models
date: 2021-08-31
lastmod: 2021-08-31
tags: ['AI']
draft: false
summary: 这篇文章介绍了通过可视化GPT2-XL语言模型隐层状态来探索模型思考过程的方法。文章展示了如何将隐层状态映射到词表并使用softmax计算概率,以及如何查看每层输出token的排名变化,从而分析模型在不同层级的决策过程。通过这些可视化技术,可以洞察模型的内部工作机制,包括句子结构识别、关键词预测以及潜在的性别偏见等。
layout: PostSimple
---

> Finding the Words to Say: Hiddent State Visualizations for Language Models
>
> 翻译：https://jalammar.github.io/hidden-states/

通过可视化语言模型GPT2-XL隐层的状态，可以找到模型思考过程的一些蛛丝马迹。

## 将隐层映射到词表并softmax

> output token score

通过查看transformer每一个decoder block的hidden states，将hidden states映射到词表，通过softmax计算每个单词的对应的概率。这样就可以获得每一层对输出的贡献。

我们在网络输入`1,1,` ，我们可以分析出下一个预测的结果是1，从下图可以看到transformer 6层中每层的前10位预测概率，可以发现概率在不断增加，并且在最后一层inject a bit more caution（概率从100%下降到59.79%）

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-08-3326546404.png)

## 查看每层的输出token的排名

> Evolution of Selected Token

输入`1,1,1,`,输出`1,1`，如图根据排名的信息，可以衡量模型的确信度。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-08-1765639476.png)

分析GPT2-Large，对于以下的输入，可以发现这个输入的形式比较明确

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-08-629979896.png)

下图可以看到:

1. 模型在第0层已经学到了句子格式的信息，之后的layer并没有对layer 0的结果有很大的影响。
2. 在预测对应国家单词的时候，模型在最后五层才真正找到对应的token。根据数字信息来看大多数在第9层解决
3. Chile这个单词预测出现了错误，但是token的排名是43，这说明错误的产生可以能不是模型本身的错误，而是解码（采样）方法的问题。
4. 其他的都是正确的。但也并不是所有正确token的位置都是1.

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-08-3615407868.png)

## 比较相同位置的多个token排名

> Comparing Token Rankings

The key**s** to the cabinet **\_\_**,对于这个填空问题，接受的答案是 **is** 或者 **are**，为了回答正确首先要判断主语是**keys**还是**cabinet**，如果决定是**keys**，那还需要判断单复数。如下图，通过对比我们可以观察到模型的最终结果是对的，但是模型前五层并没有识别出正确的排名（is高于are）。这类似于bert（the final layer being the most task-specific）；这也许可能是完成任务的能力局限于layer 5 或者 该层知识与主谓特别敏感。这可能需要对注意力或内层显著性进行分析。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-08-4242731496.png)

使用The key to the cabinet**s** **\_\_**与上句结果进行对比，模型能够将更高的排名分给is，这是正确的情况，但是are的排名仍然很高。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-08-482933655.png)

## 探索的偏见

下面的例子探究了不同职业的性别期望。对于医生来说，前五层的排名都高于女性，对于护理专业来说，最后一层将女性提升到比男性更高的地位。

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-08-2277035123.png)

> 使用一下colab继续分析分析
>
> output token score：https://colab.research.google.com/github/jalammar/ecco/blob/main/notebooks/Ecco_Output_Token_Scores.ipynb
>
> Evolution of Selected Token：https://colab.research.google.com/github/jalammar/ecco/blob/main/notebooks/Ecco_Evolution_of_Selected_Token.ipynb
>
> Comparing Token Rankings：https://colab.research.google.com/github/jalammar/ecco/blob/main/notebooks/Ecco_Comparing_Token_Rankings.ipynb

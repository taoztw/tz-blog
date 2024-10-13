---
title: tensor2tensor框架记录
date: 2021-12-09
lastmod: 2021-12-09
tags: ['AI']
draft: false
summary: 这篇文章主要讨论了tensor2tensor和tensorflow的版本依赖问题，以及一些重要参数的设置。文章重点介绍了学习率的计算方式，包括constant、linear_warmup、rsqrt_decay和rsqrt_hidden_size四个部分，并提供了一个Python函数来计算学习率。
layout: PostSimple
---

> tensor2tensor 1.13.2
>
> tensorflow 1.13.1

版本较老，pip自动安装会出现版本依赖问题。

`!pip install tensorflow-datasets==1.0.1`

默认参数主要layers/common_hparams.py，这里有一些参数的解释

训练的一些参数在 utils/trainer_lib.py

学习率，一般采用`constant*linear_warmup*rsqrt_decay*rsqrt_hidden_size`

分别的计算方式

`constant = hparams.learning_rate_constant 2`
`linear_warmup = tf.minimum(1.0, step_num / hparams.learning_rate_warmup_steps 8000)`
`tf.rsqrt(tf.maximum(step_num, hparams.learning_rate_warmup_steps))`
`hparams.hidden_size ** -0.5   1024`

```python
def calc_lr(step, warmup_up=8000):
    constant = 0.2
    learning_rate_warmup_steps = warmup_up
    hidden_size = 1024
    linear_warmup = min(1.0, step / learning_rate_warmup_steps)
    rsqrt_decay = 1/math.sqrt(max(step, learning_rate_warmup_steps))
    rsqrt_hidden_size = hidden_size ** -0.5
    result = constant * linear_warmup * rsqrt_decay * rsqrt_hidden_size
    return result
```

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/2021-12-813467452.png)

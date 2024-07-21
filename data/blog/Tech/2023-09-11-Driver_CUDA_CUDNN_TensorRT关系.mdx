---
title: Driver_CUDA_CUDNN_TensorRT关系
date: 2023-09-11
lastmod: 2023-09-11
tags: ['Tech']
draft: false
summary: 这篇文章主要介绍了CUDA、CUDNN和TensorRT之间的关系，以及如何选择和安装这些组件的版本。文章指出CUDA版本通常与新一代显卡架构相对应，并建议根据显卡选择合适的CUDA版本。同时，文章还提供了TensorRT的推荐版本以及与CUDA和CUDNN的兼容性信息，并给出了安装过程中的一些注意事项。
layout: PostSimple
---

## Driver CUDA CUDNN TensorRT关系

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/image-20230911014706277.png)

## 选择版本

1、自2016年以来，**每新出一代显卡，为了支持显卡的新特性**， **CUDA会对应更新一个大版本**。根据显卡架构选择**当代或者下一代的CUDA**。比如T4选择安装CUDA10.2 或者 CUDA11.x。不建议跨太大版本，有可能会存在负优化情况

![](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/image-20230911014027437.png)

2017年 Volta架构 CUDA 9

2018年Turing架构 CUDA 10

2020年Ampere架构 CUDA11

2022年Hopper架构 CUDA 12

> 10.0 和10.1不建议使用

2、TensorRT近几年更新比较频繁，只建议选择**稳定版本**，推荐三个版本：TensorRT6.0GA，TensorRT7.2.3和TensorRT8.5GA。TRT对CUDA和CUDNN版本有强要求。

TensorRT6.0GA 支持CUDA9.0 10.0 10.1 10.2

TensorRT7.2.3 支持 CUDA 10.2 11.0 11.1 11.2

TensorRT8.5GA 支持所有cuda 11版本

比如T4显卡，推荐组合就是CUDA10.2 + TensorRT7.2.3 和CUDA 11.0、11.2 + TensorRT8.5GA.

确定CUDA版本和TensorRT版本。CUDANN版本就确定下来了

## 安装

CUDA driver：https://www.nvidia.com/download/index.aspx

> Driver安装可以安装版本高一些，就可以共存多个版本的CUDA

CUDA版本和驱动版本要求：https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html

CUDA各个版本：https://developer.nvidia.com/cuda-toolkit-archive

TensorRT各个版本：https://developer.nvidia.com/nvidia-tensorrt-download

CUDNN各个版本：https://developer.nvidia.com/rdp/cudnn-archive

## 其他安装时候注意的

> 查看nvidia GPU的信息

lshw -class display

> 安装kernel-devel

必须安装kernel-devel和gcc内核

`yum install "Development Tools"`
`sudo yum install kernel-devel`

必须安装 dkms才能向DKMS注册Nvidia的内核模块

` yum -y install epel-release`
`yum -y install dkms`

> 禁用nouveau

```markdown
lsmod | grep nouveau # 查看是否安装了nouveau，有结果表示正在使用nouveau
vim /etc/modprobe.d/blacklist-nouveau.conf # 创建新文件，文件中加入下面两句代码
blacklist nouveau
options nouveau modeset=0

dracut --force
reboot

lsmod | grep nouveau # 没有结果表示禁用成功
```

> 查看内核版本

ls /boot | grep vmlinu

> 查看源码版本

rpm -aq | grep kernel-devel

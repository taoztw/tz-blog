---
title: python_cookbook
date: 2022-04-20
lastmod: 2022-04-20
tags: ['Ongoing']
draft: false
summary: Python文件操作和多进程编程的一些技巧。文章讨论了如何处理文件读取时的换行符和编码错误，介绍了Python的-u选项用于关闭输出缓冲，并提供了设置pip源的方法。最后，文章展示了一个使用多进程写文件的Python代码示例。
layout: PostSimple
---

```python
with open(file,'rt',encoding='utf-8',newline='',errors='replace') as f:
	...
```

rt模式下，python在读取文本时会自动把\r\n转换成\n.

如果不希望python读取文件时处理其他换行符为\n，添加 newline=''参数。

如果读取文件中有编码错误，可以使用errors=replace（在错误的地方插入"?"）或ignore处理，但是这些不可逆，python还提供 `surrogateescape`的可逆方式，具体看链接。[stackoverflow_ingore reading a file error](https://stackoverflow.com/questions/24616678/unicodedecodeerror-in-python-when-reading-a-file-how-to-ignore-the-error-and-ju)

## python -u

python 重定向后，会默认启用输出缓冲区，直到程序结束或者缓冲区满才会打印内容。

python -u 关闭缓冲区 立刻输出。

nohup python -u 1.py 1>2.log 2>&1 &

## pip 源

```markd
# 清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 或：
# 阿里源
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
# 腾讯源
pip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple
# 豆瓣源
pip config set global.index-url http://pypi.douban.com/simple/
```

## 多进程写文件

```python
from multiprocessing import Pool


def setcallback(line):
    with open('result.txt', 'a+') as f:
        f.write(line + '\n')


def run(num):
    return str(num * 2)


pool = Pool(processes=6)
for i in range(10):
    pool.apply_async(func=run, args=(i,), callback=setcallback)
pool.close()
pool.join()
```

文件结果：

0
4
2
6
8
12
10
14
16
18

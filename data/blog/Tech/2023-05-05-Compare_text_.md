---
title: Compare_text_
date: 2023-05-05
lastmod: 2023-05-05
tags: ['Tech']
draft: false
summary: 使用Python的difflib库生成两个序列之间的差异，并以类似Word的track change方式展示。文章提供了一个Python代码示例，展示了如何使用SequenceMatcher类来比较两个字符串，并根据不同的样式选项生成带有HTML标记的差异结果。
layout: PostSimple
---

给定seq1,seq2 ，生成seq1到seq2的track change（类似word）。

https://docs.python.org/3/library/difflib.html

![image-20230505002310527](https://tz-1256822507.cos.ap-hongkong.myqcloud.com/typora/image-20230505002310527.png)

```python

seq1 = "abycdf"
seq2 = "qabxcd"

from difflib import SequenceMatcher
matcher = SequenceMatcher(None, seq1, seq2)

result = []
style = 'red'

if style == 'none':
    md_styles = {"ins": ('ins', 'ins'), "del": ('del', 'del')}
elif 'red':
    md_styles = {"ins": ('span style="color:red;font-weight:700;"', 'span'),
                 "del": ('span style="color:red;font-weight:700;text-decoration:line-through;"', 'span')}

for tag, i1, i2, j1, j2 in matcher.get_opcodes():
    if tag == 'equal':
        result.append("".join(seq1[i1:i2]))
    elif tag == 'insert':
        result.append(f"<{md_styles['ins'][0]}>{''.join(seq2[j1:j2])}</{md_styles['ins'][1]}>")
    elif tag == 'delete':
        result.append(f"<{md_styles['del'][0]}>{''.join(seq1[i1:i2])}</{md_styles['del'][1]}>")
    elif tag == 'replace':
        result.append(
            f"<{md_styles['del'][0]}>{''.join(seq1[i1:i2])}</{md_styles['del'][1]}>"
            f"<{md_styles['ins'][0]}>{''.join(seq2[j1:j2])}</{md_styles['ins'][1]}>")

print("".join(result))
```

生成结果

```html
<span style="color:red;font-weight:700;">q</span>ab
<span style="color:red;font-weight:700;text-decoration:line-through;">y</span>
<span style="color:red;font-weight:700;">x</span>cd
<span style="color:red;font-weight:700;text-decoration:line-through;">f</span>

<ins>q</ins>ab<del>y</del> <ins>x</ins>cd<del>f</del>
```

> Github 项目
>
> https://github.com/houfu/redlines/issues/2

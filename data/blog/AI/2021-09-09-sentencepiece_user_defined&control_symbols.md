---
title: sentencepiece_user_defined&control_symbols
date: 2021-09-09
lastmod: 2021-09-09
tags: ['AI']
draft: false
summary: SentencePiece库中用户自定义符号和控制符号的使用方法。用户自定义符号在任何上下文中都被视为一个token，可以在输入句子中出现；而控制符号只保留ID，即使出现在输入文本中也不会被作为一个token处理，用户需要在编码后显式插入ID。
layout: PostSimple
---

> https://github.com/google/sentencepiece/blob/master/python/sentencepiece_python_module_example.ipynb

https://github.com/taoztw/note/blob/master/Sentencepiece_python_module_example.ipynb

\- **\*\*user defined symbols\*\***: Always treated as one token in any context. These symbols can appear in the input sentence.

\- **\*\*control symbol\*\***: We only reserve ids for these tokens. Even if these tokens appear in the input text, they are not handled as one token. User needs to insert ids explicitly after encoding.

```python
# 用户自定义的user_sysbols可以作为一个vocab在encode和decode过程中进行保留。
print(sp_user.encode_as_pieces('this is a test<sep> hello world<cls>'))
# output: ['▁this', '▁is', '▁a', '▁t', 'est', '<sep>', '▁he', 'll', 'o', '▁world', '<cls>']
print(sp_user.decode_pieces(['▁', '<s>','<sep>','<cls>', '▁he', 'll', 'o', '</s>']))
# output: <sep><cls> hello

# # control symbols需要在encode后，手动添加。并且decode不会保留。
print(sp_ctrl.encode_as_pieces('this is a test<sep> hello world<cls>'))
# output: ['▁this', '▁is', '▁a', '▁t', 'est', '<', 'se', 'p', '>', '▁he', 'll', 'o', '▁world', '<', 'c', 'l', 's', '>']
print(sp_ctrl.decode_pieces(['▁', '<s>', '▁he', 'll', 'o', '</s>']))
# output: hello
```

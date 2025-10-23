---
title: strcopy
sidebar_label: strcopy
description: 将源字符串复制到目标字符串中。
tags: ["字符串"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

将源字符串复制到目标字符串中。

| 参数名称                  | 说明                                 |
| ------------------------- | ------------------------------------ |
| dest[]                    | 接收复制内容的目标字符串             |
| const source[]            | 被复制的源字符串                     |
| maxlength = sizeof (dest) | 目标字符串的最大长度限制（可选参数） |

## 返回值

新目标字符串的长度。

## 示例代码

```c
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

new string[64];
strcopy(string, playerName); // 将playerName复制到string中
```

## 相关函数

- [strcat](strcat): 连接两个字符串到目标引用

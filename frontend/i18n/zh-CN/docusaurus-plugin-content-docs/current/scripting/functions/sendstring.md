---
title: sendstring
sidebar_label: sendstring
description: 发送包含字符串的数据包（已弃用函数）
tags: ["数据报"]
---

<LowercaseNoteZH_CN />

:::warning

此函数已弃用，请使用[HTTP](HTTP)或[pawn-requests 插件](https://github.com/Southclaws/pawn-requests)

:::

## 描述

发送包含字符串的网络数据包。

| 参数                     | 说明                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| const message[]          | 包含要发送字符串的缓冲区。如果是未打包的字符串，传输前会进行 UTF-8 编码                  |
| const destination[] = "" | 数据包目标地址的 IP 和端口。若为空或未指定，将使用默认端口 9930 进行广播 _(可选参数="")_ |

## 返回值

**1** 表示成功，**0** 表示失败。

## 相关函数

- [@receivestring](@receivestring): 接收字符串数据包时触发
- [sendpacket](sendpacket): 发送通用数据包

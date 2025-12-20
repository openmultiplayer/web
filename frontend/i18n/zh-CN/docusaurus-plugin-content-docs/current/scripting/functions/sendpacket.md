---
title: sendpacket
sidebar_label: sendpacket
description: 发送数据包（已弃用函数）
tags: ["数据报"]
---

<LowercaseNoteZH_CN />

:::warning

此函数已弃用，请使用[HTTP](HTTP)或[pawn-requests 插件](https://github.com/Southclaws/pawn-requests)

:::

## 描述

发送网络数据包。

| 参数                     | 说明                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| const packet[]           | 包含要发送数据包的缓冲区                                                                 |
| size                     | 缓冲区大小                                                                               |
| const destination[] = "" | 数据包目标地址的 IP 和端口。若为空或未指定，将使用默认端口 9930 进行广播 _(可选参数="")_ |

## 返回值

**1** 表示成功，**0** 表示失败。

## 相关函数

- [@receivepacket](@receivepacket): 接收数据包时触发
- [sendstring](sendstring): 发送包含字符串的数据包

---
title: listenport
sidebar_label: listenport
description: 设置监听的端口号
tags: ["数据报文"]
---

<LowercaseNoteZH_CN />

:::warning

该函数已弃用，请使用 [HTTP](HTTP) 插件或 [pawn-requests](https://github.com/Southclaws/pawn-requests) 插件替代

:::

## 描述

设置服务器监听的端口号。

| 参数名 | 说明                                             |
| ------ | ------------------------------------------------ |
| port   | 要监听的端口号 (1-65535)，应避免使用系统保留端口 |

## 返回值

本函数总是返回 **0**

## 注意事项

:::warning

- 必须在接收首个数据包**之前**调用此函数，通常应在 `main` 函数中配置
- 若未明确指定端口，默认监听 **9930** 端口

:::

## 相关函数

- [@receivestring](@receivestring): 接收字符串数据包时触发
- [sendstring](sendstring): 发送包含字符串的数据包

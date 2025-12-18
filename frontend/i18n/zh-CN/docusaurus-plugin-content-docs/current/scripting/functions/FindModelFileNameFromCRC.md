---
title: FindModelFileNameFromCRC
sidebar_label: FindModelFileNameFromCRC
description: 查找现有的自定义皮肤或简单物体模型文件。
tags: ["自定义模型", "自定义皮肤", "简单模型"]
---

<VersionWarnZH_CN version='SA-MP 0.3.DL R1' />

## 描述

根据 CRC 校验和查找已存在的自定义皮肤或简单物体模型文件。模型文件默认存储在服务器的 models 目录下（通过 artpath 配置指定）。

| 参数                   | 说明                                        |
| ---------------------- | ------------------------------------------- |
| crc                    | 自定义模型文件的 CRC 校验和                 |
| output[]               | 用于存储.dff 文件名的数组（通过引用传递）   |
| size = sizeof (output) | 需存储的字符串长度，默认值为 sizeof(output) |

## 返回值

**1:** 函数执行成功。

**0:** 函数执行失败。

## 相关函数

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): 当玩家完成自定义模型下载时触发此回调

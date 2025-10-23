---
title: heapspace
sidebar_label: heapspace
description: 返回堆/栈内存的可用空间（单位：字节）。
tags: ["核心"]
---

<LowercaseNoteZH_CN />

## 描述

返回当前堆/栈内存的可用空间（单位：字节）。

## 示例

```c
public OnGameModeInit()
{
    printf("堆内存空间：%i KB", heapspace() / 1024);
    return 1;
}
```

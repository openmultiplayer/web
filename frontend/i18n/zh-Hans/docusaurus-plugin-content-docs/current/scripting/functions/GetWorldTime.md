---
title: GetWorldTime
sidebar_label: GetWorldTime
description: 获取当前世界时间。
tags: ["世界时间"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取服务器当前的全局世界时间。

## 示例

```c
SetWorldTime(12);

printf("当前世界时间：%d", GetWorldTime());
// 输出将为"当前世界时间：12"
```

## 相关函数

- [SetWorldTime](SetWorldTime): 为所有玩家设置全局时间（精确到小时）
- [SetPlayerTime](SetPlayerTime): 设置玩家独立时间显示

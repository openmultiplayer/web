---
title: GetRunningTimers
sidebar_label: GetRunningTimers
description: 获取当前运行的定时器数量
tags: []
---

:::warning

此函数已弃用，请使用[CountRunningTimers](CountRunningTimers)

:::

## 描述

获取当前通过[SetTimer](SetTimer)和[SetTimerEx](SetTimerEx)创建的运行中定时器数量

## 返回值

当前激活的定时器总数

## 示例代码

```c
printf("正在运行的定时器数量: %d", GetRunningTimers());
```

## 相关函数

- [SetTimer](SetTimer): 创建基础定时器
- [SetTimerEx](SetTimerEx): 创建带参数的定时器
- [KillTimer](KillTimer): 终止指定定时器

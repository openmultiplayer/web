---
title: CountRunningTimers
sidebar_label: CountRunningTimers
description: 获取当前运行的定时器数量。
tags: ["定时器"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取通过[SetTimer](SetTimer)和[SetTimerEx](SetTimerEx)创建的正在运行的定时器数量。

## 返回值

返回当前运行的定时器数量。

## 应用示例

```c
printf("运行中的定时器数量: %d", CountRunningTimers());
```

## 关联函数

- [SetTimer](SetTimer): 创建基础定时器
- [SetTimerEx](SetTimerEx): 创建带参数的定时器
- [KillTimer](KillTimer): 终止正在运行的定时器

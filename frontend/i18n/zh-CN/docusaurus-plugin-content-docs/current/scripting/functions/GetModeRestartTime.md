---
title: GetModeRestartTime
sidebar_label: GetModeRestartTime
description: 获取主脚本加载之间的延迟时间（单位：秒）。
tags: ["核心", "配置"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取主脚本（游戏模式/滤镜脚本）加载之间的重启延迟时间。

## 返回值

返回以秒为单位的浮点型延迟时间。

## 示例代码

```c
SetModeRestartTime(5.0);  // 设置重启延迟为5秒

new Float:seconds = GetModeRestartTime();
printf("重启延迟时间: %.1f 秒", seconds); // 输出: 重启延迟时间: 5.0 秒
```

## 相关函数

- [SetModeRestartTime](SetModeRestartTime): 设置主脚本加载之间的延迟时间

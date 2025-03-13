---
title: GetWeather
sidebar_label: GetWeather
description: 获取当前全局天气。
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取服务器当前的全局天气状态。

## 示例

```c
SetWeather(19);

printf("当前全局天气：%d", GetWeather());
// 输出将为"当前全局天气：19"
```

## 相关函数

- [SetWeather](SetWeather): 为所有玩家设置全局天气
- [GetPlayerWeather](GetPlayerWeather): 获取玩家个人天气设置
- [SetPlayerWeather](SetPlayerWeather): 设置玩家独立天气效果

## 相关资源

- [天气 ID 对照表](../resources/weatherid)

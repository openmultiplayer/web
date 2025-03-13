---
title: GetPlayerWeather
sidebar_label: GetPlayerWeather
description: 获取玩家的天气ID
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定玩家的天气 ID

| 名称     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取天气信息的玩家 ID |

## 返回值

玩家当前的天气 ID 编号

## 示例代码

```c
SetPlayerWeather(playerid, 8);

printf("玩家天气ID：%d", GetPlayerWeather(playerid));
// 输出结果为"玩家天气ID：8"
```

## 相关函数

- [SetPlayerWeather](SetPlayerWeather): 设置玩家独立天气
- [SetWeather](SetWeather): 设置全局服务器天气

## 相关资源

- [天气 ID 列表](../resources/weatherid)

```

```

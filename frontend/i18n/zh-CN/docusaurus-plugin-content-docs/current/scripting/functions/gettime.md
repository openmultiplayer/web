---
title: gettime
sidebar_label: gettime
description: 获取服务器当前时间，并将小时、分钟和秒存储到指定变量中。
tags: ["时间"]
---

<LowercaseNoteZH_CN />

## 描述

获取服务器当前时间，并将小时、分钟和秒存储到指定变量中。

| 参数名    | 说明                                     |
| --------- | ---------------------------------------- |
| &hour=0   | 存储小时的变量（通过引用传递，默认值 0） |
| &minute=0 | 存储分钟的变量（通过引用传递，默认值 0） |
| &second=0 | 存储秒数的变量（通过引用传递，默认值 0） |

## 返回值

返回 Unix 时间戳。

## 示例

```c
new
	hours,
	minutes,
	seconds,
	timestamp;

timestamp = gettime(hours, minutes, seconds);
printf("%02d:%02d:%02d", hours, minutes, seconds);
printf("自1970年1月1日午夜起的秒数: %d", timestamp);
```

## 注意事项

:::tip

本函数通过返回时间戳的特性，特别适合用于测量时间间隔。例如实现指令冷却功能（如某个指令每 30 秒才能执行一次），无需依赖定时器即可实现精准时间控制。

:::

## 相关函数

- [getdate](getdate): 获取服务器当前日期

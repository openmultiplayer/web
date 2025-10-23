---
title: GetTimerInterval
sidebar_label: GetTimerInterval
description: 获取定时器的间隔时间。
tags: ["定时器"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取定时器的间隔时间。

## 参数

| 参数名  | 说明                      |
| ------- | ------------------------- |
| timerid | 要获取间隔时间的定时器 ID |

## 返回值

返回定时器的间隔时间（单位：毫秒）。

## 示例

```c
new g_Timer;

public OnGameModeInit()
{
    // 设置每分钟重复的定时器
    g_Timer = SetTimer("TimerCallback", 60000, true);

    // 获取并打印定时器间隔
    new interval = GetTimerInterval(g_Timer);
    printf("定时器ID %d 间隔: %d 毫秒", g_Timer, interval);
    return 1;
}
```

## 相关函数

- [SetTimer](SetTimer): 设置定时器
- [SetTimerEx](SetTimerEx): 带参数设置定时器
- [KillTimer](KillTimer): 终止定时器
- [IsValidTimer](IsValidTimer): 验证定时器有效性
- [IsRepeatingTimer](IsRepeatingTimer): 检测定时器是否循环
- [GetTimerRemaining](GetTimerRemaining): 获取定时器剩余时间
- [CountRunningTimers](CountRunningTimers): 统计运行中的定时器

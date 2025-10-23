---
title: IsValidTimer
sidebar_label: IsValidTimer
description: 检测定时器有效性
tags: ["定时器"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定定时器 ID 是否有效。

## 参数说明

| 参数名  | 说明              |
| ------- | ----------------- |
| timerid | 要检测的定时器 ID |

## 返回值

**true**: 定时器有效

**false**: 定时器无效

## 示例代码

```c
new g_Timer; // 全局定时器存储变量

public OnGameModeInit()
{
    // 创建每分钟循环的定时器
    g_Timer = SetTimer("TimerCallback", 60000, true);
    return 1;
}

public OnGameModeExit()
{
    if (IsValidTimer(g_Timer))
    {
        printf("定时器ID %d 有效，即将终止", g_Timer);
        KillTimer(g_Timer);
    }
    else
    {
        printf("定时器ID %d 无效", g_Timer);
    }
    return 1;
}
```

## 相关函数

- [SetTimer](SetTimer): 创建基础定时器
- [SetTimerEx](SetTimerEx): 创建带参数的定时器
- [KillTimer](KillTimer): 终止定时器运行
- [IsRepeatingTimer](IsRepeatingTimer): 检测定时器循环状态
- [CountRunningTimers](CountRunningTimers): 统计运行中的定时器数量

---
title: IsRepeatingTimer
sidebar_label: IsRepeatingTimer
description: 检测定时器是否设置为循环执行。
tags: ["定时器"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定定时器是否配置为循环模式。

## 参数说明

| 参数名  | 说明              |
| ------- | ----------------- |
| timerid | 要检测的定时器 ID |

## 返回值

**true**: 定时器为循环模式

**false**: 定时器为单次模式

## 示例代码

```c
new g_Timer; // 声明定时器存储变量

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true); // 创建每分钟循环的定时器

    if (IsRepeatingTimer(g_Timer))
    {
        // 执行循环模式相关操作
    }
    return 1;
}
```

## 相关函数

- [SetTimer](SetTimer): 创建基础定时器
- [SetTimerEx](SetTimerEx): 创建带参数的定时器
- [KillTimer](KillTimer): 终止定时器运行
- [IsValidTimer](IsValidTimer): 验证定时器有效性
- [CountRunningTimers](CountRunningTimers): 统计运行中的定时器数量

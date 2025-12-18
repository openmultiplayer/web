---
title: SetTimer
sidebar_label: SetTimer
description: 设置定时器在指定时间后调用函数。
tags: ["定时器"]
---

## 描述

设置定时器在指定时间间隔后触发函数调用，可配置是否重复执行。

| 参数                 | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| const functionName[] | 要调用的公共函数名称（需预先声明）。空字符串会导致服务器崩溃 |
| interval             | 触发间隔（毫秒）                                             |
| bool:repeating       | 是否重复执行（true=重复，false=单次）                        |

## 返回值

返回已启动定时器的 ID（从**1**开始顺序分配）

## 示例代码

```c
public OnGameModeInit()
{
    print("启动定时器...");
    SetTimer("OneSecondTimer", 1000, true); // 设置1秒重复定时器
}

forward OneSecondTimer();
public OneSecondTimer()
{
    print("已过去1秒钟");
}
```

## 注意事项

:::warning

SA-MP 存在定时器精度问题（误差约 25%），可参考以下修复方案：

- [精度修复方案 1](https://sampforum.blast.hk/showthread.php?tid=289675)
- [精度修复方案 2](https://sampforum.blast.hk/showthread.php?tid=650736)
  （open.mp 已修复此问题）

:::

:::warning

大量使用定时器会增加服务器 CPU/内存消耗

:::

:::tip

- 定时器 ID 具有全局唯一性，不会重复使用
- 可通过[KillTimer](KillTimer)安全终止任意定时器（无论是否运行）
- 目标函数必须声明为`public`且预先`forward`

:::

## 定义常量

| 常量名称      | 值  |
| ------------- | --- |
| INVALID_TIMER | 0   |

## 相关函数

- [SetTimerEx](SetTimerEx): 设置带参数的定时器
- [KillTimer](KillTimer): 终止定时器
- [IsValidTimer](IsValidTimer): 验证定时器是否有效
- [IsRepeatingTimer](IsRepeatingTimer): 检测定时器是否重复执行
- [GetTimerInterval](GetTimerInterval): 获取定时器间隔设置
- [GetTimerRemaining](GetTimerRemaining): 获取定时器剩余时间
- [CountRunningTimers](CountRunningTimers): 统计运行中的定时器数量

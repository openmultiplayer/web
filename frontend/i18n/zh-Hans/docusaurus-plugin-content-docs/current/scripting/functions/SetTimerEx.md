---
title: SetTimerEx
sidebar_label: SetTimerEx
description: 设置定时器以在指定间隔后调用函数，并可传递参数。
tags: ["定时器"]
---

## 描述

设置定时器以在指定间隔后调用函数。此变体 ('Ex') 可向目标函数传递参数（如玩家 ID）。

| 参数                 | 说明                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------- |
| const functionName[] | 定时器到期时调用的公共函数名称                                                           |
| interval             | 时间间隔（单位：毫秒，1 秒=1000 毫秒）                                                   |
| bool:repeating       | 布尔值（true/false 或 1/0），决定定时器是否重复执行（仅能通过 KillTimer 停止）或单次执行 |
| const specifiers[]   | 特殊格式说明符，用于指示传递参数的类型                                                   |
| OPEN_MP_TAGS:...     | 不定数量参数（需符合前参数指定的格式）                                                   |

## 返回值

返回已启动定时器的 ID。定时器 ID 从 1 开始且永不重复。系统不会校验参数合法性（如负值间隔），推荐使用 Y_Less 的'fixes2'插件增强校验精度及数组/字符串传递功能。

## 示例

```c
SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
// EndAntiSpawnKill - 将要调用的函数
// 5000 - 5000毫秒（5秒）时间间隔
// false - 非重复执行，仅触发一次
// "i" - i代表整型，此处传递玩家ID
// playerid - 要传递的整型值（玩家ID）
```

<br />

```c
// 在玩家生成事件中启动定时器
public OnPlayerSpawn(playerid)
{
    // 反重生点击杀保护（5秒）
    SetPlayerHealth(playerid, 999999.0);
    SendClientMessage(playerid, -1, "你已获得5秒重生保护");

    // 启动5秒定时器
    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
}

// 声明公共函数
forward EndAntiSpawnKill(playerid);
public EndAntiSpawnKill(playerid)
{
    // 5秒后恢复生命值
    SetPlayerHealth(playerid, 100.0);
    SendClientMessage(playerid, -1, "重生保护已失效");
    return 1;
}
```

## 注意

:::warning

SA-MP 中定时器精度存在约 25%偏差，可通过[此修复](https://sampforum.blast.hk/showthread.php?tid=289675)或[此方案](https://sampforum.blast.hk/showthread.php?tid=650736)优化。open.mp 已修复此问题。

:::

:::tip

- 定时器 ID 变量建议用完后重置为 0，避免误操作终止新定时器
- 目标函数必须声明为 public 并通过 forward 预声明
- `-1`并非无效 ID，实际无效 ID 为 0

:::

## 定义值

| 定义值        | 值  |
| ------------- | --- |
| INVALID_TIMER | 0   |

## 相关函数

- [SetTimer](SetTimer): 创建基础定时器
- [KillTimer](KillTimer): 终止定时器
- [IsValidTimer](IsValidTimer): 校验定时器有效性
- [IsRepeatingTimer](IsRepeatingTimer): 检测定时器是否循环
- [GetTimerInterval](GetTimerInterval): 获取定时器间隔
- [GetTimerRemaining](GetTimerRemaining): 获取定时器剩余时间
- [CountRunningTimers](CountRunningTimers): 统计运行中定时器
- [CallLocalFunction](CallLocalFunction): 调用脚本内函数
- [CallRemoteFunction](CallRemoteFunction): 跨脚本调用函数

---
title: 冷却时间
sidebar_label: 冷却时间
description: 本教程讲解如何使用滴答计数编写冷却时间系统来限制玩家行为，避免使用定时器。
---

本教程涵盖动作游戏中常用的冷却时间实现。冷却时间是一种限制玩家行为频率的工具，可用于治疗技能使用、聊天消息发送等场景，通过控制行为速率来实现游戏平衡或防止刷屏。

首先我将展示使用`SetTimer`更新状态的**错误示范**。

## 使用定时器

假设某个行为需要间隔若干秒才能执行，很多人（包括多年前的 Southclaws）会采用如下方式：

```pawn
static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
/* 这可以是任意玩家输入事件：
 *  输入指令
 *  拾取物品
 *  进入检查点
 *  按下按钮
 *  进入区域
 *  使用对话框
 */
{
    // 仅在允许状态下执行
    if (IsPlayerAllowedToDoThing[playerid])
    {
        // 执行玩家请求的操作
        DoTheThingThePlayerRequested();

        // 禁止再次操作
        IsPlayerAllowedToDoThing[playerid] = false;

        // 10秒后重新允许操作
        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);

        return 1;
    }
    else
    {
        SendClientMessage(playerid, -1, "当前无法进行此操作！");

        return 0;
    }
}

// 在玩家执行操作10秒后调用
public AllowPlayer(playerid)
{
    IsPlayerAllowedToDoThing[playerid] = true;
    SendClientMessage(playerid, -1, "现在可以再次操作啦！ :D");
}
```

这种方式虽然可行，能确保玩家在 10 秒内无法重复操作。

再看一个秒表案例，用于测量玩家完成点对点竞速的时间：

```pawn
static
    StopWatchTimerID[MAX_PLAYERS],
    StopWatchTotalTime[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    // 每秒调用函数
    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);
}

public StopWatch(playerid)
{
    // 递增秒数计数器
    StopWatchTotalTime[playerid]++;
}

OnPlayerFinishRace(playerid)
{
    new str[128];

    format(str, 128, "本次竞速耗时 %d 秒", StopWatchTotalTime[playerid]);
    SendClientMessage(playerid, -1, str);

    KillTimer(StopWatchTimerID[playerid]);
}
```

上述案例虽然常见且有效，但存在更优解决方案——既能精准控制冷却时间，又能实现毫秒级计时！

## 使用`GetTickCount()`与`gettime()`

`GetTickCount()`返回服务器启动后的毫秒数，`gettime()`返回自 1970 年 1 月 1 日以来的秒数（即 Unix 时间戳）。

通过两次调用上述函数并计算差值，即可获得精确的时间间隔。请看示例：

### 冷却时间实现

```pawn
static PlayerAllowedTick[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
   // 当前滴答数减去上次记录值超过10000时允许操作
   // 即两次操作间隔需超过10秒
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount(); // 更新最新操作时间

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "当前无法进行此操作！");

       return 0;
   }
}
```

或使用`gettime()`版本：

```pawn
static PlayerAllowedSeconds[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (gettime() - PlayerAllowedSeconds[playerid] > 10)
   // 当前秒数减去上次记录值超过10时允许操作
   // 即两次操作间隔需超过10秒
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedSeconds[playerid] = gettime(); // 更新最新操作时间

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "当前无法进行此操作！");

       return 0;
   }
}
```

代码量大幅减少，无需公共函数或定时器。若需显示剩余时间，可使用格式化消息：

（示例使用 SendFormatMessage）

```pawn
SendFormatMessage(
    playerid,
    -1,
    "当前无法操作！剩余等待时间：%d 毫秒",
    10000 - (GetTickCount() - PlayerAllowedTick[playerid])
);
```

该示例仅展示基础用法，更优方案是将毫秒转换为`分钟:秒.毫秒`格式（文末提供相关代码）。

### 秒表实现

通过时间差计算实现精准计时：

```pawn
static Stopwatch[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}

OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "本次竞速耗时 %d 毫秒", interval);
    SendClientMessage(playerid, -1, str);
}
```

当玩家开始竞速时记录初始时间戳，完成时计算当前时间差即可获得精确耗时。

#### 代码解析

现在让我们将代码分解一下。

```pawn
new Stopwatch[MAX_PLAYERS];
```

全局变量用于存储时间戳，便于跨函数调用。

```pawn
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
```

假设服务器启动 1 分钟后记录时间戳，变量值将为 60,000（60 秒 ×1000 毫秒）。

当玩家 1 分 40 秒后完成竞速：

```pawn
OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "本次竞速耗时 %d 毫秒", interval);
    SendClientMessage(playerid, -1, str);
}
```

这里就是计算时间间隔的核心所在——其实所谓的计算，本质上只是两次调用`GetTickCount()`的结果相减！

`GetTickCount()`返回当前滴答计数，该值必然大于初始记录值。因此用当前值减去初始值即可得到精确的时间间隔。

假设玩家在 1 分 40 秒后（即 100 秒或 100,000 毫秒）完成竞速，此时`GetTickCount()`将返回 160,000。用新值 160,000 减去初始值 60,000，得到 100,000 毫秒，即 1 分 40 秒的精确耗时！

## 要点总结

通过本教程我们掌握：

- `GetTickCount()`返回服务器运行后的毫秒级时间戳
- 通过两次调用记录时间戳并相减，可精准计算事件间隔

最后提醒：切勿直接向玩家显示毫秒数值！若竞速耗时长达一小时该如何阅读？

推荐使用毫秒转可读时间的函数。例如前文案例中的 100,000 毫秒，直接显示会让玩家难以快速理解实际耗时。

[此工具包](https://github.com/ScavengeSurvive/timeutil)提供毫秒格式化功能，可将数值转换为易读字符串。

希望本文对您有所启发！撰写初衷是发现许多开发者尚未掌握`GetTickCount()`和`gettime()`作为定时器替代方案的妙用。

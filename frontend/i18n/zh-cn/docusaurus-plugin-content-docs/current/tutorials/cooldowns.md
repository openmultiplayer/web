---
title: Cooldowns
description: A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers.
---

本教程涵盖了动作游戏中常用的一种游戏机制：冷却时间。冷却时间是一种限制玩家执行某些操作频率的工具。这可能包括使用某种技能（例如治疗）或发送聊天消息。它允许你降低玩家执行某些操作的频率，既可以用于游戏平衡，也可以防止高频率的泛滥操作.

首先，我将展示一种_不良_的办法，使用 `SetTimer` 更新状态的实现冷却时间.

## 使用计时器

例如，假设你有一个特定的动作只能每隔几秒执行一次，我看到很多人（包括Southclaws多年前也是如此）会这样做:

```c
static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
/* 这可以是玩家进行的任何输入事件，例如:
 *  输入命令
 *  拾取物品
 *  进入检查点
 *  按下按钮
 *  进入某个区域
 *  使用对话框
 */
{
    // 仅当玩家被允许时才执行
    if (IsPlayerAllowedToDoThing[playerid])
    {
        // 执行玩家请求的操作
        DoTheThingThePlayerRequested();

        // 禁止玩家再次执行操作
        IsPlayerAllowedToDoThing[playerid] = false;

        // 10秒后允许玩家再次执行操作
        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);

        return 1;
    }
    else
    {
        SendClientMessage(playerid, -1, "你还不能执行该操作!");

        return 0;
    }
}

// 玩家执行操作10秒后调用
public AllowPlayer(playerid)
{
    IsPlayerAllowedToDoThing[playerid] = true;
    SendClientMessage(playerid, -1, "你可以再次执行操作了! :D");
}
```

这样做效果不错，玩家在使用操作后10秒内无法再次执行该操作.

再举一个例子，这是一个测量玩家完成一个简单的点到点比赛所需时间的秒表:

```c
static
    StopWatchTimerID[MAX_PLAYERS],
    StopWatchTotalTime[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    // 每秒调用一次函数
    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);
}

public StopWatch(playerid)
{
    // 增加秒计数器
    StopWatchTotalTime[playerid]++;
}

OnPlayerFinishRace(playerid)
{
    new str[128];

    format(str, 128, "你用了 %d 秒完成比赛", StopWatchTotalTime[playerid]);
    SendClientMessage(playerid, -1, str);

    KillTimer(StopWatchTimerID[playerid]);
}
```

这两个例子很常见，而且它们的效果可能会不错。然而，有一种更好的方法来实现这些功能，它更精确，甚至可以精确到毫秒!

## 使用 `GetTickCount()` 和 `gettime()`

`GetTickCount()` 是一个返回服务器进程启动后经过的毫秒数的函数. `gettime()` 返回自1970年1月1日以来的秒数，也就是所谓的Unix时间戳.

如果你在两个不同的时间调用这些函数，并将第二个时间减去第一个时间，你就可以得到这两个事件之间的时间间隔，分别以毫秒或秒为单位！请看这个例子:

### 冷却时间

```c
static PlayerAllowedTick[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
   // 仅当当前的Tick与上一次的Tick差值大于10000时才可以执行操作.
   // 换句话说，只有当两次操作之间的间隔超过10秒时才会执行.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount(); // 用最新时间更新Tick计数.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "你还不能执行该操作!");

       return 0;
   }
}
```

或者，使用 `gettime()` 的版本:

```c
static PlayerAllowedSeconds[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (gettime() - PlayerAllowedSeconds[playerid] > 10)
   // 仅当当前秒数与上次秒数差值大于10时执行操作.
   // 换句话说，只有当两次操作之间的间隔超过10秒时才会执行.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedSeconds[playerid] = gettime(); // 用最新时间更新秒数.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "你还不能执行该操作!");

       return 0;
   }
}
```

这里的代码少了很多，不需要公共函数或计时器。如果你愿意，还可以将剩余冷却时间一并提示给玩家:

(在这个例子中我使用了 SendFormatMessage, 在 open.mp 中 SendClientMessage 自带 Format 功能)

```c
SendFormatMessage(
    playerid,
    -1,
    "你还不能执行该操作！你可以在 %d 毫秒后再次执行",
    10000 - (GetTickCount() - PlayerAllowedTick[playerid])
);
```

这是一个非常基础的例子，最好将该毫秒值转换为 `分钟:秒.毫秒` 格式的字符串，我会在最后贴出这段代码.

### 秒表

希望你已经看出使用此方法获取事件之间的间隔有多强大，让我们来看另一个例子

```c
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

    format(str, 128, "你用了 %d 毫秒完成比赛", interval);
    SendClientMessage(playerid, -1, str);
}
```

在这个例子中，当玩家开始比赛时，将当前的Tick计数保存到玩家变量中。当他完成比赛时，当前的Tick（完成时的Tick）减去初始Tick（较小的值），从而得出比赛开始和结束之间的毫秒数.

#### 代码解析

现在让我们对代码进行一些解析.

```c
new Stopwatch[MAX_PLAYERS];
```

这是一个全局变量，我们需要使用它来保存Tick计数，并在另一个时间点（即在稍后会使用到的另一个函数中）检索该值

```c
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
```

这是玩家开始比赛的时间，记录当前的Tick计数。如果此时是在服务器启动后1分钟，变量的值将是60,000，因为这是60秒，每秒有一千毫秒.

好了，现在我们将该玩家的变量设置为60,000，他在1分40秒后完成比赛:

```c
OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "你用了 %d 毫秒完成比赛", interval);
    SendClientMessage(playerid, -1, str);
}
```

这里就是间隔的计算部分，实际上只是两个值相减!

GetTickCount() 返回当前的Tick计数，因此它会比初始Tick计数大，这意味着你可以从当前Tick计数中减去初始Tick计数，以获取两个时间点之间的间隔.

所以，正如我们所说，玩家在1分40秒后（即: 100秒/100,000毫秒）完成比赛，GetTickCount 将返回160,000。将初始值（即60,000）从新值（即160,000）中减去，你会得到100,000毫秒，也就是1分40秒，这是玩家完成比赛所花的时间!

## 总结与说明

所以！我们学到了:

- GetTickCount 返回自服务器所在的计算机系统启动以来的毫秒数.
- 我们可以通过在两个时间间隔的地方调用此函数从而利用这一点, 首先将第一个时间保存到一个变量中，通过比较这两个值，可以得到两个事件之间的毫秒间隔.

最后，你不想让玩家看到毫秒单位的时间值！如果他们花一个小时完成比赛怎么办?

最好使用一个函数将毫秒转换为可读的格式。例如，前面的例子中，玩家用了100,000毫秒完成比赛，如果你告诉玩家他用了这么久，他们需要花更多时间去理解这100,000毫秒在可读时间中意味着什么.

[这个包](https://github.com/ScavengeSurvive/timeutil) 包含了一个将毫秒格式化为字符串的函数.

希望这对你有所帮助！我写这篇教程是因为最近帮助了一些不懂如何使用 `GetTickCount()` 或 `gettime()` 作为计时器或获取时间间隔等功能的人.

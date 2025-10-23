---
title: IsPlayerWidescreenToggled
sidebar_label: IsPlayerWidescreenToggled
description: 检测玩家宽屏模式开启状态。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的宽屏模式是否处于激活状态。

| 参数名   | 说明            |
| -------- | --------------- |
| playerid | 要检测的玩家 ID |

## 返回值

**true** - 玩家已启用宽屏模式

**false** - 玩家未启用宽屏模式

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/widescreencheck", true))
    {
        SendClientMessage(playerid, -1, "宽屏模式：%s", IsPlayerWidescreenToggled(playerid) ? "开启" : "关闭");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [TogglePlayerWidescreen](TogglePlayerWidescreen): 切换玩家宽屏模式状态

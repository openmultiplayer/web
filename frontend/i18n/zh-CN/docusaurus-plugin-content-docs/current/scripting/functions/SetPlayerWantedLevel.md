---
title: SetPlayerWantedLevel
sidebar_label: SetPlayerWantedLevel
description: 设置玩家的通缉等级（HUD下方显示6颗棕色通缉星）。
tags: ["玩家"]
---

## 描述

设置玩家的通缉等级（HUD 下方显示 6 颗棕色通缉星）。

| 参数     | 说明                    |
| -------- | ----------------------- |
| playerid | 要设置通缉等级的玩家 ID |
| level    | 要设置的通缉等级（0-6） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的玩家不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/turnuptheheat", true) == 0)
    {
        SetPlayerWantedLevel(playerid, 6);
        SendClientMessage(playerid, 0xFF0000FF, "通缉等级：6");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GetPlayerWantedLevel](GetPlayerWantedLevel): 获取玩家的通缉等级
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): 为玩家播放犯罪通告

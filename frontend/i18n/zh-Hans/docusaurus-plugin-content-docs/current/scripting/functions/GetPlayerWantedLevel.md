---
title: GetPlayerWantedLevel
sidebar_label: GetPlayerWantedLevel
description: 获取玩家的通缉等级
tags: ["玩家"]
---

## 描述

获取指定玩家的当前通缉等级（警星数量）

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取通缉等级的玩家 ID |

## 返回值

玩家当前的警星等级（0-6 级）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/getmywantedlevel", true) == 0)
     {
          // 获取当前通缉等级并发送给玩家
          new
               wantedLevel = GetPlayerWantedLevel(playerid),
               message[64];

          format(message, sizeof(message), "你当前的通缉等级为：%i 星", wantedLevel);
          SendClientMessage(playerid, 0xFF0000FF, message);

          return 1;
     }
    return 0;
}
```

## 相关函数

- [SetPlayerWantedLevel](SetPlayerWantedLevel): 设置玩家通缉等级
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): 为玩家播放犯罪通告

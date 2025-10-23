---
title: DisableRemoteVehicleCollisions
sidebar_label: DisableRemoteVehicleCollisions
description: 禁用玩家已占用车辆之间的碰撞。
tags: ["车辆"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

禁用玩家已占用车辆之间的碰撞检测。

| 名称         | 描述                           |
| ------------ | ------------------------------ |
| playerid     | 要设置碰撞状态的玩家 ID        |
| bool:disable | true 禁用碰撞 / false 启用碰撞 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例

```c
new bool:gPlayerVehicleCollision[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/collision", true))
    {
        new string[64];

        format(string, sizeof(string), "您的车辆碰撞状态已设置为「%s」", (gPlayerVehicleCollision[playerid] == false) ? ("禁用") : ("启用"));
        SendClientMessage(playerid, 0xFFFFFFFF, string);

        gPlayerVehicleCollision[playerid] = !gPlayerVehicleCollision[playerid];

        DisableRemoteVehicleCollisions(playerid, gPlayerVehicleCollision[playerid]);
        return 1;
    }
    return 0;
}
```

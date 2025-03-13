---
title: SetPlayerSkin
sidebar_label: SetPlayerSkin
description: 设置玩家的皮肤（角色模型）。
tags: ["玩家"]
---

## 描述

设置玩家的皮肤。玩家的皮肤即其角色模型。

| 参数名   | 说明                                  |
| -------- | ------------------------------------- |
| playerid | 需要设置皮肤的玩家 ID                 |
| skinid   | 要使用的[皮肤 ID](../resources/skins) |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示指定玩家不存在）

注意：即使使用无效皮肤 ID（非 0-311 或 74 号皮肤），也会返回"成功"，此时皮肤会被强制设为 0 号（CJ 默认模型）。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/fireman", true) == 0)
    {
        // 将玩家皮肤设置为ID 277（消防员模型）
        SetPlayerSkin(playerid, 277);
        return 1;
    }
    return 0;
}

SetPlayerSkinFix(playerid, skinid)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    // 过滤无效皮肤ID（0-311范围外或74号无效皮肤）
    if (0 > skinid > 311 || skinid == 74)
    {
        return 0;
    }

    new
        Float:tmpPos[4],
        vehicleid = GetPlayerVehicleID(playerid),
        seatid = GetPlayerVehicleSeat(playerid);

    GetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
    GetPlayerFacingAngle(playerid, tmpPos[3]);

    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_DUCK)
    {
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // 防止角色冻结（可选）
        return SetPlayerSkin(playerid, skinid);
    }
    else if (IsPlayerInAnyVehicle(playerid))
    {
        new
            tmp;

        RemovePlayerFromVehicle(playerid);
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // 必须解除控制，防止上下车动画导致冻结
        tmp = SetPlayerSkin(playerid, skinid);
        PutPlayerInVehicle(playerid, vehicleid, (seatid == 128) ? 0 : seatid);
        return tmp;
    }
    else
    {
        return SetPlayerSkin(playerid, skinid);
    }
}
```

## 注意事项

:::warning

已知问题：

- 当玩家处于下蹲、车辆内或特定动画状态时切换皮肤会导致角色冻结/异常，可通过[TogglePlayerControllable](TogglePlayerControllable)解除
- 使用[GetPlayerSpecialAction](GetPlayerSpecialAction)检测 SPECIAL_ACTION_DUCK 状态可判断玩家是否下蹲
- 玩家在车辆内切换皮肤可能导致周围玩家客户端崩溃
- 玩家死亡时切换皮肤可能引发周围玩家崩溃
- 会中断自行车乘坐状态

:::

## 相关函数

- [GetPlayerSkin](GetPlayerSkin): 获取玩家当前皮肤
- [SetSpawnInfo](SetSpawnInfo): 设置玩家重生信息

## 相关资源

- [皮肤 ID 列表](../resources/skins)

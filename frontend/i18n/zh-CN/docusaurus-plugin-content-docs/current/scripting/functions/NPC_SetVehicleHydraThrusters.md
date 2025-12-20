---
title: NPC_SetVehicleHydraThrusters
sidebar_label: NPC_SetVehicleHydraThrusters
description: 设置 NPC 驾驶的九头蛇战机推进器方向。
tags: ["npc", "车辆", "九头蛇战机", “飞机”]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 驾驶九头蛇战机时的推进器方向。

| 参数      | 说明                         |
| --------- | ---------------------------- |
| npcid     | NPC 的 ID                    |
| direction | 推进器方向（0=向前，1=向下） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sethydrathrusters ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new direction = strval(cmdtext[19]);

        NPC_SetVehicleHydraThrusters(npcid, direction);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 九头蛇战机推进器方向设置为 %d", npcid, direction);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅适用于 Hydra 飞机（车辆 ID 520）
- 方向 0 = 向前推进器（喷气模式）
- 方向 1 = 向下推进器（垂直起降 模式）
- 使用 NPC_GetVehicleHydraThrusters 检查当前方向

## 相关函数

- [NPC_GetVehicleHydraThrusters](NPC_GetVehicleHydraThrusters): 获取推进器方向
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [GetVehicleModel](GetVehicleModel): 获取车辆模型

## 相关回调

_此函数不会触发任何特定的回调。_

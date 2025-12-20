---
title: NPC_IsVehicleSirenUsed
sidebar_label: NPC_IsVehicleSirenUsed
description: 检查 NPC 是否正在使用车辆警报器。
tags: ["npc", "车辆", "警报器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否正在使用车辆警报器。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在使用车辆警报器则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksirenused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new veh = NPC_GetVehicle(npcid);
        if (veh == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有在任何车辆中。", npcid);

        new bool:sirenUsed = NPC_IsVehicleSirenUsed(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 车辆警报器使用中: %s", npcid, sirenUsed ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果 NPC 不在车辆中则返回`false`
- 仅适用于有警报器的车辆（警车、救护车、消防车）
- 视觉和音频警报效果对所有玩家可见

## 相关函数

- [NPC_UseVehicleSiren](NPC_UseVehicleSiren): 切换车辆警报器
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 将 NPC 从车辆中移出

## 相关回调

_此函数不会触发任何特定的回调。_

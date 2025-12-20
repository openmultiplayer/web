---
title: NPC_SetSurfingVehicle
sidebar_label: NPC_SetSurfingVehicle
description: 设置 NPC 正在冲浪的车辆。
tags: ["npc", "冲浪", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 正在冲浪的车辆。

| 参数      | 说明      |
| --------- | --------- |
| npcid     | NPC 的 ID |
| vehicleid | 车辆 ID   |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingvehicle ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new vehicleid = strval(cmdtext[19]);

        NPC_SetSurfingVehicle(npcid, vehicleid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 冲浪的车辆设置为 %d", npcid, vehicleid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数允许 NPC 在车辆上"冲浪"，意味着它们会随着车辆移动，同时保持相对于车辆的位置
- NPC 会跟随车辆的移动、旋转和位置变化
- 使用 `NPC_SetSurfingOffsets` 将 NPC 定位到车辆的特定位置（车顶、引擎盖等）
- 车辆必须存在才能正常冲浪

## 相关函数

- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 正在冲浪的车辆
- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 正在冲浪的物体
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 正在冲浪的玩家物体
- [NPC_SetSurfingOffsets](NPC_SetSurfingOffsets): 设置 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_

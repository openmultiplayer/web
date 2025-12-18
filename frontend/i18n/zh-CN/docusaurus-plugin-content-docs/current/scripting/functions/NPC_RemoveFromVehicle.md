---
title: NPC_RemoveFromVehicle
sidebar_label: NPC_RemoveFromVehicle
description: 将 NPC 从其当前车辆中移出。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

将 NPC 从其当前车辆中移出。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 成功从车辆中移出则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcremovefromvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:success = NPC_RemoveFromVehicle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 从车辆中移出：%s", npcid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 会立即出现在车辆外，没有退出动画
- 使用 NPC_ExitVehicle 进行带动画的退出
- 如果 NPC 不在车辆中则返回 false
- NPC 位置将设置在车辆附近

## 相关函数

- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_ExitVehicle](NPC_ExitVehicle): 让 NPC 带动画退出车辆
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): 获取 NPC 的座位

## 相关回调

_此函数不会触发任何特定的回调。_

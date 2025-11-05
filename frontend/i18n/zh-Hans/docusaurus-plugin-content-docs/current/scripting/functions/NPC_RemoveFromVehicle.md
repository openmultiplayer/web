---
title: NPC_RemoveFromVehicle
sidebar_label: NPC_RemoveFromVehicle
description: 将 NPC 从其当前车辆中移出。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

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
    if (!strcmp(cmdtext, "/kicknpc", true))
    {
        if (NPC_GetVehicleID(0) != INVALID_VEHICLE_ID) // NPC 0 在车辆中
        {
            if (NPC_RemoveFromVehicle(0))
            {
                SendClientMessage(playerid, 0xFF0000FF, "NPC 0 已从车辆中移出");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 不在车辆中");
        }
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

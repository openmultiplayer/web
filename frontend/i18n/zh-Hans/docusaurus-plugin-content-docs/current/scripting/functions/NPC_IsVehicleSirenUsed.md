---
title: NPC_IsVehicleSirenUsed
sidebar_label: NPC_IsVehicleSirenUsed
description: 检查 NPC 是否正在使用车辆警报器。
tags: ["npc", "车辆", "警报器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否正在使用车辆警报器。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在使用车辆警报器则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("PoliceOfficer");
    NPC_Spawn(npcid);

    // 创建警车
    new vehicleid = CreateVehicle(596, 1958.33, 1343.12, 15.36, 0.0, 1, 1, 300); // 警车 (LS)
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 开启警报器
    NPC_UseVehicleSiren(npcid, true);

    // 5秒后检查警报器状态
    SetTimerEx("CheckSirenStatus", 5000, false, "i", npcid);

    return 1;
}

forward CheckSirenStatus(npcid);
public CheckSirenStatus(npcid)
{
    if (NPC_IsVehicleSirenUsed(npcid))
    {
        printf("NPC %d 警报器已激活", npcid);
    }
    else
    {
        printf("NPC %d 警报器未激活", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksiren", true))
    {
        if (NPC_IsVehicleSirenUsed(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 警报器已激活");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 警报器未激活");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果 NPC 不在车辆中则返回`false`
- 仅适用于有警报器的车辆（警车、救护车、消防车）
- 警报器必须先通过`NPC_UseVehicleSiren`激活
- 视觉和音频警报效果对所有玩家可见

## 相关函数

- [NPC_UseVehicleSiren](NPC_UseVehicleSiren): 切换车辆警报器
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 将 NPC 从车辆中移出

## 相关回调

_此函数不会触发任何特定的回调。_

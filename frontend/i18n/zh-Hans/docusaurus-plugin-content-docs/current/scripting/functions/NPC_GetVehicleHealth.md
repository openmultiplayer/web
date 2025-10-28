---
title: NPC_GetVehicleHealth
sidebar_label: NPC_GetVehicleHealth
description: 获取 NPC 车辆的生命值。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 车辆的生命值。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回车辆生命值（浮点数），若 NPC 不在车辆中则返回 0.0。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_PutInVehicle(npcid, vehicleid, 0);

    new Float:health = NPC_GetVehicleHealth(npcid);
    printf("NPC %d车辆生命值: %.1f", npcid, health);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicles", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        new Float:health = NPC_GetVehicleHealth(0);

        new status[16];
        if (health >= 800.0)
            status = "极佳";
        else if (health >= 600.0)
            status = "良好";
        else if (health >= 400.0)
            status = "受损";
        else if (health >= 200.0)
            status = "严重受损";
        else
            status = "危急";

        new msg[64];
        format(msg, sizeof(msg), "NPC 0车辆: %.1f HP - %s", health, status);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);

        return 1;
    }
    return 0;
}

forward MonitorVehicleHealth();
public MonitorVehicleHealth()
{
    new Float:health = NPC_GetVehicleHealth(0);

    if (health < 300.0)
    {
        printf("警告: NPC 0车辆生命值危急: %.1f", health);

        // 如果过低则自动修复
        NPC_SetVehicleHealth(0, 1000.0);
        printf("已自动修复NPC 0车辆");
    }
}
```

## 注意事项

- 若 NPC 不在车辆中则返回 0.0
- 车辆生命值通常范围在 0.0 到 1000.0 之间
- 生命值低于 250.0 通常意味着车辆会起火
- 仅在 NPC 为车辆驾驶员时有效
- 使用此函数监控车辆状况以进行维护或更换

## 相关函数

- [NPC_SetVehicleHealth](NPC_SetVehicleHealth): 设置车辆生命值
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取车辆 ID
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关回调

_此函数不会触发任何特定的回调。_

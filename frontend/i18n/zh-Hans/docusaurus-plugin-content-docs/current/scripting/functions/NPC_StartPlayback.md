---
title: NPC_StartPlayback
sidebar_label: NPC_StartPlayback
description: 为 NPC 开始回放录制文件。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

通过文件名为 NPC 开始回放录制文件。

| 参数         | 说明                       |
| ------------ | -------------------------- |
| npcid        | NPC 的 ID                  |
| recordName[] | 要回放的录制文件名         |
| autoUnload   | 回放完成后是否卸载录制文件 |
| startX       | 起始 X 坐标                |
| startY       | 起始 Y 坐标                |
| startZ       | 起始 Z 坐标                |
| rotX         | 起始 X 旋转                |
| rotY         | 起始 Y 旋转                |
| rotZ         | 起始 Z 旋转                |

## 返回值

如果回放成功开始则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RecordedBot");
    NPC_Spawn(npcid);

    // 从录制文件开始回放
    NPC_StartPlayback(npcid, "patrol", true,
        1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playrecord", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        if (count > 0)
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            // 让第一个 NPC 回放巡逻录制
            NPC_StartPlayback(npcs[0], "patrol", true,
                x + 5.0, y, z, 0.0, 0.0, 0.0);

            SendClientMessage(playerid, 0x00FF00FF, "NPC 开始巡逻回放");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "没有可用的 NPC");
        }

        return 1;
    }

    if (!strcmp(cmdtext, "/playdriver", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new npcid = NPC_Create("DriverBot");
        NPC_Spawn(npcid);

        // 开始驾驶员录制
        NPC_StartPlayback(npcid, "driver", false,
            x + 10.0, y, z, 0.0, 90.0, 0.0);

        SendClientMessage(playerid, 0x00FF00FF, "驾驶员 NPC 已生成并开始回放");
        return 1;
    }
    return 0;
}

stock StartNPCMission(npcid, const missionName[])
{
    new recordFile[64];
    format(recordFile, sizeof(recordFile), "%s", missionName);

    // 随机生成位置
    new Float:spawnX = 1900.0 + random(100);
    new Float:spawnY = 1300.0 + random(100);
    new Float:spawnZ = 15.36;

    NPC_StartPlayback(npcid, recordFile, true,
        spawnX, spawnY, spawnZ, 0.0, 0.0, 0.0);

    printf("NPC %d 开始任务：%s", npcid, missionName);
}

forward StartSquadMission();
public StartSquadMission()
{
    new missions[][] = {
        "patrol",
        "guard",
        "driver",
        "civilian"
    };

    for (new i = 0; i < sizeof(missions); i++)
    {
        new name[32];
        format(name, sizeof(name), "Mission_%s", missions[i]);

        new npcid = NPC_Create(name);
        NPC_Spawn(npcid);

        new Float:x = 1950.0 + (i * 20.0);
        new Float:y = 1350.0;
        new Float:z = 15.36;

        new recordFile[64];
        format(recordFile, sizeof(recordFile), "%s", missions[i]);

        NPC_StartPlayback(npcid, recordFile, true,
            x, y, z, 0.0, 0.0, 0.0);
    }

    print("小队任务已开始");
}
```

## 注意事项

- 录制文件必须存在于 scriptfiles 目录中
- 如果 autoUnload 为 true，回放结束时录制文件将被卸载
- 起始坐标和旋转会覆盖录制的初始状态
- NPC 在回放开始前会被传送到起始位置
- 使用 NPC_StartPlaybackEx 可以通过预加载的录制获得更好的控制

## 相关函数

- [NPC_StartPlaybackEx](NPC_StartPlaybackEx): 通过录制 ID 开始回放
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放
- [NPC_PausePlayback](NPC_PausePlayback): 暂停/取消暂停回放
- [NPC_LoadRecord](NPC_LoadRecord): 预加载录制文件

## 相关回调

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用

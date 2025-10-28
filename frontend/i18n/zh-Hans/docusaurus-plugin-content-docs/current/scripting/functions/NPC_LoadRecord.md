---
title: NPC_LoadRecord
sidebar_label: NPC_LoadRecord
description: 加载 NPC 录制文件用于回放。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

加载 NPC 录制文件用于回放使用。

| 参数           | 说明           |
| -------------- | -------------- |
| const filePath | 录制文件的路径 |

## 返回值

返回已加载录制的 ID，失败时返回`INVALID_RECORD_ID`。

## 示例

```c
new g_DriverRecord = INVALID_RECORD_ID;
new g_GuardRecord = INVALID_RECORD_ID;

public OnGameModeInit()
{
    // 加载各种录制文件
    g_DriverRecord = NPC_LoadRecord("driver_route");
    if (g_DriverRecord != INVALID_RECORD_ID)
    {
        printf("司机路线录制已加载，ID: %d", g_DriverRecord);
    }

    g_GuardRecord = NPC_LoadRecord("guard_patrol");
    if (g_GuardRecord != INVALID_RECORD_ID)
    {
        printf("守卫巡逻录制已加载，ID: %d", g_GuardRecord);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/loadrec", true))
    {
        // 加载单个录制
        new recordid = NPC_LoadRecord("patrol_route");
        if (recordid != INVALID_RECORD_ID)
        {
            SendClientMessage(playerid, 0x00FF00FF, "巡逻录制已加载");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "加载录制失败");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 录制文件必须位于 'scriptfiles/npcmodes' 目录中
- 文件应具有 .rec 扩展名，但在文件名中不要包含它
- 在使用 NPC_StartPlayback 之前加载录制
- 检查返回值以确保成功加载

## 相关函数

- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): 卸载所有录制
- [NPC_StartPlayback](NPC_StartPlayback): 开始回放录制
- [NPC_GetRecordCount](NPC_GetRecordCount): 获取已加载录制数量

## 相关回调

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用

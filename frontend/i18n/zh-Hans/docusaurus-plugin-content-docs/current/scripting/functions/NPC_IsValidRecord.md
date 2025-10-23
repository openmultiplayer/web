---
title: NPC_IsValidRecord
sidebar_label: NPC_IsValidRecord
description: 检查录制文件是否有效且已加载。
tags: ["npc", "录制", "验证"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查录制 ID 是否有效且已加载。

| 名称     | 描述      |
| -------- | --------- |
| recordId | 录制的 ID |

## 返回值

如果录制有效且已加载则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    // 加载基本录制
    NPC_LoadRecord("driver_route");
    NPC_LoadRecord("guard_patrol");
    NPC_LoadRecord("pilot_flight");

    // 验证所有录制
    ValidateRecordings();

    return 1;
}

ValidateRecordings()
{
    new recordings[][32] = {
        "driver_route",
        "guard_patrol",
        "pilot_flight"
    };

    printf("=== 录制验证 ===");

    for (new i = 0; i < sizeof(recordings); i++)
    {
        if (NPC_IsValidRecord(recordings[i]))
        {
            printf("[OK] %s: 有效且就绪", recordings[i]);
        }
        else
        {
            printf("[错误] %s: 无效或加载失败", recordings[i]);
        }
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrecording", true))
    {
        new recordName[32] = "driver_route";

        if (NPC_IsValidRecord(recordName))
        {
            new msg[64];
            format(msg, sizeof(msg), "录制 '%s' 有效且已加载", recordName);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            new msg[64];
            format(msg, sizeof(msg), "录制 '%s' 无效或未加载", recordName);
            SendClientMessage(playerid, 0xFF0000FF, msg);
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/playdriver", true))
    {
        if (NPC_IsValidRecord("driver_route"))
        {
            new npcid = NPC_Create("AutoDriver");
            NPC_Spawn(npcid);
            NPC_StartPlayback(npcid, "driver_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

            SendClientMessage(playerid, 0x00FF00FF, "自动司机已使用有效录制启动");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "无法启动司机 - 录制不可用");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/loadrecord", true))
    {
        new testRecord[32] = "test_recording";

        // 尝试加载新录制
        NPC_LoadRecord(testRecord);

        // 验证它
        if (NPC_IsValidRecord(testRecord))
        {
            new msg[64];
            format(msg, sizeof(msg), "成功加载 '%s'", testRecord);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            new msg[64];
            format(msg, sizeof(msg), "加载 '%s' 失败 - 文件可能不存在", testRecord);
            SendClientMessage(playerid, 0xFF0000FF, msg);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 录制必须先通过 NPC_LoadRecord 加载才能变为有效
- 无效录制不能用于回放
- 文件必须存在于 scriptfiles/npcmodes 目录中
- 在开始回放前检查有效性以避免错误

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制
- [NPC_StartPlayback](NPC_StartPlayback): 开始回放录制
- [NPC_GetRecordCount](NPC_GetRecordCount): 获取已加载录制数量

## 相关回调

_此函数不会触发任何特定的回调。_

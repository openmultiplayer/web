---
title: NPC_GetRecordCount
sidebar_label: NPC_GetRecordCount
description: 获取已加载的 NPC 录制文件数量。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取服务器上已加载的 NPC 录制文件数量。

## 返回值

返回当前已加载的录制文件数量。

## 示例

```c
public OnGameModeInit()
{
    printf("初始录制数量: %d", NPC_GetRecordCount()); // 0

    // 加载一些录制
    new record1 = NPC_LoadRecord("recordings/patrol");
    new record2 = NPC_LoadRecord("recordings/driver");
    new record3 = NPC_LoadRecord("recordings/guard");

    printf("加载后的录制数量: %d", NPC_GetRecordCount()); // 3

    // 卸载一个录制
    NPC_UnloadRecord(record2);
    printf("卸载一个后的录制数量: %d", NPC_GetRecordCount()); // 2

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/recordstats", true))
    {
        new recordCount = NPC_GetRecordCount();

        new msg[128];
        format(msg, sizeof(msg), "服务器已加载%d个NPC录制", recordCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }

    if (!strcmp(cmdtext, "/loadtestrecords", true))
    {
        new oldCount = NPC_GetRecordCount();

        // 尝试加载一些测试录制
        new loaded = 0;

        new testFiles[][] = {
            "recordings/test1",
            "recordings/test2",
            "recordings/test3"
        };

        for (new i = 0; i < sizeof(testFiles); i++)
        {
            new recordId = NPC_LoadRecord(testFiles[i]);
            if (NPC_IsValidRecord(recordId))
            {
                loaded++;
            }
        }

        new newCount = NPC_GetRecordCount();

        new msg[128];
        format(msg, sizeof(msg), "已加载%d个录制。总计: %d -> %d",
            loaded, oldCount, newCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回内存中有效录制的总数
- 只有成功加载的录制才会被计算
- 使用此函数监控服务器内存使用情况
- 录制会一直存在直到被显式卸载或服务器重启

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制
- [NPC_IsValidRecord](NPC_IsValidRecord): 检查录制是否有效
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): 卸载所有录制

## 相关回调

- [../callbacks/OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [../callbacks/OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用

---
title: NPC_UnloadRecord
sidebar_label: NPC_UnloadRecord
description: 从内存中卸载特定的 NPC 录制。
tags: ["npc", "录制"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

从内存中卸载特定的 NPC 录制以释放资源。

| 名称     | 描述            |
| -------- | --------------- |
| recordId | 要卸载的录制 ID |

## 返回值

如果录制成功卸载则返回`true`，否则返回`false`。

## 示例

```c
new g_PatrolRecord = INVALID_RECORD_ID;

public OnGameModeInit()
{
    // 加载录制
    g_PatrolRecord = NPC_LoadRecord("recordings/patrol");

    if (g_PatrolRecord != INVALID_RECORD_ID)
    {
        printf("巡逻录制已加载，ID：%d", g_PatrolRecord);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/unloadpatrol", true))
    {
        if (NPC_IsValidRecord(g_PatrolRecord))
        {
            if (NPC_UnloadRecord(g_PatrolRecord))
            {
                SendClientMessage(playerid, 0x00FF00FF, "巡逻录制已卸载");
                g_PatrolRecord = INVALID_RECORD_ID;
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "卸载录制失败");
            }
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 释放特定录制占用的内存
- 卸载后录制 ID 变为无效
- 任何使用此录制的 NPC 将停止回放
- 使用 `NPC_UnloadAllRecords` 一次性卸载所有录制

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): 卸载所有录制
- [NPC_IsValidRecord](NPC_IsValidRecord): 检查录制是否有效
- [NPC_GetRecordCount](NPC_GetRecordCount): 获取已加载录制数量

## 相关回调

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用

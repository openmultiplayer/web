---
title: NPC_LoadRecord
sidebar_label: NPC_LoadRecord
description: 加载 NPC 录制文件用于回放。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

加载 NPC 录制文件用于回放使用。

| 参数           | 说明           |
| -------------- | -------------- |
| const filePath | 录制文件的路径 |

## 返回值

返回已加载录制的 ID，失败时返回`INVALID_RECORD_ID`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcloadrecord ", true, 15))
    {
        new filepath[128];
        new len = strlen(cmdtext);
        if (len <= 15)
            return SendClientMessage(playerid, 0xFF0000FF, "用法：/npcloadrecord [文件路径]");

        strmid(filepath, cmdtext, 15, len);

        new recordid = NPC_LoadRecord(filepath);

        if (recordid == -1)
            SendClientMessage(playerid, 0xFF0000FF, "从 %s 加载录制失败", filepath);
        else
            SendClientMessage(playerid, 0x00FF00FF, "录制已从 %s 加载，对应ID: %d", filepath, recordid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 文件应具有 .rec 扩展名，但在文件名中不要包含它
- 在使用 NPC_StartPlayback 之前加载录制

## 相关函数

- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): 卸载所有录制
- [NPC_StartPlayback](NPC_StartPlayback): 开始回放录制
- [NPC_GetRecordCount](NPC_GetRecordCount): 获取已加载录制数量

## 相关回调

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用

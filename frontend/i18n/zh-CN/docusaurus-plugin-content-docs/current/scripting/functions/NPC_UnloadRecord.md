---
title: NPC_UnloadRecord
sidebar_label: NPC_UnloadRecord
description: 从内存中卸载特定的 NPC 录制。
tags: ["npc", "录制"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

从内存中卸载特定的 NPC 录制以释放资源。

| 参数     | 说明            |
| -------- | --------------- |
| recordId | 要卸载的录制 ID |

## 返回值

如果录制成功卸载则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcunloadrecord ", true, 17))
    {
        new recordid = strval(cmdtext[17]);

        new bool:success = NPC_UnloadRecord(recordid);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "录制 %d 卸载成功", recordid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "录制 %d 卸载失败", recordid);
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

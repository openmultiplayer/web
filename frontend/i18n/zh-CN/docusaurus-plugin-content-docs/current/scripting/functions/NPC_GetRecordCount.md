---
title: NPC_GetRecordCount
sidebar_label: NPC_GetRecordCount
description: 获取已加载的 NPC 录制文件数量。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取服务器上已加载的 NPC 录制文件数量。

## 返回值

返回当前已加载的录制文件数量。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrecordcount", true))
    {
        new count = NPC_GetRecordCount();
        SendClientMessage(playerid, 0x00FF00FF, "已加载的录制总数：%d", count);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回内存中有效录制的总数
- 只有成功加载的录制才会被计算
- 录制会一直存在直到被显式卸载或服务器重启

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制
- [NPC_IsValidRecord](NPC_IsValidRecord): 检查录制是否有效
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): 卸载所有录制

## 相关回调

- [../callbacks/OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [../callbacks/OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用

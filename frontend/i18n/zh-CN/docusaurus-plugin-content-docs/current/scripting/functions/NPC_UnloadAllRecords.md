---
title: NPC_UnloadAllRecords
sidebar_label: NPC_UnloadAllRecords
description: 从内存中卸载所有 NPC 录制文件。
tags: ["npc", "录制"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

从内存中卸载所有 NPC 录制文件以释放资源。

## 返回值

如果所有录制都成功卸载则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    // 加载一些录制
    NPC_LoadRecord("recordings/patrol");
    NPC_LoadRecord("recordings/driver");
    NPC_LoadRecord("recordings/guard");

    printf("已加载录制数量：%d", NPC_GetRecordCount());

    return 1;
}

public OnGameModeExit()
{
    // 服务器关闭时清理所有录制
    if (NPC_UnloadAllRecords())
    {
        print("所有 NPC 录制已成功卸载");
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearrecords", true))
    {
        if (NPC_UnloadAllRecords())
        {
            SendClientMessage(playerid, 0x00FF00FF, "所有录制已卸载");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "卸载录制失败");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 这会释放已加载录制占用的内存
- 在游戏模式关闭时使用此函数进行清理
- 此函数后所有录制 ID 变为无效
- 任何使用这些录制的 NPC 将停止播放

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载特定录制
- [NPC_GetRecordCount](NPC_GetRecordCount): 获取已加载录制数量
- [NPC_IsValidRecord](NPC_IsValidRecord): 检查录制是否有效

## 相关回调

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 播放结束时调用

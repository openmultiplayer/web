---
title: NPC_StartPlaybackEx
sidebar_label: NPC_StartPlaybackEx
description: 使用预加载的录制 ID 为 NPC 开始回放，支持扩展选项。
tags: ["npc", "回放", "录制"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

使用预加载的录制 ID 为 NPC 开始回放，支持扩展选项。

| 参数       | 说明                    |
| ---------- | ----------------------- |
| npcid      | NPC 的 ID               |
| recordId   | 预加载的录制 ID         |
| autoUnload | 回放完成后是否自动卸载  |
| startX     | 相对于录制位置的 X 偏移 |
| startY     | 相对于录制位置的 Y 偏移 |
| startZ     | 相对于录制位置的 Z 偏移 |
| rotX       | X 旋转偏移              |
| rotY       | Y 旋转偏移              |
| rotZ       | Z 旋转偏移              |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
new g_PatrolRecord = INVALID_RECORD_ID;

public OnGameModeInit()
{
    // 预加载录制
    g_PatrolRecord = NPC_LoadRecord("recordings/patrol");

    if (g_PatrolRecord != INVALID_RECORD_ID)
    {
        printf("巡逻录制已加载，ID：%d", g_PatrolRecord);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        // 让 NPC 0 回放预加载的录制
        NPC_StartPlaybackEx(0, g_PatrolRecord, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 开始巡逻回放");
        return 1;
    }

    if (!strcmp(cmdtext, "/startpatrolrotated", true))
    {
        // 带旋转偏移开始回放
        NPC_StartPlaybackEx(0, g_PatrolRecord, true, 0.0, 0.0, 0.0, 0.0, 0.0, 90.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 开始带旋转的巡逻");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 录制必须使用 `NPC_LoadRecord` 预加载
- 对于重复使用，比 `NPC_StartPlayback` 更高效
- 自动卸载可在回放完成后节省内存
- 旋转偏移允许在回放期间调整 NPC 的朝向

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_StartPlayback](NPC_StartPlayback): 通过文件名开始回放
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放
- [NPC_IsValidRecord](NPC_IsValidRecord): 检查录制是否有效

## 相关回调

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用

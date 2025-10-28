---
title: OnNPCPlaybackStart
sidebar_label: OnNPCPlaybackStart
description: 当 NPC 开始回放录制文件时调用此回调。
tags: ["npc", "回放", "录制"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.changemelater' />

## 描述

当 NPC 开始回放录制文件时调用此回调。

| 参数     | 说明                    |
| -------- | ----------------------- |
| npcid    | 开始回放的 NPC 的 ID    |
| recordid | 开始回放的录制文件的 ID |

## 示例

```c
public OnNPCPlaybackStart(npcid, recordid)
{
    printf("NPC %d 开始回放录制文件 %d", npcid, recordid);

    // 在回放期间设置属性
    NPC_SetHealth(npcid, 100.0);
    NPC_SetArmour(npcid, 50.0);

    return true;
}
```

## 注意事项

- 当 `NPC_StartPlayback` 成功执行时立即调用此回调
- `recordid` 对应已加载的录制文件
- NPC 将遵循文件中录制的移动

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_StartPlayback](../functions/NPC_StartPlayback): 开始 NPC 录制回放
- [NPC_StopPlayback](../functions/NPC_StopPlayback): 停止 NPC 回放
- [NPC_PausePlayback](../functions/NPC_PausePlayback): 暂停/恢复 NPC 回放
- [NPC_IsPlayingPlayback](../functions/NPC_IsPlayingPlayback): 检查 NPC 是否正在回放录制

## 相关回调

- [OnNPCPlaybackEnd](OnNPCPlaybackEnd): 当 NPC 完成回放录制时调用

---
title: NPC_ClearAnimations
sidebar_label: NPC_ClearAnimations
description: 清除 NPC 的所有动画。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

清除 NPC 的所有动画，使其返回默认状态。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("AnimBot");
    NPC_Spawn(npcid);

    // 应用一些动画
    NPC_ApplyAnimation(npcid, "DANCING", "DAN_Loop_A", 4.1, true, false, false, false, 0);

    // 10 秒后清除所有动画
    SetTimerEx("ClearNPCAnimations", 10000, false, "i", npcid);

    return 1;
}

forward ClearNPCAnimations(npcid);
public ClearNPCAnimations(npcid)
{
    NPC_ClearAnimations(npcid);
}
```

## 注意事项

- 此函数停止所有当前播放的动画
- NPC 将返回其默认的闲置姿态
- 任何循环动画都会被中断
- 这在应用新动画之前重置 NPC 外观时很有用

## 相关函数

- [NPC_ApplyAnimation](NPC_ApplyAnimation): 对 NPC 应用动画
- [NPC_SetAnimation](NPC_SetAnimation): 按 ID 设置动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置动画状态
- [NPC_GetAnimation](NPC_GetAnimation): 获取当前动画数据

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时调用

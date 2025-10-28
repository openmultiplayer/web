---
title: NPC_ResetAnimation
sidebar_label: NPC_ResetAnimation
description: 将 NPC 的当前动画重置为默认状态。
tags: ["npc", "动画"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

将 NPC 的当前动画重置为默认状态。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Dancer");
    NPC_Spawn(npcid);

    // 应用动画
    NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.0, 1, 0, 0, 1, 0);

    // 10秒后重置
    SetTimerEx("ResetAnim", 10000, false, "i", npcid);

    return 1;
}

forward ResetAnim(npcid);
public ResetAnim(npcid)
{
    NPC_ResetAnimation(npcid);
    printf("NPC %d 动画已重置为默认状态", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetanim", true))
    {
        // 重置 NPC 0 的动画
        NPC_ResetAnimation(0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 动画已重置");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 停止所有当前动画并让 NPC 返回空闲状态
- 使用此函数清除卡住或循环的动画
- 等同于调用 NPC_ClearAnimations
- NPC 将返回正常的站立/行走动画

## 相关函数

- [NPC_ApplyAnimation](NPC_ApplyAnimation): 为 NPC 应用动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_SetAnimation](NPC_SetAnimation): 设置特定动画
- [NPC_GetAnimation](NPC_GetAnimation): 获取当前动画

## 相关回调

_此函数不会触发任何特定的回调。_

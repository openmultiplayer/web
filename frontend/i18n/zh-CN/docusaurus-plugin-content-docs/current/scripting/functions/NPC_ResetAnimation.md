---
title: NPC_ResetAnimation
sidebar_label: NPC_ResetAnimation
description: 将 NPC 的当前动画重置为默认状态。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

将 NPC 的当前动画重置为默认状态。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetanim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        NPC_ResetAnimation(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 动画已重置。", npcid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 停止所有当前动画并让 NPC 返回空闲状态
- 等同于调用 NPC_ClearAnimations

## 相关函数

- [NPC_ApplyAnimation](NPC_ApplyAnimation): 为 NPC 应用动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_SetAnimation](NPC_SetAnimation): 设置特定动画
- [NPC_GetAnimation](NPC_GetAnimation): 获取当前动画

## 相关回调

_此函数不会触发任何特定的回调。_

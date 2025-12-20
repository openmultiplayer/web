---
title: NPC_GetSpecialAction
sidebar_label: NPC_GetSpecialAction
description: 获取 NPC 当前的特殊动作。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前的特殊动作。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回特殊动作 ID，若无特殊动作则返回 `SPECIAL_ACTION_NONE`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkspecialaction", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new action = NPC_GetSpecialAction(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 特殊动作: %d", npcid, action);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回当前的特殊动作常量
- 使用此函数检查 NPC 当前正在执行的动作

## 相关函数

- [NPC_SetSpecialAction](NPC_SetSpecialAction): 设置 NPC 特殊动作
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_ApplyAnimation](NPC_ApplyAnimation): 为 NPC 应用动画

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用

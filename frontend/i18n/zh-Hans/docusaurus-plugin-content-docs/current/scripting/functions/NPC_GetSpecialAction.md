---
title: NPC_GetSpecialAction
sidebar_label: NPC_GetSpecialAction
description: 获取 NPC 当前的特别动作。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前的特别动作。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回特别动作 ID，若无特别动作则返回 `SPECIAL_ACTION_NONE`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("ActionBot");
    NPC_Spawn(npcid);

    NPC_SetSpecialAction(npcid, SPECIAL_ACTION_DUCK);

    new action = NPC_GetSpecialAction(npcid);
    printf("NPC %d特别动作: %d", npcid, action);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaction", true))
    {
        new action = NPC_GetSpecialAction(0);

        new actionName[32];
        switch(action)
        {
            case SPECIAL_ACTION_NONE: actionName = "无";
            case SPECIAL_ACTION_DUCK: actionName = "蹲下";
            case SPECIAL_ACTION_USEJETPACK: actionName = "喷气背包";
            case SPECIAL_ACTION_SIT_DOWN: actionName = "坐下";
            default: actionName = "未知";
        }

        new msg[64];
        format(msg, sizeof(msg), "NPC 0动作: %s", actionName);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回当前的特别动作常量
- 使用此函数检查 NPC 当前正在执行的动作
- 动作包括蹲下、坐下、使用喷气背包等

## 相关函数

- [NPC_SetSpecialAction](NPC_SetSpecialAction): 设置 NPC 特别动作
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_ApplyAnimation](NPC_ApplyAnimation): 为 NPC 应用动画

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用

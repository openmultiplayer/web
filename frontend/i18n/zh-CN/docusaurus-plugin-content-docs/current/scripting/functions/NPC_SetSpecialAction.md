---
title: NPC_SetSpecialAction
sidebar_label: NPC_SetSpecialAction
description: 设置 NPC 的特殊动作状态，如坐下、吸烟、饮酒等。
tags: ["npc", "动作", "特殊"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的特殊动作状态，如坐下、吸烟、饮酒等。

| 名称   | 描述                |
| ------ | ------------------- |
| npcid  | NPC 的 ID           |
| action | 要设置的特殊动作 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Smoker");
    NPC_Spawn(npcid);

    // 让 NPC 吸烟
    NPC_SetSpecialAction(npcid, SPECIAL_ACTION_SMOKE_CIGGY);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sitnpc", true))
    {
        // 让 NPC 0 坐下
        NPC_SetSpecialAction(0, SPECIAL_ACTION_SIT_DOWN);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 现在坐着");
        return 1;
    }

    if (!strcmp(cmdtext, "/clearaction", true))
    {
        // 清除 NPC 0 的特殊动作
        NPC_SetSpecialAction(0, SPECIAL_ACTION_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "已清除 NPC 0 的特殊动作");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 常见动作：NONE（无）、SIT_DOWN（坐下）、SMOKE_CIGGY（吸烟）、DRINK_BEER（喝啤酒）、HANDSUP（举手）
- 使用 SPECIAL_ACTION_NONE 清除当前动作
- 某些动作可能与移动或其他活动冲突
- 使用 NPC_GetSpecialAction 检查当前动作

## 相关函数

- [NPC_GetSpecialAction](NPC_GetSpecialAction): 获取当前特殊动作
- [NPC_ApplyAnimation](NPC_ApplyAnimation): 应用自定义动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置为默认状态

## 相关回调

_此函数不会触发任何特定的回调。_

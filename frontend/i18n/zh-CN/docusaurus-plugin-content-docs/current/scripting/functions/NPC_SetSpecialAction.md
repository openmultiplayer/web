---
title: NPC_SetSpecialAction
sidebar_label: NPC_SetSpecialAction
description: 设置 NPC 的特殊动作状态，如坐下、吸烟、饮酒等。
tags: ["npc", "动作", "特殊"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的特殊动作状态，如坐下、吸烟、饮酒等。

| 参数   | 说明                |
| ------ | ------------------- |
| npcid  | NPC 的 ID           |
| action | 要设置的特殊动作 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setspecialaction ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new actionid = strval(cmdtext[18]);

        NPC_SetSpecialAction(npcid, SPECIAL_ACTION:actionid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 特殊动作设置为 %d", npcid, actionid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 使用 SPECIAL_ACTION_NONE 清除当前动作
- 某些动作可能与移动或其他活动冲突

## 相关函数

- [NPC_GetSpecialAction](NPC_GetSpecialAction): 获取当前特殊动作
- [NPC_ApplyAnimation](NPC_ApplyAnimation): 应用自定义动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置为默认状态

## Related Resources

- [Special Actions](../resources/specialactions)

## 相关回调

_此函数不会触发任何特定的回调。_

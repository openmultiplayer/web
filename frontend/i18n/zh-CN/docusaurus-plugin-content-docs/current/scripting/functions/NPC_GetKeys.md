---
title: NPC_GetKeys
sidebar_label: NPC_GetKeys
description: 获取 NPC 当前的按键状态。
tags: ["npc", "按键"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前的按键状态。

| 参数          | 说明                       |
| ------------- | -------------------------- |
| npcid         | NPC 的 ID                  |
| &upAndDown    | 用于存储上下键状态的变量   |
| &leftAndRight | 用于存储左右键状态的变量   |
| &keys         | 用于存储其他按键状态的变量 |

## 返回值

若成功获取按键状态则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkkeys", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new keys, updown, leftright;
        NPC_GetKeys(npcid, keys, updown, leftright);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 键: %d, 上下: %d, 左右: %d", npcid, keys, updown, leftright);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 除 npcid 外的所有参数都通过引用传递且会被修改
- 按键状态以位标志形式存储
- 使用位运算来检查单个按键
- 此函数反映 NPC 当前的输入状态

## 相关函数

- [NPC_SetKeys](NPC_SetKeys): 设置 NPC 按键状态
- [NPC_Move](NPC_Move): 使 NPC 移动到指定位置
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动

## 相关回调

- [../callbacks/OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用

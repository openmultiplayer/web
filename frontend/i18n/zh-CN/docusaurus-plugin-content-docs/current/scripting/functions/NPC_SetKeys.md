---
title: NPC_SetKeys
sidebar_label: NPC_SetKeys
description: 设置 NPC 的按键状态，模拟按键操作。
tags: ["npc", "按键", "输入"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的按键状态，模拟按键操作。

| 参数         | 说明             |
| ------------ | ---------------- |
| npcid        | NPC 的 ID        |
| upAndDown    | 上/下键状态      |
| leftAndRight | 左/右键状态      |
| keys         | 要设置的按键组合 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setkeys ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new idx = 9;
        new keys = 0, updown = 0, leftright = 0;

        // 处理按键
        while (cmdtext[idx] == ' ') idx++;
        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "用法：/setkeys [按键] [上下] [左右]");
        keys = strval(cmdtext[idx]);

        // 跳到下一个参数
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        // 如果存在，向上解析
        if (cmdtext[idx] != '\0')
        {
            updown = strval(cmdtext[idx]);
            while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
            while (cmdtext[idx] == ' ') idx++;

            // 如果存在，向右解析
            if (cmdtext[idx] != '\0')
            {
                leftright = strval(cmdtext[idx]);
            }
        }

        NPC_SetKeys(npcid, keys, updown, leftright);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d keys: keys=%d, ud=%d, lr=%d", npcid, keys, updown, leftright);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 按键影响 NPC 在车辆内和步行时的行为
- 使用 NPC_GetKeys 检查当前按键状态
- 按键状态会持续到被更改或 NPC 状态重置

## 相关函数

- [NPC_GetKeys](NPC_GetKeys): 获取 NPC 的按键状态
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_Move](NPC_Move): 让 NPC 移动到位置
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动

## 相关资源

- [按键](../resources/keys)

## 相关回调

_此函数不会触发任何特定的回调。_

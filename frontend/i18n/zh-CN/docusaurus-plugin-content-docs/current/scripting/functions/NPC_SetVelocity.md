---
title: NPC_SetVelocity
sidebar_label: NPC_SetVelocity
description: 设置NPC的速度
tags: ["npc", "速度", "移动"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的速度。

| 参数    | 说明       |
| ------- | ---------- |
| npcid   | NPC 的 ID  |
| Float:x | X 速度分量 |
| Float:y | Y 速度分量 |
| Float:z | Z 速度分量 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvelocity ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x, Float:y, Float:z;
        new idx = 13;

        // 处理x
        while (cmdtext[idx] == ' ') idx++;
        new startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new xStr[32];
        strmid(xStr, cmdtext, startIdx, idx);
        x = floatstr(xStr);

        // 处理y
        while (cmdtext[idx] == ' ') idx++;
        startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new yStr[32];
        strmid(yStr, cmdtext, startIdx, idx);
        y = floatstr(yStr);

        // 处理z
        while (cmdtext[idx] == ' ') idx++;
        z = floatstr(cmdtext[idx]);

        NPC_SetVelocity(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 速度设置为 %.2f, %.2f, %.2f", npcid, x, y, z);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 速度值决定了移动的速度和方向
- 正 Z 值使 NPC 向上移动，负值使 NPC 向下移动
- 这可用于创建自定义移动行为

## 相关函数

- [NPC_GetVelocity](NPC_GetVelocity): 获取 NPC 速度
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置
- [NPC_Move](NPC_Move): 使 NPC 移动到指定位置

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时被调用

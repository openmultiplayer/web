---
title: NPC_SetPos
sidebar_label: NPC_SetPos
description: 瞬间设置 NPC 的位置，无需移动动画。
tags: ["npc", "位置"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

瞬间设置 NPC 的位置，无需移动动画。

| 参数    | 说明        |
| ------- | ----------- |
| npcid   | NPC 的 ID。 |
| Float:x | X 坐标。    |
| Float:y | Y 坐标。    |
| Float:z | Z 坐标。    |

## 返回值

成功时返回`true`，失败时返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setposhere", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_SetPos(npcid, x + 2.0, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 传送到你的位置", npcid);

        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 此函数瞬间传送 NPC，没有动画
- 设置位置时会停止任何当前的移动
- 如果希望 NPC 走向某个位置，请使用 `NPC_Move`

:::

## 相关函数

- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置。
- [NPC_Move](NPC_Move): 带动画移动 NPC 到位置。
- [NPC_SetRot](NPC_SetRot): 设置 NPC 旋转。
- [NPC_SetFacingAngle](NPC_SetFacingAngle): 设置 NPC 面向方向。

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用。

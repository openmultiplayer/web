---
title: NPC_IsAimingAtPlayer
sidebar_label: NPC_IsAimingAtPlayer
description: 检查 NPC 是否正在瞄准特定玩家。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否正在瞄准特定玩家。

| 参数     | 说明            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| playerid | 要检查的玩家 ID |

## 返回值

如果 NPC 正在瞄准指定玩家则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaimingat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isAimingAtPlayer = NPC_IsAimingAtPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在瞄准你: %s", npcid, isAimingAtPlayer ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 只有当 NPC 特别针对给定玩家时才返回 true
- 使用此函数检查玩家是否被 NPC 瞄准
- NPC 必须使用 NPC_AimAtPlayer 此函数才返回 true

## 相关函数

- [NPC_AimAtPlayer](NPC_AimAtPlayer): 让 NPC 瞄准玩家
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否正在瞄准
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准位置

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

---
title: NPC_EnableInfiniteAmmo
sidebar_label: NPC_EnableInfiniteAmmo
description: 启用或禁用 NPC 的无限弹药。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

启用或禁用 NPC 的无限弹药。

| 名称   | 描述                              |
| ------ | --------------------------------- |
| npcid  | NPC 的 ID                         |
| enable | `true` 启用无限弹药，`false` 禁用 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("ShooterBot");
    NPC_Spawn(npcid);

    // 给予 NPC 武器
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 100); // 给予 100 发弹药
    // 启用无限弹药使其永远不会耗尽
    NPC_EnableInfiniteAmmo(npcid, true);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/togglenpcammo", true))
    {
        new npcid = 0; // 假设第一个 NPC
        if (NPC_IsValid(npcid))
        {
            new bool:infinite = NPC_IsInfiniteAmmoEnabled(npcid);
            NPC_EnableInfiniteAmmo(npcid, !infinite);

            new msg[64];
            format(msg, sizeof(msg), "NPC 无限弹药: %s", !infinite ? "已启用" : "已禁用");
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 启用时，NPC 将永远不会耗尽弹药
- 这影响 NPC 使用的所有武器
- 弹药计数显示可能仍然减少，但武器功能保持正常
- 适用于安全 NPC 或持续战斗场景

## 相关函数

- [NPC_IsInfiniteAmmoEnabled](NPC_IsInfiniteAmmoEnabled): 检查是否启用无限弹药
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 发射武器时调用

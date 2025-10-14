---
title: NPC_EnableReloading
sidebar_label: NPC_EnableReloading
description: 启用或禁用 NPC 的自动重新装弹。
tags: ["npc", "武器", "换弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

启用或禁用 NPC 的自动重新装弹。

| 名称   | 描述                              |
| ------ | --------------------------------- |
| npcid  | NPC 的 ID                         |
| enable | `true` 启用重新装弹，`false` 禁用 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("GuardBot");
    NPC_Spawn(npcid);

    // 给予 NPC 武器
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 500);

    // 启用自动重新装弹
    NPC_EnableReloading(npcid, true);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/togglereload", true))
    {
        new npcid = 0; // 假设第一个 NPC
        if (NPC_IsValid(npcid))
        {
            new bool:reloadEnabled = NPC_IsReloadEnabled(npcid);
            NPC_EnableReloading(npcid, !reloadEnabled);

            new msg[64];
            format(msg, sizeof(msg), "NPC 重新装弹: %s", !reloadEnabled ? "已启用" : "已禁用");
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 启用时，NPC 将在弹夹为空时自动重新装弹
- 禁用时，NPC 将不会重新装弹，最终会耗尽弹夹中的弹药
- 重新装弹时间可以使用 `NPC_SetWeaponReloadTime` 自定义
- 此设置影响 NPC 战斗行为的真实性

## 相关函数

- [NPC_IsReloadEnabled](NPC_IsReloadEnabled): 检查是否启用重新装弹
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在重新装弹
- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): 设置武器重新装弹时间
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取武器重新装弹时间

## 相关回调

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 当 NPC 武器状态改变时调用

---
title: NPC_IsReloadEnabled
sidebar_label: NPC_IsReloadEnabled
description: 检查NPC是否启用了自动换弹。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否启用了自动换弹。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果启用了自动换弹则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4); // M4
    NPC_SetAmmo(npcid, 500);

    // 启用自动换弹
    NPC_EnableReloading(npcid, true);

    // 检查是否启用
    if (NPC_IsReloadEnabled(npcid))
    {
        printf("NPC %d已启用自动换弹", npcid);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreload", true))
    {
        if (NPC_IsReloadEnabled(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0自动换弹已启用");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0自动换弹已禁用");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 自动换弹使 NPC 在弹夹空时自动换弹
- 没有自动换弹的 NPC 在弹夹用完时将停止射击
- 这只影响弹夹弹药，不影响总弹药
- 使用`NPC_EnableReloading`更改换弹设置

## 相关函数

- [NPC_EnableReloading](NPC_EnableReloading): 启用/禁用自动换弹
- [NPC_IsReloading](NPC_IsReloading): 检查是否正在换弹
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取弹夹弹药
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置弹夹弹药

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

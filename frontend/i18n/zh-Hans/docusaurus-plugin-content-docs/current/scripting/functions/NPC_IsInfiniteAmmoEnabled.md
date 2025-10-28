---
title: NPC_IsInfiniteAmmoEnabled
sidebar_label: NPC_IsInfiniteAmmoEnabled
description: 检查 NPC 是否启用了无限弹药。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否启用了无限弹药。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果启用了无限弹药则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_EnableInfiniteAmmo(npcid, true);

    if (NPC_IsInfiniteAmmoEnabled(npcid))
    {
        print("NPC已启用无限弹药");
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinfinite", true))
    {
        new bool:infiniteAmmo = NPC_IsInfiniteAmmoEnabled(0);
        new ammo = NPC_GetAmmo(0);

        new msg[64];
        format(msg, sizeof(msg), "NPC 0: %d发弹药，无限: %s", ammo, infiniteAmmo ? "是" : "否");
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 无限弹药防止 NPC 耗尽弹药
- 弹药计数可能仍显示为减少，但武器功能保持正常
- 对需要持续战斗能力的 NPC 很有用
- 可以通过 NPC_EnableInfiniteAmmo 切换

## 相关函数

- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): 启用/禁用无限弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 武器

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

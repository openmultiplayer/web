---
title: NPC_IsInfiniteAmmoEnabled
sidebar_label: NPC_IsInfiniteAmmoEnabled
description: 检查 NPC 是否启用了无限弹药。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否启用了无限弹药。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果启用了无限弹药则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinfiniteammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:infiniteAmmo = NPC_IsInfiniteAmmoEnabled(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 无限子弹启用: %s", npcid, infiniteAmmo ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 无限弹药防止 NPC 耗尽弹药
- 弹药计数可能仍显示为减少，但武器功能保持正常
- 可以通过 NPC_EnableInfiniteAmmo 切换

## 相关函数

- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): 启用/禁用无限弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 武器

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

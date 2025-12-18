---
title: NPC_EnableInfiniteAmmo
sidebar_label: NPC_EnableInfiniteAmmo
description: 启用或禁用 NPC 的无限弹药。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

启用或禁用 NPC 的无限弹药。

| 参数   | 说明                              |
| ------ | --------------------------------- |
| npcid  | NPC 的 ID                         |
| enable | `true` 启用无限弹药，`false` 禁用 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/toggleinfiniteammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new bool:infinite = NPC_IsInfiniteAmmoEnabled(npcid);
        NPC_EnableInfiniteAmmo(npcid, !infinite);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 无限弹药：%s", npcid, !infinite ? "已启用" : "已禁用");

        return 1;
    }
    return 0;
}
```

## 注意事项

- 启用时，NPC 永远不会耗尽弹药
- 这会影响 NPC 使用的所有武器
- 弹药数量显示可能仍然减少，但武器功能保持正常

## 相关函数

- [NPC_IsInfiniteAmmoEnabled](NPC_IsInfiniteAmmoEnabled): 检查是否启用了无限弹药
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

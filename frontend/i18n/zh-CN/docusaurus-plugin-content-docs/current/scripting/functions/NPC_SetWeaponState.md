---
title: NPC_SetWeaponState
sidebar_label: NPC_SetWeaponState
description: 设置NPC的武器状态
tags: ["npc", "武器", "状态"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的武器状态。

| 参数        | 说明             |
| ----------- | ---------------- |
| npcid       | NPC 的 ID        |
| weaponState | 要设置的武器状态 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponstate ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weaponstate = strval(cmdtext[16]);

        static weaponStates[5][64] =
        {
            "未知",
            "没有剩余弹药",
            "剩下一发子弹",
            "剩余多发子弹",
            "正在换弹"
        };

        NPC_SetWeaponState(npcid, WEAPONSTATE:weaponstate);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器状态设置为：%s (%d)", npcid, weaponStates[weaponstate], weaponstate);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 武器状态控制 NPC 武器的当前动作
- 使用 [NPC_GetWeaponState](NPC_GetWeaponState) 来获取当前状态
- 更改武器状态会影响 NPC 的射击行为

## 相关函数

- [NPC_GetWeaponState](NPC_GetWeaponState): 获取 NPC 武器状态
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 武器
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在装弹

## Related Resources

- [Weapon States](../resources/weaponstates)

## 相关回调

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 当 NPC 武器状态改变时被调用
- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 开火时被调用

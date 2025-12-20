---
title: NPC_GetWeaponState
sidebar_label: NPC_GetWeaponState
description: 获取 NPC 的武器状态。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的武器状态。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回武器状态 ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponstate", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new WEAPONSTATE:state = WEAPONSTATE:NPC_GetWeaponState(npcid);

        static weaponStates[5][64] =
        {
            "未知",
            "没有剩余弹药",
            "剩下一发子弹",
            "剩余多发子弹",
            "正在换弹"
        };

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器状态：%s (%d)", npcid, weaponStates[state], _:state);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 武器状态包括换弹、射击、弹药耗尽等
- 使用此函数检查 NPC 武器的当前状态
- 状态值对应 PlayerWeaponState 常量

## 相关函数

- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹
- [NPC_IsShooting](NPC_IsShooting): 检查 NPC 是否正在射击
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取弹夹中的弹药

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用

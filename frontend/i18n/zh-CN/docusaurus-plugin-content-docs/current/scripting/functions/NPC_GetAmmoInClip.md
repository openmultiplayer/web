---
title: NPC_GetAmmoInClip
sidebar_label: NPC_GetAmmoInClip
description: 获取 NPC 武器当前弹夹中的弹药数量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 武器当前弹匣中的弹药数量。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前武器弹匣中的弹药数量。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkclip", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new clip = NPC_GetAmmoInClip(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 弹匣中还有 %d 发子弹", npcid, clip);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回武器弹匣中当前装载的弹药数量，与返回 NPC 总弹药的 [NPC_GetAmmo](NPC_GetAmmo) 不同
- 弹匣大小根据武器类型而变化

## 相关函数

- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置弹匣中的弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取总弹药数量
- [NPC_SetAmmo](NPC_SetAmmo): 设置总弹药数量
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

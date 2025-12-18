---
title: NPC_IsReloadEnabled
sidebar_label: NPC_IsReloadEnabled
description: 检查 NPC 是否启用了自动换弹。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否启用了自动换弹。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果启用了自动换弹则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloadenabled", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isReloadEnabled = NPC_IsReloadEnabled(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 启用自动换弹: %s", npcid, isReloadEnabled ? "是" : "否");
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

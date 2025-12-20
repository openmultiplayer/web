---
title: NPC_IsReloading
sidebar_label: NPC_IsReloading
description: 检查 NPC 是否正在换弹。
tags: ["npc", "武器", "换弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否正在换弹。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在换弹则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloading", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isReloading = NPC_IsReloading(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在换弹: %s", npcid, isReloading ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在实际换弹动画期间返回 true
- 弹夹中弹药耗尽时自动换弹
- 使用 NPC_EnableReloading 控制换弹行为

## 相关函数

- [NPC_EnableReloading](NPC_EnableReloading): 启用/禁用换弹
- [NPC_Reload](NPC_Reload): 强制 NPC 换弹
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取弹夹中的弹药
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取换弹时间

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

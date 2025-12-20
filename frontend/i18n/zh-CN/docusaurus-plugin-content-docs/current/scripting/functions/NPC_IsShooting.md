---
title: NPC_IsShooting
sidebar_label: NPC_IsShooting
description: 检查 NPC 是否正在射击。
tags: ["npc", "武器", "射击"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否正在射击。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在射击则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkshooting", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isShooting = NPC_IsShooting(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在射击: %s", npcid, isShooting ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在实际射击动作期间返回 true
- NPC 必须有武器和弹药才能射击

## 相关函数

- [NPC_Shoot](NPC_Shoot): 让 NPC 射击
- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准并射击
- [NPC_StopShoot](NPC_StopShoot): 停止 NPC 射击
- [NPC_IsAiming](NPC_IsAiming): 检查是否正在瞄准

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 射击时调用
- [../callbacks/OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对玩家造成伤害时调用

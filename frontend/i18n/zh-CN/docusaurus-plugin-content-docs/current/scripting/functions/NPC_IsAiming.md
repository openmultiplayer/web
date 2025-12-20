---
title: NPC_IsAiming
sidebar_label: NPC_IsAiming
description: 检查 NPC 是否正在瞄准。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否正在瞄准。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在瞄准则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaiming", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isAiming = NPC_IsAiming(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在瞄准: %s", npcid, isAiming ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 当 NPC 正在进行瞄准目标时返回 true
- 使用此函数检查 NPC 是否处于战斗模式
- 瞄准可以通过 NPC_AimAt 或 NPC_AimAtPlayer 启动
- NPC 会持续瞄准直到使用 NPC_StopAim 停止

## 相关函数

- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准位置
- [NPC_AimAtPlayer](NPC_AimAtPlayer): 让 NPC 瞄准玩家
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): 检查是否瞄准特定玩家

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

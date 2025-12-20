---
title: NPC_StopAim
sidebar_label: NPC_StopAim
description: 停止 NPC 的瞄准状态。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

停止 NPC 对任何目标的瞄准。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/friendly", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        NPC_StopAim(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 停止瞄准。", npcid);
}
```

## 注意事项

- 如果 NPC 同时在瞄准和射击，这将停止两者
- NPC 在停止瞄准后将回到正常姿态
- 如果 NPC 当前没有瞄准，则此函数无效

## 相关函数

- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准位置
- [NPC_AimAtPlayer](NPC_AimAtPlayer): 让 NPC 瞄准玩家
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否在瞄准
- [NPC_Shoot](NPC_Shoot): 让 NPC 射击

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用

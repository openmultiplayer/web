---
title: NPC_EnableReloading
sidebar_label: NPC_EnableReloading
description: 启用或禁用 NPC 的自动重新装弹。
tags: ["npc", "武器", "换弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

启用或禁用 NPC 的自动换弹。

| 参数   | 说明                              |
| ------ | --------------------------------- |
| npcid  | NPC 的 ID                         |
| enable | `true` 启用换弹，`false` 禁用换弹 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/togglereload", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new bool:reload = NPC_IsReloadEnabled(npcid);
        NPC_EnableReloading(npcid, !reload);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 换弹：%s", npcid, !reload ? "已启用" : "已禁用");

        return 1;
    }
    return 0;
}
```

## 注意事项

- 启用时，NPC 会在弹匣空了时自动换弹
- 禁用时，NPC 不会换弹，最终会耗尽弹匣中的弹药
- 换弹时间可以使用 `NPC_SetWeaponReloadTime` 自定义

## 相关函数

- [NPC_IsReloadEnabled](NPC_IsReloadEnabled): 检查是否启用了换弹
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹
- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): 设置武器换弹时间
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取武器换弹时间

## 相关回调

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): NPC 武器状态改变时调用

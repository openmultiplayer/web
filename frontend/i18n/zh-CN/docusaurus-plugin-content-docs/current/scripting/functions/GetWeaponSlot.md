---
title: GetWeaponSlot
sidebar_label: GetWeaponSlot
description: 获取武器的槽位编号。
tags: ["武器"]
---

<versionWarn version='omp v1.1.0.2612' />

## 描述

获取指定武器对应的槽位编号。

| 参数名          | 说明               |
| --------------- | ------------------ |
| WEAPON:weaponid | 目标武器的 ID 编号 |

## 返回值

返回对应的[武器槽位](../resources/weaponslots)编号（0 - 12）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/weaponslot", true) == 0)
    {
        new WEAPON:weaponid = GetPlayerWeapon(playerid); // 存储玩家当前手持武器的ID
        new WEAPON_SLOT:slot = GetWeaponSlot(weaponid);  // 存储武器对应的槽位编号
        SendClientMessage(playerid, -1, "当前武器占用槽位：%d", slot); // 向玩家发送格式化消息
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前持有的武器 ID
- [GetPlayerWeaponData](GetPlayerWeaponData): 获取玩家指定槽位的武器及弹药数据（例如 SMG 槽位）
- [GetPlayerAmmo](GetPlayerAmmo): 获取玩家当前武器的剩余弹药量
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): 设置玩家切换至已持有的指定武器
- [ResetPlayerWeapon](ResetPlayerWeapons): 清空玩家所有武器
- [RemovePlayerWeapon](RemovePlayerWeapon): 移除玩家持有的指定武器

## 相关资源

- [武器槽位系统](../resources/weaponslots)

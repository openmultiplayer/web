---
title: GetWeaponName
sidebar_label: GetWeaponName
description: 获取武器的名称。
tags: []
---

## 描述

获取指定武器的名称。

| 参数名                | 说明                                                  |
| --------------------- | ----------------------------------------------------- |
| WEAPON:weaponid       | 武器的 ID 编号                                        |
| weapon[]              | 存储武器名称的数组（按引用传递）                      |
| len = sizeof (weapon) | 应存储的武器名称最大长度（通常使用 sizeof(name)获取） |

## 返回值

**true** - 操作成功执行

**false** - 操作执行失败（指定武器不存在）

武器的名称将被存储到指定数组中。

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 变量声明，killerName默认值为"World"
    new
        weaponName[32],
        string[64],
        playerName[MAX_PLAYER_NAME],
        killerName[MAX_PLAYER_NAME] = "World";

    // 获取武器/击杀原因及玩家昵称
    GetWeaponName(reason, weaponName, sizeof(weaponName));
    GetPlayerName(playerid, playerName, sizeof(playerName));

    // 检测玩家是否被其他玩家击杀
    if (killerid != INVALID_PLAYER_ID)
    {
        // 清空killerName字符串
        killerName[0] = EOS;
        // 获取击杀者名称
        GetPlayerName(killerid, killerName, sizeof(killerName));
    }

    // 向全局聊天发送死亡信息
    format(string, sizeof(string), "%s (%i) 使用 %s 击杀了 %s (%i)", killerName, killerid, playerName, playerid, weaponName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## 相关函数

- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前持有的武器
- [AllowInteriorWeapons](AllowInteriorWeapons): 设置室内是否允许使用武器
- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家指定武器

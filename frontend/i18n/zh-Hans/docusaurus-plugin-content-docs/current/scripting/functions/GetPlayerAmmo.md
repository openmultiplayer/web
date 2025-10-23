---
title: GetPlayerAmmo
sidebar_label: GetPlayerAmmo
description: 获取玩家当前武器的弹药量
tags: ["玩家"]
---

## 描述

获取玩家当前武器的弹药量。

| 名称     | 描述                    |
| -------- | ----------------------- |
| playerid | 需要获取弹药量的玩家 ID |

## 返回值

玩家当前武器的弹药数量。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myammo", true))
    {
        new
            ammo = GetPlayerAmmo(playerid),
            string[32];

        format(string, sizeof(string), "你的弹药量: %i", ammo);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

弹药量使用 16 位存储，超过 32767 时返回值会出现错误。

:::

## 相关函数

- [SetPlayerAmmo](SetPlayerAmmo): 设置指定玩家武器的弹药量
- [GetPlayerWeaponData](GetPlayerWeaponData): 获取玩家武器数据信息

---
title: SetPlayerShopName
sidebar_label: SetPlayerShopName
description: 加载或卸载玩家的室内脚本（例如武器店菜单）。
tags: ["玩家"]
---

## 描述

加载或卸载玩家的室内脚本（例如武器店菜单）。

| 名称             | 说明                                                               |
| ---------------- | ------------------------------------------------------------------ |
| playerid         | 要加载室内脚本的玩家 ID                                            |
| const shopname[] | 要加载的[商店脚本](../resources/shopnames)。留空("")可卸载当前脚本 |

## 返回值

本函数不返回任何特定值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/enter", cmdtext))
    {
        SetPlayerInterior(playerid, 5);
        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);
        SetPlayerShopName(playerid, "FDPIZA");
        SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到披萨栈！");
        return 1;
    }
    return 0;
}
```

## 注意

:::tip

本函数不支持赌场脚本。

:::

## 相关函数

- [DisableInteriorEnterExits](DisableInteriorEnterExits): 禁用黄色门框标记
- [SetPlayerInterior](SetPlayerInterior): 设置玩家室内环境

## 相关资源

- [商店脚本列表](../resources/shopnames)

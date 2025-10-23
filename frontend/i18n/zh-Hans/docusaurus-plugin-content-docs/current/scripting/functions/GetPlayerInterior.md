---
title: GetPlayerInterior
sidebar_label: GetPlayerInterior
description: 获取玩家当前所在的室内编号
tags: ["玩家"]
---

## 描述

获取玩家当前所在的室内编号。已知室内编号及对应坐标位置可参考[室内位置列表](../../resources/interiorids)

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取室内编号的玩家 ID |

## 返回值

玩家当前所在的室内编号（整数类型）

## 示例代码

```c
public OnPlayerCommandText(playerid,text[])
{
    if (strcmp(cmdtext, "/int", true) == 0)
    {
        new string[64];
        format(string, sizeof(string), "你当前所在的室内编号是 %i", GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

NPC 玩家将始终返回室内编号 0

:::

## 相关函数

- [SetPlayerInterior](SetPlayerInterior): 设置玩家的室内编号
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): 获取玩家所在的虚拟世界

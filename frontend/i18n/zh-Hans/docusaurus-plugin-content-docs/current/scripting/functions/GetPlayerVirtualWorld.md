---
title: GetPlayerVirtualWorld
sidebar_label: GetPlayerVirtualWorld
description: 获取玩家当前所在的虚拟世界
tags: ["玩家"]
---

## 描述

获取玩家当前所在的虚拟世界编号

| 名称     | 说明                          |
| -------- | ----------------------------- |
| playerid | 需要获取虚拟世界信息的玩家 ID |

## 返回值

玩家当前所在的虚拟世界编号

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/world", true))
    {
        new string[32];
        format(string, sizeof(string), "您所在的虚拟世界编号：%i", GetPlayerVirtualWorld(playerid));
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

虚拟世界与室内空间（Interior）是两个独立的概念

:::

## 相关函数

- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): 设置玩家虚拟世界
- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): 获取车辆所在虚拟世界
- [GetPlayerInterior](GetPlayerInterior): 获取玩家当前室内空间编号

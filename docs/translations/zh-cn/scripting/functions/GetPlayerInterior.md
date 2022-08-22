---
title: GetPlayerInterior
description: 检索玩家当前的内部空间。
tags: ["player"]
---

## 描述

检索玩家当前的内部空间。目前已知的内部空间及其位置可以在[这里](../resources/interiorids)找到。

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 要获取的玩家 ID。 |

## 返回值

玩家当前所处的内部空间 ID。

## 案例

```c
public OnPlayerCommandText(playerid,text[])
{
    if (strcmp(cmdtext,"/int",true) == 0)
    {
        new string[128];
        format(string, sizeof(string), "你所处的内部空间是 %i",GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, string);
        return 1;
    }
    return 0;
}
```

## 要点

:::tip

对于 npc 将始终返回 0。

:::

## 相关函数

- [SetPlayerInterior](SetPlayerInterior): 设置某个玩家的内部空间。
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): 检索玩家所处的虚拟世界。

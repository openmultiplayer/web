---
title: OnPlayerSelectObject
description: This callback is called when a player selects an object after SelectObject has been used.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3e' />

## 描述

This callback is called when a player selects an object after SelectObject has been used.

| 参数名   | 描述                                                    |
| -------- | ------------------------------------------------------- |
| playerid | The ID of the player that selected an object            |
| type     | The [type](../resources/selectobjecttypes) of selection |
| objectid | The ID of the selected object                           |
| modelid  | The model of the selected object                        |
| Float:fX | The X position of the selected object                   |
| Float:fY | The Y position of the selected object                   |
| Float:fZ | The Z position of the selected object                   |

## 返回值

1 - 将阻止其他脚本接收此回调。

0 - 指示此回调将传递给下一个脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Player %d selected object %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");
    return 1;
}
```

## 相关函数

- [SelectObject](../functions/SelectObject): Select an object.

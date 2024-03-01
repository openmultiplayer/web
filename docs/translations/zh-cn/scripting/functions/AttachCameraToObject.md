---
title: AttachCameraToObject
description: 您可以使用此函数将玩家视角附加到物体上。
tags: []
---

## 描述

您可以使用此函数将玩家视角附加到物体上。

| 参数名   | 说明                        |
| -------- | --------------------------- |
| playerid | 将视角附加到物体上的玩家 ID |
| objectid | 将视角附加到的物体 ID       |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "你的视角现在附加到物体上了。");
        return 1;
    }
    return 0;
}
```

## 要点

:::tip

在试图将玩家的视角附加到物体之前，必须先创建物体。

:::

## 相关函数

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): 将玩家的视角附加在玩家物体上。

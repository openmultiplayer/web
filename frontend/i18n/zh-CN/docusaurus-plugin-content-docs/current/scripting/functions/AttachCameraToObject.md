---
title: AttachCameraToObject
sidebar_label: AttachCameraToObject
description: 您可以使用此功能将玩家视角附加到物体上。
tags: ["玩家", "物体"]
---

## 描述

您可以使用此功能将玩家视角附加到物体上。

| 名称     | 说明                    |
| -------- | ----------------------- |
| playerid | 需要附加视角的玩家 ID   |
| objectid | 要附加玩家视角的物体 ID |

## 返回值

本函数没有特定返回值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is attached on object now.");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

在附加玩家视角之前，必须先创建对应的物体。

:::

## 相关函数

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): 将玩家视角附加到玩家创建的物体上

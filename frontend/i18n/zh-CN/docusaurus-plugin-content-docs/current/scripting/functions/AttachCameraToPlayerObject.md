---
title: AttachCameraToPlayerObject
sidebar_label: AttachCameraToPlayerObject
description: 将玩家的视角附加到玩家创建的物体上。
tags: ["玩家", "视角"]
---

## 描述

将玩家的视角附加到玩家创建的物体上。玩家在视角附加期间仍可自由操控视角，可与 MovePlayerObject 及 AttachPlayerObjectToVehicle 配合使用。

| 名称           | 说明                          |
| -------------- | ----------------------------- |
| playerid       | 需要附加视角的玩家 ID         |
| playerobjectid | 要附加视角的玩家创建的物体 ID |

## 返回值

本函数没有特定返回值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is now attached to an object.");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

在附加玩家视角之前，必须先创建对应的玩家创建的物体。

:::

## 相关函数

- [AttachCameraToObject](AttachCameraToObject): 将玩家视角附加到全局物体上
- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家视角位置
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家视角的观察点

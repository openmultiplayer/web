---
title: AttachCameraToPlayerObject
description: 将玩家的视角附加在玩家物体上。
tags: ["player", "camera"]
---

## 描述

将玩家的视角附加在玩家物体上。当视角附加在物体上时，玩家可以移动视角。可与 MovePlayerObject 和 AttachPlayerObjectToVehicle 一起使用。

| 参数名         | 说明                                  |
| -------------- | ------------------------------------- |
| playerid       | 将视角附加到玩家物体的玩家 ID。       |
| playerobjectid | 玩家的视角将被附加到的玩家物体的 ID。 |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "你的视角现在已经附加到了一个物体上。");
        return 1;
    }
    return 0;
}
```

## 要点

:::tip

在试图将玩家的视角附加到物体之前，必须先创建玩家物体。

:::

## 相关函数

- [AttachCameraToObject](AttachCameraToObject): 将玩家的视角附加在一个全局物体上。
- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置。
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家的视角所看的方向。

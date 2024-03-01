---
title: GetPlayerCameraMode
description: 返回所请求玩家的当前GTA视角模式。
tags: ["player", "camera"]
---

## 描述

返回所请求玩家的当前 GTA [视角模式](../resources/cameramodes)。视角模式在判断玩家是否在瞄准、作为乘客在车内射击等方面非常有用。

| 参数名   | 说明                    |
| -------- | ----------------------- |
| playerid | 要检索视角模式的玩家 ID |

## 返回值

整数形式的视角模式(如果玩家没有连接则为-1)

## 案例

```c
/* 当玩家在聊天框中输入“cameramode”时，他们会看到下面的消息。 */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "cameramode", true) == 0)
    {
        new szMessage[22];
        format(szMessage, sizeof(szMessage), "你的视角模式是: %d", GetPlayerCameraMode(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## 相关函数

- [GetPlayerCameraPos](GetPlayerCameraPos): 找出玩家的视角在哪里。
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角的前向量。
- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置。
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家的视角所看的方向。
- [SetCameraBehindPlayer](SetCameraBehindPlayer): 重置视角到玩家后面。

---
title: GetPlayerCameraMode
sidebar_label: GetPlayerCameraMode
description: 返回指定玩家当前的GTA视角模式。
tags: ["玩家", "视角"]
---

## 描述

返回指定玩家当前的 GTA[视角模式](../resources/cameramodes)。该模式可用于判断玩家是否处于瞄准、乘客位射击等状态。

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取视角模式的玩家 ID |

## 返回值

整数形式的视角模式（若玩家未连接则返回-1）

## 示例代码

```c
/* 当玩家在聊天框输入'cameramode'时，将显示此信息 */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "cameramode", true) == 0)
    {
        new string[48];
        format(string, sizeof(string), "当前视角模式: %d", GetPlayerCameraMode(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```

## 相关函数

- [GetPlayerCameraPos](GetPlayerCameraPos): 获取玩家视角位置
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家视角位置
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家视角焦点
- [SetCameraBehindPlayer](SetCameraBehindPlayer): 重置玩家视角至背后

## 相关资源

- [视角模式列表](../resources/cameramodes)

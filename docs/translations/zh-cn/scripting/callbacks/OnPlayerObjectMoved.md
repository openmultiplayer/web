---
title: OnPlayerObjectMoved
description: 当玩家物体在MovePlayerObject之后移动时(当它停止移动时)，该回调被调用。
tags: ["player"]
---

## 描述

当玩家物体在 MovePlayerObject 之后移动时(当它停止移动时)，该回调被调用。

| 参数名   | 描述              |
| -------- | ----------------- |
| playerid | 移动物体的玩家 ID |
| objectid | 被移动的物体 ID   |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("玩家物体移动完毕: 物体id: %d 玩家id: %d", objectid, playerid);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数

- [MovePlayerObject](../functions/MovePlayerObject): 移动玩家物体。
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): 检查玩家物体是否在移动。
- [StopPlayerObject](../functions/StopPlayerObject): 阻止玩家物体移动。
- [CreatePlayerObject](../functions/CreatePlayerObject): 只为一个玩家创建一个物体。
- [DestroyPlayerObject](../functions/DestroyPlayerObject): 销毁玩家物体。

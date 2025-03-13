---
title: OnPlayerObjectMoved
sidebar_label: OnPlayerObjectMoved
description: 当玩家物体通过MovePlayerObject移动完成后触发该回调函数。
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

当玩家物体通过[MovePlayerObject](../functions/MovePlayerObject)移动并停止时触发该回调函数。

| 参数名   | 说明                   |
| -------- | ---------------------- |
| playerid | 该玩家物体所属的玩家ID |
| objectid | 被移动的玩家物体ID     |

## 返回值

该回调始终在滤镜脚本中优先触发

## 示例

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("玩家物体已移动：物体ID: %d 所属玩家: %d", objectid, playerid);
    return 1;
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

## 相关回调

以下回调函数可能与本回调相关：

- [OnObjectMoved](OnObjectMoved): 当全局物体停止移动时触发

## 相关函数

以下函数可能与本回调函数相关：

- [MovePlayerObject](../functions/MovePlayerObject): 移动玩家物体
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): 检测玩家物体是否在移动中
- [StopPlayerObject](../functions/StopPlayerObject): 停止玩家物体的移动
- [CreatePlayerObject](../functions/CreatePlayerObject): 创建玩家私有物体
- [DestroyPlayerObject](../functions/DestroyPlayerObject): 销毁玩家物体

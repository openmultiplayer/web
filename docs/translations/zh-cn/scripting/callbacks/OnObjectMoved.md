---
title: OnObjectMoved
description: 当物体在MoveObject之后移动时(当物体停止移动时)调用此回调。
tags: []
---

## 描述

当物体在 MoveObject 之后移动时(当物体停止移动时)调用此回调。

| 参数名   | 描述          |
| -------- | ------------- |
| objectid | 移动的物体 ID |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnObjectMoved(objectid)
{
    printf("物体 %d 完成了移动。", objectid);
    return 1;
}
```

## 要点

:::tip

在此回调中使用 SetObjectPos 时不起作用。要修复该问题，请重新创建该物体。

:::

## 相关函数

- [MoveObject](../functions/MoveObject): 移动物体。
- [MovePlayerObject](../functions/MovePlayerObject): 移动玩家物体。
- [IsObjectMoving](../functions/IsObjectMoving): 检查物体是否在移动。
- [StopObject](../functions/StopObject): 阻止物体移动。

## 相关回调

- [OnPlayerObjectMoved](OnPlayerObjectMoved): 当玩家物体停止移动时调用。

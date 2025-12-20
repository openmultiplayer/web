---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: 当物体通过MoveObject移动并停止时触发此回调
tags: ["物体"]
---

## 描述

当物体通过MoveObject函数移动并停止时触发此回调。

| 参数     | 说明               |
| -------- | ------------------ |
| objectid | 已完成移动的物体ID |

## 返回值

此回调在滤镜脚本中总是优先触发。

## 示例

```c
public OnObjectMoved(objectid)
{
    printf("物体 %d 移动完成。", objectid);
    return 1;
}
```

## 注意

:::tip

在回调中使用[SetObjectPos](../functions/SetObjectPos)函数无效，需通过重新创建物体解决此问题

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerObjectMoved](OnPlayerObjectMoved)：当玩家物体停止移动时触发

## 相关函数

以下函数可能与当前回调相关：

- [MoveObject](../functions/MoveObject)：移动全局物体
- [MovePlayerObject](../functions/MovePlayerObject)：移动玩家个人物体
- [IsObjectMoving](../functions/IsObjectMoving)：检测物体是否在移动中
- [StopObject](../functions/StopObject)：停止物体移动

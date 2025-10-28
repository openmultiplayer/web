---
title: Attach3DTextLabelToPlayer
sidebar_label: Attach3DTextLabelToPlayer
description: 将3D文本标签附加到玩家身上。
tags: ["玩家", "3d文本标签"]
---

## 描述

将 3D 文本标签附加到玩家身上。

| 参数          | 说明                                                 |
| ------------- | ---------------------------------------------------- |
| Text3D:textid | 要附加的 3D 文本标签 ID（由 Create3DTextLabel 返回） |
| playerid      | 要附加标签的玩家 ID                                  |
| Float:offsetX | 玩家坐标的 X 轴偏移量                                |
| Float:offsetY | 玩家坐标的 Y 轴偏移量                                |
| Float:offsetZ | 玩家坐标的 Z 轴偏移量                                |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家和/或标签不存在）

## 示例

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个 3D 文本标签
- [Delete3DTextLabel](Delete3DTextLabel): 删除 3D 文本标签
- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): 获取已附加的 3D 文本标签数据
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将 3D 文本标签附加到车辆
- [Update3DTextLabelText](Update3DTextLabelText): 更新 3D 文本标签的文本内容
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为单个玩家创建 3D 文本标签
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除玩家的 3D 文本标签
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 更新玩家的 3D 文本标签文本

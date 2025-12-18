---
title: Attach3DTextLabelToVehicle
sidebar_label: Attach3DTextLabelToVehicle
description: 将3D文本标签附加到指定车辆上。
tags: ["车辆", "3d文本标签"]
---

## 描述

将 3D 文本标签附加到指定车辆上。

| 参数          | 说明                                                    |
| ------------- | ------------------------------------------------------- |
| Text3D:textid | 要附加的 3D 文本标签 ID                                 |
| parentid      | 要附加的车辆 ID                                         |
| Float:offsetX | 车辆坐标的 X 轴偏移量（原点为车辆坐标 `0.0, 0.0, 0.0`） |
| Float:offsetY | 车辆坐标的 Y 轴偏移量（原点为车辆坐标 `0.0, 0.0, 0.0`） |
| Float:offsetZ | 车辆坐标的 Z 轴偏移量（原点为车辆坐标 `0.0, 0.0, 0.0`） |

## 返回值

此函数不返回特定值。

## 示例

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // Creating the TextLabel for later use
    gVehicleId;

public OnGameModeInit()
{
    gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120); // Creating the Vehicle.
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0); // Attaching Text Label To Vehicle.
    return 1;
}

public OnGameModeExit()
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return 1;
}
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个 3D 文本标签
- [Delete3DTextLabel](Delete3DTextLabel): 删除 3D 文本标签
- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): 获取已附加的 3D 文本标签数据
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将 3D 文本标签附加到玩家
- [Update3DTextLabelText](Update3DTextLabelText): 更新 3D 文本标签的文本内容
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为单个玩家创建 3D 文本标签
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除玩家的 3D 文本标签
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 更新玩家的 3D 文本标签文本

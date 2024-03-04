---
title: Attach3DTextLabelToVehicle
description: 将一个三维文本标签附加到特定的载具上。
tags: ["vehicle", "3dtextlabel"]
---

## 描述

将一个三维文本标签附加到特定的载具上。

| 参数名    | 说明                                 |
| --------- | ------------------------------------ |
| Text3D:id | 你想附加的三维文本标签。             |
| vehicleid | 你想把三维文本标签附加在哪个载具上。 |
| OffsetX   | 载具的 X 坐标偏移量。                |
| OffsetY   | 载具的 Y 坐标偏移量。                |
| OffsetZ   | 载具的 Z 坐标偏移量。                |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // 创建文本标签供以后使用
    gVehicleId;

public OnGameModeInit ( )
{
    gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120); // 创建载具。
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], vehicle_id, 0.0, 0.0, 2.0); // 将文本标签附加到该载具上。
}

public OnGameModeExit ( )
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return true;
}
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个三维文本标签。
- [Delete3DTextLabel](Delete3DTextLabel): 删除一个三维文本标签。
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将三维文本标签附加到玩家身上。
- [Update3DTextLabelText](Update3DTextLabelText): 改变三维文本标签的文本内容和颜色。
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为玩家创建一个三维文本标签。
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除一个为玩家创建的三维文本标签。
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 改变玩家的三维文本标签的文本内容和颜色。

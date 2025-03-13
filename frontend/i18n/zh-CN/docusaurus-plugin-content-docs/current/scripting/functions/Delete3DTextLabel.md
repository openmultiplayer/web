---
title: Delete3DTextLabel
sidebar_label: Delete3DTextLabel
description: 删除通过Create3DTextLabel创建的3D文本标签。
tags: ["3d文本标签"]
---

## 描述

该函数用于删除通过[Create3DTextLabel](Create3DTextLabel)创建的 3D 文本标签。

| 参数名        | 描述                    |
| ------------- | ----------------------- |
| Text3D:textid | 要删除的 3D 文本标签 ID |

## 返回值

- ​**true**​ - 3D 文本标签删除成功
- ​**false**​ - 3D 文本标签删除失败

## 示例

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    // 创建3D文本标签
    gMyLabel = Create3DTextLabel("当前坐标:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

// 稍后使用时删除标签
Delete3DTextLabel(gMyLabel);
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建 3D 文本标签
- [IsValid3DTextLabel](IsValid3DTextLabel): 验证 3D 文本标签是否有效
- [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): 检查 3D 文本标签是否对玩家可见
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将标签附加到玩家身上
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将标签附加到车辆上
- [Update3DTextLabelText](Update3DTextLabelText): 更新标签文本内容
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为单个玩家创建标签
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除玩家的私有标签
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 更新玩家私有标签文本

---
title: Update3DTextLabelText
sidebar_label: Update3DTextLabelText
description: 更新3D文本标签的文本内容及颜色
tags: ["3D文本标签"]
---

## 描述

动态修改已创建的 3D 文本标签显示内容及颜色配置。

| 参数             | 说明                                 |
| ---------------- | ------------------------------------ |
| Text3D:textid    | 需要更新的 3D 文本标签 ID            |
| colour           | 新的 ARGB 颜色值（格式：0xAARRGGBB） |
| const text[]     | 支持格式化的新文本内容               |
| OPEN_MP_TAGS:... | 不定数量的格式化参数                 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
new Text3D:mylabel;

public OnGameModeInit()
{
    mylabel = Create3DTextLabel("当前坐标：\n30.0,40.0,50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);

    Update3DTextLabelText(mylabel, 0xFF0000FF, "坐标已更新"); // 修改为红色文字
    return 1;
}
```

## 注意事项

:::warning

在旧版 SA-MP 中，若文本内容为空可能导致客户端崩溃（open.mp 版本已修复此问题）

:::

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建 3D 文本标签
- [Delete3DTextLabel](Delete3DTextLabel): 删除 3D 文本标签
- [Get3DTextLabelText](Get3DTextLabelText): 获取 3D 文本标签内容
- [Get3DTextLabelColour](Get3DTextLabelColour): 获取 3D 文本标签颜色值
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将 3D 文本标签附加到玩家
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将 3D 文本标签附加到车辆
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 创建玩家专属 3D 文本标签
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除玩家专属标签
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 更新玩家专属标签内容

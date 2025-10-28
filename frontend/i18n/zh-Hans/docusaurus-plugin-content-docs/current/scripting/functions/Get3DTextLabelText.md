---
title: Get3DTextLabelText
sidebar_label: Get3DTextLabelText
description: 获取3D文本标签的文字内容
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 文本标签的显示文字内容。

| 参数          | 说明                                               |
| ------------- | -------------------------------------------------- |
| Text3D:textid | 要获取文字的 3D 文本标签 ID                        |
| const text[]  | 用于存储文字的字符数组（按引用传递）               |
| len           | 文字缓冲区最大容量（建议使用 sizeof 获取数组长度） |

## 示例

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("你好 世界!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

    new text[16];
    Get3DTextLabelText(gMyLabel, text, sizeof(text));
    // `文本`将显示为 '你好 世界!'
    return 1;
}
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建 3D 文本标签
- [Update3DTextLabelText](Update3DTextLabelText): 更新 3D 文本标签内容及颜色
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): 获取玩家专属 3D 文本标签文字

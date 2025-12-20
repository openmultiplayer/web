---
title: GetPlayer3DTextLabelText
sidebar_label: GetPlayer3DTextLabelText
description: 获取玩家3D文本标签的文本内容
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 3D 文本标签的文本内容。

| 参数                | 说明                              |
| ------------------- | --------------------------------- |
| playerid            | 玩家的 ID                         |
| PlayerText3D:textid | 需要获取文本的玩家 3D 文本标签 ID |
| text[]              | 存储文本内容的数组，通过引用传递  |
| len                 | 待存储文本的最大长度              |

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new text[16];

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello World!", 0x008080FF, X, Y, Z, 40.0);

GetPlayer3DTextLabelText(playerid, playerTextId, text, sizeof(text));
// text = "Hello World!"
```

## 相关函数

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为指定玩家创建 3D 文本标签
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 更新玩家 3D 文本标签的内容和颜色
- [Get3DTextLabelText](Get3DTextLabelText): 获取 3D 文本标签的文本内容

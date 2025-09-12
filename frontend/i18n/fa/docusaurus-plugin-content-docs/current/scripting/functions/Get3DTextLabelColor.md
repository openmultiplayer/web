---
title: Get3DTextLabelColor
sidebar_label: Get3DTextLabelColor
description: رنگ 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

:::warning

این تابع deprecated شده. لطفاً [Get3DTextLabelColour](Get3DTextLabelColour) رو ببین.

:::

## توضیحات

رنگ 3D text label رو میگیره.

| نام           | توضیحات                                       |
| ------------- | -------------------------------------------- |
| Text3D:textid | ID ‌ 3D text label که میخوایم رنگاش رو بگیریم. |

## برگشتی

رنگ 3D text label رو برمیگردونه.

## مثال‌ها

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new color = Get3DTextLabelColor(gMyLabel);
// color = 0x008080FF
```

## توابع مرتبط

- [GetPlayer3DTextLabelColor](GetPlayer3DTextLabelColor): گرفتن رنگ player 3D text label.
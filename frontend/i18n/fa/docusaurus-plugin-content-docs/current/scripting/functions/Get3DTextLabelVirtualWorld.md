---
title: Get3DTextLabelVirtualWorld
sidebar_label: Get3DTextLabelVirtualWorld
description: ID دنیای مجازی 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ID دنیای مجازی 3D text label رو میگیره.

| نام           | توضیحات                                                       |
| ------------- | ------------------------------------------------------------ |
| Text3D:textid | ID ‌ 3D text label که میخوایم ID دنیای مجازیاش رو بگیریم.      |

## برگشتی

ID دنیای مجازی 3D text label رو برمیگردونه.

## مثال‌ها

```c
new Text3D:gMyLabel;
new worldid;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

worldid = Get3DTextLabelVirtualWorld(gMyLabel);
// worldid = 20
```

## توابع مرتبط

- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): تنظیم ID دنیای مجازی 3D text label.
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): گرفتن ID دنیای مجازی player 3D text label.
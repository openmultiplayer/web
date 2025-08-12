---
title: Get3DTextLabelText
sidebar_label: Get3DTextLabelText
description: متن 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

متن 3D text label رو میگیره.

| نام           | توضیحات                                                    |
| ------------- | --------------------------------------------------------- |
| Text3D:textid | ID ‌ 3D text label که میخوایم متناش رو بگیریم.              |
| const text[]  | یه آرایه که متن رو توش ذخیره میکنیم، با reference پاس میشه.  |
| len           | طول متنی که باید ذخیره بشه.                                |

## مثال‌ها

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    
    new text[16];
    Get3DTextLabelText(gMyLabel, text, sizeof(text));
    // `text` میشه 'Hello World!'
    return 1;
}
```

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): ساختن یه 3D text label.
- [Update3DTextLabelText](Update3DTextLabelText): آپدیت کردن متن و رنگ یه 3D Text Label.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): گرفتن متن player 3D text label.
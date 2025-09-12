---
title: Update3DTextLabelText
sidebar_label: Update3DTextLabelText
description: متن و رنگ یک 3D Text Label رو آپدیت کن.
tags: ["3dtextlabel"]
---

## توضیحات

متن و رنگ یک 3D Text Label رو آپدیت می‌کنه.

| نام              | توضیحات                                                   |
| ---------------- | ------------------------------------------------------------- |
| Text3D:textid    | 3D Text Label ای که می‌خوای آپدیت کنی.                         |
| colour           | رنگی که 3D Text Label از الان باید داشته باشه.          |
| const text[]     | متن جدیدی که 3D Text Label از الان باید داشته باشه. |
| OPEN_MP_TAGS:... | تعداد نامحدودی از آرگومان‌ها با هر tag ای.                    |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text3D:mylabel;

public OnGameModeInit()
{
    mylabel = Create3DTextLabel("I'm at the coordinates:\n30.0,40.0,50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);

    Update3DTextLabelText(mylabel, 0xFF0000FF, "New text.");
    return 1;
}
```

## نکات

:::warning

اگه text[] خالی باشه، سرور/کلاینت‌های کنار متن ممکنه crash کنن! (توی open.mp درست شده)

:::

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): یک 3D text label بساز.
- [Delete3DTextLabel](Delete3DTextLabel): یک 3D text label رو پاک کن.
- [Get3DTextLabelText](Get3DTextLabelText): متن 3D text label رو بدست بیار.
- [Get3DTextLabelColour](Get3DTextLabelColour): رنگ 3D text label رو بدست بیار.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): یک 3D text label رو به بازیکن وصل کن.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): یک 3D text label رو به وسیله نقلیه وصل کن.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): یک 3D text label برای یک بازیکن بساز.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 3D text label بازیکن رو پاک کن.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): متن 3D text label بازیکن رو تغییر بده.

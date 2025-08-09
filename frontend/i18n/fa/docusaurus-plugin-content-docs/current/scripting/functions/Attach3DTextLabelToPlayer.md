---
title: Attach3DTextLabelToPlayer
sidebar_label: Attach3DTextLabelToPlayer
description: یک برچسب متنی سه‌بعدی را به بازیکن متصل می‌کند.
tags: ["player", "3dtextlabel"]
---

## توضیحات

یک برچسب متنی سه‌بعدی را به بازیکن متصل می‌کند.

| نام           | توضیحات                                                                 |
| ------------- | ----------------------------------------------------------------------- |
| Text3D:textid | شناسه برچسب متنی سه‌بعدی برای اتصال. توسط Create3DTextLabel برگردانده می‌شود. |
| playerid      | شناسه بازیکن برای اتصال برچسب.                                          |
| Float:offsetX | فاصله X از بازیکن.                                                     |
| Float:offsetY | فاصله Y از بازیکن.                                                     |
| Float:offsetZ | فاصله Z از بازیکن.                                                     |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. این به معنای آن است که بازیکن و/یا برچسب وجود ندارند.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("سلام، من اینجا تازه‌وارد هستم!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): ایجاد یک برچسب متنی سه‌بعدی.
- [Delete3DTextLabel](Delete3DTextLabel): حذف یک برچسب متنی سه‌بعدی.
- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): دریافت اطلاعات متصل شده برچسب متنی سه‌بعدی.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): اتصال یک برچسب متنی سه‌بعدی به وسیله نقلیه.
- [Update3DTextLabelText](Update3DTextLabelText): تغییر متن یک برچسب متنی سه‌بعدی.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): ایجاد یک برچسب متنی سه‌بعدی برای یک بازیکن.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): حذف برچسب متنی سه‌بعدی بازیکن.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): تغییر متن برچسب متنی سه‌بعدی بازیکن.
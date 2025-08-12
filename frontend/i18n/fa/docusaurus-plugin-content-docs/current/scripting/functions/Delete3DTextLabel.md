---
title: Delete3DTextLabel
sidebar_label: Delete3DTextLabel
description: حذف برچسب متن سه‌بعدی (ایجادشده با Create3DTextLabel).
tags: ["3dtextlabel"]
---

## توضیحات

حذف برچسب متن سه‌بعدی (ایجادشده با Create3DTextLabel).

| نام           | توضیحات                                        |
| ------------- | ---------------------------------------------- |
| Text3D:textid | شناسه برچسب متن سه‌بعدی برای حذف. |

## مقادیر بازگشتی

**true** اگر برچسب متن سه‌بعدی حذف شد، در غیر این صورت **false**.

## مثال‌ها

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

// بعداً
Delete3DTextLabel(gMyLabel);
```

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): ایجاد برچسب متن سه‌بعدی.
- [IsValid3DTextLabel](IsValid3DTextLabel): بررسی اعتبار برچسب متن سه‌بعدی.
- [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): بررسی اینکه برچسب متن سه‌بعدی برای بازیکن استریم شده است.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): اتصال برچسب متن سه‌بعدی به بازیکن.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): اتصال برچسب متن سه‌بعدی به وسیله نقلیه.
- [Update3DTextLabelText](Update3DTextLabelText): تغییر متن برچسب متن سه‌بعدی.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): ایجاد برچسب متن سه‌بعدی برای یک بازیکن.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): حذف برچسب متن سه‌بعدی بازیکن.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): تغییر متن برچسب متن سه‌بعدی بازیکن.

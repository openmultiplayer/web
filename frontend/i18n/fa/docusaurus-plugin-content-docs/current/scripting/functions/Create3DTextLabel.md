---
title: Create3DTextLabel
sidebar_label: Create3DTextLabel
description: ایجاد یک برچسب متن سه‌بعدی در مکان مشخصی از جهان.
tags: ["3dtextlabel"]
---

## توضیحات

ایجاد یک برچسب متن سه‌بعدی در مکان مشخصی از جهان

| نام                | توضیحات                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------- |
| const text[]       | رشته متن اولیه.                                                                          |
| colour             | رنگ متن، به عنوان عدد صحیح یا مقدار هکس در فرمت رنگی RGBA                               |
| Float:x            | مختصات X                                                                                |
| Float:y            | مختصات Y                                                                                |
| Float:z            | مختصات Z                                                                                |
| Float:drawDistance | فاصله‌ای که از آن می‌توانید برچسب متن سه‌بعدی را ببینید                                    |
| virtualWorld       | جهان مجازی که در آن می‌توانید متن سه‌بعدی را ببینید                                        |
| bool:testLOS       | آزمایش خط دید تا این متن از پشت اشیاء قابل مشاهده نباشد (true/false)                     |
| OPEN_MP_TAGS:...   | تعداد نامحدودی از آرگومان‌ها از هر نوع تگ.                                               |

## مقادیر بازگشتی

شناسه برچسب متن سه‌بعدی جدید ایجادشده، یا `INVALID_3DTEXT_ID` اگر به حد مجاز برچسب‌های متن سه‌بعدی (`MAX_3DTEXT_GLOBAL`) رسیده باشد.

## مثال‌ها

```c
public OnGameModeInit()
{
    // من در مختصات زیر هستم
    Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mark", true))
    {
        new name[MAX_PLAYER_NAME];
        new Float:x, Float:y, Float:z;
        new worldid;

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, x, y, z);
        worldid = GetPlayerVirtualWorld(playerid);

        // این مکان را علامت گذاری کرده است
        Create3DTextLabel("%s marked this place", 0xFF0000FF, x, y, z, 15.0, worldid, false, name);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

drawDistance به نظر هنگام تماشا خیلی کوچکتر می‌آید.

:::

:::tip

از رنگ‌گذاری درونی برای چندین رنگ در متن استفاده کنید.

:::

:::warning

- اگر text[] خالی باشد، سرور/کلاینت‌های کنار متن ممکن است کرش کنند! (در open.mp رفع شده)
- اگر virtualworld روی -1 تنظیم شود، متن ظاهر نخواهد شد.

:::

## توابع مرتبط

- [Delete3DTextLabel](Delete3DTextLabel): حذف یک برچسب متن سه‌بعدی.
- [IsValid3DTextLabel](IsValid3DTextLabel): بررسی اعتبار یک برچسب متن سه‌بعدی.
- [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): بررسی اینکه آیا برچسب متن سه‌بعدی برای بازیکن استریم شده است.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): اتصال برچسب متن سه‌بعدی به بازیکن.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): اتصال برچسب متن سه‌بعدی به وسیله نقلیه.
- [Update3DTextLabelText](Update3DTextLabelText): تغییر متن برچسب متن سه‌بعدی.
- [Get3DTextLabelText](Get3DTextLabelText): دریافت متن برچسب متن سه‌بعدی.
- [Get3DTextLabelColour](Get3DTextLabelColour): دریافت رنگ برچسب متن سه‌بعدی.
- [Get3DTextLabelPos](Get3DTextLabelPos): دریافت موقعیت برچسب متن سه‌بعدی.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): دریافت فاصله رسم برچسب متن سه‌بعدی.
- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): تنظیم فاصله رسم برچسب متن سه‌بعدی.
- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): دریافت شناسه جهان مجازی برچسب متن سه‌بعدی.
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): تنظیم شناسه جهان مجازی برچسب متن سه‌بعدی.
- [Get3DTextLabelLOS](Get3DTextLabelLOS): دریافت خط دید برچسب متن سه‌بعدی.
- [Set3DTextLabelLOS](Set3DTextLabelLOS): تنظیم خط دید برچسب متن سه‌بعدی.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): ایجاد برچسب متن سه‌بعدی برای یک بازیکن.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): حذف برچسب متن سه‌بعدی یک بازیکن.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): تغییر متن برچسب متن سه‌بعدی یک بازیکن.

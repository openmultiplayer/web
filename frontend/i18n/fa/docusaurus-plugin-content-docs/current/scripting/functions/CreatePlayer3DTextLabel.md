---
title: CreatePlayer3DTextLabel
sidebar_label: CreatePlayer3DTextLabel
description: یک برچسب متنی سه‌بعدی فقط برای یک بازیکن خاص ایجاد می‌کند.
tags: ["player", "3dtextlabel"]
---

## توضیحات

یک برچسب متنی سه‌بعدی فقط برای یک بازیکن خاص ایجاد می‌کند

| نام                | توضیحات                                                                         |
| ------------------ | ------------------------------------------------------------------------------- |
| playerid           | بازیکنی که باید برچسب متنی سه‌بعدی جدید را ببیند.                              |
| const text[]       | متنی که نمایش داده شود.                                                         |
| colour             | رنگ متن                                                                         |
| Float:x            | مختصات X (یا فاصله اگر متصل باشد)                                              |
| Float:y            | مختصات Y (یا فاصله اگر متصل باشد)                                              |
| Float:z            | مختصات Z (یا فاصله اگر متصل باشد)                                              |
| Float:drawDistance | فاصله‌ای که در آن می‌توانید برچسب متنی سه‌بعدی را ببینید                        |
| attachedplayer     | بازیکنی که می‌خواهید برچسب متنی سه‌بعدی را به او متصل کنید. (هیچ: INVALID_PLAYER_ID) |
| attachedvehicle    | وسیله نقلیه‌ای که می‌خواهید برچسب متنی سه‌بعدی را به آن متصل کنید. (هیچ: INVALID_VEHICLE_ID) |
| bool:testLOS       | 0/1 آزمایش خط دید تا این متن از طریق دیوارها قابل مشاهده نباشد                |
| OPEN_MP_TAGS:...   | تعداد نامحدود آرگومان از هر نوع.                                               |

## مقادیر بازگشتی

ID برچسب متنی سه‌بعدی بازیکن جدید، یا `INVALID_3DTEXT_ID` اگر به حداکثر برچسب متنی سه‌بعدی بازیکن (`MAX_3DTEXT_PLAYER`) رسیده باشد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playerlabel", true))
    {
        new
            PlayerText3D:playerTextId,
            name[MAX_PLAYER_NAME],
            Float:x, Float:y, Float:z,
            string[64];

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, x, y, z);

        format(string, sizeof(string), "Hello %s!\nI'm at your position", name);
        playerTextId = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

drawDistance زمانی که در حال تماشا هستید به نظر خیلی کوچکتر می‌آید.

:::

:::warning

اگر text[] خالی باشد، سرور/کلاینت‌های کنار متن ممکن است کرش کنند! (در open.mp درست شده)

:::

## توابع مرتبط

- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): حذف برچسب متنی سه‌بعدی یک بازیکن.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): بررسی معتبر بودن برچسب متنی سه‌بعدی یک بازیکن.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): تغییر متن برچسب متنی سه‌بعدی یک بازیکن.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): دریافت متن برچسب متنی سه‌بعدی بازیکن.
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): دریافت رنگ برچسب متنی سه‌بعدی بازیکن.
- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): دریافت موقعیت برچسب متنی سه‌بعدی بازیکن.
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): دریافت فاصله نمایش برچسب متنی سه‌بعدی بازیکن.
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): تنظیم فاصله نمایش برچسب متنی سه‌بعدی بازیکن.
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): دریافت ID دنیای مجازی برچسب متنی سه‌بعدی بازیکن.
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): تنظیم ID دنیای مجازی برچسب متنی سه‌بعدی بازیکن.
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): دریافت خط دید برچسب متنی سه‌بعدی بازیکن.
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): تنظیم خط دید برچسب متنی سه‌بعدی بازیکن.
- [Create3DTextLabel](Create3DTextLabel): ایجاد یک برچسب متنی سه‌بعدی عمومی.
---
title: GetPlayerAnimationIndex
sidebar_label: GetPlayerAnimationIndex
description: ایندکس هر انیمیشن فعال رو برمی‌گردونه.
tags: ["player", "animation"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

ایندکس هر انیمیشن فعال رو برمی‌گردونه.

| اسم     | توضیح                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خوای ایندکس انیمیشنش رو بگیری. |

## مقادیر برگشتی

0 اگه انیمیشنی اعمال نشده باشه.

## مثال‌ها

</div>

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animationLibrary[32],
            animationName[32],
            string[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animationLibrary, sizeof (animationLibrary), animationName, sizeof (animationName));
        
        format(string, sizeof (string), "Running anim: %s %s", animationLibrary, animationName);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [ApplyAnimation](ApplyAnimation): اعمال انیمیشن روی بازیکن.
- [GetAnimationName](GetAnimationName): گرفتن library/name انیمیشن برای ایندکس.

</div>
---
title: GetAnimationName
sidebar_label: GetAnimationName
description: کتابخونه/اسم انیمیشن رو برای index مشخص شده می‌گیره.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

کتابخونه/اسم انیمیشن رو برای index مشخص شده می‌گیره.

| اسم                              | توضیح                                                   |
| -------------------------------- | ------------------------------------------------------ |
| index                            | index انیمیشن، که با GetPlayerAnimationIndex برگشت داده میشه. |
| animationLibrary[]               | متغیر string که کتابخونه انیمیشن رو ذخیره می‌کنه.        |
| len1 = sizeof (animationLibrary) | اندازه string که کتابخونه انیمیشن رو ذخیره می‌کنه.       |
| animationName[]                  | متغیر string که اسم انیمیشن رو ذخیره می‌کنه.            |
| len2 = sizeof (animationName)    | اندازه string که اسم انیمیشن رو ذخیره می‌کنه.           |

## مقادیر برگشتی

1 اگه موفق باشه، 0 اگه ناموفق باشه.

## مثال‌ها

</div>

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animLib[32],
            animName[32],
            msgText[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);
        format(msgText, sizeof msgText, "Running anim: %s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msgText);
    }
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetPlayerAnimationIndex](GetPlayerAnimationIndex): index انیمیشن‌های در حال اجرا رو برمی‌گردونه

</div>
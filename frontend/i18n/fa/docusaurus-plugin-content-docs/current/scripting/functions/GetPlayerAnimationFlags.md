---
title: GetPlayerAnimationFlags
sidebar_label: GetPlayerAnimationFlags
description: flagهای انیمیشن بازیکن رو می‌گیره.
tags: ["player", "animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

flagهای انیمیشن بازیکن رو می‌گیره.

| اسم     | توضیح                              |
| -------- | ---------------------------------------- |
| playerid | شناسه بازیکنی که می‌خوای flagهای انیمیشنش رو بگیری |

## مقادیر برگشتی

flagهای انیمیشن بازیکن رو به صورت عدد صحیح برمی‌گردونه.

## مثال‌ها

برای گرفتن هر flag به صورت جداگانه، از bit masking استفاده میشه.

</div>

```c

#define ANIM_FREEZE_FLAG   0b0000000000000100
#define ANIM_LOCK_X_FLAG   0b0010000000000
#define ANIM_LOCK_Y_FLAG   0b0001000000000
#define ANIM_LOOP_FLAG     0b0000100000000

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myanimflags"))
    {
        new messageString[128];
        new flags = GetPlayerAnimationFlags(playerid);

        new bool:freeze  =   (flags & ANIM_FREEZE_FLAG) != 0 ? true : false;
        new bool:lockx   =   (flags & ANIM_LOCK_X_FLAG) != 0 ? true : false;
        new bool:locky   =   (flags & ANIM_LOCK_Y_FLAG) != 0 ? true : false;
        new bool:loop    =   (flags & ANIM_LOOP_FLAG) != 0 ? true : false;

        format(messageString, sizeof(messageString), "Your anim flags are: [freeze:%i] [lockx:%i] [locky:%i] [loop:%i]", freeze, lockx, locky, loop);
        SendClientMessage(playerid, -1, messageString);

        return 1;
    }

    return 0;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

اگه وضعیت بازیکن on-foot نباشه، تمام flagهای انیمیشن برگشتی 0 هستن.

:::

## تابع‌های مرتبط

- [ApplyAnimation](ApplyAnimation): اعمال انیمیشن روی بازیکن.

</div>
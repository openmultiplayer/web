---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: این کالبک زمانی فراخوانده می‌شود که بازیکن حالت ویرایش شیء متصل شده را پایان می‌دهد.
tags: ["player", "object", "attachment"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن حالت ویرایش شیء متصل شده را پایان می‌دهد.

| نام                   | توضیحات                                                      |
| ---------------------- | ------------------------------------------------------------ |
| playerid               | شناسه بازیکنی که حالت ویرایش را پایان داد                  |
| EDIT_RESPONSE:response | 0 اگر آنها لغو کرده‌اند (ESC) یا 1 اگر آیکون ذخیره را کلیک کرده‌اند |
| index                  | اندیس شیء متصل شده (0-9)                                    |
| modelid                | مدل شیء متصل شده‌ای که ویرایش شد                            |
| boneid                 | استخوان شیء متصل شده‌ای که ویرایش شد                        |
| Float:fOffsetX         | افست X برای شیء متصل شده‌ای که ویرایش شد                   |
| Float:fOffsetY         | افست Y برای شیء متصل شده‌ای که ویرایش شد                   |
| Float:fOffsetZ         | افست Z برای شیء متصل شده‌ای که ویرایش شد                   |
| Float:fRotX            | چرخش X برای شیء متصل شده‌ای که ویرایش شد                   |
| Float:fRotY            | چرخش Y برای شیء متصل شده‌ای که ویرایش شد                   |
| Float:fRotZ            | چرخش Z برای شیء متصل شده‌ای که ویرایش شد                   |
| Float:fScaleX          | مقیاس X برای شیء متصل شده‌ای که ویرایش شد                  |
| Float:fScaleY          | مقیاس Y برای شیء متصل شده‌ای که ویرایش شد                  |
| Float:fScaleZ          | مقیاس Z برای شیء متصل شده‌ای که ویرایش شد                  |

## مقادیر برگشتی

1 - مانع از دریافت این کالبک توسط اسکریپت‌های دیگر می‌شود.

0 - نشان می‌دهد که این کالبک به اسکریپت بعدی منتقل خواهد شد.

همیشه ابتدا در فیلتراسکریپت‌ها فراخوانده می‌شود.

## مثال‌ها

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// The data should be stored in the above array when attached objects are attached.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response == EDIT_RESPONSE_FINAL)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Attached object edition saved.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else if (response == EDIT_RESPONSE_CANCEL)
    {
        SendClientMessage(playerid, COLOR_RED, "Attached object edition not saved.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## نکته‌ها

:::warning

ویرایش‌ها باید در صورتی که پاسخ '0' (لغو شده) بود، نادیده گرفته شوند. این کار باید با ذخیره کردن افست‌ها و غیره در یک آرایه قبل از استفاده از [EditAttachedObject](../functions/EditAttachedObject) انجام شود.

:::

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [EditAttachedObject](../functions/EditAttachedObject): ویرایش یک شیء متصل شده.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): متصل کردن یک شیء به بازیکن
---
title: SetPlayerAttachedObject
sidebar_label: SetPlayerAttachedObject
description: یک object رو به یک استخون خاص از پلیر متصل می‌کنه.
tags: ["player", "object", "attachment"]
---

## توضیحات

یک object رو به یک استخون خاص از پلیر متصل می‌کنه.

| نام             | توضیحات                                                                              |
| --------------- | ------------------------------------------------------------------------------------ |
| playerid        | آیدی پلیری که قراره object بهش وصل بشه                                               |
| index           | اندکس (slot 0-9) که قراره object بهش اختصاص پیدا کنه                                |
| modelid         | مدلی که قراره وصل بشه                                                                |
| bone            | [استخونی](../resources/boneid) که قراره object بهش وصل بشه                           |
| Float:offsetX   | (اختیاری) آفست محور X برای موقعیت object                                             |
| Float:offsetY   | (اختیاری) آفست محور Y برای موقعیت object                                             |
| Float:offsetZ   | (اختیاری) آفست محور Z برای موقعیت object                                             |
| Float:rotationX | (اختیاری) چرخش object در محور X                                                      |
| Float:rotationY | (اختیاری) چرخش object در محور Y                                                      |
| Float:rotationZ | (اختیاری) چرخش object در محور Z                                                      |
| Float:scaleX    | (اختیاری) مقیاس object در محور X                                                     |
| Float:scaleY    | (اختیاری) مقیاس object در محور Y                                                     |
| Float:scaleZ    | (اختیاری) مقیاس object در محور Z                                                     |
| materialColour1 | (اختیاری) اولین رنگ object که قراره تنظیم بشه، به عنوان عدد صحیح یا hex با فرمت رنگ ARGB |
| materialColour2 | (اختیاری) دومین رنگ object که قراره تنظیم بشه، به عنوان عدد صحیح یا hex با فرمت رنگ ARGB |

## مقادیر بازگشتی

در صورت موفقیت **1**، در صورت شکست **0** برمی‌گردونه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 3, 1609, 2); // ye turtle ro be sar e player vasl mikone, dar slot 3

    // mesale estefade az rangha dar object hayi ke be player vasl mishan:
    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);
    // ye kolah sefid ro be sar e player vasl mikone va rangesh ro sabz mikone
    return 1;
}
```

## نکات

:::tip

این تابع جدا از CreateObject / CreatePlayerObject pool ها هست.

:::

:::warning

حداکثر 10 تا object می‌تونه به یک پلیر وصل بشه (index 0-9)

:::

## توابع مرتبط

- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): یک object وصل شده رو از پلیر حذف می‌کنه
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): چک می‌کنه که آیا یک object در اندکس مشخصی به پلیر وصل شده یا نه
- [GetPlayerAttachedObject](GetPlayerAttachedObject): اطلاعات object وصل شده به پلیر رو بر اساس اندکس دریافت می‌کنه
- [EditAttachedObject](EditAttachedObject): یک object وصل شده رو ویرایش می‌کنه

## منابع مرتبط

- [Bone IDs](../resources/boneid)
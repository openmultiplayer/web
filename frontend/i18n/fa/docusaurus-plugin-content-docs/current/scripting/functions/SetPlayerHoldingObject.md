---
title: SetPlayerHoldingObject
sidebar_label: SetPlayerHoldingObject
description: یک object رو به یک استخون وصل می‌کنه.
tags: ["player"]
---

## توضیحات

یک object رو به یک استخون وصل می‌کنه.

| نام      | توضیحات                                                      |
| -------- | ------------------------------------------------------------ |
| playerid | آیدی پلیری که می‌خوای object رو بهش وصل کنی                   |
| modelid  | مدلی که می‌خوای استفاده کنی                                  |
| bone     | [استخونی](../resources/boneid) که می‌خوای object رو بهش وصل کنی |
| fOffsetX | (اختیاری) آفست محور X برای موقعیت object                      |
| fOffsetY | (اختیاری) آفست محور Y برای موقعیت object                      |
| fOffsetZ | (اختیاری) آفست محور Z برای موقعیت object                      |
| fRotX    | (اختیاری) چرخش object در محور X                               |
| fRotY    | (اختیاری) چرخش object در محور Y                               |
| fRotZ    | (اختیاری) چرخش object در محور Z                               |

## مقادیر بازگشتی

در صورت موفقیت 1، در صورت شکست 0

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerHoldingObject(playerid, 1609, 2); //ye turtle ro be sar e player vasl kon!
    return 1;
}
```

## نکات

:::tip

فقط یک object می‌تونه به هر پلیر وصل بشه. این تابع جدا از CreateObject / CreatePlayerObject pool ها هست.

:::

:::warning

این تابع در SA-MP 0.3c حذف شده. [SetPlayerAttachedObject](SetPlayerAttachedObject) رو ببین

:::

## توابع مرتبط

- [StopPlayerHoldingObject](StopPlayerHoldingObject): object های وصل شده رو حذف می‌کنه.
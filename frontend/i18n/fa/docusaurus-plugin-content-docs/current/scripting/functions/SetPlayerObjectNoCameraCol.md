---
title: SetPlayerObjectNoCameraCol
sidebar_label: SetPlayerObjectNoCameraCol
description: برخورد دوربین یک player object رو فعال/غیرفعال می‌کنه.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

برخورد دوربین یک player object رو فعال/غیرفعال می‌کنه.

| نام      | توضیحات                              |
| -------- | ------------------------------------ |
| playerid | ID بازیکنی که object متعلق بهشه.     |
| objectid | ID object که می‌خوای فعال/غیرفعال کنی. |

## مقدار برگشتی

1: تابع با موفقیت اجرا شد.

0: تابع در اجرا ناموفق بود. object مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCol(playerid, objectid);
    }
    return 1;
}
```

## نکات

:::tip

این داخل مرزهای معمولی نقشه SA کار نمی‌کنه.

:::

## توابع مرتبط

- [SetObjectNoCameraCol](SetObjectNoCameraCol): غیرفعال کردن برخورد بین دوربین و object.
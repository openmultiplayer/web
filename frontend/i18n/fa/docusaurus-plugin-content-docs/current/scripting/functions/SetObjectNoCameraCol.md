---
title: SetObjectNoCameraCol
sidebar_label: SetObjectNoCameraCol
description: برخورد بین دوربین بازیکن‌ها و object مشخص شده رو غیرفعال می‌کنه.
tags: ["camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

برخورد بین دوربین بازیکن‌ها و object مشخص شده رو غیرفعال می‌کنه.

| نام      | توضیحات                                              |
| -------- | ---------------------------------------------------- |
| objectid | ID object که برخورد دوربین روی اون باید غیرفعال بشه. |

## مقدار برگشتی

1: تابع با موفقیت اجرا شد.

0: تابع در اجرا ناموفق بود. object مشخص شده وجود نداره.

## مثال‌ها

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCol(objectid);
    }
    return 1;
}
```

## نکات

:::tip

این فقط خارج از مرزهای نقشه کار می‌کنه (بعد از -3000/3000 واحد روی محور x و/یا y).

:::

## توابع مرتبط

- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): غیرفعال کردن برخورد بین دوربین و player object.
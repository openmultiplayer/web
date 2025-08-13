---
title: SetObjectNoCameraCollision
sidebar_label: SetObjectNoCameraCollision
description: برخورد بین دوربین بازیکن‌ها و object مشخص شده رو غیرفعال می‌کنه.
tags: ["object", "camera"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

برخورد بین دوربین بازیکن‌ها و object مشخص شده رو غیرفعال می‌کنه.

| نام      | توضیحات                                              |
| -------- | ---------------------------------------------------- |
| objectid | ID object که برخورد دوربین روی اون باید غیرفعال بشه. |

## مقدار برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود نداره.

## مثال‌ها

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCollision(objectid);
    }
    return 1;
}
```

## نکات

:::tip

این فقط خارج از مرزهای نقشه کار می‌کنه (بعد از -3000/3000 واحد روی محور x و/یا y).

:::

## توابع مرتبط

- [HasObjectCameraCollision](HasObjectCameraCollision): بررسی اینکه آیا یک object برخورد دوربین فعال داره یا نه.
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): غیرفعال کردن برخورد بین دوربین و player object.
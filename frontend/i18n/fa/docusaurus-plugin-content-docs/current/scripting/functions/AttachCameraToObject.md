---
title: AttachCameraToObject
sidebar_label: AttachCameraToObject
description: می‌توانید از این تابع برای اتصال دوربین بازیکن به اشیاء استفاده کنید.
tags: ["player", "object"]
---

## توضیحات

می‌توانید از این تابع برای اتصال دوربین بازیکن به اشیاء استفاده کنید.

| نام      | توضیحات                                                         |
| -------- | --------------------------------------------------------------- |
| playerid | شناسه بازیکنی که دوربین شما به شیء متصل خواهد شد.              |
| objectid | شناسه شیء که می‌خواهید دوربین بازیکن را به آن متصل کنید.        |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "دوربین شما اکنون به شیء متصل است.");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

شما باید ابتدا شیء را ایجاد کنید، قبل از تلاش برای اتصال دوربین بازیکن به آن.

:::

## توابع مرتبط

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): دوربین بازیکن را به یک شیء بازیکن متصل می‌کند.
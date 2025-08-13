---
title: RedirectDownload
sidebar_label: RedirectDownload
description: هدایت دانلود AddCharModel یا AddSimpleModel بازیکن به یک صفحه وب HTTP مشخص
tags: ["custom model", "custom skin", "simple model"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## توضیحات

دانلود AddCharModel یا AddSimpleModel یک بازیکن رو به یک صفحه وب HTTP مشخص هدایت می‌کنه.

## پارامترها

| نام         | توضیحات                                                        |
| ----------- | -------------------------------------------------------------- |
| playerid    | آی‌دی بازیکنی که درخواست دانلود custom model داده.               |
| const url[] | URL که دانلود بهش هدایت می‌شه                                    |

## مقادیر بازگشتی

**1:** تابع با موفقیت اجرا شد.

**0:** تابع اجرا نشد.

## مثال استفاده از filterscript dl_redirect

```c
new baseurl[] = "https://files.sa-mp.com/server";

public OnPlayerRequestDownload(playerid, type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        fullURL[256],
        fileName[64],
        foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, fileName, sizeof fileName);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, fileName, sizeof fileName);
    }

    if (foundFileName)
    {
        format(fullURL, sizeof fullURL, "%s/%s", baseurl, fileName);
        RedirectDownload(playerid, fullURL);
    }

    return 0;
}
```

## توابع مرتبط

- [AddCharModel](AddCharModel): اضافه کردن یک مدل کاراکتر سفارشی جدید برای دانلود.
- [AddSimpleModel](AddSimpleModel): اضافه کردن یک مدل آبجکت ساده سفارشی جدید برای دانلود.
- [AddSimpleModelTimed](AddSimpleModelTimed): اضافه کردن یک مدل آبجکت ساده سفارشی جدید برای دانلود.

## Callback های مرتبط

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): وقتی فراخوانی می‌شه که بازیکن دانلود مدل‌های سفارشی رو تموم می‌کنه.
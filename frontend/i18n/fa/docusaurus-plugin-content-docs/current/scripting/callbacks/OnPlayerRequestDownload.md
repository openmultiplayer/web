---
title: OnPlayerRequestDownload
sidebar_label: OnPlayerRequestDownload
description: این کالبک زمانی فراخوانده می‌شود که بازیکن درخواست دانلود مدل سفارشی کند.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن درخواست دانلود مدل سفارشی کند.

| نام                   | توضیحات                                                    |
| --------------------- | ---------------------------------------------------------- |
| playerid              | شناسه بازیکنی که درخواست دانلود مدل سفارشی کرده است.        |
| DOWNLOAD_REQUEST:type | [نوع](../resources/download-requests) درخواست.             |
| crc                   | چک‌سام CRC فایل مدل سفارشی.                                 |

## مقادیر برگشتی

0 - رد کردن درخواست دانلود

1 - پذیرش درخواست دانلود

## مثال‌ها

```c
#define DOWNLOAD_REQUEST_EMPTY        (DOWNLOAD_REQUEST:0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (DOWNLOAD_REQUEST:1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (DOWNLOAD_REQUEST:2)

new baseUrl[] = "https://assets.open.mp";

public OnPlayerRequestDownload(playerid, DOWNLOAD_REQUEST:type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new fullUrl[256 + 1];
    new dlFileName[64 + 1];
    new foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, dlFileName, 64);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, dlFileName, 64);
    }

    if (foundFileName)
    {
        format(fullUrl, sizeof(fullUrl), "%s/%s", baseUrl, dlFileName);
        RedirectDownload(playerid, fullUrl);
    }

    return 0;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): این کالبک زمانی فراخوانده می‌شود که بازیکن دانلود مدل‌های سفارشی را به پایان برساند.

## منابع مرتبط

- [Download Request Types](../resources/download-requests)
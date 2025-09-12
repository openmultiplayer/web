---
title: HTTP
sidebar_label: HTTP
description: یه درخواست HTTP threaded ارسال می‌کنه.
tags: ["http"]
---

## توضیحات

یه درخواست HTTP threaded ارسال می‌کنه.

| نام                | توضیحات                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------|
| index              | ID که برای تشخیص درخواست‌هایی که به همون callback ارسال می‌شن استفاده می‌شه (برای playerid مفیده) |
| HTTP_METHOD:method | [نوع](../resources/http-request-methods) درخواستی که می‌خوای ارسال کنی.                        |
| const url[]        | URL ای که می‌خوای درخواست کنی. **(بدون 'http://')**                                            |
| const data[]       | هر داده POST ای که می‌خوای با درخواست ارسال کنی.                                                |
| const callback[]   | اسم تابع callback ای که می‌خوای برای handle کردن پاسخ‌های این درخواست استفاده کنی.             |

## مقادیر برگشتی

1 در صورت موفقیت، 0 در صورت شکست

## تعاریف

```c
// HTTP request types
#define HTTP_GET                               (HTTP_METHOD:1) // Sends a regular HTTP request.
#define HTTP_POST                              (HTTP_METHOD:2) // Sends a HTTP request with POST data.
#define HTTP_HEAD                              (HTTP_METHOD:3) // Sends a regular HTTP request, but ignores any response data - returning only the response code.

// HTTP error response codes
// These codes compliment ordinary HTTP response codes returned in 'response_code'
#define HTTP_ERROR_BAD_HOST                    (HTTP_ERROR:1)
#define HTTP_ERROR_NO_SOCKET                   (HTTP_ERROR:2)
#define HTTP_ERROR_CANT_CONNECT                (HTTP_ERROR:3)
#define HTTP_ERROR_CANT_WRITE                  (HTTP_ERROR:4)
#define HTTP_ERROR_CONTENT_TOO_BIG             (HTTP_ERROR:5)
#define HTTP_ERROR_MALFORMED_RESPONSE          (HTTP_ERROR:6)
```

## مثال‌ها

```c
forward MyHttpResponse(index, response_code, data[]);

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/hello", cmdtext, true))
    {
        HTTP(playerid, HTTP_GET, "assets.open.mp/hello.txt", "", "MyHttpResponse");
        return 1;
    }
    return 0;
}

public MyHttpResponse(index, response_code, data[])
{
    // In this callback "index" would normally be called "playerid" ( if you didn't get it already )
    new buffer[128];

    if (response_code == 200) // Did the request succeed?
    {
        // Yes!
        format(buffer, sizeof(buffer), "The URL replied: %s", data);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
    else
    {
        // No!
        format(buffer, sizeof(buffer), "The request failed! The response code was: %d", response_code);
        SendClientMessage(index, 0xFF0000FF, buffer);
    }
}
```

## نکات

:::tip

علاوه بر کدهای پاسخ ذکر شده در بالا، همه پاسخ‌های معمولی HTTP مثل 404 (صفحه پیدا نشد)، 500 (خطای سرور) یا 403 (ممنوع) هم وجود دارن.

:::

## اطلاعات مرتبط

- [روش‌های درخواست HTTP](../resources/http-request-methods)
- [کدهای پاسخ خطای HTTP](../resources/http-error-response-codes)
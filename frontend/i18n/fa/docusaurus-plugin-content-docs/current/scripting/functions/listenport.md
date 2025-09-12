---
title: listenport
sidebar_label: listenport
description: پورت موردنظر رو برای listen کردن تنظیم می‌کنه.
tags: ["datagram"]
---

<LowercaseNote />

:::warning

این function منسوخ شده است، از [HTTP](HTTP) یا [pawn-requests](https://github.com/Southclaws/pawn-requests) plugin استفاده کنید.

:::

## توضیحات

پورت موردنظر رو برای listen کردن تنظیم می‌کنه.

| نام | توضیح                                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| port | شماره پورت برای listen کردن. این مقدار باید بین 1 تا 65535 باشه، اما بهتره از پورت‌های reserve شده استفاده نکنی. |

## مقادیر بازگشتی

این function همیشه **0** بر می‌گردونه.

## نکات

:::warning

- باید این function رو **قبل** از دریافت اولین packet فراخوانی کنی. به عبارت دیگه، باید پورت رو در main تنظیم کنی.
- اگه هیچ پورت خاصی انتخاب نشده باشه، ماژول روی پورت **9930** listen می‌کنه.

:::

## توابع مرتبط

- [@receivestring](@receivestring): یک packet دریافت شد.
- [sendstring](sendstring): یک packet حاوی string ارسال می‌کنه.
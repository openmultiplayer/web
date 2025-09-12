---
title: FindTextureFileNameFromCRC
sidebar_label: FindTextureFileNameFromCRC
description: پیدا کردن فایل تکسچر کاستوم اسکین یا شیء ساده موجود.
tags: ["custom model", "custom skin", "simple model"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## توضیحات

پیدا کردن فایل تکسچر کاستوم اسکین یا شیء ساده موجود. فایل‌های مدل به صورت پیش‌فرض در پوشه models سرور قرار دارند (تنظیمات artpath).

| نام                    | توضیحات                                                                  |
| ---------------------- | ------------------------------------------------------------------------ |
| crc                    | CRC checksum فایل مدل کاستوم.                                            |
| output[]               | آرایه ای برای ذخیره کردن نام فایل .txd، که با رفرنس پاس داده میشه.        |
| size = sizeof (output) | طول رشته ای که باید ذخیره بشه.                                            |

## برگشتی

**1:** تابع با موفقیت اجرا شد.

**0:** تابع موفق به اجرا نشد.

## توابع مرتبط

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): زمانی صدا زده میشه که بازیکن دانلود مدل‌های کاستوم رو تموم کنه.
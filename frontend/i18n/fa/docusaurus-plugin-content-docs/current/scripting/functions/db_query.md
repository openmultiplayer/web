---
title: db_query
sidebar_label: db_query
description: این تابع برای اجرای یک کوئری SQL روی پایگاه داده SQLite باز شده استفاده می‌شود.
keywords:
  - sqlite
---

<LowercaseNote />

## توضیحات

این تابع برای اجرای یک کوئری SQL روی پایگاه داده SQLite باز شده استفاده می‌شود.

| نام    | توضیحات                          |
| ------- | -------------------------------- |
| DB:db   | هندل پایگاه داده برای کوئری کردن. |
| query[] | کوئری برای اجرا.                 |

## مقادیر بازگشتی

ایندکس نتیجه کوئری (شروع از 1) در صورت موفقیت، در غیر این صورت 0.

## مثال‌ها

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // انتخاب همه ورودی‌ها در جدول "entities"
    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");

    // اگر هندل مجموعه نتایج پایگاه داده معتبر است
    if (db_result_set)
    {
        // انجام کاری...

        // آزادسازی مجموعه نتایج
        db_free_result(db_result_set);
    }
}
```

```c
// mode.pwn

#include <entity_storage>

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // ایجاد اتصال به پایگاه داده
    gDBConnectionHandle = db_open("example.db");

    // اگر اتصال به پایگاه داده وجود دارد
    if (gDBConnectionHandle)
    {
        // اتصال به پایگاه داده با موفقیت ایجاد شد
        print("Successfully created a connection to database \"example.db\".");
        EntityStorage_SpawnAll(gDBConnectionHandle);
    }
    else
    {
        // ایجاد اتصال به پایگاه داده ناموفق بود
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // بستن اتصال به پایگاه داده در صورت باز بودن اتصال
    if (db_close(gDBConnectionHandle))
    {
        // پاکسازی اضافی
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## نکات

:::warning

همیشه نتایج را با استفاده از [db_free_result](db_free_result) آزاد کنید!

:::

## توابع مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_free_result](db_free_result): آزادسازی حافظه نتیجه از db_query
- [db_num_rows](db_num_rows): دریافت تعداد ردیف‌ها در نتیجه
- [db_next_row](db_next_row): حرکت به ردیف بعدی
- [db_num_fields](db_num_fields): دریافت تعداد فیلدها در نتیجه
- [db_field_name](db_field_name): برگرداندن نام فیلد در ایندکس مشخص
- [db_get_field](db_get_field): دریافت محتوای فیلد با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc](db_get_field_assoc): دریافت محتوای فیلد با نام مشخص از ردیف نتیجه فعلی
- [db_get_field_int](db_get_field_int): دریافت محتوای فیلد به عنوان عدد صحیح با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc_int](db_get_field_assoc_int): دریافت محتوای فیلد به عنوان عدد صحیح با نام مشخص از ردیف نتیجه فعلی
- [db_get_field_float](db_get_field_float): دریافت محتوای فیلد به عنوان عدد اعشاری با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc_float](db_get_field_assoc_float): دریافت محتوای فیلد به عنوان عدد اعشاری با نام مشخص از ردیف نتیجه فعلی
- [db_get_mem_handle](db_get_mem_handle): دریافت هندل حافظه برای پایگاه داده SQLite که با db_open باز شده
- [db_get_result_mem_handle](db_get_result_mem_handle): دریافت هندل حافظه برای کوئری SQLite که با db_query اجرا شده
- [db_debug_openfiles](db_debug_openfiles): دریافت تعداد اتصالات باز پایگاه داده برای اهداف دیباگ
- [db_debug_openresults](db_debug_openresults): دریافت تعداد نتایج باز پایگاه داده
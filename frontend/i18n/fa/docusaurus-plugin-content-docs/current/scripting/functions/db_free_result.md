---
title: db_free_result
sidebar_label: db_free_result
description: حافظه نتیجه تخصیص یافته از db_query را آزاد می کند.
tags: ["sqlite"]
---

<LowercaseNote />

## توضیحات

حافظه نتیجه تخصیص یافته از db_query را آزاد می کند.

| نام              | توضیحات                                              |
| ----------------- | -------------------------------------------------------- |
| DBResult:dbresult | مجموعه نتیجه ای که باید آزاد شود که توسط [db_query](db_query) تخصیص یافته |

## مقادیر بازگشتی

اگر دستگیره مجموعه نتیجه معتبر باشد 1 را برمی گرداند، در غیر این صورت 0.

## مثال ها

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // انتخاب تمام ورودی ها در جدول "entities"
    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");

    // اگر دستگیره مجموعه نتیجه پایگاه داده معتبر است
    if (db_result_set)
    {
        // کاری انجام بده...

        // مجموعه نتیجه را آزاد کن
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
        // با موفقیت اتصال به پایگاه داده ایجاد شد
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
    // بستن اتصال به پایگاه داده اگر اتصال باز است
    if (db_close(gDBConnectionHandle))
    {
        // پاکسازی اضافی
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## توابع مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): درخواست از پایگاه داده SQLite
- [db_num_rows](db_num_rows): دریافت تعداد سطرها در نتیجه
- [db_next_row](db_next_row): رفتن به سطر بعدی
- [db_num_fields](db_num_fields): دریافت تعداد فیلدها در نتیجه
- [db_field_name](db_field_name): نام فیلد در شاخص مشخص را برمی گرداند
- [db_get_field](db_get_field): دریافت محتوای فیلد با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc](db_get_field_assoc): دریافت محتوای فیلد با نام مشخص از سطر نتیجه فعلی
- [db_get_field_int](db_get_field_int): دریافت محتوای فیلد به صورت عدد صحیح با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc_int](db_get_field_assoc_int): دریافت محتوای فیلد به صورت عدد صحیح با نام مشخص از سطر نتیجه فعلی
- [db_get_field_float](db_get_field_float): دریافت محتوای فیلد به صورت عدد اعشاری با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc_float](db_get_field_assoc_float): دریافت محتوای فیلد به صورت عدد اعشاری با نام مشخص از سطر نتیجه فعلی
- [db_get_mem_handle](db_get_mem_handle): دریافت دستگیره حافظه برای پایگاه داده SQLite که با db_open باز شده
- [db_get_result_mem_handle](db_get_result_mem_handle): دریافت دستگیره حافظه برای درخواست SQLite که با db_query اجرا شده
- [db_debug_openfiles](db_debug_openfiles): این تابع تعداد اتصالات باز پایگاه داده را برای اهداف عیب یابی دریافت می کند
- [db_debug_openresults](db_debug_openresults): این تابع تعداد نتایج باز پایگاه داده را دریافت می کند

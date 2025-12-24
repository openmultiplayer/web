---
title: DB_GetRowCount
sidebar_label: DB_GetRowCount
description: تعداد ردیف‌های موجود در یک نتیجه پایگاه داده رو می‌گیره.
tags: ["sqlite"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

تعداد ردیف‌های موجود در یک نتیجه پایگاه داده رو می‌گیره.

| اسم        | توضیح                                                            |
| ----------- | ---------------------------------------------------------------------- |
| DBResult:dbresult | نتیجه‌ای که از [DB_ExecuteQuery](DB_ExecuteQuery) برگردونده شده. |

## مقادیر برگشتی

تعداد ردیف‌ها در نتیجه.

## مثال‌ها

</div>

```c
// انتخاب تمام ردیف‌ها از جدول "players"
new DBResult:db_result = DB_ExecuteQuery(db_handle, "SELECT * FROM `players`");

// چک کن که آیا کوئری موفق بوده
if (DB_GetRowCount(db_result))
{
    // دریافت و پردازش نتایج
    do
    {
        // کد برای پردازش هر ردیف
        // ...
        
    } while (DB_SelectNextRow(db_result));
}
else
{
    print("The table is empty.");
}

// آزاد کردن حافظه
DB_FreeResultSet(db_result);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

نتایج باید بعد از اتمام کار با [DB_FreeResultSet](DB_FreeResultSet) آزاد بشن. عدم انجام این کار باعث memory leak میشه.

:::

## تابع‌های مرتبط

- [DB_Open](DB_Open): باز کردن اتصال به پایگاه داده SQLite
- [DB_Close](DB_Close): بستن اتصال به پایگاه داده SQLite
- [DB_ExecuteQuery](DB_ExecuteQuery): کوئری زدن به پایگاه داده SQLite
- [DB_FreeResultSet](DB_FreeResultSet): آزاد کردن حافظه نتیجه از DB_ExecuteQuery
- [DB_SelectNextRow](DB_SelectNextRow): رفتن به ردیف بعدی
- [DB_GetFieldCount](DB_GetFieldCount): گرفتن تعداد فیلدهای موجود در نتیجه

</div>

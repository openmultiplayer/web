---
title: db_next_row
sidebar_label: db_next_row
description: به ردیف بعدی در نتیجه‌ای که از db_query برگردونده شده میره.
tags: ["sqlite"]
---

<LowercaseNote />

<VersionWarn version='SA-MP 0.3.7 R1' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

به ردیف بعدی در نتیجه‌ای که از db_query برگردونده شده میره.

| اسم        | توضیح                                         |
| ----------- | ---------------------------------------------- |
| DBResult:dbresult | نتیجه‌ای که از db_query برگردونده شده. |

## مقادیر برگشتی

1: اگه ردیف بعدی موجود باشه و حرکت موفقیت‌آمیز باشه.

0: اگه ردیف بعدی موجود نباشه یا خطا رخ داده باشه.

## مثال‌ها

</div>

```c
// انتخاب تمام ردیف‌ها از جدول "players"
new DBResult:db_result = db_query(db_handle, "SELECT * FROM `players`");

// چک کن که آیا کوئری موفق بوده
if (db_num_rows(db_result))
{
    // دریافت و پردازش نتایج
    do
    {
        // کد برای پردازش هر ردیف
        new name[MAX_PLAYER_NAME];
        new score;
        
        db_get_field_assoc(db_result, "name", name, sizeof(name));
        score = db_get_field_assoc_int(db_result, "score");
        
        printf("Player: %s, Score: %d", name, score);
        
    } while (db_next_row(db_result));
}
else
{
    print("No records found.");
}

// آزاد کردن حافظه
db_free_result(db_result);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::tip

این تابع معمولاً در یک حلقه do-while استفاده میشه تا تمام ردیف‌های موجود در نتیجه پردازش بشن.

:::

:::warning

نتایج باید بعد از اتمام کار با db_free_result آزاد بشن. عدم انجام این کار باعث memory leak میشه.

:::

## تابع‌های مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): کوئری زدن به پایگاه داده SQLite
- [db_free_result](db_free_result): آزاد کردن حافظه نتیجه از db_query
- [db_num_rows](db_num_rows): گرفتن تعداد ردیف‌های موجود در نتیجه
- [db_num_fields](db_num_fields): گرفتن تعداد فیلدهای موجود در نتیجه

</div>

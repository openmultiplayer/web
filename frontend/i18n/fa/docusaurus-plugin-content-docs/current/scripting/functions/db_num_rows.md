---
title: db_num_rows
sidebar_label: db_num_rows
description: تعداد ردیف‌های موجود در نتیجه‌ای که از db_query برگردونده شده رو می‌گیره.
keywords:
  - sqlite
---

<LowercaseNote />

<VersionWarn version='SA-MP 0.3.7 R1' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

تعداد ردیف‌های موجود در نتیجه‌ای که از db_query برگردونده شده رو می‌گیره.

| اسم        | توضیح                                         |
| ----------- | ---------------------------------------------- |
| DBResult:dbresult | نتیجه‌ای که از db_query برگردونده شده. |

## مقادیر برگشتی

تعداد ردیف‌ها در نتیجه.

## مثال‌ها

</div>

```c
// انتخاب تمام بازیکنا با امتیاز بیشتر از 1000
new DBResult:db_result = db_query(db_handle, "SELECT * FROM `players` WHERE `score` > 1000");

// چک کن که آیا کوئری موفق بوده
if (db_result)
{
    new rows = db_num_rows(db_result);
    
    if (rows > 0)
    {
        printf("Found %d players with score > 1000", rows);
        
        // پردازش نتایج
        do
        {
            new name[MAX_PLAYER_NAME];
            new score;
            
            db_get_field_assoc(db_result, "name", name, sizeof(name));
            score = db_get_field_assoc_int(db_result, "score");
            
            printf("Player: %s, Score: %d", name, score);
            
        } while (db_next_row(db_result));
    }
    else
    {
        print("No players found with score > 1000");
    }
    
    // آزاد کردن حافظه
    db_free_result(db_result);
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::tip

این تابع برای چک کردن اینکه آیا کوئری هیچ نتیجه‌ای برگردونده یا نه مفیده. می‌تونی از این برای اجتناب از اجرای حلقه روی نتایج خالی استفاده کنی.

:::

:::warning

نتایج باید بعد از اتمام کار با db_free_result آزاد بشن. عدم انجام این کار باعث memory leak میشه.

:::

## تابع‌های مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): کوئری زدن به پایگاه داده SQLite
- [db_free_result](db_free_result): آزاد کردن حافظه نتیجه از db_query
- [db_next_row](db_next_row): رفتن به ردیف بعدی
- [db_num_fields](db_num_fields): گرفتن تعداد فیلدهای موجود در نتیجه

</div>
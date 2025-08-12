---
title: format
sidebar_label: format
description: فرمت کردن یک string برای شامل کردن متغیرها و string‌های دیگر درش.
tags: ["string"]
---

<LowercaseNote />

## توضیحات

یک string رو فرمت می‌کنه تا متغیرها و string‌های دیگر رو درش شامل کنه.

| نام              | توضیحات                                |
| ---------------- | -------------------------------------- |
| output[]         | string که نتیجه درش خروجی می‌گیره     |
| len              | حداکثر طولی که output می‌تونه داشته باشه |
| const format[]   | string فرمت                            |
| \{Float, _\}:... | تعداد نامحدود آرگومان از هر tag          |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مشخص کننده‌های فرمت

| مشخص کننده | معنی                                            |
| ----------- | ----------------------------------------------- |
| %i          | Integer بدون علامت                             |
| %d          | Integer با علامت                               |
| %s          | String                                          |
| %f          | عدد اعشاری                                      |
| %c          | کاراکتر ASCII                                   |
| %x          | عدد هگزادسیمال                                  |
| %b          | عدد باینری                                      |
| %%          | '%' واقعی                                       |
| %q          | فرار دادن متن برای SQLite. (اضافه شده در 0.3.7 R2) |

مقادیر برای placeholder‌ها دقیقاً به همون ترتیب پارامترها در فراخوانی پیش می‌رن، یعنی `"I am %i years old"` - `%i` با یک متغیر integer جایگزین می‌شه، که سن شخصه.

می‌تونین به صورت اختیاری یه عدد بین `%` و حرف کد placeholder بذارین. این عدد عرض فیلد رو نشون می‌ده؛ اگه اندازه پارامتری که قراره در موقعیت placeholder چاپ بشه کوچک‌تر از عرض فیلد باشه، فیلد با فضاهای خالی گسترش پیدا می‌کنه. برای کوتاه کردن تعداد رقم‌های اعشاری که از یک float نشون داده می‌شه، می‌تونین '.\<max number\>' بین `%` و `f` اضافه کنین، مثلاً `%.2f`.

## مثال‌ها

```c
new result[128];
new number = 42;
format(result, sizeof(result), "The number is %i.", number); // The number is 42.

new string[] = "simple message";
format(result, sizeof(result), "This is a %s containing the number %i.", string, number);
// This is a simple message containing the number 42.
```

<br />

```c
new string[64];
format(string, sizeof(string), "Your score is: %d", GetPlayerScore(playerid));
SendClientMessage(playerid, 0xFF8000FF, string);
```

<br />

```c
new string[32];
new hour, minute, second;
gettime(hour, minute, second);
format(string, sizeof(string), "The time is %02d:%02d:%02d.", hour, minute, second);
// چیزی مثل "The time is 09:45:02." خروجی می‌ده
```

<br />

```c
new string[32];
format(string, sizeof(string), "43%s of my shirts are black.", "%%");
SendClientMessage(playerid, 0xFF8000FF, string);
```

## نکات

:::warning

این تابع از packed string‌ها پشتیبانی نمی‌کنه.

:::

## توابع مرتبط

- [print](print): چاپ یک پیام ساده در لاگ‌ها و کنسول سرور.
- [printf](printf): چاپ یک پیام فرمت شده در لاگ‌ها و کنسول سرور.
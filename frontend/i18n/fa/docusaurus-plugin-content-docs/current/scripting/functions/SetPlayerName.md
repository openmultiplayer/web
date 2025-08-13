---
title: SetPlayerName
sidebar_label: SetPlayerName
description: اسم پلیر رو تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

اسم پلیر رو تنظیم می‌کنه.

| نام          | توضیحات                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | آیدی پلیری که قراره اسمش تنظیم بشه                                                                                                                     |
| const name[] | اسمی که قراره تنظیم بشه. باید 1-24 کاراکتر داشته باشه و فقط کاراکتر های معتبر داشته باشه (0-9, a-z, A-Z, [], (), \$ @ . \_ و = فقط) |

## مقادیر بازگشتی

**1** اسم با موفقیت تغییر کرد

**0** پلیر متصل نیست یا اسم از قبل در حال استفاده هست

**-1** اسم نمی‌تونه تغییر کنه (کمتر از 3 نماد هست، خیلی طولانیه یا کاراکتر های نامعتبر داره)

## مثال‌ها

```c
// Command be sadegi esme player ro be "Superman" taghir mide agar momken bashe, bedune error checking ya payam.
if (strcmp(cmdtext, "/superman", true) == 0)
{
    SetPlayerName(playerid, "Superman");
    return 1;
}

// Command esme player ro be "Superman" taghir mide agar momken bashe, 
// har error ro ba estefade az "switch" statement be player etelaa mide.
if (strcmp(cmdtext, "/superman", true) == 0)
{
    switch (SetPlayerName(playerid, "Superman"))
    {
        case -1:
        {
            SendClientMessage(playerid, 0xFF0000FF, "The name has invalid characters or it's out of length.");
        }
        case 0:
        {
            SendClientMessage(playerid, 0xFF0000FF, "Unable to change your name, someone else is known as 'Superman' already.");
        }
        case 1:
        {
            SendClientMessage(playerid, 0x00FF00FF, "You are now known as 'Superman'");
        }
    }
    return 1;
}
```

## نکات

:::warning

- تغییر اسم پلیر ها به همون اسم اما با حروف مختلف (مثلاً "John" به "JOHN") کار نمی‌کنه.
- اگه توی [OnPlayerConnect](../callbacks/OnPlayerConnect) استفاده بشه، اسم جدید برای پلیری که داره متصل می‌شه نشون داده نمی‌شه.
- دادن رشته null به عنوان اسم جدید باعث کرش سرور می‌شه. (در open.mp درست شده)
- اسم پلیر ها می‌تونه تا 24 کاراکتر باشه وقتی این تابع رو استفاده می‌کنی، اما وقتی از SA-MP server browser به سرور متصل می‌شن، اسم پلیر ها نباید بیشتر از 20 و کمتر از 3 کاراکتر باشه (سرور ورود رو رد می‌کنه). این اجازه می‌ده 4 کاراکتر اضافی وقتی SetPlayerName استفاده می‌کنی داشته باشی.

:::

## توابع مرتبط

- [GetPlayerName](GetPlayerName): اسم پلیر رو دریافت می‌کنه.
- [IsValidNickName](IsValidNickName): چک می‌کنه که آیا یک nick name معتبره یا نه.
- [AllowNickNameCharacter](AllowNickNameCharacter): اجازه می‌ده یک کاراکتر توی nick name استفاده بشه.
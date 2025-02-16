---
title: GivePlayerMoney
description: به یک بازیکن مشخص شده پول بدهید یا از او پول بگیرید
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

| اسم      | توضیحات                                                                      |
| -------- | ---------------------------------------------------------------------------- |
| playerid | شناسه بازیکنی میخواهید به ان پول دهید و یا از ان پول بگیرید                  |
| money    | مقدار پولی که میخواهید به بازیکن بدهید و برای گرفتن پول از منها استفاده کنید |

## مقادیر برگشتی

1: تابع با موفقیت اجرا شد

0: تابع اجرا نشد. چون متاسفانه بازیکن متصل نیست

## مثال ها

</div>

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
       // درصورتی که یک بازیکن , یک بازیکن دیگه را بکشد $1000 پول خواهد داد
       GivePlayerMoney(killerid, 1000);
       SendClientMessage(killerid, -1, "You have been awarded $1000 for the kill.");
    }
    // در صورتی که پلیر بمیره 500$ ازش گرفته میشه
    GivePlayerMoney(playerid, -500);
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع های مرتبط

- [ResetPlayerMoney](../callbacks/ResetPlayerMoney) تنظیم کردن پول بازیکن به $0
- [GetPlayerMoney](../callbacks/GetPlayerMoney) بررسی کردن مقدار پول یک بازیکن

</div>

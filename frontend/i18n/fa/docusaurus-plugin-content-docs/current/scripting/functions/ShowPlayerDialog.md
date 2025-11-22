---
id: ShowPlayerDialog
title: ShowPlayerDialog
description: یک دیالوگ را در لحظه به بازیکن نشان میدهد
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

یک دیالوگ را در لحظه به بازیکن نشان میدهد

| نام      | توضیح                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | شناسه بازیکنی که میخواهید دیالوگ برای او نمایش داده شود.                                                                                             |
| dialogid  | شناسه دیالوگ جهت پردازش پاسخ بازیکن، 32767 حداکثر مقدار شناسه است، استفاده از شناسه های منفی باعث پنهان شدن هر دیالوگ در حال نمایش میشود. |
| style     | [سبک](../resources/dialogstyles) دیالوگ                                     |
| caption[] | عنوان دیالوگ که در قسمت بالا نمایش داده میشود. این قسمت نمیتواند بیشتر از 64 حرف باشد در غیر این صورت ادامه عنوان برش میخورد.       |
| info[]    | متنی که میخواهیم در قسمت اصلی دیالوگ نمایش داده شود. از \n برای رفتن به خط جدید و از \t برای جدول بندی کردن استفاده کنید.                                                  |
| button1[] | متن دکمه ای که در سمت چپ قرار میگیرد.                                                                                                            |
| button2[] | متن دکمه ای که در سمت راست قرار میگیرد. اگر میخواهید چیزی نمایش داده نشود از ( "" ) استفاده کنید.                                                                         |

## مقادیر برگشتی

1: تابع با موفقیت اجرا شد

0: اجرای تابع موفق نبود. به این معنا که بازیکن متصل نبود.

## مثال ها

</div>

```c
// Tarif kardane shenase dialog ba estefade az enum:
enum
{
    DIALOG_LOGIN,
    DIALOG_WELCOME,
    DIALOG_WEAPONS
}

// hamchenin mitavanim az #define ham estefade konim:
#define DIALOG_LOGIN 1
#define DIALOG_WELCOME 2
#define DIALOG_WEAPONS 3

//Enums pishnahad mishavad, choon shoma niazi nadarid ke shenase ra bezanid. Ba in hal enum ha az memory estefade mikonand zakhire tarif ha, dar hali ke define ha dar sahne compile 'pre-processor' pardazesh shode and.

// Masalan baraye DIALOG_STYLE_MSGBOX:
ShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "You are connected to the server", "Close", "");

// Masalan baraye DIALOG_STYLE_INPUT:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");

// Masalan baraye DIALOG_STYLE_LIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "AK47\nM4\nSniper Rifle", "Option 1", "Option 2");

// Masalan baraye DIALOG_STYLE_PASSWORD:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Enter your password below:", "Login", "Cancel");

// Masalan baraye DIALOG_STYLE_TABLIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Buy Weapon", "Deagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");

// Masalan baraye DIALOG_STYLE_TABLIST_HEADERS:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Buy Weapon", "Weapon\tPrice\tAmmo\nDeagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::tip

پیشنهاد میشود که از enum یا تعریف کردن(#define) برای تعیین شناسه هر دیالوگ استفاده کنید تا در آینده گیچ نشوید. شما نباید هیچوقت از اعداد برای تعریف شناسه استفاده نکنید - این مورد باعث گیچ شدن شما میشود.

:::

:::tip

استفاده از شناسه دیالوگ -1 باعث بسته شدن تمام دیالوگ های باز روی صفحه بازیکن میشود. برای چند رنگ بودن متن از روش color embedding  استفاده کنید

:::

## تابع های مرتبط
</div>

- [TextDrawShowForPlayer](TextDrawShowForPlayer)
- [OnDialogResponse](../callbacks/OnDialogResponse)

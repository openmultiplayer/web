---
id: OnDialogResponse
title: OnDialogResponse
description: این کالبک زمانی  که بازیکن با "ShowPlayerDialog" از طریق کلیک روی دکمه یا فشردن دکمه ESC/ENTER یا کلیک بر روی آیتم(در صورتی که نوع دیالوگ لیست باشد) پاسخ بدهد فرا خوانده میشود
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی  که بازیکن با "ShowPlayerDialog" از طریق کلیک روی دکمه یا فشردن دکمه ESC/ENTER یا کلیک بر روی آیتم(در صورتی که نوع دیالوگ لیست باشد) پاسخ بدهد فرا خوانده میشود

| اسم         | توضیح                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | شناسه بازیکن مورد نظر                                                                                                     |
| dialogid    | شناسه دیالوگی که برای بازیکن نمایش داده میشود                                                            |
| response    | 1 در حالتی که به آن پاسخ داده باشد و 0 اگه بازیکن آن را کنسل کرده باشد |
| lisitem     | شناسه موردی که بازیکن انتخاب کرده (از 0 شروع میشود) ) (فقط در صورتی که سبک دیالوگ لیست باشد، در غیر این صورت این مورد -1 خواهد بود). |
| inputtext[] | متنی که بازیکن درون قسمت ورودی وارد کرده یا متن موردی که بازیکن انتخاب کرده است |

## مثال ها
</div>

```c
// Tarif kardane id dialog ke mikhahim ejra shavad
#define DIALOG_RULES 1

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\n- No Spamming\n- Respect Admins\n\nDo you agree to these rules?", "Bale", "Kheyr");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_RULES)
    {
        if(response) // Agar bar rooye "Bale" click kard
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // Agar dokme ESC ra zad ya rooye "Kheyr" click kard
        {
            Kick(playerid);
        }
        return 1; // Ma yek dialog ra residegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0; // Bayad inja return 0 konid, mesle OnPlayerCommandText
}
#define DIALOG_LOGIN 2

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_LOGIN)
    {
        if(!response) // Agar rooye "Cancel" click kard ya dokme ESC ra zad
        {
            Kick(playerid);
        }
        else // Agar rooye dokme "Login" click kard ya dokme ENTER ra zad
        {
            if(CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Shoma vared shodid!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Re-show the login dialog
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");
            }
        }
        return 1; // Ma yek dialog ra residegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0; // Bayad inja return 0 konid, mesle OnPlayerCommandText
}
#define DIALOG_WEAPONS 3

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // If they clicked 'Select' or double-clicked a weapon
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Give them a desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Give them a Combat Shotgun
            }
        }
        return 1; // Ma yek dialog ra residegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0; // Bayad inja return 0 konid, mesle OnPlayerCommandText
}
#define DIALOG_WEAPONS 3

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Agar rooye 'Select' click kard ya dokme ENTER ra zad
        {
            // Dadane aslahe be bazikon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Give them an M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Give them an MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
            }
        }
        return 1; // Ma yek dialog ra residegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0;// Bayad inja return 0 konid, mesle OnPlayerCommandText
}
```
<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::tip

مقدار ها بر اثاث نوع استایل دیالوگ میتوانند محتوای متفاوتی داشته باشند

:::

:::tip

اگر تعداد دیالوگ ها زیاد است بهتر است از شناسه دیالوگ های مختلفی استفاده کنید

:::

:::warning

دیالوگ بعد از ری استارت شدن سرور برای بازیکن ها پنهان نمیشود و اگر بازیکن به دیالوگ پاسخ بدهد "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" در کنسول نمایش داده میشود.

:::

## تابع های مرتبط
</div>

- [ShowPlayerDialog](../functions/ShowPlayerDialog) 

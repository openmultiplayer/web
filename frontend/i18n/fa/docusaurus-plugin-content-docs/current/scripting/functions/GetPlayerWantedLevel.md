---
title: GetPlayerWantedLevel
sidebar_label: GetPlayerWantedLevel
description: دریافت سطح تحت تعقیب بودن بازیکن.
tags: ["player"]
---

## توضیحات

دریافت سطح تحت تعقیب بودن بازیکن.

| نام     | توضیحات                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID بازیکنی که می‌خواهید سطح تحت تعقیب بودنش را دریافت کنید. |

## مقادیر برگشتی

سطح تحت تعقیب بودن بازیکن.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/getmywantedlevel", true) == 0)
     {
          // Gets the current wanted level, saves it in the variable wantedlevel
          //and then tells the player his wanted in a client message.

          new
               wantedLevel = GetPlayerWantedLevel(playerid),
               message[64];

          format(message, sizeof(message), "Your current wanted level is: %i", wantedlevel);
          SendClientMessage(playerid, 0xFF0000FF, message);

          return 1;
     }
    return 0;
}
```

## توابع مرتبط

- [SetPlayerWantedLevel](SetPlayerWantedLevel): تنظیم سطح تحت تعقیب بودن بازیکن.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): پخش گزارش جرم برای بازیکن.
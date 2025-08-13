---
title: strcopy
sidebar_label: strcopy
description: یک رشته را در رشته مقصد کپی می‌کند.
tags: ["string"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

یک رشته را در رشته مقصد کپی می‌کند.

| نام                      | توضیحات                                         |
| ------------------------- | --------------------------------------------------- |
| dest[]                    | رشته‌ای برای کپی کردن رشته منبع.          |
| const source[]            | رشته منبع.                                  |
| maxlength = sizeof (dest) | حداکثر طول مقصد. *(اختیاری)* |

## مقادیر بازگشتی

طول رشته مقصد جدید.

## مثال‌ها

```c
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

new string[64];
strcopy(string, playerName); // playerName را در string کپی می‌کند
```

## توابع مرتبط

- [strcat](strcat): دو رشته را در یک مرجع مقصد متصل کنید.
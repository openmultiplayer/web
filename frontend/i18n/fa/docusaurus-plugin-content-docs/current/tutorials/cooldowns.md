---
title: Cooldowns
sidebar_label: Cooldowns
description: آموزش نوشتن cooldown برای محدود کردن اعمال کاربر با استفاده از tick count و جلوگیری از استفاده timer.
---

این آموزش نوشتن مکانیک گیم‌پلی رایج در بازی‌های اکشن را پوشش می‌دهد: cooldown. Cooldown ابزاری برای محدود کردن فرکانس انجام کاری توسط بازیکن است. این ممکن است چیزی مثل استفاده از توانایی مانند healing یا نوشتن پیام‌های چت باشد. به شما امکان کم کردن سرعت انجام کارها توسط بازیکنان را می‌دهد یا برای اهداف تعادل گیم‌پلی یا جلوگیری از spam.

ابتدا روش _بد_ انجام cooldown با استفاده از `SetTimer` برای به‌روزرسانی حالت را مثال می‌زنم.

## استفاده از Timer ها

مثلاً فرض کنید اعمال خاصی دارید که فقط یک بار در هر چند ثانیه می‌تواند انجام شود، من افراد زیادی را می‌بینم (شامل Southclaws، سال‌ها پیش) که چیزی مثل این می‌کنند:

```pawn
static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
/* این می‌تواند هر نوع event ورودی بازیکن باشد مانند:
 *  وارد کردن دستور
 *  برداشتن pickup
 *  ورود به checkpoint
 *  فشار دادن دکمه
 *  ورود به منطقه
 *  استفاده از dialog
 */
{
    // این فقط وقتی کار می‌کند که بازیکن اجازه داشته باشد
    if (IsPlayerAllowedToDoThing[playerid])
    {
        // کاری که بازیکن درخواست کرده را انجام بده
        DoTheThingThePlayerRequested();

        // بازیکن را غیرمجاز کن
        IsPlayerAllowedToDoThing[playerid] = false;

        // بعد از 10 ثانیه به بازیکن اجازه انجام دوباره بده
        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);

        return 1;
    }
    else
    {
        SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

        return 0;
    }
}

// 10 ثانیه بعد از انجام کار توسط بازیکن صدا زده می‌شود
public AllowPlayer(playerid)
{
    IsPlayerAllowedToDoThing[playerid] = true;
    SendClientMessage(playerid, -1, "You are allowed to do the thing again! :D");
}
```

حالا این همه خوب و مرتب است، کار می‌کند، بازیکن نمی‌تواند آن کار را دوباره به مدت 10 ثانیه بعد از استفاده انجام دهد.

مثال دیگری در اینجا بگیرید، این stopwatch است که اندازه‌گیری می‌کند طول می‌کشد بازیکن مسابقه ساده نقطه به نقطه انجام دهد:

```pawn
static
    StopWatchTimerID[MAX_PLAYERS],
    StopWatchTotalTime[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    // هر ثانیه تابعی را صدا می‌زند
    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);
}

public StopWatch(playerid)
{
    // شمارنده ثانیه را افزایش بده
    StopWatchTotalTime[playerid]++;
}

OnPlayerFinishRace(playerid)
{
    new str[128];

    format(str, 128, "You took %d seconds to do that", StopWatchTotalTime[playerid]);
    SendClientMessage(playerid, -1, str);

    KillTimer(StopWatchTimerID[playerid]);
}
```

این دو مثال رایج هستند و ممکن است خوب کار کنند. اما، راه بهتری برای دستیابی به هر دوی این نتایج وجود دارد، که دقیق‌تر است و می‌تواند زمان‌بندی stopwatch را تا میلی‌ثانیه بدهد!

## استفاده از `GetTickCount()` و `gettime()`

`GetTickCount()` تابعی است که زمان را به میلی‌ثانیه از زمان باز شدن فرآیند سرور به شما می‌دهد. `gettime()` تعداد ثانیه‌ها از 1 ژانویه 1970 را برمی‌گرداند، که به عنوان Unix Timestamp هم شناخته می‌شود.

اگر هر یک از این توابع را در دو زمان مختلف صدا کنید، و زمان اول را از دوم کم کنید ناگهان فاصله بین آن دو رویداد را به میلی‌ثانیه یا ثانیه به ترتیب دارید! نگاهی به این مثال بیندازید:

### یک Cooldown

```pawn
static PlayerAllowedTick[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
   // این فقط وقتی کار می‌کند که tick فعلی منهای tick آخر بالای 10000 باشد.
   // به عبارت دیگر، فقط وقتی کار می‌کند که فاصله بین اعمال بیش از 10 ثانیه باشد.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount(); // tick count را با آخرین زمان به‌روزرسانی کن.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

       return 0;
   }
}
```

یا، به طور جایگزین نسخه `gettime()`:

```pawn
static PlayerAllowedSeconds[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (gettime() - PlayerAllowedSeconds[playerid] > 10)
   // این فقط وقتی کار می‌کند که ثانیه فعلی منهای ثانیه آخر بالای 10 باشد.
   // به عبارت دیگر، فقط وقتی کار می‌کند که فاصله بین اعمال بیش از 10 ثانیه باشد.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedSeconds[playerid] = gettime(); // شمارش ثانیه را با آخرین زمان به‌روزرسانی کن.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

       return 0;
   }
}
```

کد بسیار کمتری آنجا هست، نیازی به تابع public یا timer نیست. اگر واقعاً می‌خواهید، می‌توانید زمان باقی‌مانده را در پیام خطا بگذارید:

(در این مثال از SendFormatMessage استفاده می‌کنم)

```pawn
SendFormatMessage(
    playerid,
    -1,
    "You are not allowed to do that yet! You can again in %d ms",
    10000 - (GetTickCount() - PlayerAllowedTick[playerid])
);
```

این مثال بسیار ساده است، بهتر است آن مقدار MS را به رشته `minutes:seconds.milliseconds` تبدیل کنید اما کدش را در انتها پست خواهم کرد.

### یک Stopwatch

امیدوارم ببینید چقدر قدرتمند است برای گرفتن فاصله‌ها بین رویدادها، بیایید مثال دیگری ببینیم

```pawn
static Stopwatch[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}

OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "You took %d milliseconds to do that", interval);
    SendClientMessage(playerid, -1, str);
}
```

در این مثال، tick count وقتی مسابقه شروع می‌کند در متغیر بازیکن ذخیره می‌شود. وقتی تمام می‌کند، tick فعلی (وقت تمام کردن) آن tick اولیه (مقدار کوچکتر) از آن کم می‌شود و بنابراین مقدار میلی‌ثانیه‌ها بین شروع و پایان مسابقه را داریم.

#### تفکیک

حالا بیایید کد را کمی تفکیک کنیم.

```pawn
new Stopwatch[MAX_PLAYERS];
```

این متغیر سراسری است، نیاز داریم از این استفاده کنیم تا بتوانیم tick count را ذخیره کنیم و مقدار را در نقطه دیگری از زمان بازیابی کنیم (به عبارت دیگر، در تابع دیگر، بعداً استفاده کنیم)

```pawn
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
```

این وقتی است که بازیکن مسابقه را شروع می‌کند، tick count حالا ضبط می‌شود، اگر این 1 دقیقه بعد از شروع سرور اتفاق بیفتد، مقدار آن متغیر 60,000 خواهد بود زیرا 60 ثانیه است و هر ثانیه هزار میلی‌ثانیه دارد.

خوب، حالا متغیر آن بازیکن روی 60,000 تنظیم شده، حالا او 1 دقیقه 40 ثانیه بعد مسابقه را تمام می‌کند:

```pawn
OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "You took %d milliseconds to do that", interval);
    SendClientMessage(playerid, -1, str);
}
```

اینجا جایی است که محاسبه فاصله اتفاق می‌افتد، خوب، من می‌گویم محاسبه، فقط کم کردن دو مقدار است!

GetTickCount() tick count فعلی را برمی‌گرداند، پس بزرگتر از tick count اولیه خواهد بود که یعنی tick count اولیه را از tick count فعلی کم می‌کنید تا فاصله بین دو اندازه‌گیری را بگیرید.

پس، همان طور که گفتیم بازیکن 1 دقیقه و 40 ثانیه بعد مسابقه را تمام می‌کند (100 ثانیه، یا 100,000 میلی‌ثانیه)، GetTickCount برابر 160,000 برمی‌گردد. مقدار اولیه (که 60,000 است) را از مقدار جدید (که 160,000 است) کم کنید و 100,000 میلی‌ثانیه می‌گیرید، که 1 دقیقه 40 ثانیه است، که زمانی است که بازیکن برای انجام مسابقه طول کشیده!

## خلاصه و نکات

پس! یاد گرفتیم که:

- GetTickCount مقدار زمان را به میلی‌ثانیه از زمان شروع سیستم کامپیوتری که سرور روی آن اجرا می‌شود برمی‌گرداند.
- و می‌توانیم با صدا زدن آن در دو فاصله، ذخیره اولی در متغیر و مقایسه دو مقدار فاصله دقیق به میلی‌ثانیه بین آن دو رویداد را بگیریم.

آخر از همه، نمی‌خواهید به بازیکنانتان مقادیر زمان را به میلی‌ثانیه بگویید! چه اتفاقی می‌افتد اگر یک ساعت طول بکشد مسابقه تکمیل کنند؟

بهتر است از تابعی استفاده کنید که میلی‌ثانیه‌ها را می‌گیرد و به فرمت خوانا تبدیل می‌کند، مثلاً، در مثال قبلی بازیکن 100,000 میلی‌ثانیه طول کشیده مسابقه انجام دهد، اگر به بازیکن بگویید این مدت طول کشیده، خواندن آن 100,000 و فهمیدن معنی‌اش در زمان قابل خواندن برای انسان طول بیشتری می‌کشد.

[این بسته](https://github.com/ScavengeSurvive/timeutil) شامل تابعی برای فرمت کردن میلی‌ثانیه‌ها به رشته است.

امیدوارم کمک کرده باشد! آن را نوشتم زیرا اخیراً به چند نفر کمک کرده‌ام که نمی‌دانستند چگونه از `GetTickCount()` یا `gettime()` به عنوان جایگزین برای timer ها یا برای گرفتن فاصله‌ها و غیره استفاده کنند.
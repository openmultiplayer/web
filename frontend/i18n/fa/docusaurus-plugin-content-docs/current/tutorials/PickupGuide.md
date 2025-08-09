---
title: راهنمای Pickup
sidebar_label: راهنمای Pickup
---

آموزش کوتاهی که نحوه استفاده از pickup ها را توضیح می‌دهد.

## تعریف pickupid

اولین کاری که هنگام ایجاد pickup ها انجام می‌شود، ایجاد مکانی برای ذخیره ID آنها است. این کار در متغیر سراسری انجام می‌شود تا بتواند هنگام ایجاد pickup تنظیم و هنگام برداشتن pickup خوانده شود، و callback ای با ID pickup که برداشته‌اید صدا زده شود. برای این مثال از نام "gMyPickup" استفاده خواهیم کرد.

```pawn
new gMyPickup;
```

## ایجاد pickup

دو راه برای ایجاد pickup ها وجود دارد. [CreatePickup](../scripting/functions/CreatePickup) و [AddStaticPickup](../scripting/functions/AddStaticPickup). AddStaticPickup هنگام ایجاد ID برنمی‌گرداند، نمی‌تواند نابود شود و فقط زیر OnGameModeInit می‌تواند استفاده شود، پس برای این مثال از [CreatePickup](../scripting/functions/CreatePickup) استفاده خواهیم کرد.

**سینتکس برای [CreatePickup](../scripting/functions/CreatePickup):**

**پارامترها:**

| model        | مدلی که می‌خواهید برای pickup استفاده کنید.                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| type         | نوع spawn pickup، پایین‌تر در این صفحه ببینید.                                                        |
| Float:X      | مختصات X برای نمایش pickup.                                                                  |
| Float:Y      | مختصات Y برای نمایش pickup.                                                                  |
| Float:Z      | مختصات Z برای نمایش pickup.                                                                  |
| Virtualworld | شناسه virtual world pickup. مقدار -1 باعث می‌شود pickup در همه virtual worldها نمایش داده شود. |

برای این مثال یک pickup پول در Grove Street ایجاد خواهیم کرد.

حالا باید روی مدلی برای ظاهر شدن در دنیا تصمیم بگیریم، مدل‌های زیادی برای انتخاب وجود دارد، برخی از آنها در سایت خارجی [اینجا](https://dev.prineside.com/en/gtasa_samp_model_id) فهرست شده‌اند، در اینجا مدل شماره 1274 که علامت دلار است را انتخاب می‌کنیم.

در نهایت نیاز به [Type](../scripting/resources/pickuptypes) برای pickup داریم، در همان صفحه با مدل‌های pickup لیستی از انواع pickup که توضیح می‌دهد انواع مختلف چه کار می‌کنند وجود دارد. ما می‌خواهیم این pickup وقتی آن را برمی‌دارید ناپدید شود، تا نتوانید مکرراً آن را بردارید، اما بعد از چند دقیقه دوباره ظاهر شود تا دوباره بتوانید آن را بردارید، نوع 2 دقیقاً همین کار را می‌کند.

Pickup ها معمولاً هنگام شروع اسکریپت، در [OnGameModeInit](../scripting/callbacks/OnGameModeInit) یا [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) بسته به نوع اسکریپت ایجاد می‌شوند، هرچند می‌تواند در هر تابعی باشد (مثلاً می‌توانید یک اسکریپت weapon drop بسازید که از OnPlayerDeath برای ایجاد weapon pickup استفاده می‌کند).

پس در اینجا کدی برای ایجاد pickup ما و ذخیره ID در 'gMyPickup' آورده شده:

```pawn
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### انتخاب اینکه چه کاری انجام دهد

وقتی pickup ای را برمی‌دارید، [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup) صدا زده می‌شود، که playerid (بازیکنی که pickup را برداشته) و pickupid (ID pickup که برداشته شده) را پاس می‌دهد.

برخی انواع pickup برای کار خودکار طراحی شده‌اند، پس نیازی به انجام کاری زیر OnPlayerPickUpPickup نیست. برای اطلاعات بیشتر صفحه [Pickup Types](../scripting/resources/pickuptypes) را بررسی کنید.

وقتی بازیکن pickup جدید ما را برمی‌دارد، می‌خواهیم $100 به او بدهیم، برای انجام این کار ابتدا باید بررسی کنیم که pickup دلار ما را برداشته و نه یکی دیگر. وقتی این کار را کردیم، می‌توانیم $100 به او بدهیم:

```pawn
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // بررسی کن که ID pickup که برداشته‌اند gMyPickup است
    if(pickupid == gMyPickup)
    {
        // پیام به بازیکن
        SendClientMessage(playerid, 0xFFFFFFFF, "You received $100!");
        // پول به بازیکن بده
        GivePlayerMoney(playerid, 100);
    }
    // اگر نیاز به اضافه کردن pickup های بیشتر دارید، سادگی این کار را انجام دهید:
    else if (pickupid == (some other pickup))
    {
        // pickup دیگر، کار دیگری انجام بده
    }
    return 1;
}
```

تبریک، حالا می‌دانید چگونه pickup ها را ایجاد و مدیریت کنید!

## مطالعه بیشتر

می‌توانید از پلاگین [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) برای ایجاد pickup های نامحدود با [CreateDynamicPickup](<https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)>) استفاده کنید

همچنین می‌توانید pickup مخصوص هر بازیکن با [CreatePlayerPickup](../scripting/functions/CreatePlayerPickup) ایجاد کنید.
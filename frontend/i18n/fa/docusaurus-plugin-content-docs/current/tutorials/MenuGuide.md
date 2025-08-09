---
title: راهنمای منو
sidebar_label: راهنمای منو
---

آموزش کوتاهی که نحوه استفاده از سیستم منوی بازی را توضیح می‌دهد. این سیستم منو متفاوت از دیالوگ‌های SA-MP است و بازتاب بهتری از UI سنتی بازی اصلی است.

## منوها در SA-MP

منوها برای اکثر بازیکنان بسیار پیچیده و دشوار برای اسکریپت نویسی به نظر می‌رسند، گرچه اینطور نیست. در اینجا نشان خواهم داد که چگونه یک منوی ساده ایجاد کنیم. در پایان یک منوی تله‌پورت ایجاد کرده‌ایم.

## اولین قدم‌های منو

ابتدا باید یک منو ایجاد کنیم. پیشوند قبل از آن `Menu:` است که متغیر را [تگ](../scripting/language/Tags) صحیح می‌کند. انواع مختلفی برای استفاده‌های مختلف مانند `Float:` `bool:` `Text3D:` و غیره وجود دارد. کد زیر را نزدیک بالای اسکریپت خود بنویسید:

```pawn
new Menu:teleportmenu;
```

خوب، متغیری برای ذخیره منو ایجاد کردیم. حالا باید منو را ایجاد کنیم و متغیری که ایجاد کردیم را به منو اختصاص دهیم. این را در `OnGameModeInit` تایپ کنید:

```pawn
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

حالا کمی توضیح در مورد آرگومان‌های [CreateMenu](../scripting/functions/CreateMenu).

**پارامترها:**

| پارامتر        | تعیین‌کننده                                                    |
| -------------- | --------------------------------------------------------------- |
| title          | عنوان منو                                                       |
| columns        | تعداد ستون‌های استفاده شده (حداکثر 2 است)                       |
| Float:x        | موقعیت عمودی منو روی صفحه (چپ به راست)                          |
| Float:y        | موقعیت افقی منو روی صفحه (بالا و پایین)                          |
| Float:col1width| عرض ستون اول                                                    |
| Float:col2width| عرض ستون دوم                                                    |

## اضافه کردن برخی آیتم‌های منو

خب، حالا منو را داریم، اما به برخی آیتم‌ها نیاز داریم که بتوانیم در منو انتخاب کنیم. آنها را زیر `CreateMenu` که قبلاً ساختیم اضافه می‌کنید.

```pawn
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "LV");
AddMenuItem(teleportmenu, 0, "LV");
 
AddMenuItem(teleportmenu, 1, "Grove Street");
AddMenuItem(teleportmenu, 1, "Starfish Tower");
AddMenuItem(teleportmenu, 1, "Wheel Arch Angels");
AddMenuItem(teleportmenu, 1, "Jizzys");
AddMenuItem(teleportmenu, 1, "4 Dragons");
AddMenuItem(teleportmenu, 1, "Come-a-Lot");
```

توضیح [AddMenuItem](../scripting/functions/AddMenuItem):

| menuid | شناسه منویی که آیتم در آن نمایش داده شود |
| ------ | ---------------------------------------- |
| column | ستونی که آیتم در آن نشان داده شود        |
| text   | متن آیتم                                 |

## ایجاد افکت برای آیتم‌ها

خوب، حالا که یک منوی کامل با آیتم‌ها ایجاد کرده‌ایم چه اتفاقی باید بیفتد وقتی آیتمی را انتخاب می‌کنید؟ در مثال ما می‌خواهیم یک منوی تله‌پورت بسازیم، پس باید به موقعیتی که انتخاب می‌کنیم تله‌پورت شویم. وقتی بازیکن آیتمی را روی منو انتخاب می‌کند، اسکریپت callback [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow) را صدا می‌زند. بهترین راه انجام این کار استفاده از switch است، که مانند چندین if statement برای بررسی اینکه آیا متغیر ارزش‌های خاصی دارد یا نه است. اما ابتدا ما فقط این افکت‌ها را برای منویی که می‌خواهیم می‌خواهیم، پس نیاز داریم متغیری ایجاد کنیم که نگه دارد بازیکن به کدام منو نگاه می‌کند، این با `GetPlayerMenu` انجام می‌شود:

```pawn
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

حالا، وقتی کسی چیزی را روی منو انتخاب می‌کند، شناسه منوی آنها در `CurrentMenu` ذخیره خواهد شد.

حالا باید بررسی کنیم که منویی که روی آن انتخاب کرده‌اند همان منویی است که می‌خواهیم:

```pawn
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        //stuff
    }
    return 1;
}
```

حالا بین این براکت‌ها جایی است که `switch` قرار می‌گیرد، این بررسی می‌کند بازیکن کدام آیتم را انتخاب کرده یا `row` این می‌تواند با if statement‌های بررسی اینکه کدام `row` است انجام شود، اما `switch` راه ساده‌تری برای نوشتن آن است.

```pawn
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Grove Street");
        }
        case 1: //Starfish Tower
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the top of Starfish Tower");
        }
        case 2: //Wheel Arch Angels
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Wheel Arch Angels tuning-shop");
        }
        case 3: //Jizzys
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Jizzy's Nightclub!");
        }
        case 4: //4Dragons
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Four Dragons Casino");
        }
        case 5: //Come-a-Lot
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Come-a-Lot casino!");
        }
    }
}
```

## قدم‌های آخر

حالا نیاز به دستوری برای نشان دادن منو داریم. این ساده‌ترین قدم است. فقط یک مقایسه با `strcmp` و یک `ShowMenuForPlayer`. این در `OnPlayerCommandText` انجام می‌شود. یا، اگر پردازنده دستور دارید، به جای آن از آن برای صدا زدن `ShowMenuForPlayer` استفاده کنید.

```pawn
if(strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

واقعاً آسان بود، نه؟

## کلمات آخر

خوب، بعد از اینکه این را خواندید و متوجه شدید، منوی خودتان را امتحان کنید. همان طور که دیدید، خیلی دشوار نیست، اما بازیکنان سرور شما را بیشتر تحت تأثیر قرار خواهد داد. و می‌توانید افکت‌های واقعاً جالبی با این اسکریپت کنید. همچنین برای فروشگاه‌های عمومی یا سوپرمارکت‌ها برای چیزهایی که می‌توانید بخرید بسیار جالب است. سپس می‌توانید مقداری پول کم کنید و قیمت در ستون دیگر منو نشان داده شود. اما حالا، روی کار خودتان کار کنید.

همچنین می‌توانید [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) با `false` بعد از `ShowPlayerMenu` و [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) با `true` در انتهای `OnPlayerSelectedMenuRow` اضافه کنید تا بازیکن نتواند حرکت کند وقتی منوها را می‌بیند.

امیدوارم از این آموزش چیزی یاد گرفته باشید. اگر سؤالی دارید، در انجمن‌ها/دیسکورد بپرسید.
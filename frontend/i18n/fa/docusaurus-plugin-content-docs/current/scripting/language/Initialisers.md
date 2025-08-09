---
title: "کلمات کلیدی: مقداردهان‌ها"
sidebar_label: "کلمات کلیدی: مقداردهان‌ها"
---

## `const`

```c
new const
    MY_CONSTANT[] =  {1, 2, 3};
```

const به طور گسترده استفاده نمی‌شود اما متغیری اعلان می‌کند که نمی‌تواند توسط کد تغییر کند. چند کاربرد برای این وجود دارد - توابع با پارامترهای آرایه const گاهی می‌توانند بهتر کامپایل شوند یا ممکن است چیزی شبیه define بخواهید اما که یک آرایه باشد. const یک تعدیل‌کننده است، باید با new یا اعلان‌کننده متغیر دیگری برود. اگر سعی کنید متغیر const را تغییر دهید کامپایلر شکایت خواهد کرد.

## `enum`

شمارشگرها یک سیستم بسیار مفید برای نمایش گروه‌های بزرگ از داده‌ها و تغییر سریع ثابت‌ها هستند. چند کاربرد اصلی دارند - جایگزین کردن مجموعه‌های بزرگ دستورات define، نمایش نمادین شکاف‌های آرایه (این‌ها در واقع همان چیز هستند اما متفاوت به نظر می‌رسند) و ایجاد تگ‌های جدید.

تا حد زیادی رایج‌ترین کاربرد به عنوان تعریف آرایه است:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

این آرایه‌ای با دو شکاف برای هر بازیکن ایجاد خواهد کرد. در آنچه توسط E_MY_ARRAY_MONEY ارجاع داده می‌شود 0 قرار خواهد داد وقتی بازیکن متصل شود و 5 در E_MY_ARRAY_GUN. بدون enum این این‌گونه خواهد بود:

```c
new
    gPlayerData[MAX_PLAYERS][2];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][0] = 0;
    gPlayerData[playerid][1] = 5;
}
```

و این نحوه کامپایل اولی است. این مشکلی نیست، اما کم خوانا است - شکاف 0 برای چیست و شکاف 1 برای چیست؟ و انعطاف کمتری دارد، چه می‌شود اگر بخواهید شکاف دیگری بین 0 و 1 اضافه کنید، باید همه 1 هایتان را به 2 تغییر دهید، جدید را اضافه کنید و امیدوار باشید چیزی از دست نداده باشید، در حالی که با enum فقط این کار را می‌کردید:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

دوباره کامپایل کنید و همه چیز برایتان به‌روزرسانی خواهد شد.

پس enum چگونه می‌داند چه مقدارهایی به چیزها بدهد؟ فرمت کامل enum این است:

```c
enum NAME (modifier)
{
    NAME_ENTRY_1 = value,
    NAME_ENTRY_2 = value,
    ...
    NAME_ENTRY_N = value
}
```

اما بیشتر این ضمنی است. به طور پیش‌فرض، اگر modifier مشخص نکنید (+= 1) می‌شود، این بدان معناست که هر مقدار در enum برابر آخرین مقدار در enum + 1 است، پس برای:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

اولین مقدار (E_EXAMPLE_0) برابر 0 است (به طور پیش‌فرض اگر مقدار دیگری مشخص نشده باشد)، پس دومین مقدار (E_EXAMPLE_1) برابر 1 است (0 + 1) و سومین مقدار (E_EXAMPLE_2) برابر 2 است (1 + 1). این مقدار E_EXAMPLE را 3 (2 + 1) می‌کند، نام enum نیز آخرین مقدار در enum است. اگر modifier را تغییر دهیم مقدارهای مختلفی به دست می‌آوریم:

```c
enum E_EXAMPLE (+= 5)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

در آن مثال هر مقدار برابر آخرین مقدار + 5 است پس، دوباره از 0 شروع کنیم، داریم: E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 5, E_EXAMPLE_2 = 10, E_EXAMPLE = 15. اگر آرایه‌ای از این اعلان کنید:

```c
new
    gEnumArray[E_EXAMPLE];
```

آرایه‌ای 15 سلولی دریافت خواهید کرد اما فقط می‌توانید با استفاده از مقدارهای enum به سلول‌های 0، 5 و 10 دسترسی داشته باشید (اما همچنان می‌توانید از اعداد معمولی استفاده کنید). بیایید مثال دیگری ببینیم:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

در این همه مقدارها 0 هستند. چرا؟ خب اولین مقدار به طور پیش‌فرض 0 است، سپس 0 * 2 = 0، سپس 0 * 2 = 0 و 0 * 2 = 0. پس چگونه این را تصحیح کنیم؟ این همان چیزی است که مقدارهای سفارشی برای آن هستند:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

این اولین مقدار را به 1 تنظیم می‌کند، پس در نهایت 1، 2، 4 و 8 دارید. ایجاد آرایه با این یک آرایه 8 سلولی با دسترسی نامگذاری شده به سلول‌های 1، 2 و 4 خواهد داد. می‌توانید هر مقداری که دوست دارید و هر تعداد مقدار که دوست دارید تنظیم کنید:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2
}
```

می‌دهد:

```c
0, 1, 2, 4
```

در حالی که:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2 = 1
}
```

می‌دهد:

```c
1, 1, 1, 2
```

توصیه نمی‌شود چیزی غیر از += 1 برای آرایه‌ها استفاده کنید.

همچنین می‌توانید در enum ها از آرایه‌ها استفاده کنید:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0[10],
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

این E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 10, E_EXAMPLE_2 = 11 و E_EXAMPLE = 12 خواهد کرد، برخلاف باور رایج 0، 1، 2 و 3.

آیتم‌های enum ها همچنین می‌توانند تگ داشته باشند، پس برای مثال اصلی ما:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    Float:E_MY_ARRAY_HEALTH,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
    gPlayerData[playerid][E_MY_ARRAY_HEALTH] = 50.0;
}
```

این مغایرت تگ نخواهد داد.

Enum ها همچنین می‌توانند به عنوان خود تگ استفاده شوند:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_VAL_1 = 1,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;
```

این متغیر جدیدی ایجاد خواهد کرد و مقدار 6 (4 | 2) را به آن اختصاص خواهد داد، و تگ سفارشی خواهد داشت پس انجام:

```c
gMyTagVar = 7;
```

هشدار مغایرت تگ تولید خواهد کرد، اگرچه می‌توانید از بازنویسی تگ برای دور زدن آن استفاده کنید:

```c
gMyTagVar = E_MY_TAG:7;
```

این برای داده‌های flag (یعنی یک bit برای برخی داده‌ها) یا حتی داده‌های ترکیبی بسیار مفید است:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_MASK = 0xFF,
    E_MY_TAG_VAL_1 = 0x100,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3 | (E_MY_TAG:7 & E_MY_TAG_MASK);
```

که مقدار 1543 (0x0607) تولید خواهد کرد.

در نهایت، همان‌طور که در ابتدا گفته شد، enum ها می‌توانند با حذف نام برای جایگزین کردن define ها استفاده شوند:

```c
#define TEAM_NONE   0
#define TEAM_COP    1
#define TEAM_ROBBER 2
#define TEAM_CIV    3
#define TEAM_CLERK  4
#define TEAM_DRIVER 5
```

مطمئنم بسیاری از شما چیزهای زیادی شبیه آن برای تعریف تیم‌ها دیده‌اید. همه خوب و مناسب است اما بسیار static است. این می‌تواند به راحتی با enum برای مدیریت اختصاص‌های عددی به طور خودکار جایگزین شود:

```c
enum
{
    TEAM_NONE,
    TEAM_COP,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

همه این‌ها همان مقدارهایی دارند که قبلاً داشتند، و می‌توانند دقیقاً به همان شکل استفاده شوند:

```c
new
    gPlayerTeam[MAX_PLAYERS] = {TEAM_NONE, ...};

public OnPlayerConnect(playerid)
{
    gPlayerTeam[playerid] = TEAM_NONE;
}

public OnPlayerRequestSpawn(playerid)
{
    if (gPlayerSkin[playerid] == gCopSkin)
    {
        gPlayerTeam[playerid] = TEAM_COP;
    }
}
```

وقتی که در این موضوع هستیم روش بسیار بهتری برای تعریف تیم‌ها بر اساس این روش وجود دارد:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

حالا TEAM_COP برابر 1، TEAM_ROBBER برابر 2، TEAM_CIV برابر 4 و غیره است، که در باینری 0b00000001، 0b00000010 و 0b00000100 است. این بدان معناست که اگر تیم بازیکن 3 باشد آن‌گاه در هر دو تیم cop و robber است. ممکن است بی‌فایده به نظر برسد اما امکاناتی باز می‌کند:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER,
    TEAM_ADMIN
}
```

با استفاده از آن می‌توانید فقط با یک متغیر در هم تیم عادی و هم تیم admin باشید. واضح است که کمی تغییر کد لازم است اما آسان است:

برای اضافه کردن بازیکن به یک تیم:

```c
gPlayerTeam[playerid] |= TEAM_COP;
```

برای حذف بازیکن از یک تیم:

```c
gPlayerTeam[playerid] &= ~TEAM_COP;
```

برای بررسی اینکه آیا بازیکن در یک تیم است:

```c
if (gPlayerTeam[playerid] & TEAM_COP)
```

بسیار ساده و بسیار مفید.

## `forward`

forward به کامپایلر می‌گوید که تابعی بعداً می‌آید. برای همه توابع public الزامی است اما می‌تواند در جاهای دیگر استفاده شود. کاربرد آن "forward" به دنبال نام کامل و پارامترهای تابعی که می‌خواهید forward کنید، و در نهایت نقطه ویرگول است:

```c
forward MyPublicFunction(playerid, const string[]);

public MyPublicFunction(playerid, const string[])
{
}
```

علاوه بر اینکه برای همه public ها الزامی است، forward می‌تواند برای رفع هشدار نادری استفاده شود وقتی تابعی که نتیجه تگ برمی‌گرداند (مثلاً float) قبل از اعلانش استفاده می‌شود.

```c
main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

این هشدار reparse خواهد داد چون کامپایلر نمی‌داند چگونه return تابع را به float تبدیل کند چون نمی‌داند آیا تابع عدد معمولی برمی‌گرداند یا float. واضح است که در این مثال float برمی‌گرداند. این یا می‌تواند با قرار دادن تابع در نقطه‌ای از کد قبل از استفاده حل شود:

```c
Float:MyFloatFunction()
{
    return 5.0;
}

main()
{
    new
        Float:myVar = MyFloatFunction();
}
```

یا با forward کردن تابع تا کامپایلر بداند چه کار کند:

```c
forward Float:MyFloatFunction();

main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

توجه کنید forward شامل تگ return نیز می‌شود.

## `native`

تابع native تابعی است که در ماشین مجازی (یعنی چیزی که اسکریپت را اجرا می‌کند) تعریف شده، نه در خود اسکریپت. فقط می‌توانید توابع native تعریف کنید اگر در SA:MP یا پلاگین کد شده باشند، اما می‌توانید native های جعلی ایجاد کنید. چون توابع native از فایل‌های .inc توسط pawno شناسایی و در جعبه سمت راست pawno فهرست می‌شوند، می‌تواند مفید باشد که از native برای فهرست کردن توابع سفارشی خودتان در آنجا استفاده کنید. یک اعلان native معمولی می‌تواند این‌گونه باشد:

```c
native printf(const format[], {Float, _}:...);
```

اگر می‌خواهید توابع خودتان بدون اعلان native ظاهر شوند می‌توانید:

```c
/*
native MyFunction(playerid);
*/
```

PAWNO کامنت‌هایی شبیه آن را تشخیص نمی‌دهد پس تابع را به لیست اضافه می‌کند اما کامپایلر کامنت‌هایی شبیه آن را تشخیص می‌دهد پس اعلان را نادیده می‌گیرد.

چیز جالب دیگری که می‌توانید با native انجام دهید تغییر نام/overload توابع است:

```c
native my_print(const string[]) = print;
```

حالا تابع print در واقع وجود ندارد. همچنان در SA:MP است، و کامپایلر به لطف قسمت "= print" نام واقعی آن را می‌داند، اما اگر سعی کنید آن را در PAWN فراخوانی کنید خطا خواهید گرفت چون print را داخلی به my_print تغییر نام داده‌اید. چون print دیگر وجود ندارد می‌توانید آن را درست مثل هر تابع دیگری تعریف کنید:

```c
print(const string[])
{
    my_print("Someone called print()");
    my_print(string);
}
```

حالا هر وقت print() در اسکریپت استفاده شود تابع شما به جای تابع اصلی فراخوانی خواهد شد و می‌توانید هر کاری دوست دارید انجام دهید. در این مورد ابتدا پیام دیگری چاپ می‌شود سپس پیام اصلی.

## `new`

این هسته متغیرها، یکی از مهم‌ترین کلمات کلیدی است. new متغیر جدیدی اعلان می‌کند:

```c
new
    myVar = 5;
```

این متغیری ایجاد خواهد کرد، آن را myVar نامگذاری خواهد کرد و مقدار 5 را به آن اختصاص خواهد داد. به طور پیش‌فرض همه متغیرها 0 هستند اگر چیزی مشخص نشده باشد:

```c
new
    myVar;

printf("%d", myVar);
```

"0" خواهد داد.

scope متغیر جایی است که می‌تواند استفاده شود. scope توسط آکولادها (پرانتزهای فرفری - {}) محدود می‌شود، هر متغیری که داخل مجموعه‌ای از آکولادها اعلان شود فقط می‌تواند داخل همان آکولادها استفاده شود.

```c
if (a == 1)
{
    // Braces start the line above this one
    new
        myVar = 5;

    // This printf is in the same braces so can use myVar.
    printf("%d", myVar);

    // This if statement is also within the braces, so it and everything in it can use myVar
    if (myVar == 1)
    {
        printf("%d", myVar);
    }
    // The braces end the line below this
}
// This is outside the braces so will give an error
printf("%d", myVar);
```

مثال بالا همچنین نشان می‌دهد که چرا indentation صحیح اینقدر مهم است.

اگر متغیر سراسری (یعنی آنچه خارج از تابع اعلان شده) new اعلان شود، می‌تواند همه جا بعد از اعلان استفاده شود:

File1.pwn:

```c
MyFunc1()
{
    // Error, gMyVar doesn't exist yet
    printf("%d", gMyVar);
}

// gMyVar is declared here
new
    gMyVar = 10;

MuFunc2()
{
    // Fine as gMyVar now exists
    printf("%d", gMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn:

```c
MyFunc3()
{
    // This is also fine as this file is included in the first file after the declaration and new is not file restricted
    printf("%d", gMyVar);
}
```

## `operator`

این به شما اجازه می‌دهد عملگرها را برای تگ‌های سفارشی overload کنید. برای مثال:

```c
stock BigEndian:operator=(b)
{
    return BigEndian:(((b >>> 24) & 0x000000FF) | ((b >>> 8) & 0x0000FF00) | ((b << 8) & 0x00FF0000) | ((b << 24) & 0xFF000000));
}

main()
{
    new
        BigEndian:a = 7;
    printf("%d", _:a);
}
```

اعداد معمولی pawn در آنچه little endian نامیده می‌شود ذخیره می‌شوند. این عملگر به شما اجازه می‌دهد assignment تعریف کنید تا عدد معمولی را به عدد big endian تبدیل کند. تفاوت بین big endian و little endian ترتیب بایت است. 7 در little endian این‌گونه ذخیره می‌شود:

```c
07 00 00 00
```

7 در big endian این‌گونه ذخیره می‌شود:

```c
00 00 00 07
```

بنابراین اگر محتویات عدد ذخیره شده big endian را چاپ کنید سعی خواهد کرد آن را به عنوان عدد little endian بخواند و برعکس دریافت خواهد کرد، بنابراین عدد 0x07000000، یعنی 117440512 را چاپ خواهد کرد که همان چیزی است که اگر این کد را اجرا کنید دریافت خواهید کرد.

می‌توانید عملگرهای زیر را overload کنید:

```c
+, -, *, /, %, ++, --, ==, !=, <, >, <=, >=, ! and =
```

همچنین توجه کنید که می‌توانید آن‌ها را هر کاری که دوست دارید انجام دهید:

```c
stock BigEndian:operator+(BigEndian:a, BigEndian:b)
{
    return BigEndian:42;
}

main()
{
    new
        BigEndian:a = 7,
        BigEndian:b = 199;
    printf("%d", _:(a + b));
```

به سادگی 42 خواهد داد، هیچ ربطی به جمع ندارد.

## `public`

public برای مرئی کردن تابع برای ماشین مجازی استفاده می‌شود، یعنی به سرور SA:MP اجازه می‌دهد تابع را مستقیماً فراخوانی کند، به جای اینکه فقط اجازه دهد تابع از داخل اسکریپت PAWN فراخوانی شود. همچنین می‌توانید متغیرها را public کنید تا مقدارشان از سرور خوانده و نوشته شود، اما این هرگز در SA:MP استفاده نمی‌شود (اگرچه ممکن است بتوانید از پلاگین از آن استفاده کنید، هرگز امتحان نکرده‌ام) (همچنین می‌توانید این را با const ترکیب کنید تا متغیری بسازید که فقط از سرور قابل تغییر باشد).

تابع public نام متنی‌اش در فایل amx ذخیره شده، برخلاف توابع معمولی که فقط آدرسشان برای jump ها ذخیره می‌شود، که یکی دیگر از اشکالات decompilation است. این برای این است که بتوانید تابع را با نام از خارج اسکریپت فراخوانی کنید، همچنین به شما اجازه می‌دهد توابع را با نام از داخل اسکریپت با خروج و دوباره ورود فراخوانی کنید. فراخوانی تابع native تقریباً عکس فراخوانی تابع public است، تابعی خارج از اسکریپت را از داخل اسکریپت فراخوانی می‌کند در مقابل فراخوانی تابعی داخل اسکریپت از خارج اسکریپت. اگر این دو را ترکیب کنید توابعی مثل SetTimer، SetTimerEx، CallRemoteFunction و CallLocalFunction دریافت می‌کنید که توابع را با نام فراخوانی می‌کنند، نه آدرس.

فراخوانی تابع با نام:

```c
forward MyPublicFunc();

main()
{
    CallLocalFunction("MyPublicFunc", "");
}

public MyPublicFunc()
{
    printf("Hello");
}
```

توابع public با "public" یا "@" شروع می‌شوند و، همان‌طور که در بخش forward ذکر شد، همه نیاز به forwarding دارند:

```c
forward MyPublicFunc();
forward @MyOtherPublicFunc(var);

main()
{
    CallLocalFunction("MyPublicFunc", "");
    SetTimerEx("@MyOtherPublicFunc", 5000, 0, "i", 7);
}

public MyPublicFunc()
{
    printf("Hello");
}

@MyOtherPublicFunc(var)
{
    printf("%d", var);
}
```

واضح است که آن مثال SetTimerEx را معرفی کرد تا "MyOtherPublicFunc" را بعد از 5 ثانیه فراخوانی کند و مقدار صحیح 7 را برای چاپ به آن بدهد.

main، که در بیشتر این مثال‌ها استفاده شده، شبیه تابع public است که می‌تواند از خارج اسکریپت فراخوانی شود، اما تابع public نیست - فقط آدرس ویژه شناخته شده‌ای دارد تا سرور بداند کجا برود تا آن را اجرا کند.

همه callback های SA:MP عمومی هستند و از خارج اسکریپت به طور خودکار فراخوانی می‌شوند:

```c
public OnPlayerConnect(playerid)
{
    printf("%d connected", playerid);
}
```

وقتی کسی به سرور بپیوندد خودکار این تابع public را در همه اسکریپت‌ها جستجو خواهد کرد (gamemode اول سپس filterscript ها) و اگر پیدا کند، آن را فراخوانی می‌کند.

اگر می‌خواهید تابع public را از داخل اسکریپت فراخوانی کنید اما مجبور نیستید آن را با نام فراخوانی کنید، توابع public نیز مثل توابع معمولی رفتار می‌کنند:

```c
forward MyPublicFunc();

main()
{
    MyPublicFunc();
}

public MyPublicFunc()
{
    printf("Hello");
}
```

این واضح است که بسیار سریع‌تر از استفاده از CallLocalFunction یا native دیگر است.

## `static`

متغیر static مثل متغیر سراسری new است اما با scope محدودتر. وقتی static به طور سراسری استفاده می‌شود متغیرهای ایجاد شده به فقط بخشی که در آن ایجاد شده‌اند محدود می‌شوند (section را ببینید). پس با گرفتن مثال قبلی "new":

**file1.pwn**

```c
MyFunc1()
{
    // Error, gMyVar doesn't exist yet
    printf("%d", gMyVar);
}

// gMyVar is declared here
new
    gMyVar = 10;

MuFunc2()
{
    // Fine as gMyVar now exists
    printf("%d", gMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // This is also fine as this file is included in the first file after the declaration and new is not file restricted
    printf("%d", gMyVar);
}
```

و تغییر آن برای static می‌دهد:

file1.pwn

```c
MyFunc1()
{
    // Error, g_sMyVar doesn't exist yet
    printf("%d", g_sMyVar);
}

// g_sMyVar is declared here
static
    g_sMyVar = 10;

MuFunc2()
{
    // Fine as _sgMyVar now exists
    printf("%d", g_sMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // Error, g_sMyVar is limited to only the file (or section) in which it was declared, this is a different file
    printf("%d", g_sMyVar);
}
```

این بدان معناست که می‌توانید دو سراسری با همان نام در فایل‌های مختلف داشته باشید.

اگر static را محلی (یعنی در تابع) استفاده کنید آن‌گاه متغیر، مثل متغیرهای محلی ایجاد شده با new، فقط می‌تواند در scope (بر اساس آکولادها - بخش "new" را ببینید) که در آن اعلان شده استفاده شود. اما برخلاف متغیرهای "new" متغیرهای "static" مقدارشان را بین فراخوانی‌ها از دست نمی‌دهند.

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    new
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

هر بار که تابع فراخوانی شود i به 0 reset می‌شود، پس خروجی نتیجه این خواهد بود:

```c
0
1
0
1
0
1
0
1
```

اگر "new" را با "static" جایگزین کنیم داریم:

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    static
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

و، چون static های محلی مقدارشان را بین فراخوانی‌ها نگه می‌دارند، خروجی نتیجه این است:

```c
0
1
1
2
2
3
3
4
```

مقدار داده شده در اعلان (اگر یکی داده شده باشد، مثل new، متغیرهای static به طور پیش‌فرض 0 هستند) مقداری است که اولین بار که تابع فراخوانی می‌شود به متغیر اختصاص داده می‌شود. پس اگر "static i = 5;" استفاده می‌شد نتیجه این می‌بود:

```c
5
6
6
7
7
8
8
9
```

به دلیل نحوه ذخیره متغیرهای static، آن‌ها در واقع متغیرهای سراسری هستند، کامپایلر بررسی می‌کند که در جای صحیح استفاده شوند. در نتیجه اسکریپت‌های decompile شده نمی‌توانند بین سراسری‌های معمولی، static های سراسری و static های محلی تمایز قائل شوند و همه به عنوان سراسری‌های معمولی داده می‌شوند.

همچنین می‌توانید توابع static داشته باشید که فقط از فایلی که در آن اعلان شده‌اند قابل فراخوانی باشند. این برای توابع سبک خصوصی مفید است.

## `stock`

stock برای اعلان متغیرها و توابعی استفاده می‌شود که ممکن است استفاده نشوند اما نمی‌خواهید هشدار استفاده نشدن برایشان تولید شود. با متغیرها stock مثل const است که تعدیل‌کننده است، نه اعلان کامل، پس می‌توانید:

```c
new stock
    gMayBeUsedVar;

static stock
    g_sMayBeUsedVar;
```

اگر متغیر یا تابع استفاده شود کامپایلر آن را شامل خواهد کرد، اگر استفاده نشود آن را حذف خواهد کرد. این متفاوت از استفاده #pragma unused (symbol) است چون آن به سادگی هشدار را سرکوب (یعنی پنهان) می‌کند و اطلاعات را به هر حال شامل می‌کند، stock داده‌های استفاده نشده را کاملاً نادیده خواهد گرفت.

stock بیشتر برای کتابخانه‌های سفارشی استفاده می‌شود. اگر کتابخانه بنویسید مجموعه کاملی از توابع برای استفاده دیگران ارائه می‌دهید اما نمی‌دانید آیا از آن‌ها استفاده خواهند کرد یا نه. اگر کدتان برای هر تابعی که شخص استفاده نمی‌کند مقدار زیادی هشدار بدهد مردم شکایت خواهند کرد (مگر اینکه عمدی باشد چون باید از آن تابع استفاده کنند (مثلاً برای مقداردهی اولیه متغیرها). با این حال گفته شد، از تجربه شخصی با YSI مردم به هر حال شکایت خواهند کرد.

```c
main()
{
    Func1();
}

Func1()
{
    printf("Hello");
}

Func2()
{
    printf("Hi");
}
```

اینجا Func2 هرگز فراخوانی نمی‌شود پس کامپایلر هشدار خواهد داد. این ممکن است مفید باشد چون ممکن است فراموش کرده باشید آن را فراخوانی کنید، همان‌طور که عموماً در اسکریپت مستقیم اتفاق می‌افتد، اما اگر Func1 و Func2 در کتابخانه باشند کاربر ممکن است به سادگی به Func2 نیاز نداشته باشد پس این کار را می‌کنید:

```c
main()
{
    Func1();
}

stock Func1()
{
    printf("Hello");
}

stock Func2()
{
    printf("Hi");
}
```

و تابع کامپایل نخواهد شد و هشدار حذف خواهد شد.
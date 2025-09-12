---
title: "کلمات کلیدی: عملگرها"
sidebar_label: "کلمات کلیدی: عملگرها"
---

## `char`

char تعداد سلول‌های لازم برای نگه داشتن تعداد داده شده کاراکترها در یک رشته packed برمی‌گرداند. یعنی تعداد سلول‌های 4-بایتی لازم برای نگه داشتن تعداد داده شده بایت‌ها. برای مثال:

```c
4 char
```

برمی‌گرداند 1.

```c
3 char
```

برمی‌گرداند 1 (نمی‌توانید 3/4 متغیر داشته باشید).

```c
256 char
```

برمی‌گرداند 64 (256 تقسیم بر 4).

این عموماً در اعلان متغیرها استفاده می‌شود.

```c
new
    someVar[40 char];
```

آرایه‌ای 10 سلولی خواهد ساخت.

برای اطلاعات بیشتر در مورد رشته‌های packed، pawn-lang.pdf را بخوانید.

## `defined`

بررسی می‌کند که آیا نمادی وجود دارد. عموماً در دستورات #if استفاده می‌شود:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error The variable 'someVar' isn't defined
#endif
```

بیشتر برای بررسی اینکه آیا define تعریف شده و تولید کد مطابق با آن استفاده می‌شود:

```c
#define FILTERSCRIPT

#if defined FILTERSCRIPT

public OnFilterScriptInit()
{
    return 1;
}

#else

public OnGameModeInit()
{
    return 1;
}

#endif
```

## `sizeof`

اندازه آرایه را در عناصر برمی‌گرداند:

```c
new
    someVar[10];
printf("%d", sizeof (someVar));
```

خروجی:

```c
10
```

و:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[]));
```

می‌دهد:

```c
2 10
```

## `state`

این دوباره مربوط به کد autonoma در PAWN است و بنابراین اینجا پوشش داده نمی‌شود.

## `tagof`

این عددی برمی‌گرداند که نمایانگر تگ یک متغیر است:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

می‌دهد:

```c
-./,),(-*,( -1073741820
```

که یک باگ جزئی است اما اساساً به معنای:

```c
0x80000000 0xC0000004
```

برای بررسی، برای مثال، اینکه آیا متغیر float است (با تگ 'Float:'):

```c
new Float: fValue = 6.9;

new tag = tagof (fValue);

if (tag == tagof (Float:))
{
    print("float");
}
else
{
    print("not a float");
}
```
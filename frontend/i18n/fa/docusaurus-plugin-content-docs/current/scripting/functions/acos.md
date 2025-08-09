---
title: acos
sidebar_label: acos
description: مقدار معکوس کسینوس را به درجه بدست آورید.
tags: ["math"]
---

<LowercaseNote />

## توضیحات

مقدار معکوس کسینوس را به درجه بدست آورید. در مثلثات، آرک کسینوس عملیات معکوس کسینوس است.

| نام         | توضیحات                                                     |
| ----------- | ------------------------------------------------------------ |
| Float:value | مقداری که آرک کسینوس آن محاسبه می‌شود، در بازه [-1,+1]. |

## مقدار بازگشتی

زاویه به درجه، در بازه [0.0,180.0].

## مثال‌ها

```c
//The arc cosine of 0.500000 is 60.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("The arc cosine of %f is %f degrees.", param, result);
    return 1;
}
```

## توابع مرتبط

- [floatsin](floatsin): سینوس یک زاویه مشخص را بدست آورید.
- [floatcos](floatcos): کسینوس یک زاویه مشخص را بدست آورید.
- [floattan](floattan): تانژانت یک زاویه مشخص را بدست آورید.
- [asin](asin): مقدار معکوس سینوس را به درجه بدست آورید.
- [atan](atan): مقدار معکوس تانژانت را به درجه بدست آورید.
- [atan2](atan2): مقدار معکوس چند مقداره تانژانت را به درجه بدست آورید.
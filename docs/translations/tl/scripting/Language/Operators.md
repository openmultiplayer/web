---
title: "Keywords: Operators"
---

## `char`

ibabalik ng char ang bilang ng mga cell na kinakailangan upang hawakan ang ibinigay na bilang ng mga character sa isang naka-pack na string. I.e. ang bilang ng mga 4-byte na cell na kinakailangan upang humawak ng isang naibigay na bilang ng mga byte. Halimbawa:

```c
4 char
```

Returns 1.

```c
3 char
```

Returns 1 (Hindi pwedeng 3/4 ang variable).

```c
256 char
```

Returns 64 (256 divided by 4).

Ito ay karaniwang ginagamit sa mga variable na deklarasyon.

```c
new
    someVar[40 char];
```


Gagawa ng isang array ng 10 cells na malaki.


Para sa karagdagang impormasyon sa naka-pack na mga string basahin ang pawn-lang.pdf.

## `defined`


Sinusuri kung mayroong isang simbolo. Karaniwang ginagamit sa #if statements:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error The variable 'someVar' isn't defined
#endif
```

Karamihan sa mga karaniwang ginagamit ito upang suriin kung ang isang tumutukoy ay tinukoy at makabuo ng code nang naaayon:

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


Ibinabalik ang laki sa ELEMENTS ng isang array:

```c
new
    someVar[10];
printf("%d", sizeof (someVar));
```

Output:

```c
10
```

At:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[]));
```

Gives:

```c
2 10
```

## `state`

Muli ito ay nauugnay sa PAWN autonoma code at sa gayon ay hindi saklaw dito.

## `tagof`


Nagbabalik ito ng isang numero na kumakatawan sa tag ng isang variable:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

Gives:

```c
-./,),(-*,( -1073741820
```

Alin ang isang bahagyang bug ngunit karaniwang nangangahulugang:

```c
0x80000000 0xC0000004
```

Upang suriin, halimbawa, kung ang isang variable ay isang float (na may tag na 'Float:'):

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
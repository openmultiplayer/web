---
title: "Anahtar Kelimeler: Operatörler"
sidebar_label: "Anahtar Kelimeler: Operatörler"
---

## `char`

`char`, bir paketlenmiş dize içinde verilen karakter sayısını tutmak için gereken hücre sayısını döndürür. Yani belirli bir bayi sayısını tutmak için gereken 4 bayilik hücre sayısını. Örneğin:

```c
4 char
```

1 döndürür.

```c
3 char
```

1 döndürür (bir değişkenin 3/4'ünü alamazsınız).

```c
256 char
```

64 döndürür (256'yı 4'e bölerseniz).

Bu genellikle değişken bildirimlerinde kullanılır.

```c
new
    someVar[40 char];
```

10 hücrelik bir dizi yapacaktır.

Paketlenmiş diziler hakkında daha fazla bilgi için pawn-lang.pdf'ye başvurun.

## `defined`

Bir sembolün var olup olmadığını kontrol eder. Genellikle #if ifadelerinde kullanılır:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error The variable 'someVar' isn't defined
#endif
```

Genellikle bir tanımın tanımlanıp tanımlanmadığını kontrol etmek ve buna göre kod üretmek için kullanılır:

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

Bir dizinin ELEMANLAR cinsinden boyutunu döndürür:

```c
new
    someVar[10];
printf("%d", sizeof (someVar));
```

Çıkış:

```c
10
```

Ve:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[]));
```

Şunu verir:

```c
2 10
```

## `state`

Bu tekrar PAWN otanom koduyla ilgilidir ve bu nedenle burada ele alınmaz.

## `tagof`

Bu, bir değişkenin etiketini temsil eden bir sayı döndürür:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

Şunu verir:

```c
-./,),(-*,( -1073741820
```

Bu hafif bir hata olsa da temelde şunu ifade eder:

```c
0x80000000 0xC0000004
```

Örneğin, bir değişkenin bir float (etiket 'Float:') olup olmadığını kontrol etmek için:

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
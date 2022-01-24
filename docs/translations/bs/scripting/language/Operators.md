---
title: "Keywords: Operators"
---

## `char`

char vraća broj ćelija potrebnih za držanje zadanog broja znakova u upakovanom nizu. tj. broj 4-bajtnih ćelija potrebnih za držanje određenog broja bajtova. Na primjer:

```c
4 char
```

Vraća 1.

```c
3 char
```

Vraća 1 (ne možete imati 3/4 varijable).

```c
256 char
```

Vraća 64 (256 podijeljeno sa 4).

Ovo je generalno korišćeno pri deklaracijama varijabli.
```c
new
    someVar[40 char];
```

Napraviće niz od 10 ćelija.

Za više informacija o upakovanim nizovima pročitajte pawn-lang.pdf.

## `defined`

Provjerava da li neki simbol postoji. Generalno korišteno pri #if provjerama:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error The variable 'someVar' isn't defined
#endif
```

Najčešće se koristi za provjeru da li je definicija definirana i generiranje koda u skladu s tim:

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

Vraća veličinu u ELEMENTIMA niza:

```c
new
    someVar[10];
printf("%d", sizeof (someVar));
```

Ispis:

```c
10
```

... i:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[]));
```

Ispis:

```c
2 10
```

## `state`

Ovo se opet odnosi na PAWN autonomni kod i stoga ovdje nije obuhvaćeno.

## `tagof`

Ovo vraća broj koji predstavlja oznaku varijable:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

Vraća:

```c
-./,),(-*,( -1073741820
```

Što je zapravo mali bug ali zapravo ispisuje:

```c
0x80000000 0xC0000004
```

Da biste provjerili, na primjer, da li je varijabla float (sa oznakom 'Float:'):

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

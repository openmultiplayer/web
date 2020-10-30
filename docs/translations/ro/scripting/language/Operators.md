---
title: "Cuvant: Operatori"
---

## `char`

char returnează numărul de celule necesare pentru a deține numărul dat de caractere dintr-un șir împachetat. Adică numărul de celule de 4 octeți necesare pentru a deține un număr dat de octeți. De exemplu:

```c
4 char
```

Returnează 1.

```c
3 char
```

Returnează 1 (nu poti avea 3/4 dintr-o variabila).

```c
256 char
```

Returnează 64 (256 impartit la 4).

Acest lucru este utilizat în general în declarațiile variabile.

```c
new
    someVar[40 char];
```

Va face o matrice de 10 celule mari.

Pentru mai multe informații despre șirurile împachetate, citiți pawn-lang.pdf.

## `defined`

Verifică dacă există un simbol. Utilizat în general în declarațiile #if:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error The variable 'someVar' isn't defined
#endif
```

Cel mai frecvent este folosit pentru a verifica dacă este definită o definire și pentru a genera cod în consecință:

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

Returnează dimensiunea în ELEMENTE a unui tablou:

```c
new
    someVar[10];
printf("%d", sizeof (someVar));
```

Ieșire:

```c
10
```

și:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[]));
```

Dă:

```c
2 10
```

## `state`

Acest lucru este din nou legat de codul autonom PAWN și, prin urmare, nu este acoperit aici.

## `tagof`

Aceasta returnează un număr care reprezintă eticheta unei variabile:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

Dă:

```c
-./,),(-*,( -1073741820
```

Ceea ce este o mică eroare, dar practic înseamnă:

```c
0x80000000 0xC0000004
```

Pentru a verifica, de exemplu, dacă o variabilă este float (cu eticheta „Float:”):

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

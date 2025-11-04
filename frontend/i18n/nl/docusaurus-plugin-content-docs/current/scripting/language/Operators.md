---
title: "Trefwoorden: Operators"
sidebar_label: "Trefwoorden: Operators"
---

## `char`

`char` geeft het aantal cellen terug dat nodig is om een gegeven aantal tekens in een packed string op te slaan (dus 4-bytecellen per 4 bytes).

```c
4 char
```

Retourneert 1.

```c
3 char
```

Retourneert 1 (je kunt geen 3/4 variabele hebben).

```c
256 char
```

Retourneert 64 (256 gedeeld door 4). Vaak gebruikt in declaraties:

```c
new
    someVar[40 char];
```

Maakt een array van 10 cellen. Zie pawn-lang.pdf voor meer over packed strings.

## `defined`

Controleert of een symbool bestaat. Vaak gebruikt in `#if`-blokken:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error De variabele 'someVar' bestaat niet
#endif
```

Meestal gebruikt om te controleren of een `#define` bestaat en daar code op te baseren (bijv. `FILTERSCRIPT`).

## `sizeof`

Retourneert de grootte in ELEMENTEN van een array:

```c
new
    someVar[10];
printf("%d", sizeof (someVar)); // 10
```

Bij meer-dimensionale arrays:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[])); // 2 10
```

## `state`

Gerelateerd aan de PAWN autonoma/state-machine en hier niet behandeld.

## `tagof`

Geeft een getal terug dat de tag van een variabele voorstelt:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

Je kunt hiermee bijvoorbeeld controleren of een variabele een float is:

```c
new Float: fValue = 6.9;

new tag = tagof (fValue);

if (tag == tagof (Float:))
{
    print("float");
}
else
{
    print("geen float");
}
```



---
title: "Trefwoorden: Directives"
sidebar_label: "Trefwoorden: Directives"
---

Directives zijn instructies voor de compiler die bepalen hoe jouw broncode wordt geïnterpreteerd.

## `#assert`

Controleert of een constante expressie waar is en stopt anders de compilatie.

```c
#define MOO 10
#assert MOO > 5
```

Dit compileert zonder problemen.

```c
#define MOO 1
#assert MOO > 5
```

Dit compileert niet en geeft een fatale fout, vergelijkbaar met:

```c
#define MOO 1
#if MOO <= 5
    #error MOO-controle mislukt
#endif
```

`#assert` zal een fout in de trant van het volgende geven:

```
Assertion failed: 1 > 5
```

## `#define`

`#define` is een tekstvervangingsdirective: waar het eerste symbool van de define voorkomt, wordt de rest ingevoegd.

```c
#define MOO 7
printf("%d", MOO);
```

Wordt:

```c
printf("%d", 7);
```

Defines verdwijnen bij decompilatie omdat ze vóór het compileren verwerkt zijn (preprocessing). Defines hoeven geen getallen te bevatten en kunnen multi-line zijn met een backslash-escape.

## `#else`

Zoals `else`, maar dan voor `#if` in plaats van `if`.

## `#elseif`

Zoals `else if`, maar dan voor `#if`.

```c
#define MOO 10

#if MOO == 9
        printf("if");
#elseif MOO == 8
        printf("else if");
#else
        printf("else");
#endif
```

## `#emit`

Niet in de pawn-lang.pdf-tabel, maar bestaat wel. Hiermee kun je AMX-opcodes inline in je code plaatsen. Syntax: `#emit <opcode> <argument>`. `<argument>` kan een rationaal getal, integer of (lokaal/globaal) symbool zijn.

## `#endif`

Beëindigt een `#if`-blok (vergelijkbaar met een sluitende accolade).

## `#endinput`, `#endscript`

Stopt het inlezen van een enkel bestand.

## `#error`

Stopt de compiler direct met een eigen foutmelding. Zie ook `#assert`.

## `#if`

De preprocessor-tegenhanger van `if`. Hiermee kies je wat wel/niet meegecompileerd wordt. De expressie moet constant zijn.

```c
#define LIMIT 10

#if LIMIT < 10
    #error Limiet te laag
#endif
```

## `#include`

Voegt de inhoud van een bestand in op de plek van de include. Er zijn relatieve includes met aanhalingstekens en systeem-includes met `< >` die zoeken in de include-map.

```c
#include "me.pwn"
#include <me>
```

## `#pragma`

Een verzameling opties die het gedrag van je script/compilatie beïnvloeden. Voor SA:MP/open.mp relevante voorbeelden:

| Naam       | Waarden                       | Omschrijving |
| ---------- | ----------------------------- | ------------ |
| codepage   | naam/waarde                   | Stelt de Unicode-codepage in voor strings. |
| compress   | 1/0                           | Niet ondersteund in SA:MP. |
| deprecated | symbool                       | Waarschuwing bij gebruik van het symbool. |
| dynamic    | waarde (meestal 2^n)          | Grootte van stack/heap in cellen. |
| library    | dll-naam                      | Geeft de bibliotheek met natives aan. |
| pack       | 1/0                           | Verwisselt de betekenis van !"" en "" (packed strings). |
| tabsize    | waarde                        | Tabgrootte voor indentatie-waarschuwingen (SA:MP: 4). |
| unused     | symbool                       | Onderdrukt "symbol is never used" voor het symbool. |

### Deprecated-voorbeeld

```c
new
    gOldVariable = 5;

#pragma deprecated gOldVariable

main() {printf("%d", gOldVariable);} 
```

## `#tryinclude`

Zoals `#include`, maar faalt niet als het bestand ontbreekt. Handig voor optionele plugins/includes.

## `#undef`

Verwijdert een eerder gedefinieerde macro of constant.

```c
#define MOO 10
printf("%d", MOO);
#undef MOO
printf("%d", MOO); // compileert niet meer
```



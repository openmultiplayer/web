---
title: "Pawn Stijlgids"
sidebar_label: "Pawn Stijlgids"
description: Een korte gids met gangbare naamgevingsconventies en andere aspecten van Pawn-broncode voor duidelijkheid, eenvoudiger debugging en delen van code.
---

Dit document is een korte gids met gangbare naamgevingsconventies en andere aspecten van Pawn-broncode om intentie beter over te brengen en debugging en het delen van code te stroomlijnen.

Zie ook:

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Package](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terminologie

### Statement

Een statement is code die het programma imperatief iets laat doen en een resultaat oplevert.

```c
a = b + c;
```

Dit is een statement waarin een variabele het resultaat van een [#Expressie] krijgt.

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

Dit is een statement dat een functie met argumenten aanroept.

```c
x + 8
```

Dit is géén statement; het resultaat wordt nergens gebruikt. Dit is alleen een [#Expressie].

### Compound Statement

Een compound statement is een verzameling statements omgeven door accolades.

```c
{
    new message[] = "hi!";
    print(message);
}
```

### Expressie

Een expressie levert een waarde op, maar is geen geldig statement tenzij de waarde gebruikt wordt.

```c
a + b
```

## Richtlijnen

### Accolades

Allman-accolades hebben de voorkeur:

```pawn
function()
{
    //
}
```

K&R is ook geldig Pawn:

```pawn
function() {
    //
}
```

### Switches

Gebruik twee inspringniveaus: één voor `switch` en één voor iedere `case` of block.

```pawn
switch (variable)
{
    case 0:
        return 0;
    case 1:
        return 1;
    default:
        return -1;
}
```

### Blocks

Gebruik altijd accolades, ook bij één regel code, op alle niveaus (inclusief functies).

```pawn
func()
{
    singleLineExpr();
}
```

### Naamgeving

#### Functies

Functies: `PascalCase`.

#### Globale variabelen

Globale `new`: `g_` + PascalCase (`g_VariableName`). Globale `static`: `s_` + PascalCase (`s_VariableName`).

Constants: `SCREAMING_SNAKE_CASE`.

#### Lokale variabelen

Lokaal: `camelCase`. Geen enkelletter-namen, behalve:

- `i`, `j`, `k`, … in `for`-lussen
- `x`, `y`, `z`, … in wiskundige context

#### Enumerators

Genamed: prefix `E_` (sterke tag) of `e_` (zwakke tag). Velden: `SCREAMING_SNAKE_CASE`, met enum-naam als prefix.

```pawn
static enum E_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Enumerators zijn `static`, tenzij extern gebruikt.

#### Macro’s en Preprocessor-defines

Altijd `SCREAMING_SNAKE_CASE`. Vermijd nieuwe syntaxis-elementen om verwarring te voorkomen.

### Documentatie

Documenteer geëxporteerde functies kort met één regel, bv. `// FunctionName doet X, Y, Z en retourneert A`. Elk pakket heeft een `README`; modules kunnen een korte eerste-regelbeschrijving hebben.



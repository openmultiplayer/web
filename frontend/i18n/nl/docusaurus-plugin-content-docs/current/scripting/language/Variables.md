---
title: "Basis: Variabelen"
sidebar_label: "Basis: Variabelen"
description: Een beginnersgids voor variabelen in Pawn
---

## Variabelen

Een variabele houdt op elk moment een waarde vast en kan veranderen tijdens uitvoering.

### Variabelen declareren

```c
// Declaratie van een variabele 'myVariable'
new myVariable;
```

Voorbeelden:

```c
new var;
new ammo;
new score;
new vehicles;
new topScore;
```

Standaardwaarde is 0. Waarden toekennen kan bij de declaratie of later:

```c
new letters = 25;

new letters2;
letters2 = 25;
```

### Scope

Scope bepaalt waar een variabele bruikbaar is. Globaal (buiten functies) is overal bruikbaar daarna. Lokaal (binnen een functie) alleen binnen dat blok.

### Naamgevingsregels

- Begint met letter of underscore
- Daarna letters/cijfers/underscore, geen spaties of speciale tekens
- Hoofdlettergevoelig
- Geen reserved words gebruiken

### Datatypen opslaan

Pawn is typeloos, maar tags worden sterk aangeraden voor duidelijkheid en veiligheid:

```c
new Float:decimalValue = 1.0; // correct
new bool:switchOn = true;     // correct
```

### Arrays

Een array bevat meerdere waarden met vaste grootte tijdens compilatie:

```c
new myArray[5];
myArray[2] = 7; // derde slot
```

Indexering start bij 0. Schrijf nooit buiten de grenzen.

### Strings

Strings zijn arrays van tekens en NUL-termineren (`\0`).

```c
new myString[16] = "Hello World!";
myString[1] = 'a';
myString[2] = '\\0'; // NUL-terminator plaatsen
```

Backslash-escapes: `\n`, `\r`, `\\`, `\'`, `\"`, `\0`, `\xNN`, `\NNN`.

### Tags (kort)

Tags zoals `Float:` en `bool:` beschrijven de bedoeling en helpen fouten voorkomen. Gebruik de juiste tag op de juiste plaats om tag mismatch te vermijden.



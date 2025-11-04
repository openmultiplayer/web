---
title: "Scripting Basis"
sidebar_label: "Scripting Basis"
description: Een korte tutorial die je door de basis van de Pawn-taal en SA-MP/open.mp API's leidt.
---

Hieronder een van de meest basale scripts die je kunt schrijven:

```c
#include <a_samp>

main()
{
    print("Hello World!");
    return 1;
}
```

De onderdelen worden hieronder stap voor stap uitgelegd.

---

## Include

```c
#include <a_samp>
```

Laadt functies en definities uit de include-bestanden zodat je ze kunt gebruiken.

---

## Aanroepen

`main()` is een functie die automatisch wordt aangeroepen; `print(string[])` is een functie die jij aanroept. `return 1;` geeft een waarde terug aan de aanroeper.

---

## Statements

Een statement eindigt met `;`. Accolades `{}` groeperen statements tot één samengestelde eenheid (compound statement).

---

## Functies

Functies zijn blokken code die je kunt aanroepen met optionele parameters en een optionele returnwaarde.

---

## Parameters

Parameters zijn variabelen die door de aanroeper worden doorgegeven. Voor strings worden arrays gebruikt.

---

## Variabelen

Variabelen zijn geheugenplaatsen (cellen van 32-bit) die data bewaren. Meercellige variabelen zijn arrays; strings zijn speciale arrays.

---

## Declareren en instellen

```c
new myVariable;
myVariable = 7;
printf("%d", myVariable);
```

---

## Arrays

```c
new myArray[5];
myArray[2] = 7; // derde element (index start bij 0)
```

---

## Strings

Strings zijn NUL-terminerend en ondersteunen escape-tekens zoals `\n`, `\r`, `\\`, `\"`, `\0`.



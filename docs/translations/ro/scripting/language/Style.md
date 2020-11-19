---
title: "Ghid de aranjare Pawn"
description: A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.
---

Acest document este un scurt ghid privind convențiile de denumire general acceptate și alte aspecte ale codului sursă Pawn pentru a facilita comunicarea intenției și a simplifica depanarea și partajarea codului.

Vezi si:

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Package](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terminologie

### Declarari

O declarație este o bucată de cod care spune imperativ programului gazdă să facă ceva. O declarație este o bucată de cod validă care dă rezultate.

```c
a = b + c;
```

Aceasta este o declarație compusă dintr-o variabilă căreia i se atribuie rezultatul unei [#Expression].

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

Aceasta este o declarație care spune programului să apeleze o funcție cu câteva argumente.

```c
x + 8
```

Aceasta _nu_ este o declarație, deoarece rezultatul nu este folosit nicăieri, acesta este doar un [#Expression].

### Declarație compusă

O declarație compusă este o colecție de declarații înconjurate de paranteze.

```c
{
    new message[] = "hi!";
    print(message);
}
```

Aceasta este o afirmație compusă compusă din două afirmații.

```c
if (a == b)
{
    print("hello!");
}
```

Aceasta este o declarație compusă cu o condiție `if`, aceasta este denumită de obicei `o instrucțiune if`.

```c
return Function1(), Function2(), Function3();
```

Aceasta _nu_ este o afirmație compusă, este un lanț de afirmații separate prin virgule. Această formă de declarații înlănțuite este considerată o practică proastă.

### Expresie

O expresie este o bucată de sintaxă care produce o valoare, nu este o declarație validă decât dacă valoarea obținută este utilizată într-un fel.

Expresiile sunt adesea compuse pentru a forma enunțuri.

```c
a + b
```

Aceasta este o expresie simplă de adăugare care ia două valori și le aplică operatorul de adăugare.

## Instrucțiuni

### Acoladele

Acoladele Allman sunt preferate:

```pawn
function()
{
    //
}
```

Cu toate acestea, dacă nu puteți scutura memoria musculară, acoladele K&R sunt valabile și pe pawno:

```pawn
function() {
    //
}
```

### Comutatoare

Comutatoarele trebuie să utilizeze două niveluri de indentare, unul pentru blocul `switch` și altul pentru fiecare instrucțiune `case` sau instrucțiune compusă.

```pawn
switch (variable)
{
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    default:
        return -1;
}
```

```pawn
switch (variable)
{
    case 0:
    {
        // code...
        return 0;
    }
    case 1:
    {
        // code...
        return 1;
    }
    case 2:
    {
        // code...
        return 2;
    }
    default:
    {
        // code...
        return -1;
    }
}
```

### Declarații compuse (blocuri)

Blocurile trebuie să utilizeze întotdeauna paranteze, chiar dacă există doar o singură linie de cod într-un bloc. Acest lucru se aplică tuturor nivelurilor, inclusiv funcțiilor.

```pawn
func()
{
    singleLineExpr();
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
    else if ()
    {
        //
    }
    else
    {
        //
    }
}
```

### Denumirea

#### Funcții

Funcțiile trebuie denumite cu `PascalCase`.

#### Variabile globale

Variabilele globale trebuie să utilizeze întotdeauna PascalCase cu prefixul `g`, deci `gVariableName` și, în general, trebuie să fie întotdeauna `static`.

Globele constante trebuie să utilizeze `SCREAMING_SNAKE_CASE`.

#### Variabile locale

Variabilele locale trebuie să utilizeze întotdeauna `camelCase` și nu trebuie să utilizeze niciodată nume de litere, cu excepția:

- `i`,`j`, `k`, etc în buclele `for`
- `x`,`y`, `z`, etc în contexte matematice

#### Enumeratori

Enumeratorii, dacă sunt numiți, trebuie să fie prefixați cu `E_` și să utilizeze `SCREAMING_SNAKE_CASE`. Singura excepție este atunci când se evită avertismentul `Indisponibilitate a etichetei`, caz în care se poate utiliza un prefix `e_`. `SCREAMING_SNAKE_CASE` trebuie să fie folosit în continuare chiar și cu prefixul minuscul `e_`.

Câmpurile Enumerator trebuie să fie, de asemenea, `SCREAMING_SNAKE_CASE` și să utilizeze numele Enumeratorului ca prefix.

```pawn
static enum E_PLAYER {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

To avoid index tag warnings in some cases:

```pawn
static enum e_PLAYER {
    e_PLAYER_CASH,
    Float:e_PLAYER_HEALTH,
}
```

#### Macro și definiții pre-procesor

Macrocomenzile trebuie să utilizeze întotdeauna `SCREAMING_SNAKE_CASE`, indiferent de utilizarea lor.

Definițiile pre-procesorului (definiții constante) trebuie să utilizeze, de asemenea, `SCREAMING_SNAKE_CASE`.

Acest lucru ajută la diferențierea între variabile și constante, precum și funcții și macrocomenzi.

În general, este recomandat să evitați inventarea de noi elemente sintactice pentru a preveni confuzia între noii veniți cu privire la ce cuvinte fac parte din limbaj și care cuvinte provin din biblioteci.

Cu toate acestea, unele biblioteci mai vechi fac acest lucru și nu se pot schimba din cauza compatibilității înapoi.

### Documentație

Documentați întotdeauna funcțiile exportate cu un comentariu de linie simplu în formatul `// FunctionName face X, Y și Z și returnează A` unde primul cuvânt este numele funcției în sine urmat de o scurtă descriere a ceea ce face. Nu este nevoie să pierdeți timpul descriind fiecare parametru individual. De exemplu:

```pawn
// LoadPlayerAccount is called to initiate the account load process. This
// function will trigger HTTP calls to get player data, it will display dialogs
// to the player and eventually, once the process has completed, the event
// `OnPlayerLogin` is emitted on success. On failure, the player is kicked.
stock Error:LoadPlayerAccount(playerid)
{
    // code...
}
```

Fiecare pachet ar trebui să aibă un `README.md` și, dacă este necesar, fiecare modul ar trebui să aibă un comentariu pe prima linie care să descrie ce oferă acel modul.

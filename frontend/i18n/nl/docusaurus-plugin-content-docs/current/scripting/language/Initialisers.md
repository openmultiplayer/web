---
title: "Trefwoorden: Initialisers"
sidebar_label: "Trefwoorden: Initialisers"
---

## `const`

```c
new const
    MY_CONSTANT[] =  {1, 2, 3};
```

`const` wordt niet wijdverbreid gebruikt, maar het declareert een variabele die niet door code gewijzigd kan worden. Handig als parameter voor functies (efficiëntere compilatie) of wanneer je iets wilt dat lijkt op een define maar dan als array. `const` is een modifier en moet samen met `new` of een andere declarator gebruikt worden. Als je een `const`-variabele probeert te wijzigen, zal de compiler klagen.

## `enum`

Enumeraties zijn erg nuttig om grote groepen data te representeren en constants snel aan te passen. Veelgebruikte toepassingen: grote sets defines vervangen, symbolische namen voor array-slots geven en nieuwe tags maken.

Meest gebruikelijk is als array-definitie:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

Zonder enum zou je indexen als 0 en 1 gebruiken, wat minder leesbaar en minder flexibel is. Met een enum kun je eenvoudig nieuwe velden invoegen zonder overal handmatig indexen te wijzigen.

De volledige vorm van een enum is:

```c
enum NAME (modifier)
{
    NAME_ENTRY_1 = value,
    NAME_ENTRY_2 = value,
    ...
    NAME_ENTRY_N = value
}
```

Als je geen modifier opgeeft, is de standaard `(+= 1)`. De eerste waarde is standaard 0, en elke volgende waarde is de vorige + 1. De naam van de enum zelf krijgt de waarde ná de laatste entry, dus is bruikbaar voor arraygroottes.

Je kunt de modifier veranderen, bijvoorbeeld `(*= 2)`. Let erop dat je dan vaak een startwaarde moet zetten om niet overal 0 te krijgen. Je kunt willekeurige waarden instellen en zoveel specifieke waarden geven als nodig.

Enums ondersteunen ook array-lengtes per entry en tags:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0[10],
    E_EXAMPLE_1,
    Float:E_EXAMPLE_2
}
```

Je kunt enums ook als tag zelf gebruiken:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_VAL_1 = 1,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;
```

Handig voor vlag-data (bitmaskers) of gecombineerde data (bijv. met maskers zoals `E_MY_TAG_MASK = 0xFF`).

Enums kunnen ook sets van constants vervangen door de naam weg te laten:

```c
enum
{
    TEAM_NONE,
    TEAM_COP,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Je kunt ook bitflags maken met `(<<= 1)`, zodat teams combineerbaar zijn met `|`, verwijderbaar met `& ~` en controleerbaar met `&`.

## `forward`

`forward` vertelt de compiler dat een functie later komt. Vereist voor alle publieke functies, maar kan ook elders nuttig zijn.

```c
forward MyPublicFunction(playerid, const string[]);

public MyPublicFunction(playerid, const string[])
{
}
```

Ook handig om een zeldzame waarschuwing te voorkomen wanneer een functie met getagde return (bijv. `Float:`) vóór de definitie gebruikt wordt. Je kunt dit oplossen door de functie eerder te plaatsen of door een `forward` te declareren die ook de return-tag bevat.

## `native`

Een native is een functie die in de virtuele machine gedefinieerd is (SA:MP of een plugin), niet in het script. Je kunt ook pseudo-natives gebruiken om functies in PAWNO zichtbaar te maken. Daarnaast kun je met `native` functies hernoemen/overloaden:

```c
native my_print(const string[]) = print;

print(const string[])
{
    my_print("Someone called print()");
    my_print(string);
}
```

Hierdoor wordt bij het aanroepen van `print()` jouw implementatie uitgevoerd en kun je extra gedrag toevoegen.

## `new`

Declareert een nieuwe variabele:

```c
new
    myVar = 5;
```

Zonder initialisatie is de standaardwaarde 0. Scope wordt door accolades bepaald: variabelen gedeclareerd binnen een blok bestaan alleen binnen dat blok. Globale `new`-variabelen zijn beschikbaar na hun declaratie, ook in ingesloten bestanden (`#include`).

## `operator`

Hiermee kun je operators overloaden voor custom tags.

```c
stock BigEndian:operator=(b)
{
    return BigEndian:(((b >>> 24) & 0x000000FF) | ((b >>> 8) & 0x0000FF00) | ((b << 8) & 0x00FF0000) | ((b << 24) & 0xFF000000));
}
```

Je kunt veel operators overloaden (`+, -, *, /, %, ++, --, ==, !=, <, >, <=, >=, !, =`) en ze willekeurig gedrag geven (bijv. altijd 42 retourneren).

## `public`

Maakt een functie zichtbaar voor de Virtual Machine, zodat de SA:MP-server deze bij naam kan aanroepen. Alle SA:MP callbacks zijn public. Publics moeten worden voorafgegaan door een `forward` en kunnen ook intern normaal aangeroepen worden als gewone functies (sneller dan `CallLocalFunction`).

## `static`

Een globale `static`-variabele is vergelijkbaar met een globale `new`, maar beperkt tot het bestand/section waarin deze is gedeclareerd. Een lokale `static` behoudt z’n waarde tussen aanroepen, in tegenstelling tot een lokale `new`.

Je kunt ook `static` functies hebben die alleen binnen hetzelfde bestand aangeroepen kunnen worden (private-achtig).

## `stock`

Voor variabelen en functies die mogelijk niet gebruikt worden, zonder "unused"-waarschuwingen te genereren. Als iets niet gebruikt wordt, wordt het niet meegecompileerd (anders dan `#pragma unused`, dat alleen de waarschuwing onderdrukt).



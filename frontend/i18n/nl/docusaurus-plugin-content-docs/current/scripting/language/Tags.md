---
title: "Scripting: Tags"
sidebar_label: "Scripting: Tags"
description: Een gids voor Tags, een type-achtig kenmerk van Pawn dat veiligheid biedt bij waarden met verschillende bedoeling.
---

## Introductie

Een tag is een prefix voor een variabele die de compiler vertelt de variabele in bepaalde situaties speciaal te behandelen. Je kunt tags gebruiken om af te dwingen waar een variabele wel/niet gebruikt mag worden of hoe operatoren zich gedragen.

Er zijn twee soorten tags: sterke tags (hoofdletter) en zwakke tags (kleine letter). Zwakke tags kunnen in sommige gevallen stilzwijgend naar tagloos worden geconverteerd; sterke tags niet. Een impliciete tagwijziging leidt meestal (bij sterke tags altijd) tot een waarschuwing.

### Sterke tags

Voorbeelden in SA:MP:

```c
Float:
File:
Text:
```

Deze kunnen niet vrij gemengd worden met andere typen zonder waarschuwing.

### Zwakke tags

Zwakke tags gedragen zich grotendeels hetzelfde, maar toewijzing aan een tagloze bestemming geeft geen waarschuwing; omgekeerd wel.

```c
new
    Strong:myStrong,
    weak:myWeak,
    myNone;

myNone = myStrong; // waarschuwing
myNone = myWeak;   // geen waarschuwing
myWeak = myNone;   // waarschuwing
```

Functieparameters volgen dezelfde regels.

Voorbeelden van zwakke tags: `bool:`, `filemode:`, `floatround_method:`.

## Gebruik

### Declareren

Declareer een variabele met een tag door de tag te prefixen. Vooraf definiëren is niet nodig.

```c
new Mytag:myVariable;
```

### Functies

Tags kunnen op parameters en returntypes:

```c
Float:GetValue(File:fHnd, const name[])
{
    // ...
}
```

### Operatoren

Operatoren kunnen per tag overgeladen worden, bijvoorbeeld voor `Float:` zodat rekenwerk correct gebeurt.

```c
stock Float:operator=(Mytag:oper)
{
    return float(_:oper);
}
```

### Overwrite

Met `_:` kun je een tag overschrijven (detaggen) als een functie een tagloos argument verwacht. Wees voorzichtig: detaggen van `Float:` naar integer geeft onbedoelde waarden (bitpatroon i.p.v. conversie).



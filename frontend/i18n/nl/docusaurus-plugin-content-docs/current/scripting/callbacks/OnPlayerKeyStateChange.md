---
title: OnPlayerKeyStateChange
sidebar_label: OnPlayerKeyStateChange
description: Deze callback wordt aangeroepen wanneer de status van een ondersteunde toets verandert (ingedrukt/losgelaten).
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer de status van een [ondersteunde](../resources/keys) toets verandert (ingedrukt/losgelaten).<br/>Richtingstoetsen triggeren OnPlayerKeyStateChange niet (omhoog/omlaag/links/rechts).

| Naam     | Beschrijving                                                                                   |
| -------- | --------------------------------------------------------------------------------------------- |
| playerid | Het ID van de speler die een toets indrukte of losliet.                                       |
| KEY:newkeys  | Een bitmask van de toetsen die momenteel ingedrukt zijn - [zie hier](../resources/keys)         |
| KEY:oldkeys  | Een bitmask van de toetsen die vóór de verandering ingedrukt waren - [zie hier](../resources/keys). |

## Returns

- Deze callback heeft geen returns.
- Wordt altijd als eerste aangeroepen in gamemode.

## Notities

:::info

Deze callback kan ook door NPC’s worden aangeroepen.

:::

:::tip

Richtingstoetsen triggeren OnPlayerKeyStateChange niet (omhoog/omlaag/links/rechts).<br/>Deze zijn alleen te detecteren met [GetPlayerKeys](../functions/GetPlayerKeys) (in [OnPlayerUpdate](../callbacks/OnPlayerUpdate) of een timer).

:::

## Gerelateerde Functies

- [GetPlayerKeys](../functions/GetPlayerKeys): Controleer welke toetsen een speler ingedrukt houdt.

## Extra informatie

### Introductie

Deze callback wordt aangeroepen wanneer een speler één van de ondersteunde toetsen indrukt of loslaat (zie [Keys](../resources/keys)).<br/>De ondersteunde toetsen zijn geen echte toetsenbordtoetsen, maar San Andreas-functietoetsen. Je kunt bijvoorbeeld niet detecteren wanneer iemand de spatiebalk indrukt, maar wel wanneer de sprint-toets wordt ingedrukt (die standaard aan de spatiebalk is gekoppeld).

### Parameters

De parameters zijn een lijst van alle toetsen die momenteel ingedrukt zijn en alle toetsen die net ingedrukt waren. De callback wordt aangeroepen wanneer een toestsatus verandert en geeft de staten van alle toetsen vóór en na de verandering door. Slechts één bit vertegenwoordigt een toets, dus direct vergelijken werkt niet altijd – gebruik bitmasking.

### Hoe NIET te checken

```c
if (newkeys == KEY_FIRE)
```

Crouchen en schieten tegelijk laat dit stuk code falen, omdat `newkeys` dan meerdere bits bevat.

### Correct checken (bitmask)

```c
if (newkeys & KEY_FIRE)
```

Gebruik `oldkeys` om “net ingedrukt”/“net losgelaten” te detecteren:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE)) // pressed
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE)) // released
```

### Meerdere toetsen

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH)
 && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

### Defines om te vereenvoudigen

```c
#define HOLDING(%0) (((newkeys & (%0)) == (%0)))
#define PRESSED(%0) ((((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0))))
#define PRESSING(%0,%1) ((%0) & (%1))
#define RELEASED(%0) ((((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0))))
```

Voorbeelden met deze macros staan in het origineel en werken 1:1 in het Nederlands.

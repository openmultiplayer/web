---
title: "Kleurenlijst"
sidebar_label: "Kleurenlijst"
description: "Kleuren in SA‑MP: chat, spelers, textdraws, gametext, 3D‑tekst en dialogs (kleur-embedding)."
---

## Chattekst en spelerskleur

Kleuren worden meestal in hex genoteerd (integers kan ook). Chat-/spelerskleur: `0xRRGGBBAA`.

_RR_ is rood, _GG_ groen, _BB_ blauw, _AA_ alpha. `FF` is ondoorzichtig; `00` onzichtbaar.

Zie [Hex colors](hexcolors) voor codes.

---

### Alpha-waarden (transparantie)

Onderstaande beelden tonen transparantie-effect. Voorbeeldstappen: 0x11 (decimaal 17).

![Image:trans_matrix.png](https://assets.open.mp/assets/images/colorList/transparency/trans_matrix.png)

---

### Rekenen met kleuren

Omdat kleuren getallen zijn, kun je ermee rekenen. Voorbeeld: alpha van radar‑marker aanpassen zonder RGB te wijzigen:

```c
SetPlayerMarkerVisibility(playerid, alpha = 0xFF)
{
    new oldcolor, newcolor;

    alpha = clamp(alpha, 0x00, 0xFF);
    oldcolor = GetPlayerColor(playerid);

    newcolor = (oldcolor & ~0xFF) | alpha;
    return SetPlayerColor(playerid, newcolor);
}
```

---

### String naar waarde (pawn)

Zet een hexstring "RRGGBBAA" om naar een getal:

```c
stock HexToInt(string[])
{
    if (!string[0])
    {
        return 0;
    }

    new
        cur = 1,
        res = 0;

    for (new i = strlen(string); i > 0; i--)
    {
        res += cur * (string[i - 1] - ((string[i - 1] < 58) ? (48) : (55)));
        cur = cur * 16;
    }
    return res;
}
```

Gebruik `HexToInt("RRGGBBAA")` voor [SetPlayerColor](../functions/SetPlayerColor).

---

### Kleur-embedding

Kleuren in tekst voor [client messages](../functions/SendClientMessage), [dialogs](../functions/ShowPlayerDialog), [3D‑labels](../functions/Create3DTextLabel), [objectmaterialtekst](../functions/SetObjectMaterialText) en [kentekenplaten](../functions/SetVehicleNumberPlate).

:::caution
Niet in textdraws. Zie [GameTextStyle](../resources/gametextstyles).
:::

#### Voorbeeld

```c
{FFFFFF}Hallo dit is {00FF00}groen {FFFFFF}en dit is {FF0000}rood
```

#### Voorbeeld met macro

```c
#define COLOR_RED_EMBED "{FF0000}"
SendClientMessage(playerid, -1, "Dit is wit en "COLOR_RED_EMBED"dit is rood.");
```

#### Spelerskleur gebruiken

Verwijder eerst alpha met logische right shift:

```c
new msg[128];
format(msg, sizeof(msg), "{ffffff}Dit is wit en {%06x}dit is de spelerskleur!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, 0xffffffff, msg);
```

In embedding is er geen `0x`-prefix en geen alpha.

---

## GameText

Speciale tags voor GameText-kleuren:

```c
~r~    red
~g~    green
~b~    blue
~w~    white
~y~    yellow
~p~    purple
~l~    black
~h~    lighter color
```

Combinaties vormen varianten, bijvoorbeeld `~r~~h~` voor lichtrood.



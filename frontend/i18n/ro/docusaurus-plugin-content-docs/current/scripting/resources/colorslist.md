---
title: Lista de culori
description: Culorile sunt pretutindeni în SA-MP - vehicule, nume de jucători și clipuri, extrase de text, gametext, chat, texte 3D și dialoguri (ca încorporare a culorilor)! Mai jos puteți găsi informații despre aceste lucruri diferite.
sidebar_label: Lista de culori
---

## Chat text and player color

Culorile din SA-MP sunt în general reprezentate în notație hexazecimală (deși pot fi folosite și numere întregi). Un text de chat sau culoarea unui jucător arată astfel: 0xRRGGBBAA.

_RR_ este partea roșie a culorii, _GG_ verde și _BB_ albastru. _AA_ este valoarea alfa. Dacă se folosește FF acolo, culoarea se va afișa fără transparență și dacă se folosește 00, va fi invizibilă.

Pentru codul Hex pentru aceste culori, accesați [Hex colors](../resources/hex-colors.md) page.

### Valori alfa (transparență)

Următoarele imagini afișează efectul valorilor de transparență utilizate cu o cară albă sub marcajul playerului și lăsate la pictograma dischetă de salvare. Inclinații de 0x11 (zecimală 17) sunt utilizate pentru demonstrare, dar, desigur, puteți utiliza orice valoare. ![Image:trans_matrix.png](https://assets.open.mp/assets/images/colorList/transparency/trans_matrix.png)

### Făcând matematică

Deoarece culorile sunt doar numere, este posibil să se calculeze cu ele, deși este posibil să nu aibă întotdeauna sens. De exemplu, este posibil să reglați vizibilitatea marcatorului radar al jucătorului (a se vedea mai sus) păstrând în același timp culoarea actuală, indiferent de ceea ce este.

```c
SetPlayerMarkerVisibility(playerid, alpha = 0xFF)
{
    new oldcolor, newcolor;

    alpha = clamp(alpha, 0x00, 0xFF); // if an out-of-range value is supplied we'll fix it here first
    oldcolor = GetPlayerColor(playerid); // get their color - Note: SetPlayerColor must have been used beforehand

    newcolor = (oldcolor & ~0xFF) | alpha; // first we strip of all alpha data (& ~0xFF) and then we replace it with our desired value (| alpha)
    return SetPlayerColor(playerid, newcolor); // returns 1 if it succeeded, 0 otherwise
}
```

### Convert string to value with pawn

Deoarece culorile sunt doar numere, trebuie să le convertiți uneori dintr-un șir de intrare "RRGGBBAA" în numărul său. Acest lucru se poate face folosind sscanf sau următoarea funcție:

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

Foloseste HexToInt("RRGGBBAA") și veți obține un număr utilizabil ca rezultat pentru [SetPlayerColor](../functions/SetPlayerColor.md).

### Incorporarea culorii

Este posibil să utilizați culori în text în [mesajele clientului](../functions/SendClientMessage.md"), [dialogs](../functions/ShowPlayerDialog.md), [3D text labels](../functions/Create3DTextLabel.md), [object material texts](../functions/SetObjectMaterialText.md) si [vehicle numberplates](../functions/SetVehicleNumberPlate.md").

Este foarte asemănător cu [culorile de la gametext](../resources/gametextstyles.md), dar permite utilizarea oricărei culori.

:::caution

Acest tip de încorporare a culorilor nu funcționează în desenele text. Vezi si [GameTextStyle](../resources/gametextstyles.md).

:::

#### Exemplu

```c
{FFFFFF}Hello this is {00FF00}green {FFFFFF}and this is {FF0000}red
```

Salut, acesta este verde și acesta este roșu

![Image:Example1.png](https://assets.open.mp/assets/images/colorList/Example1.png)

#### Alt exemplu

![Image:Cembed.png](https://assets.open.mp/assets/images/colorList/Cembed.png)  
Codul pentru linia de chat de mai sus arată astfel:

```c
SendClientMessage(playerid, COLOR_WHITE, "Welcome to {00FF00}M{FFFFFF}a{FF0000}r{FFFFFF}c{00FF00}o{FFFFFF}'{FF0000}s {FFFFFF}B{00FF00}i{FFFFFF}s{FF0000}t{FFFFFF}r{00FF00}o{FFFFFF}!");
```

Puteți defini culorile de utilizat astfel:

```c
#define COLOR_RED_EMBED "{FF0000}"

SendClientMessage(playerid, -1, "This is white and "COLOR_RED_EMBED"this is red.");
```

Sau

```c
#define COLOR_RED_EMBED "FF0000"

SendClientMessage(playerid, -1, "This is white and {"COLOR_RED_EMBED"}this is red.");
```

Al doilea exemplu ar fi mai bun, deoarece este mai clar că se folosește încorporarea.

#### Folosind GetPlayerColor

Pentru a utiliza culoarea unui jucător ca culoare încorporată, trebuie mai întâi să eliminați valoarea alfa. Pentru a face acest lucru, efectuați o schimbare logică la dreapta.

```c
new msg[128];
format(msg, sizeof(msg), "{ffffff}This is white and {%06x}this is the player's color!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, 0xffffffff, msg);
```

%x este substituent pentru valori hexazecimale, 6 asigură că șirul de ieșire va avea întotdeauna șase caractere și 0 îl va bloca cu zerouri dacă nu este. Rețineți că [GetPlayerColor](../resources/GetPlayerColor.md) funcționează corect numai dacă [SetPlayerColor](../resources/SetPlayerColor.md) a fost folosit în prealabil.

Culorile folosite la încorporarea culorilor nu sunt asemănătoare culorilor hexagonale normale în Pion. Nu există nici un prefix '0x' și nici o valoare alfa (ultimele 2 cifre).

### Color Pickers

- [SA-MP Colorpicker v1.1.0](http://www.gtavision.com/index.php?section=downloads&site=download&id=1974)
- [December.com](http://www.december.com/html/spec/color.html)
- [RGB Picker](http://psyclops.com/tools/rgb)
- [Adobe Kuler](https://kuler.adobe.com/create/color-wheel/)
- [Color Scheme Designer](http://colorschemedesigner.com/)

## GameText

Pentru culorile GameText puteți utiliza etichete speciale pentru a seta textul următor la o anumită culoare.

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

Etichetele de culoare ale textului jocului pot fi folosite pentru a forma cu ușurință diferite culori. Culorile de mai jos nu sunt exact aceeași culoare cu etichetele de mai sus.

```c
~y~                yellow
~r~~h~             light red
~r~~h~~h~          red pink
~r~~h~~h~~h~       dark pink
~r~~h~~h~~h~~h~    light red pink
~r~~h~~h~~h~~h~~h~ pink
~g~~h~             light green
~g~~h~~h~          more light green
~g~~h~~h~~h~       sea green
~g~~h~~h~~h~~h~    offwhite
~b~~h~             blue
~b~~h~~h~          purplish blue
~b~~h~~h~~h~       light blue
~y~~h~~h~          offwhite
~p~~h~             medium pink
```

### Exemplu

```c
~w~Hello this is ~b~blue ~w~and this is ~r~red
```

[![Image:Blueandred.png](https://assets.open.mp/assets/images/colorList/Blueandred.png)

Acum aceste culori sunt destul de întunecate. Le puteți face mai luminoase folosind ** ~ h ~ ** după codul de culoare:

```c
~w~Hello this is ~b~~h~blue ~w~and this is ~r~~h~red
```

[![Image:Blueandred2.png](https://assets.open.mp/assets/images/colorList/Blueandred2.png)

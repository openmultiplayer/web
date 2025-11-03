---
title: Lista de Cores
sidebar_label: Lista de Cores
description: Cores estão em toda parte no SA-MP - veículos, nomes de jogadores e blips, textdraws, gametext, chat, textos 3D e dialogs (as color embedding)! Abaixo você pode encontrar informações sobre essas coisas.
---

## Texto do chat e cor do jogador

Cores no SA-MP são normalmente representados em código hexadecimal (embora integers possam ser usados também). Um texto de chat ou cor do jogador é semelhante a: 0xRRGGBBAA.

_RR_ é a parte vermelha da cor, _GG_ o verde e _BB_ o azul. _AA_ é o valor alpha. Se FF for usado aqui, a cor será exibida sem transparência e se 00 for usado, ficará invisível.

Para obter o código Hex para essas cores, vá para a página [Cores Hex](hex-colors).

### Valores Alpha (transparência)

As seguintes imagens mostram o efeito dos valores de transparência usados com um quadrado branco debaixo do jogador e à esquerda do ícone de save. Incrementos de 0x11 (17 decimal) são usados para demonstração, mas é claro que você pode usar qualquer valor.

The following images display the effect of transparency values used with a white quare under the player marker and left to the saving floppy icon. Increments of 0x11 (decimal 17) are used for demonstration, but of course you can use any value.

![Image:trans_matrix.png](https://assets.open.mp/assets/images/colorList/transparency/trans_matrix.png)

### Fazendo contas

Como as cores são apenas números, é possivel calcular com elas, embora nem sempre faça sentido. Por exemplo, é possivel ajustar a visibilidade do radar do jogador (veja acima) mantendo a mesma cor atual, independemente da cor que seja.

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

Since the colors are just numbers you have to convert them sometimes from an input string "RRGGBBAA" to its number. This can be done using sscanf or the following function:

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

Use HexToInt("RRGGBBAA") and you'll get a usable number as result for [SetPlayerColor](../functions/SetPlayerColor).

### Color embedding

It is possible to use colors within text in [client messages](../functions/SendClientMessage), [dialogs](../functions/ShowPlayerDialog), [3D text labels](../functions/Create3DTextLabel), [object material texts](../functions/SetObjectMaterialText) and [vehicle numberplates](../functions/SetVehicleNumberPlate).

It is very similar to [gametext colors](gametextstyles), but allows any color to be used.

:::caution

This type of color embedding does not work in textdraws. See [GameTextStyle](gametextstyles).

:::

#### Example

```c
{FFFFFF}Hello this is {00FF00}green {FFFFFF}and this is {FF0000}red
```

Hello this is green and this is red

![Image:Example1.png](https://assets.open.mp/assets/images/colorList/Example1.png)

#### Another example

![Image:Cembed.png](https://assets.open.mp/assets/images/colorList/Cembed.png)  
The code for the above chat line looks like this:

```c
SendClientMessage(playerid, COLOR_WHITE, "Welcome to {00FF00}M{FFFFFF}a{FF0000}r{FFFFFF}c{00FF00}o{FFFFFF}'{FF0000}s {FFFFFF}B{00FF00}i{FFFFFF}s{FF0000}t{FFFFFF}r{00FF00}o{FFFFFF}!");
```

You can define colors to use like so:

```c
#define COLOR_RED_EMBED "{FF0000}"

SendClientMessage(playerid, -1, "This is white and "COLOR_RED_EMBED"this is red.");
```

Or

```c
#define COLOR_RED_EMBED "FF0000"

SendClientMessage(playerid, -1, "This is white and {"COLOR_RED_EMBED"}this is red.");
```

The second example would be better as is it clearer that embedding is used.

#### Using GetPlayerColor

To use a player's color as an embedded color, you must first remove the alpha value. To do this, perform a logical right shift.

```c
new msg[128];
format(msg, sizeof(msg), "{ffffff}This is white and {%06x}this is the player's color!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, 0xffffffff, msg);
```

The %x is the placeholder for hexadecimal values, the 6 ensures that the output string will always be six characters long and the 0 will pad it with zeros if it's not. Note that [GetPlayerColor](../functions/GetPlayerColor) only works properly if [SetPlayerColor](../functions/SetPlayerColor) has been used beforehand.

The colors used in color embedding are not like normal hex colors in Pawn. There is no '0x' prefix and no alpha value (last 2 digits).

### Color Pickers

- [SA-MP Colorpicker](https://www.gtavision.com/index.php?section=downloads&site=download&id=1974)
- [December.com](https://johndecember.com/html/spec/color.html)
- [Adobe Color](https://color.adobe.com/create/color-wheel/)
- [Color Scheme Designer](https://paletton.com)

## GameText

For GameText colors you can use special tags to set the following text to a specific color.

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

Game text colour tags can be used to form different colours easily. The below colours are not exactly the same colour as above tags.

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

### Example

```c
~w~Hello this is ~b~blue ~w~and this is ~r~red
```

[![Image:Blueandred.png](https://assets.open.mp/assets/images/colorList/Blueandred.png)

Now these colors are pretty dark. You can make them brighter by using **~h~** after the color code:

```c
~w~Hello this is ~b~~h~blue ~w~and this is ~r~~h~red
```

[![Image:Blueandred2.png](https://assets.open.mp/assets/images/colorList/Blueandred2.png)

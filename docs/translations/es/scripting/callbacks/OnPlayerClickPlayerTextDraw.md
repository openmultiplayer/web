---
título: OnPlayerClickPlayerTextDraw
descripción: Este callback se llama cuando un jugador clickea en un player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Descripción

Este callback se llama cuando un jugador clickea en un player-textdraw. No se llama cuando el jugador cancela el modo de selección (ESC), sin embargo, OnPlayerClickTextdraw sí. 

| Nombre       | Descripción                                             |
| ------------ | ------------------------------------------------------- |
| playerid     | El ID del jugador que seleccionó un textdraw.           |
| playertextid | El ID del player-textdraw que el jugador seleccionó.    |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the textdraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Make it selectable
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Show it to the player
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)
{
    if (playertextid == gPlayerTextDraw[playerid])
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "Clickeaste en un textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Notas

:::warning

Cuando un jugador presiona ESC para cancelar la selección de un textdraw, OnPlayerClickTextDraw es llamado con un textdraw ID 'INVALID_TEXT_DRAW'. En estos casos, OnPlayerClickPlayerTextDraw no se llamará.

:::

## Funciones Relacionadas

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): Establece si un player-textdraw es seleccionable mediante SelectTextDraw.
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Se llama cuando un jugador clickea en un textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Se llama cuando un jugador clickea en otro (scoreboard).

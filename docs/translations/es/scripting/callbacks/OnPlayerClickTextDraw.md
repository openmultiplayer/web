---
título: OnPlayerClickTextDraw
descripción: Este callback se llama cuando un jugador clickea en un textdraw o cancela el modo de selección con la tecla ESC.
tags: ["player", "textdraw"]
---

## Descripción

Este callback se llama cuando un jugador clickea en un textdraw o cancela el modo de selección con la tecla ESC.

| Name      | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| playerid  | The ID of the player that clicked on the textdraw.                            |
| clickedid | The ID of the clicked textdraw. INVALID_TEXT_DRAW if selection was cancelled. |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw,60.000000, 20.000000);
    TextDrawAlignment(gTextDraw,0);
    TextDrawBackgroundColor(gTextDraw,0x000000ff);
    TextDrawFont(gTextDraw,1);
    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);
    TextDrawColor(gTextDraw,0xffffffff);
    TextDrawSetProportional(gTextDraw,1);
    TextDrawSetShadow(gTextDraw,1);
    TextDrawSetSelectable(gTextDraw, 1);
    return 1;
}

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if (clickedid == gTextDraw)
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

El area clickeable está definida por TextDrawTextSize. Los parámetors X y Y pasados a esta función no deben ser cero o negativos. No uses CancelSelectTextDraw incondicionalmente dentro de este callback. Esto resultará en un loop infinito.

:::

## Funciones Relacionadas

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Se llama cuando un jugador clickea en un player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Se llama cuando un jugador clickea en otro.

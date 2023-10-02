---
title: SendClientMessage
description: Esta función envía un mensaje a un jugador específico con un color elegido en el chat.
tags: []
---

## Descripción

Esta función envía un mensaje a un jugador específico con un color elegido en el chat. Toda la línea en la caja de chat estará en el color establecido a menos que se utilice la inserción de color (0.3c o posterior).

| Nombre          | Descripción                                          |
| --------------- | ---------------------------------------------------- |
| playerid        | El ID del jugador al que se mostrará el mensaje.     |
| color           | El color del mensaje (formato Hexadecimal 0xRRGGBBAA). |
| const message[] | El texto que se mostrará (máximo 144 caracteres).    |

## Retorna

1: La función se ejecutó con éxito. Se informa el éxito cuando la cadena supera los 144 caracteres, pero el mensaje no se enviará.

0: La función no se pudo ejecutar. El jugador no está conectado.

## Ejemplos

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    SendClientMessage(playerid, COLOR_RED, "Este texto es rojo");
    SendClientMessage(playerid, 0x00FF00FF, "Este texto es verde.");
    SendClientMessage(playerid, -1, "Este texto es blanco.");
    return 1;
}
```

## Notas

:::tip

Puede usar la inserción de color para varios colores en el mensaje. Usar '-1' como color hará que el texto sea blanco (por la simple razón de que -1, cuando se representa en notación hexadecimal, es 0xFFFFFFFF).
:::

:::warning

Si un mensaje tiene más de 144 caracteres, no se enviará. Puede usar la truncación para evitar esto. Mostrar un mensaje en varias líneas también resolverá este problema. Evite usar el signo de porcentaje (o especificadores de formato) en el texto del mensaje sin escaparlo correctamente (como %%). De lo contrario, provocará bloqueos.
:::
## Funciones Relacionadas

- [SendClientMessageToAll](SendClientMessageToAll): Envía un mensaje a todos los jugadores.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Obliga a un jugador a enviar texto a un jugador específico.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Obliga a un jugador a enviar texto a todos los jugadores.

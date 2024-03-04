---
título: OnClientMessage
descripción: Este callback se llama cuando el NPC ve un ClientMessage.
tags: [NPC, ClientMessage, SendClientMessageToAll, ]
---

## Descripción

Este callback se llama cuando el NPC ve un ClientMessage. Esto va a ser cada vez que la función SendClientMessageToAll sea usada o también cuando la función SendClientMessage sea enviada hacia un NPC. Este callback no va a ser llamado cuando un jugador envíe un mensaje. Para una version de esto con textos de jugadores, vea NPC:OnPlayerText.

| Nombre | Descripción                     |
| ------ | ------------------------------- |
| color  | El color del mensaje.           |
| text[] | El texto del mensaje.           |

## Devoluciones

Este callback no controla devoluciones.

## Ejemplos

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Balance Bancario: $0") != -1)
    {
        SendClientMessage(playerid, -1, "Soy pobre :(");
    }
}
```

## Funciones Relacionadas

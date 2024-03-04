---
title: OnClientMessage
description: Dieses Callback wird ausgeführt wenn ein NPC eine ClientMessage erkennt.
tags: []
---

## Description

Dieses Callback wird ausgeführt wenn ein NPC eine ClientMessage erkennt. Er erkennt die ClientMessage bei Benutzung von SendClientMessageToAll oder wenn SendClientMessage direkt an den NPC gesendet wird.function is used and everytime a SendClientMessage function is sent towards the NPC. ACHTUNG: Das Callback wird nicht ausgeführt, wenn jemand in den Chat schreibt. Für eine Version mit Spieler Text, siehe NPC:OnPlayerText.

| Name   | Beschreibung                     |
| ------ | ------------------------------- |
| color  | The color the ClientMessage is. |
| text[] | The actual message.             |

## Rückgabe(return value)

Dieses Callback hat keinen Rückgabewert.

## Beispiele

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Kontostand: $0") != -1)
    {
        SendClientMessage(playerid, -1, "Ich bin arm :(");
    }
}
```

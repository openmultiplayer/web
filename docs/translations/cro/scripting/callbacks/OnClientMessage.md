---
title: OnClientMessage
description: Ovaj povratni poziv se poziva kad god NPC vidi poruku klijenta (ClientMessage).
tags: []
---

<VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## Опис

Ovaj povratni poziv se poziva kad god NPC vidi poruku klijenta (ClientMessage). To će uvijek biti kada se pozove funkcija SendClientMessageToAll i svaki put kada se SendClientMessage pozove NPC-u. Ovaj povratni poziv neće biti pozvan kada netko nešto kaže. Za verziju ovoga pogledajte: NPC:OnPlayerText.

| Ime    | Оpis                |
| ------ | ------------------- |
| color  | Boja ClientMessage. |
| text[] | Poruka.             |

## Uzvraćanja

Овај колбек нема узвраћања.

## Primeri

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## Povezane funkcije

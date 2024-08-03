---
title: OnClientMessage
description: Ovaj callback se poziva kada god NPC vidi ClientMessage.
tags: []
---

## Deskripcija

Ovaj callback se poziva kada god NPC vidi ClientMessage (poruku poslanu od game-klijenta). Ovo će biti svaki put kada `SendClientMessageToAll` funkcija bude pozvana i svaki put kada funkcija `SendClientMessage` bude slala prema NPC-u. Ovaj callback se neće pozvati kada neko kaže nešto. Za verziju ovoga sa tekstom igrača pogledaj funkciju NPC:OnPlayerText.

| Ime    | Deskripcija                |
| ------ | -------------------------- |
| color  | Boja ClientMessage poruke. |
| text[] | Prava poruka.              |

## Returns

Ovaj callback ne obrađuje povratne vrijednosti (returnove).

## Primjeri

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "Ja sam siromasan :(");
    }
}
```

## Srodne Funkcije

---
title: OnClientMessage
sidebar_label: OnClientMessage
description: Questo callback viene chiamato ogni volta che l'NPC riceve un messaggio client.
tags: ["client", "npc"]
---

# OnClientMessage

## Descrizione

Questo callback viene chiamato ogni volta che l'NPC riceve un `ClientMessage`. Ciò accade ogni volta che viene utilizzata la funzione [SendClientMessageToAll](SendClientMessageToAll) e ogni volta che una funzione [SendClientMessage](SendClientMessage) viene inviata ad un NPC. Questo callback non viene chiamato quando qualcuno scrive qualcosa in chat.

| Nome | Descrizione |
| :---- | :------------------------------------------------------ |
| `color` | Il colore del `ClientMessage`. |
| `text[]` | Il messaggio effettivo. |

## Ritorna

Questo callback non gestisce alcun valore di ritorno.

## Esempi

```pawn
public OnClientMessage(color, text[])
{
    if (strfind(text, "Saldo Bancario: $0") != -1)
    {
        SendClientMessage(playerid, -1, "Sono povero :(");
    }
}
```

## Callback Correlati
I seguenti callback potrebbero essere utili, in quanto sono correlati a questo callback in un modo o nell'altro.

[OnPlayerText](OnPlayerText): Questo callback viene chiamato ogni volta che qualcuno scrive qualcosa nella chat. Questo include qualsiasi giocatore, qualsiasi altro NPC, o l'NPC stesso.

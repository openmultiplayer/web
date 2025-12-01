---
title: OnClientMessage
sidebar_label: OnClientMessage
description: Deze callback wordt aangeroepen wanneer de NPC een ClientMessage ziet.
tags: []
---

## Beschrijving

Deze callback wordt aangeroepen wanneer de NPC een ClientMessage ziet. Dit gebeurt elke keer dat een [SendClientMessageToAll](../functions/SendClientMessageToAll) functie wordt gebruikt en elke keer dat een [SendClientMessage](../functions/SendClientMessage) functie naar de NPC wordt gestuurd. Deze callback wordt niet aangeroepen wanneer iemand iets zegt. Voor een versie hiervan met spelertekst, zie [NPC:OnPlayerText](OnPlayerText).

| Naam   | Beschrijving                     |
| ------ | ------------------------------- |
| color  | De kleur van de ClientMessage.  |
| text[] | Het daadwerkelijke bericht.      |

## Returns

Deze callback behandelt geen returns.

## Voorbeelden

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## Gerelateerde Callbacks

- [OnPlayerText](OnPlayerText): Deze callback wordt aangeroepen elke keer dat iemand iets zegt in de chat. Dit omvat elke speler, elke andere NPC, of dezelfde NPC zelf.

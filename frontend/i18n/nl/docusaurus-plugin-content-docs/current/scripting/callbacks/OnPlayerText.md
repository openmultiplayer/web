---
title: OnPlayerText
sidebar_label: OnPlayerText
description: Deze callback wordt aangeroepen wanneer een speler een chatbericht verstuurt.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een bericht verstuurt in de chat.

| Naam     | Beschrijving                                      |
| -------- | ------------------------------------------------ |
| playerid | Het ID van de speler die het bericht verstuurde. |
| text[]   | De inhoud van het bericht dat de speler verstuurde. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts, dus return 0 blokkeert andere scripts om het te verwerken.

## Voorbeelden

```c
public OnPlayerText(playerid, text[])
{
    new string[144];
    format(string, sizeof (string), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    // Return 0 negeert het standaard berichtformaat en verstuurt de custom versie.
    // Return 1 resulteert in duplicatie van het bericht, omdat het standaard bericht ook wordt verstuurd.
    return 0;
}
```

## Notities

<TipNPCCallbacks />

:::tip

Standaard verstuurt deze callback een bericht met de inhoud van het bericht, de naam van de speler en hun ID. Return 0 negeert dit standaard gedrag, zoals gedemonstreerd in het codevoorbeeld hierboven.

:::

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerCommandText](OnPlayerCommandText): Wordt aangeroepen wanneer een speler een command typt.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Forceer een speler om tekst te versturen voor één speler.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Forceer een speler om tekst te versturen voor alle spelers.
- [ToggleChatTextReplacement](../functions/ToggleChatTextReplacement): Schakelt de chat input filter in/uit.

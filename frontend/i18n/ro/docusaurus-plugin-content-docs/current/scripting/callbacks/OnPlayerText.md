---
title: OnPlayerText
sidebar_label: OnPlayerText
description: Apelat atunci când un jucător trimite un mesaj de chat.
tags: ["player"]
---

## Descriere

Apelat atunci când un jucător trimite un mesaj de chat.

| Name     | Descriere                                |
| -------- | ---------------------------------------- |
| playerid | ID-ul jucătorului care a tastat textul.  |
| text[]   | Textul pe care l-a tastat jucătorul.     |

## Returnări

Este întotdeauna numit primul în filterscript-uri, astfel încât returnarea 0 acolo blochează alte scripturi să-l vadă.

## Exemple

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // ignoră textul implicit și trimite-l pe cel personalizat
}
```

## Note

<TipNPCCallbacks />

## Funcții similare

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Forțați un jucător să trimită text pentru un jucător.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Forțați un jucător să trimită text pentru toți jucătorii.
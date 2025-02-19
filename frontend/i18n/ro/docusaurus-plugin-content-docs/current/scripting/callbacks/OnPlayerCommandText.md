---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: Acest callback este apelat atunci când un jucător introduce o comandă în chat.
tags: ["player"]
---

## Description

Acest callback este apelat atunci când un jucător introduce o comandă în chat. Comenzile sunt orice încep cu o bară oblică înainte, de ex. /ajutor.

| Nume      | Descriere                                                   |
| --------- | ----------------------------------------------------------- |
| playerid  | ID-ul jucătorului care a introdus o comandă.                |
| cmdtext[] | Comanda care a fost introdusă (inclusiv bara oblică).       |

## Returns

Este întotdeauna numit primul în filterscript-uri, astfel încât returnarea 1 blochează alte scripturi să-l vadă.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ajutor", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Aceasta este comanda /ajutor !");
        return 1;
        // Returnarea 1 informează serverul că comanda a fost procesată.
        // OnPlayerCommandText nu va fi apelat în alte scripturi.
    }
    return 0;
    // Returnarea 0 informează serverul că comanda nu a fost procesată de acest script.
    // OnPlayerCommandText va fi apelat în alte scripturi până când unul returnează 1.
    // Dacă niciun script nu returnează 1, mesajul „SERVER: Comandă necunoscută” va fi afișat jucătorului.
}
```

## Note

<TipNPCCallbacks />

## Funcții similare

- [SendRconCommand](../functions/SendRconCommand): Trimite o comandă RCON prin script.
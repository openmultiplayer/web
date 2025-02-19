---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: Acest callback este apelat când se finalizează o solicitare SendClientCheck
tags: []
---

## Descriere

Acest callback este apelat când se finalizează o solicitare SendClientCheck.

| Name          | Description                       |
| ------------- | --------------------------------- |
| playerid      | ID-ul jucătorului verificat.      |
| actionid      | Tipul de verificare efectuată.    |
| memaddr       | Adresa solicitată.                |
| retndata      | Rezultatul verificării.           |

## Returnări

Este întotdeauna numit primul în filterscripts.

## Exemple

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // sau 72
    {
        print("WARNING: Jucătorul nu pare să folosească un computer obișnuit!");
        Kick(playerid);
    }
    return 1;
}
```

## Note

:::warning

Acest callback este apelat numai atunci când este într-un filterscript.

:::

## Funcții asociate


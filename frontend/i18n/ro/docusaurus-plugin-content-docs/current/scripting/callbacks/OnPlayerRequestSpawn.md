---
title: OnPlayerRequestSpawn
description: Apelat atunci când un jucător încearcă să apară prin selecția clasei, fie apăsând SHIFT, fie făcând clic pe butonul „Apariție”.
tags: ["player"]
---

## Descriere

Apelat atunci când un jucător încearcă să apară prin selecția clasei, fie apăsând SHIFT, fie făcând clic pe butonul „Apariție”.

| Name     | Descriere                                     |
| -------- | --------------------------------------------- |
| playerid | ID-ul jucătorului care a solicitat să apară.  |

## Returnări

Este întotdeauna numit primul în filterscript-uri, așa că returnarea 0 acolo blochează și alte scripturi să-l vadă.

## Exemple

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "Nu te poti spawna.");
        return 0;
    }
    return 1;
}
```

## Note

<TipNPCCallbacks />

:::tip

Pentru a împiedica jucătorii să apară cu anumite clase, ultima clasă vizualizată trebuie salvată într-o variabilă în OnPlayerRequestClass.

:::

## Funcții similare
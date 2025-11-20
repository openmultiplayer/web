---
title: OnActorStreamOut
sidebar_label: OnActorStreamOut
description: Questo callback viene chiamato quando un attore esce dal raggio di stream (smette di essere visibile) per il client di un giocatore.
tags: ["actor"]
---

# OnActorStreamOut

## Descrizione

Questo callback viene chiamato quando un attore esce dal raggio di stream (smette di essere visibile) per il client di un giocatore.

:::warning
Questo callback è stato aggiunto in SA-MP 0.3.7 e **non funzionerà** nelle versioni precedenti!
:::

| Nome | Descrizione |
| :---------------- | :--------------------------------------------------------------------------------------------------------- |
| `actorid` | L'ID dell'attore che è uscito dal raggio di stream (streamed out) per il giocatore. |
| `forplayerid` | L'ID del giocatore per il quale l'attore è uscito dal raggio di stream. |

## Ritorna

È sempre chiamato prima nei *filterscripts*.

## Esempi

```pawn
public OnActorStreamOut(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "L'attore %d è ora uscito dal raggio di stream (streamed out) per te.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note
:::tip Questo callback può essere chiamato anche dagli NPC. :::

## Callback Correlati
I seguenti callback potrebbero essere utili, in quanto sono correlati a questo callback in un modo o nell'altro.

- [OnActorStreamIn](OnActorStreamIn): Questo callback viene chiamato quando un attore entra nel raggio di stream (diventa visibile) da parte del client di un giocatore.

---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: Questo callback viene chiamato quando un attore entra nel raggio di stream (diventa visibile) da parte del client di un giocatore.
tags: ["actor"]
---

# OnActorStreamIn

## Descrizione

Questo callback viene chiamato quando un attore entra nel raggio di stream (diventa visibile) da parte del client di un giocatore.

:::warning
Questo callback è stato aggiunto in SA-MP 0.3.7 e **non funzionerà** nelle versioni precedenti!
:::

| Nome | Descrizione |
| :---------------- | :------------------------------------------------------------------------------------------------------------------- |
| `actorid` | L'ID dell'attore che è stato visualizzato (streamed in) per il giocatore. |
| `forplayerid` | L'ID del giocatore che ha visualizzato l'attore (per il quale è entrato nel raggio di stream). |

## Ritorna

È sempre chiamato prima nei *filterscripts*.

## Esempi

```pawn
public OnActorStreamIn(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "L'attore %d è ora visibile (streamed in) per te.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note
:::tip Questo callback può essere chiamato anche per NPC (bot). :::

## Callback Correlati
I seguenti callback potrebbero essere utili, in quanto sono correlati a questo callback in un modo o nell'altro.

- [OnActorStreamOut](OnActorStreamOut): Questo callback viene chiamato quando un attore esce dal raggio di stream (smette di essere visibile) per un giocatore.
- [OnPlayerStreamIn](OnPlayerStreamIn): Chiamato quando un giocatore entra nel raggio di stream per un altro giocatore.
- [OnVehicleStreamIn](OnVehicleStreamIn): Chiamato quando un veicolo entra nel raggio di stream per un giocatore.

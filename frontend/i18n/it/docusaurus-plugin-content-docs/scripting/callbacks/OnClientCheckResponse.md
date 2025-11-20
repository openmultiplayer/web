---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: Questo callback viene chiamato quando una richiesta di SendClientCheck è completata.
tags: ["client"]
---

# OnClientCheckResponse

## Descrizione

Questo callback viene chiamato quando una richiesta di [SendClientCheck](SendClientCheck) è completata.

| Nome | Descrizione |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `playerid` | L'ID del giocatore controllato. |
| `actionid` | Il tipo di controllo eseguito. |
| `memaddr` | L'indirizzo di memoria richiesto. |
| `retndata` | Il risultato del controllo. |

## Ritorna

È sempre chiamato prima nei *filterscripts*.

## Esempi

```pawn
public OnPlayerConnect(playerid)
{
    // Esegue un controllo di memoria:
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // o 72 in decimale
    {
        print("Il giocatore si sta connettendo utilizzando il client PC.");
    }
    return 1;
}
```

## Note
:::warning

**Server SA:MP**: Questo callback viene chiamato solo se è presente in un filterscript.

**Server open.mp**: Questo callback funziona normalmente sia all'interno di un gamemode che di un filterscript. :::

## Funzioni Correlate
La seguente funzione potrebbe essere utile, in quanto è correlata a questo callback in un modo o nell'altro.

- [SendClientCheck](SendClientCheck): Esegue un controllo della memoria sul client.

## Risorse Correlate
- [opcodes](opcodes): ID degli opcode di azione e il loro scopo.

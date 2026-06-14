---
title: KillTimer
sidebar_label: KillTimer
description: "Mata (para) um cronômetro em execução."
tags: ["timer"]
---


## Descrição

Mata (para) um cronômetro em execução.

| Nome | Descrição |
| ------- | ----------------------------------------------------------------- |
| timerid | O ID do temporizador para matar (retornado por SetTimer ou SetTimerEx). |

## Retornos

Esta função sempre retorna 0.

## Exemplos

```c
new gConnectTimer[MAX_PLAYERS] = {0, ...};

public OnPlayerConnect(playerid)
{
    print("Starting timer...");
    gConnectTimer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    KillTimer(gConnectTimer[playerid]);
    gConnectTimer[playerid] = 0;
    return 1;
}

forward WelcomeTimer(playerid);
public WelcomeTimer(playerid)
{
    SendClientMessage(playerid, -1, "Welcome!");
}
```
## Funções Relacionadas

- [SetTimer](SetTimer): Defina um cronômetro.
- [SetTimerEx](SetTimerEx): Defina um temporizador com parâmetros.
- [IsValidTimer](IsValidTimer): Verifica se um temporizador é válido.
- [IsRepeatingTimer](IsRepeatingTimer): Verifica se um temporizador está configurado para repetir.
- [GetTimerInterval](GetTimerInterval): Obtém o intervalo de um temporizador.
- [GetTimerRemaining](GetTimerRemaining): Obtém o intervalo restante de um temporizador.
- [CountRunningTimers](CountRunningTimers): Obtenha os temporizadores em execução.

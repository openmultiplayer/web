---
title: IsValidTimer
sidebar_label: IsValidTimer
description: "Verifica se um temporizador é válido."
tags: ["timer"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um temporizador é válido.

## Parâmetros

| Nome | Descrição |
| ------- | ----------------------------- |
| timerid | O ID do temporizador a ser verificado. |

## Valores de retorno

**true**: O temporizador é válido.

**false**: O temporizador não é válido.

## Exemplos

```c
new g_Timer;

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true);
    return 1;
}

public OnGameModeExit()
{
    if (IsValidTimer(g_Timer))
    {
        printf("Timer ID %d is valid.", g_Timer);
        KillTimer(g_Timer);
    }
    else
    {
        printf("Timer ID %d is not valid.", g_Timer);
    }
    return 1;
}
```
## Funções Relacionadas

- [SetTimer](SetTimer): Defina um cronômetro.
- [SetTimerEx](SetTimerEx): Defina um temporizador com parâmetros.
- [KillTimer](KillTimer): Interrompe um cronômetro.
- [IsRepeatingTimer](IsRepeatingTimer): Verifica se um temporizador está configurado para repetir.
- [CountRunningTimers](CountRunningTimers): Obtenha os temporizadores em execução.

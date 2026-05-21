---
title: IsRepeatingTimer
sidebar_label: IsRepeatingTimer
description: "Verifica se um cronômetro está configurado para repetir."
tags: ["timer"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um cronômetro está configurado para repetir.

## Parâmetros

| Nome | Descrição |
| ------- | ----------------------------- |
| timerid | O ID do temporizador a ser verificado. |

## Valores de retorno

**true**: O cronômetro é um cronômetro de repetição.

**false**: O cronômetro não é um cronômetro de repetição.

## Exemplos

```c
new g_Timer;

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true);

    if (IsRepeatingTimer(g_Timer))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [SetTimer](SetTimer): Defina um cronômetro.
- [SetTimerEx](SetTimerEx): Defina um temporizador com parâmetros.
- [KillTimer](KillTimer): Interrompe um cronômetro.
- [IsValidTimer](IsValidTimer): Verifica se um temporizador é válido.
- [CountRunningTimers](CountRunningTimers): Obtenha os temporizadores em execução.

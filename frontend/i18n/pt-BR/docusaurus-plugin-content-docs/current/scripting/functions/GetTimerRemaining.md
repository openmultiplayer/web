---
title: GetTimerRemaining
sidebar_label: GetTimerRemaining
description: "Obtém o intervalo restante de um temporizador."
tags: ["timer"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o intervalo restante de um temporizador.

## Parâmetros

| Nome | Descrição |
| ------- | ----------------------------------------------------- |
| timerid | O ID do temporizador do qual obter o intervalo restante. |

## Valores de retorno

Retorna o intervalo restante do temporizador em milissegundos.

## Exemplos

```c
new g_Timer;

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true);

    new remainingInterval = GetTimerRemaining(g_Timer);
    printf("Timer ID %d remaining interval: %d ms", g_Timer, remainingInterval);
    return 1;
}
```
## Funções Relacionadas

- [SetTimer](SetTimer): Defina um cronômetro.
- [SetTimerEx](SetTimerEx): Defina um temporizador com parâmetros.
- [KillTimer](KillTimer): Interrompe um cronômetro.
- [IsValidTimer](IsValidTimer): Verifica se um temporizador é válido.
- [IsRepeatingTimer](IsRepeatingTimer): Verifica se um temporizador está configurado para repetir.
- [GetTimerInterval](GetTimerInterval): Obtém o intervalo de um temporizador.
- [CountRunningTimers](CountRunningTimers): Obtenha os temporizadores em execução.

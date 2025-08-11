---
title: CountRunningTimers
sidebar_label: CountRunningTimers
description: Obtém os timers em execução.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém os timers em execução. ([SetTimer](SetTimer) & [SetTimerEx](SetTimerEx))

## Retorno

Retorna a quantidade de timers em execução.

## Exemplos

```c
printf("Timers em execução: %d", CountRunningTimers());
```

## Funções Relacionadas

- [SetTimer](SetTimer): Define um timer.
- [SetTimerEx](SetTimerEx): Define um timer com parâmetros.
- [KillTimer](KillTimer): Mata (para) um timer em execução.
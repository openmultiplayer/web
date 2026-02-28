---
title: GetRunningTimers
sidebar_label: GetRunningTimers
description: Obtém os timers em execução.
tags: []
---

:::warning

Esta função está obsoleta, veja [CountRunningTimers](CountRunningTimers).

:::

## Descrição

Obtém os timers em execução. ([SetTimer](SetTimer) & [SetTimerEx](SetTimerEx))

## Retorno

Retorna a quantidade de timers em execução.

## Exemplos

```c
printf("Timers em execução: %d", GetRunningTimers());
```

## Funções Relacionadas

- [SetTimer](SetTimer): Define um timer.
- [SetTimerEx](SetTimerEx): Define um timer com parâmetros.
- [KillTimer](KillTimer): Mata (para) um timer em execução.

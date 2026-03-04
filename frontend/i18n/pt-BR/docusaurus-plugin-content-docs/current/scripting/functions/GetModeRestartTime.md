---
title: GetModeRestartTime
sidebar_label: GetModeRestartTime
description: Obtém o atraso entre o carregamento dos scripts principais, em segundos.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o atraso entre o carregamento dos scripts principais, em segundos.

## Valores de Retorno

Retorna o atraso como um valor float.

## Exemplos

```c
SetModeRestartTime(5.0);

new Float:seconds = GetModeRestartTime();
printf("Atraso: %.1f", seconds); // Atraso: 5.0
```

## Funções Relacionadas

- [SetModeRestartTime](SetModeRestartTime): Define o atraso entre o carregamento dos scripts principais, em segundos.

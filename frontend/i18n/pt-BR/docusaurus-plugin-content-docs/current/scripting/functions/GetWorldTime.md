---
title: GetWorldTime
sidebar_label: GetWorldTime
description: Obtém o horário atual do mundo.
tags: ["worldtime"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o horário atual do mundo.

## Exemplos

```c
SetWorldTime(12);

printf("Horário atual do mundo: %d", GetWorldTime());
// A saída será 'Horário atual do mundo: 12'
```

## Funções Relacionadas

- [SetWorldTime](SetWorldTime): Define o horário do mundo (para todos os jogadores) para uma hora específica.
- [SetPlayerTime](SetPlayerTime): Define o horário de um jogador.

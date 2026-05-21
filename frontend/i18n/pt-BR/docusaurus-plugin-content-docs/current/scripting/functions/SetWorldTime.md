---
title: SetWorldTime
sidebar_label: SetWorldTime
description: "Define a hora mundial (para todos os jogadores) para uma hora específica."
tags: ["worldtime"]
---


## Descrição

Define a hora mundial (para todos os jogadores) para uma hora específica.

| Nome | Descrição |
| ---- | ---------------------- |
| hour | A hora a definir (0-23) |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
// Defina a hora para 12 horas (meio-dia)
SetWorldTime(12);
```
## Notas

:::tip

Esta função só é relevante para jogadores que não utilizam relógio de passagem - veja [TogglePlayerClock](TogglePlayerClock).

:::

:::tip

Para definir os minutos e/ou definir o tempo para jogadores individuais, consulte [SetPlayerTime](SetPlayerTime).

:::

## Funções Relacionadas

- [GetWorldTime](GetWorldTime): Obtenha a hora mundial atual.
- [SetPlayerTime](SetPlayerTime): Defina o tempo de um jogador.
- [SetWeather](SetWeather): Defina o clima global.
- [SetGravity](SetGravity): Defina a gravidade global.

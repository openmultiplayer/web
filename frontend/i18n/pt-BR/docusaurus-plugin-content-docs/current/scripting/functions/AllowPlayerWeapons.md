---
title: AllowPlayerWeapons
sidebar_label: AllowPlayerWeapons
description: Ativar/Desativar armas para um jogador.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Ativar/Desativar armas para um jogador.

| Nome       | Descrição                               |
| ---------- | --------------------------------------- |
| playerid   | O ID do jogador para permitir armas     |
| bool:allow | true para permitir e false para negar. |

## Retorno

Esta função sempre retorna true.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerWeapons(playerid, true);
    return 1;
}
```

## Funções Relacionadas

- [ArePlayerWeaponsAllowed](ArePlayerWeaponsAllowed): O jogador pode usar armas?
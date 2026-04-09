---
title: EnableVehicleFriendlyFire
sidebar_label: EnableVehicleFriendlyFire
description: Habilita fogo amigo para veículos de equipe.
tags: ["vehicle"]
---

## Descrição

Habilita fogo amigo para veículos de equipe. Jogadores não poderão danificar os veículos dos companheiros de equipe (é necessário usar SetPlayerTeam!).

## Exemplos

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## Funções Relacionadas

- [SetPlayerTeam](SetPlayerTeam): Define a equipe de um jogador.

---
title: IsActorStreamedIn
sidebar_label: IsActorStreamedIn
description: "Verifica se um ator foi transmitido para um jogador."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Verifica se um ator foi transmitido para um jogador.

| Nome | Descrição |
| -------- | --------------------- |
| actorid | O ID do ator.  |
| playerid | O ID do jogador. |

## Retornos

Esta função retorna 1 se o ator for transmitido para o jogador ou 0 se não for.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsActorStreamedIn(gMyActor, playerid))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [IsPlayerStreamedIn](IsPlayerStreamedIn): Verifica se um jogador está transmitindo para outro player.

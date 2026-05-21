---
title: SetActorVirtualWorld
sidebar_label: SetActorVirtualWorld
description: "Defina o mundo virtual de um ator."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Defina o mundo virtual de um ator. Apenas jogadores do mesmo mundo verão o ator.

| Nome | Descrição |
| ------------ | -------------------------------------------------------------------------- |
| actorid | O ID do ator (retornado por CreateActor) para definir o mundo virtual de. |
| virtualWorld | O mundo virtual para colocar o ator ID.                                     |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O ator especificado não existe.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    // Crie o ator
    gMyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // Defina seu mundo virtual
    SetActorVirtualWorld(gMyActor, 69);
    return 1;
}
```
## Funções Relacionadas

- [GetActorVirtualWorld](GetActorVirtualWorld): Obtenha o mundo virtual de um ator.
- [CreateActor](CreateActor): Crie um ator (estático NPC).

---
title: GetActorVirtualWorld
sidebar_label: GetActorVirtualWorld
description: "Obtenha o mundo virtual de um ator."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtenha o mundo virtual de um ator.

| Nome | Descrição |
| ------- | ------------------------------------------------ |
| actorid | O ID do ator para obter o mundo virtual. |

## Retornos

O mundo virtual do ator. Por padrão, é 0.

Também retorna 0 se o ator especificado não existir.

## Exemplos

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    SetActorVirtualWorld(MyActor, 20);
    return 1;
}

// Em outro lugar
if (GetActorVirtualWorld(MyActor) == 20)
{
    // Faça alguma coisa
}
```
## Funções Relacionadas

- [SetActorVirtualWorld](SetActorVirtualWorld): Defina o mundo virtual de um ator.

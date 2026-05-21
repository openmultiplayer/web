---
title: GetActorSkin
sidebar_label: GetActorSkin
description: "Obtenha a pele do ator."
tags: ["actor"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a pele do ator.

| Nome | Descrição |
| ------- | --------------------------- |
| actorid | O ID do ator a ser obtido. |

## Valores de retorno

Retorna a skin atual do ator.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);

    new actorSkinID = GetActorSkin(gMyActor);
    // O valor de `actorSkinID` agora é 179
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [SetActorSkin](SetActorSkin): Defina a skin do ator.

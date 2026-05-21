---
title: GetActorSpawnInfo
sidebar_label: GetActorSpawnInfo
description: "Obtenha o ponto de desova inicial do ator."
tags: ["actor"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o ponto de desova inicial do ator.

| Nome | Descrição |
| ----------------- | ---------------------------------------------------------------------------- |
| actorid | O ID do ator para obter o ponto de desova de |
| &skin | Uma variável na qual armazenar o skin, passada por referência.             |
| &Float:spawnX | Uma variável flutuante na qual armazenar o spawnX, passada por referência.     |
| &Float:spawnY | Uma variável float na qual armazenar o spawnY, passada por referência.     |
| &Float:spawnZ | Uma variável flutuante na qual armazenar o spawnZ, passada por referência.     |
| &Float:spawnAngle | Uma variável float na qual armazenar o spawnAngle, passada por referência. |

## Valores de retorno

Retorna **true** se o ator for válido, caso contrário, retorna **false**.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);

    new skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:spawnAngle;

    GetActorSpawnInfo(gMyActor, skin, spawnX, spawnY, spawnZ, spawnAngle);
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [GetActorPos](GetActorPos): Obtenha a posição de um ator.
- [SetActorPos](SetActorPos): Define a posição de um ator.
- [GetActorSkin](GetActorSkin): Obtenha a pele do ator.
- [SetActorSkin](SetActorSkin): Defina a skin do ator.

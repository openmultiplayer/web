---
title: SetActorSkin
sidebar_label: SetActorSkin
description: "Defina a pele do ator."
tags: ["actor"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Defina a pele do ator.

| Nome | Descrição |
| ------- | ------------------------------- |
| actorid | O ID do ator a ser definido.     |
| skin | O ID da skin para dar a eles |

## Retornos

**true** – Sucesso.

**false** - Falha (ou seja, o ator não foi criado/válido).

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    SetActorSkin(gMyActor, 270); // Alterar a skin do ator de 179 para 270
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [GetActorSkin](GetActorSkin): Obtenha a pele do ator.

---
title: GetActorPoolSize
sidebar_label: GetActorPoolSize
description: "Obtém o atorid mais alto criado no servidor."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtém o atorid mais alto criado no servidor. Observe que em SA:MP esta função está quebrada e retornará `0` mesmo quando não houver atores. open.mp corrige isso para retornar `-1`, mas também descontinua a função em favor de `MAX_ACTORS` ou `foreach`.

## Exemplos

```c
SetAllActorsHealth(Float:health)
{
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);
        }
    }
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [IsValidActor](IsValidActor): Verifique se o ID do ator é válido.
- [SetActorHealth](SetActorHealth): Define a saúde de um ator.

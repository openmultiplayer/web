---
title: IsValidActor
sidebar_label: IsValidActor
description: "Verifica se um ator ID é válido."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Verifica se um ator ID é válido.

| Nome | Descrição |
| ------- | ----------------------------- |
| actorid | O ID do ator a ser verificado. |

## Retornos

**true** – O ator é válido.

**false** – O ator não é válido.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ator como vendedor de Munição.

    if (IsValidActor(gMyActor))
    {
        SetActorHealth(gMyActor, 100.0);
    }
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator.
- [GetActorPoolSize](GetActorPoolSize): Obtém o maior atorid criado no servidor.
- [SetActorHealth](SetActorHealth): Define a saúde de um ator.

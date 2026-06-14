---
title: IsActorInvulnerable
sidebar_label: IsActorInvulnerable
description: "Verifique se um ator é invulnerável."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Verifique se um ator é invulnerável.

| Nome | Descrição |
| ------- | ----------------------------- |
| actorid | O ID do ator a ser verificado. |

## Retornos

**true** – O ator é invulnerável.

**false** – O ator está vulnerável.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ator como vendedor de Munição.

    if (IsActorInvulnerable(gMyActor))
    {
        print("Actor is invulnerable.");
    }
    else
    {
        print("Actor is vulnerable.");
    }
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [SetActorInvulnerable](SetActorInvulnerable): Definir ator invulnerável.
- [SetActorHealth](SetActorHealth): Define a saúde de um ator.

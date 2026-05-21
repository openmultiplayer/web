---
title: GetActorHealth
sidebar_label: GetActorHealth
description: "Obtenha a saúde de um ator."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtenha a saúde de um ator.

| Nome | Descrição |
| ------------- | ------------------------------------------------------------------------------- |
| actorid | O ID do ator para obter a saúde.                                       |
| &Float:health | Uma variável flutuante, passada por referência, na qual armazenar a saúde do ator. |

## Retornos

**true** – sucesso

**false** - falha (ou seja, o ator não foi criado).

NOTE: A saúde do ator é armazenada na variável especificada, não no valor de retorno.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ator como vendedor em Munição

    SetActorHealth(gMyActor, 100.0);

    new Float:actorHealth;
    GetActorHealth(gMyActor, actorHealth);
    printf("Actor ID %d has %.2f health.", gMyActor, actorHealth);
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [SetActorHealth](SetActorHealth): Define a saúde de um ator.
- [SetActorInvulnerable](SetActorInvulnerable): Definir ator invulnerável.
- [IsActorInvulnerable](IsActorInvulnerable): Verifique se o ator é invulnerável.

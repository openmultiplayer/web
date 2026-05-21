---
title: GetActorFacingAngle
sidebar_label: GetActorFacingAngle
description: "Obtenha o ângulo de visão de um ator."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtenha o ângulo de visão de um ator.

| Nome | Descrição |
| ------------ | ------------------------------------------------------------------------------------------- |
| actorid | O ID do ator para obter o ângulo de visão. Retornado por [CreateActor](CreateActor).     |
| &Float:angle | Uma variável float, passada por referência, na qual será armazenado o ângulo de visão do ator. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O ator especificado não existe.

O ângulo de visão do ator é armazenado na variável especificada.

## Exemplos

```c
new Float:facingAngle;
GetActorFacingAngle(actorid, facingAngle);
```
## Funções Relacionadas

- [SetActorFacingAngle](SetActorFacingAngle): Defina o ângulo de visão de um ator.
- [GetActorPos](GetActorPos): Obtenha a posição de um ator.

---
title: SetActorInvulnerable
sidebar_label: SetActorInvulnerable
description: "Alterne a invulnerabilidade de um ator."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Alterne a invulnerabilidade de um ator.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------------ |
| actorid | O ID do ator para definir a invulnerabilidade.                        |
| bool:invulnerable | 'false' para torná-los vulneráveis, 'true' para torná-los invulneráveis. |

## Retornos

**true** – Sucesso

**false** – Falha (ou seja, o ator não foi criado).

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ator como vendedor na Ammunation.
    SetActorInvulnerable(gMyActor, true);
    return 1;
}
```
## Notas

:::warning

Uma vez definido como invulnerável, o ator não chama [OnPlayerGiveDamageActor](OnPlayerGiveDamageActor). Os jogadores terão o estado de invulnerabilidade do ator alterado somente quando for transmitido novamente para eles.

:::

## Funções Relacionadas

- [IsActorInvulnerable](IsActorInvulnerable): Verifique se um ator é invulnerável.

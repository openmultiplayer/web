---
title: ClearActorAnimations
sidebar_label: ClearActorAnimations
description: Limpa todas as animações aplicadas a um ator.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Limpa todas as animações aplicadas a um ator.

| Nome    | Descrição                                                                                 |
| ------- | ----------------------------------------------------------------------------------------- |
| actorid | O ID do ator (retornado por [CreateActor](CreateActor)) para limpar as animações.       |

## Retorno

**true** - A função foi executada com sucesso.

**false** - A função falhou ao executar. O ator especificado não existe.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ator como vendedor na Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0); // Animação de pagamento
    return 1;
}

// Em algum outro lugar
ClearActorAnimations(gMyActor);
```

## Funções Relacionadas

- [ApplyActorAnimation](ApplyActorAnimation): Aplica uma animação a um ator.
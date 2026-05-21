---
title: SetActorFacingAngle
sidebar_label: SetActorFacingAngle
description: "Defina o ângulo de visão de um ator."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Defina o ângulo de visão de um ator.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------ |
| actorid | O ID do ator para definir o ângulo de visão. Retornado por CreateActor. |
| Float:angle | O ângulo de visão a ser definido para o ator.                                   |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O ator especificado não existe.

## Exemplos

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(38, 0.0, 0.0, 3.0, 90.0);
    return 1;
}

// Em outro lugar
SetActorFacingAngle(MyActor, 180.0);
```
## Notas

:::tip

Ao criar um ator com [CreateActor](CreateActor), você especifica seu ângulo de orientação. Você não precisa usar esta função, a menos que queira alterar o ângulo de orientação posteriormente.

:::

:::warning

Os jogadores verão o ângulo do rosto do ator alterado apenas quando for transmitido novamente para eles.

:::

## Funções Relacionadas

- [GetActorFacingAngle](GetActorFacingAngle): Obtenha o ângulo de visão de um ator.
- [SetActorPos](SetActorPos): Defina a posição de um ator.

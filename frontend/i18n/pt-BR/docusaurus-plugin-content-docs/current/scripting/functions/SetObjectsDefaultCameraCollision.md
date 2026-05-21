---
title: SetObjectsDefaultCameraCollision
sidebar_label: SetObjectsDefaultCameraCollision
description: "Permite que as colisões de câmeras com objetos recém-criados sejam desabilitadas por padrão."
tags: ["object", "camera"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Permite que as colisões de câmeras com objetos recém-criados sejam desabilitadas por padrão.

| Nome | Descrição |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| bool:disable | `true` para desabilitar colisões de câmera para objetos recém-criados e `false` para habilitá-los (habilitado por padrão). |

## Retornos

Nota

Esta função afeta apenas a colisão de câmeras de objetos criados AFTER seu uso - ela não alterna as colisões de câmeras de objetos existentes.

## Exemplos

```c
public OnGameModeInit()
{
    // Desativar colisão de câmera
    SetObjectsDefaultCameraCollision(true);

    // Crie objetos mapeados
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // Os objetos acima NÃO terão colisões de câmera

    // Reativar colisões de câmera
    SetObjectsDefaultCameraCollision(false);

    // Crie objetos mapeados
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // Os objetos acima TERÃO colisão de câmera

    // MAS o primeiro conjunto ainda NÃO terá colisões de câmera

    return 1;
}
```
## Notas

:::tip

Esta função afeta apenas a colisão de câmeras de objetos criados AFTER seu uso - ela não alterna as colisões de câmeras de objetos existentes.

:::

:::warning

Esta função ONLY funciona fora dos limites normais do mapa SA (últimas 3.000 unidades).

:::

## Funções Relacionadas

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): Desativa colisões entre câmera e objeto.
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): Desativa colisões entre a câmera e o objeto do jogador.

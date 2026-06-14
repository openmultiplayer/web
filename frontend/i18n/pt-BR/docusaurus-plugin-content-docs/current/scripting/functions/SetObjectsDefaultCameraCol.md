---
title: SetObjectsDefaultCameraCol
sidebar_label: SetObjectsDefaultCameraCol
description: "Permite que as colisões de câmeras com objetos recém-criados sejam desabilitadas por padrão."
tags: ["object", "camera"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Permite que as colisões de câmeras com objetos recém-criados sejam desabilitadas por padrão.

| Nome | Descrição |
| ------- | --------------------------------------------------------------------------------------------------- |
| disable | 1 para desabilitar colisões de câmera para objetos recém-criados e 0 para habilitá-los (habilitado por padrão). |

## Retornos

Nota

Esta função afeta apenas a colisão de câmeras de objetos criados AFTER seu uso - ela não alterna as colisões de câmeras de objetos existentes.

## Exemplos

```c
public OnGameModeInit()
{
    // Desativar colisão de câmera
    SetObjectsDefaultCameraCol(1);

    // Crie objetos mapeados
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // Os objetos acima NÃO terão colisões de câmera

    // Reativar colisões de câmera
    SetObjectsDefaultCameraCol(0);

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

- [SetObjectNoCameraCol](SetObjectNoCameraCol): Desativa colisões entre câmera e objeto.
- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): Desativa colisões entre a câmera e o objeto do jogador.

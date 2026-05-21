---
title: IsObjectHiddenForPlayer
sidebar_label: IsObjectHiddenForPlayer
description: "Verifica se um objeto está oculto para um jogador."
tags: ["player", "object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um objeto está oculto para um jogador.

## Parâmetros

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador.          |
| objectid | O ID do objeto a ser verificado. |

## Retornos

`true` – O objeto está oculto para o jogador.

`false` – O objeto não está oculto para o jogador.

## Exemplos

```c
new gObject;

public OnGameModeInit()
{
    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);
    return 1;
}

public OnPlayerConnect(playerid)
{
    HideObjectForPlayer(playerid, gObject);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsObjectHiddenForPlayer(playerid, gObject))
    {
        printf("Object %d is hidden for player %d", gObject, playerid);
    }
    return 1;
}
```
## Notas

:::tip

Você pode ocultar objetos para um jogador específico com a função [HideObjectForPlayer](HideObjectForPlayer).

:::

## Funções Relacionadas

- [HideObjectForPlayer](HideObjectForPlayer): Esconda um objeto para um jogador.
- [ShowObjectForPlayer](ShowObjectForPlayer): Mostra um objeto para um jogador.
- [CreateObject](CreateObject): Crie um objeto.

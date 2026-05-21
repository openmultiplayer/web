---
title: ShowObjectForPlayer
sidebar_label: ShowObjectForPlayer
description: "Mostre um objeto para um jogador."
tags: ["player", "object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Mostre um objeto para um jogador que está oculto com a função [HideObjectForPlayer](HideObjectForPlayer).

## Parâmetros

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O ID do jogador.                    |
| objectid | O ID do objeto a ser mostrado ao jogador. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O playerid ou objectid especificado não existe.

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
    ShowObjectForPlayer(playerid, gObject);
    return 1;
}
```
## Funções Relacionadas

- [HideObjectForPlayer](HideObjectForPlayer): Esconda um objeto para um jogador.
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): Verifica se um objeto está oculto para um jogador.
- [CreateObject](CreateObject): Crie um objeto.

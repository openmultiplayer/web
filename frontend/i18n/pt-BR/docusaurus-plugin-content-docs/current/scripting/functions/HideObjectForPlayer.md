---
title: HideObjectForPlayer
sidebar_label: HideObjectForPlayer
description: "Esconda um objeto para um jogador."
tags: ["player", "object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Esconda um objeto para um jogador.

## Parâmetros

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O ID do jogador.                    |
| objectid | O ID do objeto a ser ocultado para o jogador. |

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
```
## Funções Relacionadas

- [ShowObjectForPlayer](ShowObjectForPlayer): Mostra um objeto para um jogador.
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): Verifica se um objeto está oculto para um jogador.
- [CreateObject](CreateObject): Crie um objeto.

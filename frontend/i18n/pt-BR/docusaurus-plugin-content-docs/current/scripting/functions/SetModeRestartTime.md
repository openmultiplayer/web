---
title: SetModeRestartTime
sidebar_label: SetModeRestartTime
description: "Define o atraso entre o carregamento dos scripts principais, em segundos."
tags: []
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define o atraso entre o carregamento dos scripts principais, em segundos.

## Parâmetros

| Nome | Descrição |
| ------------- | ------------------- |
| Float:seconds | Segundos para reiniciar. |

## Valores de retorno

1 - Função executada com sucesso.

0 - A função não foi executada. Isso significa que os segundos especificados não devem ser inferiores a 1.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/restart", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        SetModeRestartTime(5.0);
        SendClientMessage(playerid, -1, "[SERVER]: The server will restart in 5 seconds.");
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

O parâmetro `seconds` é um ponto flutuante.

:::

## Funções Relacionadas

- [GetModeRestartTime](GetModeRestartTime): Obtém o atraso entre o carregamento dos scripts principais, em segundos.
- [GameModeExit](GameModeExit): Encerra o modo de jogo atual.

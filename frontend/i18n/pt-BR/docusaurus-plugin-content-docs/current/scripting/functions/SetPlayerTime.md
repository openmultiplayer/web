---
title: SetPlayerTime
sidebar_label: SetPlayerTime
description: "Define o tempo de jogo para um jogador."
tags: ["player"]
---


## Descrição

Define o tempo de jogo para um jogador. Se o relógio de um jogador estiver habilitado ([TogglePlayerClock](TogglePlayerClock)) a hora exibida por ele será atualizada automaticamente.

| Nome | Descrição |
| -------- | --------------------------------------------- |
| playerid | O ID do jogador para definir o tempo de jogo. |
| hour | Hora a definir (0-23).                           |
| minute | Minutos para definir (0-59).                        |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/noon", true))
    {
        SetPlayerTime(playerid, 12, 0); // Meio-dia
        return 1;
    }
    if (!strcmp(cmdtext, "/midnight", true))
    {
        SetPlayerTime(playerid, 0, 0); // Meia-noite
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

Usar esta função em [OnPlayerConnect](../callbacks/OnPlayerConnect) não funciona.

:::

## Funções Relacionadas

- [SetWorldTime](SetWorldTime): Defina a hora global do servidor.
- [GetPlayerTime](GetPlayerTime): Obtenha o tempo de um jogador.
- [TogglePlayerClock](TogglePlayerClock): Alterne o relógio no canto superior direito.

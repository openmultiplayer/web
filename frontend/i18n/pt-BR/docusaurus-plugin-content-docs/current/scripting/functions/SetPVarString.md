---
title: SetPVarString
sidebar_label: SetPVarString
description: "Salva uma string em uma variável do jogador."
tags: ["player variable", "pvar"]
---


## Descrição

Salva uma string em uma variável do jogador.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------- |
| playerid | O ID do jogador cuja variável de jogador será definida. |
| const pvar[] | O nome da variável do jogador.                        |
| const value[] | A string que você deseja salvar na variável player.     |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.              |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new
        hours,
        minutes,
        seconds,
        string[46];

    gettime(hours, minutes, seconds); // ganhe tempo
    format(string, sizeof(string), "Connected on %02d:%02d:%02d", hours, minutes, seconds); // crie a string com o tempo de conexão
    SetPVarString(playerid, "timeconnected", string); // salve a string em uma variável do jogador

    // DICA PROFISSIONAL: Você não precisa de `format` em open.mp
    SetPVarString(playerid, "timeconnected", "Connected on %02d:%02d:%02d", hours, minutes, seconds);
    return 1;
}
```
## Notas

:::tip

As variáveis não são redefinidas até que [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) seja chamado, portanto, os valores ainda estarão acessíveis em OnPlayerDisconnect.

:::

## Funções Relacionadas

- [SetPVarInt](SetPVarInt): Defina um número inteiro para uma variável do jogador.
- [GetPVarInt](GetPVarInt): Obtenha o número inteiro definido anteriormente de uma variável do jogador.
- [GetPVarString](GetPVarString): Obtenha a string definida anteriormente de uma variável do jogador.
- [SetPVarFloat](SetPVarFloat): Defina um float para uma variável do jogador.
- [GetPVarFloat](GetPVarFloat): Obtenha o float definido anteriormente de uma variável do jogador.
- [DeletePVar](DeletePVar): Exclua uma variável do jogador.

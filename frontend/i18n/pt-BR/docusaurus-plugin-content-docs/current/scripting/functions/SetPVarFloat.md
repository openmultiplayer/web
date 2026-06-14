---
title: SetPVarFloat
sidebar_label: SetPVarFloat
description: "Defina o valor de uma variável flutuante do jogador."
tags: ["player variable", "pvar"]
---


## Descrição

Defina o valor de uma variável flutuante do jogador.

| Nome | Descrição |
| ------------ | ------------------------------------------------------- |
| playerid | O ID do jogador cuja variável de player será definida. |
| const pvar[] | O nome da variável do jogador.                        |
| Float:value | O float que você deseja salvar na variável player.      |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não está conectado ou o nome da variável é nulo ou tem mais de 40 caracteres.

## Exemplos

```c
SavePlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z); // Obtenha a posição do jogador

    SetPVarFloat(playerid, "Xpos", x); // Salve o float em uma variável do jogador
    SetPVarFloat(playerid, "Ypos", y); // Salve o float em uma variável do jogador
    SetPVarFloat(playerid, "Zpos", z); // Salve o float em uma variável do jogador
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
- [SetPVarString](SetPVarString): Defina uma string para uma variável do jogador.
- [GetPVarString](GetPVarString): Obtenha a string definida anteriormente de uma variável do jogador.
- [GetPVarFloat](GetPVarFloat): Obtenha o float definido anteriormente de uma variável do jogador.
- [DeletePVar](DeletePVar): Exclua uma variável do jogador.

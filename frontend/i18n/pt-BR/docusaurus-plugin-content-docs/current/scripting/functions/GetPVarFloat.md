---
title: GetPVarFloat
sidebar_label: GetPVarFloat
description: "Obtém uma variável de jogador como um float."
tags: ["player variable", "pvar"]
---


## Descrição

Obtém uma variável de jogador como um float.

| Nome | Descrição |
| ------------ | ----------------------------------------------------------- |
| playerid | O ID do jogador cuja variável de jogador você deseja obter. |
| const pvar[] | O nome da variável do jogador.                            |

## Retornos

O float da variável do jogador especificada

## Exemplos

```c
LoadPlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;

    x = GetPVarFloat(playerid, "Xpos");
    y = GetPVarFloat(playerid, "Ypos");
    z = GetPVarFloat(playerid, "Zpos");

    SetPlayerPos(playerid, x, y, z);
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
- [SetPVarFloat](SetPVarFloat): Defina um float para uma variável do jogador.
- [DeletePVar](DeletePVar): Exclua uma variável do jogador.

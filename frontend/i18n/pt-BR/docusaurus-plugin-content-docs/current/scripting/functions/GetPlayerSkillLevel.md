---
title: GetPlayerSkillLevel
sidebar_label: GetPlayerSkillLevel
description: "Obtenha o nível de habilidade do jogador de um determinado tipo de arma."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o nível de habilidade do jogador de um determinado tipo de arma.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------ |
| playerid | O ID do jogador.                                        |
| WEAPONSKILL:skill | A [arma](../resources/weaponskills) para adquirir a habilidade. |

## Retornos

0 - falha (habilidade com arma inválida).

Caso contrário, retorna o nível de habilidade do tipo de arma.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/skill", true))
    {
        new string[64];

        new skill = GetPlayerSkillLevel(playerid, WEAPONSKILL_PISTOL);

        format(string, sizeof(string), "Your pistol skill level is %d", skill);
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

O parâmetro de habilidade não é o ID da arma; é o tipo de habilidade. Clique [aqui](../resources/weaponskills) para obter uma lista de tipos de habilidades.

:::

# Funções Relacionadas

- [SetPlayerSkillLevel](SetPlayerSkillLevel): Define o nível de habilidade de um determinado tipo de arma para um jogador.

# Informações relacionadas

- [Habilidades com Armas](../resources/weaponskills): Lista de habilidades com armas que são usadas para definir o nível de habilidade do jogador.

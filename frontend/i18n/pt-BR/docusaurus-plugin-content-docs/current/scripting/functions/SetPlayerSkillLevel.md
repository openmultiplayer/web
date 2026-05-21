---
title: SetPlayerSkillLevel
sidebar_label: SetPlayerSkillLevel
description: "Defina o nível de habilidade de um determinado tipo de arma para um jogador."
tags: ["player"]
---


## Descrição

Defina o nível de habilidade de um determinado tipo de arma para um jogador.

| Nome | Descrição |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para definir a habilidade da arma.                                                     |
| WEAPONSKILL:skill | A [arma](../resources/weaponskills) para definir a habilidade.                                         |
| level | O nível de habilidade a ser definido para aquela arma, variando de 0 a 999. Um nível fora do alcance irá maximizá-lo. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    // Faça o jogador usar espingardas de cano serrado com uma só mão.
    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);
    return 1;
}
```
## Notas

:::warning

O parâmetro de habilidade não é o ID da arma; é o tipo de habilidade. Clique [aqui](../resources/weaponskills) para obter uma lista de tipos de habilidades.

:::

## Funções Relacionadas

- [GetPlayerSkillLevel](GetPlayerSkillLevel): Obtenha o nível de habilidade do jogador de um determinado tipo de arma.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Define a arma armada de um jogador.
- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.

## Informações relacionadas

- [Habilidades com Armas](../resources/weaponskills#skill-levels): Lista de habilidades com armas que são usadas para definir o nível de habilidade do jogador.

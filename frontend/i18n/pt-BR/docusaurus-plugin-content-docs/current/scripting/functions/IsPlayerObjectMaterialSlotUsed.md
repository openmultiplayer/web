---
title: IsPlayerObjectMaterialSlotUsed
sidebar_label: IsPlayerObjectMaterialSlotUsed
description: "Verifica se um slot de material de objeto de jogador é usado."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um slot de material de objeto de jogador é usado.

| Nome | Descrição |
| ------------- | ------------------------------------------- |
| playerid | O ID do jogador.                       |
| objectid | O ID do objeto do jogador.                |
| materialIndex | O índice de material no objeto. (0 a 15) |

## Retornos

A função retorna o tipo de uso do slot de material.

`0` - Nenhum

`1` - Material

`2` - Texto

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// tipo = 1
```
Outro exemplo:

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// tipo = 2
```
## Funções Relacionadas

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Substitua a textura de um objeto do jogador pela textura de outro modelo do jogo.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Substitua a textura de um objeto do jogador por texto.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): Obtenha os dados do material de um índice do objeto do jogador.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): Obtenha os dados do texto do material de um índice do objeto do jogador.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): Verifica se um slot de material do objeto é utilizado.

---
title: GetPlayerObjectMaterial
sidebar_label: GetPlayerObjectMaterial
description: "Obtenha os dados do material de um índice do objeto do jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados do material de um índice do objeto do jogador.

| Nome | Descrição |
| ------------------ | --------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                 |
| objectid | O ID do objeto do jogador.                                          |
| materialIndex | O índice de material no objeto. (0 a 15) |
| &modelid | Uma variável na qual armazenar o modelo ID, passado por referência.       |
| textureLibrary[] | Uma matriz na qual armazenar a texturaLibrary, passada por referência. |
| textureLibrarySize | O tamanho da texturaLibrary.                                       |
| textureName[] | Uma matriz na qual armazenar o TextureName, passado por referência.    |
| textureNameSize | O tamanho da texturaName.                                          |
| &materialColour | Uma variável na qual armazenar o materialColour, passada por referência. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe ou foi especificado um índice de material inválido.

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new
    modelid,
    textureLibrary[16],
    textureName[16],
    materialColour;

GetPlayerObjectMaterial(playerid, playerobjectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);
// ID do modelo = 19341
// texturaLibrary = "egg_texts"
// texturaName = "easter_egg01"
// materialCor = 0xFFFFFFFF
```
## Funções Relacionadas

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Substitua a textura de um objeto do jogador pela textura de outro modelo do jogo.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Substitua a textura de um objeto do jogador por texto.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): Verifica se um slot de material de objeto de jogador é usado.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): Obtenha os dados do texto do material de um índice do objeto do jogador.
- [GetObjectMaterial](GetObjectMaterial): Obtenha os dados do material de um índice do objeto.

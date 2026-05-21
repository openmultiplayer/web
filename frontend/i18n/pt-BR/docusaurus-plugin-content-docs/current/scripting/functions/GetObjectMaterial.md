---
title: GetObjectMaterial
sidebar_label: GetObjectMaterial
description: "Obtenha os dados do material de um índice do objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados do material de um índice do objeto.

| Nome | Descrição |
| ------------------ | --------------------------------------------------------------------- |
| objectid | O ID do objeto.                                                 |
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
new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new
    modelid,
    textureLibrary[16],
    textureName[16],
    materialColour;

GetObjectMaterial(objectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);
// ID do modelo = 19341
// texturaLibrary = "egg_texts"
// texturaName = "easter_egg01"
// materialCor = 0xFFFFFFFF
```
## Funções Relacionadas

- [SetObjectMaterial](SetObjectMaterial): Substitua a textura de um objeto pela textura de outro modelo do jogo.
- [SetObjectMaterialText](SetObjectMaterialText): Substitua a textura de um objeto por texto.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): Verifica se uma ranhura de material do objeto é utilizada.
- [GetObjectMaterialText](GetObjectMaterialText): Obtenha os dados do texto do material de um índice do objeto.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): Obtenha os dados do material de um índice do objeto do jogador.

---
title: GetPlayerObjectMaterialText
sidebar_label: GetPlayerObjectMaterialText
description: "Obtenha os dados do texto material de um índice do objeto do jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados do texto material de um índice do objeto do jogador.

| Nome | Descrição |
| ----------------------------------------- | ----------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                   |
| objectid | O ID do objeto do jogador.                                            |
| materialIndex | O índice de material no objeto. (0 a 15) |
| text[] | Uma matriz na qual armazenar o texto, passado por referência.             |
| textSize | O tamanho do texto.                                                   |
| &OBJECT_MATERIAL_SIZE:materialSize | Uma variável na qual armazenar o materialSize, passada por referência.     |
| fontFace[] | Uma matriz na qual armazenar o fontFace, passado por referência.         |
| fontFaceSize | O tamanho do fontFace.                                               |
| &fontSize | Uma variável na qual armazenar o fontSize, passada por referência.         |
| &bool:bold | Uma variável booleana na qual armazenar o negrito, passada por referência.     |
| &fontColour | Uma variável na qual armazenar fontColour, passada por referência.       |
| &backgroundColour | Uma variável na qual armazenar backgroundColour, passada por referência. |
| &OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | Uma variável na qual armazenar o textAlignment, passado por referência.    |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe ou foi especificado um índice de material inválido.

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new
    text[16],
    OBJECT_MATERIAL_SIZE:materialSize,
    fontFace[16],
    fontSize,
    bool:bold,
    fontColour,
    backgroundColour,
    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;

GetPlayerObjectMaterialText(playerid, playerobjectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);
// texto = "ABRIR.MP"
// tamanho do material = OBJECT_MATERIAL_SIZE_256x128
// fontFace = "Arial"
// tamanho da fonte = 38
// negrito = verdadeiro
// fonteCor = 0xFF0000FF
// cor de fundo = 0x00000000
// alinhamento de texto = OBJECT_MATERIAL_TEXT_ALIGN_LEFT
```
## Funções Relacionadas

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Substitua a textura de um objeto do jogador pela textura de outro modelo do jogo.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Substitua a textura de um objeto do jogador por texto.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): Verifica se um slot de material de objeto de jogador é usado.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): Obtenha os dados do material de um índice do objeto do jogador.
- [GetObjectMaterialText](GetObjectMaterialText): Obtenha os dados do texto do material de um índice do objeto.

---
title: GetObjectMaterialText
sidebar_label: GetObjectMaterialText
description: "Obtenha os dados do texto material de um índice do objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados do texto material de um índice do objeto.

| Nome | Descrição |
| ----------------------------------------- | ----------------------------------------------------------------------- |
| objectid | O ID do objeto.                                                   |
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

`true` - A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe ou foi especificado um índice de material inválido.

## Exemplos

```c
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new
    text[16],
    OBJECT_MATERIAL_SIZE:materialSize,
    fontFace[16],
    fontSize,
    bool:bold,
    fontColour,
    backgroundColour,
    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;

GetObjectMaterialText(objectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);
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

- [SetObjectMaterial](SetObjectMaterial): Substitua a textura de um objeto pela textura de outro modelo do jogo.
- [SetObjectMaterialText](SetObjectMaterialText): Substitua a textura de um objeto por texto.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): Verifica se uma ranhura de material do objeto é utilizada.
- [GetObjectMaterial](GetObjectMaterial): Obtenha os dados do material de um índice do objeto.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): Obtenha os dados do texto do material de um índice do objeto do jogador.

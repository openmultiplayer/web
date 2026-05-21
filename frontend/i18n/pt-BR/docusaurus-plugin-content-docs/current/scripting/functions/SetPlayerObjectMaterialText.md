---
title: SetPlayerObjectMaterialText
sidebar_label: SetPlayerObjectMaterialText
description: "Substitua a textura de um objeto de jogador por texto."
tags: ["player", "object", "playerobject"]
---


## Descrição

Substitua a textura de um objeto de jogador por texto.

| Nome | Descrição |
| ---------------------------------------- | ------------------------------------------------------------------------------ |
| playerid | O ID do jogador cujo jogador se opõe a definir o texto.                   |
| objectid | O ID do objeto no qual o texto será colocado.                               |
| text[] | O texto a ser definido.                                                               |
| materialIndex | O índice do material a ser substituído por texto (padrão: 0).                          |
| OBJECT_MATERIAL_SIZE:materialSize | O [tamanho](../resources/materialtextsizes) do material (padrão: 256x128). |
| const fontFace[] | A fonte a ser usada (padrão: Arial).                                              |
| fontSize | O tamanho do texto (padrão: 24) (máx. 255).                                  |
| bool:bold | Texto em negrito. Defina como 1 para negrito e 0 para não (padrão: 1).                          |
| fontColour | A cor do texto (padrão: branco).                                        |
| backgroundColour | A cor de fundo (padrão: nenhuma (transparente)).                            |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | O [alinhamento](../resources/materialtextsizes) do texto (padrão: esquerda).   |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                                     |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new myObject = CreatePlayerObject(playerid, 19353, 0.0, 0.0, 10.0, 0.0, 0.0, 90.0); //crie o objeto
        SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
        // escreva "SA-MP 0.3.DL" no objeto, com fonte laranja e fundo preto
        return 1;
    }
    return 1;
}
```
## Notas

:::tip

A incorporação de cores pode ser usada para várias cores no texto.

:::

## Funções Relacionadas

- [SetObjectMaterialText](SetObjectMaterialText): Substitua a textura de um objeto por texto.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Substitua a textura de um objeto do jogador pela textura de outro modelo do jogo.

## Editores de mapas avançados

- [Estúdio de Textura](https://github.com/Pottus/Texture-Studio) por Pottus
- [Criador Supremo](https://github.com/NexiusTailer/Ultimate-Creator) por Nexius
- [Editor de mapas de Fusez](https://github.com/fusez/Map-Editor-V3) por RedFusion

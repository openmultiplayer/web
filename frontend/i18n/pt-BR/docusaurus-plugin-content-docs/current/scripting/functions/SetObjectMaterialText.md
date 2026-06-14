---
title: SetObjectMaterialText
sidebar_label: SetObjectMaterialText
description: "Substitua a textura de um objeto por texto."
tags: ["object"]
---


## Descrição

Substitua a textura de um objeto por texto.

| Nome | Descrição |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| objectid | O ID do objeto cuja textura será substituída por texto.                        |
| const text[] | O texto a ser mostrado no objeto. (MAX 2.048 caracteres) |
| materialIndex | O índice de material do objeto a ser substituído por texto.                                |
| OBJECT_MATERIAL_SIZE:materialsize | O [tamanho](../resources/materialtextsizes) do material.                      |
| const fontFace[] | A fonte a ser usada.                                                                 |
| fontSize | O tamanho do texto (MAX 255).                                                  |
| bool:bold | Texto em negrito. Defina como true para negrito e false para não.                                  |
| fontColour | A cor do texto, no formato ARGB.                                           |
| backgroundColour | A cor de fundo, no formato ARGB.                                            |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | O [alinhamento](../resources/materialtextalignment) do texto (padrão: esquerda). |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                                       |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new objectId = CreateObject(19353, 0, 0, 10, 0.0, 0.0, 90.0); //crie o objeto
        SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, false, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENT);
        // escreva "SA-MP 0.3.DL" no objeto, com fonte laranja e fundo preto
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

A incorporação de cores pode ser usada para várias cores no texto.

:::

:::warning

Você MUST usa o formato de cores ARGB, não RGBA como usado em mensagens de clientes, etc.
O texto não é atualizado após 16 chamadas no mesmo objeto.
:::

## Funções Relacionadas

- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Substitua a textura de um objeto do jogador por texto.
- [SetObjectMaterial](SetObjectMaterial): Substitua a textura de um objeto pela textura de outro modelo do jogo.

## Editores de mapas avançados

- [Estúdio de Textura](https://github.com/Pottus/Texture-Studio) por Pottus
- [Criador Supremo](https://github.com/NexiusTailer/Ultimate-Creator) por Nexius
- [Editor de mapas de Fusez](https://github.com/fusez/Map-Editor-V3) por RedFusion
- [Editor SetObjectMaterialText](https://sampforum.blast.hk/showthread.php?tid=614667) por RIDE2DAY

## Recursos relacionados

- [Tamanhos de texto de materiais](../resources/materialtextsizes)
- [Alinhamentos de texto de materiais](../resources/materialtextalignment)

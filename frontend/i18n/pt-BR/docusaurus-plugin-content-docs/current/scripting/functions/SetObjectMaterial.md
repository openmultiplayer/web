---
title: SetObjectMaterial
sidebar_label: SetObjectMaterial
description: "Substitua a textura de um objeto pela textura de outro modelo do jogo."
tags: ["object"]
---


## Descrição

Substitua a textura de um objeto pela textura de outro modelo do jogo.

| Nome | Descrição |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| objectid | O ID do objeto cuja textura será alterada |
| materialIndex | O índice de material no objeto a ser alterado (0 a 15) |
| modelid | O modelid no qual a textura de substituição está localizada. Use 0 para alfa. Use -1 para alterar a cor do material sem alterar a textura. |
| const textureLibrary[] | O nome do arquivo txd que contém a textura de substituição (use "none" se não for necessário) |
| const textureName[] | O nome da textura a ser usada como substituição (use "none" se não for necessário) |
| materialColour | A cor do objeto a ser definida, como um número inteiro ou hexadecimal no formato de cor ARGB. Usar 0 mantém a cor do material existente.                              |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função.

## Exemplos

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/mycommand", true))
    {
        new
            Float:x, Float:y, Float:z,
            myObject;

        GetPlayerPos(playerid, x, y, z);
        myObject = CreateObject(19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetObjectMaterial(myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // Substitui a textura do nosso objeto pela textura do objeto 19341
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

A iluminação do vértice do objeto desaparecerá se a cor do material for alterada.

:::

:::warning

Você MUST usa o formato de cores ARGB, não RGBA como usado em mensagens de clientes, etc.

:::

## Funções Relacionadas

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Substitua a textura de um objeto do jogador pela textura de outro modelo do jogo.
- [SetObjectMaterialText](SetObjectMaterialText): Substitua a textura de um objeto por texto.

## Editores de mapas avançados

- [Estúdio de Textura](https://github.com/Pottus/Texture-Studio) por Pottus
- [Criador Supremo](https://github.com/NexiusTailer/Ultimate-Creator) por Nexius
- [Editor de mapas de Fusez](https://github.com/fusez/Map-Editor-V3) por RedFusion

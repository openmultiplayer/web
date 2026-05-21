---
title: SetPlayerAttachedObject
sidebar_label: SetPlayerAttachedObject
description: "Anexe um objeto a um osso específico de um jogador."
tags: ["player", "object", "attachment"]
---


## Descrição

Anexe um objeto a um osso específico de um jogador.

| Nome | Descrição |
| --------------- | ------------------------------------------------------------------------------------ |
| playerid | O ID do jogador ao qual anexar o objeto.                                        |
| index | O índice (slot 0-9) ao qual atribuir o objeto.                                        |
| modelid | O modelo a ser anexado.                                                                 |
| bone | O [osso](../resources/boneid) ao qual anexar o objeto.                             |
| Float:offsetX | (opcional) Deslocamento do eixo X para a posição do objeto.                                    |
| Float:offsetY | (opcional) Deslocamento do eixo Y para a posição do objeto.                                    |
| Float:offsetZ | (opcional) Deslocamento do eixo Z para a posição do objeto.                                    |
| Float:rotationX | (opcional) Rotação do eixo X do objeto.                                            |
| Float:rotationY | (opcional) Rotação do eixo Y do objeto.                                            |
| Float:rotationZ | (opcional) Rotação do eixo Z do objeto.                                            |
| Float:scaleX | (opcional) Escala do eixo X do objeto.                                               |
| Float:scaleY | (opcional) Escala do eixo Y do objeto.                                               |
| Float:scaleZ | (opcional) Escala do eixo Z do objeto.                                               |
| materialColour1 | (opcional) A primeira cor do objeto a ser definida, como um número inteiro ou hexadecimal no formato de cor ARGB. |
| materialColour2 | (opcional) A segunda cor do objeto a ser definida, como um número inteiro ou hexadecimal no formato de cor ARGB |

## Retornos

**1** em caso de sucesso, **0** em caso de falha.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 3, 1609, 2); // Anexe uma tartaruga à cabeça do playerid, no slot 3

    // Exemplo de uso de cores em um objeto anexado ao jogador:
    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);
    // Coloque um chapéu branco na cabeça do jogador e pinte-o de verde
    return 1;
}
```
## Notas

:::tip

Esta função é separada dos pools CreateObject/CreatePlayerObject.

:::

:::warning

Até 10 objetos podem ser anexados a um único jogador (índice 0-9)

:::

## Funções Relacionadas

- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remova um objeto anexado de um jogador
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Verifica se um objeto está anexado a um jogador em um índice especificado
- [GetPlayerAttachedObject](GetPlayerAttachedObject): Obtém os dados do objeto de anexo do jogador por índice.
- [EditAttachedObject](EditAttachedObject): Edite um objeto anexado.

## Recursos relacionados

- [Osso IDs](../resources/boneid)

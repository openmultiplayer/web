---
title: EditAttachedObject
sidebar_label: EditAttachedObject
description: Entra no modo de edição para um objeto anexado.
tags: ["player", "object", "attachment"]
---

## Descrição

Entra no modo de edição para um objeto anexado a um jogador.

| Nome     | Descrição                                      |
| -------- | ------------------------------------------------ |
| playerid | O ID do jogador que entrará no modo de edição |
| index    | O índice (slot) do objeto anexado a ser editado  |

## Retornos

**1** em caso de sucesso e **0** em caso de falha.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 0, 1337, 2);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditAttachedObject(playerid, 0);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Você está editando seu objeto anexado no slot 0!");
        return 1;
    }
    return 0;
}
```

## Observações

:::tip

Você pode mover a câmera durante a edição pressionando e segurando a barra de espaço (ou W em veículo) e movendo o mouse.

:::

:::warning

Jogadores poderão escalonar objetos para tamanhos muito grandes ou valores negativos. Limites devem ser implementados usando OnPlayerEditAttachedObject para abortar a edição ou limitar os valores de escala.

:::

## Funções Relacionadas

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Anexa um objeto a um jogador
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove um objeto anexado de um jogador
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Verifica se um objeto está anexado a um jogador em um slot específico
- [EditObject](EditObject): Edita um objeto global
- [EditPlayerObject](EditPlayerObject): Edita um objeto de jogador
- [SelectObject](SelectObject): Seleciona um objeto
- [CancelEdit](CancelEdit): Cancela a edição de um objeto

## Callbacks Relacionadas

- [OnPlayerEditAttachedObject](../callbacks/OnPlayerEditAttachedObject): Chamado quando um jogador termina de editar um objeto anexado
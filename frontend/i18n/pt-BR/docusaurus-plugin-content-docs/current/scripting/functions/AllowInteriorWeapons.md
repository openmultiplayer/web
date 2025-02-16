---
title: AllowInteriorWeapons
sidebar_label: AllowInteriorWeapons
description: Define se o uso de armas no interior é permitido ou não.
tags: []
---

## Descrição

Define se o uso de armas no interior é permitido ou não.

| Name  | Descrição                                                                                             |
| ----- | ----------------------------------------------------------------------------------------------------- |
| allow | 1 para habilitar armas em interiores (habilitado por padrão), 0 para desabilitar armas em interiores. |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    // Isto permitirá armas dentro de interiores.
    AllowInteriorWeapons(1);
    return 1;
}
```

## Notas

:::warning

Esta função não funciona na atual versão do SA:MP!

:::

## Funções Relacionadas

- [SetPlayerInterior](SetPlayerInterior.md): Define o interior de um jogador.
- [GetPlayerInterior](GetPlayerInterior.md): Obtém o atual interior de um jogador.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange.md): É chamado quando um jogador muda de interior.

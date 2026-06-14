---
title: ShowNameTags
sidebar_label: ShowNameTags
description: "Alterne o desenho de crachás, barras de saúde e barras de armadura acima dos jogadores."
tags: []
---


## Descrição

Alterne o desenho de crachás, barras de saúde e barras de armadura acima dos jogadores.

| Nome | Descrição |
| --------- | ---------------------------------------------------------- |
| bool:show | 'false' para desabilitar, 'true' para habilitar (habilitado por padrão). |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    // Isso desativará totalmente todos os crachás dos jogadores
    // (incluindo barras de saúde e armadura)
    ShowNameTags(false);
}
```
## Notas

:::warning

Esta função só pode ser usada em [OnGameModeInit](OnGameModeInit). Para outras ocasiões, consulte [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer).

:::

:::tip

Você também pode alternar os nametags dos jogadores via [config.json](../../server/config.json)

```json
"use_nametags": false,
```
:::

## Funções Relacionadas

- [DisableNameTagLOS](DisableNameTagLOS): Desativa a verificação de linha de visão do crachá.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Mostra ou oculta o crachá de um determinado jogador.
- [ShowPlayerMarkers](ShowPlayerMarkers): Decida se o servidor deve mostrar marcadores no radar.

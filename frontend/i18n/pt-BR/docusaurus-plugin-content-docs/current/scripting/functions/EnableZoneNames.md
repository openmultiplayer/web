---
title: EnableZoneNames
sidebar_label: EnableZoneNames
description: "Esta função permite ativar nomes de zonas/áreas, como o texto \"Vinewood\" ou \"Doherty\" no canto inferior direito da tela à medida que entram na área."
tags: []
---


## Descrição

Esta função permite ativar nomes de zonas/áreas, como o texto "Vinewood" ou "Doherty" no canto inferior direito da tela à medida que entram na área. Esta é uma opção de modo de jogo e deve ser definida no callback OnGameModeInit.

| Nome | Descrição |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| bool:enable | Uma opção de alternância para ativar ou desativar os nomes das zonas. 'false' está desativado e 'true' está ativado. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    EnableZoneNames(true);
    return 1;
}
```
## Notas

:::warning

Esta função foi removida em SA-MP 0.3. Isso ocorreu devido às falhas que causou.

:::

:::tip

Você também pode ativar ou desativar nomes de zona por meio de [config.json](../../server/config.json)

```json
"use_zone_names": true,
```
:::

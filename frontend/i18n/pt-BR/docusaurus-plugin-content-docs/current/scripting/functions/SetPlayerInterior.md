---
title: SetPlayerInterior
sidebar_label: SetPlayerInterior
description: "Defina o interior de um jogador."
tags: ["player"]
---


## Descrição

Defina o interior de um jogador. Uma lista de interiores atualmente conhecidos e suas posições pode ser encontrada aqui.

| Nome | Descrição |
| ---------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador para definir o interior.                      |
| interiorid | O [interior ID](../resources/interiorids) para instalar o jogador. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado.

## Exemplos

```c
// Definir o jogador para o interior padrão (externo)
SetPlayerInterior(playerid, 0);
```
## Funções Relacionadas

- [GetPlayerInterior](GetPlayerInterior): Obtenha o interior atual de um jogador.
- [LinkVehicleToInterior](LinkVehicleToInterior): Altere o interior em que um veículo é visto.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): Chamado quando um jogador muda de interior.

## Recursos relacionados

- [Interior IDs](../resources/interiorids)

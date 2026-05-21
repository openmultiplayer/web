---
title: SetPlayerPosFindZ
sidebar_label: SetPlayerPosFindZ
description: "Isso define a posição dos jogadores e depois ajusta a coordenada z dos jogadores para o terreno sólido mais próximo sob a posição."
tags: ["player"]
---


## Descrição

Isso define a posição dos jogadores e depois ajusta a coordenada z dos jogadores para o terreno sólido mais próximo sob a posição.

| Nome | Descrição |
| -------- | -------------------------------------------- |
| playerid | O ID do jogador para definir a posição. |
| Float:x | A coordenada X para posicionar o jogador.  |
| Float:y | A coordenada X para posicionar o jogador.  |
| Float:z | A coordenada Z para posicionar o jogador.  |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
SetPlayerPosFindZ(playerid, 1234.5, 1234.5, 1000.0);
```
## Notas

:::warning

Esta função não funciona se as novas coordenadas estiverem longe de onde o jogador está atualmente. A altura Z será 0, o que provavelmente os colocará no subsolo. É altamente recomendado que o plugin [MapAndreas](https://github.com/philip1337/samp-plugin-mapandreas) ou [ColAndreas](https://github.com/Pottus/ColAndreas) seja usado.

:::

## Funções Relacionadas

- [SetPlayerPos](SetPlayerPos): Defina a posição de um jogador.

## Callbacks Relacionadas

- [OnPlayerClickMap](../callbacks/OnPlayerClickMap): Chamado quando um jogador define um waypoint/alvo no mapa do menu de pausa.

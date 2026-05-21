---
title: UsePlayerPedAnims
sidebar_label: UsePlayerPedAnims
description: "Usa animação de caminhada padrão do jogador (animação da skin CJ) em vez de animações personalizadas para cada skin (por exemplo, patinação para skins de skatista)."
tags: ["player"]
---


## Descrição

Usa animação de caminhada padrão do jogador (animação da skin CJ) em vez de animações personalizadas para cada skin (por exemplo, patinação para skins de skatista).

## Exemplos

```c
public OnGameModeInit()
{
    UsePlayerPedAnims();
    return 1;
}
```
## Notas

:::tip

Funciona apenas quando colocado em [OnGameModeInit](../callbacks/OnGameModeInit).

Não usar esta função faz com que armas de duas mãos (não de duas mãos - uma única arma que é segurada por ambas as mãos) sejam seguradas em apenas uma mão.

:::

:::tip

Você também pode ativar a animação padrão de caminhada do jogador via [config.json](../../server/config.json)

```json
"use_player_ped_anims": true,
```
:::

## Funções Relacionadas

- [ApplyAnimation](ApplyAnimation): Aplique uma animação a um jogador.
- [ClearAnimations](ClearAnimations): Limpa todas as animações que um jogador está realizando.

---
title: CreatePlayerGangZone
sidebar_label: CreatePlayerGangZone
description: Cria uma gangzone de jogador
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Cria uma gangzone de jogador. Isso pode ser usado como uma alternativa ao limite de gangzones globais.

| Nome       | Descrição                                                         |
| ---------- | ----------------------------------------------------------------- |
| playerid   | O ID do jogador para quem a gangzone de jogador será criada.     |
| Float:minX | A coordenada X para o lado oeste da gangzone de jogador.         |
| Float:minY | A coordenada Y para o lado sul da gangzone de jogador.           |
| Float:maxX | A coordenada X para o lado leste da gangzone de jogador.         |
| Float:maxY | A coordenada Y para o lado norte da gangzone de jogador.         |

## Retorno

O ID da gangzone de jogador criada, retorna **-1** se não foi criada

## Exemplos

```c
// Esta variável é usada para armazenar o id da gangzone
// para que possamos usá-la em todo o script
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Cria a gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
}
```

```
                          MaxY
                          v
             -------------* < MaxX
             |            |
             |  gangzone  |
             |   center   |
             |            |
      MinX > *-------------
             ^
             MinY
```

## Notas

:::warning

- Há um limite de 1024 gangzones.
- Colocar os parâmetros na ordem errada resulta em comportamento com falhas.

:::

:::tip

Esta função apenas CRIA a gangzone, você deve usar [PlayerGangZoneShow](PlayerGangZoneShow) para mostrá-la.

:::

## Funções Relacionadas

- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destrói a gangzone de jogador.
- [PlayerGangZoneShow](PlayerGangZoneShow): Mostra a gangzone de jogador em uma cor.
- [PlayerGangZoneHide](PlayerGangZoneHide): Esconde a gangzone de jogador.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Inicia o piscar da gangzone de jogador.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Para o piscar da gangzone de jogador.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Obtém a cor de uma gangzone de jogador.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Obtém a cor piscante de uma gangzone de jogador.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Obtém a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Verifica se a gangzone de jogador é válida.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Verifica se o jogador está na gangzone de jogador.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Verifica se a gangzone de jogador está visível.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Verifica se a gangzone de jogador está piscando.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Habilita o callback quando um jogador entra/sai desta zona.

## Editores de GangZone

- [Prineside DevTools GangZone Editor](https://dev.prineside.com/en/gtasa_gangzone_editor/)
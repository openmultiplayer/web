---
title: GangZoneCreate
sidebar_label: GangZoneCreate
description: Cria uma gangzone (zona colorida no radar).
tags: ["gangzone"]
---

## Descrição

Cria uma gangzone (zona colorida no radar).

| Nome | Descrição                                     |
| ---- | --------------------------------------------- |
| minx | A coordenada X para o lado oeste da gangzone. |
| miny | A coordenada Y para o lado sul da gangzone.   |
| maxx | A coordenada X para o lado este da gangzone.  |
| maxy | A coordenada Y para o lado norte da gangzone. |

## Retorno

O ID da zona criada, retorna -1 se não for criada.

## Exemplos

```c
new gangzone;
gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
```

```
            MinY
             v
      MinX > *-------------
             |            |
             |   centro   |
             |  gangzone  |
             |            |
             -------------* < MaxX
                          ^
                          MaxY
```

## Notas

:::tip

Esta função apenas CRIA a gangzone, você deve usar GangZoneShowForPlayer ou GangZoneShowForAll para mostrá-la.

:::

:::warning

Existe um limite de 1024 gangzones. Colocar parâmetros na ordem errada resulta em glitches.

:::

## Funções Relacionadas

- [GangZoneDestroy](GangZoneDestroy): Destrói uma gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone a um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Esconde uma gangzone a um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Esconde uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz uma gangzone piscar para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faz uma gangzone piscar para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Pare uma Gangzone de piscar para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.

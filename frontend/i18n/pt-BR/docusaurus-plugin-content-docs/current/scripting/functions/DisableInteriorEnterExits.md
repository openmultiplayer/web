---
title: DisableInteriorEnterExits
sidebar_label: DisableInteriorEnterExits
description: Desativa todas as entradas e saídas de interiores no jogo (as setas amarelas nas portas).
tags: ["interior"]

---

## Descrição

Desativa todas as entradas e saídas de interiores no jogo (as setas amarelas nas portas).

## Exemplos

```c  
public OnGameModeInit()  
{  
    DisableInteriorEnterExits();  
    return 1;  
}  
```  

## Observações

:::warning

Esta função só terá efeito se for usada ANTES de um jogador se conectar (recomenda-se usá-la em [OnGameModeInit](../callbacks/OnGameModeInit)). Ela não remove os marcadores de jogadores já conectados.

Se o gamemode for alterado após o uso desta função, e o novo gamemode não desativar os marcadores, eles NÃO reaparecerão para jogadores já conectados (mas aparecerão para novos jogadores).

:::

:::tip

Você também pode desativar os marcadores de entrada de interiores através do [config.json](../../server/config.json):

```json  
"use_entry_exit_markers": false,  
```  

:::

## Funções Relacionadas

- [AllowInteriorWeapons](AllowInteriorWeapons): Define se armas podem ser usadas em interiores.
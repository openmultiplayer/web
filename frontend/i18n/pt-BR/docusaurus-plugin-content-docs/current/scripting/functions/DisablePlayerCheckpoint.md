---
title: DisablePlayerCheckpoint
sidebar_label: DisablePlayerCheckpoint
description: Desativa (esconde/remove) o checkpoint definido para um jogador.
tags: ["player", "checkpoint"]

---

## Descrição

Desativa (esconde/remove) o checkpoint ativo de um jogador. Cada jogador pode ter apenas um checkpoint visível por vez. Não é necessário desativar um checkpoint antes de definir outro.

| Parâmetro | Descrição                                   |
| --------- | ------------------------------------------- |
| playerid  | ID do jogador que terá seu checkpoint desativado. |

## Retornos

**true** - A função foi executada com sucesso. Também retorna true se o jogador já não tinha um checkpoint visível.

**false** - A função falhou ao executar. Isso ocorre quando o jogador especificado não está conectado.

## Exemplos

```c  
public OnPlayerEnterCheckpoint(playerid)  
{  
    DisablePlayerCheckpoint(playerid);  
    return 1;  
}  
```  

## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Cria um checkpoint para um jogador.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está dentro de um checkpoint.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Verifica se o jogador tem um checkpoint visível.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Cria um checkpoint de corrida para um jogador.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Desativa o checkpoint de corrida atual do jogador.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um checkpoint de corrida.

## Callbacks Relacionados

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um checkpoint de corrida.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
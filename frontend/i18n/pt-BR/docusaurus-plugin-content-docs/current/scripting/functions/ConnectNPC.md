---
title: ConnectNPC
sidebar_label: ConnectNPC
description: Conecta um NPC ao servidor.
tags: ["npc"]
---

## Descrição

Conecta um NPC ao servidor.

| Nome           | Descrição                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------- |
| const name[]   | O nome com o qual o NPC deve se conectar. Deve seguir as mesmas regras dos nomes de jogadores normais. |
| const script[] | O nome do script do NPC que está localizado na pasta npcmodes (sem a extensão .amx).      |

## Retorno

Esta função sempre retorna 1.

## Exemplos

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Notas

:::tip

NPCs não têm nametags. Estas podem ser criadas com [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer).

:::

## Funções Relacionadas

- [IsPlayerNPC](IsPlayerNPC): Verifica se um jogador é um NPC ou um jogador real.

## Callbacks Relacionados

- [OnPlayerConnect](../callbacks/OnPlayerConnect): Chamado quando um jogador se conecta ao servidor.
---
title: ConnectNPC
description: Conecte um NPC ao servidor.
tags: ["npc"]
---

Esta função foi adicionada no SA-MP 0.3a e não funcionará em versões anteriores!

## Descrição

Conecte um NPC ao servidor.

| Nome     | Descrição                                                                             			  |
| -------- | ----------------------------------------------------------------------------------------         |
| name[]   | O nome com o qual o NPC deve se conectar. Deve seguir as mesmas regras que os jogadores normais. |
| script[] | O nome do script NPC que está localizado na pasta npcmodes (sem a extensão .amx).                |

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

NPCs do not have nametags. These can be scripted with Attach3DTextLabelToPlayer.
NPCs não têm nametags. Estes podem ser programados com Attach3DTextLabelToPlayer.

:::

## Funções Relacionadas

- [IsPlayerNPC](IsPlayerNPC.md): Verifica se o jogador é um NPC ou um jogador real.
- [OnPlayerConnect](../callbacks/OnPlayerConnect.md): É chamado quando um jogador se conecta ao servidor.

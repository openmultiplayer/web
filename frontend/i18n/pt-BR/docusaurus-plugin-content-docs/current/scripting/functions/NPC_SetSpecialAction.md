---
title: NPC_SetSpecialAction
sidebar_label: NPC_SetSpecialAction
description: "Define o estado de ação especial de um NPC."
tags: ["npc", "action", "special"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o estado de ação especial de um NPC, como sentar, fumar, beber, etc.

| Nome | Descrição |
| ------ | ---------------------------- |
| npcid | O ID do NPC |
| action | A ação especial ID para definir |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setspecialaction ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new actionid = strval(cmdtext[18]);

        NPC_SetSpecialAction(npcid, SPECIAL_ACTION:actionid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d special action set to %d", npcid, actionid);

        return 1;
    }
    return 0;
}
```
## Notas

- Use SPECIAL_ACTION_NONE para limpar a ação atual
- Algumas ações podem entrar em conflito com o movimento ou outras atividades

## Funções Relacionadas

- [NPC_GetSpecialAction](NPC_GetSpecialAction): Obtenha a ação especial atual
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Aplicar animações personalizadas
- [NPC_ClearAnimations](NPC_ClearAnimations): Limpar animações
- [NPC_ResetAnimation](NPC_ResetAnimation): Redefinir para o padrão

## Recursos relacionados

- [Ações Especiais](../resources/specialactions)

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._

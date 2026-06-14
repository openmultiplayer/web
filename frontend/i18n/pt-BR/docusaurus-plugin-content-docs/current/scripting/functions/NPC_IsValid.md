---
title: NPC_IsValid
sidebar_label: NPC_IsValid
description: "Verifica se um NPC ID é válido."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC ID é válido e se o NPC existe.

| Nome | Descrição |
| ----- | -------------------- |
| npcid | O NPC ID para verificar. |

## Retornos

Retorna `true` se NPC for válido, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalid", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new bool:isValid = NPC_IsValid(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is valid: %s", npcid, isValid ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Sempre verifique se um NPC é válido antes de realizar operações nele.
- Um NPC torna-se inválido quando é destruído.
- Isso evita erros de execução e travamentos.
- Use isso em loops ao iterar pelo potencial NPC IDs.

:::

## Funções Relacionadas

- [NPC_Create](NPC_Create): Crie um novo NPC.
- [NPC_Destroy](NPC_Destroy): Destrua um NPC.
- [NPC_GetAll](NPC_GetAll): Obtenha todos os NPC IDs válidos.
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto.

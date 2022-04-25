---
title: OnClientMessage
description: Essa callback é executada sempre que um NPC lê uma mensagem enviada pelo ClientMessage.
tags: []
---

<VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada sempre que um NPC lê uma mensagem enviada pelo ClientMessage. A mesma será executada todas as vezes que as funções SendClientMessageToAll e SendClientMessage forem chamadas e puderem ser lidas pelos NPCs. Diferente da ClientMessage, uma mensagem enviada por um jogador não poderá ser lida pelo NPC, para isso veja NPC:OnPlayerText.

| Nome   | Descrição                           |
| ------ | ----------------------------------- |
| color  | A cor da mensagem do ClientMessage. |
| text[] | A mensagem.                         |

## Retorno

Essa callback não tem retornos.

## Exemplos

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Saldo em conta: R$0") != -1)
    {
        SendClientMessage(playerid, -1, "Estou pobre :(");
    }
}
```

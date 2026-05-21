---
title: SendCommand
sidebar_label: SendCommand
description: "Isso forçará o NPC a escrever o comando desejado, obtendo assim os efeitos que ele produziria."
tags: []
---


:::warning

Esta função está obsoleta.

Consulte `PC_EmulateCommand` para [Pawn.CMD](https://github.com/katursis/Pawn.CMD) ou meios semelhantes para outros processadores de comando.

:::

## Descrição

Isso forçará o NPC a escrever o comando desejado, obtendo assim os efeitos que ele produziria.

| Nome | Descrição |
| ------------- | --------------------------------------- |
| commandtext[] | O texto do comando a ser enviado pelo NPC. |

## Exemplos

```c
public OnPlayerText(playerid, text[])
{
    if (strfind(text, "stupid bot") != -1)
    {
        new string[80], name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));
        SendCommand("/kill");
        format(string, sizeof(string), "Hey %s! You are so mean, you make me so sad!", name);
        SendChat(string);
    }
    return 1;
}
```
## Funções Relacionadas

- [SendChat](SendChat): Envia um texto como NPC.

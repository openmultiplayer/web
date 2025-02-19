---
title: BanEx
sidebar_label: BanEx
description: Bane um jogador com um motivo específico.
tags: []
---

## Descrição

Bane um jogador com um motivo específico.

| Nome     | Descrição                     |
| -------- | ----------------------------- |
| playerid | O ID do jogador a ser banido. |
| reason   | O motivo do banimento.        |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Bane o jogador que executar este comando e inclui o motivo "Solicitado".
        BanEx(playerid, "Solicitado");
        return 1;
    }
}
// Para exibir uma mensagem (por exemplo, motivo) para o jogador antes que a conexão seja fechada
// você tem que usar um cronômetro (timer) para criar um atraso. Esse atraso precisa ser de apenas alguns milissegundos,
// mas este exemplo usa um segundo inteiro apenas por garantia.

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    //motivo - O motivo do banimento para ser usado no BanEx.
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Bane o jogador que executar este comando.
        BanExWithMessage(playerid, 0xFF0000FF, "Você foi banido!", "Solicitado");
        return 1;
    }
    return 0;
}
```

## Notas

:::warning

Qualquer ação realizada diretamente antes do Ban() (como enviar uma mensagem com SendClientMessage) não chegará ao jogador. Um cronômetro (timer) deve ser usado para atrasar o banimento.

:::

## Funções Relacionadas

- [BanEx](../functions/Ban.md): Bane um jogador do servidor.
- [Kick](../functions/Kick.md): Expulsa um jogador do servidor.

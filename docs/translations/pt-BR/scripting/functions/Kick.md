---
title: Kick
description: Expulsa um jogador do servidor. Ele terá que sair do jogo e re-conectar caso queira continuar jogando.
tags: ["administration"]
---

## Descrição

Expulsa um jogador do servidor. Ele terá que sair do jogo e re-conectar caso queira continuar jogando.

| Nome     | Descrição                      |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser expulso. |

## Retorno

Esta função sempre retorna 1, mesmo que a função falhe a ser executada (Jogador específico não existe).

## Notas

:::warning

Após o SA-MP 0.3x, qualquer ação realizada antes de Kick() (como enviar mensagem com SendClientMessage) não irá funcionar. Um temporizador deve ser usado para atrasar a expulsão.

:::

## Exemplos

```c
// Para exibir uma mensagem (por exemplo, motivo) para o jogador antes que a conexão seja fechada
// você tem que usar um cronômetro (timer) para criar um atraso. Esse atraso precisa ser de apenas alguns milissegundos,
// mas este exemplo usa um segundo inteiro apenas por garantia.

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // Expulsa o jogador que executar este comando.

        // Primeiro, envia a ele uma mensagem.
        SendClientMessage(playerid, 0xFF0000FF, "Você foi expulso!");

        // Bane-o um segundo depois da execução do comando por um cronômetro (timer).
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## Funções Relacionadas

- [Ban](Ban): Bane um jogador do servidor.
- [BanEx](BanEx): Bane um jogador com uma razão específica.

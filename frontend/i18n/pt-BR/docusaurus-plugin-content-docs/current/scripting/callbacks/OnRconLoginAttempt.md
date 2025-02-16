---
title: OnRconLoginAttempt
sidebar_label: OnRconLoginAttempt
description: Essa callback é executada quando algum jogador tenta login na RCON; seja ele bem sucedido ou não.
tags: []
---

## Descrição

Essa callback é executada quando algum jogador tenta login na RCON; seja ele bem sucedido ou não.

| Nome       | Descrição                                               |
| ---------- | ------------------------------------------------------- |
| ip[]       | IP do jogador que tentou fazer login na RCON.           |
| password[] | A senha utilizada no login.                             |
| success    | 0 caso a senha esteja incorreta, 1 caso esteja correta. |

## Retornos

Sempre executada primeiro nos filterscripts.

## Exemplos

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) //Caso a senha esteja incorreta
    {
        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s",ip, password);
        new pip[16];
        for(new i = GetPlayerPoolSize(); i != -1; --i) //Faz um loop por todos os jogadores.
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if (!strcmp(ip, pip, true)) //Caso o IP do jogador seja o mesmo que falhou ao realizar o login.
            {
                SendClientMessage(i, 0xFFFFFFFF, "Senha Incorreta! Grande abraço parça!"); //Envia uma mensagem de despedida :)
                Kick(i); //Kicka o jogador.
            }
        }
    }
    return 1;
}
```

## Notas

:::tip

Essa callback é executada somente quando o comando /rcon login é utilizado in-game. É executada somente quando o jogador não está logado na RCON. Quando o jogador já está logado na RCON a callback OnRconCommand é executada ao invés dessa.

:::

## Funções Relacionadas

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Verifica se o jogador está logado na RCON.
- [SendRconCommand](../functions/SendRconCommand): Envia um comando RCON pelo script.

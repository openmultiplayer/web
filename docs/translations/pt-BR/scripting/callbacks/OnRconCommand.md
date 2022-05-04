---
title: OnRconCommand
description: Essa callback é executada quando um comando é enviado ao servidor, seja digitando no console, pela RCON, ou in-game utilizando "/rcon comando".
tags: []
---

## Descrição

Essa callback é executada quando um comando é enviado ao servidor, seja digitando no console, pela RCON, ou in-game utilizando "/rcon comando".

| Nome  | Descrição                                                                         |
| ----- | --------------------------------------------------------------------------------- |
| cmd[] | String contendo o comando que foi digitado, também os parâmetros (caso tenham).   |

## Retornos

É sempre executada primeiro em filterscripts, retorne 1 para bloquear o gamemode de visualizar.

## Exemplos

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: Você digitou '/rcon %s'!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Olá Mundo!");
        print("Você disse Olá para o Mundo!"); // Irá aparecer na cor branca para o jogador que digitou o comando RCON no chat.
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

"/rcon " não está inclusa no "cmd" quando um player utiliza um comando. Caso você utilize a função "print", uma mensagem será enviada para o jogador que digitou o comando in-game e também no log do servidor. Essa callback não é executada caso o jogador não esteja logado na RCON. Quando o jogador não está logado na RCON como admin ele deve usar o comando /rcon login, a callback OnRconLoginAttempt será executada ao invés da OnRconCommand. Apesar disso, quando o jogador fizer login na RCON como admin, o uso do comando /rcon fará com que o mesmo execute a callback OnRconCommand.

:::

:::warning

Você precisa incluir essa callback em um filterscript ja carregado para que a mesma funcione no gamemode!

:::

## Funções Relacionadas

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Verifica se o jogador está logado na RCON.

## Callbacks Relacionadas

- [OnRconLoginAttempt](OnRconLoginAttempt): Executada quando o jogador tenta fazer login na RCON.

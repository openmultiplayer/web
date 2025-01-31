---
title: SendClientCheck
description: Execute uma verificação de memória no cliente.
tags: []
---

## Descrição

Execute uma verificação de memória no cliente.


| Nome            | Descrição                              |
| --------------- | -------------------------------------- |
| playerid        | O ID do jogador a ser verificado.      |
| type            | O tipo de verificação a ser executada. [Veja aqui](../resources/opcodes)|
| memAddr         | O endereço base para verificar         |
| memOffset       | O deslocamento do endereço base.       |
| byteCount       | O número de bytes a serem verificados. |


## Retornos

1: A função foi executada com sucesso.

0: A função falhou ao executar. O jogador não está conectado.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // or 72
    {
        print("O jogador está se conectando usando o cliente do PC.");
    }
    return 1;
}
```

## Nota

:::tip

- Existem 6 tipos de requisições que o cliente processa (2, 5, 69, 70, 71, 72)
- O tipo 72 não usa nenhum dos outros argumentos [arg | offset | size].
- O arg retorna o uptime do computador.

:::

:::warning

**SA:MP Server**: Esta função só funciona quando está em um filterscript.

**Open Multiplayer Server**: Isso funciona normalmente dentro de um gamemode/filterscript. 

:::

## Funções Relacionadas

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): Verifique se o jogador está usando o cliente oficial SA-MP.
- [IsPlayerUsingOmp](IsPlayerUsingOmp): Verifique se o jogador está usando o launcher open.mp.

## Callbacks Relacionadas

- [OnClientCheckResponse](../callbacks/OnClientCheckResponse): chamado quando uma solicitação SendClientCheck é concluída.

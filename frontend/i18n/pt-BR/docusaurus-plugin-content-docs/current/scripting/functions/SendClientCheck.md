---
title: SendClientCheck
sidebar_label: SendClientCheck
description: "Execute uma verificação de memória no cliente."
tags: []
---


## Descrição

Execute uma verificação de memória no cliente.

| Nome | Descrição |
| --------- | -------------------------------------------------------------- |
| playerid | O ID do jogador a ser verificado.                                 |
| tipo | O tipo de verificação a ser executada. [Veja aqui](../resources/opcodes) |
| memAddr | O endereço base a ser verificado.                                     |
| memOffset | O deslocamento do endereço base.                              |
| byteCount | O número de bytes a serem verificados.                                  |

## Retornos

1: A função foi executada com sucesso.

0: A função não foi executada. O jogador não está conectado.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // ou 72
    {
        print("The player is connecting using the PC client.");
    }
    return 1;
}
```
## Notas

:::tip

- Existem 6 tipos de solicitações que o cliente processa (2, 5, 69, 70, 71, 72)
- O tipo 72 não usa nenhum dos outros argumentos [arg | compensação | tamanho].
- O argumento retorna o tempo de atividade do computador.

:::

:::warning

**SA:MP Servidor**: Esta função só funciona quando está em um filterscript.

**Servidor multijogador aberto**: Funciona normalmente dentro de um gamemode/filterscript.

:::

## Funções Relacionadas

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): Verifique se o jogador está usando o cliente oficial SA-MP.
- [IsPlayerUsingOmp](IsPlayerUsingOmp): Verifique se o jogador está usando o inicializador open.mp.

## Callbacks Relacionadas

- [OnClientCheckResponse](../callbacks/OnClientCheckResponse): chamado quando uma solicitação SendClientCheck é concluída.

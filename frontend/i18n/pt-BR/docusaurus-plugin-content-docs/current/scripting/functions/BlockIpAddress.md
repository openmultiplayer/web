---
title: BlockIpAddress
description: Bloqueia um endereço de IP de comunicar com o servidor por um determinado período de tempo (globs são permitidos).
tags: []
---

## Descrição

Bloqueia um endereço de IP de comunicar com o servidor por um determinado período de tempo (globs são permitidos). Jogadores tentando se conectar ao servidor com um endereço de IP bloqueado receberão a mensagem "Your are banned from this server". Jogadores que estão online no IP especificado, antes do bloqueio, irão perder a conexão após alguns segundos, e ao se conectar, irão receber a mesma mensagem.

| Nome       | Descrição                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| ip_address | O IP a bloquear.                                                                                      |
| timems     | O tempo (em milisegundos) que a conexão será bloqueada. 0 pode ser usado para um bloqueio indefinido. |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // Se eles fornecerem uma senha errada
    {
        BlockIpAddress(ip, 60 * 1000); // Bloquear as conexões deste IP por um minuto.
    }
    return 1;
}
```

## Notas

:::tip

Globs podem ser usados nesta função, por exemplo bloquear o IP '6.9._._' bloqueará todos os IPs onde os primeiros dois octetos são 6 e 9 respectivamente. Qualquer número pode estar no lugar do underscore.

:::

## Funções Relacionadas

- [UnBlockIpAddress](UnBlockIpAddress): Desbloqueie um IP que foi bloqueado anteriormente.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): É chamado quando um jogador está tentando se conectar ao servidor.

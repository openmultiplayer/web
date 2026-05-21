---
title: SendClientMessagef
sidebar_label: SendClientMessagef
description: "Esta função envia uma mensagem formatada para um jogador específico com uma cor escolhida no chat."
tags: []
---


<VersionWarn version='open.mp beta build 6' />

:::warning

Esta função foi descontinuada.

A função [SendClientMessage](SendClientMessage) agora está integrada ao formato!

:::

## Descrição

Esta função envia uma mensagem formatada para um jogador específico com uma cor escolhida no chat. Toda a linha na caixa de bate-papo estará na cor definida, a menos que a incorporação de cores seja usada.

| Nome | Descrição |
| ----------------- | ----------------------------------------------------- |
| playerid | O ID do jogador para o qual exibir a mensagem.       |
| color | A cor da mensagem (formato hexadecimal 0xRRGGBBAA).     |
| const message[] | O texto que será exibido (máximo 144 caracteres). |
| \{Float, \_\}:... | Número indefinido de argumentos de qualquer tag |

## Retornos

1: A função foi executada com sucesso. O sucesso é relatado quando a string tem mais de 144 caracteres, mas a mensagem não será enviada.

0: A função não foi executada. O jogador não está conectado.

## Especificadores de formato

| Specifier | Significado |
| --------- | --------------------------------------------- |
| %i | Inteiro não assinado |
| %d | Inteiro assinado |
| %s | Corda |
| %f | Número de ponto flutuante |
| %c | Caractere ASCII |
| %x | Número hexadecimal |
| %b | Número binário |
| %% | Literal '%' |
| %q | Escape de um texto para SQLite. (Adicionado em 0.3.7 R2) |

## Exemplos

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    new number = 5;
    SendClientMessagef(playerid, -1, "The variable above is %i", number);
    return 1;
}
```
## Notas

:::tip

Você pode usar a incorporação de cores para várias cores na mensagem. Usar '-1' como cor tornará o texto branco (pela simples razão de que -1, quando representado em notação hexadecimal, é 0xFFFFFFFF).

:::

:::warning

Se uma mensagem tiver mais de 144 caracteres, ela não será enviada. O truncamento pode ser usado para evitar isso. Exibir uma mensagem em várias linhas também resolverá esse problema.

:::

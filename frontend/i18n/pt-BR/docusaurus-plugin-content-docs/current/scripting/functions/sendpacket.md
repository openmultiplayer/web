---
title: sendpacket
sidebar_label: sendpacket
description: "Envia um pacote. (função obsoleta)"
tags: ["datagram"]
---


<LowercaseNote />

:::warning

Esta função está obsoleta. Use o plugin [HTTP](HTTP) ou [solicitações de Pawn](https://github.com/Southclaws/pawn-requests).

:::

## Descrição

Envia um pacote.

| Nome | Descrição |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const packet[] | O buffer que contém o pacote a ser enviado.                                                                                                                                                |
| size | Tamanho do buffer.                                                                                                                                                                                |
| const destination[] = "" | O endereço IP e o número da porta para a qual o pacote deve ser enviado. Se estiver ausente ou for uma string vazia, esta função transmitirá o pacote e usará o número de porta padrão 9930 _(optional="")_ |

## Valores de retorno

**1** em caso de sucesso, **0** em caso de falha.

## Funções Relacionadas

- [@receivepacket](@receivepacket): Um pacote foi recebido.
- [sendstring](sendstring): Envia um pacote contendo uma string.

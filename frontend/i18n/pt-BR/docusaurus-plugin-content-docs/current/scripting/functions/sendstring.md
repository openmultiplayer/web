---
title: sendstring
sidebar_label: sendstring
description: "Envia um pacote contendo uma string. (função obsoleta)"
tags: ["datagram"]
---


<LowercaseNote />

:::warning

Esta função está obsoleta. Use o plugin [HTTP](HTTP) ou [solicitações de Pawn](https://github.com/Southclaws/pawn-requests).

:::

## Descrição

Envia um pacote contendo uma string.

| Nome | Descrição |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const message[] | O buffer que contém a string a ser enviada. Se esta for uma string descompactada, ela será codificada em UTF-8 antes de ser transferida.                                                              |
| const destination[] = "" | O endereço IP e o número da porta para a qual o pacote deve ser enviado. Se estiver ausente ou for uma string vazia, esta função transmitirá o pacote e usará o número de porta padrão 9930 _(optional="")_ |

## Valores de retorno

**1** em caso de sucesso, **0** em caso de falha.

## Funções Relacionadas

- [@receivestring](@receivestring): Um pacote foi recebido.
- [sendpacket](sendpacket): Envia um pacote.

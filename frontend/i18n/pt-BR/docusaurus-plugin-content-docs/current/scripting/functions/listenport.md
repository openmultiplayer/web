---
title: listenport
sidebar_label: listenport
description: "Configura o número da porta para escutar."
tags: ["datagram"]
---


<LowercaseNote />

:::warning

Esta função está obsoleta. Use o plugin [HTTP](HTTP) ou [solicitações de Pawn](https://github.com/Southclaws/pawn-requests).

:::

## Descrição

Configura o número da porta para escutar.

| Nome | Descrição |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| port | O número da porta para escutar. Deve ser um valor entre 1 e 65535, mas você provavelmente deve evitar usar qualquer um dos números de porta reservados. |

## Valores de retorno

Esta função sempre retorna **0**.

## Notas

:::warning

- Você deve chamar esta função **antes** de receber o primeiro pacote. Em outras palavras, você deve configurar uma porta em main.
- Se nenhum número de porta tiver sido escolhido explicitamente, o módulo escutará na porta **9930**.

:::

## Funções Relacionadas

- [@receivestring](@receivestring): Um pacote foi recebido.
- [sendstring](sendstring): Envia um pacote contendo uma string.

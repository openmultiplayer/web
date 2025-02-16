---
title: DeleteSVar
sidebar_label: DeleteSVar
description: Exclui uma variável do servidor definida anteriormente.
tags: []
---

## Descrição

Exclui uma variável do servidor definida anteriormente.

| Nome    | Descrição                                      |
| ------- | ---------------------------------------------- |
| varname | O nome da variável do servidor a ser excluída. |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. Não existe variável definida com o nome fornecido.

## Exemplos

```c
SetSVarInt("SomeVarName", 69);

// Depois, quando a varíavel não for necessária...

DeleteSVar("SomeVarName");
```

## Notas

:::tip

Quando a variável é excluída, tentativas de recuperar o valor irão retornar 0 (para integers/floats e NULL para strings).

:::

## Funções Relacionadas

- [SetSVarInt](SetSVarInt.md): Define um integer para uma variável do servidor.
- [GetSVarInt](GetSVarInt.md): Obtém o servidor do jogador como um integer. Get a player server as an integer.
- [SetSVarString](SetSVarString.md): Define uma string para uma variável do servidor.
- [GetSVarString](GetSVarString.md): Obtém a string definida anteriormente de uma variável do servidor.
- [SetSVarFloat](SetSVarFloat.md): Define um float para uma variável do servidor.
- [GetSVarFloat](GetSVarFloat.md): Obtém o float definido anteriormente de uma variável do servidor.

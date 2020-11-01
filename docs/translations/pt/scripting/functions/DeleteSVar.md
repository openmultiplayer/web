---
title: DeleteSVar
description: Deletes a previously set server variable.
tags: []
---

## Descrição

Deletes a previously set server variable.

| Nome    | Descrição                                  |
| ------- | ------------------------------------------ |
| varname | The name of the server variable to delete. |

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

- [SetSVarInt](SetSVarInt.md): Set an integer for a server variable.
- [GetSVarInt](GetSVarInt.md): Get a player server as an integer.
- [SetSVarString](SetSVarString.md): Set a string for a server variable.
- [GetSVarString](GetSVarString.md): Get the previously set string from a server variable.
- [SetSVarFloat](SetSVarFloat.md): Set a float for a server variable.
- [GetSVarFloat](GetSVarFloat.md): Get the previously set float from a server variable.

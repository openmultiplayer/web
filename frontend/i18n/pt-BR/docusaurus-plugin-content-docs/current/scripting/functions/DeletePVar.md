---

title: DeletePVar
sidebar\_label: DeletePVar
description: Apaga uma variável de jogador definida anteriormente.
tags: \["player variable", "pvar"]
----------------------------------

## descrição

Apaga uma variável de jogador que foi definida antes.

| Nome          | Descrição                                 |
| ------------- | ----------------------------------------- |
| playerid      | ID do jogador cuja variável será apagada. |
| const pvar\[] | Nome da variável do jogador a apagar.     |

## retorno

**true** - A função executou com sucesso.

**false** - A função falhou. Ou o jogador não está conectado ou a variável com esse nome não existe.

## exemplo

```c
SetPVarInt(playerid, "SomeVarName", 69);

// Mais tarde, quando a variável já não for necessária...

DeletePVar(playerid, "SomeVarName");
```

## notas

## funções relacionadas

* [SetPVarInt](SetPVarInt): Define um inteiro numa variável do jogador.
* [GetPVarInt](GetPVarInt): Obtém um inteiro previamente definido numa variável do jogador.
* [SetPVarString](SetPVarString): Define uma string numa variável do jogador.
* [GetPVarString](GetPVarString): Obtém uma string previamente definida numa variável do jogador.
* [SetPVarFloat](SetPVarFloat): Define um float numa variável do jogador.
* [GetPVarFloat](GetPVarFloat): Obtém um float previamente definido numa variável do jogador.

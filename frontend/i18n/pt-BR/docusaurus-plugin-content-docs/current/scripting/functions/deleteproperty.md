---

title: deleteproperty
sidebar\_label: deleteproperty
description: Apaga uma propriedade definida anteriormente (setproperty).
tags: \["core", "property"]
---------------------------

<LowercaseNote />

## descrição

Apaga uma propriedade definida anteriormente com [setproperty](setproperty).

| Nome    | Descrição                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------- |
| id      | Máquina virtual a usar. Deve manter-se como zero. *(opcional=0)*                                        |
| name\[] | Nome da propriedade. Deve deixar-se em branco ("").                                                     |
| value   | ID único da propriedade. Use uma função hash para calcular a partir de uma string. *(opcional=cellmin)* |

## retorno

O valor da propriedade. Se não existir, retorna 0.

## exemplo

```c
deleteproperty(0, "", 123984334);
```

## notas

## funções relacionadas

* [setproperty](setproperty): Define uma propriedade.
* [getproperty](getproperty): Obtém o valor de uma propriedade.
* [existproperty](existproperty): Verifica se uma propriedade existe.

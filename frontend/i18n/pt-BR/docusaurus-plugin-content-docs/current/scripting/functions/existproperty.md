---
title: existproperty
sidebar_label: existproperty
description: "Verifique se existe uma propriedade."
tags: ["core", "property"]
---


<LowercaseNote />

## Descrição

Verifique se existe uma propriedade.

| Nome | Descrição |
| ------ | --------------------------------------------------------------------------------------------------- |
| id | A máquina virtual a ser usada, você deve manter este zero. _(opcional=0)_ |
| name[] | O nome da propriedade, você deve manter este "".                                                       |
| valor | O ID exclusivo da propriedade. Use a função hash para calculá-lo a partir de uma string. _(opcional=célulamin)_ |

## Retornos

True se a propriedade existir e false caso contrário.

## Exemplos

```c
if (existproperty(0, "", 123984334))
{
    // A propriedade existe; faça algo
}
```
## Notas

:::tip

Recomenda-se utilizar o plugin PVars/SVars ou GVar no lugar desses nativos por serem muito lentos.

:::

## Funções Relacionadas

- [setproperty](setproperty): Defina uma propriedade.
- [getproperty](getproperty): obtém o valor de uma propriedade.
- [deleteproperty](deleteproperty): Exclui uma propriedade.

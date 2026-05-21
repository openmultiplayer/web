---
title: getproperty
sidebar_label: getproperty
description: "Obtenha uma propriedade específica da memória, a string é retornada como uma string compactada!"
tags: ["core", "property"]
---


<LowercaseNote />

## Descrição

Obtenha uma propriedade específica da memória, a string é retornada como uma string compactada!

| Nome | Descrição |
| -------- | --------------------------------------------------------------------------------------------------- |
| id | A máquina virtual a ser usada, você deve manter este zero. _(opcional=0)_ |
| name[] | O nome da propriedade, você deve manter este "".                                                       |
| valor | O ID exclusivo da propriedade. Use a função hash para calculá-lo a partir de uma string. _(opcional=célulamin)_ |
| string[] | A variável para armazenar o resultado, passada por referência.                                           |

## Retornos

O valor de uma propriedade quando o nome é passado; preenche o argumento string quando o valor é passado. Se a propriedade não existir, esta função retornará zero.

## Exemplos

```c
new value[16];

getproperty(0, "", 123984334, value);

strunpack(value, value, sizeof(value));

print(value);
```
## Notas

:::tip

Recomenda-se utilizar o plugin PVars/SVars ou GVar no lugar desses nativos por serem muito lentos.

:::

## Funções Relacionadas

- [setproperty](setproperty): Defina uma propriedade.
- [deleteproperty](deleteproperty): Exclui uma propriedade.
- [existproperty](existproperty): Verifica se existe uma propriedade.

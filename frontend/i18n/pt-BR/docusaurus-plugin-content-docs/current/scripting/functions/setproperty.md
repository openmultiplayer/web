---
title: setproperty
sidebar_label: setproperty
description: "Adicione uma nova propriedade ou altere uma propriedade existente."
tags: ["core", "property"]
---


<LowercaseNote />

## Descrição

Adicione uma nova propriedade ou altere uma propriedade existente.

| Nome | Descrição |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| id | A máquina virtual a ser usada, você deve manter este zero. _(opcional=0)_ |
| name[] | Usado em combinação com valor ao armazenar números inteiros; não use isso se quiser armazenar uma string.                                                   |
| valor | O valor inteiro a ser armazenado ou o ID exclusivo da propriedade, se estiver armazenando uma string. Use a função hash para calculá-lo a partir de uma string. _(opcional=célulamin)_ |
| string[] | O valor da propriedade, como uma string. Não use isso se quiser armazenar um número inteiro.                                                               |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
setproperty(.name = "MyInteger", .value = 42);

new value = getproperty(.name = "MyInteger");
printf("Value that was stored is: %d", value);
setproperty(0, "", 123984334, ":)");

new value[4];
getproperty(0, "", 123984334, value);
strunpack(value, value, sizeof(value)); // precisamos descompactar a string primeiro
print(value);

//deveria imprimir:)
setproperty(.value = 123984334, .string = ":)");

// O resto é igual ao anterior.
```
## Notas

:::tip

Recomenda-se utilizar o plugin PVars/SVars ou GVar no lugar desses nativos por serem muito lentos.

:::

## Funções Relacionadas

- [getproperty](getproperty): obtém o valor de uma propriedade.
- [deleteproperty](deleteproperty): Exclui uma propriedade.
- [existproperty](existproperty): Verifica se existe uma propriedade.

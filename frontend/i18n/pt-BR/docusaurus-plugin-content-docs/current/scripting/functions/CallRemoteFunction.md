---
title: CallRemoteFunction
sidebar_label: CallRemoteFunction
description: Chama uma função pública em qualquer script que esteja carregado.
tags: ["core"]
---

## Descrição

Chama uma função pública em qualquer script que esteja carregado.

| Nome                 | Descrição                                   |
| -------------------- | ------------------------------------------- |
| const functionName[] | Nome da função pública.                     |
| const specifiers[]   | Tag/formato de cada variável                |
| OPEN_MP_TAGS:...     | Número 'indefinido' de argumentos de qualquer tag |

## Retorno

O valor que a última função pública retornou.

## Especificadores de Formato

| **Placeholder** | **Significado**                                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a`             | Passa um array (o próximo placeholder deve ser d ou i para o tamanho do array, para que a função esteja ciente disso).<br/><br/>**NOTA**: Aceita apenas uma dimensão, então um truque como sizeof (array) + sizeof (array) \* sizeof (array[]) para o tamanho do array seria necessário para passar um array 2D. |
| `c`             | Passa um único caractere.                                                                                                                                                                                                                                                                        |
| `d`,`i`         | Passa um número inteiro (número inteiro).                                                                                                                                                                                                                                                        |
| `x`             | Passa um número em notação hexadecimal.                                                                                                                                                                                                                                                          |
| `f`             | Passa um número de ponto flutuante.                                                                                                                                                                                                                                                              |
| `s`             | Passa uma string.                                                                                                                                                                                                                                                                                 |

## Exemplos

```c
forward CallMe(number, const string[]);
public CallMe(number, const string[])
{
    printf("CallMe chamada. Int: %i  String: %s.", number, string);
    return 1;
}

// Em algum lugar... em outro arquivo talvez?
CallRemoteFunction("CallMe", "is", 69, "esta é uma string");
```

## Notas

:::warning

CallRemoteFunction trava o servidor se estiver passando uma string vazia. (Corrigido no open.mp)

:::

## Funções Relacionadas

- [CallLocalFunction](CallLocalFunction): Chama uma função no script.
---
title: CallLocalFunction
sidebar_label: CallLocalFunction
description: Chama uma função pública do script no qual é usada.
tags: ["core"]
---

## Descrição

Chama uma função pública do script no qual é usada.

| Nome                 | Descrição                                   |
| -------------------- | ------------------------------------------- |
| const functionName[] | Nome da função pública.                     |
| const specifiers[]   | Tag/formato de cada variável                |
| OPEN_MP_TAGS:...     | Número 'indefinido' de argumentos de qualquer tag |

## Retorno

Se a função existe, retorna o mesmo que a função chamada.

Se a função não existe, retorna 0.

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
forward publicFunc(number, Float:flt, const string[]);
public publicFunc(number, Float:flt, const string[])
{
    printf("Recebido inteiro %i, float %f, string %s", number, flt, string);
    return 1;
}

CallLocalFunction("publicFunc", "ifs", 420, 68.999999999, "Hello world");
```

## Notas

:::warning

CallLocalFunction trava o servidor se estiver passando uma string vazia. (Corrigido no open.mp)

:::

## Funções Relacionadas

- [CallRemoteFunction](CallRemoteFunction): Chama uma função em qualquer script carregado.
---
title: CallLocalFunction
description: Chama uma função pública do script em que é usada.
tags: []
---

## Descrição

Chama uma função pública do script em que é usada

| Nome           | Descrição                                         |
| -------------- | ------------------------------------------------- |
| function[]     | Nome da função pública.                           |
| format[]       | Tag/formato de cada variável                      |
| {Float,\_}:... | Número 'indefinido' de argumentos de qualquer tag |

## Retorno

Se a função existir, retorna o mesmo que a função chamada. Se a função não existir, retorna 0.

## Especificadores de formato

| **Especificador** | **Significado**                                                                                                                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a`             | Avalia uma matriz (o próximo espaço reservado deve ser d ou i para o tamanho da matriz, para que a função esteja ciente disso).<br/><br/>**NOTA**: Aceita apenas uma dimensão, portanto, um truque como sizeof (array) + sizeof (array) \* sizeof (array[]) para o tamanho do array seria necessário para passar um array 2D. |
| `c`             | Passa um único caracter.                                                                                                                                                                                                                                                                    |
| `d`,`i`         | Passa um número inteiro.                                                                                                                                                                                                                                                             |
| `x`             | Passa um número em notação hexadecimal.                                                                                                                                                                                                                                                      |
| `f`             | Passa um float.                                                                                                                                                                                                                                                               |
| `s`             | Passa uma string.                                                                                                                                                                                                                                                                              |

## Exemplos

```c
forward funcaoPublica(numero, Float:flt, const string[]);
public funcaoPublica(numero, Float:flt, const string[])
{
    printf("Recebeu o inteiro %i, float %f, e a string %s", numero, flt, string);
    return 1;
}

CallLocalFunction("funcaoPublica", "ifs", 420, 68.999999999, "Olá Mundo");
```

## Notas

:::warning

CallLocalFunction crasha o servidor se estiver passando uma string vazia.

:::

## Funções Relacionadas

- [CallRemoteFunction](CallRemoteFunction): Chame uma função em qualquer script carregado.

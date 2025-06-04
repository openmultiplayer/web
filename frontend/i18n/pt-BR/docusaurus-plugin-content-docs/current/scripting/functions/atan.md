---
title: atan
sidebar_label: atan
description: Obter o valor inverso de uma tangente em graus.
tags: ["math"]
---

<LowercaseNote />

## Descrição

Obter o valor inverso de uma tangente em graus. Em trigonometria, arco tangente é a operação inversa da tangente. Note que devido à ambiguidade de sinal, a função não consegue determinar com certeza em qual quadrante o ângulo se encontra apenas pelo seu valor de tangente. Veja [atan2](atan2) para uma alternativa que aceita um argumento fracional.

| Nome        | Descrição                               |
| ----------- | --------------------------------------- |
| Float:value | valor cujo arco tangente é calculado.  |

## Retorno

O ângulo em graus, no intervalo [-90.0,+90.0].

## Exemplos

```c
//O arco tangente de 1.000000 é 45.000000 graus.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("O arco tangente de %f é %f graus.", param, result);
    return 1;
}
```

## Funções Relacionadas

- [floatsin](floatsin): Obter o seno de um ângulo específico.
- [floatcos](floatcos): Obter o cosseno de um ângulo específico.
- [floattan](floattan): Obter a tangente de um ângulo específico.
- [asin](asin): Obter o valor inverso de um seno em graus.
- [acos](acos): Obter o valor inverso de um cosseno em graus.
- [atan2](atan2): Obter o valor inverso multivalorado de uma tangente em graus.
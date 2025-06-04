---
title: asin
sidebar_label: asin
description: Obter o valor inverso de um seno em graus.
tags: ["math"]
---

<LowercaseNote />

## Descrição

Obter o valor inverso de um seno em graus. Em trigonometria, arco seno é a operação inversa do seno.

| Nome        | Descrição                                                |
| ----------- | -------------------------------------------------------- |
| Float:value | valor cujo arco seno é calculado, no intervalo [-1,+1]. |

## Retorno

O ângulo em graus, no intervalo [-90.0,+90.0].

## Exemplos

```c
//O arco seno de 0.500000 é 30.000000 graus.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin(param);
    printf("O arco seno de %f é %f graus.", param, result);
    return 1;
}
```

## Funções Relacionadas

- [floatsin](floatsin): Obter o seno de um ângulo específico.
- [floatcos](floatcos): Obter o cosseno de um ângulo específico.
- [floattan](floattan): Obter a tangente de um ângulo específico.
- [acos](acos): Obter o valor inverso de um cosseno em graus.
- [atan](atan): Obter o valor inverso de uma tangente em graus.
- [atan2](atan2): Obter o valor inverso multivalorado de uma tangente em graus.
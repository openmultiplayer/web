---
title: acos
sidebar_label: acos
description: Obter o valor invertido de um cosseno em graus.
tags: ["math"]
---

<LowercaseNote />

## Descrição

Obter o valor invertido de um cosseno em graus. Na trigonometria, o arco cosseno é a operação inversa do cosseno.

| Nome        | Descrição                                                    |
| ----------- | ------------------------------------------------------------ |
| Float:value | valor cujo arco cosseno é calculado, no intervalo [-1,+1]. |

## Retorno

O ângulo em graus, no intervalo [0.0,180.0].

## Exemplos

```c
//O arco cosseno de 0,500000 é de 60,000000 graus.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("O arco cosseno de %f é %f graus.", param, result);
    return 1;
}
```

## Funções Relacionadas

- [floatsin](floatsin): Obter o seno de um ângulo específico.
- [floatcos](floatcos): Obter o cosseno de um ângulo específico.
- [floattan](floattan): Obter a tangente de um ângulo específico.
- [asin](asin): Obter o valor invertido de um seno em graus.
- [atan](atan): Obter o valor invertido de uma tangente em graus.
- [atan2](atan2): Obter o valor invertido múltiplo de uma tangente em graus.

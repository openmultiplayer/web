---
title: atan2
sidebar_label: atan2
description: Obter o valor inverso multivalorado de uma tangente em graus.
tags: ["math"]
---

<LowercaseNote />

:::warning
Note que o valor y é o primeiro parâmetro e o valor x é o segundo parâmetro. Isso ocorre porque a notação matemática é y/x (isto é, y dividido por x) e a convenção é escrever os operandos na ordem da operação que é executada sobre eles.
:::

## Descrição

Obter o valor inverso multivalorado de uma tangente em graus. Em trigonometria, arco tangente é a operação inversa da tangente. Para calcular o valor, a função leva em conta o sinal de ambos os argumentos para determinar o quadrante.

| Nome    | Descrição                                                     |
| ------- | ------------------------------------------------------------- |
| Float:y | valor representando a proporção da coordenada y.              |
| Float:x | valor representando a proporção da coordenada x.              |

## Retorno

O ângulo em graus, no intervalo [-180.0,+180.0].

## Exemplos

```c
//O arco tangente para (x=-10.000000, y=10.000000) é 135.000000 graus.

public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2(y, x);
    printf("O arco tangente para (x=%f, y=%f) é %f graus.", x, y, result);
    return 1;
}
```

## Funções Relacionadas

- [floatsin](floatsin): Obter o seno de um ângulo específico.
- [floatcos](floatcos): Obter o cosseno de um ângulo específico.
- [floattan](floattan): Obter a tangente de um ângulo específico.
- [asin](asin): Obter o valor inverso de um seno em graus.
- [acos](acos): Obter o valor inverso de um cosseno em graus.
- [atan](atan): Obter o valor inverso de uma tangente em graus.
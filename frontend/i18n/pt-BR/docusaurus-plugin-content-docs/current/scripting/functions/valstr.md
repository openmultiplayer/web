---
title: valstr
sidebar_label: valstr
description: "Converta um número inteiro em uma string."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Converta um número inteiro em uma string.

| Nome | Descrição |
| ----------------- | ------------------------------------------------- |
| dest | O destino da string.                    |
| valor | O valor a ser convertido em uma string.                 |
| pack _(optional)_ | Se deve embalar o destino (desativado por padrão). |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new string[4];
new value = 250;
valstr(string, value); // string agora é "250"
```
## Notas

:::warning

Passar um valor alto para esta função pode fazer com que o servidor congele/trave. Correções estão disponíveis. Abaixo está uma correção que pode ser colocada diretamente no seu script (antes que valstr seja usado em qualquer lugar). open.mp inclui essa correção.

```c
// correção de valstr por Slice
stock FIX_valstr(dest[], value, bool:pack = false)
{
    // o formato não consegue lidar com o cellmin corretamente
    static const cellmin_value[] = !"-2147483648";

    if (value == cellmin)
        pack && strpack(dest, cellmin_value, 12) || strunpack(dest, cellmin_value, 12);
    else
        format(dest, 12, "%d", value), pack && strpack(dest, dest, 12);
}
#define valstr FIX_valstr
```
:::

## Funções Relacionadas

- [strval](strval): Converte uma string em um número inteiro.
- [strcmp](strcmp): Compare duas strings para verificar se são iguais.

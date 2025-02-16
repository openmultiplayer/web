---
title: gettime
sidebar_label: gettime
description: Retorna o horário atual do servidor, aonde será guardado nas variáveis &hora, &minuto e &segundo.
tags: []
---

<LowercaseNote />

## Descrição

Retorna o horário atual do servidor, aonde será guardado nas variáveis &hora, &minuto e &segundo.

| Name       | Descrição                                                      |
| ---------- | -------------------------------------------------------------- |
| &hora=0    | A variável para armazenar a hora, passada por referência.      |
| &minuto=0  | A variável para armazenar o minuto, passada por referência.    |
| &segundo=0 | A variável para armazenar os segundos, passada por referência. |

## Retorno

A própria função se retorna em Unix Timestamp.

## Exemplos

```c
new
  horas,
  minutos,
  segundos,
  timestamp;

timestamp = gettime(horas, minutos, segundos);
printf("%02d:%02d:%02d", horas, minutos, segundos);
printf("Segundos desde meia noite de 1º de Janeiro de 1970: %d", timestamp);
```

## Notas

:::tip

Esta função é útil para medir intervalos de tempo usando suas características de timestamp. Isso pode ser particularmente útil se você quiser restringir algumas funcionalidades com base em um tempo (por exemplo, um comando que só pode ser executado a cada 30 segundos). Usando esse método, você não precisa depender de timers.

:::

## Funções Relacionadas

- [getdate](getdate): Retorna a data atual do servidor.

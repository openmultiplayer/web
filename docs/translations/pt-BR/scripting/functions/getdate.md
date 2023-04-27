---
title: getdate
description: Retorna a data atual do servidor, que será armazenada nas variáveis &ano, &mes e &dia
tags: []
---

<LowercaseNote />

## Descrição

Retorna a data atual do servidor, que será armazenada nas variáveis &ano, &mes e &dia

| Nome       | Descrição                                                      |
| ---------- | -------------------------------------------------------------- |
| &ano=0      | A variável para armazenar a hora, passada por referência.      |
| &mes=0      | A variável para armazenar o minuto, passada por referência.    |
| &dia=0      | A variável para armazenar os segundos, passada por referência. |

## Retorno

O número de dias desde o início do ano.

## Exemplos

```
new ano, mes, dia, dias;

dias = getdate(ano, mes, dia);
printf("%02d/%02d/%d", dia, mes, ano);
printf("Dias desde o início do ano: %d", dias);
```

## Funções Relacionadas

- [gettime](gettime): Obtenha a hora atual do servidor como um registro de data e hora unix.

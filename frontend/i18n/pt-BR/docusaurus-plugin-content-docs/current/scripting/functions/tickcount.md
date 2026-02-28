---
title: tickcount
sidebar_label: tickcount
description: Retorna o número de milissegundos desde a inicialização do servidor.
tags: ["time"]
---

<LowercaseNote />

## Descrição

Esta função pode ser usada como substituição para GetTickCount, pois retorna o número de milissegundos desde a inicialização do servidor.

| Name           | Description                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| &granularity=0 | Ao retornar, este valor contém o número de ticks que o tempo interno do sistema marca por segundo. Portanto, este valor indica a precisão do valor de retorno desta função.             |

## Retorno

O número de milissegundos desde a inicialização do sistema. Para uma célula de 32 bits, essa contagem sofre overflow após aproximadamente 24 dias de operação contínua.

## Funções Relacionadas

- [GetTickCount](GetTickCount): Obtém o tempo de atividade do servidor.

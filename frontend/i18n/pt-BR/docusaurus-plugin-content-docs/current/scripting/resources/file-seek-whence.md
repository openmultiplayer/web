---
title: Origem do Deslocamento de Arquivo
sidebar_label: Origem do Deslocamento de Arquivo
description: Definições de origem de deslocamento de arquivo. (fseek)
---

:::note

Essas definições são usadas por [fseek](../functions/fseek).

:::

| Definition   | Description                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| seek_start   | Define a posição do arquivo em relação ao início do arquivo (o parâmetro de posição deve ser positivo).             |
| seek_current | Define a posição do arquivo em relação à posição atual: o parâmetro de posição é somado à posição atual.            |
| seek_end     | Define a posição do arquivo em relação ao final do arquivo (o parâmetro de posição deve ser zero ou negativo).      |

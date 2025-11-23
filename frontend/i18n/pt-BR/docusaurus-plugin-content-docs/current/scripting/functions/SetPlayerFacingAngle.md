---
title: SetPlayerFacingAngle
sidebar_label: SetPlayerFacingAngle
description: Define o ângulo para qual o jogador está voltado (olhando) (rotação Z).
tags: []
---

## Descrição

Define o ângulo para qual o jogador está voltado (olhando) (rotação Z).

| Nome       | Descrição                                  |
| ---------- | ------------------------------------------ |
| playerid   | O ID do jogador para definir o ângulo.     |
| Float: ang | O ângulo que o jogador deve estar voltado. |

## Retorno

1: A função foi executada com sucesso.

0: Falha ao executar a função. O jogador especificado não existe.

## Exemplos

```c
SetPlayerFacingAngle(playerid, 0); // Posiciona o jogador para o norte.
```

```c
        norte (0)
           |
(90) oeste- -east (270) (Boa maneira de lembrar: Never Eat Shredded Wheat)
           |
        sul (180)
```

## Notas

:::warning

Os ângulos são invertidos no GTA: SA; 90 graus seria o leste no mundo real, mas no GTA: SA 90 graus seria na verdade o oeste. Norte e Sul ainda são 0/360 e 180. Para converter isso, basta fazer 360 - ângulo.

:::

## Funções Relacionadas

- [GetPlayerFacingAngle](GetPlayerFacingAngle): Verifica para onde o jogador está voltado.
- [SetPlayerPos](SetPlayerPos): Define a posição de um jogador.

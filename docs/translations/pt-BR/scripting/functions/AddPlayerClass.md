---
title: AddPlayerClass
description: Adiciona uma classe à seleção de classes. As classes são usadas para que os jogadores possam aparecer com uma skin (personagem) de sua escolha.
tags: []
---

## Descrição

Adiciona uma classe à seleção de classes. As classes são usadas para que os jogadores possam aparecer com uma skin (personagem) de sua escolha.

| Nome           | Descrição                                                 |
| -------------- | --------------------------------------------------------- |
| modelid        | A skin com a qual o jogador irá dar spawn.                |
| Float: spawn_x | A coordenada X do ponto de spawn desta classe.            |
| Float: spawn_y | A coordenada Y do ponto de spawn desta classe.            |
| Float: spawn_z | A coordenada Z do ponto de desova desta classe.           |
| Float: z_angle | O ângulo Z que o jogador deverá ser voltado após o spawn. |
| weapon1        | A primeira arma com que o jogador irá dar spawn.          |
| weapon1_ammo   | A quantidade de munição para a arma primária.             |
| weapon2        | A segunda arma com que o jogador irá dar spawn.           |
| weapon2_ammo   | A quantidade de munição para a arma secundária.           |
| weapon3        | A terceira arma com que o jogador irá dar spawn.          |
| weapon3_ammo   | A quantidade de munição para a arma terciária.            |

## Retorno

O ID da classe que acabou de ser adicionada.

319 se o limite da classe (320) foi atingido. O maior ID de classe possível é 319.

## Exemplos

```c
public OnGameModeInit()
{
    // Os jogadores podem escolher entre dar spawn com a skin do CJ (0) ou a skin do The Truth (1).
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notas

:::tip

A identificação máxima da classe é 319 (começando em 0, portanto, um total de 320 classes). Quando esse limite for atingido, quaisquer outras classes adicionadas substituirão a ID 319.

:::

## Funções Relacionadas

- [AddPlayerClassEx](AddPlayerClassEx): Adiciona uma classe com uma equipe padrão.
- [SetSpawnInfo](SetSpawnInfo): Define a configuração de spawn para um jogador.
- [SetPlayerSkin](SetPlayerSkin): Define a skin (personagem) de um jogador.

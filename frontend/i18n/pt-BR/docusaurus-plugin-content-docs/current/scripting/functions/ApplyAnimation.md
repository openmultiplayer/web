---
title: ApplyAnimation
sidebar_label: ApplyAnimation
description: Aplica uma animação a um jogador.
---

## Descrição

Aplica uma animação a um jogador.

| Nome       | Descrição                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid   | O ID do jogador a aplicar a animação.                                                                                                                                                                                                                                                                                                                |
| animlib[]  | A biblioteca de animação da qual aplicar a animação.                                                                                                                                                                                                                                                                                                 |
| animname[] | O nome da animação a aplicar, dentro da biblioteca especificada.                                                                                                                                                                                                                                                                                     |
| fDelta     | A velocidade para reproduzir a animação (use 4.1).                                                                                                                                                                                                                                                                                                   |
| loop       | Se 1, a animação irá repetir. Se definido 0, a animação vai reproduzir uma vez.                                                                                                                                                                                                                                                                      |
| lockx      | Se 0, o ator irá retornar à sua coordenada X antiga assim que a animação concluir(para animações que o ator se mova, como caminhar). 1 não irá retornar à posição antiga.                                                                                                                                                                            |
| locky      | O mesmo que acima, mas para o eixo Y. Same as above but for the Y axis. Deve ser mantido igual ao parâmetro anterior.                                                                                                                                                                                                                                |
| freeze     | Definir para 1 vai congelar o ator no fim da animação. 0 não irá congelar.                                                                                                                                                                                                                                                                           |
| time       | Tempo em milisegundos. Para um ciclo infinito o valor deve ser 0.                                                                                                                                                                                                                                                                                    |
| forcesync  | Defina como 1 para fazer o servidor sincronizar a animação com todos os outros jogadores num raio de streaming (opcional). 2 funciona da mesma forma que 1, mas APENAS aplicará a animação a jogadores em stream, mas NÃO o jogador a ser animado (útil para animações com NPC e animações persistentes quando os jogadores estão a ser streamados). |

## Retorno

Esta função sempre retorna 1, mesmo que o player especificado não exista, ou qualquer um dos parâmetros seja inválido (por exemplo, biblioteca inválida).

## Exemplos

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, 1, 1, 1, 1, 1, 1);
```

## Notas

:::tip

O parâmetro opcional 'forcesync', cujo padrão é 0, na maioria dos casos não é necessário pois os jogadores sincronizam as animações. O parâmetro 'forcesync' pode forçar todos os jogadores que consigam ver o 'playerid' a reproduzir a animação, independentemente do jogador estar executando a animação. Isso é útil em circunstâncias em que o jogador não consiga sincronizar a animação sozinho. Por exemplo, eles podem estar em pausa.

:::

:::warning

Uma biblioteca de animação inválida irá crashar o jogo do jogador.

:::

## Funções Relacionadas

- [ClearAnimations](ClearAnimations): Limpe qualquer animação aplicada a um ator.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Define uma ação especial a um jogador.

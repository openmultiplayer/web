---
title: ApplyActorAnimation
description: Aplica uma animação a um ator.
tags: []
---

Esta função foi implementada no SA-MP 0.3.7 e não funcionará em versões anteriores.

## Descrição

Aplica uma animação a um ator.

| Nome       | Descrição                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actorid    | O ID do ator a aplicar a animação.                                                                                                                                                |
| animlib[]  | A biblioteca de animação da qual aplicar a animação.                                                                                                                              |
| animname[] | O nome da animação a aplicar, dentro da biblioteca especificada.                                                                                                                  |
| fDelta     | A velocidade para reproduzir a animação (use 4.1).                                                                                                                                |
| loop       | Se definido 1, a animação irá repetir. Se definido 0, a animação vai reproduzir uma vez.                                                                                          |
| lockx      | Se definido 0, o ator vai retornar à sua coordenada X antiga, assim que a animação concluir (para animações que o ator move, como caminhar). 1 não irá retornar à posição antiga. |
| locky      | O mesmo que acima, mas para o eixo Y. Same as above but for the Y axis. Deve ser mantido igual ao parâmetro anterior.                                                             |
| freeze     | Definir para 1 vai congelar o ator no fim da animação. 0 não irá congelar.                                                                                                        |
| time       | Tempo em milisegundos. Para um ciclo infinito o valor deve ser 0.                                                                                                                 |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou a ser executada. O ator específico não existe.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ator como vendedor na Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, 0, 0, 0, 0, 0); // Anim de pagamento
    return 1;
}
```

## Notas

:::tip

Você deve pré-carregar a biblioteca de animações para o jogador ao qual o ator irá aplicar a animação, e não para o ator. Caso contrário a animação não será aplicada ao ator até que a função seja executada novamente.

:::

## Funções Relacionadas

- [ClearActorAnimations](ClearActorAnimations.md): Limpe qualquer animação aplicada a um ator.

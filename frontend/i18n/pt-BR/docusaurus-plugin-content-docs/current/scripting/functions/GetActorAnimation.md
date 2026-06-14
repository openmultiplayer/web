---
title: GetActorAnimation
sidebar_label: GetActorAnimation
description: "Obtenha a animação que o ator está realizando no momento."
tags: ["actor"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a animação que o ator está realizando no momento.

| Nome | Descrição |
| ------------------ | -------------------------------------------------------------------------- |
| actorid | O ID do ator para obter a animação.                               |
| animationLibrary[] | Uma matriz na qual armazenar a animaçãoLibrary, passada por referência. |
| librarySize | O tamanho da matriz AnimationLibrary.                                    |
| animationName[] | Uma matriz na qual armazenar o AnimationName, passada por referência.    |
| nameSize | O tamanho da matriz AnimationName.                                       |
| &Float:delta | Uma variável flutuante na qual armazenar o delta, passada por referência.    |
| &bool:loop | Uma variável booleana na qual armazenar o loop, passada por referência.   |
| &bool:lockX | Uma variável float na qual armazenar o lockX, passada por referência.    |
| &bool:lockY | Uma variável flutuante na qual armazenar o lockY, passada por referência.    |
| &bool:freeze | Uma variável booleana na qual armazenar o congelamento, passada por referência. |
| &time | Uma variável na qual armazenar a hora, passada por referência.           |

## Valores de retorno

Retorna **true** se o ator for válido, caso contrário, retorna **false**.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    ApplyActorAnimation(gMyActor, "PED", "IDLE_CHAT", 4.1, true, true, true, true, 0);

    new animationLibrary[32],
        animationName[32],
        Float:delta,
        bool:loop,
        bool:lockX,
        bool:lockY,
        bool:freeze,
        time;

    GetActorAnimation(gMyActor, animationLibrary, sizeof animationLibrary, animationName, sizeof animationName, delta, loop, lockX, lockY, freeze, time);
    return 1;
}
```
## Funções Relacionadas

- [CreateActor](CreateActor): Crie um ator (estático NPC).
- [ApplyActorAnimation](ApplyActorAnimation): Aplique uma animação a um ator.
- [ClearActorAnimations](ClearActorAnimations): Limpa todas as animações aplicadas a um ator.

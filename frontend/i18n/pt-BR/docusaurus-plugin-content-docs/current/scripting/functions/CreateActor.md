---
title: CreateActor
sidebar_label: CreateActor
description: Cria um 'ator' estático no mundo.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Cria um 'ator' estático no mundo. Estes 'atores' são como NPCs, porém têm funcionalidade limitada. Eles não ocupam slots de jogadores do servidor.

| Nome        | Descrição                                                 |
| ----------- | --------------------------------------------------------- |
| skin        | O [ID do modelo](../resources/skins) que o ator deve ter. |
| Float:x     | A coordenada X onde criar o ator.                        |
| Float:y     | A coordenada Y onde criar o ator.                        |
| Float:z     | A coordenada Z onde criar o ator.                        |
| Float:angle | O ângulo de direção (rotação) que o ator deve ter.       |

## Retorno

O ID do ator criado (começando em 0).

INVALID_ACTOR_ID (65535) se o limite de atores (1000) for atingido.

## Exemplos

```c
new gActorCJ;

public OnGameModeInit()
{
    // Cria um ator (CJ) em Blueberry Acres (Centro do mapa SA)
    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
}

public OnGameModeExit()
{
    // Destrói nosso querido ator (CJ)
    DestroyActor(gActorCJ);
}
```

## Notas

:::tip

Atores são projetados para apenas ficar em algum lugar, por exemplo caixas e bartenders. Eles podem executar animações (uma vez ou em loop) usando [ApplyActorAnimation](ApplyActorAnimation).

:::

:::warning

- Atores são completamente separados dos NPCs. Eles NÃO usam IDs/slots de jogadores no servidor e NÃO PODEM ser manipulados como NPCs. Atores são limitados a 1000 (MAX_ACTORS).
- Atores podem ser empurrados por veículos, use um timer para colocá-los de volta em suas posições.
- Atores são invulneráveis por padrão.

:::

## Funções Relacionadas

- [DestroyActor](DestroyActor): Destrói um ator.
- [SetActorPos](SetActorPos): Define a posição de um ator.
- [GetActorPos](GetActorPos): Obtém a posição de um ator.
- [GetActorSpawnInfo](GetActorSpawnInfo): Obtém o ponto de spawn inicial do ator.
- [SetActorFacingAngle](SetActorFacingAngle): Define o ângulo de direção de um ator.
- [GetActorFacingAngle](GetActorFacingAngle): Obtém o ângulo de direção de um ator.
- [SetActorVirtualWorld](SetActorVirtualWorld): Define o mundo virtual de um ator.
- [GetActorVirtualWorld](GetActorVirtualWorld): Obtém o mundo virtual de um ator.
- [ApplyActorAnimation](ApplyActorAnimation): Aplica uma animação a um ator.
- [ClearActorAnimations](ClearActorAnimations): Limpa todas as animações aplicadas a um ator.
- [GetActorAnimation](GetActorAnimation): Obtém a animação que o ator está executando atualmente.
- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Obtém o ID do ator (se houver) que um jogador está olhando.
- [IsActorStreamedIn](IsActorStreamedIn): Verifica se um ator está transmitido para um jogador.
- [SetActorSkin](SetActorSkin): Define a skin do ator.
- [GetActorSkin](GetActorSkin): Obtém a skin do ator.
- [SetActorHealth](SetActorHealth): Define a vida de um ator.
- [GetActorHealth](GetActorHealth): Obtém a vida de um ator.
- [SetActorInvulnerable](SetActorInvulnerable): Define o ator como invulnerável.
- [IsActorInvulnerable](IsActorInvulnerable): Verifica se o ator é invulnerável.
- [IsValidActor](IsValidActor): Verifica se o ID do ator é válido.
- [GetActorPoolSize](GetActorPoolSize): Obtém o maior actorid criado no servidor.
- [GetPlayerTargetActor](GetPlayerTargetActor): Obtém o ID de um ator que está sendo mirado por um determinado jogador.

## Callbacks Relacionados

- [OnActorStreamIn](../callbacks/OnActorStreamIn): Chamado quando um ator é transmitido para um jogador.
- [OnActorStreamOut](../callbacks/OnActorStreamOut): Chamado quando um ator para de ser transmitido para um jogador.
- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): Este callback é chamado quando um jogador causa dano a um ator.
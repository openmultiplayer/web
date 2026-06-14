---
slug: turfs-formerly-gangzones-module
title: Módulo de Turfs (anteriormente gangzones)
authors: j0sh
---

Olá! Acabei de terminar nossa implementação de Turf no servidor e pensei em publicar uma visão geral deste módulo e mostrar que não desistimos nem nada do tipo!

<!-- truncate -->

:::warning

O conteúdo da publicação abaixo está desatualizado e não reflete o estado atual do open.mp. A publicação está disponível aqui para fins de arquivamento.

:::

```c
// Cria um Turf. Um playerid pode ser passado para torná-lo um turf de jogador.
native Turf:Turf_Create(Float:minx, Float:miny, Float:maxx, Float:maxy, Player:owner = INVALID_PLAYER_ID);

// Destrói um turf.
native Turf_Destroy(Turf:turf);

// Mostra um Turf para um jogador ou jogadores.
// Será enviado para todos os jogadores se playerid = INVALID_PLAYER_ID.
native Turf_Show(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);

// Oculta um Turf de um jogador ou jogadores.
// Será enviado para todos os jogadores se playerid = INVALID_PLAYER_ID.
native Turf_Hide(Turf:turf, Player:playerid = INVALID_PLAYER_ID);

// Faz um Turf piscar para um jogador ou jogadores.
// Será enviado para todos os jogadores se playerid = INVALID_PLAYER_ID.
native Turf_Flash(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);

// Para o piscar de um Turf para jogador(es).
// Será enviado para todos os jogadores se playerid = INVALID_PLAYER_ID.
native Turf_StopFlashing(Turf:turf, Player:playerid = INVALID_PLAYER_ID);
```

Isso é obviamente diferente da API tradicional, mas não se preocupe: haverá wrappers para esse tipo de coisa, garantindo que um script normal possa ser recompilado sem problemas e sem edições.

Outro fato importante que talvez você queira saber é que todos os turfs ficam no mesmo pool, e há um máximo de 4.294.967.295 turfs que podem ser criados pelo script. No entanto, o cliente só consegue lidar com 1024 turfs ao mesmo tempo.

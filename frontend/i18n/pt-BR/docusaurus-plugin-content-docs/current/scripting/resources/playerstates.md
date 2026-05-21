---
title: Player States
sidebar_label: Player States
description: "Uma lista de todos os estados do jogador usados ​​pela função GetPlayerState ou callback OnPlayerStateChange."
tags: ["player"]
---


Esta página compila a lista de todos os estados do jogador usados ​​pela função [GetPlayerState](../functions/GetPlayerState) ou callback [OnPlayerStateChange](../callbacks/OnPlayerStateChange). Ambas as páginas contêm exemplos de como usar os valores abaixo.

Do ponto de vista do desenvolvedor de servidor, ter "estados do jogador" e "ações especiais" pode parecer confuso. A principal diferença entre os dois é que o primeiro é usado para fins de sincronização (e há pacotes associados a alguns deles) e é usado para ações mais “genéricas”. As "ações especiais" não possuem nenhum pacote associado a elas e cobrem ações mais "específicas", e obviamente têm pouco a ver com o estado atual de um jogador.

## Estados

| ID | Macro | Descrição |
| --- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| 0 | PLAYER_STATE_NONE | O estado padrão do jogador usado durante a inicialização |
| 1 | PLAYER_STATE_ONFOOT | O jogador está a pé |
| 2 | PLAYER_STATE_DRIVER | O jogador está dirigindo um veículo |
| 3 | PLAYER_STATE_PASSENGER | O jogador está em um veículo como passageiro |
| 4 | PLAYER_STATE_EXIT_VEHICLE | O jogador está saindo de um veículo. É usado principalmente internamente |
| 5 | PLAYER_STATE_ENTER_VEHICLE_DRIVER | O jogador está entrando em um veículo como motorista. É usado principalmente internamente |
| 6 | PLAYER_STATE_ENTER_VEHICLE_PASSENGER | O jogador está entrando em um veículo como passageiro. É usado principalmente internamente |
| 7 | PLAYER_STATE_WASTED | O jogador está morto ou em seleção de classe |
| 8 | PLAYER_STATE_SPAWNED | O jogador acabou de ser gerado |
| 9 | PLAYER_STATE_SPECTATING | O jogador está em modo espectador |

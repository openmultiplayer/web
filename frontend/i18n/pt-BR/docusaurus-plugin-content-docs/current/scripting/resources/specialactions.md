---
title: Special Actions
sidebar_label: Special Actions
description: "Uma lista de todas as ações especiais do jogador usadas pelas funções GetPlayerSpecialAction e SetPlayerSpecialAction."
tags: ["player"]
---


Esta página compila a lista de todas as ações especiais do jogador usadas pelas funções [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction) e [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction). Ambas as páginas contêm exemplos de como usar os valores abaixo.

:::warning

Ações especiais marcadas com \* não podem ser definidas usando [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction).

:::

| ID | Ação | Descrição |
| --- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 0 | SPECIAL_ACTION_NONE | Libera o jogador de ações especiais |
| 1 | SPECIAL_ACTION_DUCK \* | Detecte se o jogador está agachado.                                                                                             |
| 2 | SPECIAL_ACTION_USEJETPACK | Fará o jogador usar jetpack |
| 3 | SPECIAL_ACTION_ENTER_VEHICLE \* | Detecte se o jogador está entrando em um veículo por meio de uma animação.                                                                   |
| 4 | SPECIAL_ACTION_EXIT_VEHICLE \* | Detecte se o jogador está saindo de um veículo por meio de uma animação.                                                                    |
| 5 | SPECIAL_ACTION_DANCE1 | Aplica animação de dança para o jogador |
| 6 | SPECIAL_ACTION_DANCE2 | Aplica animação de dança para o jogador |
| 7 | SPECIAL_ACTION_DANCE3 | Aplica animação de dança para o jogador |
| 8 | SPECIAL_ACTION_DANCE4 | Aplica animação de dança para o jogador |
| 10 | SPECIAL_ACTION_HANDSUP | Fará o jogador levantar as mãos |
| 11 | SPECIAL_ACTION_USECELLPHONE | Fará o jogador falar ao celular |
| 12 | SPECIAL_ACTION_SITTING \* | Detecta se o jogador está sentado |
| 13 | SPECIAL_ACTION_STOPUSECELLPHONE | Faz jogadores pararem de usar celular |
| 20 | SPECIAL_ACTION_DRINK_BEER | Aumentará o nível de embriaguez do jogador quando usado |
| 21 | SPECIAL_ACTION_SMOKE_CIGGY | Dará ao jogador um charuto.                                                                                                  |
| 22 | SPECIAL_ACTION_DRINK_WINE | Dará ao jogador uma garrafa de vinho para se embebedar |
| 23 | SPECIAL_ACTION_DRINK_SPRUNK | Dará ao jogador uma garrafa para beber |
| 24 | SPECIAL_ACTION_CUFFED | Forçará o jogador a ficar algemado (as mãos estão atrás das costas) (**não funciona na pele CJ**).                                |
| 25 | SPECIAL_ACTION_CARRY | Aplicará uma animação de 'carregamento' ao jogador e o impedirá de correr, pular ou socar (**não funciona na skin CJ**).  |
| 68 | SPECIAL_ACTION_PISSING | Fará com que o jogador execute a animação de urinar com xixi visível (**a macro não está presente nos arquivos incluídos SA-MP**). |

---
title: OnGameModeExit
description: Essa callback é executada quando o gamemode finaliza, seja por um 'gmx', pelo desligamento do servidor, ou chamando o GameModeExit.
tags: []
---

## Descrição

Essa callback é executada quando o gamemode finaliza, seja por um 'gmx', pelo desligamento do servidor, ou chamando o GameModeExit.

## Exemplos

```c
public OnGameModeExit()
{
    print("GameMode Finalizado.");
    return 1;
}
```

## Notas

:::tip

Essa função também pode ser usada em um filterscript para detectar se o gamemode foi trocado pela RCON, realizando uma troca de gamemodes ou um gmx, sendo que ao trocar o gamemode o filterscript não recarrega. Quando se usa o OnGameModeExit juntamente com o comando 'rcon gmx' potenciais bugs podem ocorrer do lado do cliente, por exemplo: Utilizar em excesso a função RemoveBuildingForPlayer no OnGameModeInit pode resultar em um crash. Essa callback NÃO SERÁ EXECUTADA caso o servidor sofra um crash ou o processo do mesmo seja finalizado incorretamente (ex: utilizando o comando kill no Linux ou pressionando o botão de fechar no console do Windows).

:::


## Funções Relacionadas

- [GameModeExit](../functions/GameModeExit): Finaliza o gamemode atual.

## Callbacks Relacionados

- [OnGameModeInit](OnGameModeInit): Executada ao iniciar gamemode.
- [OnFilterScriptInit](OnFilterScriptInit): Executada quando o filterscript é carregado.
- [OnFilterSciptExit](OnFilterScriptExit): Executada quando o filterscript é descarregado.

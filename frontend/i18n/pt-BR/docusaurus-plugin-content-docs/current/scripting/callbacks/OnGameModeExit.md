---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: Esta callback é chamada quando uma gamemode finaliza, também através do 'gmx', do servidor ser desligado ou GameModeExit.
tags: []
---

## Descrição

Esta callback é chamada quando uma gamemode finaliza, também através do 'gmx', do servidor ser desligado ou GameModeExit.

## Exemplos

```c
public OnGameModeExit()
{
    print("Gamemode Finalizada.");
    return 1;
}
```

## Notas

:::tip

Esta função também pode ser usada em um filterscript para detectar se a gamemode mudou através de comandos do RCON como o "changemode" ou "gmx", pois mudar o gamemode não recarrega um filterscript. Quando usar OnGameModeExit em conjunto com o comando "rcon gmx" do console, mantenha em mente que há um potencial problema que pode acarretar em bugs para os clientes, um exemplo disso é as excessivas chamadas de "RemoveBuildingForPlayer" durante o OnGameModeInit que poderia resultar no crash do cliente. Esta callback não será chamada se o servidor crashar ou o processor ser finalizado por outros meios, como usando o comandos do Linux ou pressionando o botão de fechar no console do Windows.

:::

## Funções Relacionadas

- [GameModeExit](../functions/GameModeExit): Sair da atual gamemode.

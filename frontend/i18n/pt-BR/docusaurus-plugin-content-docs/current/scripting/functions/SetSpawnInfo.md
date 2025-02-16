---
title: SetSpawnInfo
sidebar_label: SetSpawnInfo
description: Esta função pode ser usada para mudar as informações de spawn de um jogador específico.
tags: []
---

## Descrição

Esta função pode ser usada para mudar as informações de spawn de um jogador específico. Permite definir automaticamente no spawn, as armas, time, skin, e posição de um jogador, é normalmente usado em minijogos ou sistemas automáticos de spawn. Esta função é mais segura contra crashes do que usar SetPlayerSkin em OnPlayerSpawn e/ou OnPlayerRequestClass, embora isso tenha sido corrigido na versão 0.2.

| Nome           | Descrição                                                          |
| -------------- | ------------------------------------------------------------------ |
| playerid       | O ID do jogador de quem você quer definir as informações de spawn. |
| team           | O ID do time do jogador escolhido.                                 |
| skin           | A skin com o qual o jogador irá spawnar.                           |
| Float:X        | A coordenada-X da posição de spawn do jogador.                     |
| Float:Y        | A coordenada-Y da posição de spawn do jogador.                     |
| Float:Z        | A coordenada-Z da posição de spawn do jogador.                     |
| Float:rotation | A direção na qual o jogador precisa estar olhando depois do spawn. |
| weapon1        | A primeira arma de spawn para o jogador.                           |
| weapon1_ammo   | A quantidade de munição para a primeira arma de spawn.             |
| weapon2        | A segunda arma de spawn para o jogador.                            |
| weapon2_ammo   | A quantidade de munição para a segunda arma de spawn.              |
| weapon3        | A terceira arma de spawn para o jogador.                           |
| weapon3_ammo   | A quantidade de munição para a terceira arma de spawn.             |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerRequestClass(playerid, classid)
{
    // Este exemplo simples demonstra como spawnar cada jogador automaticamente com
    // a skin do CJ, que é o número 0. O jogador irá spawnar em Las Venturas, com
    // 36 munições de Sawnoff-Shotgun e 150 munições de Tec9.
    SetSpawnInfo( playerid, 0, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0 );
}
```

## Funções Relacionadas

- [SetPlayerSkin](SetPlayerSkin.md): Define a skin de um jogador.
- [SetPlayerTeam](SetPlayerTeam.md): Define o time de um jogador.
- [SpawnPlayer](SpawnPlayer.md): Força o spawn a um jogador.

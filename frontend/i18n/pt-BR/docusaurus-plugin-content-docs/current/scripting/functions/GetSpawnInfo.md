---
title: GetSpawnInfo
sidebar_label: GetSpawnInfo
description: "Retorna os dados de spawn atuais de um jogador, onde ele irá aparecer em seguida."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Retorna os dados de spawn atuais de um jogador, onde ele irá aparecer em seguida.

| Nome | Descrição |
| --------------- | --------------------------------------------------------------------------- |
| playerid | O ID do jogador do qual você deseja obter informações de spawn.                |
| &team | Uma variável na qual armazenar a equipe ID, passada por referência.            |
| &skin | Uma variável na qual armazenar a capa ID, passada por referência.            |
| &Float:spawnX | Uma variável Float na qual armazenar a coordenada X, passada por referência. |
| &Float:spawnY | Uma variável Float na qual armazenar a coordenada Y, passada por referência. |
| &Float:spawnZ | Uma variável Float na qual armazenar a coordenada Z, passada por referência. |
| &Float:angle | Uma variável Float na qual armazenar o ângulo de faceamento, passado por referência. |
| &WEAPON:weapon1 | Uma variável na qual armazenar a arma1, passada por referência.            |
| &ammo1 | Uma variável na qual armazenar a munição1, passada por referência.              |
| &WEAPON:weapon2 | Uma variável na qual armazenar a arma2, passada por referência.            |
| &ammo2 | Uma variável na qual armazenar a munição2, passada por referência.              |
| &WEAPON:weapon3 | Uma variável na qual armazenar a arma3, passada por referência.            |
| &ammo3 | Uma variável na qual armazenar a munição3, passada por referência.              |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O jogador especificado não está conectado.

## Exemplos

```c
public OnPlayerRequestClass(playerid, classid)
{
    SetSpawnInfo(playerid, NO_TEAM, 293, 1139.4786, -1761.3989, 13.5844, 0.0000, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);

    new
        team,
        skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        WEAPON:weapon1,
        ammo1,
        WEAPON:weapon2,
        ammo2,
        WEAPON:weapon3,
        ammo3;

    GetSpawnInfo(playerid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
    // equipe = NO_TEAM
    // pele = 293
    // gerarX = 1139,4786
    // gerarY = -1761,3989
    // gerarZ = 13,5844
    // ângulo = 0,0000
    // arma1 = WEAPON_SAWEDOFF
    // munição1 = 36
    // arma2 = ARMA_UZI
    // munição2 = 150
    // arma3 = WEAPON_FIST
    // munição3 = 0
}
```
## Funções Relacionadas

- [SetSpawnInfo](SetSpawnInfo): Esta função pode ser usada para alterar as informações de spawn de um jogador específico.

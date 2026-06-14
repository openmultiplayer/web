---
title: GetPlayerClass
sidebar_label: GetPlayerClass
description: "Obtenha os dados da classe."
tags: ["class"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados da classe.

| Nome | Descrição |
| --------------- | -------------------------------------------------------------------------------- |
| classid | O ID da classe da qual obter dados.                                                   |
| &team | Uma variável na qual armazenar a equipe, passada por referência.                   |
| &skin | Uma variável na qual armazenar o skin, passada por referência.                   |
| &Float:spawnX | Uma variável flutuante na qual armazenar a coordenada X, passada por referência.     |
| &Float:spawnY | Uma variável flutuante na qual armazenar a coordenada Y, passada por referência.     |
| &Float:spawnZ | Uma variável flutuante na qual armazenar a coordenada Z, passada por referência.     |
| &Float:angle | Uma variável flutuante na qual armazenar a coordenada do ângulo, passada por referência. |
| &WEAPON:weapon1 | Uma variável na qual armazenar a arma1, passada por referência.                |
| &ammo1 | Uma variável na qual armazenar a munição1, passada por referência.                  |
| &WEAPON:weapon2 | Uma variável na qual armazenar a arma2, passada por referência.                |
| &ammo2 | Uma variável na qual armazenar a munição2, passada por referência.                  |
| &WEAPON:weapon3 | Uma variável na qual armazenar a arma3, passada por referência.                |
| &ammo3 | Uma variável na qual armazenar a munição3, passada por referência.                  |

## Exemplos

```c
new
    classid = 10,
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

GetPlayerClass(classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);

printf("[Class id %d data]\n\
    team: %d\n\
    skin: %d\n\
    spawnX: %f\n\
    spawnY: %f\n\
    spawnZ: %f\n\
    angle: %f\n\
    weapon1: %d\n\
    ammo1: %d\n\
    weapon2: %d\n\
    ammo2: %d\n\
    weapon3: %d\n\
    ammo3: %d",
    classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
```
## Funções Relacionadas

- [AddPlayerClass](AddPlayerClass): Adiciona uma classe.
- [AddPlayerClassEx](AddPlayerClassEx): Adicione uma classe com uma equipe padrão.
- [GetAvailableClasses](GetAvailableClasses): Obtenha o número de classes definidas.

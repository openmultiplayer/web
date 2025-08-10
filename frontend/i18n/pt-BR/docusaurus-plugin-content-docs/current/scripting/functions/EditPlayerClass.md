---
title: EditPlayerClass
sidebar_label: EditPlayerClass
description: Edita os dados de uma classe.
tags: ["class"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Edita os dados de uma classe existente.

| Nome           | Descrição                                                      |
|----------------|------------------------------------------------------------------|
| classid        | O ID da classe a ser editada.                                   |
| team           | O time em que o jogador irá nascer.                             |
| skin           | A [skin](../resources/skins) que o jogador usará ao nascer.     |
| Float:spawnX   | Coordenada X do ponto de spawn desta classe.                    |
| Float:spawnY   | Coordenada Y do ponto de spawn desta classe.                    |
| Float:spawnZ   | Coordenada Z do ponto de spawn desta classe.                    |
| Float:angle    | Direção que o jogador estará virado ao nascer.                  |
| WEAPON:weapon1 | Primeira arma que o jogador receberá ao nascer.                 |
| ammo1          | Munição da primeira arma.                                       |
| WEAPON:weapon2 | Segunda arma que o jogador receberá ao nascer.                  |
| ammo2          | Munição da segunda arma.                                        |
| WEAPON:weapon3 | Terceira arma que o jogador receberá ao nascer.                 |
| ammo3          | Munição da terceira arma.                                       |

## Exemplos

```c
// Edita a classe de ID 10
EditPlayerClass(10, TEAM_NONE, 299, -253.8291, 2602.9312, 62.8527, -90.0000, WEAPON_FACA, 1, WEAPON_MP5, 100, WEAPON_COLT45, 20);
```

## Funções Relacionadas

- [AddPlayerClass](AddPlayerClass): Adiciona uma nova classe.
- [AddPlayerClassEx](AddPlayerClassEx): Adiciona uma classe com time padrão.
- [GetAvailableClasses](GetAvailableClasses): Obtém o número de classes definidas.

## Recursos Relacionados

- [IDs de Skins](../resources/skins)
- [IDs de Armas](../resources/weaponids)
---
title: GetPlayerLastShotVectors
sidebar_label: GetPlayerLastShotVectors
description: "Recupera a posição inicial e final (acerto) da última bala que um jogador disparou."
tags: ["player"]
---


## Descrição

Recupera a posição inicial e final (acerto) da última bala que um jogador disparou.

| Nome | Descrição |
| -------------- | --------------------------------------------------------------------------------------- |
| playerid | O ID do jogador do qual obter as informações do último tiro de bala.                        |
| &Float:originX | Uma variável float na qual salvar a coordenada X de onde o marcador se originou. |
| &Float:originY | Uma variável float na qual salvar a coordenada Y de onde o marcador se originou. |
| &Float:originZ | Uma variável float na qual salvar a coordenada Z de onde o marcador se originou. |
| &Float:hitPosX | Uma variável float na qual salvar a coordenada X de onde a bala atingiu.             |
| &Float:hitPosY | Uma variável float na qual salvar a coordenada Y de onde a bala atingiu.             |
| &Float:hitPosZ | Uma variável float na qual salvar a coordenada Z de onde a bala atingiu.             |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

A posição do último marcador é armazenada nas variáveis ​​especificadas.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/lastshot", true) == 0)
    {
        new string[128],
            Float:originX, Float:originY, Float:originZ,
            Float:hitPosX, Float:hitPosY, Float:hitPosZ;

        GetPlayerLastShotVectors(playerid, originX, originY, originZ, hitPosX, hitPosY, hitPosZ);

        format(string, sizeof(string), "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", originX, originY, originZ, hitPosX, hitPosY, hitPosZ);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Esta função só funcionará quando a compensação de atraso estiver habilitada.
- Se o jogador não acertar nada, as posições de acerto serão 0. Isso significa que atualmente você não pode calcular a distância que uma bala percorre no ar livre.

:::

## Funções Relacionadas

- [GetPlayerWeaponData](GetPlayerWeaponData): Descubra informações sobre as armas que um jogador possui.
- [GetPlayerWeapon](GetPlayerWeapon): Verifique qual arma o jogador está segurando no momento.
- [VectorSize](VectorSize): Obtenha o comprimento (norma) de um vetor.

## Callbacks Relacionadas

- [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot): Chamado quando um jogador dispara uma arma.

---
title: GetPlayerCameraMode
sidebar_label: GetPlayerCameraMode
description: "Retorna o modo de câmera GTA atual para o jogador solicitado."
tags: ["player", "camera"]
---


## Descrição

Retorna o GTA [modo de câmera](../resources/cameramodes) atual para o jogador solicitado. Os modos de câmera são úteis para determinar se um jogador está mirando, dirigindo um passageiro, etc.

| Nome | Descrição |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador cujo modo de câmera será recuperado |

## Retornos

O modo da câmera como um número inteiro (ou -1 se o jogador não estiver conectado)

## Exemplos

```c
/* quando o jogador digitar 'cameramode' na caixa de bate-papo, ele verá isso. */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "cameramode", true) == 0)
    {
        new string[48];
        format(string, sizeof(string), "Your camera mode: %d", GetPlayerCameraMode(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerCameraPos](GetPlayerCameraPos): Descubra onde está a câmera do jogador.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador
- [SetPlayerCameraPos](SetPlayerCameraPos): Defina a posição da câmera de um jogador.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Define para onde a câmera do jogador deve ficar voltada.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Coloque a câmera de um jogador atrás dele.

## Recursos relacionados

- [Modos de câmera](../resources/cameramodes)

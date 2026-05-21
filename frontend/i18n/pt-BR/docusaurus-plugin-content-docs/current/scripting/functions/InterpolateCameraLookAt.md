---
title: InterpolateCameraLookAt
sidebar_label: InterpolateCameraLookAt
description: "Interpole o ponto de observação da câmera de um jogador entre duas coordenadas com uma velocidade definida."
tags: ["player", "interpolate"]
---


## Descrição

Interpole o ponto de observação da câmera de um jogador entre duas coordenadas com uma velocidade definida. Pode ser usado com [InterpolateCameraPos](InterpolateCameraPos).

| Nome | Descrição |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual a câmera deve ser movida |
| Float:fromX | A posição X da qual a câmera deve começar a se mover |
| Float:fromY | A posição Y da qual a câmera deve começar a se mover |
| Float:fromZ | A posição Z da qual a câmera deve começar a se mover |
| Float:toX | A posição X para a qual a câmera deve se mover |
| Float:toY | A posição Y para a qual a câmera deve se mover |
| Float:toZ | A posição Z para a qual a câmera deve se mover |
| time | Tempo em milissegundos para completar a interpolação |
| CAM_MOVE:cut | O ['jumpcut'](../resources/cameracutstyles) a ser usado. O padrão é CAMERA_CUT (inútil). Defina como CAMERA_MOVE para interpolação. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rotateme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);
        //                                 x1    y1    z1     x2    y2    z2
        // A câmera começa olhando para (x1, y1, z1). Ele então girará e depois
        // 10000 milissegundos (10 segundos) ele estará olhando (x2, y2, z2).
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

- Use [TogglePlayerSpectating](TogglePlayerSpectating) para fazer com que os objetos sejam transmitidos para o jogador enquanto a câmera está em movimento.
- Você pode redefinir a câmera atrás do jogador com [SetCameraBehindPlayer](SetCameraBehindPlayer).

:::

## Funções Relacionadas

- [InterpolateCameraPos](InterpolateCameraPos): Mova a câmera de um jogador de um local para outro.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Defina para onde a câmera do jogador deve ficar.
- [SetPlayerCameraPos](SetPlayerCameraPos): Defina a posição da câmera de um jogador.

## Recursos relacionados

- [Estilos de corte de câmera](../resources/cameracutstyles)

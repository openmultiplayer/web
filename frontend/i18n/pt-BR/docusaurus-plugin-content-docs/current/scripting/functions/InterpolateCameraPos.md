---
title: InterpolateCameraPos
sidebar_label: InterpolateCameraPos
description: "Mova a câmera de um jogador de uma posição para outra, dentro do tempo definido."
tags: ["player", "interpolate"]
---


## Descrição

Mova a câmera de um jogador de uma posição para outra, dentro do tempo definido. Útil para cenas cortadas com script

| Nome | Descrição |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual a câmera deve ser movida |
| Float:fromX | A posição X da qual a câmera deve começar a se mover |
| Float:fromY | A posição Y da qual a câmera deve começar a se mover |
| Float:fromZ | A posição Z da qual a câmera deve começar a se mover |
| Float:toX | A posição X para a qual a câmera deve se mover |
| Float:toY | A posição Y para a qual a câmera deve se mover |
| Float:toZ | A posição Z para a qual a câmera deve se mover |
| time | Tempo em milissegundos |
| CAM_MOVE:cut | O [jumpcut](../resources/cameracutstyles) a ser usado. O padrão é CAMERA_CUT. Defina como CAMERA_MOVE para um movimento suave |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);
        //Mova a câmera do jogador do ponto A ao B em 10.000 milissegundos (10 segundos).
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

- Use [TogglePlayerSpectating](TogglePlayerSpectating) para fazer com que os objetos sejam transmitidos para o jogador enquanto a câmera está em movimento e remova o HUD.
- A câmera do jogador pode ser redefinida para trás do jogador com [SetCameraBehindPlayer](SetCameraBehindPlayer).

:::

## Funções Relacionadas

- [InterpolateCameraLookAt](InterpolateCameraLookAt): Mova a visão da câmera de um jogador de um local para outro.
- [SetPlayerCameraPos](SetPlayerCameraPos): Defina a posição da câmera de um jogador.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Defina para onde a câmera do jogador deve ficar.

## Recursos relacionados

- [Estilos de corte de câmera](../resources/cameracutstyles)

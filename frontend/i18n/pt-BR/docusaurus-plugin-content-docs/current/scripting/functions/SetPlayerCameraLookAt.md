---
title: SetPlayerCameraLookAt
sidebar_label: SetPlayerCameraLookAt
description: "Defina a direção para a qual a câmera do jogador olha."
tags: ["player", "camera"]
---


## Descrição

Defina a direção para a qual a câmera do jogador olha. Geralmente destinado a ser usado em combinação com SetPlayerCameraPos.

| Nome | Descrição |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador cuja câmera será configurada.                                                                                                      |
| Float:x | A coordenada X para a câmera do jogador olhar.                                                                                           |
| Float:y | A coordenada Y para a câmera do jogador olhar.                                                                                           |
| Float:z | A coordenada Z para a câmera do jogador olhar.                                                                                           |
| CAM_MOVE:cut | O [estilo](../resources/cameracutstyles) da alteração. Pode ser usado para interpolar (mudar lentamente) da posição antiga para a nova usando CAMERA_MOVE. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);
SetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);
```
## Notas

:::warning

Usar as funções da câmera diretamente após ativar o modo espectador não funciona.

:::

## Funções Relacionadas

- [SetPlayerCameraPos](SetPlayerCameraPos): Defina a posição da câmera de um jogador.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Coloque a câmera de um jogador atrás dele.
- [GetPlayerCameraPos](GetPlayerCameraPos): Descubra onde está a câmera do jogador.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador

## Recursos relacionados

- [Estilos de corte de câmera](../resources/cameracutstyles)

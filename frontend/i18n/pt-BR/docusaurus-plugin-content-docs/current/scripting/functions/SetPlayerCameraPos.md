---
title: SetPlayerCameraPos
sidebar_label: SetPlayerCameraPos
description: "Define a câmera para uma posição específica para um jogador."
tags: ["player", "camera"]
---


## Descrição

Define a câmera para uma posição específica para um jogador.

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | ID do jogador |
| Float:x | A coordenada X na qual colocar a câmera. |
| Float:y | A coordenada Y na qual colocar a câmera. |
| Float:z | A coordenada Z na qual colocar a câmera. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
SetPlayerCameraPos(playerid, 652.23, 457.21, 10.84);
```
## Notas

:::tip

- Talvez você também precise usar SetPlayerCameraLookAt com esta função para funcionar corretamente.
- Use SetCameraBehindPlayer para redefinir a câmera para trás do jogador.

:::

:::warning

Usar as funções da câmera diretamente após ativar o modo espectador não funciona.

:::

## Funções Relacionadas

- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Define para onde a câmera do jogador deve ficar voltada.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Coloque a câmera de um jogador atrás dele.

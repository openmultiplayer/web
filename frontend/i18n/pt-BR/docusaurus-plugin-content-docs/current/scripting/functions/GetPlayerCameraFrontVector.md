---
title: GetPlayerCameraFrontVector
sidebar_label: GetPlayerCameraFrontVector
description: "Esta função retornará a direção atual da mira do jogador no espaço 3-D, as coordenadas são relativas à posição da câmera, consulte GetPlayerCameraPos."
tags: ["player", "camera"]
---


## Descrição

Esta função retornará a direção atual da mira do jogador no espaço 3-D, as coordenadas são relativas à posição da câmera, consulte [GetPlayerCameraPos](GetPlayerCameraPos).

| Nome | Descrição |
| -------- | ------------------------------------------------------------------ |
| playerid | O ID do jogador do qual deseja obter o vetor frontal da câmera |
| &Float:x | Um float para armazenar a coordenada X, passada por referência.            |
| &Float:y | Um float para armazenar a coordenada Y, passada por referência.            |
| &Float:z | Um float para armazenar a coordenada Z, passada por referência.            |

## Retornos

A posição é armazenada nas variáveis especificadas.

## Exemplos

```c
// Um comando simples para manipular este vetor usando o
// posições de GetPlayerCameraPos. Este comando criará
// um míssil hidra na direção para onde o jogador está olhando.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/test camera vector"))
    {
        new
            Float:fPX, Float:fPY, Float:fPZ,
            Float:fVX, Float:fVY, Float:fVZ,
            Float:object_x, Float:object_y, Float:object_z;

        // Altere este valor para ajustar a escala desejada. Uma escala maior aumenta a distância da câmera.
        // Uma escala negativa inverterá os vetores e fará com que apontem na direção oposta.
        const
            Float:fScale = 5.0;

        GetPlayerCameraPos(playerid, fPX, fPY, fPZ);
        GetPlayerCameraFrontVector(playerid, fVX, fVY, fVZ);

        object_x = fPX + floatmul(fVX, fScale);
        object_y = fPY + floatmul(fVY, fScale);
        object_z = fPZ + floatmul(fVZ, fScale);

        CreateObject(345, object_x, object_y, object_z, 0.0, 0.0, 0.0);

        return 1;
    }

    return 0;
}
```
## Notas

:::tip

Os dados da câmera podem ser obtidos quando o jogador está em qualquer veículo ou a pé.

:::

## Funções Relacionadas

- [GetPlayerCameraPos](GetPlayerCameraPos): Descubra onde está a câmera do jogador.

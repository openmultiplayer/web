---
title: SetObjectNoCameraCollision
sidebar_label: SetObjectNoCameraCollision
description: "Desative as colisões entre as câmeras dos jogadores e o objeto especificado."
tags: ["object", "camera"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Desative as colisões entre as câmeras dos jogadores e o objeto especificado.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| objectid | O ID do objeto no qual desativar as colisões de câmera. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCollision(objectid);
    }
    return 1;
}
```
## Notas

:::tip

Isso funciona apenas fora dos limites do mapa (após -3.000/3.000 unidades nos eixos x e/ou y).

:::

## Funções Relacionadas

- [HasObjectCameraCollision](HasObjectCameraCollision): Verifica se um objeto está com colisão de câmera habilitada.
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): Desativa colisões entre a câmera e o objeto do jogador.

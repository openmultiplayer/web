---
title: HasObjectCameraCollision
sidebar_label: HasObjectCameraCollision
description: "Verifica se um objeto tem colisão de câmera habilitada. (SetObjectNoCameraCollision)"
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um objeto tem colisão de câmera habilitada. ([SetObjectNoCameraCollision](SetObjectNoCameraCollision))

| Nome | Descrição |
| -------- | ------------------------------ |
| objectid | O ID do objeto a ser verificado. |

## Retornos

`true` - A colisão de câmera de objeto está habilitada.

`false` - Colisão de câmera de objeto está desativada.

## Exemplos

```c
if (HasObjectCameraCollision(objectid))
{
    printf("Object %d camera collision: enable", objectid);
}
else
{
    printf("Object %d camera collision: disable", objectid);
}
```
## Funções Relacionadas

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): Desativa colisões entre as câmeras dos jogadores e o objeto especificado.
- [HasPlayerObjectCameraCollision](HasPlayerObjectCameraCollision): Verifica se um objeto do jogador tem colisão de câmera habilitada.

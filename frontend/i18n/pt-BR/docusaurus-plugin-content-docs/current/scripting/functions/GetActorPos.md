---
title: GetActorPos
sidebar_label: GetActorPos
description: "Obtenha a posição de um ator."
tags: ["actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtenha a posição de um ator.

| Nome | Descrição |
| -------- | --------------------------------------------------------------------------------------- |
| actorid | O ID do ator para obter a posição. Retornado por CreateActor.                    |
| &Float:x | Uma variável flutuante, passada por referência, na qual armazena a coordenada X do ator. |
| &Float:y | Uma variável flutuante, passada por referência, na qual armazenar a coordenada Y do ator. |
| &Float:z | Uma variável flutuante, passada por referência, na qual armazena a coordenada Z do ator. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O ator especificado não existe.

A posição do ator é armazenada nas variáveis ​​especificadas.

## Exemplos

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```
## Funções Relacionadas

- [SetActorPos](SetActorPos): Define a posição de um ator.

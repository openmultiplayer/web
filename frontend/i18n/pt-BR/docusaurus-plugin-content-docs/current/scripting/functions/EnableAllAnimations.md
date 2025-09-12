---
title: EnableAllAnimations
sidebar_label: EnableAllAnimations
description: Habilita o uso de animações ausentes em algumas versões.
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Permite o uso de animações que estão faltando em determinadas versões do SA-MP.

| Parâmetro    | Descrição |
|-------------|-----------|
| bool:enable | 'true' para ativar animações ausentes, 'false' para desativá-las |

## Retornos

Esta função não retorna valores específicos.

## Exemplos

```c
public OnGameModeInit()
{
// Habilita todas as animações ao iniciar o modo de jogo
EnableAllAnimations(true);
return 1;
}
```

## Observações

:::tip

Você também pode habilitar/desabilitar animações ausentes diretamente no arquivo [config.json](../../server/config.json):

```json
"use_all_animations": true,
```

:::

## Funções Relacionadas

- [AreAllAnimationsEnabled](AreAllAnimationsEnabled): Verifica se as animações ausentes estão habilitadas
- [ApplyAnimation](ApplyAnimation): Aplica uma animação a um jogador
- [ClearAnimations](ClearAnimations): Limpa as animações atuais de um jogador

## Recursos Relacionados

- [Lista de Animações](../resources/animations) - IDs e nomes de todas as animações disponíveis

## Comportamento em Diferentes Versões

Esta função é particularmente útil quando:
- Trabalhando com versões antigas do SA-MP que não possuem certas animações
- Garantindo compatibilidade entre diferentes builds
- Utilizando animações customizadas ou modificadas

:::warning
Algumas animações podem não funcionar corretamente em todas as versões, mesmo quando habilitadas.
:::
---
title: PlayerPlaySound
sidebar_label: PlayerPlaySound
description: "Reproduz o som especificado para um jogador."
tags: ["player"]
---


## Descrição

Reproduz o som especificado para um jogador.

Para uma biblioteca que lista todos os sons, confira [isto](https://github.com/WoutProvost/samp-sound-array).

| Nome | Descrição |
| -------- | ------------------------------------------------------------ |
| playerid | O ID do jogador para quem o som será reproduzido.             |
| soundid | O [som](../resources/sound-ids) a ser reproduzido.                 |
| Float:x | Coordenada X para o som tocar. (0,0 para nenhuma posição) |
| Float:y | Coordenada Y para o som tocar. (0,0 para nenhuma posição) |
| Float:z | Coordenada Z para o som tocar. (0,0 para nenhuma posição) |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado.

## Exemplos

```c
// Som de soco do jogador (adequado também para comandos como /slap). O som será baixo, pois a fonte está, na verdade, 10 metros acima do jogador.
PlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);
```
## Notas

:::tip

Use as coordenadas apenas se quiser que o som seja reproduzido em uma determinada posição. Defina todas as coordenadas como 0,0 para apenas reproduzir o som.

:::

## Funções Relacionadas

- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Reproduza uma denúncia de crime para um jogador.
- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Reproduz um fluxo de áudio para um jogador.
- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Interrompe o fluxo de áudio atual de um jogador.

## Recursos relacionados

- [Som IDs](../resources/sound-ids)

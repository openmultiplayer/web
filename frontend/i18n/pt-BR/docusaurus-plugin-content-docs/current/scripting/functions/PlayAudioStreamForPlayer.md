---
title: PlayAudioStreamForPlayer
sidebar_label: PlayAudioStreamForPlayer
description: "Reproduza um 'stream de áudio' para um jogador."
tags: ["player"]
---


## Descrição

Reproduza um 'stream de áudio' para um jogador. Arquivos de áudio normais também funcionam (por exemplo, MP3).

| Nome | Descrição |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para reproduzir o áudio.                                                                      |
| const url[] | O URL para jogar. Os formatos válidos são mp3 e ogg/vorbis. Um link para um arquivo .pls (lista de reprodução) reproduzirá essa lista de reprodução. |
| Float:posX | A posição X na qual o áudio será reproduzido. Padrão 0,0. Não tem efeito a menos que usepos esteja definido como (true).            |
| Float:posY | A posição Y na qual reproduzir o áudio. Padrão 0,0. Não tem efeito a menos que usepos esteja definido como (true).            |
| Float:posZ | A posição Z na qual o áudio será reproduzido. Padrão 0,0. Não tem efeito a menos que usepos esteja definido como (true).            |
| Float:distance | A distância na qual o áudio será ouvido. Não tem efeito a menos que usepos esteja definido como (true).                   |
| bool:usepos | Use as posições e distância especificadas. Padrão desabilitado (false).                                              |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:x, Float:y, Float:z, Float:distance = 5.0;
        GetPlayerPos(playerid, x, y, z);
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", x, y, z, distance, true);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Interrompe o fluxo de áudio atual de um jogador.
- [PlayerPlaySound](PlayerPlaySound): Reproduz um som para um jogador.

---
title: OnPlayerRequestDownload
sidebar_label: OnPlayerRequestDownload
description: Esta callback é chamada quando um jogador solicita o download de modelos personalizados.
tags: ["player"]
---

<VersionWarnPT name='callback' version='SA-MP 0.3.DL R1' />

## Descrição

Esta callback é chamada quando um jogador solicita o download de modelos personalizados.

| Nome     | Descrição                                              |
| -------- | ------------------------------------------------------ |
| playerid | O ID do jogador que solicitou o download de um modelo. |
| type     | O tipo de solicitação (veja abaixo).                   |
| crc      | O CRC de soma de verificação dos modelos.              |

## Retornos

0 - Nega o download do modelo

1 - Aceita o download requisitado

## Exemplos

```c
#define DOWNLOAD_REQUEST_EMPTY        (0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)

new baseurl[] = "https://assets.open.mp";

public OnPlayerRequestDownload(playerid, type, crc)
{
    new fullurl[256+1];
    new dlfilename[64+1];
    new foundfilename=0;

    if (!IsPlayerConnected(playerid)) return 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE) {
        foundfilename = FindTextureFileNameFromCRC(crc,dlfilename,64);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE) {
        foundfilename = FindModelFileNameFromCRC(crc,dlfilename,64);
    }

    if (foundfilename) {
        format(fullurl,256,"%s/%s",baseurl,dlfilename);
        RedirectDownload(playerid,fullurl);
    }

    return 0;
}
```

## Funções Relacionadas

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Chamada quando um jogador termina de baixar os modelos personalizados.

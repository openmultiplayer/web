---
title: RedirectDownload
sidebar_label: RedirectDownload
description: "Redirecione o download AddCharModel ou AddSimpleModel personalizado do jogador para uma página da Web HTTP específica."
tags: ["custom model", "custom skin", "simple model"]
---


<VersionWarn version='SA-MP 0.3.DL R1' />

## Descrição

Redirecione o download AddCharModel ou AddSimpleModel personalizado do jogador para uma página da Web HTTP específica.

## Parâmetros

| Nome | Descrição |
| ----------- | ----------------------------------------------------------- |
| playerid | O ID do jogador que solicitou download de modelos personalizados. |
| const url[] | O URL para redirecionar o download |

## Valores de retorno

**1:** A função foi executada com sucesso.

**0:** A função não foi executada.

## Exemplo de uso de dl_redirect filterscript

```c
new baseurl[] = "https://assets.open.mp";

public OnPlayerRequestDownload(playerid, type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        fullURL[256],
        fileName[64],
        foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, fileName, sizeof fileName);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, fileName, sizeof fileName);
    }

    if (foundFileName)
    {
        format(fullURL, sizeof fullURL, "%s/%s", baseurl, fileName);
        RedirectDownload(playerid, fullURL);
    }

    return 0;
}
```
## Funções Relacionadas

- [AddCharModel](AddCharModel): Adiciona um novo modelo de personagem personalizado para download.
- [AddSimpleModel](AddSimpleModel): Adiciona um novo modelo de objeto simples personalizado para download.
- [AddSimpleModelTimed](AddSimpleModelTimed): Adiciona um novo modelo de objeto simples personalizado para download.

## Callbacks Relacionadas

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Chamado quando um jogador termina de baixar modelos personalizados.

---
title: HTTP
sidebar_label: HTTP
description: "Envia uma solicitação HTTP encadeada."
tags: ["http"]
---


## Descrição

Envia uma solicitação HTTP encadeada.

| Nome | Descrição |
| ------------------ | ------------------------------------------------------------------------------------------- |
| index | ID usado para diferenciar solicitações enviadas para o mesmo callback (útil para playerids) |
| HTTP_METHOD:method | O [tipo](../resources/http-request-methods) da solicitação que você deseja enviar.                  |
| const url[] | O URL que você deseja solicitar. **(Sem 'http://')** |
| const data[] | Quaisquer dados POST que você deseja enviar com a solicitação.                                            |
| const callback[] | Nome da função de callback que você deseja usar para lidar com as respostas a esta solicitação.          |

## Retornos

1 em sucesso, 0 em falha

## Definições

```c
// Tipos de solicitação HTTP
#define HTTP_GET                               (HTTP_METHOD:1) // Envia uma solicitação HTTP normal.
#define HTTP_POST                              (HTTP_METHOD:2) // Envia uma solicitação HTTP com dados POST.
#define HTTP_HEAD                              (HTTP_METHOD:3) // Envia uma solicitação HTTP normal, mas ignora quaisquer dados de resposta - retornando apenas o código de resposta.

// Códigos de resposta de erro HTTP
// Esses códigos complementam os códigos de resposta HTTP comuns retornados em 'response_code'
#define HTTP_ERROR_BAD_HOST                    (HTTP_ERROR:1)
#define HTTP_ERROR_NO_SOCKET                   (HTTP_ERROR:2)
#define HTTP_ERROR_CANT_CONNECT                (HTTP_ERROR:3)
#define HTTP_ERROR_CANT_WRITE                  (HTTP_ERROR:4)
#define HTTP_ERROR_CONTENT_TOO_BIG             (HTTP_ERROR:5)
#define HTTP_ERROR_MALFORMED_RESPONSE          (HTTP_ERROR:6)
```
## Exemplos

```c
forward MyHttpResponse(index, response_code, data[]);

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/hello", cmdtext, true))
    {
        HTTP(playerid, HTTP_GET, "assets.open.mp/hello.txt", "", "MyHttpResponse");
        return 1;
    }
    return 0;
}

public MyHttpResponse(index, response_code, data[])
{
    // Neste retorno de chamada, "index" normalmente seria chamado de "playerid" (se você ainda não o recebeu)
    new buffer[128];

    if (response_code == 200) // A solicitação foi bem-sucedida?
    {
        // Sim!
        format(buffer, sizeof(buffer), "The URL replied: %s", data);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
    else
    {
        // Não!
        format(buffer, sizeof(buffer), "The request failed! The response code was: %d", response_code);
        SendClientMessage(index, 0xFF0000FF, buffer);
    }
}
```
## Notas

:::tip

Além dos códigos de resposta listados acima, também existem todas as respostas típicas do HTTP, como 404 (Página não encontrada), 500 (Erro do servidor) ou 403 (proibido)

:::

## Informações relacionadas

- [Métodos de solicitação HTTP](../resources/http-request-methods)
- [Códigos de resposta de erro HTTP](../resources/http-error-response-codes)

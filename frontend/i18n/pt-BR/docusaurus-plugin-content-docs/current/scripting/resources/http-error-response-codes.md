---
title: HTTP Error Response Codes
sidebar_label: HTTP Error Response Codes
description: "Códigos de resposta de erro HTTP."
---


:::note

Esses códigos complementam os códigos de resposta comuns [HTTP](../functions/HTTP) retornados em 'response_code'

:::

| Code | Erro | Descrição |
| ---- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | HTTP_ERROR_BAD_HOST | Indica que o URL usado em uma solicitação HTTP é inválido ou não pode ser resolvido pelo servidor DNS.                                                                                                                           |
| 2 | HTTP_ERROR_NO_SOCKET | Indica que houve uma falha no estabelecimento de uma conexão de soquete de rede ao fazer uma solicitação HTTP.                                                                                                                  |
| 3 | HTTP_ERROR_CANT_CONNECT | Indica que o cliente não consegue estabelecer uma conexão com o servidor ao fazer uma solicitação HTTP. Este erro pode ocorrer por vários motivos, incluindo problemas de conectividade de rede ou indisponibilidade do servidor. |
| 4 | HTTP_ERROR_CANT_WRITE | Indica que houve falha na gravação de dados durante uma solicitação HTTP. Este erro pode ocorrer por vários motivos relacionados ao cliente, servidor ou rede.                                                               |
| 5 | HTTP_ERROR_CONTENT_TOO_BIG | Indica que o tamanho do conteúdo enviado na solicitação HTTP excede o limite máximo permitido pelo servidor ou pela configuração do servidor.                                                                         |
| 6 | HTTP_ERROR_MALFORMED_RESPONSE | Indica que a resposta HTTP recebida do servidor está em um formato inesperado ou inválido. Este erro sugere que a resposta não está em conformidade com os padrões do protocolo HTTP.                                     |

## Alguns códigos de resposta de erro comuns HTTP

### 1xx Informativo

| Code |                     |
| ---- | ------------------- |
| 100 | Continuar |
| 101 | Protocolos de comutação |
| 102 | Processamento |

### Sucesso 2xx

| Code |                 |
| ---- | --------------- |
| 200 | OK |
| 201 | Criado |
| 204 | Nenhum conteúdo |
| 206 | Conteúdo Parcial |

### Redirecionamento 3xx

| Code |                    |
| ---- | ------------------ |
| 301 | Movido permanentemente |
| 302 | Encontrado |
| 304 | Não modificado |
| 307 | Redirecionamento temporário |

### Erros do cliente 4xx

| Code |                    |
| ---- | ------------------ |
| 400 | Solicitação incorreta |
| 401 | Não autorizado |
| 403 | Proibido |
| 404 | Não encontrado |
| 405 | Método não permitido |
| 429 | Muitas solicitações |

### Erros de servidor 5xx

| Code |                       |
| ---- | --------------------- |
| 500 | Erro interno do servidor |
| 502 | Gateway ruim |
| 503 | Serviço indisponível |
| 504 | Tempo limite do gateway |

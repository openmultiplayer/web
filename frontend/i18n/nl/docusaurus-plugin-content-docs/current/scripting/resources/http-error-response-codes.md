---
title: "HTTP-foutcodes"
sidebar_label: "HTTP-foutcodes"
description: HTTP-foutcodes en beschrijvingen.
---

:::note
Deze codes vullen normale [HTTP](../functions/HTTP)-responscodes aan (in `response_code`).
:::

| Code | Fout                          | Omschrijving                                                                                                       |
| ---- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1    | HTTP_ERROR_BAD_HOST           | Ongeldige/ongeresolveerde host in de URL.                                                                         |
| 2    | HTTP_ERROR_NO_SOCKET          | Mislukte socketinitialisatie voor de aanvraag.                                                                     |
| 3    | HTTP_ERROR_CANT_CONNECT       | Kan geen verbinding maken met de server (bijv. netwerkproblemen of server onbereikbaar).                          |
| 4    | HTTP_ERROR_CANT_WRITE         | Fout bij het schrijven van data tijdens de aanvraag.                                                               |
| 5    | HTTP_ERROR_CONTENT_TOO_BIG    | Verzoekinhoud is groter dan toegestaan door de server/configuratie.                                                |
| 6    | HTTP_ERROR_MALFORMED_RESPONSE | Respons is ongeldig of onverwacht van formaat en voldoet niet aan HTTP-standaarden.                                |

## Veelvoorkomende HTTP-responscodes

### 1xx Informational

| Code |                     |
| ---- | ------------------- |
| 100  | Continue            |
| 101  | Switching Protocols |
| 102  | Processing          |

### 2xx Success

| Code |            |
| ---- | ---------- |
| 200  | OK         |
| 201  | Created    |
| 204  | No Content |
| 206  | Partial Content |

### 3xx Redirection

| Code |                    |
| ---- | ------------------ |
| 301  | Moved Permanently  |
| 302  | Found              |
| 304  | Not Modified       |
| 307  | Temporary Redirect |

### 4xx Client Errors

| Code |                    |
| ---- | ------------------ |
| 400  | Bad Request        |
| 401  | Unauthorized       |
| 403  | Forbidden          |
| 404  | Not Found          |
| 405  | Method Not Allowed |
| 429  | Too Many Requests  |

### 5xx Server Errors

| Code |                       |
| ---- | --------------------- |
| 500  | Internal Server Error |
| 502  | Bad Gateway           |
| 503  | Service Unavailable   |
| 504  | Gateway Timeout       |



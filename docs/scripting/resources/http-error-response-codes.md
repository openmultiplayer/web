---
title: HTTP Error Response Codes
description: HTTP error response codes.
---

:::note

These codes compliment ordinary [HTTP](../functions/HTTP) response codes returned in 'response_code'

:::

| Code | Error                         | Description                                                                                                                                                                                                                  |
|------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | HTTP_ERROR_BAD_HOST           | Indicates that the URL used in an HTTP request is invalid or cannot be resolved by the DNS server.                                                                                                                           |
| 2    | HTTP_ERROR_NO_SOCKET          | Indicates that there was a failure in establishing a network socket connection when making an HTTP request.                                                                                                                  |
| 3    | HTTP_ERROR_CANT_CONNECT       | Indicates that the client is unable to establish a connection to the server when making an HTTP request. This error can occur due to various reasons, including network connectivity issues or unavailability of the server. |
| 4    | HTTP_ERROR_CANT_WRITE         | Indicates that there was a failure in writing data during an HTTP request. This error can occur for various reasons related to the client, server, or network.                                                               |
| 5    | HTTP_ERROR_CONTENT_TOO_BIG    | Indicates that the size of the content being sent in the HTTP request exceeds the maximum limit allowed by the server or the server's configuration.                                                                         |
| 6    | HTTP_ERROR_MALFORMED_RESPONSE | Indicates that the HTTP response received from the server is in an unexpected or invalid format. This error suggests that the response does not comply with the HTTP protocol standards.                                     |

## Some Common HTTP Error Response Codes

### 1xx Informational

| Code |                     |
|------|---------------------|
| 100  | Continue            |
| 101  | Switching Protocols |
| 102  | Processing          |

### 2xx Success

| Code |                 |
|------|-----------------|
| 200  | OK              |
| 201  | Created         |
| 204  | No Content      |
| 206  | Partial Content |

### 3xx Redirection

| Code |                    |
|------|--------------------|
| 301  | Moved Permanently  |
| 302  | Found              |
| 304  | Not Modified       |
| 307  | Temporary Redirect |

### 4xx Client Errors

| Code |                    |
|------|--------------------|
| 400  | Bad Request        |
| 401  | Unauthorized       |
| 403  | Forbidden          |
| 404  | Not Found          |
| 405  | Method Not Allowed |
| 429  | Too Many Requests  |

### 5xx Server Errors

| Code |                       |
|------|-----------------------|
| 500  | Internal Server Error |
| 502  | Bad Gateway           |
| 503  | Service Unavailable   |
| 504  | Gateway Timeout       |

---
title: HTTP
sidebar_label: HTTP
description: Sends a threaded HTTP request.
tags: ["http"]
---

## Description

Sends a threaded HTTP request.

| Name               | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| index              | ID used to differentiate requests that are sent to the same callback (useful for playerids) |
| HTTP_METHOD:method | The [type](../resources/http-request-methods) of request you wish to send.                  |
| const url[]        | The URL you want to request. **(Without 'http://')**                                        |
| const data[]       | Any POST data you want to send with the request.                                            |
| const callback[]   | Name of the callback function you want to use to handle responses to this request.          |

## Returns

1 on success, 0 on failure

## Definitions

```c
// HTTP request types
#define HTTP_GET                               (HTTP_METHOD:1) // Sends a regular HTTP request.
#define HTTP_POST                              (HTTP_METHOD:2) // Sends a HTTP request with POST data.
#define HTTP_HEAD                              (HTTP_METHOD:3) // Sends a regular HTTP request, but ignores any response data - returning only the response code.

// HTTP error response codes
// These codes compliment ordinary HTTP response codes returned in 'response_code'
#define HTTP_ERROR_BAD_HOST                    (HTTP_ERROR:1)
#define HTTP_ERROR_NO_SOCKET                   (HTTP_ERROR:2)
#define HTTP_ERROR_CANT_CONNECT                (HTTP_ERROR:3)
#define HTTP_ERROR_CANT_WRITE                  (HTTP_ERROR:4)
#define HTTP_ERROR_CONTENT_TOO_BIG             (HTTP_ERROR:5)
#define HTTP_ERROR_MALFORMED_RESPONSE          (HTTP_ERROR:6)
```

## Examples

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
    // In this callback "index" would normally be called "playerid" ( if you didn't get it already )
    new buffer[128];

    if (response_code == 200) // Did the request succeed?
    {
        // Yes!
        format(buffer, sizeof(buffer), "The URL replied: %s", data);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
    else
    {
        // No!
        format(buffer, sizeof(buffer), "The request failed! The response code was: %d", response_code);
        SendClientMessage(index, 0xFF0000FF, buffer);
    }
}
```

## Notes

:::tip

As well as the response codes listed above, there are also all of the typical HTTP responses such as 404 (Page not found), 500 (Server error) or 403 (forbidden)

:::

## Related Information

- [HTTP Request Methods](../resources/http-request-methods)
- [HTTP Error Response Codes](../resources/http-error-response-codes)

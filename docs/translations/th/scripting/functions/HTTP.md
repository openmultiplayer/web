---
title: HTTP
description: Sends a threaded HTTP request.
tags: []
---

## คำอธิบาย

Sends a threaded HTTP request.

| Name       | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| index      | ID used to differentiate requests that are sent to the same callback (useful for playerids) |
| type       | The type of request you wish to send.                                                       |
| url[]      | The URL you want to request. (Without 'http://')                                            |
| data[]     | Any POST data you want to send with the request.                                            |
| callback[] | Name of the callback function you want to use to handle responses to this request.          |

## ส่งคืน

1 on success, 0 on failure

## ตัวอย่าง

```c
forward MyHttpResponse(index, response_code, data[]);

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/hello",cmdtext,true))
    {
        HTTP(playerid, HTTP_GET, "kc.gd/hello.txt", "", "MyHttpResponse");
        return 1;
    }
    return 0;
}

public MyHttpResponse(index, response_code, data[])
{
    // In this callback "index" would normally be called "playerid" ( if you didn't get it already:) )
    new
        buffer[ 128 ];
    if (response_code == 200) //Did the request succeed?
    {
        //Yes!
        format(buffer, sizeof(buffer), "The URL replied: %s", data);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
    else
    {
        //No!
        format(buffer, sizeof(buffer), "The request failed! The response code was: %d", response_code);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
}
```

```
HTTP_ERROR_BAD_HOST           (1)
HTTP_ERROR_NO_SOCKET          (2)
HTTP_ERROR_CANT_CONNECT       (3)
HTTP_ERROR_CANT_WRITE         (4)
HTTP_ERROR_CONTENT_TOO_BIG    (5)
HTTP_ERROR_MALFORMED_RESPONSE (6)

```

## บันทึก

:::tip

As well as the response codes listed above, there are also all of the typical HTTP responses such as 404 (Page not found), 500 (Server error) or 403 (forbidden)

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

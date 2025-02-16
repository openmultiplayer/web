---
title: HTTP Request Methods
sidebar_label: HTTP Request Methods
description: Types of HTTP request.
---

:::note

These request methods are used by [HTTP](../functions/HTTP) function.

:::

| ID  | Method    | Description                                                                                                                                                                                                                            |
| --- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | HTTP_GET  | Sends a regular HTTP request.<br />GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of **200 (OK)** if the data is successfully retrieved from the server.                                 |
| 2   | HTTP_POST | Sends a HTTP request with POST data.<br />POST request is used to send data to the server. On successful creation, it returns an HTTP status code of **201**.                                                                          |
| 3   | HTTP_HEAD | Sends a regular HTTP request, but ignores any response data - returning only the response code.<br />HEAD method is used to request the response headers for a specific resource without receiving the actual content of the resource. |

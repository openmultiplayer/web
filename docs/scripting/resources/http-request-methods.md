---
title: "HTTP Request Methods | open.mp"
description: "Types of HTTP request."
canonical: https://open.mp/docs/scripting/resources/http-request-methods
language: en
---

# HTTP Request Methods

note

These request methods are used by [HTTP](https://open.mp/docs/scripting/functions/HTTP) function.

| ID | Method | Description |
| --- | --- | --- |
| 1 | HTTP\_GET | Sends a regular HTTP request.  
GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of **200 (OK)** if the data is successfully retrieved from the server. |
| 2 | HTTP\_POST | Sends a HTTP request with POST data.  
POST request is used to send data to the server. On successful creation, it returns an HTTP status code of **201**. |
| 3 | HTTP\_HEAD | Sends a regular HTTP request, but ignores any response data - returning only the response code.  
HEAD method is used to request the response headers for a specific resource without receiving the actual content of the resource. |

---
title: Métodos de Requisição HTTP
sidebar_label: Métodos de Requisição HTTP
description: Tipos de requisição HTTP.
---

:::note

Esses métodos de requisição são usados pela função [HTTP](../functions/HTTP).

:::

| ID  | Method    | Description                                                                                                                                                                                                                            |
| --- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | HTTP_GET  | Envia uma requisição HTTP comum.<br />A requisição GET é usada para ler/recuperar dados de um servidor web. O GET retorna um código de status HTTP **200 (OK)** se os dados forem recuperados com sucesso do servidor.           |
| 2   | HTTP_POST | Envia uma requisição HTTP com dados POST.<br />A requisição POST é usada para enviar dados ao servidor. Em caso de criação bem-sucedida, retorna um código de status HTTP **201**.                                                 |
| 3   | HTTP_HEAD | Envia uma requisição HTTP comum, mas ignora quaisquer dados de resposta, retornando apenas o código de resposta.<br />O método HEAD é usado para solicitar os cabeçalhos da resposta de um recurso específico sem receber seu conteúdo. |

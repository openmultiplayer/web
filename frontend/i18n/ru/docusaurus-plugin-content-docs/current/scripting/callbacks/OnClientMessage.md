---
title: OnClientMessage
sidebar_label: OnClientMessage
description: Этот коллбэк вызывается, когда NPC видит сообщение в чате.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Описание

Этот коллбэк вызывается, когда NPC видет сообщение от клиента. Коллбэк будет вызван каждый раз, когда будет использована функция `SendClientMessageToAll` или когда функция `SendClientMessage` будет адресована NPC. Этот коллбэк не будет вызван, если кто-то просто что-то скажет в чат. Для вариации коллбэка с сообщением игрока в чат, см. NPC:OnPlayerText.

| Аргумент   | Описание                     |
| ------ | ------------------------------- |
| color  | Цвет сообщения клиента. |
| text[] | Текст сообщения.             |

## Результат

This callback does not handle returns.

## Пример

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"На счету: $0") != -1)
    {
        SendClientMessage(playerid, -1, "Я бедный :(");
    }
}
```

## Функции

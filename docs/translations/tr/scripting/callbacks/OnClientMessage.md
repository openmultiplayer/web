---
id: OnClientMessage
title: OnClientMessage
description: Bu callback, NPC bir ClientMessage algılandığında tetiklenir.
tags: []
---

:::warning

Bu callback SA-MP 0.3a sürümünde eklendi ve önceki sürümlerde çalıştırılamaz.

:::

## Açıklama

Bu callback, NPC bir ClientMessage algılandığında tetiklenir. Bu, örneğin bir SendClientMessageToAll fonksiyonu gönderdiğinizde oyuncuya SendClientMessage fonksiyonu yansıdığı anda tetiklenecektir. Birisi chat'e mesaj gönderdiği zaman tetiklenmeyecek fakat bunu yapmak isterseniz bkz. NPC:OnPlayerText

| Name   | Description                     |
| ------ | ------------------------------- |
| color  | ClientMessage rengi.            |
| text[] | Gönderilen mesaj içeriği.        |

## Çalışınca Vereceği Sonuçlar

Bu callback herhangi bir sonuç vermez.

## Örnekler

```c
public OnClientMessage(color, text[])
{
    if(strfind(text,"Banka Parası: $0") != -1) SendChat("Ben fikirim. :(");
}
```

## Bağlantılı Fonksiyonlar

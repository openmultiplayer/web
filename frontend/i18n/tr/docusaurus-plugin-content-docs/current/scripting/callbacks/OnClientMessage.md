---
title: OnClientMessage
description: Bu geri çağırma, NPC bir ClientMessage algılandığında tetiklenir.
tags: []
---

## Açıklama

Bu geri çağırma, NPC bir ClientMessage algılandığında tetiklenir. Bu, örneğin bir SendClientMessageToAll fonksiyonu gönderdiğinizde oyuncuya SendClientMessage fonksiyonu yansıdığı anda tetiklenecektir. Birisi chat'e mesaj gönderdiği zaman tetiklenmeyecek fakat bunu yapmak isterseniz bkz. NPC:OnPlayerText

| Parametre   | Açıklama                  |
| ----------- | ------------------------- |
| color       | ClientMessage rengi.      |
| text[]      | Gönderilen mesaj içeriği. |

## Çalışınca Vereceği Sonuçlar

Bu geri çağırma herhangi bir sonuç vermez.

## Örnek

```c
public OnClientMessage(color, text[])
{
    if(strfind(text,"Banka Parası: $0") != -1) SendChat("Ben fakirim. :(");
}
```

## Bağlantılı Fonksiyonlar

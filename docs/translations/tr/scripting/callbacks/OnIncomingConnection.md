---
title: OnIncomingConnection
description: Bu callback bir IP adresi sunucuya erişim sağlamaya çalıştığında tetiklenir.
tags: []
---

:::warning

Bu callback SA-MP 0.3z R2-2 sürümünde eklendi ve önceki sürümlerde çalıştırılamaz.

:::

## Açıklama

Bu callback bir IP adresi sunucuya erişim sağlamaya çalıştığında tetiklenir. BlockIpAddress kullanarak gelen bağlantıları engelleyebilirsiniz.

| Name         | Description                                   |
| ------------ | --------------------------------------------- |
| playerid     | Bağlantı kurmaya çalışan oyuncunun ID'si.     |
| ip_address[] | Bağlantı kurmaya çalışan oyuncunun IP adresi. |
| port         | Kurulmaya çalışılan bağlantının portu.        |

## Çalışınca Vereceği Sonuçlar

1 - Diğer filterscriptlerin bu callbacki çalıştırmasını engeller.

0 - Diğer filterscriptler içinde aranması için pas geçilir.

Her zaman öncelikle filterscriptlerde çağrılır.

## Örnekler

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [BlockIpAddress](../functions/BlockIpAddress): Belli bir zaman için bir IP adresinin sunucuya girmesini engeller.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Daha önce engellenmiş bir IP adresinin engelini kaldırır.

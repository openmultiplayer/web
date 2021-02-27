---
title: CreateMenu
description: Menü oluşturma.
tags: ["menu"]
---

## Açıklama

Menü oluşturma.

| Parametre       | Açıklama                                                                            |
| --------------- | ----------------------------------------------------------------------------------- |
| title[]         | Menünün başlık metni.                                                               |
| columns         | Menü içerisinde kaç sütun olacağı.                                                  |
| Float:x         | Menünün X konumu. (640x460 tuval - 0 menüyü en sola yerleştirir).                   |
| Float:y         | Menünün Y konumu. (640x460 tuval - 0 menüyü en üste koyar.).                        |
| Float:col1width | Sütunun birincil genişliği.                                                         |
| Float:col2width | Sütunun ikincil genişliği.                                                          |

## Çalışınca Vereceği Sonuçlar

Oluşturulan menünün ID'si veya oluşturulamama durumunda -1.

## Örnekler

```c
new Menu:examplemenu;

public OnGameModeInit()
{
    examplemenu = CreateMenu("Menu", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon menüyü sadece OLUŞTURUR. - Oyuncuya gösterilmesi için ShowMenuForPlayer kullanılmalıdır. Yalnıza iki sütun oluşturulabilir. (0 ve 1). Başlığın uzunluğu 32 karaktere eşit veya daha fazlaysa başlık 30 karaktere kısaltılır.

:::

:::warning

There is a limit of 12 items per menu, and a limit of 128 menus in total.

:::

## Bağlantılı Fonksiyonlar

- [AddMenuItem](AddMenuItem): Belirtilen menüye öğe ekleme.
- [SetMenuColumnHeader](SetMenuColumnHeader): Menüdeki sütunlardan biri için başlığı düzenleme.
- [DestroyMenu](DestroyMenu): Menüyü silme.
- [ShowMenuForPlayer](ShowMenuForPlayer): Menüyü oyuncu gösterme.
- [HideMenuForPlayer](HideMenuForPlayer): Menüyü oyuncu için gizleme.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Fonksiyon, bir oyuncu menü içerisinde bir satır seçtiğinde çağrılır.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Fonksiyon, oyuncu menüden çıkış yaptığında çağrılır.

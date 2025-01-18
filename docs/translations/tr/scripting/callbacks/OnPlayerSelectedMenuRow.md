---
title: OnPlayerSelectedMenuRow
description: Bu fonksiyon, bir oyuncu menüden bir öğe seçtiğinde (ShowMenuForPlayer) çağrılır.
tags: ["player", "menu"]
---

## Açıklama

Bu fonksiyon, bir oyuncu menüden bir öğe seçtiğinde (ShowMenuForPlayer) çağrılır.

| Parametre | Açıklama                                                    |
| --------- | ----------------------------------------------------------- |
| playerid  | Menü öğesi seçmiş olan oyuncunun ID'si.                     |
| row       | Seçilen satırın ID'si. İlk satırın ID'si 0'dır.             |

## Çalışınca Vereceği Sonuçlar

Oyun modunda her zaman ilk olarak çağrılır.

## Örnek

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Ornek Menu", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Oge 1");
    AddMenuItem(MyMenu, 0, "Oge 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch(row)
        {
            case 0: print("Oge 1 secildi.");
            case 1: print("Oge 2 secildi.");
        }
    }
    return 1;
}
```

## Notlar

:::tip

Menü ID'si bu fonksiyona aktarılmaz. GetPlayerMenu, oyuncunun hangi menüde bir öğe seçtiğini belirlemek için kullanılmalıdır.

:::

## Bağlantılı Fonksiyonlar

- [CreateMenu](../functions/CreateMenu): Menü oluşturma.
- [DestroyMenu](../functions/DestroyMenu): Menü silme.
- [AddMenuItem](../functions/AddMenuItem): Belirtilen menüye öğe ekleme.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Oyuncu için menü gösterme.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Oyuncu için menü gizleme.

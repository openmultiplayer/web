---
title: AddMenuItem
description: Belirli bir menüye öğe ekler.
tags: ["menu"]
---

## Açıklama

Belirli bir menüye öğe ekler.

| İsim    | Açıklama                       |
| ------- | ------------------------------ |
| menuid  | Öğe eklemek için menü kimliği. |
| column  | Öğenin ekleneceği sütun.       |
| title[] | Yeni menü öğesinin başlığı.    |

## Çalışınca Vereceği Sonuçlar

Bu öğenin eklendiği satırın dizini.

## Örnekler

```c
new Menu:examplemenu;

public OnGameModeInit()
{
    examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(examplemenu, 0, "item 1");
    AddMenuItem(examplemenu, 0, "item 2");
    return 1;
}
```

## Notlar

:::tip

Geçersiz bir menü kimliği geçtiğinde çöker. Menü başına yalnızca 12 öğe olabilir (13. Sütun adı üstbilgisinin sağ tarafına gider (renkli), 14. Ve üstü hiç görüntülenmez). Yalnızca 2 sütun (0 ve 1) kullanabilirsiniz.Bir öğe başına yalnızca 8 renk kodu ekleyebilirsiniz (~r~,~g~ vb.). Menü öğesinin maksimum uzunluğu 31 simgedir.

:::

## İlgili Fonksiyonlar

- [CreateMenu](CreateMenu): Menü oluşturmak.
- [SetMenuColumnHeader](SetMenuColumnHeader): Menüdeki sütunlardan birinin başlığını ayarlayın.
- [DestroyMenu](DestroyMenu): Menüyü yok et.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Oynatıcı menüde bir satır seçtiğinde çağrılır.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Oynatıcı menüden çıktığında çağırılır.

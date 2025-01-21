---
title: OnDialogResponse
description: Bu geri çağırma, bir oyuncu ShowPlayerDialog kullanılarak gösterilen bir dialog içerisinde bir butona tıkladığında, ENTER / esc tuşlarına bastığında veya liste dialogu içerisindeki bir seçeneğe çift tıkladığında(bu seçenek için dialog'un stili list olmalıdır) tetiklenir.
tags: []
---

## Açıklama

Bu geri çağırma, bir oyuncu ShowPlayerDialog kullanılarak gösterilen bir dialog içerisinde bir butona tıkladığında, ENTER / esc tuşlarına bastığında veya liste dialogu içerisindeki bir seçeneğe çift tıkladığında(bu seçenek için dialog'un stili list olmalıdır) tetiklenir.

| Parametre          | Açıklama                                                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | Dialog'u tetikleyen oyuncunun id'si.                                                                                                                           |
| dialogid    | Tetiklenen dialog id'si.                                                                                                                                       |
| response    | Yapılan işlemin sonucu. (sol düğme sonucu 1, sağ düğme sonucu 0 eğer yalnızca bir düğme varsa her zaman 1)                                                     |
| listitem    | Oyuncu tarafından seçilen liste id'si (0'dan başlar) (yalnızca liste stili dialoglar içerisinde kullanılıyorsa doğru sonuç verir, aksi takdirde -1 olacaktır). |
| inputtext[] | Oyuncu tarafından veya liste stili dialoglarda metin girişine girilen metin.                                                                                   |

## Çalışınca Vereceği Sonuçlar

Filterscriptler içerisinde 1 olarak döndürmek diğer filterscripts'lerin bunu okumasını engeller.

## Örnek

```c
// Dialog ID'sini tanımlayalım.
#define DIALOG_RULES 1

// Herhangi bir komutun veya eventin içerisine yerleştirelim.
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Sunucu Kuralları", "- Hile Yapamyın\n- Spam Yapmayın\n- Yöneticilere Saygılı Olun\n\nKuralları onaylıyor musun?", "Evet", "Hayır");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_RULES)
    {
        if(response) // Eğer Evet'e tıklarsa çalışacak işlem.
        {
            SendClientMessage(playerid, COLOR_GREEN, "Kuralları kabul ettiğiniz için teşekkürler.");
        }
        else // Eğer ESC veya Hayır'a tıklarsa çalışacak işlem.
        {
            Kick(playerid);
        }
        return 1; // Bu dialogun işlemini çalıştırdık, bu yüzden 1 döndürdük. OnPlayerCommandText'de gösterilen örnek gibi.
    }

    return 0; // Burada return 0 döndürmelisiniz. Tıpkı OnPlayerCommandText'de gösterilen örnek gibi.
}
// Tekrar dialog ID'sini tanımlıyoruz.
#define DIALOG_LOGIN 2

// Herhangi bir komutun veya eventin içerisine yerleştirelim.
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Giriş", "Şifreni gir:", "Giriş", "Vazgeç");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_LOGIN)
    {
        if(!response) // Cancel tuşuna basarsa çalışacak işlem.
        {
            Kick(playerid);
        }
        else // Eğer Cancel dışında bir işleme tıklarsa gerçekleşecek işlem.
        {
            if(CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Giriş yaptın.");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "Giriş başarısız.");

                // Şifre yanlış olduğu için tekrar gösteriliyor.
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Giriş", "Şifreni gir:", "Giriş", "Vazgeç");
            }
        }
        return 1; // Bu dialogun işlemini çalıştırdık, bu yüzden 1 döndürdük. OnPlayerCommandText'de gösterilen örnek gibi.
    }

    return 0; // Burada return 0 döndürmelisiniz. Tıpkı OnPlayerCommandText'de gösterilen örnek gibi.
}
#define DIALOG_WEAPONS 3

// Herhangi bir komutun veya eventin içerisine yerleştirelim.
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Silahlar", "Desert Eagle\nAK-47\nCombat Shotgun", "Seç", "Kapat");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Select'e tıklandığında çalışacak işlem.
        {
            // Oyuncuya seçtiği liste id'sine göre silah veriliyor.
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Desert Eagle veriliyor.
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // AK-47 veriliyor.
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Combat Shotgun veriliyor.
            }
        }
        return 1; // Bu dialogun işlemini çalıştırdık, bu yüzden 1 döndürdük. OnPlayerCommandText'de gösterilen örnek gibi.
    }

    return 0; // Burada return 0 döndürmelisiniz. Tıpkı OnPlayerCommandText'de gösterilen örnek gibi.
}
#define DIALOG_WEAPONS 3

// Herhangi bir komutun veya eventin içerisine yerleştirelim.
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Silahlar",
"Silahlar\tMermi\tFiyat\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Seç", "Kapat");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Select butonuna tıklandığında çalışır.
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Give them an M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Give them an MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
            }
        }
        return 1; // Bu dialogun işlemini çalıştırdık, bu yüzden 1 döndürdük. OnPlayerCommandText'de gösterilen örnek gibi.
    }

    return 0; // Burada return 0 döndürmelisiniz. Tıpkı OnPlayerCommandText'de gösterilen örnek gibi.
}
```

## Notlar

:::tip

Parametrelerde, dialog stillerine göre değişiklikler olabilir. (daha fazla örnek için tıklayın).

:::

:::tip

Eğer çok sayıda diyaloğunuz varsa, farklı diyaloğlar arasında geçiş yapmak uygundur.

:::

:::warning

Bir oyuncunun dialogu oyun modu tekrar başlatıldığında gizlenmez, bu da sunucunun yeniden başlatıldıktan sonra bu dialog'un yanıt vermesi durumunda sunucunun (Warning:PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID") hatası vermesine neden olur.

:::

## Bağlantılı Fonksiyonlar

- [ShowPlayerDialog](../../scripting/functions/ShowPlayerDialog.md): Oyuncuya dialog gösterir.

---
title: OnPlayerEditObject
description: Bu callback bir oyuncu obje düzenlemeyi bitirdiğinde çağırılır (EditObject/EditPlayerObject).
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3e' />

## Açıklama

Bu callback bir oyuncu obje düzenlemeyi bitirdiğinde çağırılır (EditObject/EditPlayerObject).

| İsim         | Açıklama                                                               |
| ------------ | ---------------------------------------------------------------------- |
| playerid     | Düzenlemeyi yapan oyuncunun ID'si.                                     |
| playerobject | Genel bir obje ise 0 olur, oyuncu objesi ise 1 olur.                   |
| objectid     | Düzenlenen objenin ID'si.                                              |
| response     | Verilen cevabın tipi. [tıkla](../resources/objecteditionresponsetypes) |
| Float:fX     | Düzenlenen objenin X yönündeki koordinatı.                             |
| Float:fY     | Düzenlenen objenin Y yönündeki koordinatı.                             |
| Float:fZ     | Düzenlenen objenin Z yönündeki koordinatı.                             |
| Float:fRotX  | Güzenlenen objenin X yönündeki rotasyonu.                              |
| Float:fRotY  | Güzenlenen objenin Y yönündeki rotasyonu.                              |
| Float:fRotZ  | Güzenlenen objenin Z yönündeki rotasyonu.                              |

## Çalışınca Vereceği Sonuçlar

1 - Diğer scriptlerin bu callbacke ulaşmasını engeller.

0 - Bu script bittikten sonra callback diğer scriptlerde işlenir.

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnekler

```c
public OnPlayerEditObject(playerid, playerobject, objectid, response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
    if (!playerobject) // Eğer bu global bir obje ise, pozisyonunu diğer oyuncular içinde eşzamanlar.
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // Oyuncu save butonuna tıkladı.
            // Pozisyonu ve/veya rotasyonu güncellenen objenin kayıt edilmesi için kodlar yazabilirsiniz.
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // Oyuncu düzenleme işlemini iptal ettiği için objeyi eski pozisyonuna ve/veya rotasyonuna geri getirir.
            if (!playerobject) // Obje bir oyuncu objesi değil ise.
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## Notlar

:::warning

EDIT_RESPONSE_UPDATE kullanırken, devam etmekte olan bir düzenlemeyi bırakırken bu callbacking çağırılmayacağının ve EDIT_RESPONSE_UPDATE'in son güncellemesinin nesnelerin mevcut konumunun senkronizasyonundan çıkmasına neden olacağını unutmayın.

:::

## Bağlantılı Fonksiyonlar

- [EditObject](../functions/EditObject): Edit an object.
- [CreateObject](../functions/CreateObject): Create an object.
- [DestroyObject](../functions/DestroyObject): Destroy an object.
- [MoveObject](../functions/MoveObject): Move an object.

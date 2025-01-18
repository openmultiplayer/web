---
title: OnPlayerKeyStateChange
description: Bu fonksiyon, desteklenen herhangi bir tuşun durumu değiştirildiğinde (basıldığında / bırakıldığında) çağrılır. 
tags: ["player"]
---

## Açıklama

Bu fonksiyon, desteklenen(../resources/keys) herhangi bir tuşun durumu değiştirildiğinde (basıldığında / bırakıldığında) çağrılır. <br/>Yön tuşları, OnPlayerKeyStateChange'i (yukarı / aşağı / sola / sağa) tetiklemez. 

| Parametre | Açıklama                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------ |
| playerid  | Tuşu tetikleyen oyuncunun ID'si.                                                                 |
| newkeys   | Oyuncunun bastığı tuş - [bkz.](../resources/keys)                                                |
| oldkeys   | Oyuncunun geçerli değişiklikten önce bastığı tuş - [bkz](../resources/keys)                      |

## Çalışınca Vereceği Sonuçlar

- Bu fonksiyon herhangi bir sonuç vermez.
- Oyun modunda her zaman ilk olarak çağrılır. 

## Notlar

:::info

Bu fonksiyon, NPC tarafından da çağrılabilir. 

:::

:::tip

Yön tuşları, OnPlayerKeyStateChange'i (yukarı / aşağı / sola / sağa) tetiklemez. Yalnıza zamanlayıcı (timer) veya [OnPlayerUpdate](../callbacks/OnPlayerUpdate) içerisinde kullanılan [GetPlayerKeys](../functions/GetPlayerKeys) ile tetiklenebilir.

:::

## Bağlantılı Fonksiyonlar

    #test

- [GetPlayerKeys](../functions/GetPlayerKeys): Oyuncunun hangi tuşlara bastığını kontrol etme.

## EK BİLGİ

### Giriş

Bu fonksiyon, bir oyuncu desteklenen tuşlardan birine bastığında veya bıraktığında çağrılır (bkz. [Tuşlar](../resources/keys)). <br/>Desteklenen tuşlar gerçek klavye tuşları değildir, ancak San Andreas eşlenmiş işlevi Bu, örneğin, birisinin <strong>boşluk</strong> tuşuna bastığını algılayamayacağınız, ancak sprint tuşuna bastığını algılayabileceğiniz anlamına gelir (bu, boşluk çubuğuna atanabilir veya atanmayabilir). 

### Parametreler

Bu işlevin parametreleri, o anda basılı tutulan tüm tuşların ve bir süre önce basılı tutulan tüm tuşların bir listesidir. Fonksiyon, bir tuş durumu değiştiğinde (yani, bir tuşa basıldığında veya bırakıldığında) ve bu değişiklikten önceki ve sonraki durumları veya tüm tuşları geçtiğinde çağrılır. Bu bilgi, tam olarak ne olduğunu görmek için kullanılabilir, ancak değişkenler, diğer işlevler için parametrelerle aynı şekilde doğrudan kullanılamaz. Değişkenlerin sayısını azaltmak için bir tuşu temsil etmek için yalnızca tek bir BIT kullanılır; bu, bir değişkenin aynı anda birden çok anahtar içerebileceği ve basitçe değerleri karşılaştırmanın her zaman işe yaramayacağı anlamına gelir. 

### Tuş nasıl KONTROL EDİLMEZ 

Bir oyuncunun ATEŞ ETME düğmesine bastığını tespit etmek istediğinizi varsayalım, bariz kod şöyle olacaktır: 

```c
if (newkeys == KEY_FIRE)
```

Bu kod testinizde bile işe yarayabilir, ancak bu yanlış ve testiniz yetersiz. Çömelmeyi ve ateşe basmayı deneyin - kodunuz anında çalışmayı durduracaktır. Neden? "newkeys" artık "KEY_FIRE" ile aynı olmadığından, "KEY_CROUCH" İLE BİRLEŞTİRİLEN "KEY_FIRE" ile aynıdır. 

### Tuş nasıl kontrol edilir

Öyleyse, değişken aynı anda birden fazla tuş içerebiliyorsa, yalnızca tek bir anahtarı nasıl kontrol edersiniz? Cevap biraz maskelemedir. Her tuşun değişkende kendi biti vardır (bazı tuşlar aynı bit'e sahiptir, ancak bunlar ayak üzerinde / boş tuşlardır, bu nedenle hiçbir zaman aynı anda basılamaz) ve sadece o tek biti kontrol etmeniz gerekir: 

```c
if (newkeys & KEY_FIRE)
```

Tekli <strong>&</strong> 'nin doğru olduğunu unutmayın - bu, iki ve işareti olarak adlandırılan mantıksal bir VE değil, bitsel VE'dir. 

Şimdi bu kodu test ederseniz, ateş tuşuna bastığınızda çömelmiş veya ayakta dursanız da çalışacaktır. Ancak yine de küçük bir sorun var - tuşu tuttuğunuz sürece ateşlenecek. OnPlayerKeyStateChange, bir anahtar her değiştiğinde çağrılır ve ateşleme tuşu her basılı tutulduğunda bu kod doğrudur. Ateş tuşuna basarsanız, o tuş basılı tutulursa ve çömelme tuşuna basarsanız, kod tekrar çalışacaktır çünkü bir tuş (çömelme) değişmiştir ve ateş hala basılıdır Bir tuşa ilk basıldığında nasıl anlarsınız, ancak Hala tutulduğunda ve başka bir tuş değiştiğinde tekrar tetiklenmiyor mu? 

### Basılan bir tuş nasıl kontrol edilir 

Burası "oldkeys" in devreye girdiği yerdir. Bir tuşa yeni basılmış olup olmadığını kontrol etmek için önce "yeni tuşlar" olarak ayarlanıp ayarlanmadığını kontrol etmeniz gerekir - yani basılı tutulduğu anlamına gelir ve sonra "oldkeys" de OLMADIĞINI kontrol edin - yani sadece tutuldu. Aşağıdaki kod bunu yapar: 

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

Bu YALNIZCA ATEŞ tuşuna ilk basıldığında doğru olacaktır, basılı tutulduğunda ve başka bir tuş değiştiğinde değil. 

### Basılması bırakılmış bir tuş nasıl kontrol edilir 

Yukarıdaki ile tamamen aynı prensip, ancak tersine çevirdik: 

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### Birden çok tuş nasıl kontrol edilir 

Çömelip ateş eden oyuncuları kontrol etmek istiyorsanız, aşağıdaki kod işe yarayacaktır: 

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

Ancak, İLK ateşe bastığında ve çömeldiklerinde tespit etmek istiyorsanız, bu kod ÇALIŞMAYACAKTIR. İki tuşa tam olarak aynı anda basmayı başarırlarsa işe yarayacak, ancak fraksiyonel olarak dışarıdaysa (yarım saniyeden çok daha az) işe yaramayacaktır: 

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

Neden olmasın? Çünkü OnPlayerKeyStateChange, tek bir tuş her değiştiğinde çağrılır. Böylece "KEY_FIRE" tuşuna basarlar - OnPlayerKeyStateChange, "oldkeys" değil "KEY_FIRE" ile çağrılır, sonra "KEY_CROUCH" tuşuna basarlar - OnPlayerKeyStateChange, "KEY_CROUCH" ve "KEY_FIRE" ile çağrılır "newkeys", ancak " KEY_FIRE "zaten basıldığı için artık "oldkeys"de bulunuyor, bu nedenle (oldkeys & KEY_FIRE) başarısız olacaktır. Neyse ki çözüm çok basittir (aslında orijinal koddan daha basit): 

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

Bu karmaşık görünebilir, ancak her iki tuşun da "newkeys" olarak ayarlandığını ve her iki tuşun da "oldkeys" olarak ayarlanıp ayarlanmadığını kontrol eder, eğer bunlardan biri "oldkeys" olarak ayarlanmışsa, her ikisi de önemli değildir. Tüm bunlar tanımlarla büyük ölçüde basitleştirilebilir. 

## Basitleştirme

### Tuş tutarken algılama

Tanım:

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

Bir tuşa basılu tutmak:

```c
if (HOLDING( KEY_FIRE ))
```

Birden fazla tuşa basılması: 

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### Tuşu ilk basılıyorken algılama 

Tanım:

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

Tuşa basıldığında:

```c
if (PRESSED( KEY_FIRE ))
```

Birden fazla tuşa basıldığında:

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### Bir oyuncunun şu anda bir tuşa basıp basmadığını algılama 

Tanım:

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

Bir tuşa basma:

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

Birden fazla tuşa basma:

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### Tutması bırakılmış tuşu algılama

Tanım:

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

Tuş bırakıldığında:

```c
if (RELEASED( KEY_FIRE ))
```

Birden fazla tuş bırakıldığında:

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## Örnek

### Oyuncu ateş etme tuşuna bastığında nitro ekleme.

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_FIRE))
	{
		if (IsPlayerInAnyVehicle(playerid))
		{
			AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);
		}
	}
	return 1;
}
```

### Süper zıplama

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_JUMP))
	{
		new
			Float:x,
			Float:y,
			Float:z;
		GetPlayerPos(playerid, x, y, z);
		SetPlayerPos(playerid, x, y, z + 10.0);
	}
	return 1;
}
```

### Kullanım sırasında ölümsüzlük

```c
new
	Float:gPlayerHealth[MAX_PLAYERS];

#if !defined INFINITY
	#define INFINITY (Float:0x7F800000)
#endif

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_ACTION))
	{
		// Oyuncu tuşa bastı
		// ve eski canını bir tanım üzerine kaydetti.
    
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// Tuşu bıraktığında tanım üzerindeki canı tekrar oyuncuya verildi.
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### Açıklama

NASIL yapıldığı konusunda endişelenmenize gerek yok. HOLDING (BASMAK), bir tuşa (veya tuşlara) basıp basmadıklarını algılar, daha önce basmış olup olmadıklarına bakılmaksızın, PRESSED (BASILI), yalnızca tuş (lar) a basıp basmadıklarını algılar ve RELEASED (BIRAKMAK), yalnızca bir tuş (lar) ı bırakıp bırakmadıklarını algılar. Ancak daha fazlasını öğrenmek istiyorsanız okumaya devam edin.

Bunu sadece & veya == kullanarak değil, bu şekilde yapmanız gerekmesinin nedeni, basılabilecek veya basılmayabilecek diğerlerini göz ardı ederek tam olarak istediğiniz tuşları algılamaktır. İkili olarak KEY_SPRINT: 

```
0b00001000
```

ve KEY_JUMP:

```
0b00100000
```

böylece onları istenen anahtarlara ORing (bunları bu örnekte de ekleyebiliriz, ancak bu her zaman böyle değildir) verir: 

```
0b00101000
```

Sadece & kullanıyor olsaydık ve OnPlayerKeyStateChange, atlamaya basan bir oyuncu için çağrılsaydı, aşağıdaki kodu alırdık: 

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000 
```

İki sayının VE değeri 0 değildir, dolayısıyla kontrolün sonucu doğrudur, ki istediğimiz bu değildir.

Eğer sadece == kullansaydık, iki sayı açıkça aynı değildir, bu yüzden kontrol başarısız olur, istediğimiz de budur.

Oyuncu zıplama, koşma ve çömelme tuşuna basıyorsa, aşağıdaki kodu alırdık: 

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

VE'li versiyonu, gerekli tuşlarla aynıdır ve 0 değildir, bu nedenle doğru cevabı verecektir, ancak iki orijinal sayı aynı olmadığından == başarısız olacaktır. Her iki örnekte de ikisinden biri doğru cevabı vermiş ve biri yanlış cevabı vermiştir. İlkini & ve == kullanarak karşılaştırırsak şunu elde ederiz: 
```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

Açıkçası istenen ve VE'li aynı değildir, bu nedenle kontrol başarısız olur, bu doğru. İkinci örnek için: 

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

Aranan ve VE'li aynıdır, bu yüzden onları eşit olarak karşılaştırmak, yine doğru olan gerçek bir sonuçla sonuçlanacaktır. 

Dolayısıyla, bu yöntemi kullanarak, basılabilen veya basılamayan diğer tüm tuşları göz ardı ederek belirli tuşlara basılıp basılmadığını doğru bir şekilde kontrol edebiliriz. eski tuş kontrolü, gerekli tuşlara önceden basılmadığından emin olmak için == yerine sadece != kullanır, bu nedenle bunlardan birine basıldığını biliyoruz. 

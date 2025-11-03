# Giriş

---

"pawn", C tarzında bir sözdizimine sahip, basit, tip olmayan, 32-bit bir "scripting" (betikleme) dilidir. Yürütme hızı, kararlılık, basitlik ve küçük bir bellek izi, hem dil hem de pawn programının çalıştığı yorumlayıcı/soyut makine için temel tasarım kriterleriydi.

Bir uygulama veya araç, tüm kullanıcılar için her şeyi yapamaz veya olamaz.
Bu, diğer yazılım sistemlerinde olduğu gibi, uygulamalarda geniş yapılandırma
seçeneklerinin ve makro veya betik dillerinin varlığını açıklar. Kendi uygulamalarım çeşitli küçük diller içeriyordu; çoğu çok basitti, bazıları genişti. . . ve çoğu ihtiyaç, özel bir amaç kütüphanesi olan genel bir amaçlı dil ile çözülebilirdi. İşte bu yüzden pawn.

Pawn dili, bir ana uygulamada nesneleri manipüle etmek için esnek bir dil olarak tasarlandı. Araç seti (derleyici, soyut makine), genişletilebilir ve farklı yazılım/donanım mimarilerinde çalışacak şekilde yazıldı.

## ♦

Pawn, orijinal Small C'nin Ron Cain ve James Hendrix tarafından geliştirilen bir soyundur, ki bu da C'nin bir alt kümesiydi. Small C'ye yaptığım bazı değişiklikler, örneğin, tür sisteminin kaldırılması ve referanslarla işaretçilerin yerine kullanılması gibi, temelde dilimi artık bir "C alt kümesi" veya "C diyalektiği" olarak adlandırmamı zorlaştırdı. Bu nedenle, başlıktan "C" yi çıkardım ve dilimin adını Dr. Dobb's Journal'daki yayınımda ve o zamandan beri "Small" olarak kullandım. Ürünün geliştirilmesi ve bakımı sırasında birçok değişiklik talebi aldım. Sıkça talep edilen değişikliklerden biri dil için farklı bir ad kullanmaktı — İnternet'te Small betik dili hakkında bilgi aramak, "small" kelimesinin çok yaygın bir kelime olması nedeniyle engelleniyordu. Ad değişikliği, dilde önemli bir değişiklikle birlikte gerçekleşti: "durumlar"ın (ve durum makinelerinin) desteklenmesi.

Ron Cain ve James Hendrix'e (ve daha yakın zamanda Andy Yuen'e), ve Dr. Dobb's Journal'a bu topu devraldıkları için minnettarım. Orijinal kodun neredeyse her satırına birkaç kez dokunmuş olmama rağmen, Small C'nin kökenleri hala net bir şekilde görünüyor.

## ♦

---

Tasarım hedefleri ve uzlaşmaların ayrıntılı bir incelemesi Ek C'de bulunmaktadır; burada birkaç ana noktayı özetlemek isterim. Yukarıdaki paragraflarda belirtildiği gibi, pawn, uygulamaları özelleştirmek (betik yazarak) için, uygulamalar yazmak için değil. Pawn, nesneleri (metin, sprite'lar, akışlar, sorgular, vb.) ana uygulamada manipüle etmeyi amaçladığından pawn programları veri yapılandırmada zayıftır, ancak pawn programına, soyut makinesi dışındaki herhangi bir veriye doğrudan erişim izni verilmez. Bir pawn programının ana uygulamadaki nesneleri manipüle etmek için sahip olduğu tek yol, ana uygulamanın sağladığı alt rutinleri, yani "yerel işlevler"i çağırmaktır.

Pawn, bu alanda esnek bir dildir: işlevleri çağırma. Pawn, bir işlevin herhangi bir argümanı için (sadece sonuncusu değil) varsayılan değerleri, çağrıya referansla çağrı yapma, "adlandırılmış" ve "pozisyonel" işlev argümanlarını destekler. Pawn'ın bir "tür denetimi" mekanizması yoktur, çünkü tip olmayan bir dil olması nedeniyle, ancak yerine bir "sınıflandırma kontrolü" mekanizması olan "etiketler"i sunar. Etiket sistemi, her bir argümanın birden fazla kabul edilebilir etiketi belirtmesine izin verdiği için özellikle işlev argümanları için kullanışlıdır.Ancak bunların birleşiminde. 

Pawn için, adlandırılmış argümanların —size işlev argümanlarını herhangi bir sırayla belirtme ve varsayılan değerlerin —ilginç olmayan argümanları belirtmeyi atlamınıza izin verme— kombinasyonunun, ana uygulamadaki nesneleri manipüle etmek için (yerel) işlevleri çağırmak için uygun ve "açıklayıcı" bir yol olduğunu düşünüyorum.

---

[İçerik listesine geri dön](00-Contents)
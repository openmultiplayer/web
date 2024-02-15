---
title: Yaygın Sunucu Sorunları
---

## Sunucunun hemen çökmesi

En yaygın olarak, server.cfg dosyanızda bir hata veya oyun modunuzun eksik olmasından kaynaklanıyor olabilir. server_log.txt dosyasını kontrol edin, sunucunun çökmesine sebep olan sorun genellikle en altta yazar. Eğer bulamazsanız, crashinfo.txt dosyasını kontrol edin. Çökmeye neyin sebep olduğunu bulmak için daha iyi bir bir yöntem olan, Zeex/0x5A656578 tarafından geliştirilen Crash Detect eklentisini kullanmaktır ([link için tıklayın](https://github.com/Zeex/samp-plugin-crashdetect)). Bu eklenti, satır numaraları, fonksiyon adları, parametre değerleri gibi daha fazla bilgi sağlayacaktır. Eğer script debug modunda derlenmişse (-d3 flag), derleyici tüm bu bilgileri çıktı olarak .amx dosyasına ekleyecektir.

## Sunucu çalışmıyor - güvenlik duvarı devre dışı

Sunucunuza oyuncuların katılmasına izin vermek için portlarınızı yönlendirmeniz gerekecek. PF Port Checker'ı www.portforward.com adresinden indirip, kullanarak portlarınızı yönlendirebilirsiniz. Portlar yönlendirilmediyse, bu portları yönlendirmeniz gerektiği anlamına gelir. Bunun için [http://portforward.com/english/routers/port_forwarding/routerindex.htm](http://portforward.com/english/routers/port_forwarding/routerindex.htm) adresindeki yönlendirici listesini kontrol edebilirsiniz.

Bu, portların nasıl yönlendirileceğiyle ilgili tüm bilgileri içerir.

## 'Packet was modified'

Bu hata genellikle şu şekilde gösterilir:

```
[ss:dd:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

Oyuncu zaman aşımına uğradığında veya bağlantı sorunları yaşıyorsa meydana gelir.

## 'Warning: client exceeded messageslimit'

Bu hata genellikle şu şekilde gösterilir:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

Bir oyuncunun sunucuya saniyede gönderdiği mesaj sayısı sınırı aştığında meydana gelir.

## 'Warning: client exceeded ackslimit'

Bu hata genellikle şu şekilde gösterilir:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

Bir oyuncu Acks (acknowledgments) sınırını aştığında meydana gelir.

## 'Warning: client exceeded messageholelimit'

Bu hata genellikle şu şekilde gösterilir:

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

Oyuncuların belirli türdeki mesajları (iletişim paketleri) aşırı miktarda göndermelerini engellemek için olan sınırı aştığında meydana gelir.

## 'Warning: Too many out-of-order messages'

Bu hata genellikle şu şekilde gösterilir:

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

Bu, 'out of order messages', yani oyuncularım belirli türdeki mesajları (iletişim paketleri) aşırı miktarda göndermelerini engellemek için olan sınırın aşılması durumunda meydana gelir.

Daha fazla bilgi için, [bu bağlantıya](ControllingServer#RCON_Commands) bakın.

## Oyuncular sürekli "Unacceptable NickName" hatası alıyor, ancak geçerli

Eğer kabul edilebilir bir isim kullanıldığından eminseniz ve sunucu Windows üzerinde çalışıyorsa, samp-server.exe dosyasının uyumluluk seçeneğini Windows 98'e değiştirmeyi deneyin, muhtemelen sunucu yeniden başlatıldıktan sonra sorun çözülecektir.

Uzun süre çalışan Windows sunucuları bu soruna neden olabilir. Bu, yaklaşık 50 gün sunucu çalışma süresinde fark edilmiştir. Sorunu çözmek için işletim sisteminin yeniden başlatılması gereklidir.

## `MSVCR___.dll`/`MSVCP___.dll` bulunamadı

Bu sorun genellikle bir Windows sunucusunda, bilgisayarınızda şu anda yüklü olan Visual C++ runtime'ın daha yüksek bir sürümünü kullanan bir eklentiyi yüklemeye çalışırken ortaya çıkar. Bu durumu düzeltmek için uygun Microsoft Visual C++ runtime kütüphanelerini indirin. Unutmayın ki SA-MP sunucusu 32 bit olduğu için mimariye bakılmaksızın runtime'ın 32 bit (x86) sürümünü de indirmeniz gerekecektir. İhtiyacınız olan runtime sürümü, dosya adındaki sayılarla belirtilir (aşağıdaki tabloya bakınız), ancak hepsini indirmenizde bir sakınca yoktur. Bu kütüphaneler yığılmaz, yani başka bir deyişle: yalnızca 2015 sürümünü yüklerseniz, 2013 ve önceki sürümlerin runtime'larını alamazsınız.

| Sürüm numarası | Runtime                                       |
| -------------- | --------------------------------------------- |
| 10.0           | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0           | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0           | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0           | Microsoft Visual C++ 2015 x86 Redistributable |

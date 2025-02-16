---
title: BlockIpAddress
description: Bina-block ang isang IP address mula sa karagdagang komunikasyon sa server para sa isang nakatakdang tagal ng oras (na may pinapayagang mga wildcard).
tags: []
---

## Description

Bina-block ang isang IP address mula sa karagdagang komunikasyon sa server para sa isang nakatakdang tagal ng oras (na may pinapayagang mga wildcard). Ang mga manlalarong sumusubok na kumonekta sa server na may naka-block na IP address ay makakatanggap ng generic na "Ikaw ay pinagbawalan mula sa server na ito." mensahe. Ang mga manlalaro na online sa tinukoy na IP bago ang block ay mag-timeout pagkatapos ng ilang segundo at, kapag muling kumonekta, ay makakatanggap ng parehong mensahe.

| Name       | Description                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| ip_address | Ang IP na i-bloblock                                                                                       |
| timems     | Ang oras (sa millisecond) kung saan iba-block ang koneksyon. 0 ay maaaring gamitin para sa indefinite block|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // kung nagbigay sila ng masamang password
    {
        BlockIpAddress(ip, 60 * 1000); // I-block ang mga koneksyon mula sa ip na ito sa loob ng isang minuto
    }
    return 1;
}
```

## Notes

:::tip

Maaaring gamitin ang mga wildcard sa function na ito, halimbawa, ang pagharang sa IP '6.9._._' ay haharangan ang lahat ng IP kung saan ang unang dalawang octet ay 6 at 9 ayon sa pagkakabanggit. Anumang numero ay maaaring maging kapalit ng isang asterisk.

:::

## Related Functions

- [UnBlockIpAddress](UnBlockIpAddress): I-unblock ang isang IP na dati nang na-block.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Tinatawag kapag sinusubukan ng isang manlalaro na kumonekta sa server.
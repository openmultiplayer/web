---
title: OnDialogResponse
sidebar_label: OnDialogResponse
description: Callback นี้ถูกเรียกเมื่อผู้เล่นตอบสนองกับกล่องโต้ตอบที่แสดงโดยใช้ ShowPlayerDialog ไม่ว่าจะ คลิกปุ่ม, กด ENTER/ESC หรือดับเบิลคลิกที่รายการไอเทม (หากใช้กล่องโต้ตอบแบบรายการ)
tags: []
---

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อผู้เล่นตอบสนองกับกล่องโต้ตอบที่แสดงโดยใช้ ShowPlayerDialog ไม่ว่าจะ คลิกปุ่ม, กด ENTER/ESC หรือดับเบิลคลิกที่รายการไอเท(หากใช้กล่องโต้ตอบแบบรายการ)

| ชื่อ        | คำอธิบาย                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------- |
| playerid    | ไอดีของผู้เล่นที่ตอบสนองกับกล่องโต้ตอบ                                                             |
| dialogid    | ไอดีของกล่องโต้ตอบที่ผู้เล่นตอบสนองที่มาจาก ShowPlayerDialog                                       |
| response    | 1 สำหรับปุ่มซ้าย และ 0 จากปุ่มขวา (หากมีแค่ปุ่มเดียว จะเป็น 1 เสมอ)                                |
| listitem    | ไอดีของรายการไอเทมที่ถูกเลือกโดยผู้เล่น (เริ่มจาก 0) (แค่กล่องโต้ตอบรูปแบบรายการ นอกนั้นจะเป็น -1) |
| inputtext[] | ข้อความที่ถูกป้อนเข้ามาโดยผู้เล่นหรือรายการไอเทมที่ถูกเลือก                                        |

## ส่งคืน

จะถูกเรียกใน Filterscripts ก่อนเป็นอันดับแรกเสมอ ดังนั้นการส่งค่าคืนเป็น 1 จะบล็อกไม่ให้ Filterscripts อื่น ๆ ได้เห็น

## ตัวอย่าง

```c
// กำหนดไอดีกล่องโต้ตอบ เพื่อให้เราสามารถควบคุมการตอบสนองได้
#define DIALOG_RULES 1

// คำสั่งประมาณนี้
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "กฎของเซิร์ฟเวอร์", "- ห้ามโกง\n- ห้ามสแปม\n- เคราพแอดมิน\n\nคุณยอมรับกฎเหล่านี้ไหม?", "ยอมรับ", "ไม่ยอมรับ");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // หากพวกเขาคลิก 'ยอมรับ' หรือกด enter
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the กฎของเซิร์ฟเวอร์!");
        }
        else // กด ESC หรือคลิกยกเลิก
        {
            Kick(playerid);
        }
        return 1; // เราได้จัดการกล่องโต้ตอบนี้เรียบร้อยแล้วดังนั้นส่งค่าคืน 1 เหมือนกับ OnPlayerCommandText
    }

    return 0; // คุณต้องส่งค่าคืนเป็น 0 ตรงนี้! เหมือนกับ OnPlayerCommandText
}
#define DIALOG_LOGIN 2

// คำสั่งประมาณนี้
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "เข้าสู่ระบบ", "โปรดป้อนรหัสผ่านของคุณ:", "เข้าสู่ระบบ", "ยกเลิก");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // หากพวกเขาคลิก 'ยกเลิก' หรือกด esc
        {
            Kick(playerid);
        }
        else // กด ENTER หรือคลิกปุ่ม 'เข้าสู่ระบบ'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "ตอนนี้คุณได้เข้าสู่ระบบเรียบร้อยแล้ว!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "เข้าสู่ระบบล้มเหลว");

                // แสดงกล่องล็อกอินอีกครั้ง
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "เข้าสู่ระบบ", "โปรดป้อนรหัสผ่านของคุณ:", "เข้าสู่ระบบ", "ยกเลิก");
            }
        }
        return 1; // เราได้จัดการกล่องโต้ตอบนี้เรียบร้อยแล้วดังนั้นส่งค่าคืน 1 เหมือนกับ OnPlayerCommandText
    }

    return 0; // คุณต้องส่งค่าคืนเป็น 0 ตรงนี้! เหมือนกับ OnPlayerCommandText
}
#define DIALOG_WEAPONS 3

// คำสั่งประมาณนี้
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "อาวุธ", "Desert Eagle\nAK-47\nCombat Shotgun", "เลือก", "ปิด");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // หากพวกเขาคลิก 'เลือก' หรือดับเบิลคลิกที่อาวุธ
        {
            // ให้อาวุธพวกเขา
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // ให้ desert eagle พวกเขา
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // ให้ AK-47 พวกเขา
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // ให้ Combat Shotgun พวกเขา
            }
        }
        return 1; // เราได้จัดการกล่องโต้ตอบนี้เรียบร้อยแล้วดังนั้นส่งค่าคืน 1 เหมือนกับ OnPlayerCommandText
    }

    return 0; // คุณต้องส่งค่าคืนเป็น 0 ตรงนี้! เหมือนกับ OnPlayerCommandText
}
#define DIALOG_WEAPONS 3

// คำสั่งประมาณนี้
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "อาวุธ",
"อาวุธ\tกระสุน\tราคา\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"เลือก", "ปิด");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // หากพวกเขาคลิก 'เลือก' หรือดับเบิลคลิกที่อาวุธ
        {
            // ให้อาวุธพวกเขา
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // ให้ M4 พวกเขา
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // ให้ MP5 พวกเขา
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // ให้ AK-47 พวกเขา
            }
        }
        return 1; // เราได้จัดการกล่องโต้ตอบนี้เรียบร้อยแล้วดังนั้นส่งค่าคืน 1 เหมือนกับ OnPlayerCommandText
    }

    return 0; // คุณต้องส่งค่าคืนเป็น 0 ตรงนี้! เหมือนกับ OnPlayerCommandText
}
```

## บันทึก

:::tip

พารามิเตอร์สามารถมีค่าที่แตกต่างกันได้ ขึ้นอยู่กับรูปแบบของกล่องโต้ตอบ ([คลิกเพื่อดูตัวอย่างเพิ่มเติม](../resources/dialogstyles.md)).

:::

:::tip

It is appropriate to switch through different dialogids, if you have many.

:::

:::warning

กล่องโต้ตอบของผู้เล่นจะไม่ถูกซ่อนเมื่อเกมโหมดรีสตาร์ท ทำให้เซิร์ฟเวอร์ปริ้นท์ "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" หากผู้เล่นตอบสนองกับกล่องโต้ตอบนี้หลังจากรีสตาร์ท

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ShowPlayerDialog](../../scripting/functions/ShowPlayerDialog.md): แสดงกล่องโต้ตอบกับผู้เล่น

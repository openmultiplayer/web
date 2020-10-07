Creating a simple Menu
======================

### From open.mp Wiki



Contents
--------

*   1 Menus in Pawn
*   2 First menu steps
*   3 Add some menu items
*   4 Creating the effects for the items
*   5 Last steps
*   6 Last words
*   7 A full test script for menus


### 1 Menus in Pawn
-------------

Menus look very complicated and difficult to script for the most players, although it isn't. Here I will show you how to create a simple menu. At the end we will have created a teleport menu.


### 2 First menu steps
----------------

First we have to create a menu. The prefix before is Menu: this makes the variable the correct type \[there are different types for different uses such as Float: bool: Text3D: etc\] Insert this line after the #includes, #defines, forwards etc:

new Menu:teleportmenu;

Okay, we created the variable to store the menu. Now we have to create the menu and assign the variable we created to the menu. Type this into OnGameModeInit():

teleportmenu = [CreateMenu](../scripting/functions/CreateMenu)("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);

Now a bit of an explanation about the CreateMenu arguments.

[CreateMenu](../scripting/functions/CreateMenu)(title, columns, Float:x, Float:y, Float:col1width, Float:col2width);
**Parameters:**
|Parameter|Specifies|
|--- |--- |
|title|The heading of the menu
|columns|The number here defines how much columns are used \[2 is maximum\]|
|Float:x|The heigth position of the menu on screen \[left to right\]|
|Float:y| The width position of the menu on screen \[up and down\]|
|Float:col1width|The width of the first column|
|Float:col2width|The width of the second column|


### 3 Add some menu items
-------------------

Ok, now we've got the Menu, but we need some items, under which you can choose in the menu. You add them underneath the CreateMenu that we made earlier.

[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 0, "LS");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 0, "LS");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 0, "SF");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 0, "SF");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 0, "LV");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 0, "LV");
 
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 1, "Grove Street");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 1, "Starfish Tower");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 1, "Wheel Arch Angels");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 1, "Jizzys");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 1, "4 Dragons");
[AddMenuItem](../scripting/functions/AddMenuItem)(teleportmenu, 1, "Come-a-Lot");

The explanation for AddMenuItem:

[AddMenuItem](../scripting/functions/AddMenuItem)(menuid, column, text);

|menuid| The menuid of the menu where the item shall be displayed|
|--|--|
|column| The column in which the item shall be shown|
|text|   The text of the item|


### 4 Creating the effects for the items
----------------------------------

Okay, now that we have created a full menu with items what should happen when you choose an item? In our example we want to make a teleportmenu, so we should get teleported to the position we choose. When a player selects an item on a menu the script calls the callback: public [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow)(playerid, row). The best way to do it is to do it with a switch, this is like several if statements to check if a variable is worth certain values. But first we only want these effects for the menu we want so we need to create a variable that holds what menu the player is looking at, this is done with 'GetPlayerMenu':

new Menu:CurrentMenu = [GetPlayerMenu](../scripting/functions/GetPlayerMenu)(playerid);

Now, when somebody selects something on the menu, their menuid will be saved in 'CurrentMenu'.

Now we have to check that the menu they selected on is the menu we want:


public public [OnPlayerSelectedMenuRow](../scripting/functions/OnPlayerSelectedMenuRow)(playerid, row)
{
	new Menu:CurrentMenu = [GetPlayerMenu](../scripting/functions/GetPlayerMenu)(playerid);
	if (CurrentMenu == teleportmenu)
	{
    	//stuff
	}
	return 1;
}

Now in between these brackets is where the 'switch' is, this checks what item the player selected or 'row' this can be done with if statements checking what row it is, but the switch is a much simpler way of writing it.

if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            [SetPlayerPos](../scripting/functions/SetPlayerPos)(playerid, 2493.9133, \-1682.3986, 13.3382);
            [SetPlayerInterior](../scripting/functions/SetPlayerInterior)(playerid, 0);
            [SendClientMessage](../scripting/functions/SendClientMessage)(playerid, 0xFFFFFFFF, "Welcome to Grove Street");
        }
        case 1: //Starfish Tower
        {
            [SetPlayerPos](../scripting/functions/SetPlayerPos)(playerid, 1541.2833, \-1362.4741, 329.6457);
            [SetPlayerInterior](../scripting/functions/SetPlayerInterior)(playerid, 0);
            [SendClientMessage](../scripting/functions/SendClientMessage)(playerid, 0xFFFFFFFF, "Welcome to the top of Starfish Tower");
        }
        case 2: //Wheel Arch Angels
        {
            [SetPlayerPos](../scripting/functions/SetPlayerPos)(playerid, \-2705.5503, 206.1621, 4.1797);
            [SetPlayerInterior](../scripting/functions/SetPlayerInterior)(playerid, 0);
            [SendClientMessage](../scripting/functions/SendClientMessage)(playerid, 0xFFFFFFFF, "Welcome to the Wheel Arch Angels tuning-shop");
        }
        case 3: //Jizzys
        {
            [SetPlayerPos](../scripting/functions/SetPlayerPos)(playerid, \-2617.5156, 1390.6353, 7.1105);
            [SetPlayerInterior](../scripting/functions/SetPlayerInterior)(playerid, 0);
            [SendClientMessage](../scripting/functions/SendClientMessage)(playerid, 0xFFFFFFFF, "Welcome to Jizzy's Nightclub!");
        }
        case 4: //4Dragons
        {
            [SetPlayerPos](../scripting/functions/SetPlayerPos)(playerid, 2028.5538, 1008.3543, 10.8203);
            [SetPlayerInterior](../scripting/functions/SetPlayerInterior)(playerid, 0);
            [SendClientMessage](../scripting/functions/SendClientMessage)(playerid, 0xFFFFFFFF, "Welcome to the Four Dragons Casino");
        }
        case 5: //Com-a-Lot
        {
            [SetPlayerPos](../scripting/functions/SetPlayerPos)(playerid, 2169.1838, 1122.5426, 12.6107);
            [SetPlayerInterior](../scripting/functions/SetPlayerInterior)(playerid, 0);
            [SendClientMessage](../scripting/functions/SendClientMessage)(playerid, 0xFFFFFFFF, "Welcome to the Come-a-Lot casino!");
        }
    }
}



### 5 Last steps
----------

Now we need a command to show the menu. This is the easiest step. Just a comparison with strcmp and a ShowMenuForPlayer. As you should know, this comes in the callback OnPlayerCommandText

if([strcmp](../scripting/functions/strcmp)(cmdtext, "/teleport", true) == 0)
{
    [ShowMenuForPlayer](../scripting/functions/ShowMenuForPlayer)(teleportmenu,playerid);
    return 1;
}

Really easy, wasn't it?


### 6 Last words
----------

Okay, after you read this AND understood it, try your own menu. As you could see, it isn't that difficult, but will impress the players on your server all the more. And you can script really cool effects with this. It's also very cool for general stores or supermarkets for the things you can buy. Then you can subtract some money as effect and the price is shown in another column in the menu. But now, work on your own.

You can aslo add [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable)(playerid,0); after ShowPlayerMenu(..);
and  [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable)(playerid,1) at end of OnPlayerSelectedMenuRow(..) so that player may not move while he is browsing menus.

I hope you learned something from this tutorial. If you got any questions, ask in the forums/discord.


# A full test script for menus
----------------------------
```
// Test menu functionality filterscipt
 
#include <a_samp>
 
#define TEST_MENU_ITEMS 6
 
new Menu:TestMenu = -1;
new TestMenuStrings[6][16] = {"Test1", "Test2", "Test3", "Test4", "Test5", "Test6"};
 
HandleTestMenuSelection(playerid, row)
{
	new s[256];
 
	if(row < TEST_MENU_ITEMS) {
		format(s,256,"You selected item %s",TestMenuStrings[row]);
		SendClientMessage(playerid,0xFFFFFFFF,s);
	}
}
 
InitTestMenu()
{
	TestMenu = CreateMenu("Test Menu", 1, 200.0, 150.0, 200.0, 200.0);
        if(TestMenu == -1)
        {
            printf(The creation of menu failed!");
            return 0;
        }
	for(new x=0; x < TEST_MENU_ITEMS; x++) {
    	        AddMenuItem(TestMenu, 0, TestMenuStrings[x]);
	}
        return 1;
}
 
public OnFilterScriptInit()
{
   	if(InitTestMenu())
        {
            printf("The creation of menu succeeded!");
        }
        return 1;
}
 
public OnPlayerSelectedMenuRow(playerid, row)
{
        new Menu:PlayerMenu = GetPlayerMenu(playerid);
 
        if(PlayerMenu == TestMenu) {
	     HandleTestMenuSelection(playerid, row);
	}
        return 1;
}
 
public OnPlayerCommandText(playerid, cmdtext[])
{
	if(!strcmp(cmdtext, "/menutest", true) && TestMenu != -1)	{
    	     ShowMenuForPlayer(TestMenu, playerid);
    	     return 1;
	}
	return 0;
}
```

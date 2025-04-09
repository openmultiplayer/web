"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70579"],{23509:function(i){i.exports=JSON.parse('{"tag":{"label":"pickup","permalink":"/vi/docs/tags/pickup","allTagsPath":"/vi/docs/tags","count":32,"items":[{"id":"scripting/functions/AddStaticPickup","title":"AddStaticPickup","description":"This function adds a \'static\' pickup to the game.","permalink":"/vi/docs/scripting/functions/AddStaticPickup"},{"id":"scripting/functions/CreatePickup","title":"CreatePickup","description":"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.","permalink":"/vi/docs/scripting/functions/CreatePickup"},{"id":"scripting/functions/CreatePlayerPickup","title":"CreatePlayerPickup","description":"Creates a pickup which will be visible to only one player.","permalink":"/vi/docs/scripting/functions/CreatePlayerPickup"},{"id":"scripting/functions/DestroyPickup","title":"DestroyPickup","description":"Destroys a pickup created with CreatePickup.","permalink":"/vi/docs/scripting/functions/DestroyPickup"},{"id":"scripting/functions/DestroyPlayerPickup","title":"DestroyPlayerPickup","description":"Destroys a player-pickup created with CreatePlayerPickup.","permalink":"/vi/docs/scripting/functions/DestroyPlayerPickup"},{"id":"scripting/functions/GetPickupModel","title":"GetPickupModel","description":"Gets the model ID of a pickup.","permalink":"/vi/docs/scripting/functions/GetPickupModel"},{"id":"scripting/functions/GetPickupPos","title":"GetPickupPos","description":"Gets the coordinates of a pickup.","permalink":"/vi/docs/scripting/functions/GetPickupPos"},{"id":"scripting/functions/GetPickupType","title":"GetPickupType","description":"Gets the type of a pickup.","permalink":"/vi/docs/scripting/functions/GetPickupType"},{"id":"scripting/functions/GetPickupVirtualWorld","title":"GetPickupVirtualWorld","description":"Gets the virtual world ID of a pickup.","permalink":"/vi/docs/scripting/functions/GetPickupVirtualWorld"},{"id":"scripting/functions/GetPlayerPickupModel","title":"GetPlayerPickupModel","description":"Gets the model ID of a player-pickup.","permalink":"/vi/docs/scripting/functions/GetPlayerPickupModel"},{"id":"scripting/functions/GetPlayerPickupPos","title":"GetPlayerPickupPos","description":"Gets the coordinates of a player-pickup.","permalink":"/vi/docs/scripting/functions/GetPlayerPickupPos"},{"id":"scripting/functions/GetPlayerPickupType","title":"GetPlayerPickupType","description":"Gets the type of a player-pickup.","permalink":"/vi/docs/scripting/functions/GetPlayerPickupType"},{"id":"scripting/functions/GetPlayerPickupVirtualWorld","title":"GetPlayerPickupVirtualWorld","description":"Gets the virtual world ID of a player-pickup.","permalink":"/vi/docs/scripting/functions/GetPlayerPickupVirtualWorld"},{"id":"scripting/functions/HidePickupForPlayer","title":"HidePickupForPlayer","description":"Hides a pickup for a specific player.","permalink":"/vi/docs/scripting/functions/HidePickupForPlayer"},{"id":"scripting/functions/IsPickupHiddenForPlayer","title":"IsPickupHiddenForPlayer","description":"Checks if a pickup is hidden for a specific player.","permalink":"/vi/docs/scripting/functions/IsPickupHiddenForPlayer"},{"id":"scripting/functions/IsPickupStreamedIn","title":"IsPickupStreamedIn","description":"Checks if a pickup is streamed in for a specific player.","permalink":"/vi/docs/scripting/functions/IsPickupStreamedIn"},{"id":"scripting/functions/IsPlayerPickupStreamedIn","title":"IsPlayerPickupStreamedIn","description":"Checks if a player-pickup is streamed in for the player.","permalink":"/vi/docs/scripting/functions/IsPlayerPickupStreamedIn"},{"id":"scripting/functions/IsValidPickup","title":"IsValidPickup","description":"Checks if a pickup is valid.","permalink":"/vi/docs/scripting/functions/IsValidPickup"},{"id":"scripting/functions/IsValidPlayerPickup","title":"IsValidPlayerPickup","description":"Checks if a player-pickup is valid.","permalink":"/vi/docs/scripting/functions/IsValidPlayerPickup"},{"id":"scripting/callbacks/OnPlayerPickUpPlayerPickup","title":"OnPlayerPickUpPlayerPickup","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i nh\u1EB7t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\u01B0\u1EE3c t\u1EA1o ra b\u1EB1ng CreatePlayerPickup.","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup"},{"id":"scripting/callbacks/OnPlayerPickupStreamIn","title":"OnPlayerPickupStreamIn","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i v\xe0o ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickupStreamIn"},{"id":"scripting/callbacks/OnPlayerPickupStreamOut","title":"OnPlayerPickupStreamOut","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickupStreamOut"},{"id":"scripting/functions/SetPickupForPlayer","title":"SetPickupForPlayer","description":"Adjusts the pickup model, type, and position for a specific player.","permalink":"/vi/docs/scripting/functions/SetPickupForPlayer"},{"id":"scripting/functions/SetPickupModel","title":"SetPickupModel","description":"Sets the model of a pickup.","permalink":"/vi/docs/scripting/functions/SetPickupModel"},{"id":"scripting/functions/SetPickupPos","title":"SetPickupPos","description":"Sets the position of a pickup.","permalink":"/vi/docs/scripting/functions/SetPickupPos"},{"id":"scripting/functions/SetPickupType","title":"SetPickupType","description":"Sets the type of a pickup.","permalink":"/vi/docs/scripting/functions/SetPickupType"},{"id":"scripting/functions/SetPickupVirtualWorld","title":"SetPickupVirtualWorld","description":"Sets the virtual world ID of a pickup.","permalink":"/vi/docs/scripting/functions/SetPickupVirtualWorld"},{"id":"scripting/functions/SetPlayerPickupModel","title":"SetPlayerPickupModel","description":"Sets the model of a player-pickup.","permalink":"/vi/docs/scripting/functions/SetPlayerPickupModel"},{"id":"scripting/functions/SetPlayerPickupPos","title":"SetPlayerPickupPos","description":"Sets the position of a player-pickup.","permalink":"/vi/docs/scripting/functions/SetPlayerPickupPos"},{"id":"scripting/functions/SetPlayerPickupType","title":"SetPlayerPickupType","description":"Sets the type of a player-pickup.","permalink":"/vi/docs/scripting/functions/SetPlayerPickupType"},{"id":"scripting/functions/SetPlayerPickupVirtualWorld","title":"SetPlayerPickupVirtualWorld","description":"Sets the virtual world ID of a player-pickup.","permalink":"/vi/docs/scripting/functions/SetPlayerPickupVirtualWorld"},{"id":"scripting/functions/ShowPickupForPlayer","title":"ShowPickupForPlayer","description":"Shows a pickup for a specific player.","permalink":"/vi/docs/scripting/functions/ShowPickupForPlayer"}],"unlisted":false}}')}}]);
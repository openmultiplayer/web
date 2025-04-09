"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86642"],{69197:function(t){t.exports=JSON.parse('{"tag":{"label":"actor","permalink":"/sr/docs/tags/actor","allTagsPath":"/sr/docs/tags","count":26,"items":[{"id":"scripting/functions/ApplyActorAnimation","title":"ApplyActorAnimation","description":"Apply an animation to an actor.","permalink":"/sr/docs/scripting/functions/ApplyActorAnimation"},{"id":"scripting/functions/ClearActorAnimations","title":"ClearActorAnimations","description":"\u041F\u0440\u0435\u043A\u0438\u043D\u0435 \u0441\u0432\u0435 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0458\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u0435 \u043D\u0430 \u0430\u043A\u0442\u043E\u0440\u0443.","permalink":"/sr/docs/scripting/functions/ClearActorAnimations"},{"id":"scripting/functions/CreateActor","title":"CreateActor","description":"Create a static \'actor\' in the world.","permalink":"/sr/docs/scripting/functions/CreateActor"},{"id":"scripting/functions/DestroyActor","title":"DestroyActor","description":"Destroy an actor which was created with CreateActor.","permalink":"/sr/docs/scripting/functions/DestroyActor"},{"id":"scripting/functions/GetActorAnimation","title":"GetActorAnimation","description":"Get the animation the actor is currently performing.","permalink":"/sr/docs/scripting/functions/GetActorAnimation"},{"id":"scripting/functions/GetActorFacingAngle","title":"GetActorFacingAngle","description":"Get the facing angle of an actor.","permalink":"/sr/docs/scripting/functions/GetActorFacingAngle"},{"id":"scripting/functions/GetActorHealth","title":"GetActorHealth","description":"Get the health of an actor.","permalink":"/sr/docs/scripting/functions/GetActorHealth"},{"id":"scripting/functions/GetActorPoolSize","title":"GetActorPoolSize","description":"Gets the highest actorid created on the server.","permalink":"/sr/docs/scripting/functions/GetActorPoolSize"},{"id":"scripting/functions/GetActorPos","title":"GetActorPos","description":"Get the position of an actor.","permalink":"/sr/docs/scripting/functions/GetActorPos"},{"id":"scripting/functions/GetActors","title":"GetActors","description":"Gets an array variable of the IDs of the created actors on the server.","permalink":"/sr/docs/scripting/functions/GetActors"},{"id":"scripting/functions/GetActorSkin","title":"GetActorSkin","description":"Get the skin of the actor.","permalink":"/sr/docs/scripting/functions/GetActorSkin"},{"id":"scripting/functions/GetActorSpawnInfo","title":"GetActorSpawnInfo","description":"Get the initial spawn point of the actor.","permalink":"/sr/docs/scripting/functions/GetActorSpawnInfo"},{"id":"scripting/functions/GetActorVirtualWorld","title":"GetActorVirtualWorld","description":"Get the virtual world of an actor.","permalink":"/sr/docs/scripting/functions/GetActorVirtualWorld"},{"id":"scripting/functions/GetPlayerCameraTargetActor","title":"GetPlayerCameraTargetActor","description":"Allows you to retrieve the ID of the actor the player is looking at (in any).","permalink":"/sr/docs/scripting/functions/GetPlayerCameraTargetActor"},{"id":"scripting/functions/IsActorInvulnerable","title":"IsActorInvulnerable","description":"Check if an actor is invulnerable.","permalink":"/sr/docs/scripting/functions/IsActorInvulnerable"},{"id":"scripting/functions/IsActorStreamedIn","title":"IsActorStreamedIn","description":"Checks if an actor is streamed in for a player.","permalink":"/sr/docs/scripting/functions/IsActorStreamedIn"},{"id":"scripting/functions/IsValidActor","title":"IsValidActor","description":"Checks if an actor ID is valid.","permalink":"/sr/docs/scripting/functions/IsValidActor"},{"id":"scripting/callbacks/OnActorStreamIn","title":"OnActorStreamIn","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u043E\u0437\u0432\u0430\u043D \u043A\u0430\u0434\u0430 \u0441\u0435 \u0430\u043A\u0442\u043E\u0440 \u043F\u043E\u0458\u0430\u0432\u0438 \u0443 \u0438\u0433\u0440\u0430\u0447\u0435\u0432\u043E\u043C \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443.","permalink":"/sr/docs/scripting/callbacks/OnActorStreamIn"},{"id":"scripting/callbacks/OnActorStreamOut","title":"OnActorStreamOut","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u043E\u0437\u0432\u0430\u043D \u043A\u0430\u0434\u0430 \u0441\u0435 \u0430\u043A\u0442\u043E\u0440 \u043F\u0440\u0435\u0441\u0442\u0430\u043D\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0438\u0432\u0430\u0442\u0438 \u0443 \u0438\u0433\u0440\u0430\u0447\u0435\u0432\u043E\u043C \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443.","permalink":"/sr/docs/scripting/callbacks/OnActorStreamOut"},{"id":"scripting/callbacks/OnPlayerGiveDamageActor","title":"OnPlayerGiveDamageActor","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043D\u0435\u0441\u0435 \u0448\u0442\u0435\u0442\u0443 \u0430\u043A\u043E\u0442\u0440\u0443.","permalink":"/sr/docs/scripting/callbacks/OnPlayerGiveDamageActor"},{"id":"scripting/functions/SetActorFacingAngle","title":"SetActorFacingAngle","description":"Set the facing angle of an actor.","permalink":"/sr/docs/scripting/functions/SetActorFacingAngle"},{"id":"scripting/functions/SetActorHealth","title":"SetActorHealth","description":"Set the health of an actor.","permalink":"/sr/docs/scripting/functions/SetActorHealth"},{"id":"scripting/functions/SetActorInvulnerable","title":"SetActorInvulnerable","description":"Toggle an actor\'s invulnerability.","permalink":"/sr/docs/scripting/functions/SetActorInvulnerable"},{"id":"scripting/functions/SetActorPos","title":"SetActorPos","description":"Set the position of an actor.","permalink":"/sr/docs/scripting/functions/SetActorPos"},{"id":"scripting/functions/SetActorSkin","title":"SetActorSkin","description":"Set the skin of the actor.","permalink":"/sr/docs/scripting/functions/SetActorSkin"},{"id":"scripting/functions/SetActorVirtualWorld","title":"SetActorVirtualWorld","description":"Set the virtual world of an actor.","permalink":"/sr/docs/scripting/functions/SetActorVirtualWorld"}],"unlisted":false}}')}}]);
import { d as defineNuxtRouteMiddleware, b as useAuth, u as useCookie, e as executeAsync, n as navigateTo } from '../virtual/entry.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue';
import 'unhead/utils';
import '../routes/renderer.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'devalue';
import 'vue-router';

//#region app/middleware/auth.ts
var auth_default = defineNuxtRouteMiddleware(async (to) => {
	let __temp, __restore;
	const { isLoggedIn, currentUser, fetchUserProfile} = useAuth();
	if (useCookie("userToken").value && !currentUser.value) [__temp, __restore] = executeAsync(() => fetchUserProfile()), await __temp, __restore();
	if (!isLoggedIn.value) return navigateTo("/");
});

export { auth_default as default };
//# sourceMappingURL=auth-BU_7otJf.mjs.map

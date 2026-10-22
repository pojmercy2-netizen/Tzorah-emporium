import { d as defineNuxtRouteMiddleware, u as useCookie, a as useState, n as navigateTo, e as executeAsync, $ as $fetch$1 } from '../virtual/entry.mjs';
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

//#region app/middleware/admin-auth.ts
var admin_auth_default = defineNuxtRouteMiddleware(async (to) => {
	let __temp, __restore;
	if (to.path === "/admin") return;
	const adminToken = useCookie("adminToken");
	const adminUser = useState("adminUser", () => null);
	if (!adminToken.value) return navigateTo("/admin");
	if (adminUser.value?.isAdmin) return;
	try {
		const profile = ([__temp, __restore] = executeAsync(() => $fetch$1("/api/v1/auth/me", { headers: { Authorization: `Bearer ${adminToken.value}` } })), __temp = await __temp, __restore(), __temp);
		if (!profile?.is_admin) {
			adminToken.value = null;
			adminUser.value = null;
			return navigateTo("/admin");
		}
		adminUser.value = {
			id: profile.id,
			name: profile.name,
			email: profile.email,
			isAdmin: true
		};
	} catch {
		adminToken.value = null;
		adminUser.value = null;
		return navigateTo("/admin");
	}
});

export { admin_auth_default as default };
//# sourceMappingURL=admin-auth-DAQkvRzK.mjs.map

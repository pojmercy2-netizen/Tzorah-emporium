import { c as useHead$1, u as useCookie, a as useState } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
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
import 'devalue';

//#region app/pages/admin/index.vue
var _sfc_main = {
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Admin Access Gate | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Secure gateway portal for TZORAH EMPORIUM administration console."
			}]
		});
		useRouter();
		useCookie("adminToken", { maxAge: 3600 * 24 * 7 });
		useState("adminUser", () => null);
		const email = ref("");
		const password = ref("");
		const error = ref("");
		const loading = ref(false);
		ref(null);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-login-page" }, _attrs))} data-v-cb312d6c><div class="login-container" data-v-cb312d6c><div class="login-card" data-v-cb312d6c><div class="login-header" data-v-cb312d6c><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM Logo" class="login-logo" data-v-cb312d6c><h1 class="login-title" data-v-cb312d6c>TZORAH EMPORIUM</h1><p class="login-subtitle" data-v-cb312d6c>ADMIN CONSOLE PORTAL</p></div><form class="login-form" data-v-cb312d6c><div class="form-group" data-v-cb312d6c><label for="email" class="form-label" data-v-cb312d6c>EMAIL ADDRESS</label><div class="input-wrapper" data-v-cb312d6c><input id="email"${ssrRenderAttr("value", email.value)} type="email" placeholder="admin@tzorahemporium.com" class="form-input" required autocomplete="email" data-v-cb312d6c><span class="input-focus-line" data-v-cb312d6c></span></div></div><div class="${ssrRenderClass([{ "has-error": error.value }, "form-group"])}" data-v-cb312d6c><label for="password" class="form-label" data-v-cb312d6c>PASSWORD</label><div class="input-wrapper" data-v-cb312d6c><input id="password"${ssrRenderAttr("value", password.value)} type="password" placeholder="••••••••••••" class="form-input" required autocomplete="current-password" data-v-cb312d6c><span class="input-focus-line" data-v-cb312d6c></span></div>`);
			if (error.value) _push(`<p class="error-message" data-v-cb312d6c><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="error-icon" data-v-cb312d6c><circle cx="12" cy="12" r="10" data-v-cb312d6c></circle><line x1="12" y1="8" x2="12" y2="12" data-v-cb312d6c></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-cb312d6c></line></svg> ${ssrInterpolate(error.value)}</p>`);
			else _push(`<!---->`);
			_push(`</div><button type="submit" class="btn-login"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-cb312d6c>`);
			if (loading.value) _push(`<span class="spinner" data-v-cb312d6c></span>`);
			else _push(`<span data-v-cb312d6c>AUTHENTICATE SECURELY</span>`);
			_push(`</button></form></div><div class="login-footer" data-v-cb312d6c><p data-v-cb312d6c>© 2026 TZORAH EMPORIUM. All rights reserved.</p><p class="demo-credential-tip" data-v-cb312d6c>Sign in with your registered admin account.</p></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-cb312d6c"]]);

export { admin_default as default };
//# sourceMappingURL=admin-DEWnhLXc.mjs.map

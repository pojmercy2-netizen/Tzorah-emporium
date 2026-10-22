import { u as useCookie, a as useState } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { computed, ref, watch, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
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

//#region app/layouts/admin.vue
var _sfc_main = {
	__name: "admin",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		useRouter();
		useCookie("adminToken");
		const adminUser = useState("adminUser", () => null);
		const adminUserInitial = computed(() => {
			return (adminUser.value?.name || "A").charAt(0).toUpperCase();
		});
		const sidebarCollapsed = ref(false);
		const mobileSidebarOpen = ref(false);
		const currentTime = ref("");
		watch(() => route.path, () => {
			mobileSidebarOpen.value = false;
		});
		const navItems = ref([
			{
				to: "/admin/dashboard",
				label: "Dashboard",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></svg>"
			},
			{
				to: "/admin/products",
				label: "Products",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></svg>",
				badge: "14"
			},
			{
				to: "/admin/orders",
				label: "Orders",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/><polyline points=\"10 9 9 9 8 9\"/></svg>",
				badge: "3"
			},
			{
				to: "/admin/customers",
				label: "Customers",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>"
			},
			{
				to: "/admin/analytics",
				label: "Analytics",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>"
			},
			{
				to: "/admin/settings",
				label: "Settings",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg>"
			}
		]);
		const pageMap = {
			"/admin/dashboard": "Dashboard",
			"/admin/products": "Products",
			"/admin/orders": "Orders",
			"/admin/customers": "Customers",
			"/admin/analytics": "Analytics",
			"/admin/settings": "Settings"
		};
		const currentPageTitle = computed(() => pageMap[route.path] || "Admin");
		function isActive(path) {
			return route.path.startsWith(path) && (path !== "/admin" || route.path === "/admin");
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["admin-app", {
				"sidebar-collapsed": sidebarCollapsed.value,
				"mobile-sidebar-open": mobileSidebarOpen.value
			}] }, _attrs))}>`);
			if (mobileSidebarOpen.value) _push(`<div class="admin-sidebar-backdrop"></div>`);
			else _push(`<!---->`);
			_push(`<aside class="admin-sidebar"><div class="admin-sidebar__brand"><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" class="admin-sidebar__logo"><div class="admin-sidebar__brand-text"><span class="admin-sidebar__brand-name">TZORAH EMPORIUM</span><span class="admin-sidebar__brand-sub">Admin Console</span></div></div><nav class="admin-sidebar__nav"><!--[-->`);
			ssrRenderList(navItems.value, (item) => {
				_push(`<div class="admin-nav-group">`);
				if (!item.children) _push(ssrRenderComponent(_component_NuxtLink, {
					to: item.to,
					class: ["admin-nav-item", { "admin-nav-item--active": isActive(item.to) }]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<span class="admin-nav-item__icon"${_scopeId}>${item.icon ?? ""}</span><span class="admin-nav-item__label"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
							if (item.badge) _push(`<span class="admin-nav-item__badge"${_scopeId}>${ssrInterpolate(item.badge)}</span>`);
							else _push(`<!---->`);
						} else return [
							createVNode("span", {
								class: "admin-nav-item__icon",
								innerHTML: item.icon
							}, null, 8, ["innerHTML"]),
							createVNode("span", { class: "admin-nav-item__label" }, toDisplayString(item.label), 1),
							item.badge ? (openBlock(), createBlock("span", {
								key: 0,
								class: "admin-nav-item__badge"
							}, toDisplayString(item.badge), 1)) : createCommentVNode("", true)
						];
					}),
					_: 2
				}, _parent));
				else {
					_push(`<div class="${ssrRenderClass([{ "admin-nav-dropdown--open": item.expanded }, "admin-nav-dropdown"])}"><button class="admin-nav-item admin-nav-dropdown-toggle"><span class="admin-nav-item__icon">${item.icon ?? ""}</span><span class="admin-nav-item__label">${ssrInterpolate(item.label)}</span><span class="${ssrRenderClass([{ "admin-nav-dropdown-arrow--rotated": item.expanded }, "admin-nav-dropdown-arrow"])}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></button><div class="admin-nav-dropdown-children" style="${ssrRenderStyle(item.expanded ? null : { display: "none" })}"><!--[-->`);
					ssrRenderList(item.children, (child) => {
						_push(ssrRenderComponent(_component_NuxtLink, {
							key: child.to,
							to: child.to,
							class: ["admin-nav-child-item", { "admin-nav-child-item--active": isActive(child.to) }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="admin-nav-child-dot"${_scopeId}></span><span class="admin-nav-item__label"${_scopeId}>${ssrInterpolate(child.label)}</span>`);
								else return [createVNode("span", { class: "admin-nav-child-dot" }), createVNode("span", { class: "admin-nav-item__label" }, toDisplayString(child.label), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div></div>`);
				}
				_push(`</div>`);
			});
			_push(`<!--]--></nav><div class="admin-sidebar__footer"><div class="admin-sidebar__user"><div class="admin-sidebar__avatar">${ssrInterpolate(adminUserInitial.value)}</div><div class="admin-sidebar__user-info"><span class="admin-sidebar__user-name">${ssrInterpolate(unref(adminUser)?.name || "Admin")}</span><span class="admin-sidebar__user-role">${ssrInterpolate(unref(adminUser)?.email || "Super Admin")}</span></div></div><button class="admin-sidebar__logout" title="Logout"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button></div></aside><div class="admin-main"><header class="admin-topbar"><button class="admin-topbar__toggle"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button><div class="admin-topbar__breadcrumb"><span class="admin-topbar__page">${ssrInterpolate(currentPageTitle.value)}</span></div><div class="admin-topbar__actions"><div class="admin-topbar__time">${ssrInterpolate(currentTime.value)}</div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				target: "_blank",
				class: "admin-topbar__storefront",
				title: "View Storefront"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"${_scopeId}></path><polyline points="15 3 21 3 21 9"${_scopeId}></polyline><line x1="10" y1="14" x2="21" y2="3"${_scopeId}></line></svg> Storefront `);
					else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "15",
						height: "15",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "1.5",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}, [
						createVNode("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
						createVNode("polyline", { points: "15 3 21 3 21 9" }),
						createVNode("line", {
							x1: "10",
							y1: "14",
							x2: "21",
							y2: "3"
						})
					])), createTextVNode(" Storefront ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></header><div class="admin-content">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-5fU9b6Z6.mjs.map

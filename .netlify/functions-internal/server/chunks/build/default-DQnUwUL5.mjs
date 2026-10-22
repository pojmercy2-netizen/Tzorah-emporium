import { $ as $fetch$1, b as useAuth, a as useState } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { u as useWishlist } from './useWishlist-BbbQGVvs.mjs';
import { u as useStoreSettings } from './useStoreSettings-KpneMvKU.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { u as useAsyncData } from './asyncData-DOwAQs52.mjs';
import { withAsyncContext, computed, mergeProps, unref, ref, watch, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, reactive, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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

//#region app/components/TheHeader.vue
var _sfc_main$6 = {
	__name: "TheHeader",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const { currentUser } = useAuth();
		const { wishlistCount} = useWishlist();
		const isScrolled = ref(false);
		const mobileMenuOpen = ref(false);
		const searchOpen = ref(false);
		const animateCart = ref(false);
		ref(null);
		watch(() => route.fullPath, () => {
			mobileMenuOpen.value = false;
		});
		const cartCount = useState("cartCount", () => 0);
		const closeMobileMenu = () => {
			mobileMenuOpen.value = false;
		};
		const headerSearchQuery = ref("");
		const allProducts = ref([]);
		const popularSearches = [
			"USA Oil Perfumes",
			"Baccarat Rouge",
			"Middle Eastern",
			"Essential Oils",
			"Candle Making",
			"Natural Oils"
		];
		const liveResults = computed(() => {
			const q = headerSearchQuery.value.toLowerCase().trim();
			if (!q) return [];
			return allProducts.value.filter((p) => {
				const name = (p.name || "").toLowerCase();
				const desc = (p.description || "").toLowerCase();
				const cat = (p.category || p.cat_name || "").toLowerCase();
				const sub = (p.subcategory || "").toLowerCase();
				return name.includes(q) || desc.includes(q) || cat.includes(q) || sub.includes(q);
			});
		});
		const formatPrice = (val) => {
			return `${storeSettings.value?.currency === "USD" ? "$" : "₦"}${(parseFloat(val) || 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
		};
		useState("toasts", () => []);
		const { storeSettings } = useStoreSettings();
		const headerTop = computed(() => storeSettings.value.announcementEnabled ? "36px" : "0px");
		watch(cartCount, () => {
			animateCart.value = true;
			setTimeout(() => {
				animateCart.value = false;
			}, 300);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<header${ssrRenderAttrs(mergeProps({
				class: ["header", {
					"header--scrolled": isScrolled.value,
					"header--mobile-open": mobileMenuOpen.value
				}],
				style: { top: headerTop.value }
			}, _attrs))} data-v-b380bf26><div class="container header__container" data-v-b380bf26><button class="header__mobile-toggle" aria-label="Toggle Menu" data-v-b380bf26><span class="hamburger-line" data-v-b380bf26></span><span class="hamburger-line" data-v-b380bf26></span><span class="hamburger-line" data-v-b380bf26></span></button>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "header__logo-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM Logo" class="header__logo" data-v-b380bf26${_scopeId}>`);
					else return [createVNode("img", {
						src: _virtual_public__2Flogo_default,
						alt: "TZORAH EMPORIUM Logo",
						class: "header__logo"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="header__nav" data-v-b380bf26><ul class="header__nav-list" data-v-b380bf26><li data-v-b380bf26>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "header__nav-link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`HOME`);
					else return [createTextVNode("HOME")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-b380bf26>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "header__nav-link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`SHOP`);
					else return [createTextVNode("SHOP")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-b380bf26>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/about",
				class: "header__nav-link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`ABOUT US`);
					else return [createTextVNode("ABOUT US")];
				}),
				_: 1
			}, _parent));
			_push(`</li></ul></nav><div class="header__actions" data-v-b380bf26><button class="header__action-btn" aria-label="Search" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26><circle cx="11" cy="11" r="8" data-v-b380bf26></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-b380bf26></line></svg></button><a href="/profile?tab=wishlist" class="header__action-btn header__action-btn--desktop header__wishlist-btn" aria-label="Wishlist" style="${ssrRenderStyle({ "position": "relative" })}" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-b380bf26></path></svg>`);
			if (unref(wishlistCount) > 0) _push(`<span class="header__wishlist-count" data-v-b380bf26>${ssrInterpolate(unref(wishlistCount))}</span>`);
			else _push(`<!---->`);
			_push(`</a><a href="/profile" class="header__action-btn header__action-btn--desktop" aria-label="Account" style="${ssrRenderStyle({ "position": "relative" })}" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-b380bf26></path><circle cx="12" cy="7" r="4" data-v-b380bf26></circle></svg>`);
			if (unref(currentUser)?.isAdmin) _push(`<span class="header__admin-dot" title="Admin" data-v-b380bf26></span>`);
			else _push(`<!---->`);
			_push(`</a>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/cart",
				class: "header__action-btn header__cart-btn",
				"aria-label": "Cart"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26${_scopeId}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-b380bf26${_scopeId}></path><line x1="3" y1="6" x2="21" y2="6" data-v-b380bf26${_scopeId}></line><path d="M16 10a4 4 0 0 1-8 0" data-v-b380bf26${_scopeId}></path></svg><span class="${ssrRenderClass([{ "header__cart-count--pop": animateCart.value }, "header__cart-count"])}" data-v-b380bf26${_scopeId}>${ssrInterpolate(unref(cartCount))}</span>`);
					else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "1.5",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}, [
						createVNode("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
						createVNode("line", {
							x1: "3",
							y1: "6",
							x2: "21",
							y2: "6"
						}),
						createVNode("path", { d: "M16 10a4 4 0 0 1-8 0" })
					])), createVNode("span", { class: ["header__cart-count", { "header__cart-count--pop": animateCart.value }] }, toDisplayString(unref(cartCount)), 3)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div>`);
			if (mobileMenuOpen.value) _push(`<div class="mobile-drawer__overlay" data-v-b380bf26></div>`);
			else _push(`<!---->`);
			_push(`<div class="${ssrRenderClass(["mobile-drawer", { "mobile-drawer--open": mobileMenuOpen.value }])}" data-v-b380bf26><div class="mobile-drawer__content" data-v-b380bf26><div class="mobile-drawer__header" data-v-b380bf26><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM Logo" class="mobile-drawer__logo" data-v-b380bf26><button class="mobile-drawer__close" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26><line x1="18" y1="6" x2="6" y2="18" data-v-b380bf26></line><line x1="6" y1="6" x2="18" y2="18" data-v-b380bf26></line></svg></button></div><nav class="mobile-drawer__nav" data-v-b380bf26><ul class="mobile-drawer__list" data-v-b380bf26><li class="mobile-drawer__item mobile-drawer__item--visible" data-v-b380bf26>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "mobile-drawer__link",
				onClick: closeMobileMenu
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`HOME`);
					else return [createTextVNode("HOME")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li class="mobile-drawer__item mobile-drawer__item--visible" data-v-b380bf26>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "mobile-drawer__link",
				onClick: closeMobileMenu
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`SHOP`);
					else return [createTextVNode("SHOP")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li class="mobile-drawer__item mobile-drawer__item--visible" data-v-b380bf26>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/about",
				class: "mobile-drawer__link",
				onClick: closeMobileMenu
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`ABOUT US`);
					else return [createTextVNode("ABOUT US")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li class="mobile-drawer__item mobile-drawer__item--visible" data-v-b380bf26><a href="/profile?tab=wishlist" class="mobile-drawer__link" data-v-b380bf26> WISHLIST `);
			if (unref(wishlistCount) > 0) _push(`<span class="mobile-drawer__wishlist-count" data-v-b380bf26>(${ssrInterpolate(unref(wishlistCount))})</span>`);
			else _push(`<!---->`);
			_push(`</a></li><li class="mobile-drawer__item mobile-drawer__item--visible" data-v-b380bf26><a href="/profile" class="mobile-drawer__link" data-v-b380bf26>ACCOUNT</a></li>`);
			if (unref(currentUser)?.isAdmin) {
				_push(`<li class="mobile-drawer__item mobile-drawer__item--visible" data-v-b380bf26>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/admin/dashboard",
					class: "mobile-drawer__link mobile-drawer__link--admin",
					onClick: closeMobileMenu
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`ADMIN CONSOLE`);
						else return [createTextVNode("ADMIN CONSOLE")];
					}),
					_: 1
				}, _parent));
				_push(`</li>`);
			} else _push(`<!---->`);
			_push(`</ul></nav><div class="mobile-drawer__socials" data-v-b380bf26><a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener" aria-label="WhatsApp" class="mobile-drawer__social" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-v-b380bf26><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-b380bf26></path></svg></a><a href="https://www.tiktok.com/@tzorahemporium" target="_blank" rel="noopener" aria-label="TikTok" class="mobile-drawer__social" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-v-b380bf26><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" data-v-b380bf26></path></svg></a><a href="https://www.instagram.com/tzorah_emporium?mdxt=MWh1ZWZoaXNraWw2Mw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="mobile-drawer__social" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-b380bf26></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-b380bf26></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-b380bf26></line></svg></a><a href="https://x.com/tzorahemporium" target="_blank" rel="noopener" aria-label="X (Twitter)" class="mobile-drawer__social" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26><path d="M4 4l11.733 16h4.267l-11.733-16z" data-v-b380bf26></path><path d="M4 20l6.768-6.768M20 4l-6.768 6.768" data-v-b380bf26></path></svg></a></div></div></div>`);
			if (searchOpen.value) {
				_push(`<div class="search-overlay" data-v-b380bf26><div class="container search-overlay__container" data-v-b380bf26><div class="search-overlay__box-wrapper" data-v-b380bf26><div class="search-overlay__search-box" data-v-b380bf26><svg class="search-overlay__search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-b380bf26><circle cx="11" cy="11" r="8" data-v-b380bf26></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-b380bf26></line></svg><input${ssrRenderAttr("value", headerSearchQuery.value)} type="text" placeholder="Search USA oils, perfumes, essential oils, candle craft, adult section..." class="search-overlay__input" data-v-b380bf26>`);
				if (headerSearchQuery.value) _push(`<button class="search-overlay__clear" aria-label="Clear search" data-v-b380bf26> × </button>`);
				else _push(`<!---->`);
				_push(`<button class="search-overlay__submit-btn" aria-label="Perform search" data-v-b380bf26> SEARCH </button><button class="search-overlay__close" aria-label="Close search" data-v-b380bf26><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b380bf26><line x1="18" y1="6" x2="6" y2="18" data-v-b380bf26></line><line x1="6" y1="6" x2="18" y2="18" data-v-b380bf26></line></svg></button></div>`);
				if (!headerSearchQuery.value.trim()) {
					_push(`<div class="search-overlay__suggestions" data-v-b380bf26><span class="search-overlay__suggestions-label" data-v-b380bf26>TRENDING SEARCHES:</span><div class="search-overlay__chips" data-v-b380bf26><!--[-->`);
					ssrRenderList(popularSearches, (chip) => {
						_push(`<button class="search-chip" data-v-b380bf26>${ssrInterpolate(chip)}</button>`);
					});
					_push(`<!--]--></div></div>`);
				} else {
					_push(`<div class="search-live-results" data-v-b380bf26>`);
					if (liveResults.value.length > 0) {
						_push(`<div class="search-results-list" data-v-b380bf26><div class="search-results-summary" data-v-b380bf26><span data-v-b380bf26>FOUND <strong data-v-b380bf26>${ssrInterpolate(liveResults.value.length)}</strong> PRODUCT${ssrInterpolate(liveResults.value.length > 1 ? "S" : "")}</span><button class="search-view-all-link" data-v-b380bf26>View All in Shop →</button></div><!--[-->`);
						ssrRenderList(liveResults.value.slice(0, 5), (item) => {
							_push(`<div class="search-result-row" data-v-b380bf26><div class="search-result-thumb" data-v-b380bf26><img${ssrRenderAttr("src", item.image || "/images/products/perf_usa_1.png")}${ssrRenderAttr("alt", item.name)} data-v-b380bf26></div><div class="search-result-info" data-v-b380bf26><span class="search-result-name" data-v-b380bf26>${ssrInterpolate(item.name)}</span><div class="search-result-tags" data-v-b380bf26><span class="search-tag-badge" data-v-b380bf26>${ssrInterpolate(item.category)}</span>`);
							if (item.subcategory) _push(`<span class="search-tag-sub" data-v-b380bf26>${ssrInterpolate(item.subcategory)}</span>`);
							else _push(`<!---->`);
							_push(`</div></div><div class="search-result-meta" data-v-b380bf26><span class="search-result-price" data-v-b380bf26>${ssrInterpolate(formatPrice(item.price))}</span><span class="search-result-view" data-v-b380bf26>View →</span></div></div>`);
						});
						_push(`<!--]-->`);
						if (liveResults.value.length > 5) _push(`<div class="search-results-footer" data-v-b380bf26><button class="btn-search-all-results" data-v-b380bf26> VIEW ALL ${ssrInterpolate(liveResults.value.length)} PRODUCTS FOR &quot;${ssrInterpolate(headerSearchQuery.value.trim())}&quot; </button></div>`);
						else _push(`<!---->`);
						_push(`</div>`);
					} else _push(`<div class="search-results-empty" data-v-b380bf26><p data-v-b380bf26>No products found matching &quot;<strong data-v-b380bf26>${ssrInterpolate(headerSearchQuery.value)}</strong>&quot;.</p><p class="search-results-tip" data-v-b380bf26>Try searching for fragrance names like &quot;Baccarat&quot;, &quot;Oil&quot;, &quot;Vanilla&quot;, or &quot;Candle&quot;.</p><button class="btn-search-anyway" data-v-b380bf26>Search in Shop Catalog →</button></div>`);
					_push(`</div>`);
				}
				_push(`</div></div></div>`);
			} else _push(`<!---->`);
			_push(`</header>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var TheHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["__scopeId", "data-v-b380bf26"]]);
//#endregion
//#region app/components/TheFooter.vue
var _sfc_main$5 = {
	__name: "TheFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const { storeSettings} = useStoreSettings();
		const email = ref("");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-294cafbb><div class="container footer__container" data-v-294cafbb><div class="footer__grid" data-v-294cafbb><div class="footer__col footer__col--brand" data-v-294cafbb><div class="footer__brand-wrap" data-v-294cafbb><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM Logo" class="footer__logo" data-v-294cafbb><span class="footer__est-badge" data-v-294cafbb>EST. 2018</span></div><p class="footer__bio" data-v-294cafbb> Curators of pure USA perfume oils, Middle Eastern scents, botanical oils, candlecraft, and discreet adult luxuries. </p><div class="footer__socials" data-v-294cafbb><a href="https://www.instagram.com/tzorah_emporium?mdxt=MWh1ZWZoaXNraWw2Mw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="footer__social-link" data-v-294cafbb><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-294cafbb><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-294cafbb></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-294cafbb></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-294cafbb></line></svg></a><a href="#" aria-label="Facebook" class="footer__social-link" data-v-294cafbb><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-294cafbb><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-294cafbb></path></svg></a><a href="#" aria-label="TikTok" class="footer__social-link" data-v-294cafbb><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-294cafbb><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" data-v-294cafbb></path></svg></a><a href="#" aria-label="X (Twitter)" class="footer__social-link" data-v-294cafbb><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-294cafbb><path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M20 4l-6.768 6.768" stroke-linecap="round" stroke-linejoin="round" data-v-294cafbb></path></svg></a></div></div><div class="footer__col" data-v-294cafbb><h4 class="footer__col-title" data-v-294cafbb>DEPARTMENTS</h4><ul class="footer__links" data-v-294cafbb><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`All Products`);
					else return [createTextVNode("All Products")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=PERFUMES",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Perfumes &amp; Scents`);
					else return [createTextVNode("Perfumes & Scents")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=OILS",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`The Oils Bar`);
					else return [createTextVNode("The Oils Bar")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=CANDLE%20MAKING%20ACCESSORIES",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Candle Craft Supplies`);
					else return [createTextVNode("Candle Craft Supplies")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=UNSCENTED%20PRODUCTS",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Unscented Products`);
					else return [createTextVNode("Unscented Products")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=PET%20BODY%20CARE%20PRODUCTS",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Pet Body Care`);
					else return [createTextVNode("Pet Body Care")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=ADULT%20SECTION",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Adult Boudoir (18+)`);
					else return [createTextVNode("Adult Boudoir (18+)")];
				}),
				_: 1
			}, _parent));
			_push(`</li></ul></div><div class="footer__col" data-v-294cafbb><h4 class="footer__col-title" data-v-294cafbb>COMPANY</h4><ul class="footer__links" data-v-294cafbb><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/about",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`About Us`);
					else return [createTextVNode("About Us")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/journal",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Journal`);
					else return [createTextVNode("Journal")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb><a href="#" class="footer__link hover-underline" data-v-294cafbb>Our Stores</a></li><li data-v-294cafbb><a href="#" class="footer__link hover-underline" data-v-294cafbb>Careers</a></li></ul></div><div class="footer__col" data-v-294cafbb><h4 class="footer__col-title" data-v-294cafbb>CUSTOMER CARE</h4><ul class="footer__links" data-v-294cafbb><li data-v-294cafbb>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/delivery",
				class: "footer__link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Shipping &amp; Delivery`);
					else return [createTextVNode("Shipping & Delivery")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-294cafbb><a href="#" class="footer__link hover-underline" data-v-294cafbb>Returns &amp; Exchanges</a></li><li data-v-294cafbb><a href="#" class="footer__link hover-underline" data-v-294cafbb>Size Guide</a></li><li data-v-294cafbb><a href="#" class="footer__link hover-underline" data-v-294cafbb>FAQs</a></li><li data-v-294cafbb><a href="#" class="footer__link hover-underline" data-v-294cafbb>Contact Us</a></li></ul></div><div class="footer__col footer__col--newsletter" data-v-294cafbb><h4 class="footer__col-title" data-v-294cafbb>NEWSLETTER</h4><p class="footer__newsletter-text" data-v-294cafbb> Join for exclusive offers and early access. </p><form class="footer__form" data-v-294cafbb><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Enter your email" class="footer__input" required data-v-294cafbb><button type="submit" class="footer__submit-btn" aria-label="Subscribe" data-v-294cafbb><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-294cafbb><line x1="5" y1="12" x2="19" y2="12" data-v-294cafbb></line><polyline points="12 5 19 12 12 19" data-v-294cafbb></polyline></svg></button></form></div></div><div class="footer__bottom" data-v-294cafbb><p class="footer__copyright" data-v-294cafbb> © 2018 ${ssrInterpolate(unref(storeSettings).storeName || "TZORAH EMPORIUM")}. All rights reserved. </p>`);
			if (unref(storeSettings).supportEmail) {
				_push(`<p class="footer__contact-line" data-v-294cafbb><a${ssrRenderAttr("href", "mailto:" + unref(storeSettings).supportEmail)} class="footer__contact-email" data-v-294cafbb>${ssrInterpolate(unref(storeSettings).supportEmail)}</a>`);
				if (unref(storeSettings).telephone) _push(`<span data-v-294cafbb> • ${ssrInterpolate(unref(storeSettings).telephone)}</span>`);
				else _push(`<!---->`);
				_push(`</p>`);
			} else _push(`<!---->`);
			_push(`<div class="footer__payments" data-v-294cafbb><div class="payment-badge payment-badge--bank" title="Direct Bank Transfer" data-v-294cafbb><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-294cafbb><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3l9-7z" data-v-294cafbb></path></svg><span data-v-294cafbb>DIRECT BANK TRANSFER</span></div></div></div></div></footer>`);
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var TheFooter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$5, [["__scopeId", "data-v-294cafbb"]]);
//#endregion
//#region app/components/CartDrawer.vue
var _sfc_main$4 = {
	__name: "CartDrawer",
	__ssrInlineRender: true,
	setup(__props) {
		const cartDrawerOpen = useState("cartDrawerOpen", () => false);
		const cartCount = useState("cartCount", () => 0);
		const cartItems = useState("cartItems", () => []);
		const { storeSettings} = useStoreSettings();
		const currencySymbol = computed(() => {
			const c = storeSettings.value?.currency || "NGN";
			if (c === "NGN") return "₦";
			if (c === "EUR") return "€";
			if (c === "GBP") return "£";
			return "₦";
		});
		const subtotal = computed(() => {
			return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-7fe39bab>`);
			if (unref(cartDrawerOpen)) _push(`<div class="cart-drawer__overlay" data-v-7fe39bab></div>`);
			else _push(`<!---->`);
			_push(`<div class="${ssrRenderClass(["cart-drawer", { "cart-drawer--open": unref(cartDrawerOpen) }])}" data-v-7fe39bab><div class="cart-drawer__content" data-v-7fe39bab><div class="cart-drawer__header" data-v-7fe39bab><h2 class="cart-drawer__title" data-v-7fe39bab>SHOPPING BAG (${ssrInterpolate(unref(cartCount))})</h2><button class="cart-drawer__close" aria-label="Close Bag" data-v-7fe39bab><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7fe39bab><line x1="18" y1="6" x2="6" y2="18" data-v-7fe39bab></line><line x1="6" y1="6" x2="18" y2="18" data-v-7fe39bab></line></svg></button></div>`);
			if (unref(cartItems).length > 0) {
				_push(`<div class="cart-drawer__body" data-v-7fe39bab><!--[-->`);
				ssrRenderList(unref(cartItems), (item) => {
					_push(`<div class="cart-drawer__item" data-v-7fe39bab><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="cart-drawer__item-img" data-v-7fe39bab><div class="cart-drawer__item-details" data-v-7fe39bab><div class="cart-drawer__item-meta" data-v-7fe39bab><h3 class="cart-drawer__item-title" data-v-7fe39bab>${ssrInterpolate(item.name)}</h3><span class="cart-drawer__item-price" data-v-7fe39bab>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate((item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div><div class="cart-drawer__item-actions" data-v-7fe39bab><div class="quantity-selector" data-v-7fe39bab><button class="qty-btn" data-v-7fe39bab>-</button><span class="qty-num" data-v-7fe39bab>${ssrInterpolate(item.quantity)}</span><button class="qty-btn" data-v-7fe39bab>+</button></div><button class="remove-btn" data-v-7fe39bab>REMOVE</button></div></div></div>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<div class="cart-drawer__empty" data-v-7fe39bab><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="empty-icon" data-v-7fe39bab><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-7fe39bab></path><line x1="3" y1="6" x2="21" y2="6" data-v-7fe39bab></line><path d="M16 10a4 4 0 0 1-8 0" data-v-7fe39bab></path></svg><p class="empty-text" data-v-7fe39bab>Your bag is empty.</p><button class="btn btn-primary empty-shop-btn" data-v-7fe39bab>CONTINUE SHOPPING</button></div>`);
			if (unref(cartItems).length > 0) _push(`<div class="cart-drawer__footer" data-v-7fe39bab><div class="cart-drawer__summary-row" data-v-7fe39bab><span class="summary-label" data-v-7fe39bab>SUBTOTAL</span><span class="summary-value" data-v-7fe39bab>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(subtotal.value.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div><p class="shipping-notice" data-v-7fe39bab>Shipping and taxes calculated at checkout.</p><button class="btn btn-primary checkout-btn" data-v-7fe39bab>PROCEED TO CHECKOUT</button></div>`);
			else _push(`<!---->`);
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartDrawer.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var CartDrawer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["__scopeId", "data-v-7fe39bab"]]);
//#endregion
//#region app/components/ToastSystem.vue
var _sfc_main$3 = {
	__name: "ToastSystem",
	__ssrInlineRender: true,
	setup(__props) {
		const toasts = useState("toasts", () => []);
		const removeToast = (id) => {
			toasts.value = toasts.value.filter((toast) => toast.id !== id);
		};
		watch(toasts, (newToasts) => {
			if (newToasts.length > 0) {
				const latestToast = newToasts[newToasts.length - 1];
				setTimeout(() => {
					removeToast(latestToast.id);
				}, 3500);
			}
		}, { deep: true });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "toast-container" }, _attrs))} data-v-3cbc9ef1><!--[-->`);
			ssrRenderList(unref(toasts), (toast) => {
				_push(`<div class="toast-item" data-v-3cbc9ef1><div class="toast-item__content" data-v-3cbc9ef1><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="toast-item__icon" data-v-3cbc9ef1><circle cx="12" cy="12" r="10" data-v-3cbc9ef1></circle><polyline points="12 8 12 12 16 14" data-v-3cbc9ef1></polyline></svg><span class="toast-item__message" data-v-3cbc9ef1>${ssrInterpolate(toast.message)}</span></div><button class="toast-item__close" aria-label="Close Notification" data-v-3cbc9ef1><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-3cbc9ef1><line x1="18" y1="6" x2="6" y2="18" data-v-3cbc9ef1></line><line x1="6" y1="6" x2="18" y2="18" data-v-3cbc9ef1></line></svg></button></div>`);
			});
			_push(`<!--]--></div>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToastSystem.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ToastSystem_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["__scopeId", "data-v-3cbc9ef1"]]);
//#endregion
//#region app/components/AuthModal.vue
var _sfc_main$2 = {
	__name: "AuthModal",
	__ssrInlineRender: true,
	setup(__props) {
		const { authModalOpen, authModalMode} = useAuth();
		useState("pendingRedirect", () => null);
		const loading = ref(false);
		const loginForm = reactive({
			email: "",
			password: "",
			remember: true
		});
		const signupForm = reactive({
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(authModalOpen)) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-modal__overlay" }, _attrs))} data-v-1834587d><div class="auth-modal" data-v-1834587d><button class="auth-modal__close" aria-label="Close modal" data-v-1834587d><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1834587d><line x1="18" y1="6" x2="6" y2="18" data-v-1834587d></line><line x1="6" y1="6" x2="18" y2="18" data-v-1834587d></line></svg></button><div class="auth-modal__header" data-v-1834587d><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM Logo" class="auth-modal__logo" data-v-1834587d><h2 class="auth-modal__title" data-v-1834587d>TZORAH EMPORIUM</h2><p class="auth-modal__subtitle" data-v-1834587d>LUXURY PERFUMES, BOTANICAL OILS &amp; BOUDOIR</p></div><div class="auth-modal__tabs" data-v-1834587d><button class="${ssrRenderClass(["auth-modal__tab", { "auth-modal__tab--active": unref(authModalMode) === "login" }])}" data-v-1834587d> SIGN IN </button><button class="${ssrRenderClass(["auth-modal__tab", { "auth-modal__tab--active": unref(authModalMode) === "signup" }])}" data-v-1834587d> SIGN UP </button><div class="${ssrRenderClass([{ "auth-modal__tab-indicator--right": unref(authModalMode) === "signup" }, "auth-modal__tab-indicator"])}" data-v-1834587d></div></div><div class="auth-modal__body" data-v-1834587d>`);
				if (unref(authModalMode) === "login") {
					_push(`<form class="auth-form" data-v-1834587d><div class="form-group" data-v-1834587d><label for="login-email" data-v-1834587d>EMAIL ADDRESS</label><input id="login-email"${ssrRenderAttr("value", loginForm.email)} type="email" placeholder="name@example.com" required class="form-input" data-v-1834587d></div><div class="form-group" data-v-1834587d><label for="login-password" data-v-1834587d>PASSWORD</label><input id="login-password"${ssrRenderAttr("value", loginForm.password)} type="password" placeholder="••••••••" required class="form-input" data-v-1834587d></div><div class="auth-modal__options" data-v-1834587d><label class="checkbox-label" data-v-1834587d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(loginForm.remember) ? ssrLooseContain(loginForm.remember, null) : loginForm.remember) ? " checked" : ""} data-v-1834587d><span data-v-1834587d>Remember me</span></label><a href="#" class="forgot-link" data-v-1834587d>Forgot password?</a></div><button type="submit" class="btn-auth"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-1834587d>`);
					if (loading.value) _push(`<span class="spinner" data-v-1834587d></span>`);
					else _push(`<span data-v-1834587d>ENTER ACCOUNT</span>`);
					_push(`</button></form>`);
				} else {
					_push(`<form class="auth-form" data-v-1834587d><div class="form-group" data-v-1834587d><label for="signup-name" data-v-1834587d>FULL NAME</label><input id="signup-name"${ssrRenderAttr("value", signupForm.name)} type="text" placeholder="John Doe" required class="form-input" data-v-1834587d></div><div class="form-group" data-v-1834587d><label for="signup-email" data-v-1834587d>EMAIL ADDRESS</label><input id="signup-email"${ssrRenderAttr("value", signupForm.email)} type="email" placeholder="john@example.com" required class="form-input" data-v-1834587d></div><div class="form-group" data-v-1834587d><label for="signup-password" data-v-1834587d>PASSWORD</label><input id="signup-password"${ssrRenderAttr("value", signupForm.password)} type="password" placeholder="Minimum 6 characters" required minlength="6" class="form-input" data-v-1834587d></div><div class="form-group" data-v-1834587d><label for="signup-confirm-password" data-v-1834587d>CONFIRM PASSWORD</label><input id="signup-confirm-password"${ssrRenderAttr("value", signupForm.confirmPassword)} type="password" placeholder="••••••••" required class="form-input" data-v-1834587d></div><p class="terms-text" data-v-1834587d> By signing up, you agree to our Terms of Service and Privacy Policy. </p><button type="submit" class="btn-auth"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-1834587d>`);
					if (loading.value) _push(`<span class="spinner" data-v-1834587d></span>`);
					else _push(`<span data-v-1834587d>CREATE ACCOUNT</span>`);
					_push(`</button></form>`);
				}
				_push(`</div></div></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthModal.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var AuthModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["__scopeId", "data-v-1834587d"]]);
//#endregion
//#region app/components/WhatsAppButton.vue
var _sfc_main$1 = {
	__name: "WhatsAppButton",
	__ssrInlineRender: true,
	setup(__props) {
		const { storeSettings} = useStoreSettings();
		const showPulse = ref(true);
		const whatsappNumber = computed(() => {
			return (storeSettings.value?.whatsappNumber || "").replace(/\D/g, "");
		});
		const whatsappLink = computed(() => {
			const msg = encodeURIComponent("Hello! I'd like to inquire about a product.");
			return `https://wa.me/${whatsappNumber.value}?text=${msg}`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (whatsappNumber.value) _push(`<a${ssrRenderAttrs(mergeProps({
				href: whatsappLink.value,
				target: "_blank",
				rel: "noopener noreferrer",
				class: ["wa-fab", { "wa-fab--pulsing": showPulse.value }],
				"aria-label": "Chat with us on WhatsApp"
			}, _attrs))} data-v-160a0753><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="wa-icon" aria-hidden="true" data-v-160a0753><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" data-v-160a0753></path></svg><span class="wa-tooltip" data-v-160a0753>Chat with us</span></a>`);
			else _push(`<!---->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsAppButton.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var WhatsAppButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-160a0753"]]);
//#endregion
//#region app/layouts/default.vue
var _sfc_main = {
	__name: "default",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { storeSettings} = useStoreSettings();
		const { data: liveSettings } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("appLayoutSettingsData", () => $fetch$1("/api/v1/settings"))), __temp = await __temp, __restore(), __temp);
		if (liveSettings.value) storeSettings.value = {
			...storeSettings.value,
			...liveSettings.value
		};
		const layoutPaddingStyle = computed(() => {
			return { paddingTop: `calc(var(--header-height) + ${storeSettings.value.announcementEnabled ? 36 : 0}px)` };
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TheHeader = TheHeader_default;
			const _component_TheFooter = TheFooter_default;
			const _component_CartDrawer = CartDrawer_default;
			const _component_ToastSystem = ToastSystem_default;
			const _component_AuthModal = AuthModal_default;
			const _component_WhatsAppButton = WhatsAppButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "app-layout",
				style: layoutPaddingStyle.value
			}, _attrs))}>`);
			if (unref(storeSettings).announcementEnabled) _push(`<div class="announcement-bar" style="${ssrRenderStyle({ backgroundColor: unref(storeSettings).announcementBg || "#1a1a1a" })}"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> ${ssrInterpolate(unref(storeSettings).announcementText || "FREE SHIPPING ON ORDERS OVER $150")}</div>`);
			else _push(`<!---->`);
			_push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
			_push(`<main>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main>`);
			_push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
			_push(ssrRenderComponent(_component_CartDrawer, null, null, _parent));
			_push(ssrRenderComponent(_component_ToastSystem, null, null, _parent));
			_push(ssrRenderComponent(_component_AuthModal, null, null, _parent));
			_push(ssrRenderComponent(_component_WhatsAppButton, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DQnUwUL5.mjs.map

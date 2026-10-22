import { b as useAuth, c as useHead$1, a as useState, $ as $fetch$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { u as useStoreSettings } from './useStoreSettings-KpneMvKU.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { u as useAsyncData } from './asyncData-DOwAQs52.mjs';
import { ref, computed, withAsyncContext, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderTeleport } from 'vue/server-renderer';
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
import 'vue-router';

//#region app/pages/cart.vue
var _sfc_main = {
	__name: "cart",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useAuth();
		const showAuthGate = ref(false);
		useHead$1({
			title: "Your Cart | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Review your bag and proceed to checkout."
			}]
		});
		const cartCount = useState("cartCount", () => 0);
		const cartItems = useState("cartItems", () => []);
		useState("toasts", () => []);
		const { storeSettings} = useStoreSettings();
		computed(() => Number(storeSettings.value.freeShippingThreshold || 150));
		computed(() => Number(storeSettings.value.standardShippingFee || 15));
		const currencySymbol = computed(() => {
			const c = storeSettings.value?.currency || "NGN";
			if (c === "NGN") return "₦";
			if (c === "EUR") return "€";
			if (c === "GBP") return "£";
			return "₦";
		});
		const subtotal = computed(() => cartItems.value.reduce((sum, i) => sum + i.price * i.quantity, 0));
		const estimatedTotal = computed(() => subtotal.value);
		const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
		const getColorHex = (name) => {
			return {
				black: "#121212",
				white: "#f8f9fa",
				cream: "#ebe7e0",
				tan: "#d2b48c",
				grey: "#8e8e93",
				navy: "#1a233d",
				beige: "#e1d5c2",
				brown: "#5c4033",
				olive: "#556b2f",
				camel: "#c19a6b",
				"dusty-rose": "#cca4a4",
				charcoal: "#3a3a3a",
				burgundy: "#7d1f2a",
				teal: "#3d7a7a"
			}[(name || "").toLowerCase()] || "#cccccc";
		};
		const defaultRecommendations = [
			{
				id: "rec1",
				name: "CLASSIC HOODIE",
				price: 89,
				image: "/images/product_hoodie.png",
				colors: ["cream", "black"]
			},
			{
				id: "rec2",
				name: "OVERSIZE SWEATSHIRT",
				price: 79,
				image: "/images/product_sweatshirt.png",
				colors: ["grey", "black"]
			},
			{
				id: "rec3",
				name: "KNIT POLO",
				price: 89,
				image: "/images/product_polo.png",
				colors: ["navy", "black"]
			},
			{
				id: "rec4",
				name: "SIGNATURE TEE",
				price: 59,
				image: "/images/product_tee.png",
				colors: ["white", "black"]
			}
		];
		const liveRecommendations = ref([]);
		const mapRecProduct = (p) => ({
			id: p.id,
			name: p.name,
			price: parseFloat(p.price),
			priceFormatted: `${currencySymbol.value}${parseFloat(p.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
			image: p.image || "/images/product_tee.png",
			colors: p.colors || ["black"]
		});
		const { data: recProductsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("cartRecommendationsPageData", () => $fetch$1("/api/v1/products"))), __temp = await __temp, __restore(), __temp);
		if (recProductsData.value && recProductsData.value.length > 0) liveRecommendations.value = recProductsData.value.map(mapRecProduct);
		const recommendations = computed(() => {
			let list = liveRecommendations.value.length > 0 ? liveRecommendations.value : defaultRecommendations.map(mapRecProduct);
			if (list.length < 4) {
				const pad = defaultRecommendations.slice(list.length, 4).map(mapRecProduct);
				list = [...list, ...pad];
			}
			return list.slice(0, 4);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-page" }, _attrs))} data-v-61a7a6f4><div class="cart-page__mini-header" data-v-61a7a6f4><button class="mini-header__back" aria-label="Go back" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><polyline points="15 18 9 12 15 6" data-v-61a7a6f4></polyline></svg></button>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "mini-header__logo"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" data-v-61a7a6f4${_scopeId}><span class="mini-header__brand" data-v-61a7a6f4${_scopeId}>TZORAH EMPORIUM</span>`);
					else return [createVNode("img", {
						src: _virtual_public__2Flogo_default,
						alt: "TZORAH EMPORIUM"
					}), createVNode("span", { class: "mini-header__brand" }, "TZORAH EMPORIUM")];
				}),
				_: 1
			}, _parent));
			_push(`<button class="mini-header__bag" aria-label="Bag" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-61a7a6f4></path><line x1="3" y1="6" x2="21" y2="6" data-v-61a7a6f4></line><path d="M16 10a4 4 0 0 1-8 0" data-v-61a7a6f4></path></svg>`);
			if (unref(cartCount) > 0) _push(`<span class="mini-header__badge" data-v-61a7a6f4>${ssrInterpolate(unref(cartCount))}</span>`);
			else _push(`<!---->`);
			_push(`</button></div><div class="cart-page__body" data-v-61a7a6f4><div class="cart-top" data-v-61a7a6f4><h1 class="cart-title" data-v-61a7a6f4>YOUR CART (${ssrInterpolate(unref(cartCount))})</h1></div>`);
			if (unref(cartItems).length > 0) {
				_push(`<div class="cart-items" data-v-61a7a6f4><!--[-->`);
				ssrRenderList(unref(cartItems), (item) => {
					_push(`<div class="cart-item" data-v-61a7a6f4><div class="cart-item__img-wrap" data-v-61a7a6f4><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="cart-item__img" data-v-61a7a6f4></div><div class="cart-item__details" data-v-61a7a6f4><div class="cart-item__top-row" data-v-61a7a6f4><div data-v-61a7a6f4><h3 class="cart-item__name" data-v-61a7a6f4>${ssrInterpolate(item.name)}</h3><p class="cart-item__base-price" data-v-61a7a6f4>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(item.price.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</p></div><button class="cart-item__remove" aria-label="Remove item" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><polyline points="3 6 5 6 21 6" data-v-61a7a6f4></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" data-v-61a7a6f4></path><path d="M10 11v6" data-v-61a7a6f4></path><path d="M14 11v6" data-v-61a7a6f4></path><path d="M9 6V4h6v2" data-v-61a7a6f4></path></svg></button></div>`);
					if (item.colors && item.colors.length > 0) _push(`<div class="cart-item__attr" data-v-61a7a6f4><span class="cart-item__attr-label" data-v-61a7a6f4>Color:</span><span class="cart-item__attr-val" data-v-61a7a6f4>${ssrInterpolate(item.selectedColor ? capitalize(item.selectedColor) : capitalize(item.colors[0]))}</span></div>`);
					else _push(`<!---->`);
					if (item.colors && item.colors.length > 0) {
						_push(`<div class="cart-item__swatches" data-v-61a7a6f4><!--[-->`);
						ssrRenderList(item.colors, (c) => {
							_push(`<span class="${ssrRenderClass([{ "item-swatch--active": (item.selectedColor || item.colors[0]) === c }, "item-swatch"])}" style="${ssrRenderStyle({ backgroundColor: getColorHex(c) })}" data-v-61a7a6f4></span>`);
						});
						_push(`<!--]--></div>`);
					} else _push(`<!---->`);
					_push(`<div class="cart-item__bottom-row" data-v-61a7a6f4><div class="qty-control" data-v-61a7a6f4><button class="qty-btn" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-61a7a6f4><line x1="5" y1="12" x2="19" y2="12" data-v-61a7a6f4></line></svg></button><span class="qty-num" data-v-61a7a6f4>${ssrInterpolate(item.quantity)}</span><button class="qty-btn" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-61a7a6f4><line x1="12" y1="5" x2="12" y2="19" data-v-61a7a6f4></line><line x1="5" y1="12" x2="19" y2="12" data-v-61a7a6f4></line></svg></button></div><p class="cart-item__line-total" data-v-61a7a6f4>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate((item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 }))}</p></div></div></div>`);
				});
				_push(`<!--]--></div>`);
			} else {
				_push(`<div class="cart-empty" data-v-61a7a6f4><div class="cart-empty__icon" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-61a7a6f4></path><line x1="3" y1="6" x2="21" y2="6" data-v-61a7a6f4></line><path d="M16 10a4 4 0 0 1-8 0" data-v-61a7a6f4></path></svg></div><h2 class="cart-empty__title" data-v-61a7a6f4>Your bag is empty</h2><p class="cart-empty__sub" data-v-61a7a6f4>Add something from the shop to get started.</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/shop",
					class: "cart-empty__cta"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`SHOP NOW`);
						else return [createTextVNode("SHOP NOW")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			}
			if (unref(cartItems).length > 0) _push(`<div class="order-summary" data-v-61a7a6f4><h3 class="order-summary__title" data-v-61a7a6f4>ORDER SUMMARY</h3><div class="order-summary__row" data-v-61a7a6f4><span data-v-61a7a6f4>Subtotal</span><span data-v-61a7a6f4>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(subtotal.value.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div><div class="order-summary__row" data-v-61a7a6f4><span data-v-61a7a6f4>Shipping</span><span style="${ssrRenderStyle({
				"color": "#c8973a",
				"font-weight": "600",
				"font-size": "0.8rem",
				"font-style": "italic"
			})}" data-v-61a7a6f4>Determined by dispatch rider</span></div><div class="order-summary__row order-summary__row--total" data-v-61a7a6f4><span data-v-61a7a6f4>Estimated Total</span><span data-v-61a7a6f4>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(estimatedTotal.value.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div></div>`);
			else _push(`<!---->`);
			_push(`<div class="also-like" data-v-61a7a6f4><div class="also-like__header" data-v-61a7a6f4><h3 class="also-like__title" data-v-61a7a6f4>YOU MAY ALSO LIKE</h3>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "also-like__view-all"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`VIEW ALL →`);
					else return [createTextVNode("VIEW ALL →")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="also-like__grid" data-v-61a7a6f4><!--[-->`);
			ssrRenderList(recommendations.value, (rec) => {
				_push(`<div class="rec-card" data-v-61a7a6f4><div class="rec-card__img-wrap" data-v-61a7a6f4><img${ssrRenderAttr("src", rec.image)}${ssrRenderAttr("alt", rec.name)} class="rec-card__img" data-v-61a7a6f4><button class="rec-card__add" aria-label="Add to bag" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-61a7a6f4><line x1="12" y1="5" x2="12" y2="19" data-v-61a7a6f4></line><line x1="5" y1="12" x2="19" y2="12" data-v-61a7a6f4></line></svg></button></div><p class="rec-card__name" data-v-61a7a6f4>${ssrInterpolate(rec.name)}</p><p class="rec-card__price" data-v-61a7a6f4>${ssrInterpolate(rec.priceFormatted)}</p></div>`);
			});
			_push(`<!--]--></div></div>`);
			if (unref(cartItems).length > 0) {
				_push(`<div class="cart-ctas" data-v-61a7a6f4><button class="btn-checkout" data-v-61a7a6f4>PROCEED TO CHECKOUT →</button>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/shop",
					class: "btn-continue"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`CONTINUE SHOPPING`);
						else return [createTextVNode("CONTINUE SHOPPING")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			ssrRenderTeleport(_push, (_push) => {
				if (showAuthGate.value) _push(`<div class="auth-gate-overlay" data-v-61a7a6f4><div class="auth-gate-modal" data-v-61a7a6f4><button class="auth-gate-close" aria-label="Close" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><line x1="18" y1="6" x2="6" y2="18" data-v-61a7a6f4></line><line x1="6" y1="6" x2="18" y2="18" data-v-61a7a6f4></line></svg></button><div class="auth-gate-icon" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-61a7a6f4></path><circle cx="12" cy="7" r="4" data-v-61a7a6f4></circle></svg></div><h3 class="auth-gate-title" data-v-61a7a6f4>SIGN IN TO CONTINUE</h3><p class="auth-gate-desc" data-v-61a7a6f4>Please sign in or create an account to proceed with your order.</p><div class="auth-gate-actions" data-v-61a7a6f4><button class="auth-gate-btn auth-gate-btn--primary" data-v-61a7a6f4>SIGN IN</button><button class="auth-gate-btn auth-gate-btn--secondary" data-v-61a7a6f4>CREATE ACCOUNT</button></div><p class="auth-gate-note" data-v-61a7a6f4>Your bag will be saved while you sign in.</p></div></div>`);
				else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`<div class="trust-badges" data-v-61a7a6f4><div class="trust-badge" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-61a7a6f4></path></svg><div data-v-61a7a6f4><strong data-v-61a7a6f4>SECURE CHECKOUT</strong><span data-v-61a7a6f4>Safe &amp; encrypted payments</span></div></div><div class="trust-badge" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><polyline points="17 1 21 5 17 9" data-v-61a7a6f4></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-61a7a6f4></path><polyline points="7 23 3 19 7 15" data-v-61a7a6f4></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-61a7a6f4></path></svg><div data-v-61a7a6f4><strong data-v-61a7a6f4>EASY RETURNS</strong><span data-v-61a7a6f4>30-day return policy</span></div></div><div class="trust-badge" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.46-.46a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18z" data-v-61a7a6f4></path></svg><div data-v-61a7a6f4><strong data-v-61a7a6f4>24/7 SUPPORT</strong><span data-v-61a7a6f4>We&#39;re here to help</span></div></div><div class="trust-badge" data-v-61a7a6f4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-61a7a6f4><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-61a7a6f4></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-v-61a7a6f4></path></svg><div data-v-61a7a6f4><strong data-v-61a7a6f4>PRIVACY PROTECTED</strong><span data-v-61a7a6f4>Your data is safe with us</span></div></div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var cart_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-61a7a6f4"]]);

export { cart_default as default };
//# sourceMappingURL=cart-D8zOkOL1.mjs.map

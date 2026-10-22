import { b as useAuth, c as useHead$1, a as useState } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { u as useStoreSettings } from './useStoreSettings-KpneMvKU.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderTeleport } from 'vue/server-renderer';
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

//#region app/pages/checkout.vue?vue&type=script&setup=true&lang.ts
var checkout_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "checkout",
	__ssrInlineRender: true,
	setup(__props) {
		useAuth();
		useHead$1({
			title: "Checkout | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Review your order and complete your purchase securely with TZORAH EMPORIUM."
			}]
		});
		const cartCount = useState("cartCount", () => 0);
		const cartItems = useState("cartItems", () => []);
		useState("toasts", () => []);
		const editingAddress = ref(false);
		const address = ref({
			name: "",
			street: "",
			apt: "",
			city: "",
			state: "",
			zip: "",
			country: "United States",
			phone: "",
			email: ""
		});
		const { storeSettings} = useStoreSettings();
		const defaultBankAccounts = [{
			id: "1",
			bankName: "Guaranty Trust Bank (GTBank)",
			accountNumber: "0123456789",
			accountName: "TZORAH EMPORIUM ENTERPRISES",
			instructions: "Please use your Order ID as the transfer description/reference."
		}];
		const showBankModal = ref(false);
		const placedOrderData = ref(null);
		const receiptFile = ref(null);
		const receiptPreview = ref(null);
		const uploadingReceipt = ref(false);
		const receiptUploaded = ref(false);
		computed(() => Number(storeSettings.value.freeShippingThreshold || 150));
		computed(() => Number(storeSettings.value.standardShippingFee || 15));
		computed(() => Number(storeSettings.value.expressShippingFee || 7500));
		const currencySymbol = computed(() => {
			const c = storeSettings.value?.currency || "NGN";
			if (c === "NGN") return "₦";
			if (c === "EUR") return "€";
			if (c === "GBP") return "£";
			return "₦";
		});
		const shippingMethods = computed(() => [{
			id: "standard",
			name: "Standard Delivery",
			days: "Port Harcourt & Nationwide (24–48h handover to rider)"
		}, {
			id: "express",
			name: "Express Same-Day Dispatch",
			days: "Port Harcourt only (Priority rider dispatch)"
		}]);
		const selectedShipping = ref("standard");
		const showPromo = ref(false);
		const promoCode = ref("");
		const promoApplied = ref(false);
		const subtotal = computed(() => cartItems.value.reduce((sum, i) => sum + i.price * i.quantity, 0));
		computed(() => 0);
		const estimatedTotal = computed(() => subtotal.value);
		const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
		const placingOrder = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "co-page" }, _attrs))} data-v-1a98566d><div class="co-mini-header" data-v-1a98566d>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/cart",
				class: "co-back",
				"aria-label": "Back to cart"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d${_scopeId}><polyline points="15 18 9 12 15 6" data-v-1a98566d${_scopeId}></polyline></svg>`);
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
					}, [createVNode("polyline", { points: "15 18 9 12 15 6" })]))];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "co-logo"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" data-v-1a98566d${_scopeId}><span data-v-1a98566d${_scopeId}>TZORAH EMPORIUM</span>`);
					else return [createVNode("img", {
						src: _virtual_public__2Flogo_default,
						alt: "TZORAH EMPORIUM"
					}), createVNode("span", null, "TZORAH EMPORIUM")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/cart",
				class: "co-cart-icon",
				"aria-label": "Cart"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d${_scopeId}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-1a98566d${_scopeId}></path><line x1="3" y1="6" x2="21" y2="6" data-v-1a98566d${_scopeId}></line><path d="M16 10a4 4 0 0 1-8 0" data-v-1a98566d${_scopeId}></path></svg>`);
						if (unref(cartCount) > 0) _push(`<span class="co-cart-badge" data-v-1a98566d${_scopeId}>${ssrInterpolate(unref(cartCount))}</span>`);
						else _push(`<!---->`);
					} else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "22",
						height: "22",
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
					])), unref(cartCount) > 0 ? (openBlock(), createBlock("span", {
						key: 0,
						class: "co-cart-badge"
					}, toDisplayString(unref(cartCount)), 1)) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="co-steps-wrap" data-v-1a98566d><div class="co-steps" data-v-1a98566d><div class="co-step co-step--done" data-v-1a98566d><div class="co-step__circle" data-v-1a98566d>1</div><span class="co-step__label" data-v-1a98566d>CART</span></div><div class="co-step__line co-step__line--done" data-v-1a98566d></div><div class="co-step co-step--active" data-v-1a98566d><div class="co-step__circle" data-v-1a98566d>2</div><span class="co-step__label" data-v-1a98566d>CHECKOUT</span></div><div class="co-step__line" data-v-1a98566d></div><div class="co-step" data-v-1a98566d><div class="co-step__circle co-step__circle--inactive" data-v-1a98566d>3</div><span class="co-step__label co-step__label--inactive" data-v-1a98566d>PAYMENT</span></div></div></div><div class="co-body" data-v-1a98566d><div class="co-page-header" data-v-1a98566d><div data-v-1a98566d><h1 class="co-title" data-v-1a98566d>PROCEED TO CHECKOUT</h1><p class="co-subtitle" data-v-1a98566d>Almost there! Review your order and details.</p></div><div class="co-secure-badge" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-1a98566d></path></svg><div data-v-1a98566d><strong data-v-1a98566d>SECURE CHECKOUT</strong><span data-v-1a98566d>Your data is safe with us.</span></div></div></div><div class="co-layout" data-v-1a98566d><div class="co-left" data-v-1a98566d><div class="co-card" data-v-1a98566d><div class="co-card__header" data-v-1a98566d><div class="co-card__header-left" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-1a98566d></path><circle cx="12" cy="10" r="3" data-v-1a98566d></circle></svg><h3 data-v-1a98566d>SHIPPING ADDRESS</h3></div><button class="co-edit-btn" data-v-1a98566d>EDIT</button></div>`);
			if (!editingAddress.value) {
				_push(`<div class="co-card__body" data-v-1a98566d><p data-v-1a98566d>${ssrInterpolate(address.value.name)}</p><p data-v-1a98566d>${ssrInterpolate(address.value.street)}</p>`);
				if (address.value.apt) _push(`<p data-v-1a98566d>${ssrInterpolate(address.value.apt)}</p>`);
				else _push(`<!---->`);
				_push(`<p data-v-1a98566d>${ssrInterpolate(address.value.city)}, ${ssrInterpolate(address.value.state)} ${ssrInterpolate(address.value.zip)}</p><p data-v-1a98566d>${ssrInterpolate(address.value.country)}</p><p data-v-1a98566d>${ssrInterpolate(address.value.phone)}</p><p data-v-1a98566d>${ssrInterpolate(address.value.email)}</p></div>`);
			} else _push(`<div class="co-card__body co-form" data-v-1a98566d><div class="co-form__row" data-v-1a98566d><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>Full Name</label><input${ssrRenderAttr("value", address.value.name)} type="text" data-v-1a98566d></div></div><div class="co-form__row" data-v-1a98566d><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>Street Address</label><input${ssrRenderAttr("value", address.value.street)} type="text" data-v-1a98566d></div></div><div class="co-form__row" data-v-1a98566d><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>Apt / Suite (optional)</label><input${ssrRenderAttr("value", address.value.apt)} type="text" data-v-1a98566d></div></div><div class="co-form__row co-form__row--two" data-v-1a98566d><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>City</label><input${ssrRenderAttr("value", address.value.city)} type="text" data-v-1a98566d></div><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>State</label><input${ssrRenderAttr("value", address.value.state)} type="text" data-v-1a98566d></div></div><div class="co-form__row co-form__row--two" data-v-1a98566d><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>ZIP Code</label><input${ssrRenderAttr("value", address.value.zip)} type="text" data-v-1a98566d></div><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>Country</label><input${ssrRenderAttr("value", address.value.country)} type="text" data-v-1a98566d></div></div><div class="co-form__row" data-v-1a98566d><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>Phone</label><input${ssrRenderAttr("value", address.value.phone)} type="tel" data-v-1a98566d></div></div><div class="co-form__row" data-v-1a98566d><div class="co-form__group" data-v-1a98566d><label data-v-1a98566d>Email</label><input${ssrRenderAttr("value", address.value.email)} type="email" data-v-1a98566d></div></div><button class="co-save-btn" data-v-1a98566d>SAVE ADDRESS</button></div>`);
			_push(`</div><div class="co-card" data-v-1a98566d><div class="co-card__header" data-v-1a98566d><div class="co-card__header-left" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><rect x="1" y="3" width="15" height="13" data-v-1a98566d></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" data-v-1a98566d></polygon><circle cx="5.5" cy="18.5" r="2.5" data-v-1a98566d></circle><circle cx="18.5" cy="18.5" r="2.5" data-v-1a98566d></circle></svg><h3 data-v-1a98566d>SHIPPING METHOD</h3></div><button class="co-edit-btn" data-v-1a98566d>EDIT</button></div><div class="co-card__body" data-v-1a98566d><!--[-->`);
			ssrRenderList(shippingMethods.value, (method) => {
				_push(`<label class="${ssrRenderClass(["co-radio-row", { "co-radio-row--selected": selectedShipping.value === method.id }])}" data-v-1a98566d><div class="co-radio" data-v-1a98566d>`);
				if (selectedShipping.value === method.id) _push(`<div class="co-radio__dot" data-v-1a98566d></div>`);
				else _push(`<!---->`);
				_push(`</div><div class="co-radio-row__info" data-v-1a98566d><p class="co-radio-row__name" data-v-1a98566d>${ssrInterpolate(method.name)}</p><p class="co-radio-row__sub" data-v-1a98566d>${ssrInterpolate(method.days)}</p></div><span class="co-radio-row__price co-dispatch-tag" data-v-1a98566d>Determined by Dispatch Rider</span></label>`);
			});
			_push(`<!--]--><div class="co-delivery-notice" data-v-1a98566d><div class="co-delivery-notice__header" data-v-1a98566d><div class="co-delivery-notice__title" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a98566d><circle cx="12" cy="12" r="10" data-v-1a98566d></circle><line x1="12" y1="16" x2="12" y2="12" data-v-1a98566d></line><line x1="12" y1="8" x2="12.01" y2="8" data-v-1a98566d></line></svg><span data-v-1a98566d>DELIVERY INFORMATION — TZORAH’S EMPORIUM</span></div><span class="co-delivery-notice__badge" data-v-1a98566d>Port Harcourt &amp; Nationwide</span></div><p class="co-delivery-notice__intro" data-v-1a98566d>We deliver within Port Harcourt and to other locations across Nigeria.</p><div class="co-delivery-notice__grid" data-v-1a98566d><div class="co-delivery-zone-item" data-v-1a98566d><strong data-v-1a98566d>Port Harcourt:</strong> Same-day delivery where available, or within 24 hours where possible. </div><div class="co-delivery-zone-item" data-v-1a98566d><strong data-v-1a98566d>Other parts of Rivers State:</strong> Fees and delivery times depend on destination. </div><div class="co-delivery-zone-item" data-v-1a98566d><strong data-v-1a98566d>South-South &amp; South-East:</strong> Estimated delivery time of 4–7 days. </div><div class="co-delivery-zone-item" data-v-1a98566d><strong data-v-1a98566d>Other states nationwide:</strong> Estimated delivery time of 4–10 days, depending on destination. </div></div><div class="co-delivery-notice__notes" data-v-1a98566d><span class="co-delivery-notice__notes-title" data-v-1a98566d>Please note:</span><ul data-v-1a98566d><li data-v-1a98566d>Delivery fees are determined by the dispatch rider or logistics company, not Tzorah’s Emporium.</li><li data-v-1a98566d>Orders are typically processed and handed over for dispatch within 24–48 hours.</li><li data-v-1a98566d>Delivery timelines are estimates and may vary due to distance, logistics availability or unforeseen delays.</li><li data-v-1a98566d>Once an order has been handed over to the logistics provider, delays outside our control may occur.</li></ul></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/delivery",
				target: "_blank",
				class: "co-delivery-notice__link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Read complete delivery guidelines → `);
					else return [createTextVNode(" Read complete delivery guidelines → ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="co-card" data-v-1a98566d><div class="co-card__header" data-v-1a98566d><div class="co-card__header-left" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3l9-7z" data-v-1a98566d></path></svg><h3 data-v-1a98566d>PAYMENT METHOD</h3></div><span class="co-badge-bank" data-v-1a98566d>BANK TRANSFER ONLY</span></div><div class="co-card__body" data-v-1a98566d><div class="co-bank-transfer-box" data-v-1a98566d><div class="co-bank-transfer-header" data-v-1a98566d><div class="co-bank-icon-badge" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a98566d><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3l9-7z" data-v-1a98566d></path></svg></div><div data-v-1a98566d><h4 class="co-bank-title" data-v-1a98566d>Direct Bank Transfer</h4><p class="co-bank-sub" data-v-1a98566d>Transfer total amount directly to our official bank account.</p></div></div><div class="co-bank-accounts-preview" data-v-1a98566d><!--[-->`);
			ssrRenderList(unref(storeSettings).bankAccounts || defaultBankAccounts, (acc, i) => {
				_push(`<div class="co-bank-preview-card" data-v-1a98566d><div class="co-bank-row" data-v-1a98566d><span class="co-bank-lbl" data-v-1a98566d>Bank Name</span><strong class="co-bank-val" data-v-1a98566d>${ssrInterpolate(acc.bankName)}</strong></div><div class="co-bank-row" data-v-1a98566d><span class="co-bank-lbl" data-v-1a98566d>Account Number</span><strong class="co-bank-val font-mono" data-v-1a98566d>${ssrInterpolate(acc.accountNumber)}</strong></div><div class="co-bank-row" data-v-1a98566d><span class="co-bank-lbl" data-v-1a98566d>Account Name</span><strong class="co-bank-val" data-v-1a98566d>${ssrInterpolate(acc.accountName)}</strong></div></div>`);
			});
			_push(`<!--]--></div><div class="co-bank-notice" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a98566d><circle cx="12" cy="12" r="10" data-v-1a98566d></circle><line x1="12" y1="16" x2="12" y2="12" data-v-1a98566d></line><line x1="12" y1="8" x2="12.01" y2="8" data-v-1a98566d></line></svg><span data-v-1a98566d>Complete your order to reveal transfer reference and payment confirmation details.</span></div></div></div></div></div><div class="co-right" data-v-1a98566d><div class="co-summary-card" data-v-1a98566d><h3 class="co-summary__title" data-v-1a98566d>ORDER SUMMARY</h3><div class="co-summary__items" data-v-1a98566d><!--[-->`);
			ssrRenderList(unref(cartItems), (item) => {
				_push(`<div class="co-summary__item" data-v-1a98566d><div class="co-summary__item-img" data-v-1a98566d><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-1a98566d></div><div class="co-summary__item-details" data-v-1a98566d><p class="co-summary__item-name" data-v-1a98566d>${ssrInterpolate(item.name)}</p>`);
				if (item.selectedColor || item.size || item.selectedSize) {
					_push(`<p class="co-summary__item-meta" data-v-1a98566d>`);
					if (item.selectedColor) _push(`<span data-v-1a98566d>${ssrInterpolate(capitalize(item.selectedColor))}</span>`);
					else _push(`<!---->`);
					if (item.selectedColor && (item.size || item.selectedSize)) _push(`<span data-v-1a98566d> • </span>`);
					else _push(`<!---->`);
					if (item.size || item.selectedSize) _push(`<span data-v-1a98566d>${ssrInterpolate(item.size || item.selectedSize)}</span>`);
					else _push(`<!---->`);
					_push(`</p>`);
				} else _push(`<!---->`);
				_push(`<p class="co-summary__item-qty" data-v-1a98566d>Qty: ${ssrInterpolate(item.quantity)}</p></div><p class="co-summary__item-price" data-v-1a98566d>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate((item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 }))}</p></div>`);
			});
			_push(`<!--]-->`);
			if (unref(cartItems).length === 0) {
				_push(`<div class="co-summary__empty" data-v-1a98566d><p data-v-1a98566d>No items in bag. `);
				_push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Shop now`);
						else return [createTextVNode("Shop now")];
					}),
					_: 1
				}, _parent));
				_push(`</p></div>`);
			} else _push(`<!---->`);
			_push(`</div><div class="co-promo" data-v-1a98566d><button class="co-promo__toggle" data-v-1a98566d> Have a promo code? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({
				transform: showPromo.value ? "rotate(180deg)" : "rotate(0deg)",
				transition: "transform 0.3s"
			})}" data-v-1a98566d><polyline points="6 9 12 15 18 9" data-v-1a98566d></polyline></svg></button>`);
			if (showPromo.value) _push(`<div class="co-promo__input-row" data-v-1a98566d><input${ssrRenderAttr("value", promoCode.value)} type="text" placeholder="Enter code" class="co-promo__input" data-v-1a98566d><button class="co-promo__apply" data-v-1a98566d>APPLY</button></div>`);
			else _push(`<!---->`);
			if (promoApplied.value) _push(`<p class="co-promo__success" data-v-1a98566d>✓ Promo code applied!</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="co-summary__numbers" data-v-1a98566d><div class="co-summary__row" data-v-1a98566d><span data-v-1a98566d>Subtotal</span><span data-v-1a98566d>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(subtotal.value.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div><div class="co-summary__row" data-v-1a98566d><span data-v-1a98566d>Shipping</span><span class="co-dispatch-tag" data-v-1a98566d>Determined by dispatch rider</span></div></div><div class="co-summary__total" data-v-1a98566d><span data-v-1a98566d>TOTAL (${ssrInterpolate(unref(storeSettings).currency || "NGN")})</span><span class="co-summary__total-amount" data-v-1a98566d>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(estimatedTotal.value.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div><div class="co-security-note" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-1a98566d></path></svg><div data-v-1a98566d><strong data-v-1a98566d>Secure &amp; Encrypted</strong><span data-v-1a98566d>Your payment information is protected with industry-leading encryption.</span></div></div></div></div></div><div class="co-place-order-wrap" data-v-1a98566d><button class="co-place-order"${ssrIncludeBooleanAttr(placingOrder.value) ? " disabled" : ""} data-v-1a98566d>`);
			if (placingOrder.value) _push(`<span data-v-1a98566d>PROCESSING ORDER...</span>`);
			else _push(`<span data-v-1a98566d>PLACE ORDER • ${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(estimatedTotal.value.toLocaleString("en-US", { minimumFractionDigits: 2 }))} →</span>`);
			_push(`</button><p class="co-legal" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="${ssrRenderStyle({
				"display": "inline",
				"vertical-align": "middle",
				"margin-right": "4px"
			})}" data-v-1a98566d><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-1a98566d></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-v-1a98566d></path></svg> By placing your order, you agree to our <a href="#" data-v-1a98566d>Terms of Service</a> and <a href="#" data-v-1a98566d>Privacy Policy</a>. </p></div><div class="co-trust" data-v-1a98566d><div class="co-trust__item" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><polyline points="17 1 21 5 17 9" data-v-1a98566d></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-1a98566d></path><polyline points="7 23 3 19 7 15" data-v-1a98566d></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-1a98566d></path></svg><strong data-v-1a98566d>EASY RETURNS</strong><span data-v-1a98566d>30-day hassle-free returns.</span></div><div class="co-trust__item" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.46-.46a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18z" data-v-1a98566d></path></svg><strong data-v-1a98566d>24/7 SUPPORT</strong><span data-v-1a98566d>We&#39;re here to help you.</span></div><div class="co-trust__item" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-1a98566d></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-v-1a98566d></path></svg><strong data-v-1a98566d>SECURE PAYMENT</strong><span data-v-1a98566d>Safe &amp; encrypted checkout.</span></div></div>`);
			ssrRenderTeleport(_push, (_push) => {
				if (showBankModal.value) {
					_push(`<div class="co-modal-overlay" data-v-1a98566d><div class="co-modal-card animate-scale-up" data-v-1a98566d><div class="co-modal-badge co-modal-badge--pending" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1a98566d><circle cx="12" cy="12" r="10" data-v-1a98566d></circle><polyline points="12 6 12 12 16 14" data-v-1a98566d></polyline></svg></div><h2 class="co-modal-title" data-v-1a98566d>ORDER SUBMITTED — AWAITING PAYMENT</h2><p class="co-modal-sub" data-v-1a98566d> Your order <strong data-v-1a98566d>#${ssrInterpolate(placedOrderData.value?.id)}</strong> has been registered! Please transfer the total amount below. An admin will verify your payment and confirm your order. </p><div class="co-modal-ref-box" data-v-1a98566d><div class="co-ref-row" data-v-1a98566d><span data-v-1a98566d>ORDER REFERENCE ID</span><div class="co-copy-wrap" data-v-1a98566d><strong class="font-mono" data-v-1a98566d>#${ssrInterpolate(placedOrderData.value?.id)}</strong><button class="btn-copy-sm" data-v-1a98566d>COPY</button></div></div><div class="co-ref-row" data-v-1a98566d><span data-v-1a98566d>TOTAL AMOUNT DUE</span><strong class="co-amount-gold" data-v-1a98566d>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate((placedOrderData.value?.total_price || estimatedTotal.value).toLocaleString())}</strong></div></div><div class="co-modal-banks" data-v-1a98566d><h4 class="co-modal-banks-title" data-v-1a98566d>TRANSFER TO ANY OF THE ACCOUNTS BELOW:</h4><!--[-->`);
					ssrRenderList(unref(storeSettings).bankAccounts || defaultBankAccounts, (acc, i) => {
						_push(`<div class="co-modal-bank-card" data-v-1a98566d><div class="co-modal-bank-head" data-v-1a98566d><span class="co-bank-tag" data-v-1a98566d>${ssrInterpolate(acc.bankName)}</span><button class="btn-copy-account" data-v-1a98566d> 📋 COPY NUMBER </button></div><div class="co-modal-bank-grid" data-v-1a98566d><div class="co-modal-grid-item" data-v-1a98566d><span class="lbl" data-v-1a98566d>Account Number</span><strong class="val font-mono text-gold" data-v-1a98566d>${ssrInterpolate(acc.accountNumber)}</strong></div><div class="co-modal-grid-item" data-v-1a98566d><span class="lbl" data-v-1a98566d>Account Name / Beneficiary</span><strong class="val" data-v-1a98566d>${ssrInterpolate(acc.accountName)}</strong></div></div>`);
						if (acc.instructions) _push(`<p class="co-modal-bank-memo" data-v-1a98566d> 💡 <strong data-v-1a98566d>Memo / Note:</strong> ${ssrInterpolate(acc.instructions)} (Quote Order #${ssrInterpolate(placedOrderData.value?.id)}) </p>`);
						else _push(`<!---->`);
						_push(`</div>`);
					});
					_push(`<!--]--></div><div class="co-receipt-upload-box" data-v-1a98566d><div class="co-receipt-head" data-v-1a98566d><span class="co-receipt-step" data-v-1a98566d>STEP 2</span><h4 class="co-receipt-title" data-v-1a98566d>UPLOAD PAYMENT RECEIPT / PROOF</h4></div><p class="co-receipt-desc" data-v-1a98566d> Attach a screenshot or photo of your transfer confirmation so our team can immediately verify and approve your order. </p>`);
					if (receiptUploaded.value) _push(`<div class="co-receipt-success" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" data-v-1a98566d><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-1a98566d></path><polyline points="22 4 12 14.01 9 11.01" data-v-1a98566d></polyline></svg><div class="co-receipt-success-text" data-v-1a98566d><strong data-v-1a98566d>RECEIPT SUBMITTED SUCCESSFULLY!</strong><span data-v-1a98566d>Your receipt has been submitted to the admin console for instant approval.</span></div></div>`);
					else {
						_push(`<div class="co-receipt-form" data-v-1a98566d><label class="${ssrRenderClass([{ "has-file": Boolean(receiptPreview.value) }, "co-file-dropzone"])}" data-v-1a98566d><input type="file" accept="image/*,application/pdf" class="co-file-input" data-v-1a98566d>`);
						if (receiptPreview.value) _push(`<div class="co-file-preview-wrap" data-v-1a98566d><img${ssrRenderAttr("src", receiptPreview.value)} alt="Receipt Preview" class="co-file-thumb" data-v-1a98566d><div class="co-file-info" data-v-1a98566d><span class="co-file-name" data-v-1a98566d>${ssrInterpolate(receiptFile.value?.name)}</span><span class="co-file-change" data-v-1a98566d>Click to select a different image</span></div></div>`);
						else _push(`<div class="co-dropzone-prompt" data-v-1a98566d><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" data-v-1a98566d><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-1a98566d></path><polyline points="17 8 12 3 7 8" data-v-1a98566d></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-1a98566d></line></svg><span data-v-1a98566d>Click to browse or drop transfer screenshot / receipt</span><small data-v-1a98566d>Supports PNG, JPG, JPEG, WEBP or PDF</small></div>`);
						_push(`</label>`);
						if (receiptFile.value) {
							_push(`<button class="btn-upload-receipt"${ssrIncludeBooleanAttr(uploadingReceipt.value) ? " disabled" : ""} data-v-1a98566d>`);
							if (uploadingReceipt.value) _push(`<span data-v-1a98566d>UPLOADING RECEIPT...</span>`);
							else _push(`<span data-v-1a98566d>📤 SUBMIT RECEIPT TO ADMIN</span>`);
							_push(`</button>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					}
					_push(`</div><div class="co-modal-actions" data-v-1a98566d>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/profile",
						class: "btn-modal-primary"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`VIEW MY ORDERS`);
							else return [createTextVNode("VIEW MY ORDERS")];
						}),
						_: 1
					}, _parent));
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/shop",
						class: "btn-modal-secondary"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`CONTINUE SHOPPING`);
							else return [createTextVNode("CONTINUE SHOPPING")];
						}),
						_: 1
					}, _parent));
					_push(`</div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</div></div>`);
		};
	}
});
//#endregion
//#region app/pages/checkout.vue
var _sfc_setup = checkout_vue_vue_type_script_setup_true_lang_default.setup;
checkout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var checkout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(checkout_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-1a98566d"]]);

export { checkout_default as default };
//# sourceMappingURL=checkout-fW6jhvH1.mjs.map

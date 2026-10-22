import { u as useCookie, a as useState, $ as $fetch$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { u as useWishlist } from './useWishlist-BbbQGVvs.mjs';
import { u as useStoreSettings } from './useStoreSettings-KpneMvKU.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { u as useAsyncData } from './asyncData-DOwAQs52.mjs';
import { F as FooterFeatures_default } from './FooterFeatures-BebMEnL0.mjs';
import { _ as _virtual_public__2Fhero_fragrances_default } from './_virtual_public-BhdsAuQK.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, resolveDynamicComponent, computed, ref, createTextVNode, withAsyncContext, unref, h, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import 'unhead/utils';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region app/components/TheHero.vue
var _sfc_main$9 = {
	__name: "TheHero",
	__ssrInlineRender: true,
	setup(__props) {
		const handleShopClick = (e) => {};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "home",
				class: "hero",
				"aria-label": "Hero Showcase"
			}, _attrs))} data-v-e44c15a3><div class="hero__bg-wrapper" data-v-e44c15a3><img${ssrRenderAttr("src", _virtual_public__2Fhero_fragrances_default)} alt="TZORAH EMPORIUM Luxury Fragrances &amp; Botanical Oils" class="hero__bg-img" loading="eager" data-v-e44c15a3><div class="hero__overlay" aria-hidden="true" data-v-e44c15a3></div></div><div class="container hero__container" data-v-e44c15a3><div class="hero__content" data-v-e44c15a3><div class="hero__eyebrow-wrapper" data-v-e44c15a3><span class="hero__eyebrow-line" aria-hidden="true" data-v-e44c15a3></span><span class="hero__eyebrow" data-v-e44c15a3>Welcome to the Emporium</span><span class="hero__eyebrow-line" aria-hidden="true" data-v-e44c15a3></span></div><h1 class="hero__title" data-v-e44c15a3><span class="hero__title-line" data-v-e44c15a3>Scent Tells a</span><span class="hero__title-line hero__title-line--highlight" data-v-e44c15a3>Story Only You</span><span class="hero__title-line" data-v-e44c15a3>Can Tell</span></h1><p class="hero__description" data-v-e44c15a3> Discover luxury fragrances, rare oils, and intimate lifestyle essentials — curated for the bold and the beautiful. </p><div class="hero__actions" data-v-e44c15a3>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/#shop",
				class: "hero__btn hero__btn--primary",
				onClick: handleShopClick
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span data-v-e44c15a3${_scopeId}>Shop Fragrances</span><svg class="hero__btn-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e44c15a3${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-e44c15a3${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-e44c15a3${_scopeId}></polyline></svg>`);
					else return [createVNode("span", null, "Shop Fragrances"), (openBlock(), createBlock("svg", {
						class: "hero__btn-icon",
						xmlns: "http://www.w3.org/2000/svg",
						width: "15",
						height: "15",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}, [createVNode("line", {
						x1: "5",
						y1: "12",
						x2: "19",
						y2: "12"
					}), createVNode("polyline", { points: "12 5 19 12 12 19" })]))];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=ADULT%20SECTION",
				class: "hero__btn hero__btn--secondary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span data-v-e44c15a3${_scopeId}>Adult Section</span><span class="badge-18" aria-label="Adult 18 plus" data-v-e44c15a3${_scopeId}>18+</span>`);
					else return [createVNode("span", null, "Adult Section"), createVNode("span", {
						class: "badge-18",
						"aria-label": "Adult 18 plus"
					}, "18+")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><a href="#shop" class="hero__scroll" aria-label="Scroll down to explore products" data-v-e44c15a3><span class="hero__scroll-text" data-v-e44c15a3>SCROLL</span><span class="hero__scroll-line" aria-hidden="true" data-v-e44c15a3></span></a></section>`);
		};
	}
};
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHero.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var TheHero_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$9, [["__scopeId", "data-v-e44c15a3"]]);
//#endregion
//#region app/components/Features.vue
var _sfc_main$8 = {
	__name: "Features",
	__ssrInlineRender: true,
	setup(__props) {
		const TShirtIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [h("path", { d: "M20.38 3.46L16 6a2 2 0 0 1-2 0l-2-1.2-2 1.2a2 2 0 0 1-2 0L3.62 3.46a2 2 0 0 0-2.62.9L0 7.84A2 2 0 0 0 1.34 10.4L3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8l1.66-.6A2 2 0 0 0 24 7.84l-1-3.48a2 2 0 0 0-2.62-.9z" })]);
		const HangerIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [h("path", { d: "M12 2a3 3 0 0 0-3 3h3a3 3 0 0 0 0-6z" }), h("path", { d: "M12 5v3m0 0l-8.58 6.44a1.5 1.5 0 0 0-.42 2l1 1.5a1.5 1.5 0 0 0 2 .42L12 14.5l6 3.86a1.5 1.5 0 0 0 2-.42l1-1.5a1.5 1.5 0 0 0-.42-2z" })]);
		const GlobeIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [
			h("circle", {
				cx: "12",
				cy: "12",
				r: "10"
			}),
			h("line", {
				x1: "2",
				y1: "12",
				x2: "22",
				y2: "12"
			}),
			h("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
		]);
		const ShieldIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [h("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), h("path", { d: "M9 11l2 2 4-4" })]);
		const featureList = [
			{
				icon: ShieldIcon,
				title: "100% AUTHENTIC PERFUMES",
				description: "USA pure perfume oils, Middle Eastern attars, and genuine designer scents."
			},
			{
				icon: GlobeIcon,
				title: "THE OILS ALCHEMY BAR",
				description: "Therapeutic essential oils, cosmetic fragrance oils & natural carrier oils."
			},
			{
				icon: HangerIcon,
				title: "CANDLECRAFT & PET CARE",
				description: "Pure soy waxes, cotton wicks, unscented bases, and gentle pet body care."
			},
			{
				icon: TShirtIcon,
				title: "DISCREET ADULT LUXURIES",
				description: "Body-safe adult toys & fine Mulberry silk lingeries with 100% discreet packaging."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "features" }, _attrs))} data-v-ecd89b73><div class="container" data-v-ecd89b73><div class="features__grid" data-v-ecd89b73><!--[-->`);
			ssrRenderList(featureList, (feature, idx) => {
				_push(`<div class="features__item" data-v-ecd89b73><div class="features__icon-wrapper" data-v-ecd89b73>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), { class: "features__icon" }, null), _parent);
				_push(`</div><div class="features__info" data-v-ecd89b73><h3 class="features__title" data-v-ecd89b73>${ssrInterpolate(feature.title)}</h3><p class="features__desc" data-v-ecd89b73>${ssrInterpolate(feature.description)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Features.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Features_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$8, [["__scopeId", "data-v-ecd89b73"]]);
//#endregion
//#region app/components/VideoAdvertBanner.vue
var _sfc_main$7 = {
	__name: "VideoAdvertBanner",
	__ssrInlineRender: true,
	setup(__props) {
		const { storeSettings } = useStoreSettings();
		const adminToken = useCookie("adminToken");
		const isAdmin = computed(() => !!adminToken.value);
		const advertSettings = computed(() => storeSettings.value || {});
		ref(null);
		const videoSource = computed(() => {
			return advertSettings.value.videoAdvertUrl || "";
		});
		const isEmbedUrl = computed(() => {
			const url = (advertSettings.value.videoAdvertUrl || "").toLowerCase();
			return url.includes("youtube.com") || url.includes("youtu.be") || url.includes("vimeo.com");
		});
		const embedIframeSrc = computed(() => {
			const url = advertSettings.value.videoAdvertUrl || "";
			if (url.includes("youtube.com/watch?v=")) {
				const id = url.split("watch?v=")[1]?.split("&")[0];
				return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&modestbranding=1&rel=0`;
			}
			if (url.includes("youtu.be/")) {
				const id = url.split("youtu.be/")[1]?.split("?")[0];
				return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&modestbranding=1&rel=0`;
			}
			if (url.includes("vimeo.com/")) return `https://player.vimeo.com/video/${url.split("vimeo.com/")[1]?.split("?")[0]}?autoplay=1&muted=1&loop=1&controls=0`;
			return url;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			if (advertSettings.value.videoAdvertEnabled) {
				_push(`<section${ssrRenderAttrs(mergeProps({
					class: "video-advert-section",
					id: "product-video-display"
				}, _attrs))} data-v-e5ae8c19><div class="video-display-card" data-v-e5ae8c19><div class="video-display-wrapper" data-v-e5ae8c19>`);
				if (videoSource.value && !isEmbedUrl.value) _push(`<video class="advert-video-player"${ssrRenderAttr("src", videoSource.value)}${ssrRenderAttr("poster", advertSettings.value.videoAdvertPoster || "")} loop muted playsinline autoplay data-v-e5ae8c19></video>`);
				else if (isEmbedUrl.value) _push(`<iframe class="advert-iframe-player"${ssrRenderAttr("src", embedIframeSrc.value)} title="Product Video Advert" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" data-v-e5ae8c19></iframe>`);
				else {
					_push(`<div class="video-empty-state" data-v-e5ae8c19><div class="empty-state-content" data-v-e5ae8c19><div class="play-icon-glow" data-v-e5ae8c19><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" data-v-e5ae8c19><polygon points="5 3 19 12 5 21 5 3" data-v-e5ae8c19></polygon></svg></div><span class="empty-state-title" data-v-e5ae8c19>PRODUCT VIDEO DISPLAY</span>`);
					if (isAdmin.value) _push(ssrRenderComponent(_component_NuxtLink, {
						to: "/admin/settings#video-advert",
						class: "btn-admin-upload"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Admin: Upload Video in Settings `);
							else return [createTextVNode(" Admin: Upload Video in Settings ")];
						}),
						_: 1
					}, _parent));
					else _push(`<!---->`);
					_push(`</div></div>`);
				}
				_push(`</div></div></section>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoAdvertBanner.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var VideoAdvertBanner_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$7, [["__scopeId", "data-v-e5ae8c19"]]);
//#endregion
//#region app/components/NewArrivals.vue
var _sfc_main$6 = {
	__name: "NewArrivals",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { isWishlisted} = useWishlist();
		useState("cartCount", () => 0);
		useState("cartItems", () => []);
		const { storeSettings } = useStoreSettings();
		const currencySymbol = computed(() => storeSettings.value.currency === "NGN" ? "₦" : "$");
		const liveProducts = ref([]);
		const mapProduct = (p) => ({
			id: p.id,
			name: p.name,
			price: parseFloat(p.price),
			priceFormatted: `${currencySymbol.value}${parseFloat(p.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
			image: p.image || "/images/products/perf_usa_1.png",
			category: p.category,
			subcategory: p.subcategory
		});
		const { data: fetchedProductsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("homeNewArrivalsData", () => $fetch$1("/api/v1/products"))), __temp = await __temp, __restore(), __temp);
		if (fetchedProductsData.value && fetchedProductsData.value.length > 0) liveProducts.value = fetchedProductsData.value.map(mapProduct);
		const displayProducts = computed(() => {
			const count = Math.max(1, Math.round(liveProducts.value.length * .4));
			return liveProducts.value.slice(0, count);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "shop",
				class: "new-arrivals section-padding"
			}, _attrs))} data-v-9172f464><div class="container" data-v-9172f464><div class="section-header" data-v-9172f464><h2 class="section-title" data-v-9172f464>TZORAH EMPORIUM ESSENTIALS</h2>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "section-link hover-underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` VIEW ALL PRODUCTS <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-9172f464${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-9172f464${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-9172f464${_scopeId}></polyline></svg>`);
					else return [createTextVNode(" VIEW ALL PRODUCTS "), (openBlock(), createBlock("svg", {
						class: "arrow-icon",
						xmlns: "http://www.w3.org/2000/svg",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "1.5",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}, [createVNode("line", {
						x1: "5",
						y1: "12",
						x2: "19",
						y2: "12"
					}), createVNode("polyline", { points: "12 5 19 12 12 19" })]))];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="product-grid" data-v-9172f464><!--[-->`);
			ssrRenderList(displayProducts.value, (product) => {
				_push(`<div class="product-card" data-v-9172f464><div class="product-card__image-container" data-v-9172f464><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} class="product-card__img" data-v-9172f464>`);
				if (product.subcategory || product.category) _push(`<span class="product-card__badge" data-v-9172f464>${ssrInterpolate(product.subcategory || product.category)}</span>`);
				else _push(`<!---->`);
				_push(`<button class="${ssrRenderClass([{ "product-card__wishlist--active": unref(isWishlisted)(product.id) }, "product-card__wishlist"])}" aria-label="Add to Wishlist" data-v-9172f464><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-9172f464><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-9172f464></path></svg></button><div class="product-card__overlay" data-v-9172f464><button class="product-card__quick-add" data-v-9172f464><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="quick-add-icon" data-v-9172f464><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-9172f464></path><line x1="3" y1="6" x2="21" y2="6" data-v-9172f464></line><path d="M16 10a4 4 0 0 1-8 0" data-v-9172f464></path></svg> ADD TO CART </button></div></div><div class="product-card__details" data-v-9172f464><h3 class="product-card__title" data-v-9172f464>${ssrInterpolate(product.name)}</h3><p class="product-card__price" data-v-9172f464>${ssrInterpolate(product.priceFormatted)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewArrivals.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var NewArrivals_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["__scopeId", "data-v-9172f464"]]);
//#endregion
//#region app/components/HomeDelivery.vue
var _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	_push(`<section${ssrRenderAttrs(mergeProps({ class: "home-delivery section-padding" }, _attrs))} data-v-6bd0e089><div class="container" data-v-6bd0e089><div class="home-delivery__header" data-v-6bd0e089><span class="home-delivery__eyebrow" data-v-6bd0e089>NATIONWIDE DISPATCH &amp; LOGISTICS</span><h2 class="home-delivery__title" data-v-6bd0e089>DELIVERY INFORMATION — TZORAH’S EMPORIUM</h2><p class="home-delivery__sub" data-v-6bd0e089>We deliver within Port Harcourt and to other locations across Nigeria.</p><div class="home-delivery__divider" data-v-6bd0e089></div></div><div class="home-delivery__grid" data-v-6bd0e089><div class="home-delivery__card" data-v-6bd0e089><div class="home-delivery__icon-wrap" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><circle cx="12" cy="12" r="10" data-v-6bd0e089></circle><polyline points="12 6 12 12 16 14" data-v-6bd0e089></polyline></svg></div><div class="home-delivery__card-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>HOME CITY</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>Port Harcourt</h3><p class="home-delivery__zone-detail" data-v-6bd0e089> Same-day delivery where available, or within <strong data-v-6bd0e089>24 hours</strong> where possible. </p></div></div><div class="home-delivery__card" data-v-6bd0e089><div class="home-delivery__icon-wrap" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-6bd0e089></path><circle cx="12" cy="10" r="3" data-v-6bd0e089></circle></svg></div><div class="home-delivery__card-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>STATEWIDE</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>Other Parts of Rivers State</h3><p class="home-delivery__zone-detail" data-v-6bd0e089> Fees and delivery times depend on the specific destination. </p></div></div><div class="home-delivery__card" data-v-6bd0e089><div class="home-delivery__icon-wrap" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><rect x="1" y="3" width="15" height="13" data-v-6bd0e089></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8" data-v-6bd0e089></polygon><circle cx="5.5" cy="18.5" r="2.5" data-v-6bd0e089></circle><circle cx="18.5" cy="18.5" r="2.5" data-v-6bd0e089></circle></svg></div><div class="home-delivery__card-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>REGIONAL</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>South-South &amp; South-East</h3><p class="home-delivery__zone-detail" data-v-6bd0e089> Estimated delivery time of <strong data-v-6bd0e089>4–7 days</strong>. </p></div></div><div class="home-delivery__card" data-v-6bd0e089><div class="home-delivery__icon-wrap" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><circle cx="12" cy="12" r="10" data-v-6bd0e089></circle><line x1="2" y1="12" x2="22" y2="12" data-v-6bd0e089></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-6bd0e089></path></svg></div><div class="home-delivery__card-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>NATIONWIDE</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>Other States Nationwide</h3><p class="home-delivery__zone-detail" data-v-6bd0e089> Estimated delivery time of <strong data-v-6bd0e089>4–10 days</strong>, depending on destination. </p></div></div></div><div class="home-delivery__unified-card" data-v-6bd0e089><div class="home-delivery__unified-zone" data-v-6bd0e089><div class="home-delivery__unified-icon" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><circle cx="12" cy="12" r="10" data-v-6bd0e089></circle><polyline points="12 6 12 12 16 14" data-v-6bd0e089></polyline></svg></div><div class="home-delivery__unified-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>HOME CITY</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>Port Harcourt</h3><p class="home-delivery__zone-detail" data-v-6bd0e089>Same-day or within <strong data-v-6bd0e089>24 hrs</strong>.</p></div></div><div class="home-delivery__unified-zone" data-v-6bd0e089><div class="home-delivery__unified-icon" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-6bd0e089></path><circle cx="12" cy="10" r="3" data-v-6bd0e089></circle></svg></div><div class="home-delivery__unified-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>STATEWIDE</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>Rivers State</h3><p class="home-delivery__zone-detail" data-v-6bd0e089>Fees vary by destination.</p></div></div><div class="home-delivery__unified-zone" data-v-6bd0e089><div class="home-delivery__unified-icon" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><rect x="1" y="3" width="15" height="13" data-v-6bd0e089></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8" data-v-6bd0e089></polygon><circle cx="5.5" cy="18.5" r="2.5" data-v-6bd0e089></circle><circle cx="18.5" cy="18.5" r="2.5" data-v-6bd0e089></circle></svg></div><div class="home-delivery__unified-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>REGIONAL</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>SS &amp; SE</h3><p class="home-delivery__zone-detail" data-v-6bd0e089><strong data-v-6bd0e089>4–7 days</strong>.</p></div></div><div class="home-delivery__unified-zone" data-v-6bd0e089><div class="home-delivery__unified-icon" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-v-6bd0e089><circle cx="12" cy="12" r="10" data-v-6bd0e089></circle><line x1="2" y1="12" x2="22" y2="12" data-v-6bd0e089></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-6bd0e089></path></svg></div><div class="home-delivery__unified-body" data-v-6bd0e089><span class="home-delivery__zone-badge" data-v-6bd0e089>NATIONWIDE</span><h3 class="home-delivery__zone-name" data-v-6bd0e089>Other States</h3><p class="home-delivery__zone-detail" data-v-6bd0e089><strong data-v-6bd0e089>4–10 days</strong>.</p></div></div></div><div class="home-delivery__notes" data-v-6bd0e089><div class="home-delivery__notes-head" data-v-6bd0e089><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-6bd0e089><circle cx="12" cy="12" r="10" data-v-6bd0e089></circle><line x1="12" y1="8" x2="12" y2="12" data-v-6bd0e089></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-6bd0e089></line></svg><h4 data-v-6bd0e089>PLEASE NOTE:</h4></div><ul class="home-delivery__notes-list" data-v-6bd0e089><li data-v-6bd0e089>Delivery fees are determined by the dispatch rider or logistics company, not Tzorah’s Emporium.</li><li data-v-6bd0e089>Orders are typically processed and handed over for dispatch within <strong data-v-6bd0e089>24–48 hours</strong>.</li><li data-v-6bd0e089>Delivery timelines are estimates and may vary due to distance, logistics availability or unforeseen delays.</li><li data-v-6bd0e089>Once an order has been handed over to the logistics provider, delays outside our control may occur.</li></ul><div class="home-delivery__notes-actions" data-v-6bd0e089>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/delivery",
		class: "home-delivery__link hover-underline"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(` View dedicated delivery policy page → `);
			else return [createTextVNode(" View dedicated delivery policy page → ")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div></section>`);
}
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeDelivery.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var HomeDelivery_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6bd0e089"]]), { __name: "HomeDelivery" });
//#endregion
//#region app/components/HomeAbout.vue
var _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	_push(`<section${ssrRenderAttrs(mergeProps({ class: "home-about" }, _attrs))} data-v-5cdb6640><div class="home-about__wrapper" data-v-5cdb6640><div class="home-about__visual" data-v-5cdb6640><img${ssrRenderAttr("src", _virtual_public__2Fhero_fragrances_default)} alt="About TZORAH EMPORIUM" class="home-about__img" data-v-5cdb6640><div class="home-about__overlay" data-v-5cdb6640></div><div class="home-about__badge" data-v-5cdb6640><span class="home-about__badge-sub" data-v-5cdb6640>CURATED LUXURY</span><span class="home-about__badge-main" data-v-5cdb6640>EST. 2018</span></div><div class="home-about__logo-watermark" data-v-5cdb6640><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM Emblem" data-v-5cdb6640></div></div><div class="home-about__content" data-v-5cdb6640><span class="home-about__eyebrow" data-v-5cdb6640>ABOUT TZORAH EMPORIUM • EST. 2018</span><h2 class="home-about__title" data-v-5cdb6640>The Alchemy of Scents, Oils &amp; Personal Luxuries</h2><div class="home-about__divider" data-v-5cdb6640></div><p class="home-about__lead" data-v-5cdb6640> TZORAH EMPORIUM was established in 2018 on the belief that scent, self-care, and personal intimacy are profound art forms. </p><p class="home-about__desc" data-v-5cdb6640> We bring together pure grade-A USA perfume oils, Middle eastern perfumes, authentic designer fragrances, pure steam-distilled botanicals, candlecraft supplies, pet body care, and discreet private adult wellness — all unified by an uncompromising devotion to purity, authenticity, and discretion. </p><div class="home-about__pillars" data-v-5cdb6640><div class="home-about__pillar" data-v-5cdb6640><div class="home-about__pillar-icon" data-v-5cdb6640><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-5cdb6640><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-5cdb6640></path><path d="M9 11l2 2 4-4" data-v-5cdb6640></path></svg></div><div data-v-5cdb6640><h4 data-v-5cdb6640>AUTHENTICITY</h4><p data-v-5cdb6640>Direct sourcing of 100% undiluted USA perfume oils and genuine Arabian attars.</p></div></div><div class="home-about__pillar" data-v-5cdb6640><div class="home-about__pillar-icon" data-v-5cdb6640><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-5cdb6640><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-5cdb6640></path></svg></div><div data-v-5cdb6640><h4 data-v-5cdb6640>BOTANICAL PURITY</h4><p data-v-5cdb6640>100% steam-distilled essential oils and nutrient-dense cold-pressed carriers.</p></div></div><div class="home-about__pillar" data-v-5cdb6640><div class="home-about__pillar-icon" data-v-5cdb6640><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-5cdb6640><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-5cdb6640></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-v-5cdb6640></path></svg></div><div data-v-5cdb6640><h4 data-v-5cdb6640>TOTAL DISCRETION</h4><p data-v-5cdb6640>100% confidential, plain, and unmarked packaging for all adult boudoir orders.</p></div></div><div class="home-about__pillar" data-v-5cdb6640><div class="home-about__pillar-icon" data-v-5cdb6640><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-5cdb6640><circle cx="12" cy="12" r="10" data-v-5cdb6640></circle><line x1="2" y1="12" x2="22" y2="12" data-v-5cdb6640></line></svg></div><div data-v-5cdb6640><h4 data-v-5cdb6640>HOLISTIC CRAFT</h4><p data-v-5cdb6640>Pro soy waxes, sustainers, wicks, and gentle natural washes for pet wellness.</p></div></div></div><div class="home-about__actions" data-v-5cdb6640>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/about",
		class: "btn btn-primary"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`READ OUR FULL STORY →`);
			else return [createTextVNode("READ OUR FULL STORY →")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/shop",
		class: "btn btn-outline"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`EXPLORE CATALOGUE`);
			else return [createTextVNode("EXPLORE CATALOGUE")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div></section>`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeAbout.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var HomeAbout_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5cdb6640"]]), { __name: "HomeAbout" });
//#endregion
//#region \0virtual:public?%2Fimages%2Fcta_elevate_bg.jpg
var _virtual_public__2Fimages_2Fcta_elevate_bg_default = publicAssetsURL("/images/cta_elevate_bg.jpg");
//#endregion
//#region app/components/HomeCTA.vue
var _sfc_main$3 = {
	__name: "HomeCTA",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "home-cta" }, _attrs))} data-v-2b810c2b><div class="home-cta__bg" data-v-2b810c2b><img${ssrRenderAttr("src", _virtual_public__2Fimages_2Fcta_elevate_bg_default)} alt="TZORAH EMPORIUM Private Collection" class="home-cta__bg-img" data-v-2b810c2b><div class="home-cta__overlay" data-v-2b810c2b></div></div><div class="container home-cta__container" data-v-2b810c2b><div class="home-cta__content" data-v-2b810c2b><span class="home-cta__label" data-v-2b810c2b>EXCLUSIVE APOTHECARY &amp; BOUDOIR</span><h2 class="home-cta__title" data-v-2b810c2b>ELEVATE YOUR<br data-v-2b810c2b>SENSES.</h2><div class="home-cta__divider" data-v-2b810c2b></div><p class="home-cta__desc" data-v-2b810c2b> From concentrated USA perfume oils and Middle Eastern attars to organic candlecraft and discreet luxury intimates — experience formulations built for sensory ecstasy. </p><div class="home-cta__actions" data-v-2b810c2b>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "btn btn-primary home-cta__btn"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`SHOP ALL PRODUCTS`);
					else return [createTextVNode("SHOP ALL PRODUCTS")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=ADULT%20SECTION",
				class: "btn btn-secondary home-cta__btn"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`ADULT BOUDOIR (18+)`);
					else return [createTextVNode("ADULT BOUDOIR (18+)")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="home-cta__trust" data-v-2b810c2b><span class="home-cta__trust-item" data-v-2b810c2b><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2b810c2b><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-2b810c2b></path><path d="M9 11l2 2 4-4" data-v-2b810c2b></path></svg> 100% Authentic Originals </span><span class="home-cta__trust-sep" data-v-2b810c2b>·</span><span class="home-cta__trust-item" data-v-2b810c2b><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2b810c2b><rect x="1" y="3" width="15" height="13" rx="2" ry="2" data-v-2b810c2b></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8" data-v-2b810c2b></polygon><circle cx="5.5" cy="18.5" r="2.5" data-v-2b810c2b></circle><circle cx="18.5" cy="18.5" r="2.5" data-v-2b810c2b></circle></svg> Express Nationwide Logistics </span><span class="home-cta__trust-sep" data-v-2b810c2b>·</span><span class="home-cta__trust-item" data-v-2b810c2b><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2b810c2b><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-2b810c2b></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-v-2b810c2b></path></svg> Discreet Confidential Packaging </span></div></div></div></section>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeCTA.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var HomeCTA_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["__scopeId", "data-v-2b810c2b"]]);
//#endregion
//#region app/components/HomeFAQ.vue
var _sfc_main$2 = {
	__name: "HomeFAQ",
	__ssrInlineRender: true,
	setup(__props) {
		const openIndex = ref(null);
		const faqs = [
			{
				q: "Are your USA and Middle Eastern perfume oils 100% authentic and undiluted?",
				a: "Yes. All our USA perfume oils, Middle Eastern attars, and designer perfumes are sourced directly from authenticated fragrance laboratories and distributors. Our oils are 100% pure, alcohol-free, and designed for 24+ hour skin and fabric projection."
			},
			{
				q: "How are your oils categorized?",
				a: "All oils are organized under our \"OILS\" category with dedicated subcategories: Fragrance Oils (for personal scent, body oils, and candle making), Essential Oils (100% steam-distilled pure botanical essences for aromatherapy), and Natural Oils (pure cold-pressed carrier oils like Jojoba, Argan, and Almond)."
			},
			{
				q: "Are orders from the Adult Section shipped discreetly?",
				a: "Absolutely. All adult wellness toys and luxury lingerie orders are shipped in 100% plain, tamper-evident, unmarked boxes with neutral shipping labels. Your privacy and discretion are completely protected."
			},
			{
				q: "Can your candle making supplies be used by beginners and artisans?",
				a: "Yes! We stock premium golden soy wax flakes, pre-waxed cotton wicks with sustainers, precision melting pitchers, and candle-grade fragrance oils suitable for both hobbyists and commercial candle makers."
			},
			{
				q: "Are pet body care products safe for sensitive dogs and cats?",
				a: "Yes. Our calming oatmeal pet washes, coat sprays, and paw protection balms are crafted from non-toxic, lick-safe, natural ingredients formulated to soothe skin without harsh sulfates or synthetic irritants."
			},
			{
				q: "What is your delivery coverage, timelines and fees?",
				a: "We deliver within Port Harcourt and to other locations across Nigeria. Port Harcourt: Same-day delivery where available or within 24 hours. Other parts of Rivers State: Fees & delivery times depend on destination. South-South & South-East: Estimated 4–7 days. Other states nationwide: Estimated 4–10 days. Please note that delivery fees are set by the dispatch rider or logistics company, and orders are processed within 24–48 hours."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "faq section-padding" }, _attrs))} data-v-04a17d46><div class="container" data-v-04a17d46><div class="faq__inner" data-v-04a17d46><div class="faq__header" data-v-04a17d46><span class="faq__label" data-v-04a17d46>NEED HELP?</span><h2 class="faq__title" data-v-04a17d46>Frequently Asked<br data-v-04a17d46>Questions</h2><div class="faq__divider" data-v-04a17d46></div></div><div class="faq__list" data-v-04a17d46><!--[-->`);
			ssrRenderList(faqs, (item, idx) => {
				_push(`<div class="${ssrRenderClass([{ "faq__item--open": openIndex.value === idx }, "faq__item"])}" data-v-04a17d46><div class="faq__question" data-v-04a17d46><span data-v-04a17d46>${ssrInterpolate(item.q)}</span><span class="faq__icon" data-v-04a17d46><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-04a17d46><line x1="12" y1="5" x2="12" y2="19" class="faq__plus-v" data-v-04a17d46></line><line x1="5" y1="12" x2="19" y2="12" data-v-04a17d46></line></svg></span></div><div class="faq__answer" data-v-04a17d46><p data-v-04a17d46>${ssrInterpolate(item.a)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></div></section>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeFAQ.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var HomeFAQ_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["__scopeId", "data-v-04a17d46"]]);
//#endregion
//#region app/components/HomeContact.vue
var _sfc_main$1 = {
	__name: "HomeContact",
	__ssrInlineRender: true,
	setup(__props) {
		const { storeSettings} = useStoreSettings();
		const whatsappUrl = computed(() => {
			if (!storeSettings.value?.whatsappNumber) return null;
			return `https://wa.me/${storeSettings.value.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20TZORAH%20EMPORIUM%20Concierge`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "contact section-padding",
				id: "contact"
			}, _attrs))} data-v-7344598e><div class="container" data-v-7344598e><div class="contact__header text-center" data-v-7344598e><span class="contact__label" data-v-7344598e>CONCIERGE &amp; SUPPORT</span><h2 class="contact__title" data-v-7344598e>We&#39;d Love To Hear From You</h2><div class="contact__divider" data-v-7344598e></div><p class="contact__desc" data-v-7344598e> Whether you have an inquiry about pure Grade-A perfume oils, rare attars, bespoke formulation blends, or discreet order fulfillment — our concierge is at your service. </p></div><div class="contact__cards-grid" data-v-7344598e><a${ssrRenderAttr("href", `mailto:${unref(storeSettings).supportEmail || "concierge@tzorahemporium.com"}`)} class="contact-card" data-v-7344598e><div class="contact-card__icon-wrap" data-v-7344598e><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7344598e><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-7344598e></path><polyline points="22,6 12,13 2,6" data-v-7344598e></polyline></svg></div><span class="contact-card__subtitle" data-v-7344598e>OFFICIAL EMAIL</span><h3 class="contact-card__title" data-v-7344598e>${ssrInterpolate(unref(storeSettings).supportEmail || "concierge@tzorahemporium.com")}</h3><p class="contact-card__meta" data-v-7344598e>${ssrInterpolate(unref(storeSettings).responseTime || "Responses within 2–4 hours")}</p><span class="contact-card__action" data-v-7344598e>SEND EMAIL ↗</span></a><a${ssrRenderAttr("href", `tel:${unref(storeSettings).telephone || ""}`)} class="contact-card" data-v-7344598e><div class="contact-card__icon-wrap" data-v-7344598e><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7344598e><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.55 6.55l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-v-7344598e></path></svg></div><span class="contact-card__subtitle" data-v-7344598e>CUSTOMER CARE LINE</span><h3 class="contact-card__title" data-v-7344598e>${ssrInterpolate(unref(storeSettings).telephone || "+234 (0) 800 TZORAH")}</h3><p class="contact-card__meta" data-v-7344598e>${ssrInterpolate(unref(storeSettings).businessHours || "Mon – Sat, 9am – 8pm")}</p><span class="contact-card__action" data-v-7344598e>CALL NOW ↗</span></a>`);
			if (whatsappUrl.value) _push(`<a${ssrRenderAttr("href", whatsappUrl.value)} target="_blank" rel="noopener" class="contact-card contact-card--highlight" data-v-7344598e><div class="contact-card__icon-wrap" data-v-7344598e><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7344598e><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" data-v-7344598e></path></svg></div><span class="contact-card__subtitle" data-v-7344598e>VIP WHATSAPP CONCIERGE</span><h3 class="contact-card__title" data-v-7344598e>Direct Private Chat</h3><p class="contact-card__meta" data-v-7344598e>Instant fragrance &amp; discreet wellness assistance</p><span class="contact-card__action" data-v-7344598e>OPEN CHAT ↗</span></a>`);
			else _push(`<!---->`);
			_push(`<div class="contact-card" data-v-7344598e><div class="contact-card__icon-wrap" data-v-7344598e><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7344598e><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-7344598e></path><circle cx="12" cy="10" r="3" data-v-7344598e></circle></svg></div><span class="contact-card__subtitle" data-v-7344598e>CENTRAL DISPATCH &amp; ATELIER</span><h3 class="contact-card__title" data-v-7344598e>${ssrInterpolate(unref(storeSettings).contactAddress || "Port Harcourt, Rivers State, Nigeria")}</h3><p class="contact-card__meta" data-v-7344598e>Fast &amp; discreet nationwide delivery coverage</p><span class="contact-card__action contact-card__action--static" data-v-7344598e>VERIFIED HUB</span></div></div></div></section>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeContact.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var HomeContact_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-7344598e"]]);
//#endregion
//#region app/pages/index.vue
var _sfc_main = {
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TheHero = TheHero_default;
			const _component_Features = Features_default;
			const _component_VideoAdvertBanner = VideoAdvertBanner_default;
			const _component_NewArrivals = NewArrivals_default;
			const _component_HomeDelivery = HomeDelivery_default;
			const _component_HomeAbout = HomeAbout_default;
			const _component_HomeCTA = HomeCTA_default;
			const _component_HomeFAQ = HomeFAQ_default;
			const _component_HomeContact = HomeContact_default;
			const _component_FooterFeatures = FooterFeatures_default;
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(_component_TheHero, null, null, _parent));
			_push(ssrRenderComponent(_component_Features, null, null, _parent));
			_push(ssrRenderComponent(_component_VideoAdvertBanner, null, null, _parent));
			_push(ssrRenderComponent(_component_NewArrivals, null, null, _parent));
			_push(ssrRenderComponent(_component_HomeDelivery, null, null, _parent));
			_push(ssrRenderComponent(_component_HomeAbout, null, null, _parent));
			_push(ssrRenderComponent(_component_HomeCTA, null, null, _parent));
			_push(ssrRenderComponent(_component_HomeFAQ, null, null, _parent));
			_push(ssrRenderComponent(_component_HomeContact, null, null, _parent));
			_push(ssrRenderComponent(_component_FooterFeatures, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pages-Cjuptmee.mjs.map

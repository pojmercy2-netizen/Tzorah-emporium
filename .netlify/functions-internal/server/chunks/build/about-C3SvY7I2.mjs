import { c as useHead$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { F as FooterFeatures_default } from './FooterFeatures-BebMEnL0.mjs';
import { _ as _virtual_public__2Fhero_fragrances_default } from './_virtual_public-BhdsAuQK.mjs';
import { _ as _virtual_public__2Fimages_2Fbrand_bg_default } from './_virtual_public-CtiKF2Nn.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/about.vue
var _sfc_main = {
	__name: "about",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "About Us | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Discover TZORAH EMPORIUM — curators of authentic USA oil perfumes, Middle Eastern scents, pure botanical oils, candlecraft, pet care, and private luxuries."
			}]
		});
		const values = [
			{
				label: "AUTHENTICITY",
				desc: "Direct sourcing of unadulterated USA oil perfumes, Arabian attars, and genuine designer scents.",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 11l2 2 4-4"/></svg>`
			},
			{
				label: "BOTANICAL PURITY",
				desc: "Steam-distilled pure essential oils and cold-pressed natural carrier oils rich in nutrients.",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
			},
			{
				label: "TOTAL DISCRETION",
				desc: "All 18+ adult wellness and intimate orders are dispatched in 100% unmarked, confidential packaging.",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
			},
			{
				label: "HOLISTIC CRAFT",
				desc: "Supporting DIY artisans and pet lovers with professional soy waxes, wicks, and soothing pet washes.",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_FooterFeatures = FooterFeatures_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-0291e3a6><section class="about-hero" data-v-0291e3a6><img${ssrRenderAttr("src", _virtual_public__2Fhero_fragrances_default)} alt="TZORAH EMPORIUM Scent &amp; Oil Apothecary" class="about-hero__bg" data-v-0291e3a6><div class="about-hero__overlay" data-v-0291e3a6></div><div class="about-hero__content" data-v-0291e3a6><span class="about-hero__eyebrow" data-v-0291e3a6>ABOUT TZORAH EMPORIUM • EST. 2018</span><h1 class="about-hero__title" data-v-0291e3a6>The Alchemy of<br data-v-0291e3a6>Scents, Oils &amp;<br data-v-0291e3a6>Personal Luxuries.</h1><div class="about-hero__divider" data-v-0291e3a6></div><p class="about-hero__desc" data-v-0291e3a6> TZORAH EMPORIUM was established in 2018 on the belief that scent, self-care, and personal intimacy are profound art forms. We bring together pure grade-A USA perfume oils, Middle eastern perfumes, authentic designer fragrances, pure steam-distilled botanicals, candlecraft supplies, and discreet adult wellness. </p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "about-btn about-btn--outline-light"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`EXPLORE THE STORE`);
					else return [createTextVNode("EXPLORE THE STORE")];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="about-values" data-v-0291e3a6><div class="container" data-v-0291e3a6><h2 class="about-values__heading" data-v-0291e3a6>OUR PRINCIPLES</h2><div class="about-values__grid" data-v-0291e3a6><!--[-->`);
			ssrRenderList(values, (val) => {
				_push(`<div class="about-values__item" data-v-0291e3a6><div class="about-values__icon-wrap" data-v-0291e3a6>${val.icon ?? ""}</div><h4 class="about-values__label" data-v-0291e3a6>${ssrInterpolate(val.label)}</h4><p class="about-values__desc" data-v-0291e3a6>${ssrInterpolate(val.desc)}</p></div>`);
			});
			_push(`<!--]--></div></div></section><section class="about-craft" data-v-0291e3a6><div class="container" data-v-0291e3a6><div class="about-craft__content" data-v-0291e3a6><span class="about-craft__eyebrow" data-v-0291e3a6>UNCOMPROMISING PURITY</span><h2 class="about-craft__title" data-v-0291e3a6>100% Authentic.<br data-v-0291e3a6>Never Compromised.</h2><div class="about-craft__divider" data-v-0291e3a6></div><p class="about-craft__desc" data-v-0291e3a6> Every perfume oil, essential drop, and carrier base in our store is batch-verified for purity and long-lasting potency. Zero alcohol dilution in our pure oils, skin-safe cosmetic ingredients, and responsibly sourced botanical extracts. </p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop?cat=OILS",
				class: "about-btn about-btn--outline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`VISIT THE OILS BAR`);
					else return [createTextVNode("VISIT THE OILS BAR")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section><section class="about-mission" data-v-0291e3a6><div class="about-mission__image" data-v-0291e3a6><img${ssrRenderAttr("src", _virtual_public__2Fimages_2Fbrand_bg_default)} alt="TZORAH EMPORIUM Sanctuary" data-v-0291e3a6><div class="about-mission__image-overlay" data-v-0291e3a6></div><div class="about-mission__logo-wrap" data-v-0291e3a6><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" class="about-mission__logo" data-v-0291e3a6></div></div><div class="about-mission__text" data-v-0291e3a6><span class="about-mission__eyebrow" data-v-0291e3a6>OUR COMMITMENT</span><h2 class="about-mission__title" data-v-0291e3a6>Elevate Your Senses.</h2><p class="about-mission__desc" data-v-0291e3a6> Whether you are formulating custom candles, exploring authentic Middle Eastern ouds, nourishing your skin with organic jojoba, caring for your beloved pets, or indulging in discreet adult wellness — TZORAH EMPORIUM is your trusted haven. </p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/shop",
				class: "about-btn about-btn--outline-light"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`DISCOVER COLLECTION`);
					else return [createTextVNode("DISCOVER COLLECTION")];
				}),
				_: 1
			}, _parent));
			_push(`</div></section>`);
			_push(ssrRenderComponent(_component_FooterFeatures, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-0291e3a6"]]);

export { about_default as default };
//# sourceMappingURL=about-C3SvY7I2.mjs.map

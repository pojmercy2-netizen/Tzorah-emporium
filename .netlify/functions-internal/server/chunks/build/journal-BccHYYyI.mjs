import { c as useHead$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { F as FooterFeatures_default } from './FooterFeatures-BebMEnL0.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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

//#region app/pages/journal.vue
var _sfc_main = {
	__name: "journal",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "The Journal | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Explore editorial stories on the art of perfume oils, steam-distilled essences, candlecraft, and sensual wellness from TZORAH EMPORIUM."
			}]
		});
		const posts = ref([
			{
				slug: "the-alchemy-of-usa-oil-perfumes",
				title: "The Alchemy of USA Oil Perfumes: Why Concentrated Oils Last Longer",
				category: "OLFACTORY",
				date: "August 12, 2026",
				excerpt: "Exploring how unadulterated oil mediums bind to skin lipids, unlocking multifaceted scent projection that persists 24+ hours without alcohol drying.",
				image: "/images/or_hero.png",
				featured: true
			},
			{
				slug: "guide-to-botanical-essential-oils",
				title: "Steam Distillation & Therapeutic Botanical Oils",
				category: "WELLNESS",
				date: "August 04, 2026",
				excerpt: "A comprehensive journey through French Lavender, Australian Tea Tree, and Royal Frankincense for aromatherapy and personal formulations.",
				image: "/images/or_oils.png",
				featured: false
			},
			{
				slug: "crafting-luxury-scented-candles",
				title: "The Artisan’s Guide to Soy Wax & Fragrance Load Ratios",
				category: "CANDLECRAFT",
				date: "July 28, 2026",
				excerpt: "Mastering temperature control, cotton wick sustainers, and hot scent throw when pouring handcrafted home candles.",
				image: "/images/products/candle_1.png",
				featured: false
			}
		]);
		const featuredPost = computed(() => {
			return posts.value.find((p) => p.featured);
		});
		const gridPosts = computed(() => {
			return posts.value.filter((p) => !p.featured);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_FooterFeatures = FooterFeatures_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "jr-page" }, _attrs))} data-v-fa3cf080><header class="jr-hero" data-v-fa3cf080><div class="jr-hero__content" data-v-fa3cf080><span class="jr-hero__eyebrow" data-v-fa3cf080>EDITORIALS &amp; STORIES</span><h1 class="jr-hero__title" data-v-fa3cf080>The Journal</h1><p class="jr-hero__sub" data-v-fa3cf080>Perspectives on design, craft, and the art of timeless styling.</p><div class="jr-hero__divider" data-v-fa3cf080></div></div></header>`);
			if (featuredPost.value) {
				_push(`<section class="container jr-featured" data-v-fa3cf080><div class="jr-featured__wrapper" data-v-fa3cf080><div class="jr-featured__image" data-v-fa3cf080><img${ssrRenderAttr("src", featuredPost.value.image)}${ssrRenderAttr("alt", featuredPost.value.title)} data-v-fa3cf080><div class="img-logo-overlay img-logo-overlay--br" data-v-fa3cf080><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" data-v-fa3cf080></div></div><div class="jr-featured__content" data-v-fa3cf080><div class="jr-meta" data-v-fa3cf080><span class="jr-meta__category" data-v-fa3cf080>${ssrInterpolate(featuredPost.value.category)}</span><span class="jr-meta__dot" data-v-fa3cf080>·</span><span class="jr-meta__date" data-v-fa3cf080>${ssrInterpolate(featuredPost.value.date)}</span></div><h2 class="jr-featured__title" data-v-fa3cf080>`);
				_push(ssrRenderComponent(_component_NuxtLink, { to: "/journal/" + featuredPost.value.slug }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(featuredPost.value.title)}`);
						else return [createTextVNode(toDisplayString(featuredPost.value.title), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</h2><p class="jr-featured__excerpt" data-v-fa3cf080>${ssrInterpolate(featuredPost.value.excerpt)}</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/journal/" + featuredPost.value.slug,
					class: "jr-read-more hover-underline"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` READ THE ARTICLE <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fa3cf080${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-fa3cf080${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-fa3cf080${_scopeId}></polyline></svg>`);
						else return [createTextVNode(" READ THE ARTICLE "), (openBlock(), createBlock("svg", {
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
				_push(`</div></div></section>`);
			} else _push(`<!---->`);
			_push(`<main class="container jr-main" data-v-fa3cf080><div class="jr-grid" data-v-fa3cf080><!--[-->`);
			ssrRenderList(gridPosts.value, (post) => {
				_push(`<article class="jr-card" data-v-fa3cf080><div class="jr-card__image" data-v-fa3cf080><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} data-v-fa3cf080><div class="img-logo-overlay img-logo-overlay--br" data-v-fa3cf080><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" data-v-fa3cf080></div></div><div class="jr-card__content" data-v-fa3cf080><div class="jr-meta" data-v-fa3cf080><span class="jr-meta__category" data-v-fa3cf080>${ssrInterpolate(post.category)}</span><span class="jr-meta__dot" data-v-fa3cf080>·</span><span class="jr-meta__date" data-v-fa3cf080>${ssrInterpolate(post.date)}</span></div><h3 class="jr-card__title" data-v-fa3cf080>`);
				_push(ssrRenderComponent(_component_NuxtLink, { to: "/journal/" + post.slug }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(post.title)}`);
						else return [createTextVNode(toDisplayString(post.title), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</h3><p class="jr-card__excerpt" data-v-fa3cf080>${ssrInterpolate(post.excerpt)}</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/journal/" + post.slug,
					class: "jr-read-more hover-underline"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` READ STORY `);
						else return [createTextVNode(" READ STORY ")];
					}),
					_: 2
				}, _parent));
				_push(`</div></article>`);
			});
			_push(`<!--]--></div></main>`);
			_push(ssrRenderComponent(_component_FooterFeatures, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/journal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var journal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-fa3cf080"]]);

export { journal_default as default };
//# sourceMappingURL=journal-BccHYYyI.mjs.map

import { c as useHead$1, a as useState, $ as $fetch$1 } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { u as useWishlist } from './useWishlist-BbbQGVvs.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { u as useAsyncData } from './asyncData-DOwAQs52.mjs';
import { F as FooterFeatures_default } from './FooterFeatures-BebMEnL0.mjs';
import { _ as _virtual_public__2Fimages_2Fbrand_bg_default } from './_virtual_public-CtiKF2Nn.mjs';
import { ref, computed, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/collection.vue
var _sfc_main = {
	__name: "collection",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead$1({
			title: "Our Collections | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Explore curated collections of authentic perfumes, botanical oils, candlecraft, pet care, and private adult wellness from TZORAH EMPORIUM."
			}]
		});
		const { isWishlisted} = useWishlist();
		useState("cartCount", () => 0);
		useState("cartItems", () => []);
		useState("toasts", () => []);
		const pillars = [
			"PERFUMES & SCENTS",
			"THE OILS BAR",
			"CANDLECRAFT & CARE",
			"PRIVATE BOUDOIR (18+)"
		];
		const activePillar = ref("PERFUMES & SCENTS");
		const activeCategory = ref("ALL");
		const currentSubcategories = computed(() => {
			if (activePillar.value === "PERFUMES & SCENTS") return [
				"ALL",
				"USA OIL PERFUMES",
				"MIDDLE EASTERN",
				"DESIGNER PERFUMES",
				"NICHE PRODUCTS"
			];
			if (activePillar.value === "THE OILS BAR") return [
				"ALL",
				"FRAGRANCE OILS",
				"ESSENTIAL OILS",
				"NATURAL OILS"
			];
			if (activePillar.value === "CANDLECRAFT & CARE") return [
				"ALL",
				"CANDLE ACCESSORIES",
				"UNSCENTED PRODUCTS",
				"PET BODY CARE"
			];
			if (activePillar.value === "PRIVATE BOUDOIR (18+)") return [
				"ALL",
				"ADULT TOYS",
				"LINGERIES"
			];
			return ["ALL"];
		});
		const collectionProducts = [
			{
				id: "perf_usa_1",
				pillar: "PERFUMES & SCENTS",
				subcat: "USA OIL PERFUMES",
				name: "Baccarat Rouge 540 Pure Oil (USA)",
				price: 38500,
				priceFormatted: "₦38,500.00",
				image: "/images/products/perf_usa_1.png",
				size: "50ml",
				description: "100% pure undiluted perfume oil imported from USA fragrance houses."
			},
			{
				id: "perf_usa_2",
				pillar: "PERFUMES & SCENTS",
				subcat: "USA OIL PERFUMES",
				name: "Aventus Imperial Undiluted Oil (USA)",
				price: 32e3,
				priceFormatted: "₦32,000.00",
				image: "/images/products/perf_usa_2.png",
				size: "30ml",
				description: "Crisp bergamot, birch smoke, patchouli and oakmoss in concentrated oil."
			},
			{
				id: "perf_me_1",
				pillar: "PERFUMES & SCENTS",
				subcat: "MIDDLE EASTERN",
				name: "Lattafa Khamrah Royale EDP",
				price: 48e3,
				priceFormatted: "₦48,000.00",
				image: "/images/products/perf_me_1.png",
				size: "100ml",
				description: "Warm cinnamon, praline, dates and smoky vanilla tonka bean."
			},
			{
				id: "perf_me_2",
				pillar: "PERFUMES & SCENTS",
				subcat: "MIDDLE EASTERN",
				name: "Swiss Arabian Shaghaf Oud Gold Extrait",
				price: 55e3,
				priceFormatted: "₦55,000.00",
				image: "/images/products/perf_me_2.png",
				size: "75ml",
				description: "Decadent agarwood (oud), rich golden praline and warm vanilla."
			},
			{
				id: "perf_des_1",
				pillar: "PERFUMES & SCENTS",
				subcat: "DESIGNER PERFUMES",
				name: "Bleu de Chanel Eau de Parfum (Original)",
				price: 185e3,
				priceFormatted: "₦185,000.00",
				image: "/images/products/perf_des_1.png",
				size: "100ml",
				description: "Aromatic-woody elegance. Guaranteed authentic original."
			},
			{
				id: "perf_des_2",
				pillar: "PERFUMES & SCENTS",
				subcat: "DESIGNER PERFUMES",
				name: "Tom Ford Tobacco Vanille (Authentic)",
				price: 245e3,
				priceFormatted: "₦245,000.00",
				image: "/images/products/perf_des_2.png",
				size: "50ml",
				description: "Tobacco leaf, aromatic spices, cocoa, tonka bean and sweet sap."
			},
			{
				id: "perf_niche_1",
				pillar: "PERFUMES & SCENTS",
				subcat: "NICHE PRODUCTS",
				name: "Maison Francis Kurkdjian Grand Soir",
				price: 28e4,
				priceFormatted: "₦280,000.00",
				image: "/images/products/perf_niche_1.png",
				size: "70ml",
				description: "Deep labdanum cistus, Brazilian tonka bean and rich amber vanilla."
			},
			{
				id: "oil_frag_1",
				pillar: "THE OILS BAR",
				subcat: "FRAGRANCE OILS",
				name: "Golden Amber & Musk Fragrance Oil",
				price: 18500,
				priceFormatted: "₦18,500.00",
				image: "/images/products/oil_frag_1.png",
				size: "100ml",
				description: "Cosmetic & candle grade fragrance oil for diffusers and body application."
			},
			{
				id: "oil_frag_2",
				pillar: "THE OILS BAR",
				subcat: "FRAGRANCE OILS",
				name: "French Vanilla Blossom Fragrance Oil",
				price: 16e3,
				priceFormatted: "₦16,000.00",
				image: "/images/products/oil_frag_2.png",
				size: "100ml",
				description: "Sensuous warm vanilla bean for body oils and candle crafts."
			},
			{
				id: "oil_ess_1",
				pillar: "THE OILS BAR",
				subcat: "ESSENTIAL OILS",
				name: "100% Pure French Lavender Essential Oil",
				price: 12500,
				priceFormatted: "₦12,500.00",
				image: "/images/products/oil_ess_1.png",
				size: "30ml",
				description: "Steam-distilled pure botanical essence from Provence. Calming aromatherapy."
			},
			{
				id: "oil_ess_2",
				pillar: "THE OILS BAR",
				subcat: "ESSENTIAL OILS",
				name: "Australian Organic Tea Tree Essential Oil",
				price: 11e3,
				priceFormatted: "₦11,000.00",
				image: "/images/products/oil_ess_2.png",
				size: "30ml",
				description: "Therapeutic grade Melaleuca alternifolia. Clarifying and purifying."
			},
			{
				id: "oil_nat_1",
				pillar: "THE OILS BAR",
				subcat: "NATURAL OILS",
				name: "Cold-Pressed Golden Jojoba Natural Oil",
				price: 15e3,
				priceFormatted: "₦15,000.00",
				image: "/images/products/oil_nat_1.png",
				size: "200ml",
				description: "Virgin unrefined cold-pressed carrier oil. Deeply hydrating."
			},
			{
				id: "oil_nat_2",
				pillar: "THE OILS BAR",
				subcat: "NATURAL OILS",
				name: "Organic Moroccan Argan Natural Oil",
				price: 19500,
				priceFormatted: "₦19,500.00",
				image: "/images/products/oil_nat_2.png",
				size: "100ml",
				description: "Rich in vitamin E and antioxidants. 100% cold-pressed purity."
			},
			{
				id: "candle_1",
				pillar: "CANDLECRAFT & CARE",
				subcat: "CANDLE ACCESSORIES",
				name: "Golden Soy Wax Flakes (1kg Bag)",
				price: 16500,
				priceFormatted: "₦16,500.00",
				image: "/images/products/candle_1.png",
				size: "1kg",
				description: "100% natural, biodegradable soy wax for container candles."
			},
			{
				id: "candle_2",
				pillar: "CANDLECRAFT & CARE",
				subcat: "CANDLE ACCESSORIES",
				name: "Pre-Waxed Cotton Wicks & Sustainer Kit",
				price: 7500,
				priceFormatted: "₦7,500.00",
				image: "/images/products/candle_2.png",
				size: "100 Pcs",
				description: "100 natural lead-free cotton wicks with metal base sustainers."
			},
			{
				id: "unscented_1",
				pillar: "CANDLECRAFT & CARE",
				subcat: "UNSCENTED PRODUCTS",
				name: "Raw Whipped Unscented Shea & Mango Butter",
				price: 14500,
				priceFormatted: "₦14,500.00",
				image: "/images/products/unscented_1.png",
				size: "250g",
				description: "Silky whipped body butter crafted without fragrance. 100% hypoallergenic."
			},
			{
				id: "pet_1",
				pillar: "CANDLECRAFT & CARE",
				subcat: "PET BODY CARE",
				name: "Calming Oatmeal & Chamomile Pet Coat Wash",
				price: 13500,
				priceFormatted: "₦13,500.00",
				image: "/images/products/pet_1.png",
				size: "350ml",
				description: "pH balanced soothing shampoo for dogs and cats."
			},
			{
				id: "pet_2",
				pillar: "CANDLECRAFT & CARE",
				subcat: "PET BODY CARE",
				name: "Organic Herbal Paw & Nose Protection Balm",
				price: 8500,
				priceFormatted: "₦8,500.00",
				image: "/images/products/pet_2.png",
				size: "60g",
				description: "Lick-safe formula to soothe dry cracked paws and snouts."
			},
			{
				id: "adult_toy_1",
				pillar: "PRIVATE BOUDOIR (18+)",
				subcat: "ADULT TOYS",
				name: "Whisper Luxe Ergonomic Silicone Pulse Wand",
				price: 38e3,
				priceFormatted: "₦38,000.00",
				image: "/images/products/adult_toy_1.png",
				size: "Standard",
				description: "Medical-grade velvety soft silicone intimate wellness massager."
			},
			{
				id: "adult_toy_2",
				pillar: "PRIVATE BOUDOIR (18+)",
				subcat: "ADULT TOYS",
				name: "Rose Petal Dual-Action Precision Stimulator",
				price: 42e3,
				priceFormatted: "₦42,000.00",
				image: "/images/products/adult_toy_2.png",
				size: "Compact",
				description: "Gentle air-pulse and magnetic vibration technology in rose design."
			},
			{
				id: "adult_ling_1",
				pillar: "PRIVATE BOUDOIR (18+)",
				subcat: "LINGERIES",
				name: "Midnight Mulberry Silk & Lace Chemise",
				price: 32e3,
				priceFormatted: "₦32,000.00",
				image: "/images/products/adult_ling_1.png",
				size: "S / M / L / XL",
				description: "100% pure Mulberry silk slip adorned with French Chantilly lace."
			},
			{
				id: "adult_ling_2",
				pillar: "PRIVATE BOUDOIR (18+)",
				subcat: "LINGERIES",
				name: "Ethereal Satin Robe with Chantilly Lace Trim",
				price: 36e3,
				priceFormatted: "₦36,000.00",
				image: "/images/products/adult_ling_2.png",
				size: "Free Size",
				description: "Fluid satin dressing gown with eyelash lace cuffs and sash tie belt."
			}
		];
		const { data: liveData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("collectionLiveProducts", () => $fetch$1("/api/v1/products"))), __temp = await __temp, __restore(), __temp);
		const mapPillar = (cat) => {
			const c = String(cat || "").toUpperCase();
			if (c === "PERFUMES" || c === "OILS") return "PERFUMES & SCENTS";
			if (c === "ADULT SECTION") return "ADULT & PRIVATE";
			return "LIFESTYLE & LIVING";
		};
		const allProducts = computed(() => {
			if (liveData.value && Array.isArray(liveData.value) && liveData.value.length > 0) return liveData.value.map((p) => ({
				id: p.id,
				pillar: mapPillar(p.category || p.cat_name),
				subcat: (p.subcategory || p.category || "").toUpperCase(),
				name: p.name,
				price: parseFloat(p.price || 0),
				priceFormatted: `₦${parseFloat(p.price || 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
				image: p.image || "/images/products/perf_usa_1.png",
				size: p.size || "Standard",
				description: p.description || ""
			}));
			return collectionProducts;
		});
		const activeProducts = computed(() => {
			return allProducts.value.filter((p) => {
				if (!(p.pillar === activePillar.value)) return false;
				if (activeCategory.value === "ALL") return true;
				return p.subcat?.toUpperCase() === activeCategory.value.toUpperCase();
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_FooterFeatures = FooterFeatures_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "coll-page" }, _attrs))} data-v-c9531db1><header class="coll-hero" data-v-c9531db1><img${ssrRenderAttr("src", _virtual_public__2Fimages_2Fbrand_bg_default)} alt="TZORAH EMPORIUM Curated Collections" class="coll-hero__bg" data-v-c9531db1><div class="coll-hero__overlay" data-v-c9531db1></div><div class="coll-hero__content" data-v-c9531db1><span class="coll-hero__eyebrow" data-v-c9531db1>THE CURATED EDITS</span><h1 class="coll-hero__title" data-v-c9531db1>Our Collections</h1><p class="coll-hero__sub" data-v-c9531db1>Explore our dedicated sanctuaries: perfumes, rare oils, artisan candle supplies &amp; discreet intimates.</p></div><div class="img-logo-overlay img-logo-overlay--br" data-v-c9531db1><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" data-v-c9531db1></div></header><section class="coll-gender-bar" data-v-c9531db1><div class="container" data-v-c9531db1><div class="gender-tabs" data-v-c9531db1><!--[-->`);
			ssrRenderList(pillars, (pillar) => {
				_push(`<button class="${ssrRenderClass(["gender-tab", { "gender-tab--active": activePillar.value === pillar }])}" data-v-c9531db1>${ssrInterpolate(pillar)}</button>`);
			});
			_push(`<!--]--></div></div></section><section class="coll-category-bar" data-v-c9531db1><div class="container" data-v-c9531db1><div class="category-filters" data-v-c9531db1><!--[-->`);
			ssrRenderList(currentSubcategories.value, (cat) => {
				_push(`<button class="${ssrRenderClass(["cat-btn", { "cat-btn--active": activeCategory.value === cat }])}" data-v-c9531db1>${ssrInterpolate(cat)}</button>`);
			});
			_push(`<!--]--></div><div class="coll-count" data-v-c9531db1>${ssrInterpolate(activeProducts.value.length)} ITEMS </div></div></section><main class="container coll-main" data-v-c9531db1><div${ssrRenderAttrs({
				name: "fade",
				class: "product-grid"
			})} data-v-c9531db1>`);
			ssrRenderList(activeProducts.value, (product) => {
				_push(`<div class="product-card" data-v-c9531db1><div class="product-card__image-container" data-v-c9531db1><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} class="product-card__img" data-v-c9531db1><span class="product-card__tag" data-v-c9531db1>${ssrInterpolate(product.subcategory || product.category)}</span>`);
				if (product.size) _push(`<span class="product-card__size" data-v-c9531db1>${ssrInterpolate(product.size)}</span>`);
				else _push(`<!---->`);
				_push(`<button class="${ssrRenderClass([{ "product-card__wishlist--active": unref(isWishlisted)(product.id) }, "product-card__wishlist"])}" aria-label="Add to Wishlist" data-v-c9531db1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-c9531db1><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-c9531db1></path></svg></button><div class="product-card__overlay" data-v-c9531db1><button class="product-card__quick-add" data-v-c9531db1><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-c9531db1><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-c9531db1></path><line x1="3" y1="6" x2="21" y2="6" data-v-c9531db1></line><path d="M16 10a4 4 0 0 1-8 0" data-v-c9531db1></path></svg> QUICK ADD </button></div></div><div class="product-card__details" data-v-c9531db1><h3 class="product-card__title" data-v-c9531db1>${ssrInterpolate(product.name)}</h3>`);
				if (product.description) _push(`<p class="product-card__desc" data-v-c9531db1>${ssrInterpolate(product.description)}</p>`);
				else _push(`<!---->`);
				_push(`<p class="product-card__price" data-v-c9531db1>${ssrInterpolate(product.priceFormatted)}</p></div></div>`);
			});
			_push(`</div>`);
			if (activeProducts.value.length === 0) _push(`<div class="coll-empty" data-v-c9531db1><p data-v-c9531db1>No items found in this section.</p></div>`);
			else _push(`<!---->`);
			_push(`</main>`);
			_push(ssrRenderComponent(_component_FooterFeatures, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var collection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-c9531db1"]]);

export { collection_default as default };
//# sourceMappingURL=collection-BHRxrM0Z.mjs.map

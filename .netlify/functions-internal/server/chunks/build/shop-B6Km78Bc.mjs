import { c as useHead$1, a as useState, $ as $fetch$1 } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Flogo_default } from './_virtual_public-B2oAlyaR.mjs';
import { u as useWishlist } from './useWishlist-BbbQGVvs.mjs';
import { u as useStoreSettings } from './useStoreSettings-KpneMvKU.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { u as useAsyncData } from './asyncData-DOwAQs52.mjs';
import { F as FooterFeatures_default } from './FooterFeatures-BebMEnL0.mjs';
import { _ as _virtual_public__2Fhero_fragrances_default } from './_virtual_public-BhdsAuQK.mjs';
import { ref, computed, withAsyncContext, watch, mergeProps, unref, useSSRContext } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/shop.vue
var _sfc_main = {
	__name: "shop",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead$1({
			title: "Shop All | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Shop authentic USA perfume oils, Middle Eastern scents, designer fragrances, pure essential & natural oils, candle supplies, and private intimates."
			}]
		});
		const route = useRoute();
		useRouter();
		useState("cartCount", () => 0);
		useState("cartItems", () => []);
		useState("toasts", () => []);
		const categories = [
			"ALL",
			"FRAGRANCE",
			"PERFUMES",
			"OILS",
			"UNSCENTED PRODUCTS",
			"CANDLE MAKING ACCESSORIES",
			"PET BODY CARE PRODUCTS",
			"ADULT SECTION"
		];
		const searchQuery = ref("");
		const activeCategory = ref("ALL");
		const activeSubcategory = ref("ALL");
		const sortBy = ref("featured");
		const subcategoriesForActiveCat = computed(() => {
			if (activeCategory.value === "FRAGRANCE") return [
				"ALL",
				"USA Oil Perfumes",
				"Middle Eastern Perfumes",
				"Authentic Designer Perfumes",
				"Niche Products",
				"Fragrance Oils",
				"Essential Oils",
				"Natural Oils",
				"Waxes & Bases",
				"Grooming & Washes"
			];
			if (activeCategory.value === "PERFUMES") return [
				"ALL",
				"USA Oil Perfumes",
				"Middle Eastern Perfumes",
				"Authentic Designer Perfumes",
				"Niche Products"
			];
			if (activeCategory.value === "OILS") return [
				"ALL",
				"Fragrance Oils",
				"Essential Oils",
				"Natural Oils"
			];
			if (activeCategory.value === "CANDLE MAKING ACCESSORIES") return [
				"ALL",
				"Waxes & Bases",
				"Wicks & Hardware",
				"Tools & Vessels"
			];
			if (activeCategory.value === "PET BODY CARE PRODUCTS") return [
				"ALL",
				"Grooming & Washes",
				"Balms & Salves"
			];
			if (activeCategory.value === "UNSCENTED PRODUCTS") return [
				"ALL",
				"Unscented Body Care",
				"Unscented Skincare"
			];
			if (activeCategory.value === "ADULT SECTION") return [
				"ALL",
				"Adult Toys",
				"Lingeries"
			];
			return [
				"ALL",
				"USA Oil Perfumes",
				"Middle Eastern Perfumes",
				"Authentic Designer Perfumes",
				"Niche Products",
				"Fragrance Oils",
				"Essential Oils",
				"Natural Oils",
				"Waxes & Bases",
				"Wicks & Hardware",
				"Tools & Vessels",
				"Grooming & Washes",
				"Balms & Salves",
				"Unscented Body Care",
				"Unscented Skincare",
				"Adult Toys",
				"Lingeries"
			];
		});
		const { isWishlisted} = useWishlist();
		const { storeSettings} = useStoreSettings();
		const currencySymbol = computed(() => {
			const c = storeSettings.value?.currency || "NGN";
			if (c === "NGN") return "₦";
			if (c === "USD") return "$";
			return "₦";
		});
		const mapProductData = (list) => {
			if (!Array.isArray(list)) return [];
			return list.map((p) => {
				const priceVal = parseFloat(p.price) || 0;
				return {
					id: p.id,
					name: p.name,
					category: p.category || p.cat_name || "PERFUMES",
					subcategory: p.subcategory || "",
					price: priceVal,
					priceFormatted: `${currencySymbol.value}${priceVal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
					image: p.image || "/images/products/placeholder.png",
					description: p.description || "",
					size: p.size || ""
				};
			});
		};
		const products = ref([]);
		const { data: liveProductsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("shopProductsData", () => $fetch$1("/api/v1/products"))), __temp = await __temp, __restore(), __temp);
		if (Array.isArray(liveProductsData.value)) products.value = mapProductData(liveProductsData.value);
		const syncWithRoute = (query) => {
			if (query.q || query.search) searchQuery.value = String(query.q || query.search);
			else searchQuery.value = "";
			if (query.cat) {
				const queryCat = String(query.cat).toUpperCase();
				const match = categories.find((c) => c.toUpperCase() === queryCat);
				if (match) activeCategory.value = match;
			}
			if (query.sub) activeSubcategory.value = String(query.sub);
		};
		watch(() => route.query, (newQ) => {
			syncWithRoute(newQ);
		});
		const filteredProducts = computed(() => {
			let list = [...products.value];
			const q = searchQuery.value.toLowerCase().trim();
			if (q) list = list.filter((p) => {
				const name = (p.name || "").toLowerCase();
				const desc = (p.description || "").toLowerCase();
				const cat = (p.category || "").toLowerCase();
				const sub = (p.subcategory || "").toLowerCase();
				return name.includes(q) || desc.includes(q) || cat.includes(q) || sub.includes(q);
			});
			if (activeCategory.value !== "ALL") if (activeCategory.value.toUpperCase() === "FRAGRANCE") list = list.filter((p) => p.category?.toUpperCase() !== "ADULT SECTION");
			else list = list.filter((p) => p.category?.toUpperCase() === activeCategory.value.toUpperCase());
			if (activeSubcategory.value !== "ALL") list = list.filter((p) => p.subcategory?.toUpperCase() === activeSubcategory.value.toUpperCase());
			if (sortBy.value === "price-low") list.sort((a, b) => a.price - b.price);
			else if (sortBy.value === "price-high") list.sort((a, b) => b.price - a.price);
			return list;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_FooterFeatures = FooterFeatures_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "shop-page" }, _attrs))} data-v-baa65b41><header class="shop-hero" data-v-baa65b41><img${ssrRenderAttr("src", _virtual_public__2Fhero_fragrances_default)} alt="TZORAH EMPORIUM Shop Banner" class="shop-hero__bg" data-v-baa65b41><div class="shop-hero__overlay" data-v-baa65b41></div><div class="shop-hero__content" data-v-baa65b41><h1 class="shop-hero__headline" data-v-baa65b41> SHOP ON <span class="shop-hero__highlight" data-v-baa65b41>TZORAH EMPORIUM</span> WITH CONFIDENCE </h1></div><div class="img-logo-overlay img-logo-overlay--br" data-v-baa65b41><img${ssrRenderAttr("src", _virtual_public__2Flogo_default)} alt="TZORAH EMPORIUM" data-v-baa65b41></div></header><main class="container shop-main" data-v-baa65b41><div class="shop-toolbar" data-v-baa65b41><div class="shop-filter-group shop-filter-group--search" data-v-baa65b41><label for="shop-search-input" class="shop-filter-label" data-v-baa65b41>SEARCH PRODUCTS</label><div class="shop-search-wrapper" data-v-baa65b41><svg class="shop-search-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-baa65b41><circle cx="11" cy="11" r="8" data-v-baa65b41></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-baa65b41></line></svg><input id="shop-search-input"${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search by product name, oil, fragrance..." class="shop-search-input" data-v-baa65b41>`);
			if (searchQuery.value) _push(`<button class="shop-search-clear-btn" aria-label="Clear search" type="button" data-v-baa65b41> × </button>`);
			else _push(`<!---->`);
			_push(`</div></div><div class="shop-filter-group" data-v-baa65b41><label for="category-select" class="shop-filter-label" data-v-baa65b41>CATEGORY</label><div class="shop-select-wrapper" data-v-baa65b41><select id="category-select" class="shop-custom-select" data-v-baa65b41><!--[-->`);
			ssrRenderList(categories, (cat) => {
				_push(`<option${ssrRenderAttr("value", cat)} data-v-baa65b41${ssrIncludeBooleanAttr(Array.isArray(activeCategory.value) ? ssrLooseContain(activeCategory.value, cat) : ssrLooseEqual(activeCategory.value, cat)) ? " selected" : ""}>${ssrInterpolate(cat === "ALL" ? "ALL CATEGORIES" : cat)}</option>`);
			});
			_push(`<!--]--></select><svg class="shop-select-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-baa65b41><polyline points="6 9 12 15 18 9" data-v-baa65b41></polyline></svg></div></div><div class="shop-filter-group" data-v-baa65b41><label for="subcategory-select" class="shop-filter-label" data-v-baa65b41>SUB-CATEGORY</label><div class="shop-select-wrapper" data-v-baa65b41><select id="subcategory-select" class="shop-custom-select" data-v-baa65b41><!--[-->`);
			ssrRenderList(subcategoriesForActiveCat.value, (sub) => {
				_push(`<option${ssrRenderAttr("value", sub)} data-v-baa65b41${ssrIncludeBooleanAttr(Array.isArray(activeSubcategory.value) ? ssrLooseContain(activeSubcategory.value, sub) : ssrLooseEqual(activeSubcategory.value, sub)) ? " selected" : ""}>${ssrInterpolate(sub === "ALL" ? activeCategory.value === "ALL" ? "ALL SUB-CATEGORIES" : "ALL " + activeCategory.value : sub)}</option>`);
			});
			_push(`<!--]--></select><svg class="shop-select-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-baa65b41><polyline points="6 9 12 15 18 9" data-v-baa65b41></polyline></svg></div></div><div class="shop-filter-group shop-filter-group--sort" data-v-baa65b41><label for="sort-select" class="shop-filter-label" data-v-baa65b41>SORT BY</label><div class="shop-select-wrapper" data-v-baa65b41><select id="sort-select" class="shop-custom-select" data-v-baa65b41><option value="featured" data-v-baa65b41${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "featured") : ssrLooseEqual(sortBy.value, "featured")) ? " selected" : ""}>FEATURED</option><option value="price-low" data-v-baa65b41${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "price-low") : ssrLooseEqual(sortBy.value, "price-low")) ? " selected" : ""}>PRICE: LOW TO HIGH</option><option value="price-high" data-v-baa65b41${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "price-high") : ssrLooseEqual(sortBy.value, "price-high")) ? " selected" : ""}>PRICE: HIGH TO LOW</option></select><svg class="shop-select-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-baa65b41><polyline points="6 9 12 15 18 9" data-v-baa65b41></polyline></svg></div></div></div>`);
			if (activeCategory.value === "ADULT SECTION") _push(`<div class="adult-notice animate-fade-in" data-v-baa65b41><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-baa65b41><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-baa65b41></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-v-baa65b41></path></svg><span data-v-baa65b41>100% DISCREET &amp; CONFIDENTIAL PACKAGING GUARANTEED. SHIPPED IN PLAIN UNBRANDED BOXES. 18+ ONLY.</span></div>`);
			else _push(`<!---->`);
			if (activeCategory.value !== "ALL" || activeSubcategory.value !== "ALL" || searchQuery.value) {
				_push(`<div class="shop-active-filters" data-v-baa65b41>`);
				if (searchQuery.value) _push(`<span class="shop-active-tag" data-v-baa65b41> SEARCH: &quot;${ssrInterpolate(searchQuery.value)}&quot; <button class="shop-active-tag__close" data-v-baa65b41>×</button></span>`);
				else _push(`<!---->`);
				if (activeCategory.value !== "ALL") {
					_push(`<span class="shop-active-tag" data-v-baa65b41>${ssrInterpolate(activeCategory.value)} `);
					if (activeSubcategory.value !== "ALL") _push(`<span data-v-baa65b41> • ${ssrInterpolate(activeSubcategory.value)}</span>`);
					else _push(`<!---->`);
					_push(`<button class="shop-active-tag__close" data-v-baa65b41>×</button></span>`);
				} else _push(`<!---->`);
				_push(`<button class="shop-clear-all" data-v-baa65b41>Reset All</button></div>`);
			} else _push(`<!---->`);
			_push(`<div class="product-grid" data-v-baa65b41><!--[-->`);
			ssrRenderList(filteredProducts.value, (product) => {
				_push(`<div class="product-card" data-v-baa65b41><div class="product-card__image-container" data-v-baa65b41><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} class="product-card__img" data-v-baa65b41>`);
				if (product.subcategory || product.category) _push(`<span class="product-card__subcat-tag" data-v-baa65b41>${ssrInterpolate(product.subcategory || product.category)}</span>`);
				else _push(`<!---->`);
				if (product.size) _push(`<span class="product-card__size-badge" data-v-baa65b41>${ssrInterpolate(product.size)}</span>`);
				else _push(`<!---->`);
				_push(`<button class="${ssrRenderClass([{ "product-card__wishlist--active": unref(isWishlisted)(product.id) }, "product-card__wishlist"])}" aria-label="Add to Wishlist" data-v-baa65b41><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-baa65b41><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-baa65b41></path></svg></button><div class="product-card__overlay" data-v-baa65b41><button class="product-card__quick-add" data-v-baa65b41><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="quick-add-icon" data-v-baa65b41><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-baa65b41></path><line x1="3" y1="6" x2="21" y2="6" data-v-baa65b41></line><path d="M16 10a4 4 0 0 1-8 0" data-v-baa65b41></path></svg> QUICK ADD </button></div></div><div class="product-card__details" data-v-baa65b41><h3 class="product-card__title" data-v-baa65b41>${ssrInterpolate(product.name)}</h3>`);
				if (product.description) _push(`<p class="product-card__desc-snippet" data-v-baa65b41>${ssrInterpolate(product.description)}</p>`);
				else _push(`<!---->`);
				_push(`<p class="product-card__price" data-v-baa65b41>${ssrInterpolate(product.priceFormatted)}</p></div></div>`);
			});
			_push(`<!--]--></div>`);
			if (filteredProducts.value.length === 0) {
				_push(`<div class="shop-empty" data-v-baa65b41>`);
				if (searchQuery.value) {
					_push(`<p data-v-baa65b41>No products found matching &quot;<strong data-v-baa65b41>${ssrInterpolate(searchQuery.value)}</strong>&quot;`);
					if (activeCategory.value !== "ALL") _push(`<span data-v-baa65b41> in ${ssrInterpolate(activeCategory.value)}</span>`);
					else _push(`<!---->`);
					_push(`.</p>`);
				} else _push(`<p data-v-baa65b41>No products found under this selection.</p>`);
				_push(`<div class="shop-empty__buttons" data-v-baa65b41>`);
				if (searchQuery.value && activeCategory.value !== "ALL") _push(`<button class="btn btn-secondary empty-action-btn" data-v-baa65b41> SEARCH ACROSS ALL CATEGORIES </button>`);
				else _push(`<!---->`);
				if (searchQuery.value) _push(`<button class="btn btn-secondary empty-action-btn" data-v-baa65b41> CLEAR SEARCH </button>`);
				else _push(`<!---->`);
				_push(`<button class="btn btn-primary empty-action-btn" data-v-baa65b41> VIEW ALL PRODUCTS </button></div></div>`);
			} else _push(`<!---->`);
			_push(`</main>`);
			_push(ssrRenderComponent(_component_FooterFeatures, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var shop_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-baa65b41"]]);

export { shop_default as default };
//# sourceMappingURL=shop-B6Km78Bc.mjs.map

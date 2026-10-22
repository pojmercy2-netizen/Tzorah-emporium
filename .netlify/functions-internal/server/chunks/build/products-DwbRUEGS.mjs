import { c as useHead$1, u as useCookie } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/admin/products.vue
var _sfc_main = {
	__name: "products",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Manage Products | TZORAH EMPORIUM Admin",
			meta: [{
				name: "description",
				content: "Catalogue inventory and stock management console."
			}]
		});
		const STORE_CATEGORIES = [
			"PERFUMES",
			"OILS",
			"UNSCENTED PRODUCTS",
			"CANDLE MAKING ACCESSORIES",
			"PET BODY CARE PRODUCTS",
			"ADULT SECTION"
		];
		const SUBCATEGORIES_MAP = {
			"PERFUMES": [
				"USA Oil Perfumes",
				"Middle Eastern Perfumes",
				"Authentic Designer Perfumes",
				"Niche Products"
			],
			"OILS": [
				"Fragrance Oils",
				"Essential Oils",
				"Natural Oils"
			],
			"UNSCENTED PRODUCTS": ["Unscented Body Care", "Unscented Skincare"],
			"CANDLE MAKING ACCESSORIES": [
				"Waxes & Bases",
				"Wicks & Hardware",
				"Tools & Vessels"
			],
			"PET BODY CARE PRODUCTS": ["Grooming & Washes", "Balms & Salves"],
			"ADULT SECTION": ["Adult Toys", "Lingeries"]
		};
		const presetImages = [
			{
				path: "/images/products/perf_usa_1.png",
				label: "USA Perfume 1"
			},
			{
				path: "/images/products/perf_usa_2.png",
				label: "USA Perfume 2"
			},
			{
				path: "/images/products/perf_me_1.png",
				label: "Middle Eastern"
			},
			{
				path: "/images/products/oil_nat_1.png",
				label: "Natural Oil 1"
			},
			{
				path: "/images/products/oil_nat_2.png",
				label: "Natural Oil 2"
			},
			{
				path: "/images/products/oil_frag_1.png",
				label: "Fragrance Oil"
			},
			{
				path: "/images/products/candle_1.png",
				label: "Candle Soy Wax"
			},
			{
				path: "/images/products/candle_2.png",
				label: "Candle Wicks"
			},
			{
				path: "/images/products/candle_3.png",
				label: "Melting Pitcher"
			},
			{
				path: "/images/products/pet_1.png",
				label: "Pet Coat Wash"
			},
			{
				path: "/images/products/pet_2.png",
				label: "Pet Balm"
			},
			{
				path: "/images/products/unscented_1.png",
				label: "Shea Butter"
			},
			{
				path: "/images/products/adult_toy_1.png",
				label: "Adult Toy"
			},
			{
				path: "/images/products/adult_ling_1.png",
				label: "Silk Lingerie"
			}
		];
		useCookie("adminToken");
		const rawProducts = ref([]);
		const loading = ref(true);
		const toastMessage = ref("");
		const adminProducts = computed(() => {
			return rawProducts.value.map((p) => {
				const cat = (p.cat_name || p.category || "PERFUMES").toUpperCase();
				return {
					id: p.id,
					name: p.name,
					category: cat,
					subcategory: p.subcategory || "",
					price: parseFloat(p.price || 0),
					stock: p.stock !== null && p.stock !== void 0 ? parseInt(p.stock, 10) : 0,
					image: p.image || "/images/products/perf_usa_1.png",
					description: p.description || "",
					size: p.size || "",
					colors: Array.isArray(p.color) ? p.color : typeof p.color === "string" && p.color.startsWith("[") ? JSON.parse(p.color) : ["black"]
				};
			});
		});
		const availableCategories = computed(() => {
			const cats = new Set(STORE_CATEGORIES);
			adminProducts.value.forEach((p) => {
				if (p.category && ![
					"T-SHIRTS",
					"HOODIES",
					"SWEATSHIRTS",
					"POLOS",
					"PANTS",
					"JACKETS"
				].includes(p.category)) cats.add(p.category);
			});
			return Array.from(cats);
		});
		const uniqueCategoriesCount = computed(() => {
			return new Set(adminProducts.value.map((p) => p.category)).size;
		});
		const inStockCount = computed(() => {
			return adminProducts.value.filter((p) => p.stock > 10).length;
		});
		const lowOrOutCount = computed(() => {
			return adminProducts.value.filter((p) => p.stock <= 10).length;
		});
		const getCategoryCount = (cat) => {
			return adminProducts.value.filter((p) => p.category === cat).length;
		};
		const searchQuery = ref("");
		const selectedCategory = ref("ALL");
		const selectedSubcategory = ref("ALL");
		const selectedStockFilter = ref("ALL");
		const subcategoriesForSelectedCategory = computed(() => {
			if (selectedCategory.value === "ALL") {
				const subs = /* @__PURE__ */ new Set();
				adminProducts.value.forEach((p) => {
					if (p.subcategory) subs.add(p.subcategory);
				});
				return Array.from(subs);
			}
			const defined = SUBCATEGORIES_MAP[selectedCategory.value] || [];
			const customFromProducts = adminProducts.value.filter((p) => p.category === selectedCategory.value && p.subcategory).map((p) => p.subcategory);
			return Array.from(/* @__PURE__ */ new Set([...defined, ...customFromProducts]));
		});
		const hasActiveFilters = computed(() => {
			return selectedCategory.value !== "ALL" || selectedSubcategory.value !== "ALL" || selectedStockFilter.value !== "ALL" || searchQuery.value.trim() !== "";
		});
		const otherCategoryMatchesCount = computed(() => {
			const q = searchQuery.value.toLowerCase().trim();
			if (!q || selectedCategory.value === "ALL") return 0;
			return adminProducts.value.filter((p) => {
				const name = (p.name || "").toLowerCase();
				const cat = (p.category || "").toLowerCase();
				const sub = (p.subcategory || "").toLowerCase();
				return name.includes(q) || cat.includes(q) || sub.includes(q);
			}).length;
		});
		const filteredProducts = computed(() => {
			return adminProducts.value.filter((p) => {
				const q = searchQuery.value.toLowerCase().trim();
				const nameMatch = (p.name || "").toLowerCase().includes(q);
				const catMatch = (p.category || "").toLowerCase().includes(q);
				const subMatch = (p.subcategory || "").toLowerCase().includes(q);
				const matchesSearch = !q || nameMatch || catMatch || subMatch;
				const matchesCategory = selectedCategory.value === "ALL" || p.category === selectedCategory.value;
				const matchesSubcategory = selectedSubcategory.value === "ALL" || p.subcategory && p.subcategory.toUpperCase() === selectedSubcategory.value.toUpperCase();
				let matchesStock = true;
				if (selectedStockFilter.value === "OUT_OF_STOCK") matchesStock = p.stock === 0;
				else if (selectedStockFilter.value === "LOW_STOCK") matchesStock = p.stock > 0 && p.stock <= 10;
				else if (selectedStockFilter.value === "IN_STOCK") matchesStock = p.stock > 10;
				return matchesSearch && matchesCategory && matchesSubcategory && matchesStock;
			});
		});
		const modalOpen = ref(false);
		const isEditing = ref(false);
		const saving = ref(false);
		const deleting = ref(false);
		const deleteModalOpen = ref(false);
		const productToDelete = ref(null);
		const formError = ref("");
		const form = ref({
			id: "",
			name: "",
			category: "PERFUMES",
			customCategory: "",
			subcategory: "",
			customSubcategory: "",
			price: 35e3,
			stock: 25,
			size: "50ml",
			image: "/images/products/perf_usa_1.png",
			description: "",
			colorsInput: ""
		});
		const modalSubcategories = computed(() => {
			const cat = form.value.category === "__CUSTOM__" ? form.value.customCategory.trim().toUpperCase() : form.value.category;
			return SUBCATEGORIES_MAP[cat] || [];
		});
		const getColorHex = (name) => {
			return {
				"black": "#121212",
				"white": "#f8f9fa",
				"gold": "#d4af37",
				"amber": "#b89874",
				"cream": "#ebe7e0",
				"tan": "#d2b48c",
				"grey": "#8e8e93",
				"navy": "#1a233d",
				"beige": "#e1d5c2",
				"brown": "#5c4033",
				"olive": "#556b2f"
			}[name?.toLowerCase()] || "#b89874";
		};
		const getStockStatusLabel = (stock) => {
			if (stock === 0) return "OUT OF STOCK";
			if (stock <= 10) return "LOW STOCK";
			return "IN STOCK";
		};
		const getStockBadgeClass = (stock) => {
			if (stock === 0) return "stock-out";
			if (stock <= 10) return "stock-low";
			return "stock-in";
		};
		const getCategoryBadgeClass = (cat) => {
			const c = String(cat).toUpperCase();
			if (c === "PERFUMES") return "cat-badge-perfume";
			if (c === "OILS") return "cat-badge-oil";
			if (c === "ADULT SECTION") return "cat-badge-adult";
			if (c === "CANDLE MAKING ACCESSORIES") return "cat-badge-candle";
			if (c === "PET BODY CARE PRODUCTS") return "cat-badge-pet";
			return "cat-badge-default";
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-products" }, _attrs))} data-v-5d6562fb><div class="products-header animate-fade-in" data-v-5d6562fb><div data-v-5d6562fb><h1 class="page-title" data-v-5d6562fb>Catalog Inventory</h1><p class="page-subtitle" data-v-5d6562fb>Manage store products, categories, subcategories, pricing, stock and images.</p></div><button class="btn-primary-admin" data-v-5d6562fb><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-5d6562fb><line x1="12" y1="5" x2="12" y2="19" data-v-5d6562fb></line><line x1="5" y1="12" x2="19" y2="12" data-v-5d6562fb></line></svg> ADD NEW PRODUCT </button></div><div class="stats-row animate-fade-in" data-v-5d6562fb><div class="stat-card" data-v-5d6562fb><span class="stat-label" data-v-5d6562fb>TOTAL PRODUCTS</span><span class="stat-value" data-v-5d6562fb>${ssrInterpolate(adminProducts.value.length)}</span></div><div class="stat-card" data-v-5d6562fb><span class="stat-label" data-v-5d6562fb>CATEGORIES</span><span class="stat-value" data-v-5d6562fb>${ssrInterpolate(uniqueCategoriesCount.value)}</span></div><div class="stat-card" data-v-5d6562fb><span class="stat-label" data-v-5d6562fb>IN STOCK</span><span class="stat-value text-emerald" data-v-5d6562fb>${ssrInterpolate(inStockCount.value)}</span></div><div class="stat-card" data-v-5d6562fb><span class="stat-label" data-v-5d6562fb>LOW / OUT OF STOCK</span><span class="${ssrRenderClass([lowOrOutCount.value > 0 ? "text-amber" : "", "stat-value"])}" data-v-5d6562fb>${ssrInterpolate(lowOrOutCount.value)}</span></div></div><div class="category-pills-bar animate-fade-in" data-v-5d6562fb><button class="${ssrRenderClass([{ active: selectedCategory.value === "ALL" }, "category-pill"])}" data-v-5d6562fb> ALL (${ssrInterpolate(adminProducts.value.length)}) </button><!--[-->`);
			ssrRenderList(availableCategories.value, (cat) => {
				_push(`<button class="${ssrRenderClass([{ active: selectedCategory.value === cat }, "category-pill"])}" data-v-5d6562fb>${ssrInterpolate(cat)} (${ssrInterpolate(getCategoryCount(cat))}) </button>`);
			});
			_push(`<!--]--></div><div class="filters-bar animate-fade-in" data-v-5d6562fb><div class="search-wrapper" data-v-5d6562fb><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon" data-v-5d6562fb><circle cx="11" cy="11" r="8" data-v-5d6562fb></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-5d6562fb></line></svg><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search by name, category, or subcategory..." class="search-input" data-v-5d6562fb>`);
			if (searchQuery.value) _push(`<button class="search-clear-admin" aria-label="Clear search" type="button" data-v-5d6562fb>×</button>`);
			else _push(`<!---->`);
			_push(`</div><div class="filter-dropdowns" data-v-5d6562fb>`);
			if (subcategoriesForSelectedCategory.value.length > 0) {
				_push(`<select class="filter-select" data-v-5d6562fb><option value="ALL" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(selectedSubcategory.value) ? ssrLooseContain(selectedSubcategory.value, "ALL") : ssrLooseEqual(selectedSubcategory.value, "ALL")) ? " selected" : ""}>ALL SUBCATEGORIES</option><!--[-->`);
				ssrRenderList(subcategoriesForSelectedCategory.value, (sub) => {
					_push(`<option${ssrRenderAttr("value", sub)} data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(selectedSubcategory.value) ? ssrLooseContain(selectedSubcategory.value, sub) : ssrLooseEqual(selectedSubcategory.value, sub)) ? " selected" : ""}>${ssrInterpolate(sub)}</option>`);
				});
				_push(`<!--]--></select>`);
			} else _push(`<!---->`);
			_push(`<select class="filter-select" data-v-5d6562fb><option value="ALL" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(selectedStockFilter.value) ? ssrLooseContain(selectedStockFilter.value, "ALL") : ssrLooseEqual(selectedStockFilter.value, "ALL")) ? " selected" : ""}>ALL STOCK STATUS</option><option value="IN_STOCK" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(selectedStockFilter.value) ? ssrLooseContain(selectedStockFilter.value, "IN_STOCK") : ssrLooseEqual(selectedStockFilter.value, "IN_STOCK")) ? " selected" : ""}>IN STOCK</option><option value="LOW_STOCK" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(selectedStockFilter.value) ? ssrLooseContain(selectedStockFilter.value, "LOW_STOCK") : ssrLooseEqual(selectedStockFilter.value, "LOW_STOCK")) ? " selected" : ""}>LOW STOCK (≤10)</option><option value="OUT_OF_STOCK" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(selectedStockFilter.value) ? ssrLooseContain(selectedStockFilter.value, "OUT_OF_STOCK") : ssrLooseEqual(selectedStockFilter.value, "OUT_OF_STOCK")) ? " selected" : ""}>OUT OF STOCK (0)</option></select>`);
			if (hasActiveFilters.value) _push(`<button class="btn-reset-filters" title="Reset Filters" data-v-5d6562fb> Reset </button>`);
			else _push(`<!---->`);
			_push(`</div></div><div class="admin-card animate-fade-in" data-v-5d6562fb>`);
			if (loading.value) _push(`<div class="loading-state" data-v-5d6562fb><div class="spinner" data-v-5d6562fb></div><p data-v-5d6562fb>Loading catalog inventory...</p></div>`);
			else {
				_push(`<div class="table-responsive" data-v-5d6562fb><table class="admin-table" data-v-5d6562fb><thead data-v-5d6562fb><tr data-v-5d6562fb><th data-v-5d6562fb>IMAGE</th><th data-v-5d6562fb>PRODUCT NAME</th><th data-v-5d6562fb>CATEGORY</th><th data-v-5d6562fb>SUBCATEGORY</th><th data-v-5d6562fb>PRICE</th><th data-v-5d6562fb>STOCK</th><th data-v-5d6562fb>STATUS</th><th data-v-5d6562fb>ACTIONS</th></tr></thead><tbody data-v-5d6562fb>`);
				if (filteredProducts.value.length === 0) {
					_push(`<tr data-v-5d6562fb><td colspan="8" class="text-center-cell" data-v-5d6562fb><div class="empty-box" data-v-5d6562fb>`);
					if (searchQuery.value) {
						_push(`<p data-v-5d6562fb> No products found matching &quot;<strong data-v-5d6562fb>${ssrInterpolate(searchQuery.value)}</strong>&quot;`);
						if (selectedCategory.value !== "ALL") _push(`<span data-v-5d6562fb> in ${ssrInterpolate(selectedCategory.value)}</span>`);
						else _push(`<!---->`);
						_push(`. </p>`);
					} else _push(`<p data-v-5d6562fb>No products found matching the criteria.</p>`);
					if (otherCategoryMatchesCount.value > 0) _push(`<div class="empty-suggestion" data-v-5d6562fb><p class="text-amber" data-v-5d6562fb> Found ${ssrInterpolate(otherCategoryMatchesCount.value)} product(s) matching &quot;${ssrInterpolate(searchQuery.value)}&quot; in other categories! </p><button class="btn-secondary-admin" data-v-5d6562fb> View In All Categories → </button></div>`);
					else _push(`<!---->`);
					_push(`<div class="empty-actions-row" data-v-5d6562fb>`);
					if (hasActiveFilters.value) _push(`<button class="btn-secondary-admin" data-v-5d6562fb> Clear Search &amp; Filters </button>`);
					else _push(`<!---->`);
					_push(`<button class="btn-primary-admin empty-add-btn" data-v-5d6562fb> Add Product Now </button></div></div></td></tr>`);
				} else _push(`<!---->`);
				_push(`<!--[-->`);
				ssrRenderList(filteredProducts.value, (product) => {
					_push(`<tr class="table-row" data-v-5d6562fb><td data-v-5d6562fb><div class="product-thumb" data-v-5d6562fb><img${ssrRenderAttr("src", product.image || "/images/products/perf_usa_1.png")}${ssrRenderAttr("alt", product.name)} data-v-5d6562fb></div></td><td data-v-5d6562fb><div class="product-info-cell" data-v-5d6562fb><span class="product-name" data-v-5d6562fb>${ssrInterpolate(product.name)}</span><div class="product-meta-sub" data-v-5d6562fb>`);
					if (product.size) _push(`<span class="meta-tag" data-v-5d6562fb>${ssrInterpolate(product.size)}</span>`);
					else _push(`<!---->`);
					if (product.colors && product.colors.length) {
						_push(`<span class="color-dots-inline" data-v-5d6562fb><!--[-->`);
						ssrRenderList(product.colors.slice(0, 4), (color) => {
							_push(`<span class="color-dot" style="${ssrRenderStyle({ backgroundColor: getColorHex(color) })}"${ssrRenderAttr("title", color)} data-v-5d6562fb></span>`);
						});
						_push(`<!--]--></span>`);
					} else _push(`<!---->`);
					_push(`</div></div></td><td data-v-5d6562fb><span class="${ssrRenderClass(["badge-category", getCategoryBadgeClass(product.category)])}" data-v-5d6562fb>${ssrInterpolate(product.category)}</span></td><td data-v-5d6562fb><span class="subcategory-text" data-v-5d6562fb>${ssrInterpolate(product.subcategory || "—")}</span></td><td class="font-semibold text-white" data-v-5d6562fb> ₦${ssrInterpolate(product.price.toLocaleString("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					}))}</td><td class="font-mono text-center-nums" data-v-5d6562fb>${ssrInterpolate(product.stock)} pcs</td><td data-v-5d6562fb><span class="${ssrRenderClass(["badge-stock", getStockBadgeClass(product.stock)])}" data-v-5d6562fb>${ssrInterpolate(getStockStatusLabel(product.stock))}</span></td><td style="${ssrRenderStyle({ "min-width": "90px" })}" data-v-5d6562fb><div class="action-buttons" data-v-5d6562fb><button class="btn-action btn-edit" title="Edit Product" data-v-5d6562fb><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5d6562fb><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" data-v-5d6562fb></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" data-v-5d6562fb></path></svg></button><button class="btn-action btn-delete" title="Delete Product" data-v-5d6562fb><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5d6562fb><polyline points="3 6 5 6 21 6" data-v-5d6562fb></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-5d6562fb></path></svg></button></div></td></tr>`);
				});
				_push(`<!--]--></tbody></table></div>`);
			}
			_push(`</div>`);
			if (modalOpen.value) {
				_push(`<div class="modal-overlay" data-v-5d6562fb><div class="drawer-modal animate-slide-in" data-v-5d6562fb><div class="drawer-header" data-v-5d6562fb><div data-v-5d6562fb><h2 class="drawer-title" data-v-5d6562fb>${ssrInterpolate(isEditing.value ? "Edit Product Details" : "Add New Product to Shop")}</h2><p class="drawer-subtitle" data-v-5d6562fb>${ssrInterpolate(isEditing.value ? `Editing product #${form.value.id}` : "Fill in the product details and category classification.")}</p></div><button class="btn-close" aria-label="Close modal" data-v-5d6562fb>×</button></div><form class="drawer-form" data-v-5d6562fb><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>PRODUCT NAME *</label><input${ssrRenderAttr("value", form.value.name)} type="text" class="form-input" required placeholder="e.g. Baccarat Rouge 540 Pure Oil (USA)" data-v-5d6562fb></div><div class="form-row" data-v-5d6562fb><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>CATEGORY *</label><select class="form-input" required data-v-5d6562fb><!--[-->`);
				ssrRenderList(availableCategories.value, (cat) => {
					_push(`<option${ssrRenderAttr("value", cat)} data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(form.value.category) ? ssrLooseContain(form.value.category, cat) : ssrLooseEqual(form.value.category, cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
				});
				_push(`<!--]--><option value="__CUSTOM__" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(form.value.category) ? ssrLooseContain(form.value.category, "__CUSTOM__") : ssrLooseEqual(form.value.category, "__CUSTOM__")) ? " selected" : ""}>+ New Custom Category...</option></select>`);
				if (form.value.category === "__CUSTOM__") _push(`<input${ssrRenderAttr("value", form.value.customCategory)} type="text" class="form-input form-input-sub" placeholder="Type custom category name..." required data-v-5d6562fb>`);
				else _push(`<!---->`);
				_push(`</div><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>SUBCATEGORY</label><select class="form-input" data-v-5d6562fb><option value="" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(form.value.subcategory) ? ssrLooseContain(form.value.subcategory, "") : ssrLooseEqual(form.value.subcategory, "")) ? " selected" : ""}>None / General</option><!--[-->`);
				ssrRenderList(modalSubcategories.value, (sub) => {
					_push(`<option${ssrRenderAttr("value", sub)} data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(form.value.subcategory) ? ssrLooseContain(form.value.subcategory, sub) : ssrLooseEqual(form.value.subcategory, sub)) ? " selected" : ""}>${ssrInterpolate(sub)}</option>`);
				});
				_push(`<!--]--><option value="__CUSTOM__" data-v-5d6562fb${ssrIncludeBooleanAttr(Array.isArray(form.value.subcategory) ? ssrLooseContain(form.value.subcategory, "__CUSTOM__") : ssrLooseEqual(form.value.subcategory, "__CUSTOM__")) ? " selected" : ""}>+ Custom Subcategory...</option></select>`);
				if (form.value.subcategory === "__CUSTOM__") _push(`<input${ssrRenderAttr("value", form.value.customSubcategory)} type="text" class="form-input form-input-sub" placeholder="Type subcategory name..." data-v-5d6562fb>`);
				else _push(`<!---->`);
				_push(`</div></div><div class="form-row" data-v-5d6562fb><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>PRICE (₦) *</label><input${ssrRenderAttr("value", form.value.price)} type="number" step="0.01" min="0" class="form-input" required placeholder="38500" data-v-5d6562fb></div><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>STOCK QTY (PCS) *</label><input${ssrRenderAttr("value", form.value.stock)} type="number" min="0" class="form-input" required placeholder="25" data-v-5d6562fb></div></div><div class="form-row" data-v-5d6562fb><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>SIZE / PACKAGING</label><input${ssrRenderAttr("value", form.value.size)} type="text" class="form-input" placeholder="e.g. 50ml, 100ml, 1kg, 100 Pieces" data-v-5d6562fb></div><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>COLOR / ACCENT</label><input${ssrRenderAttr("value", form.value.colorsInput)} type="text" class="form-input" placeholder="e.g. black, gold, amber" data-v-5d6562fb></div></div><div class="form-group" data-v-5d6562fb><div class="image-label-row" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>PRODUCT IMAGE URL *</label><label class="btn-upload-file" data-v-5d6562fb><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5d6562fb><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-5d6562fb></path><polyline points="17 8 12 3 7 8" data-v-5d6562fb></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-5d6562fb></line></svg> Upload File <input type="file" accept="image/*" class="sr-only" data-v-5d6562fb></label></div><input${ssrRenderAttr("value", form.value.image)} type="text" class="form-input" required placeholder="/images/products/perf_usa_1.png or https://..." data-v-5d6562fb><div class="image-picker-section" data-v-5d6562fb><div class="image-preview-box" data-v-5d6562fb><img${ssrRenderAttr("src", form.value.image || "/images/products/perf_usa_1.png")} alt="Preview" data-v-5d6562fb><span class="preview-caption" data-v-5d6562fb>Live Preview</span></div><div class="image-presets-box" data-v-5d6562fb><span class="presets-title" data-v-5d6562fb>Quick Preset Images:</span><div class="preset-thumbnails" data-v-5d6562fb><!--[-->`);
				ssrRenderList(presetImages, (preset) => {
					_push(`<button type="button" class="${ssrRenderClass([{ active: form.value.image === preset.path }, "preset-thumb-btn"])}"${ssrRenderAttr("title", preset.label)} data-v-5d6562fb><img${ssrRenderAttr("src", preset.path)}${ssrRenderAttr("alt", preset.label)} data-v-5d6562fb></button>`);
				});
				_push(`<!--]--></div></div></div></div><div class="form-group" data-v-5d6562fb><label class="form-label" data-v-5d6562fb>DESCRIPTION</label><textarea rows="3" class="form-input form-textarea" placeholder="Detailed product scent profile, formulation, notes, or usage instructions..." data-v-5d6562fb>${ssrInterpolate(form.value.description)}</textarea></div>`);
				if (formError.value) _push(`<div class="form-error-banner" data-v-5d6562fb>${ssrInterpolate(formError.value)}</div>`);
				else _push(`<!---->`);
				_push(`<div class="drawer-footer" data-v-5d6562fb><button type="button" class="btn-cancel"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-5d6562fb>Cancel</button><button type="submit" class="btn-save"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-5d6562fb>`);
				if (saving.value) _push(`<span class="spinner-small" data-v-5d6562fb></span>`);
				else _push(`<!---->`);
				_push(` ${ssrInterpolate(saving.value ? "Saving Product..." : isEditing.value ? "Save Changes" : "Create Product")}</button></div></form></div></div>`);
			} else _push(`<!---->`);
			if (deleteModalOpen.value) {
				_push(`<div class="modal-overlay" data-v-5d6562fb><div class="confirm-modal animate-pop-in" data-v-5d6562fb><div class="confirm-icon-box" data-v-5d6562fb><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e25c5c" stroke-width="2" data-v-5d6562fb><polyline points="3 6 5 6 21 6" data-v-5d6562fb></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-5d6562fb></path></svg></div><h3 class="confirm-title" data-v-5d6562fb>Delete Product?</h3><p class="confirm-desc" data-v-5d6562fb> Are you sure you want to permanently delete <strong data-v-5d6562fb>${ssrInterpolate(productToDelete.value?.name)}</strong>? </p>`);
				if (productToDelete.value) _push(`<div class="delete-product-card" data-v-5d6562fb><img${ssrRenderAttr("src", productToDelete.value.image || "/images/products/perf_usa_1.png")}${ssrRenderAttr("alt", productToDelete.value.name)} data-v-5d6562fb><div class="delete-product-info" data-v-5d6562fb><span class="delete-name" data-v-5d6562fb>${ssrInterpolate(productToDelete.value.name)}</span><span class="delete-cat" data-v-5d6562fb>${ssrInterpolate(productToDelete.value.category)} • ${ssrInterpolate(productToDelete.value.subcategory || "General")}</span><span class="delete-price" data-v-5d6562fb>₦${ssrInterpolate(productToDelete.value.price.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div></div>`);
				else _push(`<!---->`);
				_push(`<p class="delete-warning-note" data-v-5d6562fb> This product will be immediately removed from your store inventory and the customer shop page. </p><div class="confirm-actions" data-v-5d6562fb><button class="btn-cancel"${ssrIncludeBooleanAttr(deleting.value) ? " disabled" : ""} data-v-5d6562fb>Keep Product</button><button class="btn-danger"${ssrIncludeBooleanAttr(deleting.value) ? " disabled" : ""} data-v-5d6562fb>`);
				if (deleting.value) _push(`<span class="spinner-small" data-v-5d6562fb></span>`);
				else _push(`<!---->`);
				_push(` ${ssrInterpolate(deleting.value ? "Deleting..." : "Confirm Delete")}</button></div></div></div>`);
			} else _push(`<!---->`);
			if (toastMessage.value) _push(`<div class="admin-toast animate-slide-up" data-v-5d6562fb><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5d6562fb><polyline points="20 6 9 17 4 12" data-v-5d6562fb></polyline></svg><span data-v-5d6562fb>${ssrInterpolate(toastMessage.value)}</span></div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var products_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-5d6562fb"]]);

export { products_default as default };
//# sourceMappingURL=products-DwbRUEGS.mjs.map

import { c as useHead$1, u as useCookie } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { computed, watch, ref, mergeProps, useSSRContext } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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

//#region app/pages/admin/collections/[gender].vue
var _sfc_main = {
	__name: "[gender]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const genderParam = computed(() => {
			return String(route.params.gender || "").toLowerCase();
		});
		const genderName = computed(() => {
			return {
				men: "Men",
				women: "Women",
				kids: "Kids"
			}[genderParam.value] || "";
		});
		watch(genderName, (newVal) => {
			if (!newVal) router.push("/admin/dashboard");
		}, { immediate: true });
		useHead$1({
			title: computed(() => `${genderName.value} Collection | TZORAH EMPORIUM Admin`),
			meta: [{
				name: "description",
				content: "Manage category specific collection items."
			}]
		});
		useCookie("adminToken");
		const collectionProducts = ref([]);
		const saving = ref(false);
		ref("");
		ref(null);
		const categories = [
			"ALL",
			"T-SHIRTS",
			"HOODIES",
			"SWEATSHIRTS",
			"POLOS",
			"JACKETS",
			"PANTS",
			"ACCESSORIES"
		];
		const allowedCategories = [
			"T-SHIRTS",
			"HOODIES",
			"SWEATSHIRTS",
			"POLOS",
			"JACKETS",
			"PANTS",
			"ACCESSORIES"
		];
		const activeCategory = ref("ALL");
		const filteredProducts = computed(() => {
			return collectionProducts.value.filter((p) => {
				return activeCategory.value === "ALL" || p.category === activeCategory.value;
			});
		});
		const getCategoryCount = (cat) => {
			return collectionProducts.value.filter((p) => {
				return cat === "ALL" || p.category === cat;
			}).length;
		};
		const modalOpen = ref(false);
		const deleteModalOpen = ref(false);
		const productToDelete = ref(null);
		const imagePreview = ref("");
		ref(null);
		const form = ref({
			category: "T-SHIRTS",
			name: "",
			price: 59,
			image: "",
			colorsInput: "black, cream, grey"
		});
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
				khaki: "#c8b87a",
				"dusty-rose": "#cca4a4",
				burgundy: "#7d1f2a",
				teal: "#3d7a7a",
				charcoal: "#3a3a3a"
			}[name.toLowerCase()] || "#cccccc";
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-collection-manager" }, _attrs))} data-v-fc9bb8fc><div class="coll-header animate-fade-in" data-v-fc9bb8fc><div data-v-fc9bb8fc><h1 class="page-title" data-v-fc9bb8fc>${ssrInterpolate(genderName.value)} Collection</h1><p class="page-subtitle" data-v-fc9bb8fc>Manage pieces, category tags, pricing and availability for ${ssrInterpolate(genderName.value)} fashion edit.</p></div><button class="btn-primary-admin" data-v-fc9bb8fc><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-fc9bb8fc><line x1="12" y1="5" x2="12" y2="19" data-v-fc9bb8fc></line><line x1="5" y1="12" x2="19" y2="12" data-v-fc9bb8fc></line></svg> ADD TO COLLECTION </button></div><div class="coll-tabs-bar animate-fade-in" data-v-fc9bb8fc><!--[-->`);
			ssrRenderList(categories, (cat) => {
				_push(`<button class="${ssrRenderClass(["coll-tab", { "coll-tab--active": activeCategory.value === cat }])}" data-v-fc9bb8fc>${ssrInterpolate(cat)} <span class="coll-tab-count" data-v-fc9bb8fc>${ssrInterpolate(getCategoryCount(cat))}</span></button>`);
			});
			_push(`<!--]--></div><div class="admin-card animate-fade-in" data-v-fc9bb8fc><div class="table-responsive" data-v-fc9bb8fc><table class="admin-table" data-v-fc9bb8fc><thead data-v-fc9bb8fc><tr data-v-fc9bb8fc><th data-v-fc9bb8fc>IMAGE</th><th data-v-fc9bb8fc>PRODUCT NAME</th><th data-v-fc9bb8fc>CATEGORY</th><th data-v-fc9bb8fc>PRICE</th><th data-v-fc9bb8fc>COLORS</th><th data-v-fc9bb8fc>ACTIONS</th></tr></thead><tbody data-v-fc9bb8fc>`);
			if (filteredProducts.value.length === 0) _push(`<tr data-v-fc9bb8fc><td colspan="6" class="text-center-cell" data-v-fc9bb8fc>No collection items found matching the selected category.</td></tr>`);
			else _push(`<!---->`);
			_push(`<!--[-->`);
			ssrRenderList(filteredProducts.value, (product) => {
				_push(`<tr class="table-row" data-v-fc9bb8fc><td data-v-fc9bb8fc><div class="product-thumb" data-v-fc9bb8fc><img${ssrRenderAttr("src", product.image || "/images/product_tee.png")}${ssrRenderAttr("alt", product.name)} data-v-fc9bb8fc></div></td><td data-v-fc9bb8fc><span class="product-name" data-v-fc9bb8fc>${ssrInterpolate(product.name)}</span></td><td class="text-upper font-mono" data-v-fc9bb8fc>${ssrInterpolate(product.category)}</td><td class="font-semibold text-white" data-v-fc9bb8fc>₦${ssrInterpolate(product.price.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</td><td data-v-fc9bb8fc><div class="product-colors-preview" data-v-fc9bb8fc><!--[-->`);
				ssrRenderList(product.colors, (color) => {
					_push(`<span class="color-dot" style="${ssrRenderStyle({ backgroundColor: getColorHex(color) })}"${ssrRenderAttr("title", color)} data-v-fc9bb8fc></span>`);
				});
				_push(`<!--]--></div></td><td data-v-fc9bb8fc><div class="action-buttons" data-v-fc9bb8fc><button class="btn-action btn-delete" title="Delete Item" data-v-fc9bb8fc><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-fc9bb8fc><polyline points="3 6 5 6 21 6" data-v-fc9bb8fc></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-fc9bb8fc></path></svg></button></div></td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div>`);
			if (modalOpen.value) {
				_push(`<div class="modal-overlay" data-v-fc9bb8fc><div class="drawer-modal animate-slide-in" data-v-fc9bb8fc><div class="drawer-header" data-v-fc9bb8fc><h2 class="drawer-title" data-v-fc9bb8fc>Add to ${ssrInterpolate(genderName.value)} Collection</h2><button class="btn-close" data-v-fc9bb8fc>×</button></div><form class="drawer-form" data-v-fc9bb8fc><div class="form-group" data-v-fc9bb8fc><label class="form-label" data-v-fc9bb8fc>SELECT PRODUCT TYPE (KIND)</label><select class="form-input" required data-v-fc9bb8fc><!--[-->`);
				ssrRenderList(allowedCategories, (cat) => {
					_push(`<option${ssrRenderAttr("value", cat)} data-v-fc9bb8fc${ssrIncludeBooleanAttr(Array.isArray(form.value.category) ? ssrLooseContain(form.value.category, cat) : ssrLooseEqual(form.value.category, cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
				});
				_push(`<!--]--></select></div><div class="form-group" data-v-fc9bb8fc><label class="form-label" data-v-fc9bb8fc>PRODUCT NAME</label><input${ssrRenderAttr("value", form.value.name)} type="text" class="form-input" required placeholder="e.g. CORE SWEATSHIRT" data-v-fc9bb8fc></div><div class="form-group" data-v-fc9bb8fc><label class="form-label" data-v-fc9bb8fc>PRICE (₦)</label><input${ssrRenderAttr("value", form.value.price)} type="number" step="0.01" min="0" class="form-input" required placeholder="79.00" data-v-fc9bb8fc></div><div class="form-group" data-v-fc9bb8fc><label class="form-label" data-v-fc9bb8fc>PRODUCT IMAGE</label><div class="${ssrRenderClass([{ "img-upload-zone--has-preview": imagePreview.value }, "img-upload-zone"])}" data-v-fc9bb8fc>`);
				if (imagePreview.value) _push(`<img${ssrRenderAttr("src", imagePreview.value)} class="img-preview" alt="Preview" data-v-fc9bb8fc>`);
				else _push(`<div class="img-upload-placeholder" data-v-fc9bb8fc><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fc9bb8fc><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-fc9bb8fc></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-fc9bb8fc></circle><polyline points="21 15 16 10 5 21" data-v-fc9bb8fc></polyline></svg><span class="img-upload-text" data-v-fc9bb8fc>Click or drag to upload</span><span class="img-upload-sub" data-v-fc9bb8fc>PNG, JPG, WEBP — max 5MB</span></div>`);
				if (imagePreview.value) _push(`<div class="img-change-overlay" data-v-fc9bb8fc><span data-v-fc9bb8fc>Change Image</span></div>`);
				else _push(`<!---->`);
				_push(`</div><input type="file" accept="image/*" class="img-file-input" data-v-fc9bb8fc></div><div class="form-group" data-v-fc9bb8fc><label class="form-label" data-v-fc9bb8fc>COLORS AVAILABLE (Comma separated)</label><input${ssrRenderAttr("value", form.value.colorsInput)} type="text" class="form-input" placeholder="black, cream, olive" data-v-fc9bb8fc><p class="input-tip" data-v-fc9bb8fc>Supported values: black, white, cream, tan, grey, navy, beige, brown, olive, camel, charcoal, dusty-rose, burgundy, teal</p></div><div class="drawer-footer" data-v-fc9bb8fc><button type="button" class="btn-cancel" data-v-fc9bb8fc>Cancel</button><button type="submit" class="btn-save"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-fc9bb8fc>${ssrInterpolate(saving.value ? "Saving..." : "Add Piece")}</button></div></form></div></div>`);
			} else _push(`<!---->`);
			if (deleteModalOpen.value) _push(`<div class="modal-overlay" data-v-fc9bb8fc><div class="confirm-modal" data-v-fc9bb8fc><h3 class="confirm-title" data-v-fc9bb8fc>Remove from Collection?</h3><p class="confirm-desc" data-v-fc9bb8fc>Are you sure you want to remove <strong data-v-fc9bb8fc>${ssrInterpolate(productToDelete.value?.name)}</strong> from the ${ssrInterpolate(genderName.value)} collection? This action is permanent.</p><div class="confirm-actions" data-v-fc9bb8fc><button class="btn-cancel" data-v-fc9bb8fc>Keep Item</button><button class="btn-danger" data-v-fc9bb8fc>Confirm Remove</button></div></div></div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/collections/[gender].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _gender__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-fc9bb8fc"]]);

export { _gender__default as default };
//# sourceMappingURL=_gender_-Dwm31lgS.mjs.map

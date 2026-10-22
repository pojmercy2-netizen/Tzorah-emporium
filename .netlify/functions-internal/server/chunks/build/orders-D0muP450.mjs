import { c as useHead$1, u as useCookie, a as useState } from '../virtual/entry.mjs';
import { u as useStoreSettings } from './useStoreSettings-KpneMvKU.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderTeleport } from 'vue/server-renderer';
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

//#region app/pages/admin/orders.vue
var _sfc_main = {
	__name: "orders",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Track Orders | TZORAH EMPORIUM Admin",
			meta: [{
				name: "description",
				content: "Order fulfilment, delivery tracking, and transactional record log."
			}]
		});
		useCookie("adminToken");
		const rawOrders = ref([]);
		ref(true);
		useState("toasts", () => []);
		const { storeSettings} = useStoreSettings();
		const currencySymbol = computed(() => {
			const c = storeSettings.value?.currency || "NGN";
			if (c === "NGN") return "₦";
			if (c === "EUR") return "€";
			if (c === "GBP") return "£";
			return "$";
		});
		const activeReceiptModal = ref(null);
		const adminOrders = computed(() => {
			return rawOrders.value.map((o) => ({
				id: `EK-${o.id}`,
				rawId: o.id,
				customer: o.customer_name || "Customer",
				email: o.email,
				date: new Date(o.created_at).toISOString().split("T")[0],
				itemCount: o.items?.length || 0,
				total: parseFloat(o.total_price || 0),
				status: o.status || "Pending",
				paymentStatus: o.payment_status || "Unpaid",
				paymentReceipt: o.payment_receipt || null,
				address: o.shipping_address || "N/A",
				items: (o.items || []).map((i) => ({
					name: i.product?.name || "Product Item",
					qty: i.quantity,
					price: parseFloat(i.unit_price || 0),
					color: "Standard"
				}))
			}));
		});
		const statusTabs = [
			"ALL",
			"PENDING",
			"PROCESSING",
			"SHIPPED",
			"DELIVERED",
			"CANCELLED"
		];
		const activeStatusTab = ref("ALL");
		const searchQuery = ref("");
		const expandedOrderId = ref(null);
		const getStatusCount = (status) => {
			if (status === "ALL") return adminOrders.value.length;
			return adminOrders.value.filter((o) => o.status.toUpperCase() === status).length;
		};
		const getColorHex = (name) => {
			return {
				"black": "#121212",
				"white": "#f8f9fa",
				"cream": "#ebe7e0",
				"tan": "#d2b48c",
				"grey": "#8e8e93",
				"navy": "#1a233d",
				"beige": "#e1d5c2",
				"brown": "#5c4033",
				"olive": "#556b2f",
				"camel": "#c19a6b"
			}[name.toLowerCase()] || "#cccccc";
		};
		const filteredOrders = computed(() => {
			return adminOrders.value.filter((o) => {
				const matchesSearch = o.id.toLowerCase().includes(searchQuery.value.toLowerCase()) || o.customer.toLowerCase().includes(searchQuery.value.toLowerCase()) || o.email.toLowerCase().includes(searchQuery.value.toLowerCase());
				const matchesStatus = activeStatusTab.value === "ALL" || o.status.toUpperCase() === activeStatusTab.value;
				return matchesSearch && matchesStatus;
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-orders" }, _attrs))} data-v-90d7282b><div class="orders-header animate-fade-in" data-v-90d7282b><div data-v-90d7282b><h1 class="page-title" data-v-90d7282b>Sales Orders</h1><p class="page-subtitle" data-v-90d7282b>Process incoming customer transactions and track dispatch states.</p></div></div><div class="status-tabs-bar animate-fade-in" data-v-90d7282b><!--[-->`);
			ssrRenderList(statusTabs, (status) => {
				_push(`<button class="${ssrRenderClass(["status-tab", { "status-tab--active": activeStatusTab.value === status }])}" data-v-90d7282b>${ssrInterpolate(status)} <span class="status-count" data-v-90d7282b>${ssrInterpolate(getStatusCount(status))}</span></button>`);
			});
			_push(`<!--]--></div><div class="filters-bar animate-fade-in" data-v-90d7282b><div class="search-wrapper" data-v-90d7282b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon" data-v-90d7282b><circle cx="11" cy="11" r="8" data-v-90d7282b></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-90d7282b></line></svg><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search orders by ID, customer name..." class="search-input" data-v-90d7282b></div></div><div class="admin-card animate-fade-in" data-v-90d7282b><div class="table-responsive" data-v-90d7282b><table class="admin-table" data-v-90d7282b><thead data-v-90d7282b><tr data-v-90d7282b><th width="40" data-v-90d7282b></th><th data-v-90d7282b>ORDER ID</th><th data-v-90d7282b>CUSTOMER</th><th data-v-90d7282b>DATE</th><th data-v-90d7282b>ITEMS</th><th data-v-90d7282b>TOTAL</th><th data-v-90d7282b>FULFILMENT</th><th data-v-90d7282b>PAYMENT STATUS</th><th data-v-90d7282b>ACTIONS</th></tr></thead><tbody data-v-90d7282b>`);
			if (filteredOrders.value.length === 0) _push(`<tr data-v-90d7282b><td colspan="9" class="text-center-cell" data-v-90d7282b>No orders found matching the filter criteria.</td></tr>`);
			else _push(`<!---->`);
			_push(`<!--[-->`);
			ssrRenderList(filteredOrders.value, (order) => {
				_push(`<!--[--><tr class="${ssrRenderClass([{ "row-expanded": expandedOrderId.value === order.id }, "table-row summary-row"])}" data-v-90d7282b><td data-v-90d7282b><button class="${ssrRenderClass([{ "btn-expand--rotated": expandedOrderId.value === order.id }, "btn-expand"])}" data-v-90d7282b><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-90d7282b><polyline points="9 18 15 12 9 6" data-v-90d7282b></polyline></svg></button></td><td class="font-mono text-gold" data-v-90d7282b>${ssrInterpolate(order.id)}</td><td data-v-90d7282b><div class="customer-info" data-v-90d7282b><span class="customer-name" data-v-90d7282b>${ssrInterpolate(order.customer)}</span><span class="customer-email" data-v-90d7282b>${ssrInterpolate(order.email)}</span></div></td><td class="font-mono" data-v-90d7282b>${ssrInterpolate(order.date)}</td><td data-v-90d7282b>${ssrInterpolate(order.itemCount)} pcs</td><td class="font-semibold text-white" data-v-90d7282b>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(order.total.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</td><td data-v-90d7282b><span class="${ssrRenderClass(["badge-status", "badge-" + order.status.toLowerCase()])}" data-v-90d7282b>${ssrInterpolate(order.status)}</span></td><td data-v-90d7282b><div class="payment-cell-group" data-v-90d7282b><span class="${ssrRenderClass(["badge-payment", order.paymentStatus === "Paid" ? "badge-paid" : "badge-unpaid"])}" data-v-90d7282b>${ssrInterpolate(order.paymentStatus === "Paid" ? "✓ PAID" : "⏳ UNPAID / PENDING")}</span>`);
				if (order.paymentReceipt) _push(`<span class="badge-receipt-tag" title="Customer uploaded proof of payment" data-v-90d7282b> 📸 PROOF ATTACHED </span>`);
				else _push(`<!---->`);
				_push(`</div></td><td data-v-90d7282b><div class="action-buttons" data-v-90d7282b>`);
				if (order.paymentStatus !== "Paid") _push(`<button class="btn-confirm-pay" title="Confirm received bank transfer" data-v-90d7282b> ✓ CONFIRM PAYMENT </button>`);
				else _push(`<!---->`);
				_push(`<select${ssrRenderAttr("value", order.status)} class="table-select" data-v-90d7282b><option value="Pending" data-v-90d7282b>PENDING</option><option value="Processing" data-v-90d7282b>PROCESSING</option><option value="Shipped" data-v-90d7282b>SHIPPED</option><option value="Delivered" data-v-90d7282b>DELIVERED</option><option value="Cancelled" data-v-90d7282b>CANCELLED</option></select></div></td></tr>`);
				if (expandedOrderId.value === order.id) {
					_push(`<tr class="details-row" data-v-90d7282b><td colspan="8" class="details-cell" data-v-90d7282b><div class="order-details-grid" data-v-90d7282b><div class="details-section" data-v-90d7282b><h4 class="details-title" data-v-90d7282b>DELIVERY INFORMATION</h4><p class="details-p" data-v-90d7282b><span class="label" data-v-90d7282b>Client:</span> ${ssrInterpolate(order.customer)}</p><p class="details-p" data-v-90d7282b><span class="label" data-v-90d7282b>Email:</span> ${ssrInterpolate(order.email)}</p><p class="details-p" data-v-90d7282b><span class="label" data-v-90d7282b>Shipping Address:</span> ${ssrInterpolate(order.address)}</p><p class="details-p" data-v-90d7282b><span class="label" data-v-90d7282b>Order Date:</span> ${ssrInterpolate(order.date)}</p></div><div class="details-section receipt-card-section" data-v-90d7282b><h4 class="details-title" data-v-90d7282b>PAYMENT PROOF &amp; RECEIPT</h4>`);
					if (order.paymentReceipt) {
						_push(`<div class="admin-receipt-preview" data-v-90d7282b><div class="receipt-status-banner" data-v-90d7282b><span class="receipt-ok-icon" data-v-90d7282b>✓</span><span class="receipt-ok-text" data-v-90d7282b>Customer uploaded payment confirmation</span></div><div class="receipt-image-frame" data-v-90d7282b><img${ssrRenderAttr("src", order.paymentReceipt)} alt="Payment Receipt" class="receipt-image-thumb" data-v-90d7282b><div class="receipt-hover-overlay" data-v-90d7282b><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-90d7282b><circle cx="11" cy="11" r="8" data-v-90d7282b></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-90d7282b></line><line x1="11" y1="8" x2="11" y2="14" data-v-90d7282b></line><line x1="8" y1="11" x2="14" y2="11" data-v-90d7282b></line></svg><span data-v-90d7282b>Click to view full receipt</span></div></div><div class="receipt-btn-row" data-v-90d7282b><a${ssrRenderAttr("href", order.paymentReceipt)} target="_blank" class="btn-receipt-view" data-v-90d7282b> ↗ Open Original </a>`);
						if (order.paymentStatus !== "Paid") _push(`<button class="btn-approve-payment-direct" data-v-90d7282b> ✓ Approve &amp; Mark Paid </button>`);
						else _push(`<!---->`);
						_push(`</div></div>`);
					} else _push(`<div class="admin-no-receipt" data-v-90d7282b><div class="no-receipt-icon" data-v-90d7282b>⏳</div><p class="no-receipt-msg" data-v-90d7282b>No payment receipt uploaded yet by customer.</p><span class="no-receipt-hint" data-v-90d7282b>Awaiting transfer screenshot</span></div>`);
					_push(`</div><div class="details-section" data-v-90d7282b><h4 class="details-title" data-v-90d7282b>PURCHASED PIECES</h4><div class="details-items-list" data-v-90d7282b><!--[-->`);
					ssrRenderList(order.items, (item) => {
						_push(`<div class="details-item" data-v-90d7282b><div class="item-img-placeholder" data-v-90d7282b><span class="color-indicator" style="${ssrRenderStyle({ backgroundColor: getColorHex(item.color || "black") })}" data-v-90d7282b></span></div><div class="item-details" data-v-90d7282b><span class="item-name" data-v-90d7282b>${ssrInterpolate(item.name)}</span><span class="item-meta" data-v-90d7282b>Color: ${ssrInterpolate(item.color || "N/A")} | Qty: ${ssrInterpolate(item.qty)}</span></div><div class="item-pricing" data-v-90d7282b><span class="item-qty-price" data-v-90d7282b>${ssrInterpolate(item.qty)} × ${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(item.price.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span><span class="item-total-price" data-v-90d7282b>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate((item.qty * item.price).toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div></div>`);
					});
					_push(`<!--]--></div><div class="order-total-bar" data-v-90d7282b><span class="total-label" data-v-90d7282b>SUBTOTAL</span><span class="total-val" data-v-90d7282b>${ssrInterpolate(currencySymbol.value)}${ssrInterpolate(order.total.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</span></div></div></div></td></tr>`);
				} else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></tbody></table></div></div>`);
			ssrRenderTeleport(_push, (_push) => {
				if (activeReceiptModal.value) _push(`<div class="receipt-modal-backdrop" data-v-90d7282b><div class="receipt-modal-card" data-v-90d7282b><div class="receipt-modal-header" data-v-90d7282b><div class="receipt-modal-title-group" data-v-90d7282b><span class="receipt-modal-badge" data-v-90d7282b>PROOF OF PAYMENT</span><h3 class="receipt-modal-title" data-v-90d7282b>Verified Bank Transfer Slip</h3></div><button class="receipt-modal-close" title="Close" data-v-90d7282b>✕</button></div><div class="receipt-modal-body" data-v-90d7282b><img${ssrRenderAttr("src", activeReceiptModal.value)} alt="Payment Receipt" class="receipt-modal-img" data-v-90d7282b></div><div class="receipt-modal-footer" data-v-90d7282b><a${ssrRenderAttr("href", activeReceiptModal.value)} target="_blank" download class="btn-receipt-download" data-v-90d7282b> ⬇ Download Full Image </a><button class="btn-receipt-dismiss" data-v-90d7282b> Close Preview </button></div></div></div>`);
				else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var orders_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-90d7282b"]]);

export { orders_default as default };
//# sourceMappingURL=orders-D0muP450.mjs.map

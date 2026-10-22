import { c as useHead$1, u as useCookie } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, computed, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/admin/customers.vue
var _sfc_main = {
	__name: "customers",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Clients Directory | TZORAH EMPORIUM Admin",
			meta: [{
				name: "description",
				content: "Customer relationship manager and account profiles directory."
			}]
		});
		useCookie("adminToken");
		const adminCustomers = ref([]);
		const loading = ref(true);
		const searchQuery = ref("");
		const currentTab = ref("all");
		const selectedCustomer = ref(null);
		const totalClientsCount = computed(() => adminCustomers.value.length);
		const registeredClientsCount = computed(() => adminCustomers.value.filter((c) => c.isRegistered !== false).length);
		const adminUsersCount = computed(() => adminCustomers.value.filter((c) => c.is_admin).length);
		const vipClientsCount = computed(() => adminCustomers.value.filter((c) => (Number(c.totalSpend) || 0) >= 15e4).length);
		const totalRevenue = computed(() => {
			return adminCustomers.value.reduce((sum, c) => sum + (Number(c.totalSpend) || 0), 0);
		});
		const totalOrdersCount = computed(() => {
			return adminCustomers.value.reduce((sum, c) => sum + (Number(c.orderCount) || 0), 0);
		});
		const getVIPStatusLabel = (spend = 0) => {
			const amount = Number(spend) || 0;
			if (amount >= 5e5) return "VIP BLACK";
			if (amount >= 15e4) return "PLATINUM";
			if (amount > 0) return "GOLD";
			return "NEW CLIENT";
		};
		const getStatusClass = (spend = 0) => {
			const amount = Number(spend) || 0;
			if (amount >= 5e5) return "status-vip-black";
			if (amount >= 15e4) return "status-vip-plat";
			if (amount > 0) return "status-vip-gold";
			return "status-new-client";
		};
		const getVIPBadgeBg = (spend = 0) => {
			const amount = Number(spend) || 0;
			if (amount >= 5e5) return "#000000";
			if (amount >= 15e4) return "#334155";
			if (amount > 0) return "#b89874";
			return "rgba(255, 255, 255, 0.08)";
		};
		const formatCurrency = (val = 0) => {
			return "₦" + (Number(val) || 0).toLocaleString("en-US", {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			});
		};
		const roleUpdating = ref(false);
		const toastMessage = ref("");
		const filteredCustomers = computed(() => {
			const query = (searchQuery.value || "").toLowerCase().trim();
			return adminCustomers.value.filter((c) => {
				if (currentTab.value === "registered" && c.isRegistered === false) return false;
				if (currentTab.value === "vip" && (Number(c.totalSpend) || 0) < 15e4) return false;
				if (currentTab.value === "admins" && !c.is_admin) return false;
				if (!query) return true;
				const matchName = (c.name || "").toLowerCase().includes(query);
				const matchEmail = (c.email || "").toLowerCase().includes(query);
				const matchPhone = (c.phone || "").toLowerCase().includes(query);
				return matchName || matchEmail || matchPhone;
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-customers" }, _attrs))} data-v-35710d50><div class="customers-header animate-fade-in" data-v-35710d50><div data-v-35710d50><h1 class="page-title" data-v-35710d50>Client Directory</h1><p class="page-subtitle" data-v-35710d50>View purchase profiles, account metrics, registered users and lifetime values.</p></div><div class="header-actions" data-v-35710d50><button class="${ssrRenderClass([{ "btn-refresh--spinning": loading.value }, "btn-refresh"])}"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} title="Refresh client list" data-v-35710d50><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-35710d50><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" data-v-35710d50></path></svg><span data-v-35710d50>${ssrInterpolate(loading.value ? "Updating..." : "Refresh Directory")}</span></button></div></div><div class="stats-overview-grid animate-fade-in" data-v-35710d50><div class="stat-card" data-v-35710d50><span class="stat-card__label" data-v-35710d50>TOTAL CLIENTS</span><span class="stat-card__value font-mono" data-v-35710d50>${ssrInterpolate(totalClientsCount.value)}</span><span class="stat-card__sub" data-v-35710d50>${ssrInterpolate(registeredClientsCount.value)} registered accounts</span></div><div class="stat-card" data-v-35710d50><span class="stat-card__label" data-v-35710d50>TOTAL ORDERS</span><span class="stat-card__value font-mono" data-v-35710d50>${ssrInterpolate(totalOrdersCount.value)}</span><span class="stat-card__sub" data-v-35710d50>Across all registered &amp; guest clients</span></div><div class="stat-card" data-v-35710d50><span class="stat-card__label" data-v-35710d50>TOTAL REVENUE</span><span class="stat-card__value font-mono text-gold" data-v-35710d50>${ssrInterpolate(formatCurrency(totalRevenue.value))}</span><span class="stat-card__sub" data-v-35710d50>Aggregate lifetime spend</span></div><div class="stat-card" data-v-35710d50><span class="stat-card__label" data-v-35710d50>VIP MEMBERS</span><span class="stat-card__value font-mono" data-v-35710d50>${ssrInterpolate(vipClientsCount.value)}</span><span class="stat-card__sub" data-v-35710d50>Gold, Platinum &amp; VIP Black</span></div></div><div class="filters-bar animate-fade-in" data-v-35710d50><div class="filter-tabs" data-v-35710d50><button class="${ssrRenderClass([{ "filter-tab--active": currentTab.value === "all" }, "filter-tab"])}" data-v-35710d50> All (${ssrInterpolate(adminCustomers.value.length)}) </button><button class="${ssrRenderClass([{ "filter-tab--active": currentTab.value === "registered" }, "filter-tab"])}" data-v-35710d50> Registered Accounts (${ssrInterpolate(registeredClientsCount.value)}) </button><button class="${ssrRenderClass([{ "filter-tab--active": currentTab.value === "vip" }, "filter-tab"])}" data-v-35710d50> VIPs (${ssrInterpolate(vipClientsCount.value)}) </button><button class="${ssrRenderClass([{ "filter-tab--active": currentTab.value === "admins" }, "filter-tab"])}" data-v-35710d50> Administrators (${ssrInterpolate(adminUsersCount.value)}) </button></div><div class="search-wrapper" data-v-35710d50><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon" data-v-35710d50><circle cx="11" cy="11" r="8" data-v-35710d50></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-35710d50></line></svg><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search clients by name, email, phone..." class="search-input" data-v-35710d50>`);
			if (searchQuery.value) _push(`<button class="search-clear" title="Clear search" data-v-35710d50>✕</button>`);
			else _push(`<!---->`);
			_push(`</div></div><div class="dashboard-grid animate-fade-in" data-v-35710d50><div class="admin-card span-8" data-v-35710d50><div class="card-header-row" data-v-35710d50><h2 class="admin-card-title" data-v-35710d50>CLIENT REGISTRY</h2><span class="results-count-badge" data-v-35710d50>${ssrInterpolate(filteredCustomers.value.length)} ${ssrInterpolate(filteredCustomers.value.length === 1 ? "client" : "clients")} shown</span></div><div class="table-responsive" data-v-35710d50><table class="admin-table" data-v-35710d50><thead data-v-35710d50><tr data-v-35710d50><th data-v-35710d50>CLIENT</th><th data-v-35710d50>MEMBER SINCE</th><th data-v-35710d50>ORDERS</th><th data-v-35710d50>TOTAL SPEND</th><th data-v-35710d50>STATUS</th></tr></thead><tbody data-v-35710d50>`);
			if (loading.value && adminCustomers.value.length === 0) _push(`<tr data-v-35710d50><td colspan="5" class="text-center-cell" data-v-35710d50>Loading clients directory...</td></tr>`);
			else if (filteredCustomers.value.length === 0) _push(`<tr data-v-35710d50><td colspan="5" class="text-center-cell" data-v-35710d50> No clients found matching &quot;${ssrInterpolate(searchQuery.value || currentTab.value)}&quot;. </td></tr>`);
			else _push(`<!---->`);
			_push(`<!--[-->`);
			ssrRenderList(filteredCustomers.value, (customer) => {
				_push(`<tr class="${ssrRenderClass(["table-row clickable-row", { "row-selected": selectedCustomer.value?.id === customer.id }])}" data-v-35710d50><td data-v-35710d50><div class="client-cell" data-v-35710d50><span class="client-avatar" data-v-35710d50>${ssrInterpolate((customer.name || "C").charAt(0).toUpperCase())}</span><div class="client-details" data-v-35710d50><div class="client-name-row" data-v-35710d50><span class="client-name" data-v-35710d50>${ssrInterpolate(customer.name)}</span>`);
				if (customer.is_admin) _push(`<span class="badge-role badge-role--admin" data-v-35710d50>ADMIN</span>`);
				else if (customer.isRegistered === false) _push(`<span class="badge-role badge-role--guest" data-v-35710d50>GUEST</span>`);
				else _push(`<span class="badge-role badge-role--client" data-v-35710d50>CLIENT</span>`);
				_push(`</div><span class="client-email" data-v-35710d50>${ssrInterpolate(customer.email)}</span>`);
				if (customer.phone) _push(`<span class="client-phone font-mono" data-v-35710d50>${ssrInterpolate(customer.phone)}</span>`);
				else _push(`<!---->`);
				_push(`</div></div></td><td class="font-mono text-muted" data-v-35710d50>${ssrInterpolate(customer.joinDate)}</td><td class="font-mono" data-v-35710d50>${ssrInterpolate(customer.orderCount)}</td><td class="font-semibold text-white" data-v-35710d50>${ssrInterpolate(formatCurrency(customer.totalSpend))}</td><td data-v-35710d50><span class="${ssrRenderClass(["badge-status", getStatusClass(customer.totalSpend)])}" data-v-35710d50>${ssrInterpolate(getVIPStatusLabel(customer.totalSpend))}</span></td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div><div class="admin-card span-4 detail-sidebar-card" data-v-35710d50><h2 class="admin-card-title" data-v-35710d50>CLIENT PROFILE CARD</h2>`);
			if (!selectedCustomer.value) _push(`<div class="empty-profile-state" data-v-35710d50><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="profile-icon-placeholder" data-v-35710d50><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-35710d50></path><circle cx="12" cy="7" r="4" data-v-35710d50></circle></svg><p data-v-35710d50>Select a client from the registry list to review their lifetime value history, transactions and profile metrics.</p></div>`);
			else {
				_push(`<div class="profile-card-content" data-v-35710d50><div class="profile-avatar-large" data-v-35710d50>${ssrInterpolate((selectedCustomer.value.name || "C").charAt(0).toUpperCase())}</div><h3 class="profile-name-title" data-v-35710d50>${ssrInterpolate(selectedCustomer.value.name)}</h3><p class="profile-email-sub" data-v-35710d50>${ssrInterpolate(selectedCustomer.value.email)}</p><div class="profile-badges-row" data-v-35710d50><span class="profile-badge-vip" style="${ssrRenderStyle({ backgroundColor: getVIPBadgeBg(selectedCustomer.value.totalSpend) })}" data-v-35710d50>${ssrInterpolate(getVIPStatusLabel(selectedCustomer.value.totalSpend))}</span>`);
				if (selectedCustomer.value.is_admin) _push(`<span class="badge-role badge-role--admin" data-v-35710d50>ADMIN ACCESS</span>`);
				else if (selectedCustomer.value.isRegistered === false) _push(`<span class="badge-role badge-role--guest" data-v-35710d50>GUEST CHECKOUT</span>`);
				else _push(`<span class="badge-role badge-role--client" data-v-35710d50>REGISTERED CLIENT</span>`);
				_push(`</div>`);
				if (selectedCustomer.value.phone || selectedCustomer.value.shippingAddress) {
					_push(`<div class="profile-contact-box" data-v-35710d50>`);
					if (selectedCustomer.value.phone) _push(`<div class="contact-row" data-v-35710d50><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-35710d50><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-35710d50></path></svg><span data-v-35710d50>${ssrInterpolate(selectedCustomer.value.phone)}</span></div>`);
					else _push(`<!---->`);
					if (selectedCustomer.value.shippingAddress) _push(`<div class="contact-row" data-v-35710d50><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-35710d50><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-35710d50></path><circle cx="12" cy="10" r="3" data-v-35710d50></circle></svg><span data-v-35710d50>${ssrInterpolate(selectedCustomer.value.shippingAddress)}</span></div>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`<div class="customer-actions-group" data-v-35710d50>`);
				if (selectedCustomer.value.isRegistered !== false) {
					_push(`<button class="${ssrRenderClass([{ "btn-customer-action--revoke": selectedCustomer.value.is_admin }, "btn-customer-action btn-customer-action--role"])}"${ssrIncludeBooleanAttr(roleUpdating.value) ? " disabled" : ""} data-v-35710d50>`);
					if (!selectedCustomer.value.is_admin) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-35710d50><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-35710d50></path></svg>`);
					else _push(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-35710d50><circle cx="12" cy="12" r="10" data-v-35710d50></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" data-v-35710d50></line></svg>`);
					_push(` ${ssrInterpolate(roleUpdating.value ? "Updating..." : selectedCustomer.value.is_admin ? "Revoke Admin Privileges" : "Promote to Admin")}</button>`);
				} else _push(`<!---->`);
				_push(`<div class="action-buttons-inline" data-v-35710d50><a${ssrRenderAttr("href", `mailto:${selectedCustomer.value.email}`)} class="btn-customer-action btn-customer-action--secondary" title="Email Client" data-v-35710d50><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-35710d50><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-35710d50></path><polyline points="22,6 12,13 2,6" data-v-35710d50></polyline></svg> Email </a>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/admin/orders",
					class: "btn-customer-action btn-customer-action--secondary",
					title: "Manage Orders"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-35710d50${_scopeId}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-35710d50${_scopeId}></path><line x1="3" y1="6" x2="21" y2="6" data-v-35710d50${_scopeId}></line><path d="M16 10a4 4 0 0 1-8 0" data-v-35710d50${_scopeId}></path></svg> Orders `);
						else return [(openBlock(), createBlock("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "13",
							height: "13",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2"
						}, [
							createVNode("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
							createVNode("line", {
								x1: "3",
								y1: "6",
								x2: "21",
								y2: "6"
							}),
							createVNode("path", { d: "M16 10a4 4 0 0 1-8 0" })
						])), createTextVNode(" Orders ")];
					}),
					_: 1
				}, _parent));
				_push(`</div></div><div class="profile-divider" data-v-35710d50></div><div class="metrics-grid" data-v-35710d50><div class="metric-item" data-v-35710d50><span class="metric-label" data-v-35710d50>LIFETIME ORDERS</span><span class="metric-value font-mono" data-v-35710d50>${ssrInterpolate(selectedCustomer.value.orderCount)}</span></div><div class="metric-item" data-v-35710d50><span class="metric-label" data-v-35710d50>TOTAL SPENT</span><span class="metric-value font-mono text-gold" data-v-35710d50>${ssrInterpolate(formatCurrency(selectedCustomer.value.totalSpend))}</span></div><div class="metric-item" data-v-35710d50><span class="metric-label" data-v-35710d50>AVERAGE ORDER</span><span class="metric-value font-mono" data-v-35710d50>${ssrInterpolate(formatCurrency((Number(selectedCustomer.value.totalSpend) || 0) / (Number(selectedCustomer.value.orderCount) || 1)))}</span></div><div class="metric-item" data-v-35710d50><span class="metric-label" data-v-35710d50>MEMBER SINCE</span><span class="metric-value font-mono" data-v-35710d50>${ssrInterpolate(selectedCustomer.value.joinDate)}</span></div></div><div class="profile-divider" data-v-35710d50></div><div class="profile-extra-details" data-v-35710d50><h4 class="details-section-title" data-v-35710d50>RECENT ACTIVITY &amp; ORDERS</h4>`);
				if (selectedCustomer.value.recentOrders && selectedCustomer.value.recentOrders.length > 0) {
					_push(`<div class="activity-timeline" data-v-35710d50><!--[-->`);
					ssrRenderList(selectedCustomer.value.recentOrders, (order) => {
						_push(`<div class="timeline-event" data-v-35710d50><span class="timeline-dot" data-v-35710d50></span><div class="timeline-info" data-v-35710d50><span class="event-title" data-v-35710d50>Order #${ssrInterpolate(order.id)} — ${ssrInterpolate(formatCurrency(order.total))}</span><span class="event-time" data-v-35710d50>${ssrInterpolate(order.date)} • ${ssrInterpolate(order.status)}</span></div></div>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<div class="empty-activity-note" data-v-35710d50><span data-v-35710d50>No orders registered under this client email yet.</span></div>`);
				_push(`</div></div>`);
			}
			_push(`</div></div>`);
			if (toastMessage.value) _push(`<div class="toast-popup animate-fade-in" data-v-35710d50>${ssrInterpolate(toastMessage.value)}</div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/customers.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var customers_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-35710d50"]]);

export { customers_default as default };
//# sourceMappingURL=customers-CxJi5T8T.mjs.map

import { c as useHead$1, u as useCookie } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/pages/admin/dashboard.vue
var _sfc_main = {
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Executive Dashboard | TZORAH EMPORIUM Admin",
			meta: [{
				name: "description",
				content: "TZORAH EMPORIUM administrative panel dashboard overview."
			}]
		});
		useCookie("adminToken");
		const dashboardData = ref(null);
		ref(true);
		const refreshing = ref(false);
		const kpis = ref([
			{
				label: "TOTAL REVENUE",
				value: "₦0.00",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
				change: "+14.2%",
				trendUp: true,
				color: "#b89874"
			},
			{
				label: "TOTAL ORDERS",
				value: "0",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/></svg>",
				change: "+8.4%",
				trendUp: true,
				color: "#3b82f6"
			},
			{
				label: "ACTIVE PRODUCTS",
				value: "0",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"/><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"/><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"/></svg>",
				change: "0.0%",
				trendUp: true,
				color: "#10b981"
			},
			{
				label: "REGISTERED CLIENTS",
				value: "0",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>",
				change: "+18.7%",
				trendUp: true,
				color: "#8b5cf6"
			}
		]);
		const recentOrders = computed(() => {
			if (!dashboardData.value?.latest_orders) return [];
			return dashboardData.value.latest_orders.map((o) => ({
				id: `EK-${o.id}`,
				customer: o.customer_name || "Customer",
				email: o.email,
				date: new Date(o.created_at).toISOString().split("T")[0],
				itemCount: o.items?.length || 0,
				total: parseFloat(o.total_price || 0),
				status: o.status || "Pending"
			}));
		});
		const topProducts = computed(() => dashboardData.value?.top_products || []);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-dashboard" }, _attrs))} data-v-2b66c3db><div class="dashboard-header animate-fade-in" data-v-2b66c3db><div data-v-2b66c3db><h1 class="page-title" data-v-2b66c3db>Executive Summary</h1><p class="page-subtitle" data-v-2b66c3db>Real-time store performance and key indicators.</p></div><div class="header-actions" data-v-2b66c3db><button class="${ssrRenderClass([{ "refreshing": refreshing.value }, "btn-refresh"])}" data-v-2b66c3db><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="refresh-icon" data-v-2b66c3db><path d="M23 4v6h-6" data-v-2b66c3db></path><path d="M1 20v-6h6" data-v-2b66c3db></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" data-v-2b66c3db></path></svg> Sync Data </button></div></div><div class="kpi-grid animate-fade-in" data-v-2b66c3db><!--[-->`);
			ssrRenderList(kpis.value, (kpi) => {
				_push(`<div class="kpi-card" data-v-2b66c3db><div class="kpi-card__header" data-v-2b66c3db><span class="kpi-card__label" data-v-2b66c3db>${ssrInterpolate(kpi.label)}</span><span class="kpi-card__icon" style="${ssrRenderStyle({ color: kpi.color })}" data-v-2b66c3db>${kpi.icon ?? ""}</span></div><div class="kpi-card__value" data-v-2b66c3db>${ssrInterpolate(kpi.value)}</div><div class="kpi-card__footer" data-v-2b66c3db><span class="${ssrRenderClass([kpi.trendUp ? "trend-up" : "trend-down", "kpi-card__trend"])}" data-v-2b66c3db>`);
				if (kpi.trendUp) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2b66c3db><polyline points="18 15 12 9 6 15" data-v-2b66c3db></polyline></svg>`);
				else _push(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2b66c3db><polyline points="6 9 12 15 18 9" data-v-2b66c3db></polyline></svg>`);
				_push(` ${ssrInterpolate(kpi.change)}</span><span class="kpi-card__period" data-v-2b66c3db>vs last month</span></div></div>`);
			});
			_push(`<!--]--></div><div class="dashboard-grid animate-fade-in" data-v-2b66c3db><div class="admin-card span-8" data-v-2b66c3db><div class="card-header-flex" data-v-2b66c3db><h2 class="admin-card-title" data-v-2b66c3db>REVENUE PERFORMANCE OVERVIEW</h2><div class="chart-legend" data-v-2b66c3db><span class="legend-item" data-v-2b66c3db><span class="legend-dot bg-gold" data-v-2b66c3db></span>This Year</span><span class="legend-item" data-v-2b66c3db><span class="legend-dot bg-muted" data-v-2b66c3db></span>Last Year</span></div></div><div class="revenue-chart-container" data-v-2b66c3db><svg viewBox="0 0 600 200" class="revenue-svg" data-v-2b66c3db><defs data-v-2b66c3db><linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1" data-v-2b66c3db><stop offset="0%" stop-color="#b89874" stop-opacity="0.25" data-v-2b66c3db></stop><stop offset="100%" stop-color="#b89874" stop-opacity="0.0" data-v-2b66c3db></stop></linearGradient></defs><line x1="40" y1="20" x2="580" y2="20" stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" data-v-2b66c3db></line><line x1="40" y1="65" x2="580" y2="65" stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" data-v-2b66c3db></line><line x1="40" y1="110" x2="580" y2="110" stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" data-v-2b66c3db></line><line x1="40" y1="155" x2="580" y2="155" stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" data-v-2b66c3db></line><line x1="40" y1="170" x2="580" y2="170" stroke="rgba(255,255,255,0.08)" data-v-2b66c3db></line><text x="15" y="25" class="chart-text" data-v-2b66c3db>₦30k</text><text x="15" y="70" class="chart-text" data-v-2b66c3db>₦20k</text><text x="15" y="115" class="chart-text" data-v-2b66c3db>₦10k</text><text x="15" y="158" class="chart-text" data-v-2b66c3db>₦0k</text><path d="M 50,150 L 100,140 L 150,130 L 200,145 L 250,110 L 300,115 L 350,90 L 400,110 L 450,85 L 500,80 L 550,60 L 580,45" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="5 3" data-v-2b66c3db></path><path d="M 50,130 L 100,105 L 150,120 L 200,95 L 250,75 L 300,60 L 350,80 L 400,50 L 450,30 L 500,45 L 550,20 L 580,15 L 580,170 L 50,170 Z" fill="url(#chart-glow)" data-v-2b66c3db></path><path d="M 50,130 L 100,105 L 150,120 L 200,95 L 250,75 L 300,60 L 350,80 L 400,50 L 450,30 L 500,45 L 550,20 L 580,15" fill="none" stroke="#b89874" stroke-width="2.5" stroke-linecap="round" data-v-2b66c3db></path><circle cx="450" cy="30" r="5" fill="#b89874" stroke="#111111" stroke-width="2" data-v-2b66c3db></circle><circle cx="550" cy="20" r="5" fill="#b89874" stroke="#111111" stroke-width="2" data-v-2b66c3db></circle><text x="50" y="190" class="chart-text text-center" data-v-2b66c3db>JAN</text><text x="150" y="190" class="chart-text text-center" data-v-2b66c3db>MAR</text><text x="250" y="190" class="chart-text text-center" data-v-2b66c3db>MAY</text><text x="350" y="190" class="chart-text text-center" data-v-2b66c3db>JUL</text><text x="450" y="190" class="chart-text text-center" data-v-2b66c3db>SEP</text><text x="550" y="190" class="chart-text text-center" data-v-2b66c3db>NOV</text></svg></div></div><div class="admin-card span-4" data-v-2b66c3db><h2 class="admin-card-title" data-v-2b66c3db>QUICK OPERATIONS</h2><div class="quick-actions-list" data-v-2b66c3db>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/admin/products",
				class: "quick-action-btn"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="action-icon bg-gold-low" data-v-2b66c3db${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b89874" stroke-width="2" data-v-2b66c3db${_scopeId}><line x1="12" y1="5" x2="12" y2="19" data-v-2b66c3db${_scopeId}></line><line x1="5" y1="12" x2="19" y2="12" data-v-2b66c3db${_scopeId}></line></svg></span><div class="action-details" data-v-2b66c3db${_scopeId}><span class="action-title" data-v-2b66c3db${_scopeId}>Create New Product</span><span class="action-desc" data-v-2b66c3db${_scopeId}>Add a item to storefront catalogue</span></div>`);
					else return [createVNode("span", { class: "action-icon bg-gold-low" }, [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "#b89874",
						"stroke-width": "2"
					}, [createVNode("line", {
						x1: "12",
						y1: "5",
						x2: "12",
						y2: "19"
					}), createVNode("line", {
						x1: "5",
						y1: "12",
						x2: "19",
						y2: "12"
					})]))]), createVNode("div", { class: "action-details" }, [createVNode("span", { class: "action-title" }, "Create New Product"), createVNode("span", { class: "action-desc" }, "Add a item to storefront catalogue")])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/admin/orders",
				class: "quick-action-btn"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="action-icon bg-blue-low" data-v-2b66c3db${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" data-v-2b66c3db${_scopeId}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-2b66c3db${_scopeId}></path><polyline points="14 2 14 8 20 8" data-v-2b66c3db${_scopeId}></polyline></svg></span><div class="action-details" data-v-2b66c3db${_scopeId}><span class="action-title" data-v-2b66c3db${_scopeId}>Manage Live Orders</span><span class="action-desc" data-v-2b66c3db${_scopeId}>Review, process &amp; ship orders</span></div>`);
					else return [createVNode("span", { class: "action-icon bg-blue-low" }, [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "#3b82f6",
						"stroke-width": "2"
					}, [createVNode("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), createVNode("polyline", { points: "14 2 14 8 20 8" })]))]), createVNode("div", { class: "action-details" }, [createVNode("span", { class: "action-title" }, "Manage Live Orders"), createVNode("span", { class: "action-desc" }, "Review, process & ship orders")])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/admin/settings",
				class: "quick-action-btn"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="action-icon bg-grey-low" data-v-2b66c3db${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" stroke-width="2" data-v-2b66c3db${_scopeId}><circle cx="12" cy="12" r="3" data-v-2b66c3db${_scopeId}></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" data-v-2b66c3db${_scopeId}></path></svg></span><div class="action-details" data-v-2b66c3db${_scopeId}><span class="action-title" data-v-2b66c3db${_scopeId}>Adjust Store Settings</span><span class="action-desc" data-v-2b66c3db${_scopeId}>Update headers, delivery, info</span></div>`);
					else return [createVNode("span", { class: "action-icon bg-grey-low" }, [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "#a1a1aa",
						"stroke-width": "2"
					}, [createVNode("circle", {
						cx: "12",
						cy: "12",
						r: "3"
					}), createVNode("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })]))]), createVNode("div", { class: "action-details" }, [createVNode("span", { class: "action-title" }, "Adjust Store Settings"), createVNode("span", { class: "action-desc" }, "Update headers, delivery, info")])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="dashboard-grid animate-fade-in pt-2" data-v-2b66c3db><div class="admin-card span-8" data-v-2b66c3db><div class="card-header-flex" data-v-2b66c3db><h2 class="admin-card-title" data-v-2b66c3db>RECENT SALES ORDERS</h2>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/admin/orders",
				class: "view-all-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`View All Orders →`);
					else return [createTextVNode("View All Orders →")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="table-responsive" data-v-2b66c3db><table class="admin-table" data-v-2b66c3db><thead data-v-2b66c3db><tr data-v-2b66c3db><th data-v-2b66c3db>ORDER ID</th><th data-v-2b66c3db>CUSTOMER</th><th data-v-2b66c3db>DATE</th><th data-v-2b66c3db>ITEMS</th><th data-v-2b66c3db>TOTAL</th><th data-v-2b66c3db>STATUS</th></tr></thead><tbody data-v-2b66c3db><!--[-->`);
			ssrRenderList(unref(recentOrders), (order) => {
				_push(`<tr class="table-row" data-v-2b66c3db><td class="font-mono text-gold" data-v-2b66c3db>${ssrInterpolate(order.id)}</td><td data-v-2b66c3db><div class="customer-cell" data-v-2b66c3db><span class="customer-avatar" data-v-2b66c3db>${ssrInterpolate(order.customer.charAt(0))}</span><div class="customer-details" data-v-2b66c3db><span class="customer-name" data-v-2b66c3db>${ssrInterpolate(order.customer)}</span><span class="customer-email" data-v-2b66c3db>${ssrInterpolate(order.email)}</span></div></div></td><td data-v-2b66c3db>${ssrInterpolate(order.date)}</td><td data-v-2b66c3db>${ssrInterpolate(order.itemCount)} items</td><td class="font-semibold text-white" data-v-2b66c3db>₦${ssrInterpolate(order.total.toLocaleString("en-US", { minimumFractionDigits: 2 }))}</td><td data-v-2b66c3db><span class="${ssrRenderClass(["badge-status", "badge-" + order.status.toLowerCase()])}" data-v-2b66c3db>${ssrInterpolate(order.status)}</span></td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div><div class="admin-card span-4" data-v-2b66c3db><div class="card-header-flex" data-v-2b66c3db><h2 class="admin-card-title" data-v-2b66c3db>TOP SELLING PRODUCTS</h2></div><div class="top-products-list" data-v-2b66c3db><!--[-->`);
			ssrRenderList(unref(topProducts), (product, idx) => {
				_push(`<div class="top-product-item" data-v-2b66c3db><span class="rank-badge" data-v-2b66c3db>${ssrInterpolate(idx + 1)}</span><div class="product-item-img" data-v-2b66c3db><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} data-v-2b66c3db></div><div class="product-item-info" data-v-2b66c3db><span class="product-item-name" data-v-2b66c3db>${ssrInterpolate(product.name)}</span><span class="product-item-sales" data-v-2b66c3db>${ssrInterpolate(product.salesCount)} Sold</span></div><div class="product-item-revenue" data-v-2b66c3db>₦${ssrInterpolate(product.revenue.toLocaleString())}</div></div>`);
			});
			_push(`<!--]--></div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-2b66c3db"]]);

export { dashboard_default as default };
//# sourceMappingURL=dashboard-D5TUYWR1.mjs.map

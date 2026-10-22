import { c as useHead$1, u as useCookie } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/admin/analytics.vue
var _sfc_main = {
	__name: "analytics",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Analytics & Reports | TZORAH EMPORIUM Admin",
			meta: [{
				name: "description",
				content: "Store performance metrics, financial breakdowns and acquisition analytics."
			}]
		});
		const selectedTimeframe = ref("30d");
		const timeframeLabel = computed(() => {
			return {
				"7d": "Last 7 Days Index",
				"30d": "Last 30 Days Index",
				"12m": "Fiscal 12-Month Curve",
				"ytd": "Year To Date Metrics"
			}[selectedTimeframe.value];
		});
		const revenueAreaPath = computed(() => {
			if (selectedTimeframe.value === "7d") return "M 50,190 L 130,170 L 220,185 L 310,130 L 400,140 L 490,95 L 580,60 L 580,210 L 50,210 Z";
			return "M 50,180 L 130,140 L 220,90 L 310,130 L 400,60 L 490,80 L 580,30 L 580,210 L 50,210 Z";
		});
		const revenueLinePath = computed(() => {
			if (selectedTimeframe.value === "7d") return "M 50,190 L 130,170 L 220,185 L 310,130 L 400,140 L 490,95 L 580,60";
			return "M 50,180 L 130,140 L 220,90 L 310,130 L 400,60 L 490,80 L 580,30";
		});
		useCookie("adminToken");
		ref(true);
		const performanceStats = ref([
			{
				label: "GROSS MERCHANDISE VALUE",
				value: "₦0.00",
				change: "+14.2%",
				up: true
			},
			{
				label: "AVERAGE BASKET SIZE",
				value: "₦0.00",
				change: "+2.1%",
				up: true
			},
			{
				label: "TOTAL ORDERS LOGGED",
				value: "0",
				change: "+8.4%",
				up: true
			},
			{
				label: "CHECKOUT CONVERSION",
				value: "3.12%",
				change: "+0.4%",
				up: true
			}
		]);
		const trafficChannels = ref([
			{
				source: "Direct Access",
				pct: 42,
				color: "#b89874"
			},
			{
				source: "Instagram / Organic Social",
				pct: 31,
				color: "#a1805c"
			},
			{
				source: "Newsletter Campaign",
				pct: 15,
				color: "#4b5563"
			},
			{
				source: "Search Referrals (Google)",
				pct: 12,
				color: "#27272a"
			}
		]);
		const leaderboardProducts = ref([]);
		const sortedLeaderboard = computed(() => {
			return [...leaderboardProducts.value].sort((a, b) => b.revenue - a.revenue);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-analytics" }, _attrs))} data-v-504aba8b><div class="analytics-header animate-fade-in" data-v-504aba8b><div data-v-504aba8b><h1 class="page-title" data-v-504aba8b>Business Analytics</h1><p class="page-subtitle" data-v-504aba8b>Granular store performance metrics, revenue logs, and sales ratios.</p></div><div class="analytics-filters" data-v-504aba8b><select class="filter-select" data-v-504aba8b><option value="7d" data-v-504aba8b${ssrIncludeBooleanAttr(Array.isArray(selectedTimeframe.value) ? ssrLooseContain(selectedTimeframe.value, "7d") : ssrLooseEqual(selectedTimeframe.value, "7d")) ? " selected" : ""}>LAST 7 DAYS</option><option value="30d" data-v-504aba8b${ssrIncludeBooleanAttr(Array.isArray(selectedTimeframe.value) ? ssrLooseContain(selectedTimeframe.value, "30d") : ssrLooseEqual(selectedTimeframe.value, "30d")) ? " selected" : ""}>LAST 30 DAYS</option><option value="12m" data-v-504aba8b${ssrIncludeBooleanAttr(Array.isArray(selectedTimeframe.value) ? ssrLooseContain(selectedTimeframe.value, "12m") : ssrLooseEqual(selectedTimeframe.value, "12m")) ? " selected" : ""}>LAST 12 MONTHS</option><option value="ytd" data-v-504aba8b${ssrIncludeBooleanAttr(Array.isArray(selectedTimeframe.value) ? ssrLooseContain(selectedTimeframe.value, "ytd") : ssrLooseEqual(selectedTimeframe.value, "ytd")) ? " selected" : ""}>YEAR TO DATE</option></select></div></div><div class="kpi-row animate-fade-in" data-v-504aba8b><!--[-->`);
			ssrRenderList(performanceStats.value, (stat) => {
				_push(`<div class="mini-stat-card" data-v-504aba8b><span class="stat-label" data-v-504aba8b>${ssrInterpolate(stat.label)}</span><span class="stat-value font-mono" data-v-504aba8b>${ssrInterpolate(stat.value)}</span><span class="${ssrRenderClass(["stat-change", stat.up ? "change-up" : "change-down"])}" data-v-504aba8b>${ssrInterpolate(stat.change)}</span></div>`);
			});
			_push(`<!--]--></div><div class="dashboard-grid animate-fade-in" data-v-504aba8b><div class="admin-card span-8" data-v-504aba8b><div class="card-header-flex" data-v-504aba8b><h2 class="admin-card-title" data-v-504aba8b>NET REVENUE INDEX</h2><span class="badge-timeframe" data-v-504aba8b>${ssrInterpolate(timeframeLabel.value)}</span></div><div class="chart-container" data-v-504aba8b><svg viewBox="0 0 600 240" class="analytics-svg" data-v-504aba8b><defs data-v-504aba8b><linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1" data-v-504aba8b><stop offset="0%" stop-color="#b89874" stop-opacity="0.3" data-v-504aba8b></stop><stop offset="100%" stop-color="#b89874" stop-opacity="0.0" data-v-504aba8b></stop></linearGradient></defs><line x1="40" y1="20" x2="580" y2="20" stroke="rgba(255,255,255,0.03)" data-v-504aba8b></line><line x1="40" y1="70" x2="580" y2="70" stroke="rgba(255,255,255,0.03)" data-v-504aba8b></line><line x1="40" y1="120" x2="580" y2="120" stroke="rgba(255,255,255,0.03)" data-v-504aba8b></line><line x1="40" y1="170" x2="580" y2="170" stroke="rgba(255,255,255,0.03)" data-v-504aba8b></line><line x1="40" y1="210" x2="580" y2="210" stroke="rgba(255,255,255,0.08)" data-v-504aba8b></line><text x="15" y="24" class="axis-lbl" data-v-504aba8b>₦50k</text><text x="15" y="74" class="axis-lbl" data-v-504aba8b>₦35k</text><text x="15" y="124" class="axis-lbl" data-v-504aba8b>₦20k</text><text x="15" y="174" class="axis-lbl" data-v-504aba8b>₦5k</text><path${ssrRenderAttr("d", revenueAreaPath.value)} fill="url(#area-gradient)" data-v-504aba8b></path><path${ssrRenderAttr("d", revenueLinePath.value)} fill="none" stroke="#b89874" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-504aba8b></path><circle cx="130" cy="140" r="4" fill="#b89874" stroke="#111111" stroke-width="1.5" data-v-504aba8b></circle><circle cx="220" cy="90" r="4" fill="#b89874" stroke="#111111" stroke-width="1.5" data-v-504aba8b></circle><circle cx="310" cy="130" r="4" fill="#b89874" stroke="#111111" stroke-width="1.5" data-v-504aba8b></circle><circle cx="400" cy="60" r="4" fill="#b89874" stroke="#111111" stroke-width="1.5" data-v-504aba8b></circle><circle cx="490" cy="80" r="4" fill="#b89874" stroke="#111111" stroke-width="1.5" data-v-504aba8b></circle><circle cx="580" cy="30" r="4" fill="#b89874" stroke="#111111" stroke-width="1.5" data-v-504aba8b></circle><text x="40" y="230" class="axis-lbl text-center" data-v-504aba8b>JAN</text><text x="130" y="230" class="axis-lbl text-center" data-v-504aba8b>MAR</text><text x="220" y="230" class="axis-lbl text-center" data-v-504aba8b>MAY</text><text x="310" y="230" class="axis-lbl text-center" data-v-504aba8b>JUL</text><text x="400" y="230" class="axis-lbl text-center" data-v-504aba8b>SEP</text><text x="490" y="230" class="axis-lbl text-center" data-v-504aba8b>NOV</text><text x="580" y="230" class="axis-lbl text-center" data-v-504aba8b>DEC</text></svg></div></div><div class="admin-card span-4" data-v-504aba8b><h2 class="admin-card-title" data-v-504aba8b>CATEGORY DEMAND SHARE</h2><div class="donut-container" data-v-504aba8b><svg viewBox="0 0 200 200" class="donut-svg" data-v-504aba8b><circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="15" data-v-504aba8b></circle><circle cx="100" cy="100" r="70" fill="none" stroke="#b89874" stroke-width="15" stroke-dasharray="153.9 439.8" stroke-dashoffset="0" stroke-linecap="round" data-v-504aba8b></circle><circle cx="100" cy="100" r="70" fill="none" stroke="#d4d4d8" stroke-width="15" stroke-dasharray="110 439.8" stroke-dashoffset="-153.9" stroke-linecap="round" data-v-504aba8b></circle><circle cx="100" cy="100" r="70" fill="none" stroke="#4b5563" stroke-width="15" stroke-dasharray="88 439.8" stroke-dashoffset="-263.9" stroke-linecap="round" data-v-504aba8b></circle><circle cx="100" cy="100" r="70" fill="none" stroke="#27272a" stroke-width="15" stroke-dasharray="88 439.8" stroke-dashoffset="-351.9" stroke-linecap="round" data-v-504aba8b></circle><text x="100" y="98" text-anchor="middle" class="donut-mid-val font-mono" data-v-504aba8b>14.6K</text><text x="100" y="115" text-anchor="middle" class="donut-mid-lbl" data-v-504aba8b>ITEMS SOLD</text></svg></div><div class="legend-list" data-v-504aba8b><div class="legend-row" data-v-504aba8b><span class="legend-color-dot" style="${ssrRenderStyle({ "background-color": "#b89874" })}" data-v-504aba8b></span><span class="legend-cat" data-v-504aba8b>T-Shirts</span><span class="legend-pct font-mono" data-v-504aba8b>35%</span></div><div class="legend-row" data-v-504aba8b><span class="legend-color-dot" style="${ssrRenderStyle({ "background-color": "#d4d4d8" })}" data-v-504aba8b></span><span class="legend-cat" data-v-504aba8b>Hoodies</span><span class="legend-pct font-mono" data-v-504aba8b>25%</span></div><div class="legend-row" data-v-504aba8b><span class="legend-color-dot" style="${ssrRenderStyle({ "background-color": "#4b5563" })}" data-v-504aba8b></span><span class="legend-cat" data-v-504aba8b>Accessories</span><span class="legend-pct font-mono" data-v-504aba8b>20%</span></div><div class="legend-row" data-v-504aba8b><span class="legend-color-dot" style="${ssrRenderStyle({ "background-color": "#27272a" })}" data-v-504aba8b></span><span class="legend-cat" data-v-504aba8b>Others</span><span class="legend-pct font-mono" data-v-504aba8b>20%</span></div></div></div></div><div class="dashboard-grid animate-fade-in pt-2" data-v-504aba8b><div class="admin-card span-5" data-v-504aba8b><h2 class="admin-card-title" data-v-504aba8b>ACQUISITION SOURCE SHARES</h2><div class="channels-list" data-v-504aba8b><!--[-->`);
			ssrRenderList(trafficChannels.value, (channel) => {
				_push(`<div class="channel-bar-row" data-v-504aba8b><div class="channel-info-row" data-v-504aba8b><span class="channel-name" data-v-504aba8b>${ssrInterpolate(channel.source)}</span><span class="channel-value font-mono" data-v-504aba8b>${ssrInterpolate(channel.pct)}%</span></div><div class="channel-progress-track" data-v-504aba8b><div class="channel-progress-fill" style="${ssrRenderStyle({
					width: channel.pct + "%",
					backgroundColor: channel.color
				})}" data-v-504aba8b></div></div></div>`);
			});
			_push(`<!--]--></div></div><div class="admin-card span-7" data-v-504aba8b><h2 class="admin-card-title" data-v-504aba8b>PRODUCT VOLUME PERFORMANCE LOG</h2><div class="table-responsive" data-v-504aba8b><table class="admin-table" data-v-504aba8b><thead data-v-504aba8b><tr data-v-504aba8b><th data-v-504aba8b>PRODUCT</th><th data-v-504aba8b>UNITS SOLD</th><th data-v-504aba8b>CONVERSION RATIO</th><th data-v-504aba8b>GROSS REVENUE</th></tr></thead><tbody data-v-504aba8b><!--[-->`);
			ssrRenderList(sortedLeaderboard.value, (prod) => {
				_push(`<tr class="table-row" data-v-504aba8b><td class="product-leader-cell" data-v-504aba8b><span class="leader-name" data-v-504aba8b>${ssrInterpolate(prod.name)}</span><span class="leader-cat" data-v-504aba8b>${ssrInterpolate(prod.category)}</span></td><td class="font-mono" data-v-504aba8b>${ssrInterpolate(prod.salesCount)} pcs</td><td class="font-mono" data-v-504aba8b>${ssrInterpolate(prod.conversion)}%</td><td class="font-semibold text-white font-mono" data-v-504aba8b>₦${ssrInterpolate(prod.revenue.toLocaleString())}.00</td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/analytics.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var analytics_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-504aba8b"]]);

export { analytics_default as default };
//# sourceMappingURL=analytics-BYzzM5xU.mjs.map

import { c as useHead$1, b as useAuth, u as useCookie, a as useState } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { u as useWishlist } from './useWishlist-BbbQGVvs.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, watch, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

//#region app/pages/profile.vue
var _sfc_main = {
	__name: "profile",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "My Account | TZORAH EMPORIUM",
			meta: [{
				name: "description",
				content: "Manage your TZORAH EMPORIUM account, orders, wishlist and settings."
			}]
		});
		const route = useRoute();
		const { currentUser} = useAuth();
		useCookie("userToken");
		useState("cartCount", () => 0);
		useState("cartItems", () => []);
		useState("toasts", () => []);
		const tabs = [
			{
				id: "overview",
				label: "Overview",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></svg>"
			},
			{
				id: "orders",
				label: "Orders",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></svg>"
			},
			{
				id: "wishlist",
				label: "Wishlist",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/></svg>"
			},
			{
				id: "settings",
				label: "Settings",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg>"
			}
		];
		const activeTab = ref(route.query.tab && tabs.some((t) => t.id === route.query.tab) ? String(route.query.tab) : "overview");
		watch(() => route.query.tab, (newTab) => {
			if (newTab && tabs.some((t) => t.id === newTab)) activeTab.value = String(newTab);
		});
		const user = ref({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			memberSince: "",
			isAdmin: false,
			address: {
				street: "",
				city: "",
				state: "",
				country: "Nigeria"
			}
		});
		const syncUser = () => {
			if (currentUser.value) {
				user.value.firstName = currentUser.value.firstName || "";
				user.value.lastName = currentUser.value.lastName || "";
				user.value.email = currentUser.value.email || "";
				user.value.memberSince = currentUser.value.memberSince || "";
				user.value.isAdmin = currentUser.value.isAdmin || false;
			}
		};
		watch(currentUser, syncUser, { immediate: true });
		const userInitials = computed(() => {
			return ((user.value.firstName?.[0] || "U") + (user.value.lastName?.[0] || "")).toUpperCase();
		});
		const orders = ref([]);
		const ordersLoading = ref(true);
		const selectedOrder = ref(null);
		const orderFilters = [
			{
				key: "all",
				label: "All"
			},
			{
				key: "Pending",
				label: "Pending"
			},
			{
				key: "Processing",
				label: "Processing"
			},
			{
				key: "Delivered",
				label: "Delivered"
			}
		];
		const orderFilter = ref("all");
		const filteredOrders = computed(() => {
			if (orderFilter.value === "all") return orders.value;
			return orders.value.filter((o) => o.status === orderFilter.value);
		});
		const deliveredCount = computed(() => orders.value.filter((o) => o.status === "Delivered").length);
		const isClearingOrders = ref(false);
		const showClearOrdersModal = ref(false);
		const orderToDelete = ref(null);
		const { wishlistItems} = useWishlist();
		const passwords = ref({
			current: "",
			new: "",
			confirm: ""
		});
		const notifPrefs = ref([
			{
				id: "order",
				title: "Order Updates",
				desc: "Shipping & delivery notifications",
				enabled: true
			},
			{
				id: "promo",
				title: "Promotions",
				desc: "Exclusive offers and discounts",
				enabled: true
			},
			{
				id: "new",
				title: "New Arrivals",
				desc: "First to know about new drops",
				enabled: false
			},
			{
				id: "loyalty",
				title: "Loyalty Rewards",
				desc: "Points and tier updates",
				enabled: true
			}
		]);
		const formatDate = (dateStr) => {
			if (!dateStr) return "";
			return new Date(dateStr).toLocaleDateString("en-GB", {
				day: "numeric",
				month: "long",
				year: "numeric"
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-page" }, _attrs))} data-v-d3f9cf38><div class="profile-hero" data-v-d3f9cf38><div class="profile-hero__bg" data-v-d3f9cf38></div><div class="profile-hero__content container" data-v-d3f9cf38><div class="profile-avatar-wrap" data-v-d3f9cf38><div class="profile-avatar" data-v-d3f9cf38><span class="profile-avatar__initials" data-v-d3f9cf38>${ssrInterpolate(userInitials.value)}</span></div><button class="profile-avatar__edit" title="Edit profile" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3f9cf38><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" data-v-d3f9cf38></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" data-v-d3f9cf38></path></svg></button></div><div class="profile-hero__info" data-v-d3f9cf38><h1 class="profile-hero__name" data-v-d3f9cf38>${ssrInterpolate(user.value.firstName)} ${ssrInterpolate(user.value.lastName)}</h1><p class="profile-hero__email" data-v-d3f9cf38>${ssrInterpolate(user.value.email)}</p><div class="profile-hero__meta" data-v-d3f9cf38><span class="profile-member-badge" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" data-v-d3f9cf38><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-d3f9cf38></path></svg> ELITE MEMBER </span><span class="profile-hero__since" data-v-d3f9cf38>Member since ${ssrInterpolate(user.value.memberSince)}</span></div></div><div class="profile-stats" data-v-d3f9cf38><div class="profile-stat" data-v-d3f9cf38><span class="profile-stat__num" data-v-d3f9cf38>${ssrInterpolate(orders.value.length)}</span><span class="profile-stat__label" data-v-d3f9cf38>Orders</span></div><div class="profile-stat__divider" data-v-d3f9cf38></div><div class="profile-stat" data-v-d3f9cf38><span class="profile-stat__num" data-v-d3f9cf38>${ssrInterpolate(unref(wishlistItems).length)}</span><span class="profile-stat__label" data-v-d3f9cf38>Wishlist</span></div><div class="profile-stat__divider" data-v-d3f9cf38></div><div class="profile-stat" data-v-d3f9cf38><span class="profile-stat__num" data-v-d3f9cf38>${ssrInterpolate(deliveredCount.value)}</span><span class="profile-stat__label" data-v-d3f9cf38>Delivered</span></div></div></div></div><div class="profile-tabs-bar" data-v-d3f9cf38><div class="container" data-v-d3f9cf38><div class="profile-tabs" data-v-d3f9cf38><!--[-->`);
			ssrRenderList(tabs, (tab) => {
				_push(`<button class="${ssrRenderClass(["profile-tab", { "profile-tab--active": activeTab.value === tab.id }])}" data-v-d3f9cf38><span class="profile-tab__icon" data-v-d3f9cf38>${tab.icon ?? ""}</span> ${ssrInterpolate(tab.label)} `);
				if (tab.id === "orders" && orders.value.length) _push(`<span class="profile-tab__badge" data-v-d3f9cf38>${ssrInterpolate(orders.value.length)}</span>`);
				else _push(`<!---->`);
				_push(`</button>`);
			});
			_push(`<!--]--></div></div></div><main class="container profile-main" data-v-d3f9cf38>`);
			if (activeTab.value === "overview") {
				_push(`<div class="tab-content" data-v-d3f9cf38><div class="welcome-banner" data-v-d3f9cf38><div class="welcome-banner__text" data-v-d3f9cf38><h2 data-v-d3f9cf38>Welcome back, ${ssrInterpolate(user.value.firstName)}! 👋</h2><p data-v-d3f9cf38>Here&#39;s a snapshot of your TZORAH EMPORIUM account.</p></div>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/shop",
					class: "welcome-banner__cta"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`SHOP NEW ARRIVALS →`);
						else return [createTextVNode("SHOP NEW ARRIVALS →")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
				if (user.value.isAdmin) {
					_push(`<div class="admin-banner" data-v-d3f9cf38><div class="admin-banner__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3f9cf38><rect x="3" y="3" width="7" height="7" data-v-d3f9cf38></rect><rect x="14" y="3" width="7" height="7" data-v-d3f9cf38></rect><rect x="14" y="14" width="7" height="7" data-v-d3f9cf38></rect><rect x="3" y="14" width="7" height="7" data-v-d3f9cf38></rect></svg></div><div class="admin-banner__text" data-v-d3f9cf38><span class="admin-banner__label" data-v-d3f9cf38>ADMIN ACCESS</span><p data-v-d3f9cf38>You have administrator privileges. Access the full management console to manage products, orders, and customers.</p></div>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/admin/dashboard",
						class: "admin-banner__btn"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`OPEN ADMIN CONSOLE →`);
							else return [createTextVNode("OPEN ADMIN CONSOLE →")];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`<section class="profile-section" data-v-d3f9cf38><div class="profile-section__header" data-v-d3f9cf38><h3 data-v-d3f9cf38>Recent Orders</h3><button class="section-view-all" data-v-d3f9cf38>VIEW ALL</button></div>`);
				if (ordersLoading.value) {
					_push(`<div class="orders-loading" data-v-d3f9cf38><!--[-->`);
					ssrRenderList(3, (i) => {
						_push(`<div class="skeleton-row" data-v-d3f9cf38></div>`);
					});
					_push(`<!--]--></div>`);
				} else if (orders.value.length === 0) {
					_push(`<div class="empty-state" data-v-d3f9cf38><div class="empty-state__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-d3f9cf38><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-d3f9cf38></path><line x1="3" y1="6" x2="21" y2="6" data-v-d3f9cf38></line><path d="M16 10a4 4 0 0 1-8 0" data-v-d3f9cf38></path></svg></div><p class="empty-state__title" data-v-d3f9cf38>No orders yet</p><p class="empty-state__sub" data-v-d3f9cf38>Start exploring our collection and place your first order.</p>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/shop",
						class: "empty-state__cta"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`SHOP NOW`);
							else return [createTextVNode("SHOP NOW")];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else {
					_push(`<div class="orders-list" data-v-d3f9cf38><!--[-->`);
					ssrRenderList(orders.value.slice(0, 3), (order) => {
						_push(`<div class="order-row" data-v-d3f9cf38><div class="order-row__img" data-v-d3f9cf38>`);
						if (order.items?.[0]?.product?.image) _push(`<img${ssrRenderAttr("src", order.items[0].product.image)}${ssrRenderAttr("alt", order.items[0].product.name)} data-v-d3f9cf38>`);
						else _push(`<div class="order-row__img-placeholder" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4" data-v-d3f9cf38><rect x="3" y="3" width="18" height="18" rx="2" data-v-d3f9cf38></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-d3f9cf38></circle><path d="m21 15-5-5L5 21" data-v-d3f9cf38></path></svg></div>`);
						_push(`</div><div class="order-row__info" data-v-d3f9cf38><p class="order-row__name" data-v-d3f9cf38>${ssrInterpolate(order.items?.[0]?.product?.name || "Order")} `);
						if (order.items?.length > 1) _push(`<span class="order-row__more" data-v-d3f9cf38>+${ssrInterpolate(order.items.length - 1)} more</span>`);
						else _push(`<!---->`);
						_push(`</p><p class="order-row__meta" data-v-d3f9cf38>Order #${ssrInterpolate(order.id)} · ${ssrInterpolate(formatDate(order.created_at))}</p></div><div class="order-row__right" data-v-d3f9cf38><span class="${ssrRenderClass(["order-status", `order-status--${order.status.toLowerCase()}`])}" data-v-d3f9cf38>${ssrInterpolate(order.status)}</span><p class="order-row__price" data-v-d3f9cf38>₦${ssrInterpolate(Number(order.total_price).toLocaleString())}</p></div></div>`);
					});
					_push(`<!--]--></div>`);
				}
				_push(`</section><section class="profile-section" data-v-d3f9cf38><div class="profile-section__header" data-v-d3f9cf38><h3 data-v-d3f9cf38>Wishlist</h3><button class="section-view-all" data-v-d3f9cf38>VIEW ALL</button></div>`);
				if (unref(wishlistItems).length === 0) {
					_push(`<div class="wishlist-empty-inline" data-v-d3f9cf38><p data-v-d3f9cf38>Your wishlist is empty. `);
					_push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Browse the collection →`);
							else return [createTextVNode("Browse the collection →")];
						}),
						_: 1
					}, _parent));
					_push(`</p></div>`);
				} else {
					_push(`<div class="wishlist-preview-grid" data-v-d3f9cf38><!--[-->`);
					ssrRenderList(unref(wishlistItems).slice(0, 4), (item) => {
						_push(`<div class="wishlist-card" data-v-d3f9cf38><div class="wishlist-card__img" data-v-d3f9cf38><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-d3f9cf38></div><p class="wishlist-card__name" data-v-d3f9cf38>${ssrInterpolate(item.name)}</p><p class="wishlist-card__price" data-v-d3f9cf38>${ssrInterpolate(item.priceFormatted || "₦" + Number(item.price || 0).toLocaleString())}</p><button class="wishlist-card__add" data-v-d3f9cf38>ADD TO BAG</button></div>`);
					});
					_push(`<!--]--></div>`);
				}
				_push(`</section><section class="account-cards" data-v-d3f9cf38><div class="account-card" data-v-d3f9cf38><div class="account-card__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-d3f9cf38></path><circle cx="12" cy="7" r="4" data-v-d3f9cf38></circle></svg></div><div class="account-card__info" data-v-d3f9cf38><p class="account-card__title" data-v-d3f9cf38>Personal Info</p><p class="account-card__sub" data-v-d3f9cf38>Manage name, email &amp; password</p></div><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d3f9cf38><polyline points="9 18 15 12 9 6" data-v-d3f9cf38></polyline></svg></div><div class="account-card" data-v-d3f9cf38><div class="account-card__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-d3f9cf38></path><line x1="3" y1="6" x2="21" y2="6" data-v-d3f9cf38></line><path d="M16 10a4 4 0 0 1-8 0" data-v-d3f9cf38></path></svg></div><div class="account-card__info" data-v-d3f9cf38><p class="account-card__title" data-v-d3f9cf38>Order History</p><p class="account-card__sub" data-v-d3f9cf38>${ssrInterpolate(orders.value.length)} order${ssrInterpolate(orders.value.length !== 1 ? "s" : "")} placed</p></div><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d3f9cf38><polyline points="9 18 15 12 9 6" data-v-d3f9cf38></polyline></svg></div><div class="account-card" data-v-d3f9cf38><div class="account-card__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-d3f9cf38></path></svg></div><div class="account-card__info" data-v-d3f9cf38><p class="account-card__title" data-v-d3f9cf38>Wishlist</p><p class="account-card__sub" data-v-d3f9cf38>${ssrInterpolate(unref(wishlistItems).length)} saved item${ssrInterpolate(unref(wishlistItems).length !== 1 ? "s" : "")}</p></div><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d3f9cf38><polyline points="9 18 15 12 9 6" data-v-d3f9cf38></polyline></svg></div><div class="account-card account-card--danger" data-v-d3f9cf38><div class="account-card__icon account-card__icon--danger" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-v-d3f9cf38></path><polyline points="16 17 21 12 16 7" data-v-d3f9cf38></polyline><line x1="21" y1="12" x2="9" y2="12" data-v-d3f9cf38></line></svg></div><div class="account-card__info" data-v-d3f9cf38><p class="account-card__title" data-v-d3f9cf38>Sign Out</p><p class="account-card__sub" data-v-d3f9cf38>End your current session</p></div><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d3f9cf38><polyline points="9 18 15 12 9 6" data-v-d3f9cf38></polyline></svg></div></section></div>`);
			} else if (activeTab.value === "orders") {
				_push(`<div class="tab-content" data-v-d3f9cf38><div class="profile-section" data-v-d3f9cf38><div class="orders-tab-header" data-v-d3f9cf38><div class="orders-tab-header__left" data-v-d3f9cf38><h3 class="tab-section-title" data-v-d3f9cf38>Order History</h3>`);
				if (orders.value.length > 0) _push(`<span class="orders-count-badge" data-v-d3f9cf38>${ssrInterpolate(orders.value.length)}</span>`);
				else _push(`<!---->`);
				_push(`</div><div class="orders-tab-header__right" data-v-d3f9cf38>`);
				if (orders.value.length > 0) _push(`<button class="btn-clear-history" title="Clear all orders from history" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d3f9cf38><polyline points="3 6 5 6 21 6" data-v-d3f9cf38></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-d3f9cf38></path><line x1="10" y1="11" x2="10" y2="17" data-v-d3f9cf38></line><line x1="14" y1="11" x2="14" y2="17" data-v-d3f9cf38></line></svg><span data-v-d3f9cf38>Clear Order History</span></button>`);
				else _push(`<!---->`);
				_push(`<div class="order-filters" data-v-d3f9cf38><!--[-->`);
				ssrRenderList(orderFilters, (f) => {
					_push(`<button class="${ssrRenderClass(["order-filter-btn", { "order-filter-btn--active": orderFilter.value === f.key }])}" data-v-d3f9cf38>${ssrInterpolate(f.label)}</button>`);
				});
				_push(`<!--]--></div></div></div>`);
				if (ordersLoading.value) {
					_push(`<div class="orders-loading" data-v-d3f9cf38><!--[-->`);
					ssrRenderList(4, (i) => {
						_push(`<div class="skeleton-card" data-v-d3f9cf38></div>`);
					});
					_push(`<!--]--></div>`);
				} else if (filteredOrders.value.length === 0) {
					_push(`<div class="empty-state" data-v-d3f9cf38><div class="empty-state__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-d3f9cf38><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-d3f9cf38></path><line x1="3" y1="6" x2="21" y2="6" data-v-d3f9cf38></line><path d="M16 10a4 4 0 0 1-8 0" data-v-d3f9cf38></path></svg></div><p class="empty-state__title" data-v-d3f9cf38>No orders found</p><p class="empty-state__sub" data-v-d3f9cf38>You haven&#39;t placed any ${ssrInterpolate(orderFilter.value !== "all" ? orderFilter.value.toLowerCase() : "")} orders yet.</p>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/shop",
						class: "empty-state__cta"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`SHOP NOW`);
							else return [createTextVNode("SHOP NOW")];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else {
					_push(`<div class="orders-full-list" data-v-d3f9cf38><!--[-->`);
					ssrRenderList(filteredOrders.value, (order) => {
						_push(`<div class="order-card" data-v-d3f9cf38><div class="order-card__header" data-v-d3f9cf38><div class="order-card__header-left" data-v-d3f9cf38><p class="order-card__id" data-v-d3f9cf38>Order #${ssrInterpolate(order.id)}</p><p class="order-card__date" data-v-d3f9cf38>${ssrInterpolate(formatDate(order.created_at))}</p></div><div class="order-card__header-right" data-v-d3f9cf38><span class="${ssrRenderClass(["order-status", `order-status--${order.status.toLowerCase()}`])}" data-v-d3f9cf38>${ssrInterpolate(order.status)}</span><span class="${ssrRenderClass(["payment-badge", order.payment_status === "Paid" ? "payment-badge--paid" : "payment-badge--unpaid"])}" data-v-d3f9cf38>${ssrInterpolate(order.payment_status === "Paid" ? "✓ PAID & CONFIRMED" : "⏳ PENDING ADMIN VERIFICATION")}</span><button class="btn-order-delete" title="Remove this order from history" aria-label="Remove order from history" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d3f9cf38><polyline points="3 6 5 6 21 6" data-v-d3f9cf38></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-d3f9cf38></path></svg></button></div></div><div class="order-card__body" data-v-d3f9cf38><!--[-->`);
						ssrRenderList(order.items, (item) => {
							_push(`<div class="order-card__item" data-v-d3f9cf38><div class="order-card__img-wrap" data-v-d3f9cf38>`);
							if (item.product?.image) _push(`<img${ssrRenderAttr("src", item.product.image)}${ssrRenderAttr("alt", item.product.name)} class="order-card__img" data-v-d3f9cf38>`);
							else _push(`<div class="order-card__img-placeholder" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" data-v-d3f9cf38><rect x="3" y="3" width="18" height="18" rx="2" data-v-d3f9cf38></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-d3f9cf38></circle><path d="m21 15-5-5L5 21" data-v-d3f9cf38></path></svg></div>`);
							_push(`</div><div class="order-card__item-info" data-v-d3f9cf38><p class="order-card__item-name" data-v-d3f9cf38>${ssrInterpolate(item.product?.name || "Product")}</p><p class="order-card__item-meta" data-v-d3f9cf38>Qty: ${ssrInterpolate(item.quantity)} · ₦${ssrInterpolate(Number(item.unit_price).toLocaleString())} each</p></div><p class="order-card__price" data-v-d3f9cf38>₦${ssrInterpolate((item.quantity * item.unit_price).toLocaleString())}</p></div>`);
						});
						_push(`<!--]--></div><div class="order-card__footer" data-v-d3f9cf38><div class="order-card__shipping" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d3f9cf38><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-d3f9cf38></path><circle cx="12" cy="10" r="3" data-v-d3f9cf38></circle></svg> ${ssrInterpolate(order.shipping_address)}</div><div class="order-card__footer-right" data-v-d3f9cf38>`);
						if (order.payment_receipt) _push(`<div class="order-receipt-pill order-receipt-pill--uploaded" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" data-v-d3f9cf38><polyline points="20 6 9 17 4 12" data-v-d3f9cf38></polyline></svg><span data-v-d3f9cf38>Proof of Payment Attached</span><a${ssrRenderAttr("href", order.payment_receipt)} target="_blank" class="receipt-pill-link" data-v-d3f9cf38>View</a></div>`);
						else if (order.payment_status !== "Paid") _push(`<div class="order-receipt-action" data-v-d3f9cf38><label class="btn-profile-upload-receipt" data-v-d3f9cf38><input type="file" accept="image/*,application/pdf" class="hidden-file-input" data-v-d3f9cf38><span data-v-d3f9cf38>📸 Upload Receipt</span></label></div>`);
						else _push(`<!---->`);
						_push(`<div class="order-card__total-row" data-v-d3f9cf38><span class="order-card__total-label" data-v-d3f9cf38>Total</span><span class="order-card__total" data-v-d3f9cf38>₦${ssrInterpolate(Number(order.total_price).toLocaleString())}</span></div></div></div></div>`);
					});
					_push(`<!--]--></div>`);
				}
				_push(`</div></div>`);
			} else if (activeTab.value === "wishlist") {
				_push(`<div class="tab-content" data-v-d3f9cf38><div class="profile-section" data-v-d3f9cf38><h3 class="tab-section-title" data-v-d3f9cf38>My Wishlist (${ssrInterpolate(unref(wishlistItems).length)})</h3>`);
				if (unref(wishlistItems).length === 0) {
					_push(`<div class="empty-state" data-v-d3f9cf38><div class="empty-state__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-d3f9cf38><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-d3f9cf38></path></svg></div><p class="empty-state__title" data-v-d3f9cf38>Your wishlist is empty</p><p class="empty-state__sub" data-v-d3f9cf38>Save your favourite pieces and find them here anytime.</p>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/shop",
						class: "empty-state__cta"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`BROWSE COLLECTION`);
							else return [createTextVNode("BROWSE COLLECTION")];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else {
					_push(`<div class="wishlist-grid" data-v-d3f9cf38><!--[-->`);
					ssrRenderList(unref(wishlistItems), (item) => {
						_push(`<div class="wishlist-full-card" data-v-d3f9cf38><div class="wishlist-full-card__img" data-v-d3f9cf38><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-d3f9cf38><button class="wishlist-remove" aria-label="Remove" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-d3f9cf38><line x1="18" y1="6" x2="6" y2="18" data-v-d3f9cf38></line><line x1="6" y1="6" x2="18" y2="18" data-v-d3f9cf38></line></svg></button></div><div class="wishlist-full-card__details" data-v-d3f9cf38><p class="wishlist-full-card__name" data-v-d3f9cf38>${ssrInterpolate(item.name)}</p><p class="wishlist-full-card__price" data-v-d3f9cf38>${ssrInterpolate(item.priceFormatted || "₦" + Number(item.price || 0).toLocaleString())}</p><button class="wishlist-full-card__add" data-v-d3f9cf38>ADD TO BAG</button></div></div>`);
					});
					_push(`<!--]--></div>`);
				}
				_push(`</div></div>`);
			} else if (activeTab.value === "settings") {
				_push(`<div class="tab-content" data-v-d3f9cf38><div class="settings-page-header" data-v-d3f9cf38><h2 class="settings-page-title" data-v-d3f9cf38>Account Settings</h2><p class="settings-page-sub" data-v-d3f9cf38>Manage your personal details, addresses and preferences.</p></div><div class="settings-grid" data-v-d3f9cf38><div class="settings-card" data-v-d3f9cf38><div class="settings-card__header" data-v-d3f9cf38><div class="settings-card__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-d3f9cf38></path><circle cx="12" cy="7" r="4" data-v-d3f9cf38></circle></svg></div><div data-v-d3f9cf38><h4 class="settings-card__title" data-v-d3f9cf38>Personal Information</h4><p class="settings-card__sub" data-v-d3f9cf38>Your name, email and contact details</p></div></div><div class="settings-form" data-v-d3f9cf38><div class="settings-form__row" data-v-d3f9cf38><div class="settings-form__group" data-v-d3f9cf38><label for="s-firstname" data-v-d3f9cf38>First Name</label><input id="s-firstname"${ssrRenderAttr("value", user.value.firstName)} type="text" placeholder="First name" autocomplete="given-name" data-v-d3f9cf38></div><div class="settings-form__group" data-v-d3f9cf38><label for="s-lastname" data-v-d3f9cf38>Last Name</label><input id="s-lastname"${ssrRenderAttr("value", user.value.lastName)} type="text" placeholder="Last name" autocomplete="family-name" data-v-d3f9cf38></div></div><div class="settings-form__group" data-v-d3f9cf38><label for="s-email" data-v-d3f9cf38>Email Address</label><input id="s-email"${ssrRenderAttr("value", user.value.email)} type="email" placeholder="you@example.com" autocomplete="email" data-v-d3f9cf38></div><div class="settings-form__group" data-v-d3f9cf38><label for="s-phone" data-v-d3f9cf38>Phone Number</label><input id="s-phone"${ssrRenderAttr("value", user.value.phone)} type="tel" placeholder="+234 800 000 0000" autocomplete="tel" data-v-d3f9cf38></div><button class="settings-save-btn" data-v-d3f9cf38>SAVE CHANGES</button></div></div><div class="settings-card" data-v-d3f9cf38><div class="settings-card__header" data-v-d3f9cf38><div class="settings-card__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-d3f9cf38></path><circle cx="12" cy="10" r="3" data-v-d3f9cf38></circle></svg></div><div data-v-d3f9cf38><h4 class="settings-card__title" data-v-d3f9cf38>Shipping Address</h4><p class="settings-card__sub" data-v-d3f9cf38>Your default delivery location</p></div></div><div class="settings-form" data-v-d3f9cf38><div class="settings-form__group" data-v-d3f9cf38><label for="s-street" data-v-d3f9cf38>Street Address</label><input id="s-street"${ssrRenderAttr("value", user.value.address.street)} type="text" placeholder="123 Fashion Street" autocomplete="street-address" data-v-d3f9cf38></div><div class="settings-form__row" data-v-d3f9cf38><div class="settings-form__group" data-v-d3f9cf38><label for="s-city" data-v-d3f9cf38>City</label><input id="s-city"${ssrRenderAttr("value", user.value.address.city)} type="text" placeholder="Lagos" autocomplete="address-level2" data-v-d3f9cf38></div><div class="settings-form__group" data-v-d3f9cf38><label for="s-state" data-v-d3f9cf38>State</label><input id="s-state"${ssrRenderAttr("value", user.value.address.state)} type="text" placeholder="Lagos State" autocomplete="address-level1" data-v-d3f9cf38></div></div><div class="settings-form__group" data-v-d3f9cf38><label for="s-country" data-v-d3f9cf38>Country</label><input id="s-country"${ssrRenderAttr("value", user.value.address.country)} type="text" placeholder="Nigeria" autocomplete="country-name" data-v-d3f9cf38></div><button class="settings-save-btn" data-v-d3f9cf38>SAVE ADDRESS</button></div></div><div class="settings-card" data-v-d3f9cf38><div class="settings-card__header" data-v-d3f9cf38><div class="settings-card__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-d3f9cf38></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-v-d3f9cf38></path></svg></div><div data-v-d3f9cf38><h4 class="settings-card__title" data-v-d3f9cf38>Change Password</h4><p class="settings-card__sub" data-v-d3f9cf38>Keep your account secure</p></div></div><div class="settings-form" data-v-d3f9cf38><div class="settings-form__group" data-v-d3f9cf38><label for="s-curpass" data-v-d3f9cf38>Current Password</label><input id="s-curpass"${ssrRenderAttr("value", passwords.value.current)} type="password" placeholder="••••••••" autocomplete="current-password" data-v-d3f9cf38></div><div class="settings-form__group" data-v-d3f9cf38><label for="s-newpass" data-v-d3f9cf38>New Password</label><input id="s-newpass"${ssrRenderAttr("value", passwords.value.new)} type="password" placeholder="••••••••" autocomplete="new-password" data-v-d3f9cf38></div><div class="settings-form__group" data-v-d3f9cf38><label for="s-confpass" data-v-d3f9cf38>Confirm New Password</label><input id="s-confpass"${ssrRenderAttr("value", passwords.value.confirm)} type="password" placeholder="••••••••" autocomplete="new-password" data-v-d3f9cf38></div><button class="settings-save-btn" data-v-d3f9cf38>UPDATE PASSWORD</button></div></div><div class="settings-card" data-v-d3f9cf38><div class="settings-card__header" data-v-d3f9cf38><div class="settings-card__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" data-v-d3f9cf38></path><path d="M13.73 21a2 2 0 0 1-3.46 0" data-v-d3f9cf38></path></svg></div><div data-v-d3f9cf38><h4 class="settings-card__title" data-v-d3f9cf38>Notifications</h4><p class="settings-card__sub" data-v-d3f9cf38>Choose what updates you receive</p></div></div><div class="notifications-list" data-v-d3f9cf38><!--[-->`);
				ssrRenderList(notifPrefs.value, (pref) => {
					_push(`<label class="notif-row" data-v-d3f9cf38><div class="notif-row__info" data-v-d3f9cf38><p class="notif-row__title" data-v-d3f9cf38>${ssrInterpolate(pref.title)}</p><p class="notif-row__desc" data-v-d3f9cf38>${ssrInterpolate(pref.desc)}</p></div><div class="${ssrRenderClass(["notif-toggle", { "notif-toggle--on": pref.enabled }])}" data-v-d3f9cf38><div class="notif-toggle__dot" data-v-d3f9cf38></div></div></label>`);
				});
				_push(`<!--]--></div><button class="settings-save-btn settings-save-btn--mt" data-v-d3f9cf38>SAVE PREFERENCES</button></div><div class="settings-card settings-card--danger settings-card--full" data-v-d3f9cf38><div class="settings-card__header" data-v-d3f9cf38><div class="settings-card__icon settings-card__icon--danger" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-v-d3f9cf38><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-v-d3f9cf38></path><polyline points="16 17 21 12 16 7" data-v-d3f9cf38></polyline><line x1="21" y1="12" x2="9" y2="12" data-v-d3f9cf38></line></svg></div><div data-v-d3f9cf38><h4 class="settings-card__title settings-card__title--danger" data-v-d3f9cf38>Account &amp; Data</h4><p class="settings-card__sub" data-v-d3f9cf38>Clear your stored purchase history or end your active session.</p></div></div><div class="settings-danger-btns" data-v-d3f9cf38>`);
				if (orders.value.length > 0) _push(`<button class="danger-btn danger-btn--red" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d3f9cf38><polyline points="3 6 5 6 21 6" data-v-d3f9cf38></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-d3f9cf38></path></svg> CLEAR ORDER HISTORY </button>`);
				else _push(`<!---->`);
				_push(`<button class="danger-btn danger-btn--outline" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d3f9cf38><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-v-d3f9cf38></path><polyline points="16 17 21 12 16 7" data-v-d3f9cf38></polyline><line x1="21" y1="12" x2="9" y2="12" data-v-d3f9cf38></line></svg> SIGN OUT </button></div></div></div></div>`);
			} else _push(`<!---->`);
			_push(`</main>`);
			if (selectedOrder.value) {
				_push(`<div class="modal-overlay" data-v-d3f9cf38><div class="modal-box" data-v-d3f9cf38><div class="modal-header" data-v-d3f9cf38><div data-v-d3f9cf38><p class="modal-title" data-v-d3f9cf38>Order #${ssrInterpolate(selectedOrder.value.id)}</p><p class="modal-date" data-v-d3f9cf38>${ssrInterpolate(formatDate(selectedOrder.value.created_at))}</p></div><button class="modal-close" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-d3f9cf38><line x1="18" y1="6" x2="6" y2="18" data-v-d3f9cf38></line><line x1="6" y1="6" x2="18" y2="18" data-v-d3f9cf38></line></svg></button></div><div class="modal-body" data-v-d3f9cf38><div class="modal-status-row" data-v-d3f9cf38><span class="${ssrRenderClass(["order-status", `order-status--${selectedOrder.value.status.toLowerCase()}`])}" data-v-d3f9cf38>${ssrInterpolate(selectedOrder.value.status)}</span><span class="${ssrRenderClass(["payment-badge", `payment-badge--${selectedOrder.value.payment_status.toLowerCase()}`])}" data-v-d3f9cf38>${ssrInterpolate(selectedOrder.value.payment_status)}</span></div><div class="modal-items" data-v-d3f9cf38><!--[-->`);
				ssrRenderList(selectedOrder.value.items, (item) => {
					_push(`<div class="modal-item" data-v-d3f9cf38><div class="modal-item__img" data-v-d3f9cf38>`);
					if (item.product?.image) _push(`<img${ssrRenderAttr("src", item.product.image)}${ssrRenderAttr("alt", item.product.name)} data-v-d3f9cf38>`);
					else _push(`<div class="modal-item__img-ph" data-v-d3f9cf38></div>`);
					_push(`</div><div class="modal-item__info" data-v-d3f9cf38><p class="modal-item__name" data-v-d3f9cf38>${ssrInterpolate(item.product?.name || "Product")}</p><p class="modal-item__meta" data-v-d3f9cf38>Qty: ${ssrInterpolate(item.quantity)}</p></div><p class="modal-item__price" data-v-d3f9cf38>₦${ssrInterpolate((item.quantity * item.unit_price).toLocaleString())}</p></div>`);
				});
				_push(`<!--]--></div><div class="modal-summary" data-v-d3f9cf38><div class="modal-summary__row" data-v-d3f9cf38><span data-v-d3f9cf38>Shipping to</span><span data-v-d3f9cf38>${ssrInterpolate(selectedOrder.value.shipping_address)}</span></div><div class="modal-summary__row modal-summary__row--total" data-v-d3f9cf38><span data-v-d3f9cf38>Total</span><span data-v-d3f9cf38>₦${ssrInterpolate(Number(selectedOrder.value.total_price).toLocaleString())}</span></div></div></div></div></div>`);
			} else _push(`<!---->`);
			if (showClearOrdersModal.value) {
				_push(`<div class="confirm-modal-overlay" data-v-d3f9cf38><div class="confirm-modal" data-v-d3f9cf38><div class="confirm-modal__icon" data-v-d3f9cf38><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d3f9cf38><polyline points="3 6 5 6 21 6" data-v-d3f9cf38></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-d3f9cf38></path><line x1="10" y1="11" x2="10" y2="17" data-v-d3f9cf38></line><line x1="14" y1="11" x2="14" y2="17" data-v-d3f9cf38></line></svg></div><h3 class="confirm-modal__title" data-v-d3f9cf38>${ssrInterpolate(orderToDelete.value ? `Remove Order #${orderToDelete.value.id}?` : "Clear All Order History?")}</h3><p class="confirm-modal__desc" data-v-d3f9cf38>${ssrInterpolate(orderToDelete.value ? `Are you sure you want to remove Order #${orderToDelete.value.id} from your account history? This action cannot be undone.` : `Are you sure you want to clear all ${orders.value.length} order records from your history? This action cannot be undone.`)}</p><div class="confirm-modal__actions" data-v-d3f9cf38><button class="confirm-modal__btn confirm-modal__btn--cancel"${ssrIncludeBooleanAttr(isClearingOrders.value) ? " disabled" : ""} data-v-d3f9cf38> Cancel </button><button class="confirm-modal__btn confirm-modal__btn--danger"${ssrIncludeBooleanAttr(isClearingOrders.value) ? " disabled" : ""} data-v-d3f9cf38>`);
				if (isClearingOrders.value) _push(`<span data-v-d3f9cf38>Clearing...</span>`);
				else _push(`<span data-v-d3f9cf38>${ssrInterpolate(orderToDelete.value ? "Delete Order" : "Yes, Clear All")}</span>`);
				_push(`</button></div></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var profile_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-d3f9cf38"]]);

export { profile_default as default };
//# sourceMappingURL=profile-CHqO8lV3.mjs.map

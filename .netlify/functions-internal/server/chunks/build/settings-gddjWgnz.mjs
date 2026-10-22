import { c as useHead$1, u as useCookie, a as useState } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CAO1YO6Z.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderDynamicModel } from 'vue/server-renderer';
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

//#region app/pages/admin/settings.vue
var _sfc_main = {
	__name: "settings",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Configuration Settings | TZORAH EMPORIUM Admin",
			meta: [{
				name: "description",
				content: "TZORAH EMPORIUM configuration and portal administration settings."
			}]
		});
		useCookie("adminToken");
		useState("toasts", () => []);
		const settings = ref({
			storeName: "TZORAH EMPORIUM",
			tagline: "Luxury Perfumes, Botanical Oils & Lifestyle Emporium",
			supportEmail: "concierge@tzorahemporium.com",
			telephone: "+234 (0) 800 TZORAH",
			whatsappNumber: "+2348000000000",
			businessHours: "Mon – Fri, 9am – 6pm",
			contactAddress: "Port Harcourt, Rivers State, Nigeria",
			responseTime: "Response within 24 hours",
			freeShippingThreshold: 5e4,
			standardShippingFee: 3500,
			expressShippingFee: 7500,
			currency: "NGN",
			autoApproveOrders: false,
			announcementEnabled: true,
			announcementText: "FREE LUXURY SHIPPING ON ALL ORDERS OVER ₦50,000",
			announcementBg: "#111111",
			bankAccounts: [{
				id: "1",
				bankName: "Guaranty Trust Bank (GTBank)",
				accountNumber: "0123456789",
				accountName: "TZORAH EMPORIUM ENTERPRISES",
				instructions: "Please use your Order ID as the transfer description/reference."
			}],
			videoAdvertEnabled: true,
			videoAdvertBadge: "LIMITED CAMPAIGN • CINEMATIC ADVERT",
			videoAdvertTitle: "THE ALCHEMY OF PURE ESSENCE",
			videoAdvertSubtitle: "Experience Grade-A USA perfume oils and Middle Eastern attars with zero alcohol dilution. Verified batch purity, opulent sillage, and all-day longevity.",
			videoAdvertUrl: "",
			videoAdvertPoster: "/hero_fragrances.jpg",
			videoAdvertButtonText: "DISCOVER THE OILS BAR",
			videoAdvertButtonLink: "/shop?cat=OILS",
			videoAdvertOfferText: "Complimentary Discovery Sample with Every Bottle",
			videoAdvertLoop: true,
			videoAdvertAutoplay: true
		});
		const passcodeForm = ref("tzorah2026");
		const showPasscode = ref(false);
		const saving = ref(false);
		const uploadingVideo = ref(false);
		const uploadingPoster = ref(false);
		ref(null);
		ref(null);
		const isYouTubeOrVimeo = (url) => {
			if (!url) return false;
			const lower = url.toLowerCase();
			return lower.includes("youtube.com") || lower.includes("youtu.be") || lower.includes("vimeo.com");
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-settings" }, _attrs))} data-v-822734de><div class="settings-header animate-fade-in" data-v-822734de><div data-v-822734de><h1 class="page-title" data-v-822734de>Console Settings</h1><p class="page-subtitle" data-v-822734de>Configure site metadata, shipping policies, banner announcements and gates.</p></div></div><form class="settings-grid animate-fade-in" data-v-822734de><div class="admin-card span-6" data-v-822734de><h2 class="admin-card-title" data-v-822734de>GENERAL STORE PROFILE</h2><div class="card-form" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>STORE BRAND NAME</label><input${ssrRenderAttr("value", settings.value.storeName)} type="text" class="form-input" required data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>TAGLINE / HEADER SUBTITLE</label><input${ssrRenderAttr("value", settings.value.tagline)} type="text" class="form-input" required data-v-822734de></div></div></div><div class="admin-card span-6" data-v-822734de><h2 class="admin-card-title" data-v-822734de>CONTACT INFORMATION</h2><p class="admin-card-subtitle" data-v-822734de>These details appear on your homepage contact section and footer.</p><div class="card-form" data-v-822734de><div class="form-row" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>SUPPORT EMAIL</label><input${ssrRenderAttr("value", settings.value.supportEmail)} type="email" class="form-input" data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>STORE TELEPHONE</label><input${ssrRenderAttr("value", settings.value.telephone)} type="text" class="form-input" data-v-822734de></div></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>BUSINESS HOURS</label><input${ssrRenderAttr("value", settings.value.businessHours)} type="text" class="form-input" placeholder="e.g. Mon – Fri, 9am – 6pm" data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>STORE / CONTACT ADDRESS</label><input${ssrRenderAttr("value", settings.value.contactAddress)} type="text" class="form-input" placeholder="e.g. Port Harcourt, Rivers State, Nigeria" data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>RESPONSE TIME MESSAGE</label><input${ssrRenderAttr("value", settings.value.responseTime)} type="text" class="form-input" placeholder="e.g. Response within 24 hours" data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de> WHATSAPP NUMBER <span class="wa-badge" data-v-822734de><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" data-v-822734de><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" data-v-822734de></path></svg> Floating chat button </span></label><input${ssrRenderAttr("value", settings.value.whatsappNumber)} type="text" class="form-input" placeholder="e.g. 2348012345678 (with country code, no +)" data-v-822734de><p class="form-hint" data-v-822734de>Include country code without the + sign. Leave blank to hide the button.</p></div></div></div><div class="admin-card span-6" data-v-822734de><h2 class="admin-card-title" data-v-822734de>DELIVERY &amp; CHECKOUT RULES</h2><div class="card-form" data-v-822734de><div class="form-row" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>FREE SHIPPING THRESHOLD (₦)</label><input${ssrRenderAttr("value", settings.value.freeShippingThreshold)} type="number" min="0" class="form-input" required data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>STANDARD SHIPPING FEE (₦)</label><input${ssrRenderAttr("value", settings.value.standardShippingFee)} type="number" min="0" class="form-input" required data-v-822734de></div></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>EXPRESS SHIPPING FEE (₦)</label><input${ssrRenderAttr("value", settings.value.expressShippingFee)} type="number" min="0" class="form-input" required data-v-822734de><p class="form-hint" data-v-822734de>Charged when a customer selects Express Shipping (2–3 Business Days) at checkout.</p></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>DEFAULT CURRENCY</label><select class="form-input" data-v-822734de><option value="NGN" data-v-822734de${ssrIncludeBooleanAttr(Array.isArray(settings.value.currency) ? ssrLooseContain(settings.value.currency, "NGN") : ssrLooseEqual(settings.value.currency, "NGN")) ? " selected" : ""}>NGN (₦) - Nigerian Naira</option><option value="USD" data-v-822734de${ssrIncludeBooleanAttr(Array.isArray(settings.value.currency) ? ssrLooseContain(settings.value.currency, "USD") : ssrLooseEqual(settings.value.currency, "USD")) ? " selected" : ""}>USD (\$) - United States Dollar</option><option value="EUR" data-v-822734de${ssrIncludeBooleanAttr(Array.isArray(settings.value.currency) ? ssrLooseContain(settings.value.currency, "EUR") : ssrLooseEqual(settings.value.currency, "EUR")) ? " selected" : ""}>EUR (€) - Eurozone Euro</option><option value="GBP" data-v-822734de${ssrIncludeBooleanAttr(Array.isArray(settings.value.currency) ? ssrLooseContain(settings.value.currency, "GBP") : ssrLooseEqual(settings.value.currency, "GBP")) ? " selected" : ""}>GBP (£) - British Pound</option></select></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>FULFILMENT AUTO-APPROVE</label><div class="toggle-wrapper" data-v-822734de><input${ssrIncludeBooleanAttr(Array.isArray(settings.value.autoApproveOrders) ? ssrLooseContain(settings.value.autoApproveOrders, null) : settings.value.autoApproveOrders) ? " checked" : ""} type="checkbox" id="auto-approve-toggle" class="toggle-checkbox" data-v-822734de><label for="auto-approve-toggle" class="toggle-label" data-v-822734de></label><span class="toggle-text" data-v-822734de>Auto-transition incoming orders to &quot;Processing&quot; state</span></div></div></div></div><div class="admin-card span-6" data-v-822734de><h2 class="admin-card-title" data-v-822734de>ANNOUNCEMENT TOP BAR</h2><div class="card-form" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>BANNER STATE</label><div class="toggle-wrapper" data-v-822734de><input${ssrIncludeBooleanAttr(Array.isArray(settings.value.announcementEnabled) ? ssrLooseContain(settings.value.announcementEnabled, null) : settings.value.announcementEnabled) ? " checked" : ""} type="checkbox" id="announcement-toggle" class="toggle-checkbox" data-v-822734de><label for="announcement-toggle" class="toggle-label" data-v-822734de></label><span class="toggle-text" data-v-822734de>Enable and show top announcement bar on storefront pages</span></div></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>ANNOUNCEMENT TEXT MESSAGE</label><input${ssrRenderAttr("value", settings.value.announcementText)} type="text" class="form-input"${ssrIncludeBooleanAttr(!settings.value.announcementEnabled) ? " disabled" : ""} data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>THEME / BACKGROUND BACKGROUND COLOR</label><div class="color-picker-wrapper" data-v-822734de><input${ssrRenderAttr("value", settings.value.announcementBg)} type="color" class="color-picker"${ssrIncludeBooleanAttr(!settings.value.announcementEnabled) ? " disabled" : ""} data-v-822734de><span class="color-hex-val font-mono" data-v-822734de>${ssrInterpolate(settings.value.announcementBg)}</span></div></div></div></div><div class="admin-card span-12" data-v-822734de><div class="card-header-flex" data-v-822734de><div data-v-822734de><h2 class="admin-card-title" data-v-822734de>BANK TRANSFER PAYMENT ACCOUNTS</h2><p class="admin-card-subtitle" data-v-822734de>Manage bank account details provided to customers during checkout.</p></div><button type="button" class="btn-add-bank" data-v-822734de> + ADD BANK ACCOUNT </button></div><div class="bank-accounts-list" data-v-822734de><!--[-->`);
			ssrRenderList(settings.value.bankAccounts, (acc, idx) => {
				_push(`<div class="bank-account-card" data-v-822734de><div class="bank-account-card-header" data-v-822734de><span class="account-badge" data-v-822734de>BANK ACCOUNT #${ssrInterpolate(idx + 1)}</span><button type="button" class="btn-remove-bank" title="Remove account" data-v-822734de> ✕ REMOVE </button></div><div class="card-form" data-v-822734de><div class="form-row" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>BANK NAME</label><input${ssrRenderAttr("value", acc.bankName)} type="text" class="form-input" placeholder="e.g. Guaranty Trust Bank (GTBank)" required data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>ACCOUNT NUMBER</label><input${ssrRenderAttr("value", acc.accountNumber)} type="text" class="form-input font-mono" placeholder="e.g. 0123456789" required data-v-822734de></div></div><div class="form-row" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>ACCOUNT NAME / BENEFICIARY</label><input${ssrRenderAttr("value", acc.accountName)} type="text" class="form-input" placeholder="e.g. TZORAH EMPORIUM ENTERPRISES" required data-v-822734de></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>TRANSFER INSTRUCTIONS / MEMO NOTE</label><input${ssrRenderAttr("value", acc.instructions)} type="text" class="form-input" placeholder="e.g. Use your Order ID as payment description." data-v-822734de></div></div></div></div>`);
			});
			_push(`<!--]--></div></div><div class="admin-card span-12" id="video-advert" data-v-822734de><div class="card-header-flex" data-v-822734de><div data-v-822734de><h2 class="admin-card-title" data-v-822734de>HOMEPAGE PRODUCT VIDEO DISPLAY</h2><p class="admin-card-subtitle" data-v-822734de> Upload a commercial/product showcase video to display on the homepage before the Essentials collection. </p></div><div class="toggle-wrapper" data-v-822734de><input${ssrIncludeBooleanAttr(Array.isArray(settings.value.videoAdvertEnabled) ? ssrLooseContain(settings.value.videoAdvertEnabled, null) : settings.value.videoAdvertEnabled) ? " checked" : ""} type="checkbox" id="video-advert-toggle" class="toggle-checkbox" data-v-822734de><label for="video-advert-toggle" class="toggle-label" data-v-822734de></label><span class="toggle-text" data-v-822734de>${ssrInterpolate(settings.value.videoAdvertEnabled ? "Active on Home Page" : "Hidden from Storefront")}</span></div></div><div class="video-advert-editor-grid" data-v-822734de><div class="card-form" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>UPLOAD VIDEO FILE (MP4, WEBM, MOV)</label><div class="${ssrRenderClass([{ "is-uploading": uploadingVideo.value }, "media-upload-box"])}" data-v-822734de><input type="file" accept="video/mp4,video/webm,video/ogg,video/quicktime,.mp4,.webm,.mov" class="hidden-file-input" data-v-822734de>`);
			if (uploadingVideo.value) _push(`<div class="upload-state" data-v-822734de><span class="spinner" data-v-822734de></span><span data-v-822734de>Uploading video to server...</span></div>`);
			else if (settings.value.videoAdvertUrl) _push(`<div class="upload-has-file" data-v-822734de><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" data-v-822734de><polygon points="23 7 16 12 23 17 23 7" data-v-822734de></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2" data-v-822734de></rect></svg><div class="upload-file-meta" data-v-822734de><span class="upload-file-name font-mono" data-v-822734de>${ssrInterpolate(settings.value.videoAdvertUrl)}</span><span class="upload-change-tip" data-v-822734de>Click here to upload a different video file</span></div></div>`);
			else _push(`<div class="upload-empty" data-v-822734de><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-822734de><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-822734de></path><polyline points="17 8 12 3 7 8" data-v-822734de></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-822734de></line></svg><span data-v-822734de>Click to choose &amp; upload product video file (.mp4, .webm, .mov)</span><span class="upload-sub" data-v-822734de>Recommended: 16:9 or 21:9 ratio commercial video</span></div>`);
			_push(`</div></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>OR DIRECT VIDEO / EMBED URL</label><input${ssrRenderAttr("value", settings.value.videoAdvertUrl)} type="text" class="form-input font-mono" placeholder="e.g. /uploads/media/video.mp4 or YouTube / Vimeo URL" data-v-822734de><p class="form-hint" data-v-822734de>Direct URL to an MP4 video or YouTube / Vimeo link.</p></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>POSTER / THUMBNAIL IMAGE (OPTIONAL)</label><div class="poster-input-row" data-v-822734de><input${ssrRenderAttr("value", settings.value.videoAdvertPoster)} type="text" class="form-input" placeholder="e.g. /hero_fragrances.jpg" data-v-822734de><input type="file" accept="image/*" class="hidden-file-input" data-v-822734de><button type="button" class="btn-upload-poster"${ssrIncludeBooleanAttr(uploadingPoster.value) ? " disabled" : ""} data-v-822734de>`);
			if (uploadingPoster.value) _push(`<span class="spinner" data-v-822734de></span>`);
			else _push(`<span data-v-822734de>UPLOAD IMAGE</span>`);
			_push(`</button></div></div><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>PLAYBACK OPTIONS</label><div class="toggle-wrapper" data-v-822734de><input${ssrIncludeBooleanAttr(Array.isArray(settings.value.videoAdvertLoop) ? ssrLooseContain(settings.value.videoAdvertLoop, null) : settings.value.videoAdvertLoop) ? " checked" : ""} type="checkbox" id="video-loop-toggle" class="toggle-checkbox" data-v-822734de><label for="video-loop-toggle" class="toggle-label" data-v-822734de></label><span class="toggle-text" data-v-822734de>Loop video seamlessly continuously</span></div></div></div><div class="advert-preview-column" data-v-822734de><span class="preview-title-bar" data-v-822734de><span data-v-822734de>✦ LIVE VIDEO PREVIEW</span>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/#product-video-display",
				target: "_blank",
				class: "preview-ext-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` View on Home Page ↗ `);
					else return [createTextVNode(" View on Home Page ↗ ")];
				}),
				_: 1
			}, _parent));
			_push(`</span><div class="preview-mini-banner" data-v-822734de><div class="preview-video-container" data-v-822734de>`);
			if (settings.value.videoAdvertUrl && !isYouTubeOrVimeo(settings.value.videoAdvertUrl)) _push(`<video${ssrRenderAttr("src", settings.value.videoAdvertUrl)}${ssrRenderAttr("poster", settings.value.videoAdvertPoster || "")} class="preview-video" autoplay muted loop playsinline controls data-v-822734de></video>`);
			else if (isYouTubeOrVimeo(settings.value.videoAdvertUrl)) _push(`<div class="preview-embedded-state" data-v-822734de><span data-v-822734de>Embedded Link Configured (YouTube / Vimeo)</span></div>`);
			else _push(`<div class="preview-empty-state" data-v-822734de><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" data-v-822734de><polygon points="5 3 19 12 5 21 5 3" data-v-822734de></polygon></svg><span data-v-822734de>No video uploaded yet</span></div>`);
			_push(`</div></div></div></div></div><div class="admin-card span-6" data-v-822734de><h2 class="admin-card-title" data-v-822734de>ADMIN GATE ACCESS CREDENTIAL</h2><div class="card-form" data-v-822734de><div class="form-group" data-v-822734de><label class="form-label" data-v-822734de>PASSCODE FOR THE AUTH GATE</label><div class="passcode-input-wrapper" data-v-822734de><input${ssrRenderDynamicModel(showPasscode.value ? "text" : "password", passcodeForm.value, null)}${ssrRenderAttr("type", showPasscode.value ? "text" : "password")} class="form-input font-mono" required placeholder="••••••••••••" data-v-822734de><button type="button" class="btn-toggle-pass" data-v-822734de>`);
			if (showPasscode.value) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-822734de><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" data-v-822734de></path><line x1="1" y1="1" x2="23" y2="23" data-v-822734de></line></svg>`);
			else _push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-822734de><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-v-822734de></path><circle cx="12" cy="12" r="3" data-v-822734de></circle></svg>`);
			_push(`</button></div><p class="input-tip" data-v-822734de>Note: Changing this will update the gate authentication passcode instantly.</p></div></div></div><div class="settings-footer span-12" data-v-822734de><button type="submit" class="btn-save"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-822734de>`);
			if (saving.value) _push(`<span class="spinner" data-v-822734de></span>`);
			else _push(`<span data-v-822734de>COMMIT ALL CHANGES</span>`);
			_push(`</button></div></form></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var settings_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-822734de"]]);

export { settings_default as default };
//# sourceMappingURL=settings-gddjWgnz.mjs.map

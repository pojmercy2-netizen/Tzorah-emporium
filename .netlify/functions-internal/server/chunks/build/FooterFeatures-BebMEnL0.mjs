import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/FooterFeatures.vue
var _sfc_main = {
	__name: "FooterFeatures",
	__ssrInlineRender: true,
	setup(__props) {
		const TruckIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [
			h("rect", {
				x: "1",
				y: "3",
				width: "15",
				height: "13",
				rx: "2",
				ry: "2"
			}),
			h("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }),
			h("circle", {
				cx: "5.5",
				cy: "18.5",
				r: "2.5"
			}),
			h("circle", {
				cx: "18.5",
				cy: "18.5",
				r: "2.5"
			})
		]);
		const RotateIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [h("path", { d: "M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" })]);
		const HeadphonesIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [h("path", { d: "M3 18v-6a9 9 0 0 1 18 0v6" }), h("path", { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" })]);
		const LockIcon = () => h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.25",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [h("rect", {
			x: "3",
			y: "11",
			width: "18",
			height: "11",
			rx: "2",
			ry: "2"
		}), h("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })]);
		const footerFeatureList = [
			{
				icon: TruckIcon,
				title: "NATIONWIDE DELIVERY",
				description: "Port Harcourt & across Nigeria"
			},
			{
				icon: RotateIcon,
				title: "EASY RETURNS",
				description: "30-day return policy"
			},
			{
				icon: HeadphonesIcon,
				title: "24/7 SUPPORT",
				description: "We're here to help"
			},
			{
				icon: LockIcon,
				title: "EXCLUSIVE ACCESS",
				description: "Early access to drops"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "footer-features" }, _attrs))} data-v-a473f5a8><div class="container" data-v-a473f5a8><div class="footer-features__grid" data-v-a473f5a8><!--[-->`);
			ssrRenderList(footerFeatureList, (item, idx) => {
				_push(`<div class="footer-features__item" data-v-a473f5a8><div class="footer-features__icon-wrapper" data-v-a473f5a8>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "footer-features__icon" }, null), _parent);
				_push(`</div><div class="footer-features__info" data-v-a473f5a8><h4 class="footer-features__title" data-v-a473f5a8>${ssrInterpolate(item.title)}</h4><p class="footer-features__desc" data-v-a473f5a8>${ssrInterpolate(item.description)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterFeatures.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var FooterFeatures_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-a473f5a8"]]);

export { FooterFeatures_default as F };
//# sourceMappingURL=FooterFeatures-BebMEnL0.mjs.map

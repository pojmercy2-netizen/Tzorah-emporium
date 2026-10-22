import { a as useState } from '../virtual/entry.mjs';
import { computed } from 'vue';

//#region app/composables/useWishlist.ts
var useWishlist = () => {
	const wishlistItems = useState("tzorah_wishlist_items", () => []);
	useState("tzorah_wishlist_loaded", () => false);
	const toasts = useState("toasts", () => []);
	const showToast = (message) => {
		toasts.value.push({
			id: Date.now(),
			message
		});
	};
	const loadWishlist = () => {};
	const isWishlisted = (id) => {
		const targetId = String(id);
		return wishlistItems.value.some((item) => String(item.id) === targetId);
	};
	const toggleWishlist = (product) => {
		if (!product || product.id === void 0 || product.id === null) return;
		const targetId = String(product.id);
		const index = wishlistItems.value.findIndex((item) => String(item.id) === targetId);
		if (index >= 0) {
			const removed = wishlistItems.value.splice(index, 1)[0];
			showToast(`Removed "${removed?.name || "Item"}" from wishlist.`);
		} else {
			const cleanPrice = parseFloat(product.price) || 0;
			const newItem = {
				id: product.id,
				name: product.name || "Product",
				price: cleanPrice,
				priceFormatted: product.priceFormatted || `₦${cleanPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
				image: product.image || "/images/products/perf_usa_1.png",
				category: product.category || product.cat_name || "PERFUMES",
				subcategory: product.subcategory || "",
				size: product.size || "",
				description: product.description || "",
				colors: Array.isArray(product.color) ? product.color : Array.isArray(product.colors) ? product.colors : ["black"]
			};
			wishlistItems.value.unshift(newItem);
			showToast(`Added "${newItem.name}" to wishlist. ❤️`);
		}
	};
	const removeFromWishlist = (id) => {
		const targetId = String(id);
		const index = wishlistItems.value.findIndex((item) => String(item.id) === targetId);
		if (index >= 0) {
			const removed = wishlistItems.value.splice(index, 1)[0];
			showToast(`Removed "${removed?.name || "Item"}" from wishlist.`);
		}
	};
	return {
		wishlistItems,
		wishlistIds: computed(() => wishlistItems.value.map((i) => String(i.id))),
		wishlistCount: computed(() => wishlistItems.value.length),
		isWishlisted,
		toggleWishlist,
		removeFromWishlist,
		loadWishlist
	};
};

export { useWishlist as u };
//# sourceMappingURL=useWishlist-BbbQGVvs.mjs.map

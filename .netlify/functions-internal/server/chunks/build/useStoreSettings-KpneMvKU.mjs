import { a as useState, $ as $fetch$1 } from '../virtual/entry.mjs';

//#region app/composables/useStoreSettings.ts
var useStoreSettings = () => {
	const storeSettings = useState("storeSettings", () => ({
		storeName: "TZORAH EMPORIUM",
		tagline: "The Alchemy of Scents, Pure Oils & Intimate Luxuries",
		supportEmail: "concierge@tzorahemporium.com",
		telephone: "+234 (0) 800 TZORAH",
		whatsappNumber: "",
		businessHours: "Mon – Sat, 9am – 8pm",
		contactAddress: "Port Harcourt, Rivers State, Nigeria",
		responseTime: "Response within 2 hours",
		freeShippingThreshold: 5e4,
		standardShippingFee: 3500,
		expressShippingFee: 7500,
		currency: "NGN",
		autoApproveOrders: true,
		announcementEnabled: true,
		announcementText: "FREE EXPRESS NATIONWIDE SHIPPING ON ORDERS OVER ₦50,000 • 100% AUTHENTIC GUARANTEE",
		announcementBg: "#111111",
		bankAccounts: [{
			id: "1",
			bankName: "Guaranty Trust Bank (GTBank)",
			accountNumber: "0812345678",
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
	}));
	const fetchStoreSettings = async () => {
		try {
			const data = await $fetch$1("/api/v1/settings");
			if (data) storeSettings.value = {
				...storeSettings.value,
				...data
			};
		} catch (err) {
			console.error("Failed to load store settings:", err);
		}
	};
	return {
		storeSettings,
		fetchStoreSettings
	};
};

export { useStoreSettings as u };
//# sourceMappingURL=useStoreSettings-KpneMvKU.mjs.map

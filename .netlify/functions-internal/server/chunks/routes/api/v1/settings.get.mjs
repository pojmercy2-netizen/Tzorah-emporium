import { d as defineEventHandler } from '../../../_/nitro.mjs';
import { q as query } from '../../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pg';

const settings_get = defineEventHandler(async () => {
  const defaults = {
    storeName: "TZORAH EMPORIUM",
    tagline: "The Alchemy of Scents, Pure Oils & Intimate Luxuries",
    supportEmail: "concierge@tzorahemporium.com",
    telephone: "+234 (0) 800 TZORAH",
    whatsappNumber: "+2348000000000",
    businessHours: "Mon \u2013 Sat, 9am \u2013 8pm",
    contactAddress: "Port Harcourt, Rivers State, Nigeria",
    responseTime: "Quick response within 2 hours",
    freeShippingThreshold: 5e4,
    standardShippingFee: 3500,
    expressShippingFee: 7500,
    currency: "NGN",
    autoApproveOrders: true,
    announcementEnabled: true,
    announcementText: "FREE EXPRESS NATIONWIDE SHIPPING ON ORDERS OVER \u20A650,000 \u2022 100% AUTHENTIC GUARANTEE",
    announcementBg: "#111111",
    bankAccounts: [
      {
        id: "1",
        bankName: "Guaranty Trust Bank (GTBank)",
        accountNumber: "0812345678",
        accountName: "TZORAH EMPORIUM ENTERPRISES",
        instructions: "Please use your Order Reference Code as the transaction description."
      }
    ],
    // Video Advert Display Settings
    videoAdvertEnabled: true,
    videoAdvertBadge: "LIMITED CAMPAIGN \u2022 CINEMATIC ADVERT",
    videoAdvertTitle: "THE ALCHEMY OF PURE ESSENCE",
    videoAdvertSubtitle: "Experience Grade-A USA perfume oils and Middle Eastern attars with zero alcohol dilution. Verified batch purity, opulent sillage, and all-day longevity.",
    videoAdvertUrl: "",
    videoAdvertPoster: "/hero_fragrances.jpg",
    videoAdvertButtonText: "DISCOVER THE OILS BAR",
    videoAdvertButtonLink: "/shop?cat=OILS",
    videoAdvertOfferText: "Complimentary Discovery Sample with Every Bottle",
    videoAdvertLoop: true,
    videoAdvertAutoplay: true
  };
  try {
    const res = await query("SELECT key, value FROM settings");
    const dbSettings = {};
    for (const row of res.rows) {
      try {
        dbSettings[row.key] = JSON.parse(row.value);
      } catch {
        dbSettings[row.key] = row.value;
      }
    }
    return {
      ...defaults,
      ...dbSettings
    };
  } catch (err) {
    console.error("Error fetching settings from DB:", err);
    return defaults;
  }
});

export { settings_get as default };
//# sourceMappingURL=settings.get.mjs.map

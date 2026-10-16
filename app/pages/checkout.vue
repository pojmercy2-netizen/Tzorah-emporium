<template>
  <div class="co-page">

    <!-- ═══════════════════════════════════════════ -->
    <!-- MINI HEADER                                 -->
    <!-- ═══════════════════════════════════════════ -->
    <div class="co-mini-header">
      <NuxtLink to="/cart" class="co-back" aria-label="Back to cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </NuxtLink>
      <NuxtLink to="/" class="co-logo">
        <img src="/logo.png" alt="TZORAH EMPORIUM" />
        <span>TZORAH EMPORIUM</span>
      </NuxtLink>
      <NuxtLink to="/cart" class="co-cart-icon" aria-label="Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span v-if="cartCount > 0" class="co-cart-badge">{{ cartCount }}</span>
      </NuxtLink>
    </div>

    <!-- ═══════════════════════════════════════════ -->
    <!-- PROGRESS STEPPER                            -->
    <!-- ═══════════════════════════════════════════ -->
    <div class="co-steps-wrap">
      <div class="co-steps">
        <div class="co-step co-step--done">
          <div class="co-step__circle">1</div>
          <span class="co-step__label">CART</span>
        </div>
        <div class="co-step__line co-step__line--done"></div>
        <div class="co-step co-step--active">
          <div class="co-step__circle">2</div>
          <span class="co-step__label">CHECKOUT</span>
        </div>
        <div class="co-step__line"></div>
        <div class="co-step">
          <div class="co-step__circle co-step__circle--inactive">3</div>
          <span class="co-step__label co-step__label--inactive">PAYMENT</span>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════ -->
    <!-- PAGE BODY                                   -->
    <!-- ═══════════════════════════════════════════ -->
    <div class="co-body">

      <!-- ── Page Title + Security Badge ── -->
      <div class="co-page-header">
        <div>
          <h1 class="co-title">PROCEED TO CHECKOUT</h1>
          <p class="co-subtitle">Almost there! Review your order and details.</p>
        </div>
        <div class="co-secure-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <div>
            <strong>SECURE CHECKOUT</strong>
            <span>Your data is safe with us.</span>
          </div>
        </div>
      </div>

      <!-- ── Two-column Layout ── -->
      <div class="co-layout">

        <!-- ════════ LEFT COLUMN ════════ -->
        <div class="co-left">

          <!-- SHIPPING ADDRESS -->
          <div class="co-card">
            <div class="co-card__header">
              <div class="co-card__header-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3>SHIPPING ADDRESS</h3>
              </div>
              <button class="co-edit-btn" @click="editingAddress = !editingAddress">EDIT</button>
            </div>

            <div v-if="!editingAddress" class="co-card__body">
              <p>{{ address.name }}</p>
              <p>{{ address.street }}</p>
              <p v-if="address.apt">{{ address.apt }}</p>
              <p>{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
              <p>{{ address.country }}</p>
              <p>{{ address.phone }}</p>
              <p>{{ address.email }}</p>
            </div>

            <div v-else class="co-card__body co-form">
              <div class="co-form__row">
                <div class="co-form__group">
                  <label>Full Name</label>
                  <input v-model="address.name" type="text" />
                </div>
              </div>
              <div class="co-form__row">
                <div class="co-form__group">
                  <label>Street Address</label>
                  <input v-model="address.street" type="text" />
                </div>
              </div>
              <div class="co-form__row">
                <div class="co-form__group">
                  <label>Apt / Suite (optional)</label>
                  <input v-model="address.apt" type="text" />
                </div>
              </div>
              <div class="co-form__row co-form__row--two">
                <div class="co-form__group">
                  <label>City</label>
                  <input v-model="address.city" type="text" />
                </div>
                <div class="co-form__group">
                  <label>State</label>
                  <input v-model="address.state" type="text" />
                </div>
              </div>
              <div class="co-form__row co-form__row--two">
                <div class="co-form__group">
                  <label>ZIP Code</label>
                  <input v-model="address.zip" type="text" />
                </div>
                <div class="co-form__group">
                  <label>Country</label>
                  <input v-model="address.country" type="text" />
                </div>
              </div>
              <div class="co-form__row">
                <div class="co-form__group">
                  <label>Phone</label>
                  <input v-model="address.phone" type="tel" />
                </div>
              </div>
              <div class="co-form__row">
                <div class="co-form__group">
                  <label>Email</label>
                  <input v-model="address.email" type="email" />
                </div>
              </div>
              <button class="co-save-btn" @click="editingAddress = false">SAVE ADDRESS</button>
            </div>
          </div>

          <!-- SHIPPING METHOD -->
          <div class="co-card">
            <div class="co-card__header">
              <div class="co-card__header-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <h3>SHIPPING METHOD</h3>
              </div>
              <button class="co-edit-btn">EDIT</button>
            </div>
            <div class="co-card__body">
              <label
                v-for="method in shippingMethods"
                :key="method.id"
                :class="['co-radio-row', { 'co-radio-row--selected': selectedShipping === method.id }]"
                @click="selectedShipping = method.id"
              >
                <div class="co-radio">
                  <div class="co-radio__dot" v-if="selectedShipping === method.id"></div>
                </div>
                <div class="co-radio-row__info">
                  <p class="co-radio-row__name">{{ method.name }}</p>
                  <p class="co-radio-row__sub">{{ method.days }}</p>
                </div>
                <span class="co-radio-row__price">{{ method.price === 0 ? 'FREE' : currencySymbol + method.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
              </label>

              <!-- Delivery Information Policy Notice -->
              <div class="co-delivery-notice">
                <div class="co-delivery-notice__header">
                  <div class="co-delivery-notice__title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <span>DELIVERY INFORMATION &mdash; TZORAH&rsquo;S EMPORIUM</span>
                  </div>
                  <span class="co-delivery-notice__badge">Port Harcourt &amp; Nationwide</span>
                </div>

                <p class="co-delivery-notice__intro">We deliver within Port Harcourt and to other locations across Nigeria.</p>

                <div class="co-delivery-notice__grid">
                  <div class="co-delivery-zone-item">
                    <strong>Port Harcourt:</strong> Same-day delivery where available, or within 24 hours where possible.
                  </div>
                  <div class="co-delivery-zone-item">
                    <strong>Other parts of Rivers State:</strong> Fees and delivery times depend on destination.
                  </div>
                  <div class="co-delivery-zone-item">
                    <strong>South-South &amp; South-East:</strong> Estimated delivery time of 4&ndash;7 days.
                  </div>
                  <div class="co-delivery-zone-item">
                    <strong>Other states nationwide:</strong> Estimated delivery time of 4&ndash;10 days, depending on destination.
                  </div>
                </div>

                <div class="co-delivery-notice__notes">
                  <span class="co-delivery-notice__notes-title">Please note:</span>
                  <ul>
                    <li>Delivery fees are determined by the dispatch rider or logistics company, not Tzorah&rsquo;s Emporium.</li>
                    <li>Orders are typically processed and handed over for dispatch within 24&ndash;48 hours.</li>
                    <li>Delivery timelines are estimates and may vary due to distance, logistics availability or unforeseen delays.</li>
                    <li>Once an order has been handed over to the logistics provider, delays outside our control may occur.</li>
                  </ul>
                </div>

                <NuxtLink to="/delivery" target="_blank" class="co-delivery-notice__link">
                  Read complete delivery guidelines &rarr;
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- PAYMENT METHOD (BANK TRANSFER ONLY) -->
          <div class="co-card">
            <div class="co-card__header">
              <div class="co-card__header-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3l9-7z"></path>
                </svg>
                <h3>PAYMENT METHOD</h3>
              </div>
              <span class="co-badge-bank">BANK TRANSFER ONLY</span>
            </div>
            <div class="co-card__body">
              <div class="co-bank-transfer-box">
                <div class="co-bank-transfer-header">
                  <div class="co-bank-icon-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3l9-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="co-bank-title">Direct Bank Transfer</h4>
                    <p class="co-bank-sub">Transfer total amount directly to our official bank account.</p>
                  </div>
                </div>

                <!-- Display configured bank accounts -->
                <div class="co-bank-accounts-preview">
                  <div
                    v-for="(acc, i) in (storeSettings.bankAccounts || defaultBankAccounts)"
                    :key="acc.id || i"
                    class="co-bank-preview-card"
                  >
                    <div class="co-bank-row">
                      <span class="co-bank-lbl">Bank Name</span>
                      <strong class="co-bank-val">{{ acc.bankName }}</strong>
                    </div>
                    <div class="co-bank-row">
                      <span class="co-bank-lbl">Account Number</span>
                      <strong class="co-bank-val font-mono">{{ acc.accountNumber }}</strong>
                    </div>
                    <div class="co-bank-row">
                      <span class="co-bank-lbl">Account Name</span>
                      <strong class="co-bank-val">{{ acc.accountName }}</strong>
                    </div>
                  </div>
                </div>

                <div class="co-bank-notice">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>Complete your order to reveal transfer reference and payment confirmation details.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ════════ RIGHT COLUMN (ORDER SUMMARY) ════════ -->
        <div class="co-right">
          <div class="co-summary-card">
            <h3 class="co-summary__title">ORDER SUMMARY</h3>

            <!-- Cart Items -->
            <div class="co-summary__items">
              <div v-for="item in cartItems" :key="item.id" class="co-summary__item">
                <div class="co-summary__item-img">
                  <img :src="item.image" :alt="item.name" />
                </div>
                <div class="co-summary__item-details">
                  <p class="co-summary__item-name">{{ item.name }}</p>
                  <p class="co-summary__item-meta">{{ capitalize(item.selectedColor || 'Black') }} / {{ item.selectedSize || 'M' }}</p>
                  <p class="co-summary__item-qty">Qty: {{ item.quantity }}</p>
                </div>
                <p class="co-summary__item-price">{{ currencySymbol }}{{ (item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
              </div>

              <!-- Empty state fallback -->
              <div v-if="cartItems.length === 0" class="co-summary__empty">
                <p>No items in bag. <NuxtLink to="/shop">Shop now</NuxtLink></p>
              </div>
            </div>

            <!-- Promo Code -->
            <div class="co-promo">
              <button class="co-promo__toggle" @click="showPromo = !showPromo">
                Have a promo code?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" :style="{ transform: showPromo ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="showPromo" class="co-promo__input-row">
                <input v-model="promoCode" type="text" placeholder="Enter code" class="co-promo__input" />
                <button class="co-promo__apply" @click="applyPromo">APPLY</button>
              </div>
              <p v-if="promoApplied" class="co-promo__success">✓ Promo code applied!</p>
            </div>

            <!-- Summary Numbers -->
            <div class="co-summary__numbers">
              <div class="co-summary__row">
                <span>Subtotal</span>
                <span>{{ currencySymbol }}{{ subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
              </div>
              <div class="co-summary__row">
                <span>Shipping</span>
                <span :class="shippingCost === 0 ? 'co-free' : ''">{{ shippingCost === 0 ? 'FREE' : currencySymbol + shippingCost.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
              </div>
              <div class="co-summary__row">
                <span class="co-tax-label">
                  Estimated Tax
                  <span class="co-tax-info" title="Based on your shipping address">ⓘ</span>
                </span>
                <span>{{ currencySymbol }}{{ estimatedTax.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
              </div>
            </div>

            <div class="co-summary__total">
              <span>TOTAL ({{ storeSettings.currency || 'NGN' }})</span>
              <span class="co-summary__total-amount">{{ currencySymbol }}{{ estimatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
            </div>

            <!-- Security note -->
            <div class="co-security-note">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div>
                <strong>Secure &amp; Encrypted</strong>
                <span>Your payment information is protected with industry-leading encryption.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ PLACE ORDER BUTTON ═══ -->
      <div class="co-place-order-wrap">
        <button class="co-place-order" :disabled="placingOrder" @click="placeOrder">
          <span v-if="placingOrder">PROCESSING ORDER...</span>
          <span v-else>PLACE ORDER &bull; {{ currencySymbol }}{{ estimatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }} →</span>
        </button>
        <p class="co-legal">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:4px;">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          By placing your order, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>

      <!-- ═══ TRUST BADGES ═══ -->
      <div class="co-trust">
        <div class="co-trust__item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
          <strong>FREE SHIPPING</strong>
          <span>On all orders over $100.</span>
        </div>
        <div class="co-trust__item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <strong>EASY RETURNS</strong>
          <span>30-day hassle-free returns.</span>
        </div>
        <div class="co-trust__item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.46-.46a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18z"></path>
          </svg>
          <strong>24/7 SUPPORT</strong>
          <span>We're here to help you.</span>
        </div>
        <div class="co-trust__item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <strong>SECURE PAYMENT</strong>
          <span>Safe &amp; encrypted checkout.</span>
        </div>
      </div><!-- end .co-body -->

      <!-- ═══════════════════════════════════════════ -->
      <!-- BANK TRANSFER ORDER CONFIRMATION MODAL      -->
      <!-- ═══════════════════════════════════════════ -->
      <Teleport to="body">
        <div v-if="showBankModal" class="co-modal-overlay">
          <div class="co-modal-card animate-scale-up">
            <div class="co-modal-badge co-modal-badge--pending">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>

            <h2 class="co-modal-title">ORDER SUBMITTED — AWAITING PAYMENT</h2>
            <p class="co-modal-sub">
              Your order <strong>#{{ placedOrderData?.id }}</strong> has been registered! Please transfer the total amount below.
              An admin will verify your payment and confirm your order.
            </p>

            <div class="co-modal-ref-box">
              <div class="co-ref-row">
                <span>ORDER REFERENCE ID</span>
                <div class="co-copy-wrap">
                  <strong class="font-mono">#{{ placedOrderData?.id }}</strong>
                  <button class="btn-copy-sm" @click="copyToClipboard(`#${placedOrderData?.id}`, 'Order ID')">COPY</button>
                </div>
              </div>

              <div class="co-ref-row">
                <span>TOTAL AMOUNT DUE</span>
                <strong class="co-amount-gold">
                  {{ currencySymbol }}{{ (placedOrderData?.total_price || estimatedTotal).toLocaleString() }}
                </strong>
              </div>
            </div>

            <!-- Bank Account Cards -->
            <div class="co-modal-banks">
              <h4 class="co-modal-banks-title">TRANSFER TO ANY OF THE ACCOUNTS BELOW:</h4>

              <div
                v-for="(acc, i) in (storeSettings.bankAccounts || defaultBankAccounts)"
                :key="acc.id || i"
                class="co-modal-bank-card"
              >
                <div class="co-modal-bank-head">
                  <span class="co-bank-tag">{{ acc.bankName }}</span>
                  <button class="btn-copy-account" @click="copyToClipboard(acc.accountNumber, 'Account Number')">
                    📋 COPY NUMBER
                  </button>
                </div>

                <div class="co-modal-bank-grid">
                  <div class="co-modal-grid-item">
                    <span class="lbl">Account Number</span>
                    <strong class="val font-mono text-gold">{{ acc.accountNumber }}</strong>
                  </div>
                  <div class="co-modal-grid-item">
                    <span class="lbl">Account Name / Beneficiary</span>
                    <strong class="val">{{ acc.accountName }}</strong>
                  </div>
                </div>

                <p v-if="acc.instructions" class="co-modal-bank-memo">
                  💡 <strong>Memo / Note:</strong> {{ acc.instructions }} (Quote Order #{{ placedOrderData?.id }})
                </p>
              </div>
            </div>

            <!-- Step 2: Upload Payment Receipt -->
            <div class="co-receipt-upload-box">
              <div class="co-receipt-head">
                <span class="co-receipt-step">STEP 2</span>
                <h4 class="co-receipt-title">UPLOAD PAYMENT RECEIPT / PROOF</h4>
              </div>
              <p class="co-receipt-desc">
                Attach a screenshot or photo of your transfer confirmation so our team can immediately verify and approve your order.
              </p>

              <!-- Uploaded Success State -->
              <div v-if="receiptUploaded" class="co-receipt-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <div class="co-receipt-success-text">
                  <strong>RECEIPT SUBMITTED SUCCESSFULLY!</strong>
                  <span>Your receipt has been submitted to the admin console for instant approval.</span>
                </div>
              </div>

              <!-- Upload Form -->
              <div v-else class="co-receipt-form">
                <label class="co-file-dropzone" :class="{ 'has-file': Boolean(receiptPreview) }">
                  <input type="file" accept="image/*,application/pdf" class="co-file-input" @change="onReceiptFileSelected" />
                  
                  <div v-if="receiptPreview" class="co-file-preview-wrap">
                    <img :src="receiptPreview" alt="Receipt Preview" class="co-file-thumb" />
                    <div class="co-file-info">
                      <span class="co-file-name">{{ receiptFile?.name }}</span>
                      <span class="co-file-change">Click to select a different image</span>
                    </div>
                  </div>

                  <div v-else class="co-dropzone-prompt">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    <span>Click to browse or drop transfer screenshot / receipt</span>
                    <small>Supports PNG, JPG, JPEG, WEBP or PDF</small>
                  </div>
                </label>

                <button
                  v-if="receiptFile"
                  class="btn-upload-receipt"
                  :disabled="uploadingReceipt"
                  @click="uploadReceipt"
                >
                  <span v-if="uploadingReceipt">UPLOADING RECEIPT...</span>
                  <span v-else>📤 SUBMIT RECEIPT TO ADMIN</span>
                </button>
              </div>
            </div>

            <div class="co-modal-actions">
              <NuxtLink to="/profile" class="btn-modal-primary">VIEW MY ORDERS</NuxtLink>
              <NuxtLink to="/shop" class="btn-modal-secondary">CONTINUE SHOPPING</NuxtLink>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { currentUser } = useAuth()

useHead({
  title: 'Checkout | TZORAH EMPORIUM',
  meta: [{ name: 'description', content: 'Review your order and complete your purchase securely with TZORAH EMPORIUM.' }]
})

const cartCount = useState('cartCount', () => 0)
const cartItems = useState('cartItems', () => [])
const toasts = useState('toasts', () => [])

const TAX_RATE = 0.09

// ─── Address ──────────────────────────────────────
const editingAddress = ref(false)
const address = ref({
  name: '',
  street: '',
  apt: '',
  city: '',
  state: '',
  zip: '',
  country: 'United States',
  phone: '',
  email: ''
})

const { storeSettings, fetchStoreSettings } = useStoreSettings()

const defaultBankAccounts = [
  {
    id: '1',
    bankName: 'Guaranty Trust Bank (GTBank)',
    accountNumber: '0123456789',
    accountName: 'TZORAH EMPORIUM ENTERPRISES',
    instructions: 'Please use your Order ID as the transfer description/reference.'
  }
]

const showBankModal = ref(false)
const placedOrderData = ref<any>(null)
const receiptFile = ref<File | null>(null)
const receiptPreview = ref<string | null>(null)
const uploadingReceipt = ref(false)
const receiptUploaded = ref(false)

const onReceiptFileSelected = (e: any) => {
  const file = e.target.files?.[0]
  if (file) {
    receiptFile.value = file
    const reader = new FileReader()
    reader.onload = (event) => {
      receiptPreview.value = event.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const uploadReceipt = async () => {
  if (!placedOrderData.value?.id || !receiptFile.value) return
  uploadingReceipt.value = true
  try {
    const formData = new FormData()
    formData.append('receipt', receiptFile.value)

    await $fetch(`/api/v1/orders/${placedOrderData.value.id}/receipt`, {
      method: 'POST',
      body: formData
    })

    receiptUploaded.value = true
    toasts.value.push({ id: Date.now(), message: '✓ Receipt successfully submitted to admin!' })
  } catch (err: any) {
    console.error('Failed to upload receipt:', err)
    toasts.value.push({ id: Date.now(), message: `❌ ${err?.data?.message || err?.message || 'Failed to upload receipt'}` })
  } finally {
    uploadingReceipt.value = false
  }
}

const copyToClipboard = (text: string, label: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
    toasts.value.push({ id: Date.now(), message: `📋 Copied ${label} (${text}) to clipboard!` })
  }
}

onMounted(async () => {
  await fetchStoreSettings()
  if (currentUser.value) {
    address.value.name = `${currentUser.value.firstName || ''} ${currentUser.value.lastName || ''}`.trim() || 'Valued Customer'
    address.value.email = currentUser.value.email || 'customer@tzorahemporium.com'
    address.value.phone = currentUser.value.phone || '+234 800 000 0000'
    address.value.street = currentUser.value.address?.street || '123 Victoria Island'
    address.value.apt = currentUser.value.address?.apt || 'Suite 100'
    address.value.city = currentUser.value.address?.city || 'Lagos'
    address.value.state = currentUser.value.address?.state || 'Lagos'
    address.value.zip = currentUser.value.address?.zip || '100001'
    address.value.country = currentUser.value.address?.country || 'Nigeria'
  } else {
    // Default fallback mock values
    address.value.name = 'John Doe'
    address.value.street = '123 Victoria Island'
    address.value.apt = 'Apt 4B'
    address.value.city = 'Lagos'
    address.value.state = 'Lagos'
    address.value.zip = '100001'
    address.value.country = 'Nigeria'
    address.value.phone = '+234 800 000 0000'
    address.value.email = 'customer@tzorahemporium.com'
  }
})

const freeShippingThreshold = computed(() => Number(storeSettings.value.freeShippingThreshold || 150))
const standardShippingFee = computed(() => Number(storeSettings.value.standardShippingFee || 15))
const expressShippingFee = computed(() => Number(storeSettings.value.expressShippingFee || 7500))

const currencySymbol = computed(() => {
  const c = storeSettings.value?.currency || 'NGN'
  if (c === 'NGN') return '₦'
  if (c === 'EUR') return '€'
  if (c === 'GBP') return '£'
  return '₦'
})

// ─── Shipping Methods ──────────────────────────────
const shippingMethods = computed(() => {
  const isFree = subtotal.value >= freeShippingThreshold.value
  const stdPrice = isFree ? 0 : standardShippingFee.value
  return [
    { id: 'standard', name: 'Standard Shipping', days: '5–7 Business Days', price: stdPrice },
    { id: 'express', name: 'Express Shipping', days: '2–3 Business Days', price: expressShippingFee.value }
  ]
})
const selectedShipping = ref('standard')

// ─── Promo Code ────────────────────────────────────
const showPromo = ref(false)
const promoCode = ref('')
const promoApplied = ref(false)
const applyPromo = () => {
  if (promoCode.value.trim()) {
    promoApplied.value = true
  }
}

// ─── Financials ────────────────────────────────────
const subtotal = computed(() =>
  cartItems.value.reduce((sum: any, i: any) => sum + i.price * i.quantity, 0)
)
const shippingCost = computed(() => {
  const method = shippingMethods.value.find(m => m.id === selectedShipping.value)
  return method ? method.price : 0
})
const estimatedTax = computed(() => subtotal.value * TAX_RATE)
const estimatedTotal = computed(() => subtotal.value + shippingCost.value + estimatedTax.value)

// ─── Helpers ───────────────────────────────────────
const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : ''

// ─── Place Order ───────────────────────────────────
const placingOrder = ref(false)

const placeOrder = async () => {
  if (cartItems.value.length === 0) {
    toasts.value.push({ id: Date.now(), message: 'Your cart is empty.' })
    return
  }

  const name = address.value.name.trim()
  const email = address.value.email.trim()
  const street = address.value.street.trim()
  const city = address.value.city.trim()

  if (!name || !email || !street || !city) {
    toasts.value.push({ id: Date.now(), message: 'Please fill in your shipping address.' })
    editingAddress.value = true
    return
  }

  placingOrder.value = true

  try {
    const shippingAddress = [
      address.value.street,
      address.value.apt,
      address.value.city,
      address.value.state,
      address.value.zip,
      address.value.country
    ].filter(Boolean).join(', ')

    const orderPayload = {
      customer_name: name,
      email: email,
      phone: address.value.phone || null,
      shipping_address: shippingAddress,
      total_price: estimatedTotal.value,
      items: cartItems.value.map((item: any) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
        name: item.name
      }))
    }

    const order: any = await $fetch('/api/v1/orders', {
      method: 'POST',
      body: orderPayload
    })

    placedOrderData.value = order
    showBankModal.value = true

    // Clear cart state
    cartItems.value = []
    cartCount.value = 0

    toasts.value.push({ id: Date.now(), message: '🎉 Order registered! Please transfer funds to complete your purchase.' })

  } catch (err: any) {
    const msg = err?.data?.message || err?.message || 'Failed to place order. Please try again.'
    toasts.value.push({ id: Date.now(), message: `❌ ${msg}` })
  } finally {
    placingOrder.value = false
  }
}

</script>

<style scoped>
.co-page {
  background: #f5f1eb;
  min-height: 100vh;
  font-family: var(--font-sans);
}

/* ─── Mini Header ─────────────────────────────── */
.co-mini-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: #f5f1eb;
  border-bottom: 1px solid rgba(0,0,0,0.07);
  position: sticky;
  top: 0;
  z-index: 50;
}
.co-back {
  display: flex;
  align-items: center;
  color: var(--color-text-dark);
  text-decoration: none;
}
.co-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  text-decoration: none;
}
.co-logo img { height: 30px; width: auto; }
.co-logo span { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.18em; color: var(--color-text-dark); }
.co-cart-icon {
  position: relative;
  display: flex;
  align-items: center;
  color: var(--color-text-dark);
  text-decoration: none;
}
.co-cart-badge {
  position: absolute;
  top: -5px;
  right: -7px;
  background: var(--color-text-dark);
  color: #fff;
  font-size: 0.55rem;
  font-weight: 700;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Progress Stepper ─────────────────────────── */
.co-steps-wrap {
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  padding: 1.1rem 0;
}
.co-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 360px;
  margin: 0 auto;
}
.co-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}
.co-step__circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-text-dark);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}
.co-step__circle--inactive {
  background: #d8d3cc;
  color: var(--color-text-muted);
}
.co-step__label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-text-dark);
}
.co-step__label--inactive { color: var(--color-text-muted); }
.co-step--active .co-step__circle { background: var(--color-text-dark); }
.co-step--done .co-step__circle { background: var(--color-text-dark); }
.co-step__line {
  flex: 1;
  height: 2px;
  background: #d8d3cc;
  margin: 0 0.5rem;
  margin-bottom: 1.2rem;
}
.co-step__line--done { background: var(--color-text-dark); }

/* ─── Body ─────────────────────────────────────── */
.co-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 1.75rem 1.25rem 5rem;
}

/* Page header + security badge */
.co-page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
}
.co-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-text-dark);
  margin-bottom: 0.2rem;
}
.co-subtitle { font-size: 0.82rem; color: var(--color-text-muted); }
.co-secure-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  padding: 0.65rem 0.9rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  min-width: 175px;
  flex-shrink: 0;
}
.co-secure-badge svg { opacity: 0.7; flex-shrink: 0; }
.co-secure-badge div { display: flex; flex-direction: column; }
.co-secure-badge strong { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.05em; color: var(--color-text-dark); }
.co-secure-badge span { font-size: 0.6rem; color: var(--color-text-muted); }

/* ─── Two-column layout ─────────────────────────── */
.co-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.25rem;
  align-items: start;
  margin-bottom: 1.25rem;
}
.co-left { display: flex; flex-direction: column; gap: 1rem; }

/* ─── Card ──────────────────────────────────────── */
.co-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  overflow: hidden;
}
.co-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.15rem;
  border-bottom: 1px solid #f0ede8;
}
.co-card__header-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.co-card__header-left h3 {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--color-text-dark);
}
.co-edit-btn {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #b5882e;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  transition: opacity 0.2s;
}
.co-edit-btn:hover { opacity: 0.7; }
.co-card__body {
  padding: 1.1rem 1.15rem;
  font-size: 0.85rem;
  color: var(--color-text-dark);
  line-height: 1.7;
}

/* ─── Form ──────────────────────────────────────── */
.co-form { display: flex; flex-direction: column; gap: 0.75rem; }
.co-form__row { display: flex; gap: 0.75rem; }
.co-form__row--two .co-form__group { flex: 1; }
.co-form__group { display: flex; flex-direction: column; gap: 0.3rem; flex: 1; }
.co-form__group label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; color: var(--color-text-muted); text-transform: uppercase; }
.co-form__group input {
  padding: 0.65rem 0.85rem;
  border: 1.5px solid #d8d3cc;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: var(--font-sans);
  color: var(--color-text-dark);
  background: #faf9f7;
  outline: none;
  transition: border-color 0.2s;
}
.co-form__group input:focus { border-color: var(--color-text-dark); }
.co-save-btn {
  margin-top: 0.5rem;
  background: var(--color-text-dark);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  align-self: flex-start;
}

/* ─── Radio Rows ────────────────────────────────── */
.co-radio-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1rem;
  border: 1.5px solid #e5e0d9;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s;
  margin-bottom: 0.65rem;
}
.co-radio-row:last-child { margin-bottom: 0; }
.co-radio-row--selected { border-color: var(--color-text-dark); }
.co-radio {
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-text-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.co-radio__dot {
  width: 9px;
  height: 9px;
  background: var(--color-text-dark);
  border-radius: 50%;
}
.co-radio-row__info { flex: 1; }
.co-radio-row__name { font-size: 0.85rem; font-weight: 600; color: var(--color-text-dark); }
.co-radio-row__sub { font-size: 0.72rem; color: var(--color-text-muted); }
.co-radio-row__price { font-size: 0.88rem; font-weight: 700; color: var(--color-text-dark); white-space: nowrap; }
.co-payment-logos { display: flex; gap: 0.3rem; margin-left: auto; }
.co-payment-logo {
  font-size: 0.55rem;
  font-weight: 800;
  padding: 0.18rem 0.4rem;
  border: 1px solid #d8d3cc;
  border-radius: 3px;
  color: var(--color-text-dark);
  letter-spacing: 0.03em;
}

/* ─── Delivery Notice in Checkout ────────────────── */
.co-delivery-notice {
  margin-top: 1.25rem;
  padding: 1.15rem;
  background-color: #fbf9f6;
  border: 1px solid rgba(201, 168, 106, 0.35);
  border-left: 3.5px solid var(--color-accent);
  border-radius: 6px;
}

.co-delivery-notice__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}

.co-delivery-notice__title {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--color-text-dark);
}

.co-delivery-notice__title svg {
  color: var(--color-accent);
  flex-shrink: 0;
}

.co-delivery-notice__badge {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  background-color: rgba(201, 168, 106, 0.15);
  color: var(--color-accent);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
}

.co-delivery-notice__intro {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin-bottom: 0.85rem;
  line-height: 1.4;
}

.co-delivery-notice__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.45rem;
  margin-bottom: 0.85rem;
  background: #ffffff;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.co-delivery-zone-item {
  font-size: 0.75rem;
  color: var(--color-text-dark);
  line-height: 1.4;
}

.co-delivery-zone-item strong {
  color: var(--color-text-dark);
}

.co-delivery-notice__notes {
  border-top: 1px dashed rgba(0, 0, 0, 0.08);
  padding-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.co-delivery-notice__notes-title {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.co-delivery-notice__notes ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.co-delivery-notice__notes li {
  font-size: 0.73rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  position: relative;
  padding-left: 1rem;
}

.co-delivery-notice__notes li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 0.9rem;
  line-height: 1;
}

.co-delivery-notice__link {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-accent);
  text-decoration: underline;
  transition: opacity 0.2s;
}

.co-delivery-notice__link:hover {
  opacity: 0.8;
}

/* ─── Order Summary Card ────────────────────────── */
.co-summary-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 1.25rem;
  position: sticky;
  top: 80px;
}
.co-summary__title {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0ede8;
}
.co-summary__items { display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1rem; }
.co-summary__item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid #f5f1eb;
}
.co-summary__item:last-child { border-bottom: none; }
.co-summary__item-img {
  width: 64px;
  height: 72px;
  border-radius: 6px;
  overflow: hidden;
  background: #ebe7e0;
  flex-shrink: 0;
}
.co-summary__item-img img { width: 100%; height: 100%; object-fit: cover; }
.co-summary__item-details { flex: 1; }
.co-summary__item-name { font-size: 0.82rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; margin-bottom: 0.2rem; }
.co-summary__item-meta, .co-summary__item-qty { font-size: 0.75rem; color: var(--color-text-muted); }
.co-summary__item-price { font-size: 0.88rem; font-weight: 700; color: var(--color-text-dark); white-space: nowrap; }
.co-summary__empty { font-size: 0.85rem; color: var(--color-text-muted); text-align: center; padding: 1rem 0; }
.co-summary__empty a { color: var(--color-accent); }

/* Promo */
.co-promo { border-top: 1px solid #f0ede8; border-bottom: 1px solid #f0ede8; padding: 0.85rem 0; margin-bottom: 0.85rem; }
.co-promo__toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  font-size: 0.82rem;
  font-family: var(--font-sans);
  color: var(--color-text-dark);
  cursor: pointer;
  font-weight: 500;
}
.co-promo__input-row { display: flex; gap: 0.5rem; margin-top: 0.75rem; }
.co-promo__input {
  flex: 1;
  padding: 0.6rem 0.85rem;
  border: 1.5px solid #d8d3cc;
  border-radius: 6px;
  font-size: 0.82rem;
  font-family: var(--font-sans);
  outline: none;
}
.co-promo__input:focus { border-color: var(--color-text-dark); }
.co-promo__apply {
  background: var(--color-text-dark);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--font-sans);
}
.co-promo__success { font-size: 0.75rem; color: #2d8a4e; font-weight: 600; margin-top: 0.4rem; }

/* Summary numbers */
.co-summary__numbers { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.85rem; }
.co-summary__row { display: flex; justify-content: space-between; font-size: 0.82rem; color: var(--color-text-muted); }
.co-tax-label { display: flex; align-items: center; gap: 0.3rem; }
.co-tax-info { opacity: 0.5; font-size: 0.85rem; cursor: help; }
.co-free { color: #2d8a4e; font-weight: 700; }
.co-summary__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.5px solid #d8d3cc;
  padding-top: 0.75rem;
  margin-bottom: 1rem;
}
.co-summary__total span:first-child { font-size: 0.8rem; font-weight: 800; letter-spacing: 0.08em; color: var(--color-text-dark); }
.co-summary__total-amount { font-size: 1.4rem; font-weight: 800; color: var(--color-text-dark); }

/* Security note */
.co-security-note {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  background: #faf9f7;
  border: 1px solid #ece8e2;
  border-radius: 8px;
  padding: 0.85rem;
}
.co-security-note svg { opacity: 0.6; flex-shrink: 0; margin-top: 2px; }
.co-security-note div { display: flex; flex-direction: column; }
.co-security-note strong { font-size: 0.72rem; font-weight: 800; color: var(--color-text-dark); margin-bottom: 0.2rem; }
.co-security-note span { font-size: 0.68rem; color: var(--color-text-muted); line-height: 1.5; }

/* ─── Place Order button ─────────────────────────── */
.co-place-order-wrap { text-align: center; margin-bottom: 1.5rem; }
.co-place-order {
  width: 100%;
  background: var(--color-text-dark);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 1.2rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: opacity 0.2s;
  margin-bottom: 0.85rem;
}
.co-place-order:hover { opacity: 0.88; }
.co-legal { font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.5; }
.co-legal a { color: var(--color-text-dark); font-weight: 600; text-decoration: underline; }

/* ─── Trust Badges ──────────────────────────────── */
.co-trust {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  border-top: 1px solid rgba(0,0,0,0.06);
  padding-top: 1.5rem;
}
.co-trust__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
}
.co-trust__item svg { opacity: 0.6; }
.co-trust__item strong { font-size: 0.63rem; font-weight: 800; letter-spacing: 0.06em; color: var(--color-text-dark); text-transform: uppercase; }
.co-trust__item span { font-size: 0.6rem; color: var(--color-text-muted); line-height: 1.4; }

/* ─── Responsive ─────────────────────────────────── */
@media (max-width: 768px) {
  .co-layout {
    grid-template-columns: 1fr;
  }
  .co-summary-card { position: static; }
  .co-trust { grid-template-columns: repeat(2, 1fr); }
  .co-page-header { flex-direction: column; gap: 0.75rem; }
  .co-secure-badge { min-width: auto; }
}
@media (max-width: 480px) {
  .co-trust { grid-template-columns: repeat(2, 1fr); }
}

/* ─── Bank Transfer Payment Box ─── */
.co-badge-bank {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: rgba(201, 169, 110, 0.15);
  color: var(--color-accent, #c9a96e);
  padding: 0.25rem 0.65rem;
  border-radius: 2px;
}

.co-bank-transfer-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.co-bank-transfer-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.co-bank-icon-badge {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #111;
  color: var(--color-accent, #c9a96e);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.co-bank-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0 0 0.15rem 0;
}

.co-bank-sub {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin: 0;
}

.co-bank-accounts-preview {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.co-bank-preview-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.co-bank-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
}

.co-bank-lbl {
  color: var(--color-text-muted);
  font-size: 0.76rem;
}

.co-bank-val {
  color: var(--color-text-dark);
}

.co-bank-notice {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.75rem;
  color: #8a6d3b;
  background: #fcf8e3;
  border: 1px solid #faebcc;
  padding: 0.65rem 0.85rem;
  border-radius: 3px;
  line-height: 1.4;
}

/* ─── Bank Transfer Modal Overlay ─── */
.co-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
}

.co-modal-card {
  background: #181818;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  max-width: 540px;
  width: 100%;
  padding: 2.25rem;
  color: #fff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}

.co-modal-badge {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(46, 204, 113, 0.15);
  color: #2ecc71;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem auto;
}

.co-modal-badge--pending {
  background: rgba(201, 169, 110, 0.15);
  color: var(--color-accent, #c9a96e);
}

.co-modal-title {
  font-family: var(--font-sans);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #fff;
  margin-bottom: 0.4rem;
}

.co-modal-sub {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.co-modal-ref-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.co-ref-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}
.co-ref-row span {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.45);
}

.co-copy-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.co-amount-gold {
  color: var(--color-accent, #c9a96e);
  font-size: 1.1rem;
  font-weight: 800;
}

.btn-copy-sm {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-copy-sm:hover {
  background: var(--color-accent, #c9a96e);
  color: #111;
}

.co-modal-banks {
  text-align: left;
  margin-bottom: 1.75rem;
}

.co-modal-banks-title {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0.85rem;
}

.co-modal-bank-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(201, 169, 110, 0.4);
  border-radius: 4px;
  padding: 1.2rem;
  margin-bottom: 0.85rem;
}

.co-modal-bank-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.85rem;
}

.co-bank-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-accent, #c9a96e);
}

.btn-copy-account {
  background: var(--color-accent, #c9a96e);
  color: #111;
  border: none;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-copy-account:hover { opacity: 0.9; }

.co-modal-bank-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.co-modal-grid-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.co-modal-grid-item .lbl {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
}
.co-modal-grid-item .val {
  font-size: 0.85rem;
}

.text-gold {
  color: var(--color-accent, #c9a96e) !important;
}

.co-modal-bank-memo {
  font-size: 0.74rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.5rem 0.75rem;
  border-radius: 2px;
  margin: 0;
  line-height: 1.4;
}

/* ─── Receipt Upload Box ──────────────────────── */
.co-receipt-upload-box {
  background: rgba(201, 169, 110, 0.05);
  border: 1px dashed rgba(201, 169, 110, 0.35);
  border-radius: 4px;
  padding: 1.15rem;
  margin-bottom: 1.25rem;
}

.co-receipt-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.co-receipt-step {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: var(--color-accent, #c9a96e);
  color: #111;
  padding: 0.15rem 0.45rem;
  border-radius: 2px;
}

.co-receipt-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #fff;
  margin: 0;
}

.co-receipt-desc {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.4;
  margin: 0 0 0.85rem 0;
}

.co-receipt-success {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.85rem 1rem;
  border-radius: 3px;
}

.co-receipt-success-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.co-receipt-success-text strong {
  font-size: 0.76rem;
  color: #22c55e;
  letter-spacing: 0.05em;
}

.co-receipt-success-text span {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.65);
}

.co-receipt-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.co-file-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  padding: 1.15rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.co-file-dropzone:hover {
  border-color: var(--color-accent, #c9a96e);
  background: rgba(201, 169, 110, 0.04);
}

.co-file-dropzone.has-file {
  border-style: solid;
  border-color: rgba(201, 169, 110, 0.5);
}

.co-file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.co-dropzone-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.35rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
}

.co-dropzone-prompt small {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
}

.co-file-preview-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.co-file-thumb {
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid var(--color-accent, #c9a96e);
}

.co-file-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
}

.co-file-name {
  font-size: 0.75rem;
  color: #fff;
  font-weight: 500;
  word-break: break-all;
}

.co-file-change {
  font-size: 0.66rem;
  color: var(--color-accent, #c9a96e);
}

.btn-upload-receipt {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-accent, #c9a96e);
  color: #111;
  border: none;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.75rem 1.25rem;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: 100%;
}

.btn-upload-receipt:hover:not(:disabled) {
  opacity: 0.9;
}

.btn-upload-receipt:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.co-modal-actions {
  display: flex;
  gap: 0.85rem;
  justify-content: center;
}

.btn-modal-primary {
  background: var(--color-accent, #c9a96e);
  color: #111;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.85rem 1.5rem;
  border-radius: 2px;
  text-decoration: none;
  transition: opacity 0.2s;
}
.btn-modal-primary:hover { opacity: 0.9; }

.btn-modal-secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 0.85rem 1.5rem;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-modal-secondary:hover {
  border-color: #fff;
  color: #fff;
}
</style>

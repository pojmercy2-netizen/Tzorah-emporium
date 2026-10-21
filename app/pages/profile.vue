<template>
  <div class="profile-page">

    <!-- ════════════════════════════════════════════════════ -->
    <!--  PROFILE HERO                                        -->
    <!-- ════════════════════════════════════════════════════ -->
    <div class="profile-hero">
      <div class="profile-hero__bg"></div>
      <div class="profile-hero__content container">
        <div class="profile-avatar-wrap">
          <div class="profile-avatar">
            <span class="profile-avatar__initials">{{ userInitials }}</span>
          </div>
          <button class="profile-avatar__edit" @click="activeTab = 'settings'" title="Edit profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </div>
        <div class="profile-hero__info">
          <h1 class="profile-hero__name">{{ user.firstName }} {{ user.lastName }}</h1>
          <p class="profile-hero__email">{{ user.email }}</p>
          <div class="profile-hero__meta">
            <span class="profile-member-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ELITE MEMBER
            </span>
            <span class="profile-hero__since">Member since {{ user.memberSince }}</span>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="profile-stats">
          <div class="profile-stat">
            <span class="profile-stat__num">{{ orders.length }}</span>
            <span class="profile-stat__label">Orders</span>
          </div>
          <div class="profile-stat__divider"></div>
          <div class="profile-stat">
            <span class="profile-stat__num">{{ wishlistItems.length }}</span>
            <span class="profile-stat__label">Wishlist</span>
          </div>
          <div class="profile-stat__divider"></div>
          <div class="profile-stat">
            <span class="profile-stat__num">{{ deliveredCount }}</span>
            <span class="profile-stat__label">Delivered</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════ -->
    <!--  TAB BAR                                             -->
    <!-- ════════════════════════════════════════════════════ -->
    <div class="profile-tabs-bar">
      <div class="container">
        <div class="profile-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['profile-tab', { 'profile-tab--active': activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <span class="profile-tab__icon" v-html="tab.icon"></span>
            {{ tab.label }}
            <span v-if="tab.id === 'orders' && orders.length" class="profile-tab__badge">{{ orders.length }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════ -->
    <!--  MAIN CONTENT                                        -->
    <!-- ════════════════════════════════════════════════════ -->
    <main class="container profile-main">

      <!-- ══ OVERVIEW ══ -->
      <div v-if="activeTab === 'overview'" class="tab-content">

        <!-- Welcome Banner -->
        <div class="welcome-banner">
          <div class="welcome-banner__text">
            <h2>Welcome back, {{ user.firstName }}! 👋</h2>
            <p>Here's a snapshot of your TZORAH EMPORIUM account.</p>
          </div>
          <NuxtLink to="/shop" class="welcome-banner__cta">SHOP NEW ARRIVALS →</NuxtLink>
        </div>

        <!-- Admin Console Banner (only visible to admin users) -->
        <div v-if="user.isAdmin" class="admin-banner">
          <div class="admin-banner__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <div class="admin-banner__text">
            <span class="admin-banner__label">ADMIN ACCESS</span>
            <p>You have administrator privileges. Access the full management console to manage products, orders, and customers.</p>
          </div>
          <NuxtLink to="/admin/dashboard" class="admin-banner__btn">OPEN ADMIN CONSOLE →</NuxtLink>
        </div>

        <!-- Recent Orders -->
        <section class="profile-section">
          <div class="profile-section__header">
            <h3>Recent Orders</h3>
            <button class="section-view-all" @click="activeTab = 'orders'">VIEW ALL</button>
          </div>

          <!-- Loading state -->
          <div v-if="ordersLoading" class="orders-loading">
            <div v-for="i in 3" :key="i" class="skeleton-row"></div>
          </div>

          <!-- Empty state -->
          <div v-else-if="orders.length === 0" class="empty-state">
            <div class="empty-state__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <p class="empty-state__title">No orders yet</p>
            <p class="empty-state__sub">Start exploring our collection and place your first order.</p>
            <NuxtLink to="/shop" class="empty-state__cta">SHOP NOW</NuxtLink>
          </div>

          <!-- Orders list -->
          <div v-else class="orders-list">
            <div v-for="order in orders.slice(0, 3)" :key="order.id" class="order-row" @click="openOrderDetail(order)">
              <div class="order-row__img">
                <img
                  v-if="order.items?.[0]?.product?.image"
                  :src="order.items[0].product.image"
                  :alt="order.items[0].product.name"
                />
                <div v-else class="order-row__img-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
              </div>
              <div class="order-row__info">
                <p class="order-row__name">
                  {{ order.items?.[0]?.product?.name || 'Order' }}
                  <span v-if="order.items?.length > 1" class="order-row__more">+{{ order.items.length - 1 }} more</span>
                </p>
                <p class="order-row__meta">Order #{{ order.id }} &middot; {{ formatDate(order.created_at) }}</p>
              </div>
              <div class="order-row__right">
                <span :class="['order-status', `order-status--${order.status.toLowerCase()}`]">{{ order.status }}</span>
                <p class="order-row__price">₦{{ Number(order.total_price).toLocaleString() }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Wishlist Preview -->
        <section class="profile-section">
          <div class="profile-section__header">
            <h3>Wishlist</h3>
            <button class="section-view-all" @click="activeTab = 'wishlist'">VIEW ALL</button>
          </div>
          <div v-if="wishlistItems.length === 0" class="wishlist-empty-inline">
            <p>Your wishlist is empty. <NuxtLink to="/shop">Browse the collection →</NuxtLink></p>
          </div>
          <div v-else class="wishlist-preview-grid">
            <div v-for="item in wishlistItems.slice(0, 4)" :key="item.id" class="wishlist-card">
              <div class="wishlist-card__img">
                <img :src="item.image" :alt="item.name" />
              </div>
              <p class="wishlist-card__name">{{ item.name }}</p>
              <p class="wishlist-card__price">{{ item.priceFormatted || ('₦' + Number(item.price || 0).toLocaleString()) }}</p>
              <button class="wishlist-card__add" @click="addWishlistToCart(item)">ADD TO BAG</button>
            </div>
          </div>
        </section>

        <!-- Account Summary Cards -->
        <section class="account-cards">
          <div class="account-card" @click="activeTab = 'settings'">
            <div class="account-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div class="account-card__info">
              <p class="account-card__title">Personal Info</p>
              <p class="account-card__sub">Manage name, email &amp; password</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div class="account-card" @click="activeTab = 'orders'">
            <div class="account-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <div class="account-card__info">
              <p class="account-card__title">Order History</p>
              <p class="account-card__sub">{{ orders.length }} order{{ orders.length !== 1 ? 's' : '' }} placed</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div class="account-card" @click="activeTab = 'wishlist'">
            <div class="account-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div class="account-card__info">
              <p class="account-card__title">Wishlist</p>
              <p class="account-card__sub">{{ wishlistItems.length }} saved item{{ wishlistItems.length !== 1 ? 's' : '' }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div class="account-card account-card--danger" @click="signOut">
            <div class="account-card__icon account-card__icon--danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </div>
            <div class="account-card__info">
              <p class="account-card__title">Sign Out</p>
              <p class="account-card__sub">End your current session</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </section>
      </div>

      <!-- ══ ORDERS TAB ══ -->
      <div v-else-if="activeTab === 'orders'" class="tab-content">
        <div class="profile-section">
          <div class="orders-tab-header">
            <div class="orders-tab-header__left">
              <h3 class="tab-section-title">Order History</h3>
              <span v-if="orders.length > 0" class="orders-count-badge">{{ orders.length }}</span>
            </div>
            
            <div class="orders-tab-header__right">
              <!-- Clear All Orders Button -->
              <button
                v-if="orders.length > 0"
                class="btn-clear-history"
                @click="confirmClearAllOrders"
                title="Clear all orders from history"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                <span>Clear Order History</span>
              </button>

              <!-- Filter tabs -->
              <div class="order-filters">
                <button
                  v-for="f in orderFilters"
                  :key="f.key"
                  :class="['order-filter-btn', { 'order-filter-btn--active': orderFilter === f.key }]"
                  @click="orderFilter = f.key"
                >{{ f.label }}</button>
              </div>
            </div>
          </div>

          <!-- Loading -->
          <div v-if="ordersLoading" class="orders-loading">
            <div v-for="i in 4" :key="i" class="skeleton-card"></div>
          </div>

          <!-- Empty -->
          <div v-else-if="filteredOrders.length === 0" class="empty-state">
            <div class="empty-state__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <p class="empty-state__title">No orders found</p>
            <p class="empty-state__sub">You haven't placed any {{ orderFilter !== 'all' ? orderFilter.toLowerCase() : '' }} orders yet.</p>
            <NuxtLink to="/shop" class="empty-state__cta">SHOP NOW</NuxtLink>
          </div>

          <!-- Orders list -->
          <div v-else class="orders-full-list">
            <div v-for="order in filteredOrders" :key="order.id" class="order-card">
              <div class="order-card__header">
                <div class="order-card__header-left">
                  <p class="order-card__id">Order #{{ order.id }}</p>
                  <p class="order-card__date">{{ formatDate(order.created_at) }}</p>
                </div>
                <div class="order-card__header-right">
                  <span :class="['order-status', `order-status--${order.status.toLowerCase()}`]">{{ order.status }}</span>
                  <span :class="['payment-badge', order.payment_status === 'Paid' ? 'payment-badge--paid' : 'payment-badge--unpaid']">
                    {{ order.payment_status === 'Paid' ? '✓ PAID & CONFIRMED' : '⏳ PENDING ADMIN VERIFICATION' }}
                  </span>
                  <button
                    class="btn-order-delete"
                    @click.stop="confirmDeleteOrder(order)"
                    title="Remove this order from history"
                    aria-label="Remove order from history"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Items in this order -->
              <div class="order-card__body">
                <div v-for="item in order.items" :key="item.id" class="order-card__item">
                  <div class="order-card__img-wrap">
                    <img
                      v-if="item.product?.image"
                      :src="item.product.image"
                      :alt="item.product.name"
                      class="order-card__img"
                    />
                    <div v-else class="order-card__img-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                    </div>
                  </div>
                  <div class="order-card__item-info">
                    <p class="order-card__item-name">{{ item.product?.name || 'Product' }}</p>
                    <p class="order-card__item-meta">Qty: {{ item.quantity }} &middot; ₦{{ Number(item.unit_price).toLocaleString() }} each</p>
                  </div>
                  <p class="order-card__price">₦{{ (item.quantity * item.unit_price).toLocaleString() }}</p>
                </div>
              </div>

              <!-- Footer -->
              <div class="order-card__footer">
                <div class="order-card__shipping">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {{ order.shipping_address }}
                </div>
                
                <div class="order-card__footer-right">
                  <!-- Payment Receipt Status & Action -->
                  <div v-if="order.payment_receipt" class="order-receipt-pill order-receipt-pill--uploaded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Proof of Payment Attached</span>
                    <a :href="order.payment_receipt" target="_blank" class="receipt-pill-link">View</a>
                  </div>
                  <div v-else-if="order.payment_status !== 'Paid'" class="order-receipt-action">
                    <label class="btn-profile-upload-receipt">
                      <input type="file" accept="image/*,application/pdf" class="hidden-file-input" @change="uploadOrderReceipt(order, $event)" />
                      <span>📸 Upload Receipt</span>
                    </label>
                  </div>

                  <div class="order-card__total-row">
                    <span class="order-card__total-label">Total</span>
                    <span class="order-card__total">₦{{ Number(order.total_price).toLocaleString() }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ WISHLIST TAB ══ -->
      <div v-else-if="activeTab === 'wishlist'" class="tab-content">
        <div class="profile-section">
          <h3 class="tab-section-title">My Wishlist ({{ wishlistItems.length }})</h3>
          <div v-if="wishlistItems.length === 0" class="empty-state">
            <div class="empty-state__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <p class="empty-state__title">Your wishlist is empty</p>
            <p class="empty-state__sub">Save your favourite pieces and find them here anytime.</p>
            <NuxtLink to="/shop" class="empty-state__cta">BROWSE COLLECTION</NuxtLink>
          </div>
          <div v-else class="wishlist-grid">
            <div v-for="item in wishlistItems" :key="item.id" class="wishlist-full-card">
              <div class="wishlist-full-card__img">
                <img :src="item.image" :alt="item.name" />
                <button class="wishlist-remove" @click="removeWishlistItem(item.id)" aria-label="Remove">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div class="wishlist-full-card__details">
                <p class="wishlist-full-card__name">{{ item.name }}</p>
                <p class="wishlist-full-card__price">{{ item.priceFormatted || ('₦' + Number(item.price || 0).toLocaleString()) }}</p>
                <button class="wishlist-full-card__add" @click="addWishlistToCart(item)">ADD TO BAG</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ SETTINGS TAB ══ -->
      <div v-else-if="activeTab === 'settings'" class="tab-content">

        <!-- Settings page header -->
        <div class="settings-page-header">
          <h2 class="settings-page-title">Account Settings</h2>
          <p class="settings-page-sub">Manage your personal details, addresses and preferences.</p>
        </div>

        <div class="settings-grid">

          <!-- Personal Info -->
          <div class="settings-card">
            <div class="settings-card__header">
              <div class="settings-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <h4 class="settings-card__title">Personal Information</h4>
                <p class="settings-card__sub">Your name, email and contact details</p>
              </div>
            </div>
            <div class="settings-form">
              <div class="settings-form__row">
                <div class="settings-form__group">
                  <label for="s-firstname">First Name</label>
                  <input id="s-firstname" v-model="user.firstName" type="text" placeholder="First name" autocomplete="given-name" />
                </div>
                <div class="settings-form__group">
                  <label for="s-lastname">Last Name</label>
                  <input id="s-lastname" v-model="user.lastName" type="text" placeholder="Last name" autocomplete="family-name" />
                </div>
              </div>
              <div class="settings-form__group">
                <label for="s-email">Email Address</label>
                <input id="s-email" v-model="user.email" type="email" placeholder="you@example.com" autocomplete="email" />
              </div>
              <div class="settings-form__group">
                <label for="s-phone">Phone Number</label>
                <input id="s-phone" v-model="user.phone" type="tel" placeholder="+234 800 000 0000" autocomplete="tel" />
              </div>
              <button class="settings-save-btn" @click="saveProfile">SAVE CHANGES</button>
            </div>
          </div>

          <!-- Shipping Address -->
          <div class="settings-card">
            <div class="settings-card__header">
              <div class="settings-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 class="settings-card__title">Shipping Address</h4>
                <p class="settings-card__sub">Your default delivery location</p>
              </div>
            </div>
            <div class="settings-form">
              <div class="settings-form__group">
                <label for="s-street">Street Address</label>
                <input id="s-street" v-model="user.address.street" type="text" placeholder="123 Fashion Street" autocomplete="street-address" />
              </div>
              <div class="settings-form__row">
                <div class="settings-form__group">
                  <label for="s-city">City</label>
                  <input id="s-city" v-model="user.address.city" type="text" placeholder="Lagos" autocomplete="address-level2" />
                </div>
                <div class="settings-form__group">
                  <label for="s-state">State</label>
                  <input id="s-state" v-model="user.address.state" type="text" placeholder="Lagos State" autocomplete="address-level1" />
                </div>
              </div>
              <div class="settings-form__group">
                <label for="s-country">Country</label>
                <input id="s-country" v-model="user.address.country" type="text" placeholder="Nigeria" autocomplete="country-name" />
              </div>
              <button class="settings-save-btn" @click="saveProfile">SAVE ADDRESS</button>
            </div>
          </div>

          <!-- Change Password -->
          <div class="settings-card">
            <div class="settings-card__header">
              <div class="settings-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div>
                <h4 class="settings-card__title">Change Password</h4>
                <p class="settings-card__sub">Keep your account secure</p>
              </div>
            </div>
            <div class="settings-form">
              <div class="settings-form__group">
                <label for="s-curpass">Current Password</label>
                <input id="s-curpass" v-model="passwords.current" type="password" placeholder="••••••••" autocomplete="current-password" />
              </div>
              <div class="settings-form__group">
                <label for="s-newpass">New Password</label>
                <input id="s-newpass" v-model="passwords.new" type="password" placeholder="••••••••" autocomplete="new-password" />
              </div>
              <div class="settings-form__group">
                <label for="s-confpass">Confirm New Password</label>
                <input id="s-confpass" v-model="passwords.confirm" type="password" placeholder="••••••••" autocomplete="new-password" />
              </div>
              <button class="settings-save-btn" @click="changePassword">UPDATE PASSWORD</button>
            </div>
          </div>

          <!-- Notifications -->
          <div class="settings-card">
            <div class="settings-card__header">
              <div class="settings-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <div>
                <h4 class="settings-card__title">Notifications</h4>
                <p class="settings-card__sub">Choose what updates you receive</p>
              </div>
            </div>
            <div class="notifications-list">
              <label v-for="pref in notifPrefs" :key="pref.id" class="notif-row">
                <div class="notif-row__info">
                  <p class="notif-row__title">{{ pref.title }}</p>
                  <p class="notif-row__desc">{{ pref.desc }}</p>
                </div>
                <div :class="['notif-toggle', { 'notif-toggle--on': pref.enabled }]" @click="pref.enabled = !pref.enabled">
                  <div class="notif-toggle__dot"></div>
                </div>
              </label>
            </div>
            <button class="settings-save-btn settings-save-btn--mt" @click="saveProfile">SAVE PREFERENCES</button>
          </div>

          <!-- Danger Zone -->
          <div class="settings-card settings-card--danger settings-card--full">
            <div class="settings-card__header">
              <div class="settings-card__icon settings-card__icon--danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              </div>
              <div>
                <h4 class="settings-card__title settings-card__title--danger">Account & Data</h4>
                <p class="settings-card__sub">Clear your stored purchase history or end your active session.</p>
              </div>
            </div>
            <div class="settings-danger-btns">
              <button
                v-if="orders.length > 0"
                class="danger-btn danger-btn--red"
                @click="confirmClearAllOrders"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                CLEAR ORDER HISTORY
              </button>
              <button class="danger-btn danger-btn--outline" @click="signOut">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                SIGN OUT
              </button>
            </div>
          </div>

        </div>
      </div>

    </main>

    <!-- ════════════════════════════════════════════════════ -->
    <!--  ORDER DETAIL MODAL                                  -->
    <!-- ════════════════════════════════════════════════════ -->
    <Transition name="modal">
      <div v-if="selectedOrder" class="modal-overlay" @click.self="selectedOrder = null">
        <div class="modal-box">
          <div class="modal-header">
            <div>
              <p class="modal-title">Order #{{ selectedOrder.id }}</p>
              <p class="modal-date">{{ formatDate(selectedOrder.created_at) }}</p>
            </div>
            <button class="modal-close" @click="selectedOrder = null">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="modal-body">
            <!-- Status row -->
            <div class="modal-status-row">
              <span :class="['order-status', `order-status--${selectedOrder.status.toLowerCase()}`]">{{ selectedOrder.status }}</span>
              <span :class="['payment-badge', `payment-badge--${selectedOrder.payment_status.toLowerCase()}`]">{{ selectedOrder.payment_status }}</span>
            </div>
            <!-- Items -->
            <div class="modal-items">
              <div v-for="item in selectedOrder.items" :key="item.id" class="modal-item">
                <div class="modal-item__img">
                  <img v-if="item.product?.image" :src="item.product.image" :alt="item.product.name" />
                  <div v-else class="modal-item__img-ph"></div>
                </div>
                <div class="modal-item__info">
                  <p class="modal-item__name">{{ item.product?.name || 'Product' }}</p>
                  <p class="modal-item__meta">Qty: {{ item.quantity }}</p>
                </div>
                <p class="modal-item__price">₦{{ (item.quantity * item.unit_price).toLocaleString() }}</p>
              </div>
            </div>
            <!-- Summary -->
            <div class="modal-summary">
              <div class="modal-summary__row">
                <span>Shipping to</span>
                <span>{{ selectedOrder.shipping_address }}</span>
              </div>
              <div class="modal-summary__row modal-summary__row--total">
                <span>Total</span>
                <span>₦{{ Number(selectedOrder.total_price).toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ════════════════════════════════════════════════════ -->
    <!--  CLEAR ORDERS CONFIRMATION MODAL                     -->
    <!-- ════════════════════════════════════════════════════ -->
    <Transition name="modal">
      <div v-if="showClearOrdersModal" class="confirm-modal-overlay" @click.self="showClearOrdersModal = false">
        <div class="confirm-modal">
          <div class="confirm-modal__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
          <h3 class="confirm-modal__title">
            {{ orderToDelete ? `Remove Order #${orderToDelete.id}?` : 'Clear All Order History?' }}
          </h3>
          <p class="confirm-modal__desc">
            {{ orderToDelete 
                ? `Are you sure you want to remove Order #${orderToDelete.id} from your account history? This action cannot be undone.` 
                : `Are you sure you want to clear all ${orders.length} order records from your history? This action cannot be undone.` 
            }}
          </p>
          <div class="confirm-modal__actions">
            <button class="confirm-modal__btn confirm-modal__btn--cancel" @click="showClearOrdersModal = false" :disabled="isClearingOrders">
              Cancel
            </button>
            <button class="confirm-modal__btn confirm-modal__btn--danger" @click="handleClearOrders" :disabled="isClearingOrders">
              <span v-if="isClearingOrders">Clearing...</span>
              <span v-else>{{ orderToDelete ? 'Delete Order' : 'Yes, Clear All' }}</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '~/composables/useAuth'

definePageMeta({ middleware: 'auth' })

useHead({
  title: 'My Account | TZORAH EMPORIUM',
  meta: [{ name: 'description', content: 'Manage your TZORAH EMPORIUM account, orders, wishlist and settings.' }]
})

const route = useRoute()
const { currentUser, logout: authLogout } = useAuth()
const userToken = useCookie('userToken')
const cartCount = useState('cartCount', () => 0)
const cartItems = useState('cartItems', () => [])
const toasts    = useState('toasts', () => [])

const getApiUrl = () => {
  const config = useRuntimeConfig()
  return config.public.apiBase || '/api/v1'
}

// ─── Active Tab ─────────────────────────────────────────
const tabs = [
  { id: 'overview', label: 'Overview',  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
  { id: 'orders',   label: 'Orders',    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' },
  { id: 'wishlist', label: 'Wishlist',  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { id: 'settings', label: 'Settings',  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' },
]
const initialTab = route.query.tab && tabs.some(t => t.id === route.query.tab) ? String(route.query.tab) : 'overview'
const activeTab = ref(initialTab)

watch(() => route.query.tab, (newTab) => {
  if (newTab && tabs.some(t => t.id === newTab)) {
    activeTab.value = String(newTab)
  }
})

// ─── User Data ──────────────────────────────────────────
const user = ref({
  firstName: '', lastName: '', email: '', phone: '', memberSince: '', isAdmin: false,
  address: { street: '', city: '', state: '', country: 'Nigeria' }
})

const syncUser = () => {
  if (currentUser.value) {
    user.value.firstName   = currentUser.value.firstName   || ''
    user.value.lastName    = currentUser.value.lastName    || ''
    user.value.email       = currentUser.value.email       || ''
    user.value.memberSince = currentUser.value.memberSince || ''
    user.value.isAdmin     = currentUser.value.isAdmin     || false
  }
}
watch(currentUser, syncUser, { immediate: true })
onMounted(syncUser)

const userInitials = computed(() => {
  const f = user.value.firstName?.[0] || 'U'
  const l = user.value.lastName?.[0]  || ''
  return (f + l).toUpperCase()
})

// ─── Orders (live from API) ──────────────────────────────
const orders = ref([])
const ordersLoading = ref(true)
const selectedOrder = ref(null)

const orderFilters = [
  { key: 'all',        label: 'All' },
  { key: 'Pending',    label: 'Pending' },
  { key: 'Processing', label: 'Processing' },
  { key: 'Delivered',  label: 'Delivered' },
]
const orderFilter = ref('all')

const filteredOrders = computed(() => {
  if (orderFilter.value === 'all') return orders.value
  return orders.value.filter(o => o.status === orderFilter.value)
})

const fetchOrders = async () => {
  if (!userToken.value) return
  ordersLoading.value = true
  try {
    const data = await $fetch(`${getApiUrl()}/account/orders`, {
      headers: { Authorization: `Bearer ${userToken.value}` }
    })
    orders.value = data || []
  } catch (err) {
    console.error('Failed to fetch orders:', err)
    orders.value = []
  } finally {
    ordersLoading.value = false
  }
}

onMounted(fetchOrders)

const openOrderDetail = (order) => { selectedOrder.value = order }

const uploadOrderReceipt = async (order, e) => {
  const file = e.target.files?.[0]
  if (!file || !order?.id) return
  try {
    const formData = new FormData()
    formData.append('receipt', file)

    const res = await $fetch(`/api/v1/orders/${order.id}/receipt`, {
      method: 'POST',
      body: formData
    })

    order.payment_receipt = res.payment_receipt
    toasts.value.push({ id: Date.now(), message: `✓ Receipt for Order #${order.id} uploaded successfully!` })
  } catch (err) {
    console.error('Failed to upload receipt:', err)
    toasts.value.push({ id: Date.now(), message: `❌ ${err?.data?.message || err?.message || 'Failed to upload receipt'}` })
  }
}

const deliveredCount = computed(() =>
  orders.value.filter(o => o.status === 'Delivered').length
)

// ─── Clear / Delete Orders ──────────────────────────────
const isClearingOrders = ref(false)
const showClearOrdersModal = ref(false)
const orderToDelete = ref(null)

const confirmClearAllOrders = () => {
  orderToDelete.value = null
  showClearOrdersModal.value = true
}

const confirmDeleteOrder = (order) => {
  orderToDelete.value = order
  showClearOrdersModal.value = true
}

const handleClearOrders = async () => {
  if (!userToken.value) return
  isClearingOrders.value = true
  try {
    const url = orderToDelete.value
      ? `${getApiUrl()}/account/orders?id=${orderToDelete.value.id}`
      : `${getApiUrl()}/account/orders`

    await $fetch(url, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${userToken.value}` }
    })

    if (orderToDelete.value) {
      const removedId = orderToDelete.value.id
      orders.value = orders.value.filter(o => o.id !== removedId)
      if (selectedOrder.value?.id === removedId) {
        selectedOrder.value = null
      }
      toasts.value.push({ id: Date.now(), message: `✓ Order #${removedId} removed from history.` })
    } else {
      orders.value = []
      selectedOrder.value = null
      toasts.value.push({ id: Date.now(), message: '✓ Order history cleared successfully.' })
    }
    showClearOrdersModal.value = false
    orderToDelete.value = null
  } catch (err) {
    console.error('Failed to clear orders:', err)
    toasts.value.push({
      id: Date.now(),
      message: `❌ ${err?.data?.message || err?.message || 'Failed to clear order history'}`
    })
  } finally {
    isClearingOrders.value = false
  }
}

// ─── Wishlist (shared reactive & localStorage-persisted) ──
const { wishlistItems, removeFromWishlist, loadWishlist: initWishlist } = useWishlist()

onMounted(initWishlist)

const removeWishlistItem = (id) => {
  removeFromWishlist(id)
}

const addWishlistToCart = (item) => {
  cartCount.value++
  const existing = cartItems.value.find(i => i.id === item.id)
  if (existing) { existing.quantity++; showToast(`"${item.name}" quantity updated.`); return }
  cartItems.value.push({ ...item, quantity: 1, selectedColor: item.colors?.[0] || '', selectedSize: 'M' })
  showToast(`"${item.name}" added to bag.`)
}

// ─── Passwords ──────────────────────────────────────────
const passwords = ref({ current: '', new: '', confirm: '' })

// ─── Notifications ──────────────────────────────────────
const notifPrefs = ref([
  { id: 'order',    title: 'Order Updates',   desc: 'Shipping & delivery notifications', enabled: true  },
  { id: 'promo',   title: 'Promotions',       desc: 'Exclusive offers and discounts',    enabled: true  },
  { id: 'new',     title: 'New Arrivals',     desc: 'First to know about new drops',     enabled: false },
  { id: 'loyalty', title: 'Loyalty Rewards',  desc: 'Points and tier updates',           enabled: true  },
])

// ─── Actions ────────────────────────────────────────────
const saveProfile = () => showToast('Profile updated successfully ✓')

const changePassword = () => {
  if (!passwords.value.current)                                { showToast('Please enter your current password.'); return }
  if (passwords.value.new !== passwords.value.confirm)         { showToast('New passwords do not match.'); return }
  if (passwords.value.new.length < 6)                          { showToast('New password must be at least 6 characters.'); return }
  showToast('Password updated successfully ✓')
  passwords.value = { current: '', new: '', confirm: '' }
}

const signOut = () => authLogout()

const showToast = (msg) => toasts.value.push({ id: Date.now(), message: msg })

// ─── Helpers ────────────────────────────────────────────
const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
.profile-page {
  background: #f5f1eb;
  min-height: 100vh;
  font-family: var(--font-sans);
}

/* ─── Profile Hero ─────────────────────────────── */
.profile-hero {
  position: relative;
  background: var(--color-text-dark);
  padding: 2.5rem 0 0;
  overflow: hidden;
}
.profile-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2520 60%, #1a1a1a 100%);
  opacity: 0.97;
}
.profile-hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}
.profile-avatar-wrap { position: relative; }
.profile-avatar {
  width: 88px; height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c8973a, #e4b65a);
  display: flex; align-items: center; justify-content: center;
  border: 3px solid rgba(255,255,255,0.12);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
}
.profile-avatar__initials {
  font-family: var(--font-serif);
  font-size: 2rem; color: #fff; font-weight: 400; letter-spacing: 0.05em;
}
.profile-avatar__edit {
  position: absolute; bottom: 2px; right: 2px;
  width: 26px; height: 26px;
  background: #fff; border: none; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--color-text-dark);
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  transition: transform 0.2s;
}
.profile-avatar__edit:hover { transform: scale(1.12); }

.profile-hero__info { color: #fff; }
.profile-hero__name { font-family: var(--font-serif); font-size: 1.75rem; font-weight: 400; color: #fff; margin-bottom: 0.15rem; }
.profile-hero__email { font-size: 0.82rem; color: rgba(255,255,255,0.6); margin-bottom: 0.5rem; }
.profile-hero__meta { display: flex; align-items: center; justify-content: center; gap: 0.75rem; flex-wrap: wrap; }
.profile-member-badge {
  display: inline-flex; align-items: center; gap: 0.35rem;
  background: linear-gradient(90deg, #c8973a, #e4b65a);
  color: #fff; font-size: 0.6rem; font-weight: 800; letter-spacing: 0.12em;
  padding: 0.25rem 0.65rem; border-radius: 99px;
}
.profile-hero__since { font-size: 0.72rem; color: rgba(255,255,255,0.45); }

/* Stats Row */
.profile-stats {
  display: flex; align-items: center; gap: 2rem;
  background: rgba(255,255,255,0.055);
  border-top: 1px solid rgba(255,255,255,0.07);
  width: 100%; padding: 1.25rem 0;
  justify-content: center; margin-top: 1rem;
}
.profile-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.profile-stat__num { font-size: 1.35rem; font-weight: 800; color: #fff; }
.profile-stat__label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; color: rgba(255,255,255,0.45); text-transform: uppercase; }
.profile-stat__divider { width: 1px; height: 30px; background: rgba(255,255,255,0.1); }

/* ─── Tabs Bar ─────────────────────────────────── */
.profile-tabs-bar {
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.07);
  position: sticky;
  top: calc(var(--header-height, 64px) + 0px);
  z-index: 20;
}
.profile-tabs { display: flex; gap: 0; overflow-x: auto; scrollbar-width: none; }
.profile-tabs::-webkit-scrollbar { display: none; }
.profile-tab {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--font-sans); font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 1.1rem 1.4rem;
  background: none; border: none; color: var(--color-text-muted);
  cursor: pointer; white-space: nowrap;
  position: relative; transition: color 0.2s;
}
.profile-tab:hover { color: var(--color-text-dark); }
.profile-tab--active { color: var(--color-text-dark); }
.profile-tab--active::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 100%; height: 2px; background: var(--color-accent);
}
.profile-tab__badge {
  background: var(--color-accent); color: #fff;
  font-size: 0.55rem; font-weight: 800;
  min-width: 16px; height: 16px;
  border-radius: 99px; padding: 0 4px;
  display: flex; align-items: center; justify-content: center;
}
.profile-tab__icon { display: flex; }

/* ─── Main ─────────────────────────────────────── */
.profile-main { padding: 2rem 0 6rem; }
.tab-content { max-width: 900px; margin: 0 auto; }

/* Welcome Banner */
.welcome-banner {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--color-text-dark); color: #fff;
  border-radius: 12px; padding: 1.5rem 1.75rem;
  margin-bottom: 2rem; gap: 1rem;
}
.welcome-banner__text h2 { font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 0.2rem; }
.welcome-banner__text p { font-size: 0.78rem; color: rgba(255,255,255,0.6); }
.welcome-banner__cta {
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  color: var(--color-text-dark); background: #fff;
  padding: 0.7rem 1.25rem; text-decoration: none;
  border-radius: 4px; white-space: nowrap; transition: opacity 0.2s;
}
.welcome-banner__cta:hover { opacity: 0.85; }

/* Admin Console Banner */
.admin-banner {
  display: flex; align-items: center; gap: 1.25rem;
  background: linear-gradient(135deg, #0d0d0d, #1a1408);
  border: 1px solid rgba(184, 152, 116, 0.35);
  border-left: 3px solid #b89874;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.admin-banner__icon {
  flex-shrink: 0;
  width: 42px; height: 42px;
  background: rgba(184, 152, 116, 0.12);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #b89874;
}
.admin-banner__text { flex: 1; min-width: 180px; }
.admin-banner__label {
  display: block;
  font-size: 0.62rem; font-weight: 800; letter-spacing: 0.15em;
  color: #b89874; margin-bottom: 0.3rem;
}
.admin-banner__text p {
  font-size: 0.78rem; color: rgba(255,255,255,0.55); line-height: 1.5;
}
.admin-banner__btn {
  flex-shrink: 0;
  font-size: 0.68rem; font-weight: 800; letter-spacing: 0.1em;
  color: #000; background: #b89874;
  padding: 0.65rem 1.25rem;
  text-decoration: none; border-radius: 4px;
  white-space: nowrap;
  transition: background 0.2s, box-shadow 0.2s;
}
.admin-banner__btn:hover {
  background: #d4aa82;
  box-shadow: 0 0 14px rgba(184, 152, 116, 0.4);
}

/* Section headers */
.profile-section { margin-bottom: 2.5rem; }
.profile-section__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.1rem; }
.profile-section__header h3 { font-size: 0.95rem; font-weight: 700; color: var(--color-text-dark); }
.tab-section-title { font-size: 1.05rem; font-weight: 700; color: var(--color-text-dark); margin-bottom: 1.25rem; }
.section-view-all {
  font-size: 0.68rem; font-weight: 800; letter-spacing: 0.1em;
  color: var(--color-accent); background: none; border: none; cursor: pointer;
}
.section-view-all:hover { text-decoration: underline; }

/* ─── Account Cards ───────────────────────────── */
.account-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}
.account-card {
  display: flex; align-items: center; gap: 1rem;
  background: #fff; border-radius: 12px;
  padding: 1.1rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  cursor: pointer; transition: box-shadow 0.2s, transform 0.2s;
  border: 1px solid transparent;
}
.account-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); transform: translateY(-1px); }
.account-card--danger:hover { border-color: rgba(192,57,43,0.2); }
.account-card__icon {
  width: 40px; height: 40px; background: #f5f1eb; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--color-text-dark); flex-shrink: 0;
}
.account-card__icon--danger { background: #fef0ef; color: #c0392b; }
.account-card__info { flex: 1; }
.account-card__title { font-size: 0.85rem; font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.15rem; }
.account-card__sub { font-size: 0.72rem; color: var(--color-text-muted); }

/* ─── Orders List (compact) ─────────────────────── */
.orders-list { display: flex; flex-direction: column; gap: 0.75rem; }
.order-row {
  display: flex; align-items: center; gap: 1rem;
  background: #fff; border-radius: 10px; padding: 0.9rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  cursor: pointer; transition: box-shadow 0.2s, transform 0.15s;
}
.order-row:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.08); transform: translateY(-1px); }
.order-row__img {
  width: 52px; height: 62px; border-radius: 6px;
  overflow: hidden; background: #ebe7e0; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.order-row__img img { width: 100%; height: 100%; object-fit: cover; }
.order-row__img-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.order-row__info { flex: 1; min-width: 0; }
.order-row__name { font-size: 0.85rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.order-row__more { font-size: 0.7rem; color: var(--color-text-muted); font-weight: 400; text-transform: none; margin-left: 0.4rem; }
.order-row__meta { font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.15rem; }
.order-row__right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem; flex-shrink: 0; }
.order-row__price { font-size: 0.88rem; font-weight: 700; color: var(--color-text-dark); }

/* ─── Status Badges ───────────────────────────── */
.order-status {
  display: inline-block;
  font-size: 0.58rem; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 99px;
}
.order-status--delivered  { background: #dcf0e4; color: #2d8a4e; }
.order-status--shipped    { background: #ddeeff; color: #1a5fa8; }
.order-status--processing { background: #fff3dc; color: #b5882e; }
.order-status--pending    { background: #eeeeee; color: #555; }
.order-status--cancelled  { background: #fde8e8; color: #c0392b; }
.payment-badge {
  display: inline-block;
  font-size: 0.58rem; font-weight: 800; letter-spacing: 0.06em;
  text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 99px;
}
.payment-badge--paid   { background: #dcf0e4; color: #2d8a4e; }
.payment-badge--unpaid { background: #fff3dc; color: #b5882e; }
.payment-badge--failed { background: #fde8e8; color: #c0392b; }

/* ─── Full Orders List ────────────────────────── */
.orders-tab-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.orders-tab-header__left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.orders-count-badge {
  background: rgba(0, 0, 0, 0.06);
  color: var(--color-text-dark);
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 99px;
}
.orders-tab-header__right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.btn-clear-history {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #fff;
  border: 1px solid rgba(220, 38, 38, 0.35);
  color: #dc2626;
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.42rem 0.85rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-clear-history:hover {
  background: #fee2e2;
  border-color: #dc2626;
  color: #b91c1c;
  transform: translateY(-1px);
}
.btn-order-delete {
  background: transparent;
  border: 1px solid transparent;
  color: #9ca3af;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 0.25rem;
}
.btn-order-delete:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #dc2626;
}
.order-filters { display: flex; gap: 0.4rem; }
.order-filter-btn {
  font-family: var(--font-sans); font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.06em; padding: 0.4rem 0.85rem;
  border: 1.5px solid #d8d3cc; background: #fff;
  border-radius: 99px; cursor: pointer; color: var(--color-text-muted);
  transition: all 0.2s;
}
.order-filter-btn--active { background: var(--color-text-dark); border-color: var(--color-text-dark); color: #fff; }
.order-filter-btn:hover:not(.order-filter-btn--active) { border-color: var(--color-text-dark); color: var(--color-text-dark); }

.orders-full-list { display: flex; flex-direction: column; gap: 1.25rem; }
.order-card {
  background: #fff; border-radius: 14px;
  overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s;
}
.order-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.09); }
.order-card__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f0ede8;
  flex-wrap: wrap; gap: 0.5rem;
}
.order-card__header-left {}
.order-card__id { font-size: 0.85rem; font-weight: 700; color: var(--color-text-dark); }
.order-card__date { font-size: 0.72rem; color: var(--color-text-muted); }
.order-card__header-right { display: flex; align-items: center; gap: 0.5rem; }
.order-card__body { padding: 0.85rem 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
.order-card__item { display: flex; align-items: center; gap: 1rem; }
.order-card__img-wrap {
  width: 58px; height: 68px; border-radius: 8px;
  overflow: hidden; background: #ebe7e0; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.order-card__img { width: 100%; height: 100%; object-fit: cover; }
.order-card__img-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.order-card__item-info { flex: 1; }
.order-card__item-name { font-size: 0.88rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; }
.order-card__item-meta { font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.15rem; }
.order-card__price { font-size: 0.9rem; font-weight: 700; color: var(--color-text-dark); white-space: nowrap; }
.order-card__footer {
  padding: 0.85rem 1.25rem; border-top: 1px solid #f0ede8;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 0.5rem;
}
.order-card__shipping {
  display: flex; align-items: center; gap: 0.35rem;
  font-size: 0.72rem; color: var(--color-text-muted);
  max-width: 60%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.order-card__footer-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.order-receipt-pill {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.65rem;
  border-radius: 99px;
}

.order-receipt-pill--uploaded {
  background: rgba(34, 197, 94, 0.12);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.receipt-pill-link {
  font-weight: 700;
  text-decoration: underline;
  color: #15803d;
  margin-left: 0.2rem;
}

.btn-profile-upload-receipt {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #111;
  background: var(--color-accent, #c9a96e);
  padding: 0.4rem 0.85rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-profile-upload-receipt:hover {
  opacity: 0.88;
}

.hidden-file-input {
  display: none;
}

.order-card__total-row { display: flex; align-items: center; gap: 0.75rem; }
.order-card__total-label { font-size: 0.72rem; color: var(--color-text-muted); font-weight: 600; }
.order-card__total { font-size: 1rem; font-weight: 800; color: var(--color-text-dark); }

/* ─── Wishlist ─────────────────────────────────── */
.wishlist-preview-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.wishlist-card {}
.wishlist-card__img { aspect-ratio: 3/4; border-radius: 8px; overflow: hidden; background: #ebe7e0; margin-bottom: 0.6rem; }
.wishlist-card__img img { width: 100%; height: 100%; object-fit: cover; }
.wishlist-card__name { font-size: 0.73rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; margin-bottom: 0.15rem; }
.wishlist-card__price { font-size: 0.73rem; color: var(--color-text-muted); margin-bottom: 0.5rem; }
.wishlist-card__add {
  font-size: 0.6rem; font-weight: 800; letter-spacing: 0.08em;
  background: var(--color-text-dark); color: #fff; border: none;
  padding: 0.45rem 0.75rem; cursor: pointer; border-radius: 3px;
  width: 100%; font-family: var(--font-sans); transition: opacity 0.2s;
}
.wishlist-card__add:hover { opacity: 0.8; }
.wishlist-empty-inline { font-size: 0.85rem; color: var(--color-text-muted); padding: 1.5rem 0; }
.wishlist-empty-inline a { color: var(--color-text-dark); font-weight: 600; }

.wishlist-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.wishlist-full-card {}
.wishlist-full-card__img {
  position: relative; aspect-ratio: 3/4;
  border-radius: 10px; overflow: hidden; background: #ebe7e0; margin-bottom: 0.7rem;
}
.wishlist-full-card__img img { width: 100%; height: 100%; object-fit: cover; }
.wishlist-remove {
  position: absolute; top: 0.6rem; right: 0.6rem;
  width: 26px; height: 26px; background: #fff; border: none;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.12); transition: all 0.2s;
}
.wishlist-remove:hover { background: #e25c5c; color: #fff; }
.wishlist-full-card__details { text-align: center; }
.wishlist-full-card__name { font-size: 0.8rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; margin-bottom: 0.15rem; }
.wishlist-full-card__price { font-size: 0.76rem; color: var(--color-text-muted); margin-bottom: 0.6rem; }
.wishlist-full-card__add {
  font-size: 0.66rem; font-weight: 800; letter-spacing: 0.08em;
  background: var(--color-text-dark); color: #fff; border: none;
  padding: 0.55rem 1rem; cursor: pointer; border-radius: 3px;
  width: 100%; font-family: var(--font-sans); transition: opacity 0.2s;
}
.wishlist-full-card__add:hover { opacity: 0.8; }

/* ─── Settings ─────────────────────────────────── */
.settings-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
.settings-card { background: #fff; border-radius: 14px; padding: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
.settings-card--danger { border: 1px solid rgba(192,57,43,0.15); }
.settings-card__title {
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em;
  color: var(--color-text-dark); text-transform: uppercase;
  margin-bottom: 1.25rem; padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0ede8;
}
.settings-card__title--danger { color: #c0392b; }
.settings-form { display: flex; flex-direction: column; gap: 0.85rem; }
.settings-form__row { display: flex; gap: 0.75rem; }
.settings-form__group { display: flex; flex-direction: column; gap: 0.3rem; flex: 1; }
.settings-form__group label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; color: var(--color-text-muted); text-transform: uppercase; }
.settings-form__group input {
  padding: 0.65rem 0.85rem; border: 1.5px solid #d8d3cc; border-radius: 6px;
  font-size: 0.85rem; font-family: var(--font-sans); color: var(--color-text-dark);
  background: #faf9f7; outline: none; transition: border-color 0.2s;
}
.settings-form__group input:focus { border-color: var(--color-text-dark); }
.settings-save-btn {
  background: var(--color-text-dark); color: #fff;
  font-family: var(--font-sans); font-size: 0.7rem; font-weight: 800;
  letter-spacing: 0.1em; padding: 0.75rem 1.5rem;
  border: none; cursor: pointer; border-radius: 4px;
  align-self: flex-start; margin-top: 0.25rem; transition: opacity 0.2s;
}
.settings-save-btn:hover { opacity: 0.85; }

/* Notifications */
.notifications-list { display: flex; flex-direction: column; gap: 0.85rem; }
.notif-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; cursor: pointer; }
.notif-row__info { flex: 1; }
.notif-row__title { font-size: 0.82rem; font-weight: 600; color: var(--color-text-dark); }
.notif-row__desc { font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.1rem; }
.notif-toggle { width: 40px; height: 22px; background: #d8d3cc; border-radius: 99px; position: relative; cursor: pointer; transition: background 0.25s; flex-shrink: 0; }
.notif-toggle--on { background: var(--color-text-dark); }
.notif-toggle__dot { position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; background: #fff; border-radius: 50%; transition: transform 0.25s; box-shadow: 0 1px 4px rgba(0,0,0,0.2); }
.notif-toggle--on .notif-toggle__dot { transform: translateX(18px); }

/* Danger zone */
.settings-danger-desc { font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem; line-height: 1.5; }
.settings-danger-btns { display: flex; gap: 0.75rem; }
.danger-btn { font-family: var(--font-sans); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; padding: 0.7rem 1.2rem; cursor: pointer; border-radius: 4px; transition: all 0.2s; }
.danger-btn--outline { background: transparent; border: 1.5px solid var(--color-text-dark); color: var(--color-text-dark); }
.danger-btn--outline:hover { background: var(--color-text-dark); color: #fff; }

/* ─── Empty State ─────────────────────────────── */
.empty-state {
  text-align: center; padding: 3rem 1rem;
  background: #fff; border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.empty-state__icon { color: #c8bfb0; margin-bottom: 1rem; display: flex; justify-content: center; }
.empty-state__title { font-size: 1rem; font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.35rem; }
.empty-state__sub { font-size: 0.82rem; color: var(--color-text-muted); margin-bottom: 1.5rem; }
.empty-state__cta {
  display: inline-block; font-size: 0.72rem; font-weight: 800;
  letter-spacing: 0.1em; color: #fff; background: var(--color-text-dark);
  padding: 0.75rem 1.75rem; text-decoration: none; border-radius: 4px; transition: opacity 0.2s;
}
.empty-state__cta:hover { opacity: 0.85; }

/* ─── Skeleton Loaders ────────────────────────── */
.orders-loading { display: flex; flex-direction: column; gap: 0.75rem; }
.skeleton-row {
  height: 78px; border-radius: 10px;
  background: linear-gradient(90deg, #f0ede8 25%, #e8e3dc 50%, #f0ede8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}
.skeleton-card {
  height: 140px; border-radius: 14px;
  background: linear-gradient(90deg, #f0ede8 25%, #e8e3dc 50%, #f0ede8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

/* ─── Order Detail Modal ──────────────────────── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 999;
  background: rgba(0,0,0,0.55); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
}
.modal-box {
  background: #fff; border-radius: 16px; width: 100%; max-width: 520px;
  max-height: 85vh; overflow-y: auto;
  box-shadow: 0 24px 60px rgba(0,0,0,0.25);
}
.modal-header {
  display: flex; align-items: flex-start; justify-content: space-between;
  padding: 1.25rem 1.5rem; border-bottom: 1px solid #f0ede8;
}
.modal-title { font-size: 0.95rem; font-weight: 800; color: var(--color-text-dark); }
.modal-date { font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.1rem; }
.modal-close {
  background: none; border: none; cursor: pointer;
  color: var(--color-text-muted); padding: 0.25rem; line-height: 0;
  transition: color 0.2s;
}
.modal-close:hover { color: var(--color-text-dark); }
.modal-body { padding: 1.25rem 1.5rem; }
.modal-status-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem; }
.modal-items { display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.25rem; }
.modal-item { display: flex; align-items: center; gap: 0.85rem; }
.modal-item__img {
  width: 52px; height: 62px; border-radius: 8px;
  overflow: hidden; background: #ebe7e0; flex-shrink: 0;
}
.modal-item__img img { width: 100%; height: 100%; object-fit: cover; }
.modal-item__img-ph { width: 100%; height: 100%; background: #ebe7e0; }
.modal-item__info { flex: 1; }
.modal-item__name { font-size: 0.85rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; }
.modal-item__meta { font-size: 0.72rem; color: var(--color-text-muted); }
.modal-item__price { font-size: 0.88rem; font-weight: 700; color: var(--color-text-dark); white-space: nowrap; }
.modal-summary { border-top: 1px solid #f0ede8; padding-top: 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
.modal-summary__row { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--color-text-muted); }
.modal-summary__row--total { font-size: 0.95rem; font-weight: 800; color: var(--color-text-dark); }

/* ─── Confirmation Modal ────────────────────── */
.confirm-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
.confirm-modal {
  background: #fff;
  border-radius: 18px;
  width: 100%;
  max-width: 440px;
  padding: 2rem;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.confirm-modal__icon {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #fef2f2;
  border: 1px solid #fee2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.confirm-modal__title {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}
.confirm-modal__desc {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--color-text-muted);
  margin-bottom: 1.75rem;
}
.confirm-modal__actions {
  display: flex;
  gap: 0.85rem;
  width: 100%;
}
.confirm-modal__btn {
  flex: 1;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.confirm-modal__btn--cancel {
  background: #f3f4f6;
  color: #4b5563;
}
.confirm-modal__btn--cancel:hover:not(:disabled) {
  background: #e5e7eb;
  color: #111827;
}
.confirm-modal__btn--danger {
  background: #dc2626;
  color: #fff;
  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.3);
}
.confirm-modal__btn--danger:hover:not(:disabled) {
  background: #b91c1c;
  transform: translateY(-1px);
}
.confirm-modal__btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ─── Modal Transitions ───────────────────────── */
.modal-enter-active { animation: modal-in 0.22s ease; }
.modal-leave-active { animation: modal-in 0.18s ease reverse; }
@keyframes modal-in {
  from { opacity: 0; transform: scale(0.96) translateY(8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* ─── Settings Page Header ─────────────────────── */
.settings-page-header {
  margin-bottom: 1.5rem;
}
.settings-page-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-text-dark);
  margin-bottom: 0.25rem;
}
.settings-page-sub {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* ─── Settings Grid ────────────────────────────── */
.settings-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.settings-card--full {
  grid-column: 1 / -1;
}

/* ─── Settings Card ────────────────────────────── */
.settings-card {
  background: #fff;
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.settings-card--danger {
  border: 1px solid rgba(192,57,43,0.15);
}
.settings-card__header {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  margin-bottom: 1.35rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0ede8;
}
.settings-card__icon {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  background: #f5f1eb;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-dark);
}
.settings-card__icon--danger {
  background: #fef0ef;
  color: #c0392b;
}
.settings-card__title {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  color: var(--color-text-dark);
  text-transform: uppercase;
  margin-bottom: 0.15rem;
  line-height: 1.3;
}
.settings-card__title--danger { color: #c0392b; }
.settings-card__sub {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

/* ─── Settings Form ────────────────────────────── */
.settings-form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.settings-form__row {
  display: flex;
  gap: 0.75rem;
}
.settings-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
  min-width: 0;
}
.settings-form__group label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-text-muted);
  text-transform: uppercase;
}
.settings-form__group input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.7rem 0.9rem;
  border: 1.5px solid #d8d3cc;
  border-radius: 8px;
  font-size: 0.88rem;
  font-family: var(--font-sans);
  color: var(--color-text-dark);
  background: #faf9f7;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-appearance: none;
}
.settings-form__group input:focus {
  border-color: var(--color-text-dark);
  box-shadow: 0 0 0 3px rgba(26,26,26,0.06);
}
.settings-form__group input::placeholder {
  color: #bfb9b0;
}
.settings-save-btn {
  background: var(--color-text-dark);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  align-self: flex-start;
  margin-top: 0.25rem;
  transition: opacity 0.2s, transform 0.15s;
  white-space: nowrap;
}
.settings-save-btn--mt { margin-top: 1.25rem; }
.settings-save-btn:hover { opacity: 0.82; transform: translateY(-1px); }
.settings-save-btn:active { transform: translateY(0); }

/* Notifications */
.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.notif-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f5f1eb;
}
.notif-row:last-child { border-bottom: none; }
.notif-row__info { flex: 1; min-width: 0; }
.notif-row__title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-dark);
}
.notif-row__desc {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  margin-top: 0.1rem;
}
.notif-toggle {
  width: 42px;
  height: 24px;
  background: #d8d3cc;
  border-radius: 99px;
  position: relative;
  cursor: pointer;
  transition: background 0.25s;
  flex-shrink: 0;
}
.notif-toggle--on { background: var(--color-text-dark); }
.notif-toggle__dot {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.25s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}
.notif-toggle--on .notif-toggle__dot { transform: translateX(18px); }

/* Danger zone */
.settings-danger-desc { font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem; line-height: 1.5; }
.settings-danger-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.danger-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.75rem 1.2rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
  white-space: nowrap;
}
.danger-btn--outline {
  background: transparent;
  border: 1.5px solid rgba(26,26,26,0.25);
  color: var(--color-text-dark);
}
.danger-btn--outline:hover {
  background: var(--color-text-dark);
  color: #fff;
  border-color: var(--color-text-dark);
}
.danger-btn--red {
  background: #fef2f2;
  border: 1.5px solid rgba(220,38,38,0.3);
  color: #dc2626;
}
.danger-btn--red:hover {
  background: #fee2e2;
  border-color: #dc2626;
}

/* ─── Responsive ──────────────────────────────── */
@media (max-width: 900px) {
  .settings-grid { grid-template-columns: 1fr; }
  .settings-card--full { grid-column: 1; }
}
@media (max-width: 768px) {
  .profile-stats { gap: 1.25rem; padding: 1rem; }
  .wishlist-preview-grid, .wishlist-grid { grid-template-columns: repeat(2, 1fr); }
  .account-cards { grid-template-columns: 1fr; }
  .welcome-banner { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
  .order-filters { flex-wrap: wrap; }
  .orders-tab-header { flex-direction: column; align-items: flex-start; }
  .orders-tab-header__right { width: 100%; }
  .btn-clear-history { font-size: 0.65rem; }
  .settings-card { padding: 1.15rem; }
  .settings-page-title { font-size: 1.25rem; }
  .settings-form__row { flex-direction: column; gap: 0.85rem; }
  .settings-save-btn { align-self: stretch; text-align: center; }
  .settings-danger-btns { flex-direction: column; }
  .danger-btn { justify-content: center; width: 100%; }
  .confirm-modal { padding: 1.5rem; }
}
@media (max-width: 480px) {
  .profile-hero__name { font-size: 1.4rem; }
  .profile-stat__num { font-size: 1.1rem; }
  .wishlist-preview-grid { grid-template-columns: repeat(2, 1fr); }
  .modal-box { border-radius: 12px; }
  .settings-card { padding: 1rem; border-radius: 10px; }
  .settings-card__icon { width: 34px; height: 34px; }
  .profile-tabs-bar { position: relative; top: 0; }
  .tab-content { padding: 0 0.5rem; }
  .notif-toggle { width: 38px; height: 22px; }
  .notif-toggle__dot { width: 16px; height: 16px; }
  .notif-toggle--on .notif-toggle__dot { transform: translateX(16px); }
  .orders-tab-header__right { flex-direction: column; align-items: flex-start; }
  .confirm-modal__actions { flex-direction: column; }
  .confirm-modal__title { font-size: 1.15rem; }
}
</style>

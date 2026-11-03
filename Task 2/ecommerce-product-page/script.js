/**
 * ==============================================================================
 * ShopEase - Modern E-Commerce Product Page Logic
 * Vanilla JavaScript implementation: Cart, Filters, Modals, LocalStorage & Search
 * Pricing localized for Indian Rupee (INR - ₹) using Intl.NumberFormat API
 * ==============================================================================
 */

(function () {
  'use strict';

  // ----------------------------------------------------------------------------
  // 1. PRODUCT CATALOG DATA (Realistic Indian Rupee Pricing)
  // ----------------------------------------------------------------------------
  const PRODUCTS = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Headphones",
      category: "electronics",
      price: 24990.00,
      originalPrice: 29990.00,
      rating: 4.9,
      reviewsCount: 1240,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      badge: "BESTSELLER",
      badgeType: "badge-bestseller",
      description: "Industry-leading active noise canceling with dual processors, 8 microphones, and ultra-comfortable lightweight design. Experience lossless LDAC high-resolution wireless sound and up to 30 hours of continuous battery playback.",
      features: [
        "Industry-leading Active Noise Cancellation (ANC)",
        "Up to 30 hours battery life with 3-minute quick charge",
        "Crystal clear hands-free calling with 4 beamforming mics",
        "Multipoint Bluetooth connection to pair two devices simultaneously"
      ],
      inStock: true
    },
    {
      id: 2,
      name: "Minimalist Leather Chrono Watch",
      category: "accessories",
      price: 4999.00,
      originalPrice: 6999.00,
      rating: 4.7,
      reviewsCount: 890,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      badge: "28% OFF",
      badgeType: "badge-sale",
      description: "Crafted for timeless elegance. Features a genuine Italian calfskin leather strap, surgical-grade 316L stainless steel casing, scratch-resistant sapphire crystal glass, and Japanese quartz movement.",
      features: [
        "Surgical grade 316L stainless steel case",
        "Genuine Italian vegetable-tanned leather strap",
        "Water resistant up to 5 ATM (50 meters)",
        "Scratch-resistant coated sapphire crystal glass"
      ],
      inStock: true
    },
    {
      id: 3,
      name: "Urban Performance Running Sneakers",
      category: "fashion",
      price: 3499.00,
      originalPrice: 4499.00,
      rating: 4.8,
      reviewsCount: 2150,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      badge: "POPULAR",
      badgeType: "badge-bestseller",
      description: "Next-generation running sneakers engineered with responsive energy-return foam and breathable aerodynamic mesh. Provides maximum cushioning and foot support for marathon training or casual street style.",
      features: [
        "High-rebound nitrogen-infused midsole cushioning",
        "Breathable engineered fly-knit mesh upper",
        "Anti-slip durable Continental rubber outsole",
        "Ergonomic arch support and heel lock stability"
      ],
      inStock: true
    },
    {
      id: 4,
      name: "Ergonomic Ceramic Coffee Mug & Warmer",
      category: "lifestyle",
      price: 1299.00,
      originalPrice: 1799.00,
      rating: 4.6,
      reviewsCount: 430,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      badge: "28% OFF",
      badgeType: "badge-sale",
      description: "Keep your specialty coffee or artisan tea at the exact optimal sipping temperature (130°F - 145°F) all morning long. Features handcrafted matte ceramic, gravity induction auto-shutoff, and spill-resistant lid.",
      features: [
        "Smart gravity-sensor automatic warm plate",
        "Hand-glazed food-grade durable matte ceramic",
        "Preset temperature control keeps drinks at 135°F",
        "Spill-resistant silicone seal lid included"
      ],
      inStock: true
    },
    {
      id: 5,
      name: "Ultra-Slim Mechanical RGB Keyboard",
      category: "electronics",
      price: 4299.00,
      originalPrice: 5499.00,
      rating: 4.8,
      reviewsCount: 670,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      badge: "HOT DEAL",
      badgeType: "badge-sale",
      description: "Low-profile mechanical gaming and productivity keyboard built with aircraft-grade aluminum frame, hot-swappable tactile brown switches, per-key RGB backlighting, and Bluetooth 5.1 multi-device connectivity.",
      features: [
        "Ultra-thin CNC aluminum top plate design",
        "Hot-swappable low profile tactile mechanical switches",
        "Triple connectivity: 2.4GHz wireless, Bluetooth, USB-C",
        "Customizable RGB backlighting with 18 dynamic presets"
      ],
      inStock: true
    },
    {
      id: 6,
      name: "Classic Polarized Wayfarer Sunglasses",
      category: "accessories",
      price: 1999.00,
      originalPrice: 2499.00,
      rating: 4.5,
      reviewsCount: 510,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      badge: "20% OFF",
      badgeType: "badge-sale",
      description: "Iconic square silhouette handcrafted with durable acetate and 100% UV400 polarized clarity lenses. Eliminates harsh reflective glare while providing rich color contrast and all-day sun protection.",
      features: [
        "100% UV400 eye protection blocking UVA & UVB rays",
        "High-definition 9-layer TAC polarized lenses",
        "Handmade cellulose acetate lightweight frame",
        "Includes hard leather protective case and microfiber cloth"
      ],
      inStock: true
    },
    {
      id: 7,
      name: "Premium Organic Cotton Fleece Hoodie",
      category: "fashion",
      price: 2199.00,
      originalPrice: 2799.00,
      rating: 4.7,
      reviewsCount: 380,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      badge: "NEW",
      badgeType: "badge-new",
      description: "Heavyweight 450 GSM French Terry cotton hoodie with a tailored relaxed drape. Pre-shrunk for an enduring fit, featuring double-needle reinforced stitching and kangaroo pouch pocket.",
      features: [
        "100% certified organic combed French Terry cotton",
        "Heavyweight 450 GSM thermal warmth",
        "Double-lined hood with brushed interior finish",
        "Pre-washed to eliminate shrinkage and color fade"
      ],
      inStock: true
    },
    {
      id: 8,
      name: "Smart Insulated Hydro Flask 32oz",
      category: "lifestyle",
      price: 1499.00,
      originalPrice: 1999.00,
      rating: 4.8,
      reviewsCount: 820,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      badge: "ECO FRIENDLY",
      badgeType: "badge-eco",
      description: "Double-wall vacuum insulation keeps iced beverages chilled for up to 24 hours and steaming hot drinks piping for 12 hours. Built with Pro-grade 18/8 stainless steel and powder-coated condensation-free grip.",
      features: [
        "TempShield double-wall vacuum thermal barrier",
        "18/8 pro-grade stainless steel, BPA and phthalate-free",
        "Leak-proof flex cap with durable silicone strap",
        "Durable powder-coat finish resists sweat and scratches"
      ],
      inStock: true
    },
    {
      id: 9,
      name: "Noise-Canceling Studio Earbuds Pro",
      category: "electronics",
      price: 9999.00,
      originalPrice: 12999.00,
      rating: 4.9,
      reviewsCount: 1480,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      badge: "BESTSELLER",
      badgeType: "badge-bestseller",
      description: "Experience spatial 3D audio with real-time active noise cancellation and transparency mode. IPX5 water-resistant with 32 hours total battery life with the wireless fast-charging smart case.",
      features: [
        "Dynamic 11mm custom acoustic drivers",
        "Adaptive Hybrid ANC with Transparency Pass-Through",
        "IPX5 sweat and water resistance for intense workouts",
        "Wireless Qi charging case with LED battery status indicator"
      ],
      inStock: true
    },
    {
      id: 10,
      name: "Handcrafted Vintage Leather Backpack",
      category: "fashion",
      price: 3799.00,
      originalPrice: 4999.00,
      rating: 4.6,
      reviewsCount: 410,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      badge: "24% OFF",
      badgeType: "badge-sale",
      description: "Built for daily commuting and weekend escapes. Features full-grain crazy horse leather that develops an exquisite natural patina over time. Includes padded 15.6-inch laptop compartment and brass hardware.",
      features: [
        "Authentic full-grain wax-finished leather",
        "Padded protective sleeve holds up to 15.6-inch laptops",
        "Heavy-duty solid brass zippers and buckles",
        "Ergonomic padded shoulder straps with breathable mesh"
      ],
      inStock: true
    }
  ];

  // ----------------------------------------------------------------------------
  // 2. STATE MANAGEMENT & LOCAL STORAGE
  // ----------------------------------------------------------------------------
  const STORAGE_KEYS = {
    CART: 'shopease_cart_items',
    WISHLIST: 'shopease_wishlist_ids',
    PROMO: 'shopease_applied_promo'
  };

  const VALID_PROMOS = {
    'SHOPEASE20': 0.20,
    'SPRING40': 0.40,
    'TECH20': 0.20
  };

  // Indian Rupee Free Shipping & Standard Fee Thresholds
  const SHIPPING_THRESHOLD = 999.00;
  const STANDARD_SHIPPING_FEE = 99.00;

  function loadFromStorage(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn(`Error loading ${key} from localStorage`, e);
      return defaultValue;
    }
  }

  function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`Error saving ${key} to localStorage`, e);
    }
  }

  /**
   * Loads cart and smoothly migrates any legacy USD prices to updated INR values
   * while preserving existing cart items and user-selected quantities.
   */
  function loadCartFromStorage() {
    const rawCart = loadFromStorage(STORAGE_KEYS.CART, []);
    if (!Array.isArray(rawCart)) return [];

    let needsResave = false;
    const updatedCart = rawCart.map(cartItem => {
      const product = PRODUCTS.find(p => p.id === cartItem.id);
      if (product) {
        if (cartItem.price !== product.price) {
          needsResave = true;
        }
        return {
          ...cartItem,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          category: product.category
        };
      }
      return cartItem;
    });

    if (needsResave) {
      saveToStorage(STORAGE_KEYS.CART, updatedCart);
    }
    return updatedCart;
  }

  let state = {
    products: PRODUCTS,
    cart: loadCartFromStorage(),
    wishlist: loadFromStorage(STORAGE_KEYS.WISHLIST, []),
    appliedPromo: loadFromStorage(STORAGE_KEYS.PROMO, null),
    selectedCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    selectedModalProduct: null,
    modalQuantity: 1
  };

  // ----------------------------------------------------------------------------
  // 3. DOM ELEMENTS CACHING
  // ----------------------------------------------------------------------------
  const DOM = {
    // Nav & Search
    navbar: document.getElementById('navbar'),
    navSearchInput: document.getElementById('nav-search-input'),
    navSearchClear: document.getElementById('search-clear-btn'),
    shopSearchInput: document.getElementById('shop-search-input'),
    shopSearchClear: document.getElementById('shop-search-clear'),
    mobileSearchInput: document.getElementById('mobile-search-input'),
    sortSelect: document.getElementById('sort-select'),
    filterTabs: document.getElementById('filter-tabs'),
    resultsCount: document.getElementById('results-count'),
    activeTagsContainer: document.getElementById('active-tags-container'),
    productsGrid: document.getElementById('products-grid'),
    emptyProductsState: document.getElementById('empty-products-state'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),

    // Badges
    cartBadge: document.getElementById('cart-badge'),
    wishlistBadge: document.getElementById('wishlist-badge'),

    // Announcement
    announcementBar: document.getElementById('announcement-bar'),
    closeAnnouncement: document.getElementById('close-announcement'),

    // Cart Drawer
    cartBtn: document.getElementById('cart-btn'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartOverlay: document.getElementById('cart-overlay'),
    cartCloseBtn: document.getElementById('cart-close-btn'),
    cartItemsWrapper: document.getElementById('cart-items-wrapper'),
    cartEmptyView: document.getElementById('cart-empty-view'),
    cartDrawerFooter: document.getElementById('cart-drawer-footer'),
    cartDrawerCount: document.getElementById('cart-drawer-count'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartShipping: document.getElementById('cart-shipping'),
    cartTotal: document.getElementById('cart-total'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    cartDiscount: document.getElementById('cart-discount'),
    shippingProgressWrap: document.getElementById('shipping-progress-wrap'),
    shippingProgressText: document.getElementById('shipping-progress-text'),
    shippingBarFill: document.getElementById('shipping-bar-fill'),
    clearCartBtn: document.getElementById('clear-cart-btn'),
    cartContinueShoppingBtn: document.getElementById('cart-continue-shopping-btn'),

    // Cart Promo
    cartPromoInput: document.getElementById('cart-promo-input'),
    applyPromoBtn: document.getElementById('apply-promo-btn'),
    appliedPromoTag: document.getElementById('applied-promo-tag'),
    appliedCodeName: document.getElementById('applied-code-name'),
    appliedCodePercent: document.getElementById('applied-code-percent'),
    removePromoBtn: document.getElementById('remove-promo-btn'),

    // Wishlist Drawer
    wishlistBtn: document.getElementById('wishlist-btn'),
    wishlistDrawer: document.getElementById('wishlist-drawer'),
    wishlistOverlay: document.getElementById('wishlist-overlay'),
    wishlistCloseBtn: document.getElementById('wishlist-close-btn'),
    wishlistItemsWrapper: document.getElementById('wishlist-items-wrapper'),
    wishlistEmptyView: document.getElementById('wishlist-empty-view'),
    wishlistDrawerCount: document.getElementById('wishlist-drawer-count'),
    wishlistBrowseBtn: document.getElementById('wishlist-browse-btn'),

    // Product Modal
    productModalOverlay: document.getElementById('product-modal-overlay'),
    productModal: document.getElementById('product-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalImg: document.getElementById('modal-img'),
    modalBadge: document.getElementById('modal-badge'),
    modalCategory: document.getElementById('modal-category'),
    modalProductTitle: document.getElementById('modal-product-title'),
    modalStars: document.getElementById('modal-stars'),
    modalRatingVal: document.getElementById('modal-rating-val'),
    modalReviewCount: document.getElementById('modal-review-count'),
    modalPrice: document.getElementById('modal-price'),
    modalOrigPrice: document.getElementById('modal-orig-price'),
    modalDiscountPill: document.getElementById('modal-discount-pill'),
    modalDescription: document.getElementById('modal-description'),
    modalSpecsList: document.getElementById('modal-specs-list'),
    modalQtyInput: document.getElementById('modal-qty-input'),
    modalQtyMinus: document.getElementById('modal-qty-minus'),
    modalQtyPlus: document.getElementById('modal-qty-plus'),
    modalAddToCartBtn: document.getElementById('modal-add-to-cart-btn'),
    modalWishlistBtn: document.getElementById('modal-wishlist-btn'),

    // Checkout Modal
    checkoutBtn: document.getElementById('checkout-btn'),
    checkoutModalOverlay: document.getElementById('checkout-modal-overlay'),
    checkoutCloseBtn: document.getElementById('checkout-close-btn'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutFormView: document.getElementById('checkout-form-view'),
    checkoutSuccessView: document.getElementById('checkout-success-view'),
    checkoutPayableTotal: document.getElementById('checkout-payable-total'),
    orderIdDisplay: document.getElementById('order-id-display'),
    orderDateDisplay: document.getElementById('order-date-display'),
    orderTotalDisplay: document.getElementById('order-total-display'),
    finishCheckoutBtn: document.getElementById('finish-checkout-btn'),

    // Info Policy Modal
    infoModalOverlay: document.getElementById('info-modal-overlay'),
    infoModalTitle: document.getElementById('info-modal-title'),
    infoModalBody: document.getElementById('info-modal-body'),
    infoModalClose: document.getElementById('info-modal-close'),
    infoModalOk: document.getElementById('info-modal-ok'),

    // Mobile Drawer
    mobileToggle: document.getElementById('mobile-toggle'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    mobileOverlay: document.getElementById('mobile-overlay'),
    mobileDrawerClose: document.getElementById('mobile-drawer-close'),

    // Other Widgets
    toastContainer: document.getElementById('toast-container'),
    backToTopBtn: document.getElementById('back-to-top'),
    copyCouponBtn: document.getElementById('copy-coupon-btn'),
    newsletterForm: document.getElementById('newsletter-form'),
    currentYear: document.getElementById('current-year')
  };

  // ----------------------------------------------------------------------------
  // 4. CURRENCY FORMATTING (INR - ₹ using Intl.NumberFormat)
  // ----------------------------------------------------------------------------
  /**
   * Formats numbers into Indian Rupees (INR) format (e.g. ₹1,299.00)
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(price);
  };

  function formatCurrency(val) {
    return formatPrice(val);
  }

  function generateStarsHtml(rating) {
    let html = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      html += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalfStar) {
      html += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      html += '<i class="fa-regular fa-star"></i>';
    }
    return html;
  }

  function showToast(title, message, type = 'success') {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-circle-check';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation';
    if (type === 'danger') iconClass = 'fa-circle-xmark';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px) scale(0.95)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3200);
  }

  // ----------------------------------------------------------------------------
  // 5. RENDERING PRODUCTS & FILTERING
  // ----------------------------------------------------------------------------
  function getFilteredAndSortedProducts() {
    let result = [...state.products];

    // 1. Filter by category
    if (state.selectedCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === state.selectedCategory.toLowerCase());
    }

    // 2. Filter by search query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // 3. Sort
    switch (state.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        result.sort((a, b) => {
          const discountA = ((a.originalPrice - a.price) / a.originalPrice);
          const discountB = ((b.originalPrice - b.price) / b.originalPrice);
          return discountB - discountA;
        });
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => a.id - b.id);
        break;
    }

    return result;
  }

  function renderProducts() {
    const items = getFilteredAndSortedProducts();

    // Update results count
    if (DOM.resultsCount) {
      DOM.resultsCount.innerHTML = `Showing <strong>${items.length}</strong> of ${state.products.length} products`;
    }

    // Update Active Filter Tags
    renderActiveFilterTags();

    // Check if empty
    if (items.length === 0) {
      DOM.productsGrid.style.display = 'none';
      DOM.emptyProductsState.style.display = 'block';
      return;
    }

    DOM.productsGrid.style.display = 'grid';
    DOM.emptyProductsState.style.display = 'none';

    // Generate Cards HTML
    DOM.productsGrid.innerHTML = items.map(product => {
      const isWishlisted = state.wishlist.includes(product.id);
      const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="card-img-wrap" onclick="window.shopApp.openProductModal(${product.id})">
            ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
            <button 
              class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
              onclick="event.stopPropagation(); window.shopApp.toggleWishlist(${product.id});" 
              aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
              title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
            >
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            <button class="quick-view-btn" onclick="event.stopPropagation(); window.shopApp.openProductModal(${product.id});">
              <i class="fa-regular fa-eye"></i> Quick View
            </button>
          </div>

          <div class="card-body">
            <span class="card-category">${product.category}</span>
            <h3 class="card-title" onclick="window.shopApp.openProductModal(${product.id})" title="${product.name}">
              ${product.name}
            </h3>

            <div class="card-rating">
              <span class="stars">${generateStarsHtml(product.rating)}</span>
              <span class="rating-score">${product.rating}</span>
              <span class="rating-count">(${product.reviewsCount})</span>
            </div>

            <div class="card-price-row">
              <span class="current-price">${formatCurrency(product.price)}</span>
              ${product.originalPrice > product.price ? `
                <span class="original-price">${formatCurrency(product.originalPrice)}</span>
                <span class="discount-tag">-${discountPercent}%</span>
              ` : ''}
            </div>

            <button 
              class="card-action-btn" 
              id="add-btn-${product.id}"
              onclick="window.shopApp.addToCart(${product.id}, 1, this);"
              aria-label="Add ${product.name} to cart"
            >
              <i class="fa-solid fa-cart-shopping"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderActiveFilterTags() {
    if (!DOM.activeTagsContainer) return;

    let tagsHtml = '';

    if (state.selectedCategory !== 'all') {
      tagsHtml += `
        <span class="filter-tag-chip">
          Category: ${state.selectedCategory.charAt(0).toUpperCase() + state.selectedCategory.slice(1)}
          <button onclick="window.shopApp.setCategory('all')" aria-label="Clear category filter">&times;</button>
        </span>
      `;
    }

    if (state.searchQuery.trim() !== '') {
      tagsHtml += `
        <span class="filter-tag-chip">
          Search: "${state.searchQuery}"
          <button onclick="window.shopApp.clearSearch()" aria-label="Clear search filter">&times;</button>
        </span>
      `;
    }

    DOM.activeTagsContainer.innerHTML = tagsHtml;
  }

  // ----------------------------------------------------------------------------
  // 6. SHOPPING CART LOGIC
  // ----------------------------------------------------------------------------
  function addToCart(productId, quantity = 1, buttonElement = null) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
      if (state.cart[existingIndex].quantity > 99) {
        state.cart[existingIndex].quantity = 99;
      }
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    saveToStorage(STORAGE_KEYS.CART, state.cart);
    renderCart();

    // Button feedback animation if provided
    if (buttonElement) {
      const origHtml = buttonElement.innerHTML;
      buttonElement.classList.add('added-animation');
      buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> <span>Added!</span>';
      setTimeout(() => {
        buttonElement.classList.remove('added-animation');
        buttonElement.innerHTML = origHtml;
      }, 1200);
    }

    showToast(
      'Added to Cart!',
      `<strong>${product.name}</strong> (x${quantity}) was added to your shopping bag.`,
      'success'
    );
  }

  function updateCartQuantity(productId, newQty) {
    const index = state.cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }

    state.cart[index].quantity = Math.min(99, newQty);
    saveToStorage(STORAGE_KEYS.CART, state.cart);
    renderCart();
  }

  function removeFromCart(productId) {
    const item = state.cart.find(i => i.id === productId);
    state.cart = state.cart.filter(i => i.id !== productId);
    saveToStorage(STORAGE_KEYS.CART, state.cart);
    renderCart();

    if (item) {
      showToast('Item Removed', `Removed ${item.name} from your cart.`, 'warning');
    }
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    if (confirm('Are you sure you want to remove all items from your cart?')) {
      state.cart = [];
      state.appliedPromo = null;
      saveToStorage(STORAGE_KEYS.CART, state.cart);
      saveToStorage(STORAGE_KEYS.PROMO, null);
      renderCart();
      showToast('Cart Cleared', 'All items have been cleared from your cart.', 'warning');
    }
  }

  function renderCart() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update Badges
    if (DOM.cartBadge) {
      DOM.cartBadge.textContent = totalCount;
      DOM.cartBadge.style.display = totalCount > 0 ? 'inline-block' : 'none';
    }
    if (DOM.cartDrawerCount) {
      DOM.cartDrawerCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    }

    // Empty or populated
    if (state.cart.length === 0) {
      DOM.cartItemsWrapper.style.display = 'none';
      DOM.cartDrawerFooter.style.display = 'none';
      DOM.shippingProgressWrap.style.display = 'none';
      DOM.cartEmptyView.style.display = 'flex';
      return;
    }

    DOM.cartItemsWrapper.style.display = 'flex';
    DOM.cartDrawerFooter.style.display = 'block';
    DOM.shippingProgressWrap.style.display = 'block';
    DOM.cartEmptyView.style.display = 'none';

    // Render Items
    DOM.cartItemsWrapper.innerHTML = state.cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title" title="${item.name}">${item.name}</h4>
          <div class="cart-item-price">${formatCurrency(item.price)}</div>
          <div class="cart-item-controls">
            <div class="item-qty-box">
              <button 
                class="btn-qty-mini" 
                onclick="window.shopApp.updateCartQuantity(${item.id}, ${item.quantity - 1})"
                aria-label="Decrease quantity"
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="item-qty-num">${item.quantity}</span>
              <button 
                class="btn-qty-mini" 
                onclick="window.shopApp.updateCartQuantity(${item.id}, ${item.quantity + 1})"
                aria-label="Increase quantity"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button 
              class="btn-remove-item" 
              onclick="window.shopApp.removeFromCart(${item.id})"
              aria-label="Remove item"
              title="Remove item"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Calculate Totals in INR
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;

    if (state.appliedPromo && VALID_PROMOS[state.appliedPromo]) {
      const discountRate = VALID_PROMOS[state.appliedPromo];
      discount = subtotal * discountRate;
      DOM.cartDiscountRow.style.display = 'flex';
      DOM.cartDiscount.textContent = `-${formatCurrency(discount)}`;
      DOM.appliedPromoTag.style.display = 'flex';
      DOM.appliedCodeName.textContent = state.appliedPromo;
      DOM.appliedCodePercent.textContent = Math.round(discountRate * 100);
    } else {
      DOM.cartDiscountRow.style.display = 'none';
      DOM.appliedPromoTag.style.display = 'none';
    }

    // Shipping calculation in INR
    const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
    const total = Math.max(0, subtotal - discount + shipping);

    DOM.cartSubtotal.textContent = formatCurrency(subtotal);
    DOM.cartShipping.textContent = shipping === 0 ? 'FREE' : formatCurrency(shipping);
    DOM.cartShipping.className = shipping === 0 ? 'summary-val text-success' : 'summary-val';
    DOM.cartTotal.textContent = formatCurrency(total);

    // Free Shipping Progress Bar (₹999 threshold)
    if (subtotal >= SHIPPING_THRESHOLD) {
      DOM.shippingProgressText.innerHTML = '🎉 You unlocked <strong>FREE Express Shipping</strong>!';
      DOM.shippingBarFill.style.width = '100%';
      DOM.shippingBarFill.style.background = 'linear-gradient(90deg, #10b981, #059669)';
    } else {
      const remaining = SHIPPING_THRESHOLD - subtotal;
      const progressPercent = Math.min(100, Math.round((subtotal / SHIPPING_THRESHOLD) * 100));
      DOM.shippingProgressText.innerHTML = `Add <strong>${formatCurrency(remaining)}</strong> more to get <strong>FREE Shipping</strong>!`;
      DOM.shippingBarFill.style.width = `${progressPercent}%`;
      DOM.shippingBarFill.style.background = 'linear-gradient(90deg, #4f46e5, #10b981)';
    }

    // Update checkout preview if open
    if (DOM.checkoutPayableTotal) {
      DOM.checkoutPayableTotal.textContent = formatCurrency(total);
    }
  }

  function applyPromo(code) {
    const cleanCode = (code || '').trim().toUpperCase();

    if (!cleanCode) {
      showToast('Coupon Error', 'Please enter a valid coupon code.', 'warning');
      return;
    }

    if (VALID_PROMOS[cleanCode]) {
      state.appliedPromo = cleanCode;
      saveToStorage(STORAGE_KEYS.PROMO, cleanCode);
      renderCart();
      showToast('Coupon Applied!', `Saved ${Math.round(VALID_PROMOS[cleanCode] * 100)}% with coupon ${cleanCode}`, 'success');
      if (DOM.cartPromoInput) DOM.cartPromoInput.value = '';
    } else {
      showToast('Invalid Coupon', `Code "${cleanCode}" is not recognized or has expired. Try SHOPEASE20.`, 'danger');
    }
  }

  function removePromo() {
    state.appliedPromo = null;
    saveToStorage(STORAGE_KEYS.PROMO, null);
    renderCart();
    showToast('Coupon Removed', 'Discount removed from your cart.', 'warning');
  }

  // ----------------------------------------------------------------------------
  // 7. WISHLIST MANAGEMENT
  // ----------------------------------------------------------------------------
  function toggleWishlist(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const index = state.wishlist.indexOf(productId);
    let added = false;

    if (index > -1) {
      state.wishlist.splice(index, 1);
      added = false;
    } else {
      state.wishlist.push(productId);
      added = true;
    }

    saveToStorage(STORAGE_KEYS.WISHLIST, state.wishlist);
    updateWishlistBadges();
    renderProducts();
    renderWishlist();

    // If modal is open for this product, update its wishlist button state
    if (state.selectedModalProduct && state.selectedModalProduct.id === productId) {
      if (DOM.modalWishlistBtn) {
        DOM.modalWishlistBtn.classList.toggle('active', added);
        DOM.modalWishlistBtn.innerHTML = `<i class="${added ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
      }
    }

    if (added) {
      showToast('Added to Wishlist', `Saved <strong>${product.name}</strong> to your favorites.`, 'success');
    } else {
      showToast('Removed from Wishlist', `Removed <strong>${product.name}</strong> from favorites.`, 'warning');
    }
  }

  function updateWishlistBadges() {
    const count = state.wishlist.length;
    if (DOM.wishlistBadge) {
      DOM.wishlistBadge.textContent = count;
      DOM.wishlistBadge.style.display = count > 0 ? 'inline-block' : 'none';
    }
    if (DOM.wishlistDrawerCount) {
      DOM.wishlistDrawerCount.textContent = `${count} item${count === 1 ? '' : 's'}`;
    }
  }

  function renderWishlist() {
    const wishlistedItems = state.products.filter(p => state.wishlist.includes(p.id));

    if (wishlistedItems.length === 0) {
      DOM.wishlistItemsWrapper.style.display = 'none';
      DOM.wishlistEmptyView.style.display = 'flex';
      return;
    }

    DOM.wishlistItemsWrapper.style.display = 'flex';
    DOM.wishlistEmptyView.style.display = 'none';

    DOM.wishlistItemsWrapper.innerHTML = wishlistedItems.map(item => `
      <div class="wishlist-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="wishlist-item-img">
        <div class="wishlist-item-details">
          <h4 class="wishlist-item-title">${item.name}</h4>
          <div class="wishlist-item-price">${formatCurrency(item.price)}</div>
          <div class="wishlist-item-actions">
            <button 
              class="btn-move-to-cart" 
              onclick="window.shopApp.addToCart(${item.id}, 1); window.shopApp.toggleWishlist(${item.id});"
            >
              <i class="fa-solid fa-cart-plus"></i> Move to Cart
            </button>
            <button 
              class="btn-remove-item" 
              onclick="window.shopApp.toggleWishlist(${item.id})"
              title="Remove from wishlist"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------------------------
  // 8. PRODUCT DETAILS MODAL LOGIC
  // ----------------------------------------------------------------------------
  function openProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.selectedModalProduct = product;
    state.modalQuantity = 1;

    // Fill Modal Data
    DOM.modalImg.src = product.image;
    DOM.modalImg.alt = product.name;
    DOM.modalCategory.textContent = product.category;
    DOM.modalProductTitle.textContent = product.name;
    DOM.modalStars.innerHTML = generateStarsHtml(product.rating);
    DOM.modalRatingVal.textContent = product.rating;
    DOM.modalReviewCount.textContent = `(${product.reviewsCount.toLocaleString()} reviews)`;

    DOM.modalPrice.textContent = formatCurrency(product.price);
    if (product.originalPrice > product.price) {
      DOM.modalOrigPrice.textContent = formatCurrency(product.originalPrice);
      DOM.modalOrigPrice.style.display = 'inline';
      const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
      DOM.modalDiscountPill.textContent = `Save ${discount}%`;
      DOM.modalDiscountPill.style.display = 'inline-block';
    } else {
      DOM.modalOrigPrice.style.display = 'none';
      DOM.modalDiscountPill.style.display = 'none';
    }

    if (product.badge) {
      DOM.modalBadge.textContent = product.badge;
      DOM.modalBadge.className = `product-badge modal-badge ${product.badgeType}`;
      DOM.modalBadge.style.display = 'inline-block';
    } else {
      DOM.modalBadge.style.display = 'none';
    }

    DOM.modalDescription.textContent = product.description;

    // Highlights list
    DOM.modalSpecsList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    // Reset Quantity
    DOM.modalQtyInput.value = 1;

    // Wishlist Button in Modal
    const isWishlisted = state.wishlist.includes(product.id);
    DOM.modalWishlistBtn.classList.toggle('active', isWishlisted);
    DOM.modalWishlistBtn.innerHTML = `<i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;

    // Show Modal
    DOM.productModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    DOM.productModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    state.selectedModalProduct = null;
  }

  // ----------------------------------------------------------------------------
  // 9. CHECKOUT SIMULATION MODAL
  // ----------------------------------------------------------------------------
  function openCheckoutModal() {
    if (state.cart.length === 0) {
      showToast('Empty Cart', 'Your shopping cart is currently empty.', 'warning');
      return;
    }

    // Close cart drawer
    closeCartDrawer();

    // Recalculate totals
    renderCart();

    DOM.checkoutFormView.style.display = 'block';
    DOM.checkoutSuccessView.style.display = 'none';
    DOM.checkoutModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    DOM.checkoutModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function processCheckoutOrder() {
    const name = document.getElementById('cust-name').value.trim();
    const email = document.getElementById('cust-email').value.trim();
    const address = document.getElementById('cust-address').value.trim();

    if (!name || !email || !address) {
      showToast('Missing Fields', 'Please complete all required fields.', 'warning');
      return;
    }

    // Calculate final paid amount in INR
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = state.appliedPromo && VALID_PROMOS[state.appliedPromo] 
      ? subtotal * VALID_PROMOS[state.appliedPromo] 
      : 0;
    const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
    const totalPaid = Math.max(0, subtotal - discount + shipping);

    // Generate simulated order confirmation
    const randomOrderId = Math.floor(10000 + Math.random() * 90000);
    const orderDate = new Date().toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    DOM.orderIdDisplay.textContent = randomOrderId;
    DOM.orderDateDisplay.textContent = orderDate;
    DOM.orderTotalDisplay.textContent = formatCurrency(totalPaid);

    // Switch views
    DOM.checkoutFormView.style.display = 'none';
    DOM.checkoutSuccessView.style.display = 'block';

    // Clear cart upon successful order
    state.cart = [];
    state.appliedPromo = null;
    saveToStorage(STORAGE_KEYS.CART, state.cart);
    saveToStorage(STORAGE_KEYS.PROMO, null);
    renderCart();

    showToast('Order Confirmed!', `Thank you ${name}! Order #SE-${randomOrderId} placed successfully.`, 'success');
  }

  // ----------------------------------------------------------------------------
  // 10. DRAWERS & MODALS TOGGLERS
  // ----------------------------------------------------------------------------
  function openCartDrawer() {
    DOM.cartOverlay.classList.add('active');
    DOM.cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    DOM.cartOverlay.classList.remove('active');
    DOM.cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openWishlistDrawer() {
    renderWishlist();
    DOM.wishlistOverlay.classList.add('active');
    DOM.wishlistDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlistDrawer() {
    DOM.wishlistOverlay.classList.remove('active');
    DOM.wishlistDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    DOM.mobileOverlay.classList.add('active');
    DOM.mobileDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    DOM.mobileOverlay.classList.remove('active');
    DOM.mobileDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showInfoModal(title, message) {
    DOM.infoModalTitle.textContent = title;
    DOM.infoModalBody.innerHTML = `<p>${message}</p>`;
    DOM.infoModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeInfoModal() {
    DOM.infoModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ----------------------------------------------------------------------------
  // 11. SEARCH & FILTER CONTROLS
  // ----------------------------------------------------------------------------
  function setCategory(category) {
    state.selectedCategory = category;

    // Update Tab UI
    const tabs = DOM.filterTabs.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-filter') === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    renderProducts();

    // Smooth scroll to shop section
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleSearchInput(query) {
    state.searchQuery = query;

    // Sync search input values across header, section, and mobile
    if (DOM.navSearchInput && DOM.navSearchInput.value !== query) {
      DOM.navSearchInput.value = query;
    }
    if (DOM.shopSearchInput && DOM.shopSearchInput.value !== query) {
      DOM.shopSearchInput.value = query;
    }
    if (DOM.mobileSearchInput && DOM.mobileSearchInput.value !== query) {
      DOM.mobileSearchInput.value = query;
    }

    // Toggle clear buttons
    const hasText = query.trim().length > 0;
    if (DOM.navSearchClear) DOM.navSearchClear.style.display = hasText ? 'block' : 'none';
    if (DOM.shopSearchClear) DOM.shopSearchClear.style.display = hasText ? 'block' : 'none';

    renderProducts();
  }

  function clearSearch() {
    handleSearchInput('');
  }

  function resetAllFilters() {
    state.selectedCategory = 'all';
    state.searchQuery = '';
    state.sortBy = 'featured';

    if (DOM.sortSelect) DOM.sortSelect.value = 'featured';
    handleSearchInput('');
    setCategory('all');
  }

  // ----------------------------------------------------------------------------
  // 12. EVENT LISTENERS INITIALIZATION
  // ----------------------------------------------------------------------------
  function initEventListeners() {
    // Announcement Bar Close
    if (DOM.closeAnnouncement) {
      DOM.closeAnnouncement.addEventListener('click', () => {
        DOM.announcementBar.style.display = 'none';
      });
    }

    // Navbar Scroll & Back to Top
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        DOM.navbar.classList.add('scrolled');
      } else {
        DOM.navbar.classList.remove('scrolled');
      }

      if (scrollY > 400) {
        DOM.backToTopBtn.classList.add('visible');
      } else {
        DOM.backToTopBtn.classList.remove('visible');
      }
    });

    // Back to Top Click
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Search inputs
    if (DOM.navSearchInput) {
      DOM.navSearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
    }
    if (DOM.navSearchClear) {
      DOM.navSearchClear.addEventListener('click', clearSearch);
    }
    if (DOM.shopSearchInput) {
      DOM.shopSearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
    }
    if (DOM.shopSearchClear) {
      DOM.shopSearchClear.addEventListener('click', clearSearch);
    }
    if (DOM.mobileSearchInput) {
      DOM.mobileSearchInput.addEventListener('input', (e) => {
        handleSearchInput(e.target.value);
        closeMobileMenu();
        const shop = document.getElementById('shop');
        if (shop) shop.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Category Filter Tabs
    if (DOM.filterTabs) {
      DOM.filterTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-tab');
        if (btn) {
          const category = btn.getAttribute('data-filter');
          setCategory(category);
        }
      });
    }

    // Category Section Cards click
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        setCategory(cat);
      });
    });

    // Sort Dropdown
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    // Reset Filters Button
    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // Cart Drawer Open / Close
    if (DOM.cartBtn) DOM.cartBtn.addEventListener('click', openCartDrawer);
    if (DOM.cartCloseBtn) DOM.cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (DOM.cartOverlay) DOM.cartOverlay.addEventListener('click', closeCartDrawer);
    if (DOM.cartContinueShoppingBtn) {
      DOM.cartContinueShoppingBtn.addEventListener('click', () => {
        closeCartDrawer();
        const shop = document.getElementById('shop');
        if (shop) shop.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Clear Cart
    if (DOM.clearCartBtn) DOM.clearCartBtn.addEventListener('click', clearCart);

    // Apply Promo in Cart
    if (DOM.applyPromoBtn) {
      DOM.applyPromoBtn.addEventListener('click', () => {
        applyPromo(DOM.cartPromoInput.value);
      });
    }
    if (DOM.cartPromoInput) {
      DOM.cartPromoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyPromo(DOM.cartPromoInput.value);
        }
      });
    }
    if (DOM.removePromoBtn) DOM.removePromoBtn.addEventListener('click', removePromo);

    // Wishlist Drawer Open / Close
    if (DOM.wishlistBtn) DOM.wishlistBtn.addEventListener('click', openWishlistDrawer);
    if (DOM.wishlistCloseBtn) DOM.wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
    if (DOM.wishlistOverlay) DOM.wishlistOverlay.addEventListener('click', closeWishlistDrawer);
    if (DOM.wishlistBrowseBtn) {
      DOM.wishlistBrowseBtn.addEventListener('click', () => {
        closeWishlistDrawer();
        const shop = document.getElementById('shop');
        if (shop) shop.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Product Modal Close
    if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener('click', closeProductModal);
    if (DOM.productModalOverlay) {
      DOM.productModalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.productModalOverlay) closeProductModal();
      });
    }

    // Modal Quantity Selector
    if (DOM.modalQtyMinus) {
      DOM.modalQtyMinus.addEventListener('click', () => {
        let val = parseInt(DOM.modalQtyInput.value, 10) || 1;
        if (val > 1) {
          val--;
          DOM.modalQtyInput.value = val;
          state.modalQuantity = val;
        }
      });
    }
    if (DOM.modalQtyPlus) {
      DOM.modalQtyPlus.addEventListener('click', () => {
        let val = parseInt(DOM.modalQtyInput.value, 10) || 1;
        if (val < 99) {
          val++;
          DOM.modalQtyInput.value = val;
          state.modalQuantity = val;
        }
      });
    }
    if (DOM.modalQtyInput) {
      DOM.modalQtyInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value, 10) || 1;
        val = Math.max(1, Math.min(99, val));
        DOM.modalQtyInput.value = val;
        state.modalQuantity = val;
      });
    }

    // Modal Add To Cart
    if (DOM.modalAddToCartBtn) {
      DOM.modalAddToCartBtn.addEventListener('click', () => {
        if (!state.selectedModalProduct) return;
        addToCart(state.selectedModalProduct.id, state.modalQuantity, DOM.modalAddToCartBtn);
      });
    }

    // Modal Wishlist Toggle
    if (DOM.modalWishlistBtn) {
      DOM.modalWishlistBtn.addEventListener('click', () => {
        if (!state.selectedModalProduct) return;
        toggleWishlist(state.selectedModalProduct.id);
      });
    }

    // Checkout Modal Open / Close / Submit
    if (DOM.checkoutBtn) DOM.checkoutBtn.addEventListener('click', openCheckoutModal);
    if (DOM.checkoutCloseBtn) DOM.checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
    if (DOM.checkoutModalOverlay) {
      DOM.checkoutModalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.checkoutModalOverlay) closeCheckoutModal();
      });
    }
    if (DOM.checkoutForm) {
      DOM.checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processCheckoutOrder();
      });
    }
    if (DOM.finishCheckoutBtn) {
      DOM.finishCheckoutBtn.addEventListener('click', () => {
        closeCheckoutModal();
        const shop = document.getElementById('shop');
        if (shop) shop.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Payment method selector visual feedback
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        paymentOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        const cardInputs = document.getElementById('card-inputs-row');
        if (cardInputs) {
          cardInputs.style.display = radio.value === 'card' ? 'grid' : 'none';
        }
      });
    });

    // Mobile Drawer Open / Close
    if (DOM.mobileToggle) DOM.mobileToggle.addEventListener('click', openMobileMenu);
    if (DOM.mobileDrawerClose) DOM.mobileDrawerClose.addEventListener('click', closeMobileMenu);
    if (DOM.mobileOverlay) DOM.mobileOverlay.addEventListener('click', closeMobileMenu);

    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Info Modal
    if (DOM.infoModalClose) DOM.infoModalClose.addEventListener('click', closeInfoModal);
    if (DOM.infoModalOk) DOM.infoModalOk.addEventListener('click', closeInfoModal);
    if (DOM.infoModalOverlay) {
      DOM.infoModalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.infoModalOverlay) closeInfoModal();
      });
    }

    // Global ESC Key to close any open modal/drawer
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductModal();
        closeCartDrawer();
        closeWishlistDrawer();
        closeCheckoutModal();
        closeMobileMenu();
        closeInfoModal();
      }
    });

    // Copy coupon button in promo banner
    if (DOM.copyCouponBtn) {
      DOM.copyCouponBtn.addEventListener('click', () => {
        const codeText = document.getElementById('coupon-code-text').textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          showToast('Coupon Copied!', `Code <strong>${codeText}</strong> copied to clipboard.`, 'success');
        }).catch(() => {
          showToast('Coupon Code', `Use code: ${codeText}`, 'info');
        });
      });
    }

    // Newsletter Form
    if (DOM.newsletterForm) {
      DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && emailInput.value.trim()) {
          showToast('Welcome to ShopEase VIP!', `We've sent a 15% off discount to ${emailInput.value.trim()}`, 'success');
          emailInput.value = '';
        }
      });
    }

    // Set dynamic current year in footer
    if (DOM.currentYear) {
      DOM.currentYear.textContent = new Date().getFullYear();
    }
  }

  // ----------------------------------------------------------------------------
  // 13. APP BOOTSTRAP
  // ----------------------------------------------------------------------------
  function init() {
    renderProducts();
    renderCart();
    updateWishlistBadges();
    initEventListeners();
  }

  // Expose global methods for inline HTML onclick triggers
  window.shopApp = {
    openProductModal,
    closeProductModal,
    addToCart,
    quickAddToCart: (id) => addToCart(id, 1),
    updateCartQuantity,
    removeFromCart,
    clearCart,
    toggleWishlist,
    setCategory,
    clearSearch,
    showInfoModal
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

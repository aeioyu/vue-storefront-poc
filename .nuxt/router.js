import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c3850f0 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _0fab03d0 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _2421bd1c = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _7a5de1b2 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _c05fc646 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _ed442ef8 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _3713002e = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _20cfbc47 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _44459f5f = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _8081d1e4 = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _d7fcbec6 = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _66200575 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _a4ba3232 = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _6f46c1fe = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _176c9768 = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _49e1b2d5 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _5c3850f0,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _0fab03d0,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _2421bd1c,
      name: "billing___en"
    }, {
      path: "payment",
      component: _7a5de1b2,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _c05fc646,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _ed442ef8,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _0fab03d0,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _2421bd1c,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _7a5de1b2,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _c05fc646,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _ed442ef8,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _3713002e,
    name: "home___de"
  }, {
    path: "/Home",
    component: _3713002e,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _20cfbc47,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _44459f5f,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _8081d1e4,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _d7fcbec6,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _66200575,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _a4ba3232,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _6f46c1fe,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _176c9768,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _49e1b2d5,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _5c3850f0,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _0fab03d0,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _2421bd1c,
      name: "billing___de"
    }, {
      path: "payment",
      component: _7a5de1b2,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _c05fc646,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _ed442ef8,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _0fab03d0,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _2421bd1c,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _7a5de1b2,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _c05fc646,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _ed442ef8,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _3713002e,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _20cfbc47,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _44459f5f,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _8081d1e4,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _d7fcbec6,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _66200575,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _a4ba3232,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _6f46c1fe,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _176c9768,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _49e1b2d5,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _20cfbc47,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _49e1b2d5,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _5c3850f0,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _20cfbc47,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _49e1b2d5,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _5c3850f0,
    name: "category___en"
  }, {
    path: "/",
    component: _3713002e,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

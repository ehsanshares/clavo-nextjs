"use client";

import { useEffect } from "react";

/**
 * Vanilla interaction layer ported verbatim from the template's assets/js/main.js
 * (full-screen nav overlay, Pages mega-dropdown, FAQ accordion, pricing tabs, promo
 * autoplay slider, localStorage cart, checkout, demo forms, scroll-reveal, hover).
 *
 * The original markup + class names are reproduced 1:1 in the React components, so
 * this logic drives them unchanged. It runs after mount (post-hydration) on every
 * route so client navigations re-initialise the freshly rendered DOM.
 */
export function ClavoScripts() {
  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 992px)");

    /* ---------- Full-screen navigation overlay ---------- */
    function initNav() {
      const navs: HTMLElement[] = [];
      document.querySelectorAll<HTMLElement>(".navbar, .secondary-navbar").forEach((nav) => {
        const overlay = nav.querySelector<HTMLElement>(".nav-menu-2, .nave-menu");
        if (!overlay) return;
        navs.push(nav);
        function set(open: boolean) {
          nav.classList.toggle("is-open", open);
          document.body.classList.toggle("nav-locked", open);
          nav.querySelectorAll(".menu-button, .menu-button-2").forEach((b) => {
            b.setAttribute("aria-expanded", String(open));
          });
        }
        (nav as HTMLElement & { _setOpen?: (o: boolean) => void })._setOpen = set;
        nav.querySelectorAll<HTMLElement>(".menu-button, .menu-button-2").forEach((btn) => {
          const isCloser = overlay.contains(btn);
          btn.setAttribute("role", "button");
          btn.setAttribute("tabindex", "0");
          btn.setAttribute("aria-label", isCloser ? "Close menu" : "Open menu");
          btn.setAttribute("aria-expanded", "false");
          const act = () => set(isCloser ? false : !nav.classList.contains("is-open"));
          btn.addEventListener("click", act);
          btn.addEventListener("keydown", (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              act();
            }
          });
        });
        overlay
          .querySelectorAll("a.nav-link, a.nav-link-two, a.navbar-menu, .navbar-link-items a")
          .forEach((a) => a.addEventListener("click", () => set(false)));
      });
      document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Escape")
          navs.forEach((n) =>
            (n as HTMLElement & { _setOpen?: (o: boolean) => void })._setOpen?.(false),
          );
      });
    }

    /* ---------- Pages mega-dropdown (hover on desktop, click on touch) ---------- */
    function initDropdown() {
      document.querySelectorAll<HTMLElement>(".menu-dropdown-wrapper, .nav-dropdown").forEach((wrap) => {
        const toggle = wrap.querySelector<HTMLElement>(".drapdown-toggle");
        const list = wrap.querySelector(".dropdown-colum-wrapper");
        if (!toggle || !list) return;
        toggle.setAttribute("role", "button");
        toggle.setAttribute("tabindex", "0");
        toggle.setAttribute("aria-expanded", "false");
        function set(open: boolean) {
          wrap.classList.toggle("is-open", open);
          toggle!.setAttribute("aria-expanded", String(open));
        }
        toggle.addEventListener("click", (e) => {
          e.stopPropagation();
          set(!wrap.classList.contains("is-open"));
        });
        toggle.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle.click();
          }
          if (e.key === "Escape") set(false);
        });
        let timer: ReturnType<typeof setTimeout>;
        wrap.addEventListener("mouseenter", () => {
          if (mqDesktop.matches) {
            clearTimeout(timer);
            set(true);
          }
        });
        wrap.addEventListener("mouseleave", () => {
          if (mqDesktop.matches) {
            clearTimeout(timer);
            timer = setTimeout(() => set(false), 220);
          }
        });
      });
      document.addEventListener("click", () => {
        document.querySelectorAll(".menu-dropdown-wrapper.is-open, .nav-dropdown.is-open").forEach((w) => {
          w.classList.remove("is-open");
          const t = w.querySelector(".drapdown-toggle");
          if (t) t.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* ---------- FAQ accordion ---------- */
    function initAccordion() {
      document.querySelectorAll<HTMLElement>(".accordion").forEach((acc) => {
        const head = acc.querySelector<HTMLElement>(".accordion-title-wrap");
        const panel = acc.querySelector<HTMLElement>(".accordion-description-wrap");
        if (!head || !panel) return;
        head.setAttribute("role", "button");
        head.setAttribute("tabindex", "0");
        head.setAttribute("aria-expanded", "false");
        function toggle() {
          const open = acc.classList.toggle("is-open");
          head!.setAttribute("aria-expanded", String(open));
          panel!.style.maxHeight = open ? panel!.scrollHeight + "px" : "";
        }
        head.addEventListener("click", toggle);
        head.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        });
      });
    }

    /* ---------- Tabs (pricing Monthly/Yearly + tab groups) ---------- */
    function setupTabs(group: HTMLElement) {
      if (group.dataset.tabsInit) return;
      const links = group.querySelectorAll<HTMLElement>("a[data-tab], .pricing-tab-link[data-tab]");
      const panes = ([] as HTMLElement[]).slice
        .call(group.querySelectorAll<HTMLElement>("[data-tab]"))
        .filter((el: HTMLElement) => el.tagName !== "A" && !el.classList.contains("pricing-tab-link"));
      if (!links.length || !panes.length) return;
      group.dataset.tabsInit = "1";
      function activate(name?: string) {
        links.forEach((l) => l.classList.toggle("is-active", l.dataset.tab === name));
        panes.forEach((p: HTMLElement) => p.classList.toggle("is-active", p.dataset.tab === name));
      }
      links.forEach((l) => {
        l.setAttribute("role", "tab");
        l.setAttribute("tabindex", "0");
        l.addEventListener("click", (e) => {
          e.preventDefault();
          activate(l.dataset.tab);
        });
        l.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            activate(l.dataset.tab);
          }
        });
      });
      const initial =
        group.querySelector<HTMLElement>(
          "a[data-tab].is-active, .pricing-tab-link[data-tab].is-active",
        ) || links[0];
      if (initial) activate(initial.dataset.tab);
    }
    function initTabs() {
      document.querySelectorAll<HTMLElement>(".w-tabs, [data-tabs]").forEach(setupTabs);
      document.querySelectorAll<HTMLElement>(".pricing-tabs, .tabs").forEach(setupTabs);
    }

    /* ---------- Promotional image slider (autoplay, infinite, no controls) ---------- */
    function initSlider() {
      document.querySelectorAll<HTMLElement>(".promotional-image-slider").forEach((slider) => {
        const mask =
          slider.querySelector<HTMLElement>(".w-slider-mask, .slider-mask") ||
          (slider.firstElementChild as HTMLElement | null);
        if (!mask) return;
        const slides = ([] as HTMLElement[]).slice
          .call(mask.children)
          .filter((c: HTMLElement) => c.nodeType === 1);
        if (slides.length < 2) return;
        const track = document.createElement("div");
        track.className = "clavo-slider-track";
        slides.forEach((s) => track.appendChild(s));
        mask.appendChild(track);
        let i = 0;
        function step() {
          i = (i + 1) % slides.length;
          track.style.transform = "translateX(" + (-i * 100) / slides.length + "%)";
          if (i === 0) {
            track.style.transition = "none";
            void track.offsetWidth;
            track.style.transition = "";
          }
        }
        track.style.width = slides.length * 100 + "%";
        slides.forEach((s) => {
          s.style.width = 100 / slides.length + "%";
          s.style.flex = "0 0 auto";
        });
        let timer = setInterval(step, 3500);
        slider.addEventListener("mouseenter", () => clearInterval(timer));
        slider.addEventListener("mouseleave", () => {
          timer = setInterval(step, 3500);
        });
      });
    }

    /* ---------- Cart (localStorage, no backend) ---------- */
    const CART_KEY = "clavo:cart:v1";
    type CartItem = { id: string; name: string; price: number; qty: number };
    const Cart = {
      read(): CartItem[] {
        try {
          return JSON.parse(localStorage.getItem(CART_KEY) || "[]") || [];
        } catch {
          return [];
        }
      },
      write(items: CartItem[]) {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
        this.render();
      },
      add(p: CartItem) {
        const items = this.read();
        const found = items.find((i) => i.id === p.id);
        if (found) found.qty += p.qty || 1;
        else items.push({ id: p.id, name: p.name, price: p.price, qty: p.qty || 1 });
        this.write(items);
      },
      setQty(id: string, qty: number) {
        const items = this.read().map((i) =>
          i.id === id ? Object.assign(i, { qty: Math.max(1, qty) }) : i,
        );
        this.write(items);
      },
      remove(id: string) {
        this.write(this.read().filter((i) => i.id !== id));
      },
      count() {
        return this.read().reduce((n, i) => n + i.qty, 0);
      },
      total() {
        return this.read().reduce((s, i) => s + i.price * i.qty, 0);
      },
      money(n: number) {
        return "$" + n.toFixed(2);
      },
      render() {
        const count = this.count();
        document.querySelectorAll("[data-cart-count]").forEach((el) => {
          el.textContent = String(count);
        });
        document.querySelectorAll("[data-cart-subtotal]").forEach((el) => {
          el.textContent = Cart.money(Cart.total());
        });
        const list = document.querySelector("[data-cart-list]");
        if (list) {
          const items = this.read();
          const empty = document.querySelector<HTMLElement>("[data-cart-empty]");
          const footer = document.querySelector<HTMLElement>("[data-cart-footer]");
          if (empty) empty.hidden = items.length > 0;
          if (footer) footer.hidden = items.length === 0;
          list.innerHTML = items
            .map(
              (i) =>
                '<li class="cart-line" data-id="' +
                i.id +
                '"><div class="cart-line-info"><span class="cart-line-name">' +
                i.name +
                '</span><span class="cart-line-price">' +
                Cart.money(i.price) +
                '</span></div><div class="cart-line-actions"><button type="button" class="cart-qty-btn" data-qty-dec aria-label="Decrease">−</button><span class="cart-qty">' +
                i.qty +
                '</span><button type="button" class="cart-qty-btn" data-qty-inc aria-label="Increase">+</button><button type="button" class="cart-remove" data-remove aria-label="Remove">×</button></div></li>',
            )
            .join("");
        }
      },
    };

    function initCart() {
      Cart.render();
      const modal = document.querySelector<HTMLElement>(".cart-modal");
      function setOpen(o: boolean) {
        if (modal) {
          modal.classList.toggle("is-open", o);
          modal.setAttribute("aria-hidden", String(!o));
          const wrap = modal.closest(".cart");
          if (wrap) wrap.classList.toggle("cart-open", o);
        }
        document.body.classList.toggle("nav-locked", o);
      }
      document.querySelectorAll("[data-cart-open]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          setOpen(true);
        });
      });
      document.querySelectorAll("[data-cart-close]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          setOpen(false);
        });
      });
      if (modal)
        modal.addEventListener("click", (e) => {
          if (e.target === modal) setOpen(false);
        });
      document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      });
      const list = document.querySelector<HTMLElement>("[data-cart-list]");
      if (list)
        list.addEventListener("click", (e) => {
          const target = e.target as HTMLElement;
          const line = target.closest<HTMLElement>(".cart-line");
          if (!line) return;
          const id = line.dataset.id!;
          const item = Cart.read().find((i) => i.id === id);
          if (!item) return;
          if (target.closest("[data-qty-inc]")) Cart.setQty(id, item.qty + 1);
          else if (target.closest("[data-qty-dec]")) Cart.setQty(id, item.qty - 1);
          else if (target.closest("[data-remove]")) Cart.remove(id);
        });
      document.querySelectorAll<HTMLElement>("[data-add-to-cart]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          Cart.add({
            id: btn.dataset.id!,
            name: btn.dataset.name!,
            price: parseFloat(btn.dataset.price || "0") || 0,
            qty: 1,
          });
          setOpen(true);
        });
      });
    }
    (window as unknown as { ClavoCart: typeof Cart }).ClavoCart = Cart;

    /* ---- Checkout + order confirmation (front-end demo) ---- */
    const ORDER_KEY = "clavo:lastorder";
    function initCheckout() {
      const isConfirm =
        document.body.hasAttribute("data-order-confirmation") ||
        location.pathname.replace(/\/$/, "") === "/order-confirmation";
      const onCheckout = !!document.querySelector("[data-place-order]");
      if (!isConfirm && !onCheckout) return;
      let items: CartItem[], total: number;
      if (isConfirm) {
        let last: { items?: CartItem[]; total?: number } | null = null;
        try {
          last = JSON.parse(localStorage.getItem(ORDER_KEY) || "null");
        } catch {}
        items = (last && last.items) || [];
        total = (last && last.total) || 0;
      } else {
        items = Cart.read();
        total = Cart.total();
      }
      const list = document.querySelector("[data-checkout-items]");
      if (list) {
        list.innerHTML = items.length
          ? items
              .map(
                (i) =>
                  '<div class="checkout-item"><div class="checkout-item-info">' +
                  i.name +
                  ' <span class="checkout-item-qty">x' +
                  i.qty +
                  "</span></div><div>" +
                  Cart.money(i.price * i.qty) +
                  "</div></div>",
              )
              .join("")
          : '<div class="checkout-empty">Your cart is empty.</div>';
      }
      document
        .querySelectorAll("[data-checkout-subtotal], [data-checkout-total]")
        .forEach((el) => {
          el.textContent = Cart.money(total);
        });
      document.querySelectorAll("[data-place-order]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          localStorage.setItem(
            ORDER_KEY,
            JSON.stringify({ items: Cart.read(), total: Cart.total(), date: Date.now() }),
          );
          Cart.write([]);
          window.location.href = "/order-confirmation";
        });
      });
    }

    /* ---- Front-end demo forms (no backend) ---- */
    function initForms() {
      document.querySelectorAll<HTMLFormElement>("[data-demo-form]").forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const wrap = form.parentElement;
          const done = wrap?.querySelector<HTMLElement>("[data-form-done]");
          const fail = wrap?.querySelector<HTMLElement>("[data-form-fail]");
          if (fail) fail.hidden = true;
          form.style.display = "none";
          if (done) done.hidden = false;
        });
      });
    }

    /* ---- Scroll-reveal (Clavo slideInBottom preset = fade-up) ---- */
    function initReveal() {
      const els = ([] as HTMLElement[]).slice.call(document.querySelectorAll<HTMLElement>(".reveal"));
      if (!els.length) return;
      if (!("IntersectionObserver" in window)) {
        els.forEach((e: HTMLElement) => e.classList.add("is-visible"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      els.forEach((e: HTMLElement) => {
        const sibs = ([] as HTMLElement[]).slice
          .call(e.parentNode!.children)
          .filter((c: HTMLElement) => c.classList.contains("reveal"));
        const i = sibs.indexOf(e);
        if (i > 0) e.style.transitionDelay = Math.min(i * 70, 280) + "ms";
        io.observe(e);
      });
    }

    /* ---- Hover driver: toggle .is-hover on interactive rows/cards/buttons ---- */
    function initHover() {
      const sel = [
        ".service-single-card", ".service-single-icon-box-wrap", ".service-link-block",
        ".about-link-block-wrapper",
        ".footer-link-block-wrapper", ".footer-menu-item-link",
        ".work-link-wrapper", ".blog-link-block", ".awards-single-card",
        ".primary-button-wrapper", ".secondary-button-wrapper",
        ".plan-button-wrapper", ".hero-button-wrapper", ".tab-button",
      ].join(",");
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        el.addEventListener("mouseenter", () => el.classList.add("is-hover"));
        el.addEventListener("mouseleave", () => el.classList.remove("is-hover"));
      });
    }

    /* ---- Hero "Scroll" button: smooth-scroll past the hero ---- */
    function initScrollButton() {
      document.querySelectorAll<HTMLElement>(".hero-button-wrapper").forEach((btn) => {
        if (btn.getAttribute("href") !== "#") return;
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const hero = btn.closest("section") || btn.closest(".inner-hero");
          const top = hero
            ? hero.getBoundingClientRect().bottom + window.scrollY
            : window.innerHeight;
          window.scrollTo({ top, behavior: "smooth" });
        });
      });
    }

    initNav();
    initHover();
    initScrollButton();
    initDropdown();
    initAccordion();
    initTabs();
    initSlider();
    initCart();
    initCheckout();
    initForms();
    initReveal();
  }, []);

  return null;
}

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { menuItems, socialLinks } from "../../data";
import openAppOrWeb from "../../utils/openAppOrWeb";
import { socialIcons } from "../icons";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(menuItems[0].id);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const progressRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Glass background once the page is scrolled, plus the reading progress bar.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        progressRef.current?.style.setProperty("--progress", `${progress}`);
        setScrolled(window.scrollY > 12);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight the menu item of the section in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    menuItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Slide the pill behind the active menu item.
  useEffect(() => {
    const update = () => {
      const item = itemRefs.current[active];
      if (item) setIndicator({ left: item.offsetLeft, width: item.offsetWidth });
    };

    update();
    document.fonts?.ready.then(update);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const wrapperClassName = [
    "topbar-wrapper",
    scrolled || open ? "topbar-scrolled" : "",
    open ? "topbar-open" : "",
  ].join(" ");

  return (
    <header className={wrapperClassName}>
      <div className="topbar container">
        <a href="#Home" className="topbar-logo" aria-label="İsmail Tan, back to top">
          <span>TİSO</span>
        </a>

        <nav className="topbar-menu" aria-label="Main">
          <span
            className="topbar-menu-indicator"
            style={{
              width: indicator.width,
              transform: `translateX(${indicator.left}px)`,
            }}
          />
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(element) => {
                itemRefs.current[item.id] = element;
              }}
              className={`topbar-menu-item ${
                active === item.id ? "topbar-menu-item-active" : ""
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.text];
            return (
              <a
                key={link.text}
                href={link.webLink}
                target="_blank"
                rel="noreferrer"
                aria-label={link.text}
                className="topbar-social"
                onClick={(event) => openAppOrWeb(event, link)}
              >
                <Icon />
              </a>
            );
          })}
          <button
            type="button"
            className="topbar-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="topbar-progress" ref={progressRef} />

      <nav className="topbar-mobile-menu" aria-label="Mobile" aria-hidden={!open}>
        {menuItems.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className={`topbar-mobile-item ${
              active === item.id ? "topbar-mobile-item-active" : ""
            }`}
            style={{ "--delay": `${idx * 60}ms` } as CSSProperties}
          >
            <span className="topbar-mobile-index">0{idx + 1}</span>
            {item.text}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Topbar;

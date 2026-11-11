/**
 * 02-CSS Repository Hub — Production Script
 * Implements rendering for all 24 course practices, search & category filtering,
 * fail-safe mobile menu dropdown with auto-reset, tree copying, and CSS Notes PDF download feedback.
 */

const practicesData = [
    {
        id: "01",
        title: "CSS & CSS Colors",
        category: "foundations",
        categoryLabel: "Foundations",
        description: "Inline styles and internal style block applying azure, blueviolet, and goldenrod color rules to headings and buttons.",
        htmlPath: "./01-Course-Practices/HTML-Files/01-CSS-and-CSS-Colors.html",
        cssPath: null // Internal & inline styles
    },
    {
        id: "02",
        title: "CSS Colour System",
        category: "foundations",
        categoryLabel: "Foundations",
        description: "External stylesheet demonstrating hex (#a52a2a), rgba(255,0,0,0.66), text-align, line-height, and dotted underline on Shelley's poem.",
        htmlPath: "./01-Course-Practices/HTML-Files/02-CSS-Colour-System.html",
        cssPath: "./01-Course-Practices/CSS-Files/02-CSS-Colour-System.css"
    },
    {
        id: "03",
        title: "CSS Selectors",
        category: "foundations",
        categoryLabel: "Selectors",
        description: "Universal (*), element (h1), ID (#searchbtn), and class (.userbtn) selectors on a clean Facebook-inspired authentication layout.",
        htmlPath: "./01-Course-Practices/HTML-Files/03-CSS-Selectors.html",
        cssPath: "./01-Course-Practices/CSS-Files/03-CSS-Selectors.css"
    },
    {
        id: "04",
        title: "CSS Selectors Part 2",
        category: "foundations",
        categoryLabel: "Selectors",
        description: "Quora feed layout testing adjacent sibling combinator (p+h3), child combinator (p>a), and input attribute selectors.",
        htmlPath: "./01-Course-Practices/HTML-Files/04-CSS-Selectors-p2.html",
        cssPath: "./01-Course-Practices/CSS-Files/04-CSS-Selectors-p2.css"
    },
    {
        id: "05",
        title: "CSS Typography",
        category: "foundations",
        categoryLabel: "Typography",
        description: "Iron Man character wiki layout testing font-family, letter-spacing, rem unit hierarchy, table styling, and anchor styling.",
        htmlPath: "./01-Course-Practices/HTML-Files/05-CSS-Typography.html",
        cssPath: "./01-Course-Practices/CSS-Files/05-CSS-Typography.css"
    },
    {
        id: "06",
        title: "Pseudo-Classes & Pseudo-Elements",
        category: "foundations",
        categoryLabel: "Pseudo-Selectors",
        description: "Stark OS Telemetry UI testing :hover, :active, :focus, :checked+label, :nth-child(even), ::first-letter, and ::selection.",
        htmlPath: "./01-Course-Practices/HTML-Files/06-CSS-Pseudoclass-Pseudoelement.html",
        cssPath: "./01-Course-Practices/CSS-Files/06-CSS-Pseudoclass-Pseudoelement.css"
    },
    {
        id: "07",
        title: "CSS Box Model",
        category: "box-effects",
        categoryLabel: "Box Model",
        description: "Explicit content dimensions, padding, borders, asymmetric corner radii (border-top-left-radius), and :active button state.",
        htmlPath: "./01-Course-Practices/HTML-Files/07-CSS-Box-Model.html",
        cssPath: "./01-Course-Practices/CSS-Files/07-CSS-Box-Model.css"
    },
    {
        id: "08",
        title: "About Traffic Lights Webpage",
        category: "box-effects",
        categoryLabel: "Box Model UI",
        description: "Complete traffic mobility guide and vertical signal enclosure with 3 circular 50% border-radius indicator lights.",
        htmlPath: "./01-Course-Practices/HTML-Files/08-About-Traffic-Lights-Webpage.html",
        cssPath: "./01-Course-Practices/CSS-Files/08-About-Traffic-Lights-Webpage.css"
    },
    {
        id: "09",
        title: "CSS Transition & Transform",
        category: "box-effects",
        categoryLabel: "Transforms",
        description: "Interactive hover tiles demonstrating transition timing functions with rotate(-10deg), skew(-20deg), scale(0.3), and translateY(-30%).",
        htmlPath: "./01-Course-Practices/HTML-Files/09-CSS-Transition-Transform.html",
        cssPath: "./01-Course-Practices/CSS-Files/09-CSS-Transition-Transform.css"
    },
    {
        id: "10",
        title: "Wedding Cards",
        category: "box-effects",
        categoryLabel: "Cards & Hover",
        description: "Shaadi Mein Zaroor Aana cards with smooth scale(1.01) expansion and gold box-shadow depth on user hover.",
        htmlPath: "./01-Course-Practices/HTML-Files/10-Wedding-Cards.html",
        cssPath: "./01-Course-Practices/CSS-Files/10-Wedding-Cards.css"
    },
    {
        id: "11",
        title: "CSS Position",
        category: "box-effects",
        categoryLabel: "Positioning",
        description: "Side-by-side behavioral comparison showing static, relative, absolute, and fixed positioning relative to scroll offsets.",
        htmlPath: "./01-Course-Practices/HTML-Files/11-CSS-Position.html",
        cssPath: "./01-Course-Practices/CSS-Files/11-CSS-Position.css"
    },
    {
        id: "12",
        title: "Smiley Face",
        category: "box-effects",
        categoryLabel: "Positioning UI",
        description: "Emoji face artwork created using fixed coordinates for face enclosure, left/right eyes, and semicircular mouth.",
        htmlPath: "./01-Course-Practices/HTML-Files/12-Smiley-Face.html",
        cssPath: "./01-Course-Practices/CSS-Files/12-Smiley-Face.css"
    },
    {
        id: "13",
        title: "Flexbox Playground",
        category: "flexbox",
        categoryLabel: "Flexbox",
        description: "Foundational flex container properties exploring display: flex, flex-direction, and inline flow dynamics.",
        htmlPath: "./01-Course-Practices/HTML-Files/13-Flexbox-Playground.html",
        cssPath: "./01-Course-Practices/CSS-Files/13-Flexbox-Playground.css"
    },
    {
        id: "14",
        title: "Flexbox Playground Part 2",
        category: "flexbox",
        categoryLabel: "Flexbox",
        description: "Main-axis item distribution testing justify-content (flex-start, center, space-between, space-around, space-evenly).",
        htmlPath: "./01-Course-Practices/HTML-Files/14-Flexbox-Playground-pt2.html",
        cssPath: "./01-Course-Practices/CSS-Files/14-Flexbox-Playground-pt2.css"
    },
    {
        id: "15",
        title: "Flexbox Playground Part 3",
        category: "flexbox",
        categoryLabel: "Flexbox",
        description: "Cross-axis alignment and wrapping behavior testing align-items and flex-wrap across multi-line layouts.",
        htmlPath: "./01-Course-Practices/HTML-Files/15-Flexbox-Playground-pt3.html",
        cssPath: "./01-Course-Practices/CSS-Files/15-Flexbox-Playground-pt3.css"
    },
    {
        id: "16",
        title: "Flexbox Playground Part 4",
        category: "flexbox",
        categoryLabel: "Flexbox",
        description: "Multi-line cross-axis spacing and individual child controls exploring align-content, flex-grow, and align-self.",
        htmlPath: "./01-Course-Practices/HTML-Files/16-Flexbox-Playground-pt4.html",
        cssPath: "./01-Course-Practices/CSS-Files/16-Flexbox-Playground-pt4.css"
    },
    {
        id: "17",
        title: "Number Pad",
        category: "flexbox",
        categoryLabel: "Flexbox UI",
        description: "3x3 keypad layout utilizing flex-wrap: wrap, justify-content: space-evenly, and align-content: space-evenly.",
        htmlPath: "./01-Course-Practices/HTML-Files/17-Number-Pad.html",
        cssPath: "./01-Course-Practices/CSS-Files/17-Number-Pad.css"
    },
    {
        id: "18",
        title: "Responsive Navbar",
        category: "flexbox",
        categoryLabel: "Responsive Nav",
        description: "SVMCM multi-tier navigation with desktop dropdown menus, tablet flyouts, and complete mobile menu collapse.",
        htmlPath: "./01-Course-Practices/HTML-Files/18-Responsive-Navbar.html",
        cssPath: "./01-Course-Practices/CSS-Files/18-Responsive-Navbar.css"
    },
    {
        id: "19",
        title: "Grid Playground",
        category: "grid",
        categoryLabel: "CSS Grid",
        description: "Progressive tasks covering explicit pixel sizing, repeat() syntax with fr units, track spans, and grid-column coordinates.",
        htmlPath: "./01-Course-Practices/HTML-Files/19-Grid-Playground.html",
        cssPath: "./01-Course-Practices/CSS-Files/19-Grid-Playground.css"
    },
    {
        id: "20",
        title: "Grid Playground Part 2",
        category: "grid",
        categoryLabel: "Grid Alignment",
        description: "Container-level alignment matrix testing justify-items, align-items, and place-items across start, end, and center states.",
        htmlPath: "./01-Course-Practices/HTML-Files/20-Grid-Playground-p2.html",
        cssPath: "./01-Course-Practices/CSS-Files/20-Grid-Playground-p2.css"
    },
    {
        id: "21",
        title: "Grid Playground Part 3",
        category: "grid",
        categoryLabel: "Grid Self Align",
        description: "Individual grid item alignment testing justify-self, align-self, and place-self overrides on single cells.",
        htmlPath: "./01-Course-Practices/HTML-Files/21-Grid-Playground-p3.html",
        cssPath: "./01-Course-Practices/CSS-Files/21-Grid-Playground-p3.css"
    },
    {
        id: "22",
        title: "Grid Playground Part 4",
        category: "grid",
        categoryLabel: "Grid Stretch",
        description: "Tasks exploring stretch mechanics across justify-items, align-items, and combined place-items.",
        htmlPath: "./01-Course-Practices/HTML-Files/22-Grid-Playground-p4.html",
        cssPath: "./01-Course-Practices/CSS-Files/22-Grid-Playground-p4.css"
    },
    {
        id: "23",
        title: "CSS Animation",
        category: "animations",
        categoryLabel: "Animations",
        description: "Dual keyframe implementation pairing entry scaling (animationBabua) with an infinite 4-quadrant border color cycle.",
        htmlPath: "./01-Course-Practices/HTML-Files/23-CSS-Animation.html",
        cssPath: "./01-Course-Practices/CSS-Files/23-CSS-Animation.css"
    },
    {
        id: "24",
        title: "Pet Adoption Page",
        category: "animations",
        categoryLabel: "Capstone Practice",
        description: "Complete UI containing a 3-second spinning preloader fade-out, content fade-in animation, and responsive pet cards.",
        htmlPath: "./01-Course-Practices/HTML-Files/24-Pet-Adoption-Page.html",
        cssPath: "./01-Course-Practices/CSS-Files/24-Pet-Adoption-Page.css"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const practicesGrid = document.getElementById("practices-grid");
    const chips = document.querySelectorAll(".chip");
    const searchInput = document.getElementById("practice-search");
    const resultsCount = document.getElementById("results-count");

    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    const mobileNavClose = document.getElementById("mobile-nav-close");
    const mainNav = document.getElementById("main-nav");

    const copyTreeBtn = document.getElementById("copy-tree-btn");
    const copyTreeLabel = document.getElementById("copy-tree-label");
    const repoTreeCode = document.getElementById("repo-tree-code");
    const toast = document.getElementById("toast");

    let activeFilter = "all";
    let searchQuery = "";

    function showToast(message, icon = "fa-circle-check") {
        if (!toast) return;
        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    function renderPractices() {
        const filtered = practicesData.filter((item) => {
            const matchesCategory = activeFilter === "all" || item.category === activeFilter;
            const query = searchQuery.toLowerCase().trim();
            const matchesQuery =
                !query ||
                `q${item.id}`.includes(query) ||
                item.id.includes(query) ||
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.categoryLabel.toLowerCase().includes(query);

            return matchesCategory && matchesQuery;
        });

        if (resultsCount) {
            resultsCount.textContent = `Showing ${filtered.length} of ${practicesData.length} exercises`;
        }

        if (filtered.length === 0) {
            practicesGrid.innerHTML = `
                <div class="empty-results-box">
                    <p><i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem; margin-bottom: 0.5rem; display:block;"></i> No practice questions matched "<strong>${searchQuery}</strong>". Try a different keyword or reset the filter.</p>
                </div>
            `;
            return;
        }

        practicesGrid.innerHTML = filtered
            .map((item) => {
                const cssButton = item.cssPath
                    ? `<a href="${item.cssPath}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost" title="View external CSS"><i class="fa-brands fa-css3-alt"></i> CSS</a>`
                    : `<span class="btn btn-sm btn-ghost" title="Internal / inline styling in HTML file"><i class="fa-solid fa-code"></i> Internal</span>`;

                return `
                    <article class="practice-card-item">
                        <div class="practice-top-row">
                            <span class="q-label">Q${item.id}</span>
                            <span class="q-cat">${item.categoryLabel}</span>
                        </div>
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <div class="practice-actions-row">
                            <a href="${item.htmlPath}" target="_blank" rel="noopener" class="btn btn-sm btn-outline">
                                <i class="fa-brands fa-html5"></i> Launch HTML
                            </a>
                            ${cssButton}
                        </div>
                    </article>
                `;
            })
            .join("");
    }

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            chips.forEach((c) => c.classList.remove("active"));
            chip.classList.add("active");
            activeFilter = chip.dataset.filter;
            renderPractices();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderPractices();
        });
    }

    function toggleMenu() {
        if (!mainNav) return;
        const isOpen = mainNav.classList.toggle("open");
        if (mobileNavToggle) {
            mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
            mobileNavToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        }
    }

    function closeMenu() {
        if (!mainNav) return;
        mainNav.classList.remove("open");
        if (mobileNavToggle) {
            mobileNavToggle.setAttribute("aria-expanded", "false");
            mobileNavToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    }

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener("click", (e) => {
            e.stopPropagation();
            closeMenu();
        });
    }

    if (mainNav) {
        mainNav.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    document.addEventListener("click", (e) => {
        if (mainNav && mainNav.classList.contains("open") && !mainNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mainNav && mainNav.classList.contains("open")) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && mainNav && mainNav.classList.contains("open")) {
            closeMenu();
        }
    });

    if (copyTreeBtn && repoTreeCode) {
        copyTreeBtn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(repoTreeCode.innerText);
                if (copyTreeLabel) copyTreeLabel.textContent = "Copied!";
                showToast("Folder tree copied to clipboard!");
                setTimeout(() => {
                    if (copyTreeLabel) copyTreeLabel.textContent = "Copy Tree";
                }, 2000);
            } catch (err) {
                showToast("Unable to copy to clipboard", "fa-triangle-exclamation");
            }
        });
    }

    document.querySelectorAll(".pdf-download-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            closeMenu();
            showToast("Downloading CSS Notes (PDF)...", "fa-file-pdf");
        });
    });

    renderPractices();
});
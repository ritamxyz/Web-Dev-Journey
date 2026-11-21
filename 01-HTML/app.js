/**
 * 01-HTML Repository Hub — Production Script
 * Implements catalog rendering for 29 HTML documents, search & category filtering,
 * fail-safe mobile menu dropdown with auto-reset, tree copying, and PDF toast notifications.
 */

const htmlDocuments = [
    // 00 — Course Practices (10)
    { id: "CP-01", title: "Introducing the Basics of HTML", category: "course-practices", categoryLabel: "00. Practices", description: "Headings, paragraphs, and bold tags introducing Iron Man, Captain America, and Hulk.", filePath: "./00-Course-Practices/practice-question-01.html" },
    { id: "CP-02", title: "Introducing Lists in HTML", category: "course-practices", categoryLabel: "00. Practices", description: "Unordered list of fruits with relative anchor links pointing to image attachments.", filePath: "./00-Course-Practices/practice-question-02.html" },
    { id: "CP-03", title: "HTML & HTML Semantics (Daku Mangal)", category: "course-practices", categoryLabel: "00. Practices", description: "Humorous character profile utilizing header, main, section, footer, lists, and images.", filePath: "./00-Course-Practices/practice-question-03.html" },
    { id: "CP-04", title: "Subscript and Superscript", category: "course-practices", categoryLabel: "00. Practices", description: "Mathematical Pythagoras theorem (sup) and chemical glucose formula (sub).", filePath: "./00-Course-Practices/practice-question-04.html" },
    { id: "CP-05", title: "Introducing HTML Entities", category: "course-practices", categoryLabel: "00. Practices", description: "Special character references including ampersand, cloud, and umbrella rain symbols.", filePath: "./00-Course-Practices/practice-question-05.html" },
    { id: "CP-06", title: "Food Menu Table", category: "course-practices", categoryLabel: "00. Practices", description: "Food menu table testing thead, tbody, tfoot, caption, rowspan, and colspan.", filePath: "./00-Course-Practices/practice-question-06.html" },
    { id: "CP-07", title: "Basic Form Controls", category: "course-practices", categoryLabel: "00. Practices", description: "Username and password inputs with submit and reset action buttons.", filePath: "./00-Course-Practices/practice-question-07.html" },
    { id: "CP-08", title: "Search Redirection Form", category: "course-practices", categoryLabel: "00. Practices", description: "Forms redirecting search queries directly to Google.com and YouTube.com in new tabs.", filePath: "./00-Course-Practices/practice-question-08.html" },
    { id: "CP-09", title: "Basic Registration Form", category: "course-practices", categoryLabel: "00. Practices", description: "First/last name inputs, gender dropdown menu, and terms-of-service checkbox.", filePath: "./00-Course-Practices/practice-question-09.html" },
    { id: "CP-10", title: "Feedback Form with Radio Rating", category: "course-practices", categoryLabel: "00. Practices", description: "Feedback form inside fieldset and legend with textarea and a 1-to-5 radio scale.", filePath: "./00-Course-Practices/practice-question-10.html" },

    // 01 — Basics of HTML (5)
    { id: "B-01", title: "Avengers: The Original Six Dossier", category: "basics", categoryLabel: "01. Basics", description: "Classified S.H.I.E.L.D. archive featuring table of contents, profiles, weapons, and conflicts.", filePath: "./01-Basics-of-HTML/01-Basic-Avengers-Webpage.html" },
    { id: "B-02", title: "Common Fruits & Health Benefits", category: "basics", categoryLabel: "01. Basics", description: "Nutritional guide covering apples, oranges, mangoes, and bananas with dietary intake tips.", filePath: "./01-Basics-of-HTML/02-List-of-Fruits.html" },
    { id: "B-03", title: "Basic Resume Portfolio", category: "basics", categoryLabel: "01. Basics", description: "Structured personal resume containing academic history, technical skills, and contacts.", filePath: "./01-Basics-of-HTML/03-Basic-Portfolio-Page.html" },
    { id: "B-04", title: "25 Basic Math & Log Formulas", category: "basics", categoryLabel: "01. Basics", description: "Compact mathematical reference sheet with 15 algebraic identities and 10 log laws.", filePath: "./01-Basics-of-HTML/04-Basic-Math-Formulas.html" },
    { id: "B-05", title: "Kolkata Weather Report Today", category: "basics", categoryLabel: "01. Basics", description: "Alipore meteorological observation report utilizing degree entities, UV index, and advisory.", filePath: "./01-Basics-of-HTML/05-About-Weather-Today.html" },

    // 02 — Tables in HTML (4)
    { id: "T-01", title: "Student Information Table", category: "tables", categoryLabel: "02. Tables", description: "Tabular student records with multi-level grouped headers for City and House addresses.", filePath: "./02-Table-in-HTML/01-Student-Information-Table.html" },
    { id: "T-02", title: "B.Tech 1st Semester Routine", category: "tables", categoryLabel: "02. Tables", description: "Class schedule routine for CSE Sec-C featuring recess breaks and laboratory groups.", filePath: "./02-Table-in-HTML/02-College-Timetable.html" },
    { id: "T-03", title: "E-Commerce Tax Invoice", category: "tables", categoryLabel: "02. Tables", description: "TechNova Retail invoice with line-item breakdowns, HSN codes, CGST/SGST, and totals.", filePath: "./02-Table-in-HTML/03-Invoice.html" },
    { id: "T-04", title: "JEE Main 2026 Official Scorecard", category: "tables", categoryLabel: "02. Tables", description: "Official NTA score card recreation with candidate credentials, percentile matrix, and CRL ranks.", filePath: "./02-Table-in-HTML/04-JEE-Score-Card.html" },

    // 03 — Forms in HTML (4)
    { id: "F-01", title: "Multi-Engine Search Portal", category: "forms", categoryLabel: "03. Forms", description: "Search hub supporting Google, YouTube, Quora, Wikipedia, GitHub, Stack Overflow, and MDN.", filePath: "./03-Forms-in-HTML/01-Search-Engine.html" },
    { id: "F-02", title: "College Admission Registration Form", category: "forms", categoryLabel: "03. Forms", description: "5-section admission portal for personal data, contact, course choices, and file uploads.", filePath: "./03-Forms-in-HTML/02-College-Admission-Form.html" },
    { id: "F-03", title: "Software Engineering Internship Form", category: "forms", categoryLabel: "03. Forms", description: "Detailed recruitment form for technical profiles, coding links, language checkboxes, and resumes.", filePath: "./03-Forms-in-HTML/03-Internship-Application-Form.html" },
    { id: "F-04", title: "Project Evaluation & Feedback Form", category: "forms", categoryLabel: "03. Forms", description: "Review form for assessing completed HTML exercises with quality ratings and suggestions.", filePath: "./03-Forms-in-HTML/04-Feedback-Form.html" },

    // 04 — Semantic HTML (3)
    { id: "S-01", title: "My Tech Blog", category: "semantic", categoryLabel: "04. Semantic", description: "Multi-article technology blog on learning coding, 5 beginner tips, and web development.", filePath: "./04-Semantic-HTML/01-Tech-Blog.html" },
    { id: "S-02", title: "Algorithms & Complexity Handbook", category: "semantic", categoryLabel: "04. Semantic", description: "CS knowledge base with asymptotic bounds, sorting complexity table, and binary search in C++.", filePath: "./04-Semantic-HTML/02-CS-Reference-Handbook.html" },
    { id: "S-03", title: "LearnHub Student Learning Dashboard", category: "semantic", categoryLabel: "04. Semantic", description: "Academic workspace showcasing progress bars, meters, assignment tables, and learning targets.", filePath: "./04-Semantic-HTML/03-Student-Learning-Dashboard.html" },

    // 05 — Final Mini-Projects (3)
    { id: "P-01", title: "MediCare Plus Healthcare Portal", category: "projects", categoryLabel: "05. Projects", description: "Hospital portal with department statistics, doctor availability tables, fees, and booking forms.", filePath: "./05-Final-Mini-Projects/01-MediCare-Plus.html" },
    { id: "P-02", title: "TechFest 2026 Event Website", category: "projects", categoryLabel: "05. Projects", description: "University tech festival site with speaker profiles, timetables, competition tracks, and video demos.", filePath: "./05-Final-Mini-Projects/02-TechFest.html" },
    { id: "P-03", title: "DevConnect 2026 Developer Conference", category: "projects", categoryLabel: "05. Projects", description: "Two-day conference portal with speaker rosters, chronological schedules, venue routes, and forms.", filePath: "./05-Final-Mini-Projects/03-DevConnect.html" }
];

document.addEventListener("DOMContentLoaded", () => {
    const documentsGrid = document.getElementById("documents-grid");
    const chips = document.querySelectorAll(".chip");
    const searchInput = document.getElementById("doc-search");
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

    function renderDocuments() {
        const filtered = htmlDocuments.filter((item) => {
            const matchesCategory = activeFilter === "all" || item.category === activeFilter;
            const query = searchQuery.toLowerCase().trim();
            const matchesQuery =
                !query ||
                item.id.toLowerCase().includes(query) ||
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.categoryLabel.toLowerCase().includes(query);

            return matchesCategory && matchesQuery;
        });

        if (resultsCount) {
            resultsCount.textContent = `Showing ${filtered.length} of ${htmlDocuments.length} documents`;
        }

        if (filtered.length === 0) {
            documentsGrid.innerHTML = `
                <div class="empty-results-box">
                    <p><i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem; margin-bottom: 0.5rem; display:block;"></i> No documents matched "<strong>${searchQuery}</strong>". Try another keyword or reset the category filter.</p>
                </div>
            `;
            return;
        }

        documentsGrid.innerHTML = filtered
            .map((item) => `
                <article class="practice-card-item">
                    <div class="practice-top-row">
                        <span class="q-label">${item.id}</span>
                        <span class="q-cat">${item.categoryLabel}</span>
                    </div>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <div class="practice-actions-row">
                        <a href="${item.filePath}" class="btn btn-sm btn-outline">
                            <i class="fa-brands fa-html5"></i> Open Webpage
                        </a>
                        <a href="${item.filePath}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost" title="Open in new browser tab">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> New Tab
                        </a>
                    </div>
                </article>
            `)
            .join("");
    }

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            chips.forEach((c) => c.classList.remove("active"));
            chip.classList.add("active");
            activeFilter = chip.dataset.filter;
            renderDocuments();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderDocuments();
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
            showToast("Downloading HTML Notes (PDF)...", "fa-file-pdf");
        });
    });

    renderDocuments();
});
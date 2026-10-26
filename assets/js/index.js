// ^ Write your JavaScript code here
// dark mode
var btnTheme = document.getElementById('theme-toggle-button');
var html = document.documentElement;

if(localStorage.getItem('theme') === 'dark'){
        html.classList.add('dark');
}else{
        html.classList.remove('dark');
}

btnTheme.addEventListener('click', function(){
    darkTheme()
});
function darkTheme(){
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light')
    }else{
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark')
    }
}


// scroll nav active

var navAnchors = document.querySelectorAll('.nav-links a');
var sections = document.querySelectorAll('section');


window.addEventListener('scroll', function(){
scrollActiveNavs();
});

function scrollActiveNavs(){
    var currentId = '';
    for(var i = 0; i < sections.length; i++){
    var currwentSection = sections[i];
        if(scrollY >= currwentSection.offsetTop){
            currentId = currwentSection.getAttribute('id');
        }
    }

    for(var i = 0; i < navAnchors.length; i++){
        if(navAnchors[i].getAttribute('href') === `#${currentId}`){
            navAnchors[i].classList.add('active')
        }else{
            navAnchors[i].classList.remove('active')
        }
    }
}

// slidedr card

var nextBtn = document.getElementById('next-testimonial');
var prevBtn = document.getElementById('prev-testimonial');
var cardContainer = document.getElementById('testimonials-carousel');
var indicators = document.querySelectorAll('.carousel-indicator');
var card = document.querySelector('.testimonial-card').offsetWidth;

var cardTotal = cardContainer.children.length;
// console.log(cardTotal);

var currentIndex = 0;
nextBtn.addEventListener('click', function(){
    currentIndex++;
    if (currentIndex === cardTotal -2) {
        currentIndex = 0;
    }
    autoSlide()
});

prevBtn.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = cardTotal - 3;
    }
    autoSlide()
});

function autoSlide(){
    cardContainer.style.transform = `translatex(${card*currentIndex}px)`;
    updateSlideIndicators();
}

function updateSlideIndicators(){
    for(var i = 0; i < indicators.length; i++){
        if(i === currentIndex){
            indicators[i].classList.remove('bg-slate-400', 'dark:bg-slate-600');
            indicators[i].classList.add('active', 'scale-125', 'bg-accent');
        }else{
            indicators[i].classList.remove('active', 'scale-125', 'bg-accent');
            indicators[i].classList.add('bg-slate-400', 'dark:bg-slate-600');
        }
    }



    for (var i = 0; i < indicators.length; i++){
        indicators[i].addEventListener('click', function(e){
            currentIndex = parseInt(e.currentTarget.getAttribute('data-index', 10));
            autoSlide();
        })
    }
}
autoSlide();



////////////////////////////////////////////////////////////
// navs and tabs
// elements, event,action
// data-category,data-filter

// elements  => tabs , items "cards", event => click, action => filteration depend on categroy
var filterBtns = document.querySelectorAll(".portfolio-filter");
var gridItems = document.querySelectorAll(".portfolio-item");
// change color
for (var i = 0; i < filterBtns.length; i++) {
  // console.log(filterBtns[i]);
    filterBtns[i].addEventListener("click", function (e) {
        // console.log(e.currentTarget.getAttribute('data-filter'));
        var filter = e.currentTarget.getAttribute("data-filter");
        for (var j = 0; j < filterBtns.length; j++) {
        // active button that is original
        filterBtns[j].classList.remove(
            "active",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50",
        );
        filterBtns[j].classList.add(
            "bg-white",
            "dark:bg-slate-800",
            "text-slate-600",
            "dark:text-slate-300",
            "border",
            "border-slate-300",
            "dark:border-slate-700",
        );
        // class="portfolio-filter px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active  text-white shadow-lg shadow-primary/50"
        //portfolio-filter px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700
        }
        e.currentTarget.classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
        );
        e.currentTarget.classList.add(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50",
        );
        
        for (let i = 0; i < gridItems.length; i++) {
        
        gridItems[i].style.transition = "opacity 0.3s, transform 0.3s;";
        gridItems[i].style.transform = "scale(0.8)";
        gridItems[i].style.opacity = "0";
        
            setTimeout(()=>{
                gridItems[i].style.display = "none";
            },400)

        var category = gridItems[i].getAttribute("data-category");
        if (filter == category || filter == "all") {
            
            setTimeout(() => {
            gridItems[i].style.display = "block";
            setTimeout(() => {
                gridItems[i].style.transition = "opacity 0.3s, transform 0.3s;";
                gridItems[i].style.transform = "scale(1)";
                gridItems[i].style.opacity = "1";
            }, 100);
            }, 400);
        }
        }
    });
    }

///


var scrollToTop = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTop.classList.remove("opacity-0", "invisible");
        scrollToTop.classList.add("opacity-100", "visible");
    } else {
        scrollToTop.classList.remove("opacity-100", "visible");
        scrollToTop.classList.add("opacity-0", "invisible");
    }
});

scrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




























/* ================================
    Settings Sidebar
    ال ai مساعدني
================================ */

(function () {
    "use strict";

    // Elements
    var settingsToggle = document.getElementById("settings-toggle");
    var settingsSidebar = document.getElementById("settings-sidebar");
    var closeSettings = document.getElementById("close-settings");
    var resetSettings = document.getElementById("reset-settings");
    var themeColorsGrid = document.getElementById("theme-colors-grid");

    var fontOptions = document.querySelectorAll(".font-option");
    var root = document.documentElement;

    // Default settings
    var defaultFont = "tajawal";

    var defaultColors = {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7"
    };

    // Available color palettes
    var colorPalettes = [
        {
        name: "Indigo",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7"
        },
        {
        name: "Blue",
        primary: "#2563eb",
        secondary: "#0ea5e9",
        accent: "#38bdf8"
        },
        {
        name: "Emerald",
        primary: "#059669",
        secondary: "#10b981",
        accent: "#34d399"
        },
        {
        name: "Rose",
        primary: "#e11d48",
        secondary: "#f43f5e",
        accent: "#fb7185"
        },
        {
        name: "Orange",
        primary: "#ea580c",
        secondary: "#f97316",
        accent: "#fb923c"
        },
        {
        name: "Violet",
        primary: "#7c3aed",
        secondary: "#8b5cf6",
        accent: "#c084fc"
        }
    ];

    // Open sidebar
    function openSidebar() {
        if (!settingsSidebar) return;

        settingsSidebar.classList.remove("translate-x-full");
        settingsSidebar.classList.add("translate-x-0");

        settingsSidebar.setAttribute("aria-hidden", "false");

        if (settingsToggle) {
        settingsToggle.setAttribute("aria-expanded", "true");
        }
    }

    // Close sidebar
    function closeSidebar() {
        if (!settingsSidebar) return;

        settingsSidebar.classList.remove("translate-x-0");
        settingsSidebar.classList.add("translate-x-full");

        settingsSidebar.setAttribute("aria-hidden", "true");

        if (settingsToggle) {
        settingsToggle.setAttribute("aria-expanded", "false");
        }
    }

    // Toggle sidebar
    if (settingsToggle && settingsSidebar) {
        settingsToggle.addEventListener("click", function () {
        var isOpen =
            !settingsSidebar.classList.contains("translate-x-full");

        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
        });
    }

    if (closeSettings) {
        closeSettings.addEventListener("click", closeSidebar);
    }

    // Close with Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
        closeSidebar();
        }
    });

    /* ================================
        Font Settings
    ================================ */

    function applyFont(fontName) {
        var allowedFonts = ["alexandria", "tajawal", "cairo"];

        if (allowedFonts.indexOf(fontName) === -1) {
        fontName = defaultFont;
        }

        document.body.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
        );

        document.body.classList.add("font-" + fontName);

        fontOptions.forEach(function (button) {
        var isSelected = button.dataset.font === fontName;

        button.setAttribute(
            "aria-checked",
            String(isSelected)
        );

        button.classList.toggle("active", isSelected);
        });

        try {
        localStorage.setItem("settings-font", fontName);
        } catch (error) {
        // Settings can still work without localStorage.
        }
    }

    fontOptions.forEach(function (button) {
        button.addEventListener("click", function () {
        applyFont(button.dataset.font);
        });
    });

    /* ================================
        Color Settings
    ================================ */

    function applyColors(colors) {
        root.style.setProperty("--color-primary", colors.primary);
        root.style.setProperty("--color-secondary", colors.secondary);
        root.style.setProperty("--color-accent", colors.accent);

        if (themeColorsGrid) {
        var colorButtons =
            themeColorsGrid.querySelectorAll("[data-color]");

        colorButtons.forEach(function (button) {
            var isSelected =
            button.dataset.color === colors.primary;

            button.setAttribute(
            "aria-pressed",
            String(isSelected)
            );

            button.style.outline = isSelected
            ? "3px solid " + colors.primary
            : "none";

            button.style.outlineOffset = isSelected ? "3px" : "0";
        });
        }

        try {
        localStorage.setItem(
            "settings-colors",
            JSON.stringify(colors)
        );
        } catch (error) {
        // Settings can still work without localStorage.
        }
    }

    // Create color buttons
    if (themeColorsGrid) {
        colorPalettes.forEach(function (palette) {
        var button = document.createElement("button");

        button.type = "button";
        button.dataset.color = palette.primary;
        button.title = palette.name;
        button.setAttribute(
            "aria-label",
            "Choose " + palette.name + " theme"
        );
        button.setAttribute("aria-pressed", "false");

        button.style.width = "36px";
        button.style.height = "36px";
        button.style.borderRadius = "50%";
        button.style.background =
            "linear-gradient(135deg, " +
            palette.primary +
            ", " +
            palette.accent +
            ")";
        button.style.border = "2px solid white";
        button.style.cursor = "pointer";
        button.style.margin = "5px";
        button.style.transition = "outline 0.2s ease";

        button.addEventListener("click", function () {
            applyColors(palette);
        });

        themeColorsGrid.appendChild(button);
        });
    }

    /* ================================
        Reset Settings
    ================================ */

    function resetAllSettings() {
        applyFont(defaultFont);
        applyColors(defaultColors);
    }

    if (resetSettings) {
        // resetSettings.addEventListener("click", function () {
        // resetAllSettings();
        // });
        document.getElementById('reset-settings').addEventListener('click', function () {
    resetAllSettings();
    closeSidebar();
});
    }

    /* ================================
        Load Saved Settings
    ================================ */

    var savedFont = defaultFont;
    var savedColors = defaultColors;

    try {
        savedFont =
        localStorage.getItem("settings-font") || defaultFont;

        var storedColors = localStorage.getItem("settings-colors");

        if (storedColors) {
        var parsedColors = JSON.parse(storedColors);

        var validColors = colorPalettes.find(function (palette) {
            return (
            palette.primary === parsedColors.primary &&
            palette.secondary === parsedColors.secondary &&
            palette.accent === parsedColors.accent
            );
        });

        if (validColors) {
            savedColors = validColors;
        }
        }
    } catch (error) {
        // Use default settings if saved settings are unavailable.
    }

    applyFont(savedFont);
    applyColors(savedColors);

    })();

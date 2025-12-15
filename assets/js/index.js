var mode = document.getElementById("theme-toggle-button");
mode.addEventListener("click", function (e) {
    document.documentElement.classList.toggle("dark");
});

var main = document.getElementById("main-content");
main.addEventListener("click", function (e) {
    sidebar.classList.add("translate-x-full");
    if (navToggler.classList.contains("translate-left-full")) 
        navToggler.classList.remove("translate-left-full");
});
var xMark = document.querySelector(".fa-xmark");
xMark.addEventListener("click", function (e) {
    sidebar.classList.add("translate-x-full");
    navToggler.classList.toggle("translate-left-full");
});
var navToggler = document.getElementById("settings-toggle");
var sidebar = document.getElementById("settings-sidebar");
navToggler.addEventListener("click", function (e) {
    sidebar.classList.toggle("translate-x-full");
    navToggler.classList.toggle("translate-left-full");
    
});


var fonts = document.querySelectorAll(".font-option");
for (var i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener("click", function (e) {
        font(e.currentTarget)
    });  
}
function font(element) {
        for (var j = 0; j < fonts.length; j++) {
            if (fonts[j].classList.contains("active")) {
                fonts[j].classList.remove(
                "active",
                "border-primary",
                "bg-slate-50",
                "dark:bg-slate-800"
            );
            fonts[j].classList.add(
                "border-slate-200",
                "dark:border-slate-700"
            );
            }
        }
        document.body.classList.remove("font-alexandria","font-tajawal","font-cairo")
        if (element.dataset.font === "alexandria") document.body.classList.add("font-alexandria")
        if (element.dataset.font === "tajawal") document.body.classList.add("font-tajawal")
        if (element.dataset.font === "cairo") document.body.classList.add("font-cairo")
        
        
        element.classList.add(
            "active",
            "border-primary",
            "bg-slate-50",
            "dark:bg-slate-800"
        );
        element.classList.remove(
            "border-slate-200",
            "dark:border-slate-700"
        );        
}


var colorButtons = document.querySelectorAll(".color-option");
for (var i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener("click", function (e) {
            color(e.currentTarget)
    });
    }

function color(element) {
        
        for (let j = 0; j < colorButtons.length; j++) {
            colorButtons[j].classList.remove(
                "ring-2",
                "ring-primary",
                "ring-offset-2",
                "ring-offset-white",
                "dark:ring-offset-slate-900"
            )
        }
        
        document.documentElement.style = 
        `--color-primary: ${element.dataset.primary};
        --color-secondary: ${element.dataset.secondary};
        --color-accent: ${element.dataset.accent};`
        
        element.classList.add(
            "ring-2",
            "ring-primary",
            "ring-offset-2",
            "ring-offset-white",
            "dark:ring-offset-slate-900"
        )
}


var resetSettings = document.getElementById("reset-settings")
resetSettings.addEventListener("click",function(e) {
    font(fonts[1])
    color(colorButtons[0])
    sidebar.classList.add("translate-x-full");
    navToggler.classList.toggle("translate-left-full");

})

var navLinks = document.querySelectorAll(".navLink");
window.addEventListener("scroll", function(e) {
    if (window.scrollY < 670) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
        navLinks[0].classList.add("active")
    }
    else if (window.scrollY >= 670 && window.scrollY < 1750) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
        navLinks[1].classList.add("active")
    }
    else if (window.scrollY >= 1750 && window.scrollY < 2700) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
    }
    else if (window.scrollY >= 2700 && window.scrollY < 4850) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
        navLinks[2].classList.add("active")
    }
    else if (window.scrollY >= 4850 && window.scrollY < 6850) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
        navLinks[3].classList.add("active")
    }
    else if (window.scrollY >= 6850 && window.scrollY < 7900) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
        navLinks[4].classList.add("active")
    }
    else if (window.scrollY >= 7900 && window.scrollY < 8290) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
        
    }
    else if (window.scrollY >= 8290) {
        for (var i = 0; i < navLinks.length; i++) navLinks[i].classList.remove("active")
            navLinks[5].classList.add("active")
    }
    

    if (window.scrollY > 300)
        document.getElementById("scroll-to-top").classList.remove("invisible","opacity-0")
    else
        document.getElementById("scroll-to-top").classList.add("invisible","opacity-0")
    
});


window.document.getElementById("scroll-to-top").addEventListener("click", function(e) {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


var portfolioButtons = document.querySelectorAll(".portfolio-filter")
var portfolioItem = document.querySelectorAll(".portfolio-item")
for (let i = 0; i < portfolioButtons.length; i++) {
    portfolioButtons[i].addEventListener("click",function(e) {
        for (let j = 0; j < portfolioButtons.length; j++) {
            if (portfolioButtons[j].classList.contains("active")) {
                portfolioButtons[j].classList.add(
                "hover:bg-slate-100",
                 "dark:hover:bg-slate-700",
                 "border","border-slate-300",
                 "dark:border-slate-700",
                 "bg-white",
                 "dark:bg-slate-800",
                 "text-slate-600",
                 "dark:text-slate-300")
                portfolioButtons[j].classList.remove(
                "active",
                 "hover:shadow-lg",
                 "hover:shadow-primary/50",
                 "bg-linear-to-r",
                 "from-primary",
                 "to-secondary",
                 "text-white")
            }
            
                                                
        }
        portfolioButtons[i].classList.remove(
                "hover:bg-slate-100",
                 "dark:hover:bg-slate-700",
                 "border","border-slate-300",
                 "dark:border-slate-700",
                 "bg-white",
                 "dark:bg-slate-800",
                 "text-slate-600",
                 "dark:text-slate-300")
        portfolioButtons[i].classList.add(
                "active",
                 "hover:shadow-lg",
                 "hover:shadow-primary/50",
                 "bg-linear-to-r",
                 "from-primary",
                 "to-secondary",
                 "text-white")
        
        
        if (portfolioButtons[i].dataset.filter === "all") {
            for (let j = 0; j < portfolioItem.length; j++) {
                portfolioItem[j].style.transition = "opacity 0.3s, transform 0.3s";
                portfolioItem[j].style.opacity = "0";
                portfolioItem[j].style.transform = "scale(0.8)";
                setTimeout(() => {
                    portfolioItem[j].style.display = "none";
                }, 300);
                
                setTimeout(() => {
                    portfolioItem[j].style.display = "block";
                    portfolioItem[j].offsetHeight;
                    portfolioItem[j].style.opacity = "1";
                    portfolioItem[j].style.transform = "scale(1)";
                }, 300);
            }
        }
        else if (portfolioButtons[i].dataset.filter === "web") {

    for (let j = 0; j < portfolioItem.length; j++) {

        portfolioItem[j].style.transition = "opacity 0.3s, transform 0.3s";
        portfolioItem[j].style.opacity = "0";
        portfolioItem[j].style.transform = "scale(0.8)";

        setTimeout(() => {
            portfolioItem[j].style.display = "none";
        }, 300);

        if (portfolioItem[j].dataset.category === "web") {

            setTimeout(() => {
                portfolioItem[j].style.display = "block";
                portfolioItem[j].offsetHeight;
                portfolioItem[j].style.opacity = "1";
                portfolioItem[j].style.transform = "scale(1)";
            }, 300);
        }
    }
        }
        else if (portfolioButtons[i].dataset.filter === "app") {

    for (let j = 0; j < portfolioItem.length; j++) {

        portfolioItem[j].style.transition = "opacity 0.3s, transform 0.3s";
        portfolioItem[j].style.opacity = "0";
        portfolioItem[j].style.transform = "scale(0.8)";

        setTimeout(() => {
            portfolioItem[j].style.display = "none";
        }, 300);

        if (portfolioItem[j].dataset.category === "app") {

            setTimeout(() => {
                portfolioItem[j].style.display = "block";
                portfolioItem[j].offsetHeight;
                portfolioItem[j].style.opacity = "1";
                portfolioItem[j].style.transform = "scale(1)";
            }, 300);
        }
    }
        }
        else if (portfolioButtons[i].dataset.filter === "design") {

    for (let j = 0; j < portfolioItem.length; j++) {

        portfolioItem[j].style.transition = "opacity 0.3s, transform 0.3s";
        portfolioItem[j].style.opacity = "0";
        portfolioItem[j].style.transform = "scale(0.8)";

        setTimeout(() => {
            portfolioItem[j].style.display = "none";
        }, 300);

        if (portfolioItem[j].dataset.category === "design") {

            setTimeout(() => {
                portfolioItem[j].style.display = "block";
                portfolioItem[j].offsetHeight;
                portfolioItem[j].style.opacity = "1";
                portfolioItem[j].style.transform = "scale(1)";
            }, 300);
        }
    }
        }
        else if (portfolioButtons[i].dataset.filter === "ecommerce") {

    for (let j = 0; j < portfolioItem.length; j++) {
        portfolioItem[j].style.transition = "opacity 0.3s, transform 0.3s";
        portfolioItem[j].style.opacity = "0";
        portfolioItem[j].style.transform = "scale(0.8)";
        setTimeout(() => {
            portfolioItem[j].style.display = "none";
        }, 300);

        if (portfolioItem[j].dataset.category === "ecommerce") {

            setTimeout(() => {
                portfolioItem[j].style.display = "block";
                portfolioItem[j].offsetHeight;
                portfolioItem[j].style.opacity = "1";
                portfolioItem[j].style.transform = "scale(1)";
            }, 300);
        }
    }
        }


        
    })
}

var testimonials = document.getElementById("testimonials-carousel");
var testimonialsAll = document.querySelectorAll(".testimonial-card");
var prev = document.getElementById("prev-testimonial")
var next = document.getElementById("next-testimonial")
var indicator = document.querySelectorAll(".carousel-indicator")
var current = 0;
prev.addEventListener("click",function(e) {
    move(-2)
})
next.addEventListener("click",function(e) {
    move(2)
})

function move(step){
    current += step;
    if (current < 0) current = testimonialsAll.length
    if (current > testimonialsAll.length) current = 0
       
    var value = (current/testimonialsAll.length)*100
    testimonials.style.transform = `translateX(${value}%)`

    for (let i = 0; i < indicator.length; i++) {
        if (indicator[i].classList.contains("active")) {
            indicator[i].classList.add("bg-slate-400", "dark:bg-slate-600")
            indicator[i].classList.remove("active", "bg-accent", "scale-125")
        }
    }
    indicator[current/2].classList.remove("bg-slate-400", "dark:bg-slate-600")
    indicator[current/2].classList.add("active", "bg-accent", "scale-125")
}

for (let i = 0; i < indicator.length; i++) {
    indicator[i].addEventListener("click",function(e) {
        current = indicator[i].dataset.index*2
        move(0)
    })
    
}

var customOptions = document.querySelectorAll(".custom-options");
var customSelect = document.querySelectorAll(".custom-select-wrapper")
var arrow = document.querySelectorAll(".fa-chevron-down")
for (let i = 0; i < customOptions.length; i++) {
    customSelect[i].addEventListener("click",function(e) {
        customOptions[i].classList.toggle("hidden")
        arrow[i].classList.toggle("fa-rotate-180")
    })   
}
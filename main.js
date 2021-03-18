
//sidenav
var sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

//slider
var slider = document.querySelector(".slider");
M.Slider.init(slider,{
    indicators: false,
    height: 500,
    transition:500,
    interval:6000,
});

//autocomlete
var autoComplete = document.querySelector(".autocomplete");
M.Autocomplete.init(autoComplete,{
    data:{
        "Accra": null,
        "Achimota": null,
        "Abeka": null,
        "Lapaz": null,
        "Kasoa": null,
        "Tema": null,
        "Ashaiman": null,
        "East Legon": null,
        "Madina": null,

    }
});


//materialboxed
var mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

//scrollspy
var scrollsPy = document.querySelectorAll(".scrollspy");
M.scrollsy.init(scrollsPy, {});


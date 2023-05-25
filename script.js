var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");

    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ---------------sidemenu------

var sidemenu = document.getElementById("sidemenu");

function openMenu() {
    sidemenu.style.right = "0";

}

function closeMenu() {
    sidemenu.style.right = "-200px";

}

// ----------------send data to googlr sheets---------------


const scriptURL = 'https://script.google.com/macros/s/AKfycbwym1xT4Ik5_GaZsCm8uoX0_ywMFbc_dNGeZ_caGK5e_SVQEKHtSafDldLxVc_dhAgL/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Messege Sent Successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

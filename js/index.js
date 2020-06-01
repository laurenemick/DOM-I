const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//TASK 1
//images
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//TASK 2
//nav text
const navItem1 = document.querySelector('nav:nth-of-type(1) a')
navItem1.textContent = siteContent["nav"]["nav-item-1"]

const theNav = document.querySelector('nav')
const childrenOfNav = theNav.children

const navItem2 = childrenOfNav[1]
navItem2.textContent = siteContent["nav"]["nav-item-2"]

const navItem3 = childrenOfNav[2]
navItem3.textContent = siteContent["nav"]["nav-item-3"]

const navItem4 = childrenOfNav[3]
navItem4.textContent = siteContent["nav"]["nav-item-4"]

const navItem5 = childrenOfNav[4]
navItem5.textContent = siteContent["nav"]["nav-item-5"]

const navItem6 = childrenOfNav[5]
navItem6.textContent = siteContent["nav"]["nav-item-6"]

//cta text
const ctaText = document.querySelector('h1')
ctaText.textContent = siteContent["cta"]["h1"]

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent["cta"]["button"]

//h4's
const allH4s = document.querySelectorAll('h4')
const allH4sToArray = Array.from(allH4s)

allH4sToArray[0].textContent = siteContent["main-content"]["features-h4"]
allH4sToArray[1].textContent = siteContent["main-content"]["about-h4"]
allH4sToArray[2].textContent = siteContent["main-content"]["services-h4"]
allH4sToArray[3].textContent = siteContent["main-content"]["product-h4"]
allH4sToArray[4].textContent = siteContent["main-content"]["vision-h4"]

allH4sToArray[5].textContent = siteContent["contact"]["contact-h4"]

//p's
const allPs = document.querySelectorAll('p')
const allPsToArray = Array.from(allPs)

allPsToArray[0].textContent = siteContent["main-content"]["features-content"]
allPsToArray[1].textContent = siteContent["main-content"]["about-content"]
allPsToArray[2].textContent = siteContent["main-content"]["services-content"]
allPsToArray[3].textContent = siteContent["main-content"]["product-content"]
allPsToArray[4].textContent = siteContent["main-content"]["vision-content"]

allPsToArray[5].textContent = siteContent["contact"]["address"]
allPsToArray[6].textContent = siteContent["contact"]["phone"]
allPsToArray[7].textContent = siteContent["contact"]["email"]

allPsToArray[8].textContent = siteContent["footer"]["copyright"]

//TASK 3
//nav color to green
for (let i = 0; i < childrenOfNav.length; i++) {
childrenOfNav[i].style.color = 'green'
}
//.appendChild() 
const newLinkProps = {
  href: '#',
  textContent: 'Sign In',
  class: 'nav-item-7'
}

const newLink = document.createElement('a')

newLink.href = newLinkProps.href
newLink.textContent = newLinkProps.textContent
newLink.style.color = 'green'
theNav.appendChild(newLink)
//.prepend()
const newLinkProps2 = {
  href: '#',
  textContent: 'Home',
  className: 'nav-item-8'
}

const newLink2 = document.createElement('a')

newLink2.href = newLinkProps2.href
newLink2.textContent = newLinkProps2.textContent
newLink2.style.color = 'green'
theNav.prepend(newLink2)

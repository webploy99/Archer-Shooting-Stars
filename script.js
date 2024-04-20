
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/archer-shooting-stars/id6474421383";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/d0/54/5c/d0545c72-a034-149a-4784-75713693a83d/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/64/f2/50/64f25043-7799-5a63-46b0-0e91fc2ac06c/16d80ebd-3bf9-4fdb-bd71-4986af424454_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/aa/dd/7d/aadd7d23-5f37-5550-bcb6-f480540cef3e/f6d11b5d-d33e-4818-a0f5-db78539f1408_3.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/e8/b7/15/e8b71540-3858-89a5-4ea7-da3693cdf914/df386b4e-5b31-400b-9091-8827ed022ae8_2.png/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulElm = document.querySelector("ul.gallery");
// ulElm.style.width = '150px'
ulElm.style.display = "flex";
ulElm.style.listStyle = "none";
ulElm.style.padding = "0";
ulElm.style.margin = "0 10%";
// ulElm.style.width = '150'
// ulElm.style.heigth = 'auto'
// ulElm.style.gap = "10";


const galleryItems = images.map((image) => {

  return `<li><img width="150" src="${image.url}" atl="${image.alt}"></img></li>`;
});

ulElm.insertAdjacentHTML("afterbegin", galleryItems);

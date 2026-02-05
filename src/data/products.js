// src/data/products.js
import productImg from "../assets/img/products/hikvision.webp";

export const productsData = [
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
    sku: "CLS100290968",
    price: "169.99 €",
    oldPrice: "3.099",
    type: "normal",
    phone: null,
    description:
      "Entdecken Sie die Spitzentechnologie der Uniview IPC2128LE-ADF28KM-G-NB 8MP 2.8mm EasyStar IP Bullet Überwachungskamera, eine ideale Lösung für Ihre Videoüberwachung.",
    images: [
      productImg,
      productImg,
      productImg,
      productImg,
    ],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION DS-2CD2143G2-IU(2.8mm) 4MP IP Kamera",
    sku: "CLS100290969",
    price: "189.99 €",
    oldPrice: "3.199",
    type: "normal",
    phone: null,
    description:
      "High performance Hikvision 4MP camera with smart detection and strong night vision.",
    images: [productImg, productImg, productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION DS-2CD2347G2H-LIU(2.8mm) ColorVu Kamera",
    sku: "CLS100291010",
    price: "229.99 €",
    oldPrice: "3.499",
    type: "normal",
    phone: null,
    description:
      "ColorVu technology delivers colorful images even in low light conditions.",
    images: [productImg, productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION 8-Kanal NVR Rekorder (Preis auf Anfrage)",
    sku: "CLS100291011",
    price: null,
    oldPrice: null,
    type: "call",
    phone: "0621 7163591",
    description:
      "8-channel NVR recorder. Contact us for price and availability.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION DS-2CD2043G2-IU (2.8mm) Bullet Kamera",
    sku: "CLS100291012",
    price: "159.99 €",
    oldPrice: "2.999",
    type: "normal",
    phone: null,
    description:
      "Bullet camera with high-quality imaging and durable outdoor design.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION DS-2CD2T43G2-4I (2.8mm) IP Bullet Kamera",
    sku: "CLS100291013",
    price: "199.99 €",
    oldPrice: "3.299",
    type: "normal",
    phone: null,
    description:
      "Smart IP Bullet camera, best for perimeter protection and outdoor use.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION DS-2CD2387G2H-LIU (2.8mm) 8MP ColorVu",
    sku: "CLS100291014",
    price: "279.99 €",
    oldPrice: "3.799",
    type: "normal",
    phone: null,
    description:
      "8MP ColorVu camera with ultra sharp quality and smart motion detection.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION PoE Switch 8 Port (Preis auf Anfrage)",
    sku: "CLS100291015",
    price: null,
    oldPrice: null,
    type: "call",
    phone: "0621 7163591",
    description:
      "8 Port PoE Switch. Contact for price and technical details.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION 4-Kanal NVR Rekorder",
    sku: "CLS100291016",
    price: "149.99 €",
    oldPrice: "2.599",
    type: "normal",
    phone: null,
    description:
      "4-channel NVR recorder, suitable for small CCTV installations.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION 2MP Turret Kamera (2.8mm)",
    sku: "CLS100291017",
    price: "119.99 €",
    oldPrice: "1.999",
    type: "normal",
    phone: null,
    description:
      "2MP turret camera with reliable performance and compact design.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION IP Kamera Zubehör Kit (Preis auf Anfrage)",
    sku: "CLS100291018",
    price: null,
    oldPrice: null,
    type: "call",
    phone: "0621 7163591",
    description:
      "Accessory kit for Hikvision IP cameras. Contact for price.",
    images: [productImg],
  },
  {
    brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
    image: productImg,
    title: "HIKVISION 8MP Bullet Kamera (2.8mm)",
    sku: "CLS100291019",
    price: "259.99 €",
    oldPrice: "3.699",
    type: "normal",
    phone: null,
    description:
      "8MP bullet camera with high resolution and strong night performance.",
    images: [productImg],
  },
];

// helper function (optional)
export const getProductBySku = (sku) =>
  productsData.find((p) => p.sku === sku);

export const products = productsData;


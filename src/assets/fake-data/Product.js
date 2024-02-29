// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3 (1).jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

import korean01_image_01 from "../images/korean01.jpg";
import korean02_image_02 from "../images/korean02.jpg";
import korean03_image_03 from "../images/korean03.jpg";
import korean04_image_04 from "../images/korean04.jpg";

import italian01_image_01 from "../images/italian01.jpg";
import italian02_image_02 from "../images/italian02.jpg";
import italian03_image_03 from "../images/italian03.jpg";
import italian04_image_04 from "../images/italian04.jpg";






const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: " A juicy grilled chicken patty served in a soft bun, layered with fresh lettuce, ripe tomato slices, and tangy mayonnaise, creating a perfect blend of flavors and textures ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: " A crispy thin crust topped with rich tomato sauce, melted mozzarella cheese, and an assortment of fresh vegetables such as bell peppers, onions, mushrooms, and olives, offering a burst of vibrant flavors with every bite.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "A classic pizza featuring a double layer of gooey melted mozzarella cheese over a bed of tangy tomato sauce, garnished with fragrant basil leaves, delivering a decadent and satisfying cheesy experience",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: " A zesty pizza creation inspired by Mexican cuisine, adorned with spicy salsa verde, savory seasoned ground beef or chicken, jalapeños, onions, and a generous sprinkling of cheddar cheese, providing a fiery flavor explosion.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "A timeless favorite featuring a succulent beef patty nestled between two soft burger buns, smothered with creamy melted cheese, crisp lettuce, ripe tomato slices, and tangy pickles, delivering a classic taste of comfort.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "A deluxe version of the classic cheeseburger, boasting multiple layers of premium beef patties, rich cheese slices, crispy bacon strips, fresh lettuce, tomatoes, onions, and a drizzle of special sauce, fit for royalty.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "A delightful pizza variant showcasing an oceanic medley of succulent seafood such as shrimp, squid, mussels, and clams, generously scattered atop a tangy tomato base and melted cheese, offering a taste of the sea in every bite.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "A minimalist approach to pizza perfection, featuring a thin and crispy crust topped with a generous layer of melted mozzarella cheese, allowing the simplicity of the ingredients to shine through with each cheesy bite.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "A savory pizza creation highlighting the earthy flavors of fresh mushrooms, sliced thinly and paired with tangy tomato sauce, melted cheese, and a sprinkle of aromatic herbs, creating a satisfyingly simple yet flavorful experience.",
  },

  {
    id: "10",
    title: "Classic Burger",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "A quintessential American burger featuring a juicy beef patty grilled to perfection, nestled within a soft sesame seed bun, adorned with crisp lettuce, ripe tomato slices, onions, pickles, and a dollop of savory sauce, capturing the essence of traditional burger goodness",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: " A rustic loaf of bread boasting a golden-brown crust and a soft, airy interior, offering a satisfying crunch with every bite, perfect for pairing with soups, salads, or enjoying on its own.",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: " An artisanal loaf bursting with flavor, baked to golden perfection and infused with a medley of herbs, seeds, and spices, providing a delightful taste sensation that satisfies the senses. ",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "A classic loaf of bread characterized by its soft and tender texture, ideal for slicing into thick, fluffy slices perfect for sandwiches, toast, or enjoying with your favorite spreads.",
  },
  {
    id: "14",
    title: "Tteokbokki",
    price: 50.0,
    image01: korean01_image_01,
    image02: korean02_image_02,
    image03: korean03_image_03,
    image04: korean04_image_04,
    category: "Korean Food",

    desc: "A beloved Korean street food delicacy featuring chewy rice cakes smothered in a spicy and sweet gochujang sauce, garnished with sliced scallions and sesame seeds, offering a delightful balance of flavors and textures.",
  },
  {
    id: "15",
    title: "Ramen au poulet",
    price: 60.0,
    image02: korean01_image_01,
    image01: korean02_image_02,
    image03: korean03_image_03,
    image04: korean04_image_04,
    category: "Korean Food",

    desc: "A beloved Korean street food delicacy featuring chewy rice cakes smothered in a spicy and sweet gochujang sauce, garnished with sliced scallions and sesame seeds, offering a delightful balance of flavors and textures. ",
  },
  {
    id: "16",
    title: "Chicken katsu Mac salad",
    price: 70.0,
    image03: korean01_image_01,
    image02: korean02_image_02,
    image01: korean03_image_03,
    image04: korean04_image_04,
    category: "Korean Food",

    desc: " A fusion dish combining Japanese chicken katsu with creamy macaroni salad, featuring crispy breaded chicken cutlets served alongside a creamy macaroni salad enriched with mayonnaise, carrots, and onions, offering a delightful contrast of textures and flavors.",
  },
  {
    id: "17",
    title: "Ramen topped Pork katsu",
    price: 75.0,
    image04: korean01_image_01,
    image02: korean02_image_02,
    image03: korean03_image_03,
    image01: korean04_image_04,
    category: "Korean Food",

    desc: " A tantalizing twist on traditional ramen, featuring a hearty bowl of noodles bathed in a rich broth, topped with crispy pork katsu cutlets, soft-boiled eggs, crisp vegetables, and fragrant green onions, creating a harmonious blend of flavors and textures.",
  },
  {
    id: "18",
    title: "Rigatoni alla carbonara pasta",
    price: 55.0,
    image01: italian01_image_01,
    image02: italian02_image_02,
    image03: italian03_image_03,
    image04: italian04_image_04,
    category: "Italian Food",

    desc: "A classic Italian pasta dish showcasing rigatoni noodles coated in a creamy sauce made from eggs, cheese, pancetta or bacon, and black pepper, resulting in a rich and indulgent flavor profile that's both comforting and satisfying.    ",
  },
  {
    id: "19",
    title: "Lasagnes",
    price: 55.0,
    image02: italian01_image_01,
    image01: italian02_image_02,
    image03: italian03_image_03,
    image04: italian04_image_04,
    category: "Italian Food",

    desc: " Layers of wide pasta noodles alternated with rich meat sauce, creamy béchamel, and melted cheese, baked to golden perfection, creating a hearty and flavorful Italian dish that's a favorite comfort food around the world.",
  },
  {
    id: "20",
    title: "Tagliatelle alragu pasta",
    price: 55.0,
    image03: italian01_image_01,
    image02: italian02_image_02,
    image01: italian03_image_03,
    image04: italian04_image_04,
    category: "Italian Food",

    desc: " Ribbon-like tagliatelle pasta tossed in a savory meat ragu sauce made from slow-cooked tomatoes, ground beef or pork, aromatic herbs, and red wine, resulting in a deeply satisfying pasta dish that's both rustic and refined.",
  },
  {
    id: "21",
    title: "Linguini allo scoglio",
    price: 55.0,
    image04: italian01_image_01,
    image02: italian02_image_02,
    image03: italian03_image_03,
    image01: italian04_image_04,
    category: "Italian Food",

    desc: "A sumptuous seafood pasta dish featuring linguine noodles tossed in a flavorful tomato-based sauce with an assortment of fresh seafood such as clams,",
  },
];

export default products;
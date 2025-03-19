export interface SellItemsType {
  product: string;
  productRatingStar:string;
  productTitle: string;
  productRating: number;
  productPrice: number;
  discount?: number;
  price?: number;
  productDescription: string;
}

export interface HappyCustomers{
  customerName:string;
  description:string
}

export const HEADER_LIST = [
  {
    title: "Shop",
    link: "#shop",
    submenu: [
      { title: "item 1", link: "#item 1" },
      { title: "item 2", link: "#item 2" },
      { title: "item 3", link: "#item 3" },
    ],
  },
  {
    title: "On Sale",
    link: "#on-sale",
  },
  {
    title: "New Arrivals",
    link: "#new-arrivals",
  },
  {
    title: "Brands",
    link: "#brands",
  },
];

export const BRANDS_LIST = [
    "/assets/images/versace.webp",
    "/assets/images/zara.webp",
    "/assets/images/gucci.webp",
    "/assets/images/prada.webp",
    "/assets/images/calvin-klein.webp"
]

export const FOOTER_LIST = [
    {
      title: "Company",
      list: [
        { title: "About", link: "/about" },
        { title: "Features", link: "/features" },
        { title: "Works", link: "/works" },
        { title: "Career", link: "/career" },
      ],
    },
    {
      title: "Help",
      list: [
        { title: "Customer Support", link: "/customer-support" },
        { title: "Delivery-details", link: "/delivery-details" },
        { title: "Terms & Conditions", link: "/terms-conditions" },
        { title: "Privacy Policy", link: "/privacy-policy" },
      ],
    },
    {
      title: "FAQ",
      list: [
        { title: "Account", link: "/about" },
        { title: "Manage Deliveries", link: "/manage-deliveries" },
        { title: "Orders", link: "/orders" },
        { title: "Payments", link: "/payments" },
      ],
    },
    {
      title: "Resources",
      list: [
        { title: "Free eBooks", link: "/free-ebooks" },
        { title: "Development Tutorial", link: "/development-tutorial" },
        { title: "How to - Blog", link: "/how-to-blog" },
        { title: "Youtube Playlist", link: "/youtube-playlist" },
      ],
    },
  ];

  export const PAYMENTS_COMPANY_LIST = [
    {
      image: "/assets/images/visa.webp",
    },
    {
      image: "/assets/images/master-card.webp",
    },
    {
      image: "/assets/images/pay-pal.webp",
    },
    {
      image: "/assets/images/apple-pay.webp",
    },
    {
      image: "/assets/images/g-pay.webp",
    },
  ];

  export const NEW_ARRIVALS_LIST: SellItemsType[] = [
    {
      product: "/assets/images/t-shirt-with-tape-details.webp",
      productRatingStar:"/assets/images/four-half-star.webp",
      productTitle: "T-SHIRT WITH TAPE DETAILS",
      productRating: 4.5,
      productPrice: 120,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/skinny-fit-jeans.webp",
      productRatingStar:"/assets/images/three-half-star.webp",
      productTitle: "SKINNY FIT JEANS",
      productRating: 4.5,
      productPrice: 240,
      discount: -20,
      price: 260,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/checkered-shirt.webp",
      productRatingStar:"/assets/images/four-half-star.webp",
      productTitle: "CHECKERED SHIRT",
      productRating: 4.5,
      productPrice: 180,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/sleeve-striped-t-shirt.webp",
      productRatingStar:"/assets/images/four-half-star.webp",
      productTitle: "SLEEVE STRIPED T-SHIRT",
      productRating: 4.5,
      productPrice: 130,
      discount: -30,
      price: 160,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
  ];
  export const TOP_SELLING_LIST: SellItemsType[] = [
    {
      product: "/assets/images/vertical-striped-shirt.webp",
      productRatingStar:"/assets/images/five-stars.webp",
      productTitle: "VERTICAL STRIPED SHIRT",
      productRating: 5.0,
      productPrice: 212,
      discount: -20,
      price: 232,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/courage-graphic-t-shirt.webp",
      productRatingStar:"/assets/images/four-star.webp",
      productTitle: "COURAGE GRAPHIC T-SHIRT",
      productRating: 4.0,
      productPrice: 145,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/loose-fit-bermuda-shorts.webp",
      productRatingStar:"/assets/images/three-star.webp",
      productTitle: "LOOSE FIT BERMUDA SHORTS",
      productRating: 3.0,
      productPrice: 80,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/faded-skinny-jeans.webp",
      productRatingStar:"/assets/images/four-half-star.webp",
      productTitle: "FADED SKINNY JEANS",
      productRating: 4.5,
      productPrice: 210,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
  ];

  export const ALSO_LIKE_LIST: SellItemsType[] = [
    {
      product: "/assets/images/polo-with-contrast-trims.webp",
      productRatingStar:"/assets/images/four-star.webp",
      productTitle: "Polo with Contrast Trims",
      productRating: 4.0,
      productPrice: 212,
      discount: -20,
      price: 232,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/gradient-graphic-t-shirt.webp",
      productRatingStar:"/assets/images/three-half-star.webp",
      productTitle: "Gradient Graphic T-shirt",
      productRating: 3.5,
      productPrice: 145,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/polo-with-tipping-details.webp",
      productRatingStar:"/assets/images/four-half-star.webp",
      productTitle: "Polo with Tipping Details",
      productRating: 4.5,
      productPrice: 80,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
      product: "/assets/images/black-striped-t-shirt.webp",
      productRatingStar:"/assets/images/five-stars.webp",
      productTitle: "Black Striped T-shirt",
      productRating: 5.0,
      discount: -30,
      productPrice: 210,
      productDescription:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
  ];

  export const OUR_HAPPY_CUSTOMERS: HappyCustomers[] = [
    {
      customerName:"Sarah M.",
      description:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
    },
    {
      customerName:"Alex K.",
      description:"“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"
    },
    {
      customerName:"James L.",
      description:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
    },
    {
      customerName:"Mooen",
      description:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
    },
    {
      customerName:"Sarah M.",
      description:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
    },
    {
      customerName:"Alex K.",
      description:"“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"
    },
    {
      customerName:"James L.",
      description:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
    },
    {
      customerName:"Mooen",
      description:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
    },
    {
      customerName:"Sarah M.",
      description:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
    },
  ]

  export const TAB_LIST = ["Product Details", "Rating & Reviews", "FAQs"];

export const REVIEWS_LIST = [
  {
    reviewsStart: "/assets/images/four-half-star.webp",
    userName: "Samantha D.",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    postDate: "Posted on August 14, 2023",
  },
  {
    reviewsStart: "/assets/images/four-star.webp",
    userName: "Alex M.",
    description:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    postDate: "Posted on August 15, 2023",
  },
  {
    reviewsStart: "/assets/images/three-half-star.webp",
    userName: "Ethan R.",
    description:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    postDate: "Posted on August 16, 2023",
  },
  {
    reviewsStart: "/assets/images/four-star.webp",
    userName: "Olivia P.",
    description:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    postDate: "Posted on August 17, 2023",
  },
  {
    reviewsStart: "/assets/images/four-star.webp",
    userName: "Liam K.",
    description:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    postDate: "Posted on August 18, 2023",
  },
  {
    reviewsStart: "/assets/images/four-half-star.webp",
    userName: "Ava H.",
    description:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    postDate: "Posted on August 19, 2023",
  },
];

export const SELECT_COLOR = ["brown", "green", "blue"];

export const SELECT_SIZE = ["Small", "Medium", "Large", "X-Large"];
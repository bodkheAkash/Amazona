const data = {
  headerMenus: [
    {
      name: "Today's Deal",
      href: "/search?tag=todays-deal",
    },
    {
      name: "New",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Featured Products",
      href: "/search?tag=featured",
    },
    {
      name: "Best Sellers",
      href: "/search?tag=best-seller",
    },
    {
      name: "Browsing History",
      href: "/#browsing-history",
    },
    {
      name: "Customer Service",
      href: "/page/customer-service",
    },
    {
      name: "About Us",
      href: "/page/about-us",
    },
    {
      name: "Help",
      href: "/page/help",
    },
  ],
  carousels: [
    {
        tittle:'Most Popular Shoes For Sale',
        buttonCaption:'Shop Now',
        image:'/images/banner3.jpg',
        url:'/search?category=Shoes',
        isPublished:true
    },
    {
        tittle:'Best Sellers in T-Shirts',
        buttonCaption:'Shop Now',
        image:'/images/banner1.jpg',
        url:'/search?category=T-Shirts',
        isPublished:true
    },
    {
        tittle:'Best Deals on Wirst Watches',
        buttonCaption:'See More',
        image:'/images/banner2.jpg',
        url:'/search?category=Wrist Watches',
        isPublished:true
    }
],
}

export default data

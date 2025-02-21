import HomeCard from "@/components/home/home-card"
import HomeCarousel from "@/components/home/home-carousel"
import {
  getAllCategories,
  getProductsForCard,
} from "@/lib/actions/product.action"
import data from "@/lib/data"
import { toSlug } from "@/lib/utils"
import React from "react"

const Page = async () => {
  const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsForCard({ tag: "new-arrival", limit: 4 })
  const featureds = await getProductsForCard({ tag: "featured", limit: 4 })
  const bestSellers = await getProductsForCard({ tag: "best-seller", limit: 4 })
  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "see More",
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: "Explore New Arrivals",
      items: newArrivals,
      link: {
        text: "View All",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "View All",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Featured Products",
      items: featureds,
      link: {
        text: "Shop Now",
        href: "/search?tag=new-arrival",
      },
    },
  ]

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard cards={cards} />
      </div>
    </>
  )
}
export default Page

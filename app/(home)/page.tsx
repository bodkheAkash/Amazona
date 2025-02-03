import HomeCarousel from "@/components/home/home-carousel"
import data from "@/lib/data"
import React from "react"

const Page = () => {
  return <HomeCarousel items={data.carousels} />
}

export default Page

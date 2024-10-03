import { withInstall, withNoopInstall } from '@tams-ui/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElCarousel: SFCWithInstall<typeof Carousel> & {
  CarouselItem: typeof CarouselItem
} = withInstall(Carousel, {
  CarouselItem,
})

export default ElCarousel

export const ElCarouselItem: SFCWithInstall<typeof CarouselItem> =
  withNoopInstall(CarouselItem)

export * from './src/carousel'
export * from './src/carousel-item'
export * from './src/constants'

export type { CarouselInstance, CarouselItemInstance } from './src/instance'

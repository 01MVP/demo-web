import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[4.5rem]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-16 sm:pt-20 lg:pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              <span className="block">从0到1</span>
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                让创意快速变成产品
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              通过 AI 驱动的工具和创造者社区，帮助你用最短时间打造最小可行产品（MVP）
            </p>
            <div className="mx-auto mt-10 flex justify-center gap-4">
              <Button size="lg" className="gap-2">
                加入社区 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-16">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-grid-white/[0.05]" />
          <div className="flex-1 w-full bg-gradient-to-t from-background" />
        </div>
      </div>
    </div>
  )
}

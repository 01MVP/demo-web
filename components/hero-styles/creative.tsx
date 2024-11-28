import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// 创意活力风格：鲜艳色彩、不规则图形、动感设计
export function CreativeHero() {
  return (
    <div className="relative overflow-hidden bg-yellow-50 py-20">
      {/* 装饰图形 */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
        <div className="h-64 w-64 rounded-full bg-purple-400/30 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
        <div className="h-64 w-64 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-primary">
              <span className="animate-bounce mr-2">👋</span> 欢迎来到 01MVP
            </div>
            <h1 className="mt-8 font-bold tracking-tight">
              <span className="block text-4xl sm:text-6xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                从0到1
              </span>
              <span className="mt-4 block text-3xl sm:text-5xl">
                让创意快速变成产品
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              通过 AI 驱动的工具和创造者社区
              <br />
              帮助你用最短时间打造最小可行产品
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              >
                开始创造 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black py-20 text-white">
      {/* 代码背景效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid" />
      </div>

      {/* 霓虹光效果 */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-600/30 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-600/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-1 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur-xl">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70">AI-Powered Development</span>
          </div>

          <h1 className="mt-8 font-bold tracking-tight">
            <span className="relative block text-5xl sm:text-7xl">
              从0到1
              <span className="absolute -inset-2 hidden animate-pulse rounded-lg bg-primary/20 blur-xl sm:block" />
            </span>
            <span className="mt-4 block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl text-transparent sm:text-6xl">
              让创意快速变成产品
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/60">
            通过 AI 驱动的工具和创造者社区，帮助你用最短时间打造最小可行产品
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="relative bg-white text-black hover:bg-white/90 group"
            >
              <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
              <span className="relative flex items-center">
                开始创造 <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

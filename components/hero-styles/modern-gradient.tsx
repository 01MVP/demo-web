import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// 现代科技风格：渐变背景、玻璃态效果、动态网格
export function ModernGradientHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-primary to-blue-600 py-20 text-white">
      {/* 动态网格背景 */}
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      {/* 动态光晕效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            从0到1
            <span className="block mt-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              让创意快速变成产品
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            通过 AI 驱动的工具和创造者社区，帮助你用最短时间打造最小可行产品（MVP）
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              立即加入 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

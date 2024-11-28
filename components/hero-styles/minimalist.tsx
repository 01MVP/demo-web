import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

// 简约商务风格：黑白主色调、大字体、简洁布局
export function MinimalistHero() {
  return (
    <div className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              创新从这里开始
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-tight">
              从0到1
              <span className="block mt-2 text-primary">让创意快速变成产品</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              通过 AI 驱动的工具和创造者社区，帮助你用最短时间打造最小可行产品
            </p>
            <div className="mt-10 flex gap-x-6">
              <Button size="lg" className="gap-2">
                开始创造 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
            <Image
              src="/01mvp-black.png"
              alt="01MVP Logo"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

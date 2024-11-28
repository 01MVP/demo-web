import { ModernGradientHero } from "@/components/hero-styles/modern-gradient"
import { MinimalistHero } from "@/components/hero-styles/minimalist"
import { CreativeHero } from "@/components/hero-styles/creative"
import { TechHero } from "@/components/hero-styles/tech"

export default function StylesPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="container py-8">
          <h2 className="text-2xl font-bold">风格 1: 现代渐变风格</h2>
          <p className="text-muted-foreground mt-2">
            特点：渐变背景、玻璃态效果、动态网格，突出科技感和现代感
          </p>
        </div>
        <ModernGradientHero />
      </section>

      <section>
        <div className="container py-8">
          <h2 className="text-2xl font-bold">风格 2: 简约商务风格</h2>
          <p className="text-muted-foreground mt-2">
            特点：黑白主色调、大字体、简洁布局，突出专业性和可信度
          </p>
        </div>
        <MinimalistHero />
      </section>

      <section>
        <div className="container py-8">
          <h2 className="text-2xl font-bold">风格 3: 创意活力风格</h2>
          <p className="text-muted-foreground mt-2">
            特点：鲜艳色彩、不规则图形、动感设计，突出创意和活力
          </p>
        </div>
        <CreativeHero />
      </section>

      <section>
        <div className="container py-8">
          <h2 className="text-2xl font-bold">风格 4: 高科技风格</h2>
          <p className="text-muted-foreground mt-2">
            特点：深色背景、霓虹效果、代码元素，突出技术感和未来感
          </p>
        </div>
        <TechHero />
      </section>
    </div>
  )
}

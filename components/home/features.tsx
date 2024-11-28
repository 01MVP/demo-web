import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Rocket, Users, Wand2 } from "lucide-react"

const features = [
  {
    title: "AI 驱动开发",
    description: "使用最新的 AI 工具和 API，加速你的产品开发过程",
    icon: Wand2,
  },
  {
    title: "创业者社区",
    description: "加入充满活力的创业者社区，互相学习、共同成长",
    icon: Users,
  },
  {
    title: "专业培训",
    description: "系统的线上课程和定制化培训，助你掌握必要技能",
    icon: Lightbulb,
  },
  {
    title: "快速落地",
    description: "从想法到产品，最快速度实现你的第一个 MVP",
    icon: Rocket,
  },
]

export function Features() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">我们能帮你做什么？</h2>
        <p className="mt-4 text-muted-foreground">
          无论你是想做网站、小程序、APP，还是想提升工作效率，我们都能帮你实现
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-muted/50">
            <CardHeader>
              <feature.icon className="h-12 w-12 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

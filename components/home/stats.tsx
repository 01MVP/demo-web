import { Card, CardContent } from "@/components/ui/card"
import { Users, Rocket, Trophy, Clock } from "lucide-react"

const stats = [
  {
    name: "活跃用户",
    value: "1000+",
    description: "来自各行各业的创作者",
    icon: Users,
  },
  {
    name: "成功案例",
    value: "200+",
    description: "已实现的创意项目",
    icon: Trophy,
  },
  {
    name: "平均周期",
    value: "7天",
    description: "从想法到上线",
    icon: Clock,
  },
  {
    name: "创业项目",
    value: "50+",
    description: "已获得投资",
    icon: Rocket,
  },
]

export function Stats() {
  return (
    <section className="container py-24">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="bg-muted/50 overflow-hidden">
            <CardContent className="p-6">
              <stat.icon className="h-12 w-12 text-primary" />
              <div className="mt-4">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="font-semibold">{stat.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

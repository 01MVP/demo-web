import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const courses = [
  {
    title: "AI 开发入门",
    price: "限时优惠",
    description: "零基础入门，7天掌握 AI 开发基础",
    features: [
      "AI 开发基础知识",
      "常用 AI 模型和API",
      "项目实战演练",
      "导师1对1指导",
      "社群交流学习",
    ],
  },
  {
    title: "MVP 加速营",
    price: "火热招生",
    description: "21天打造你的第一个产品",
    features: [
      "产品定位和规划",
      "技术选型指导",
      "开发全程陪跑",
      "上线运营指导",
      "创业资源对接",
    ],
    featured: true,
  },
  {
    title: "企业定制培训",
    price: "联系咨询",
    description: "为企业打造专属 AI 培训方案",
    features: [
      "需求定制分析",
      "团队能力评估",
      "实战项目辅导",
      "技术咨询支持",
      "长期合作伙伴",
    ],
  },
]

export function Courses() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">选择适合你的课程</h2>
        <p className="mt-4 text-muted-foreground">
          从入门到精通，助你快速掌握 AI 开发技能
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.title}
            className={course.featured ? "border-primary" : ""}
          >
            <CardHeader>
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {course.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={course.featured ? "default" : "outline"}>
                {course.price}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"

const mentors = [
  {
    name: "张教授",
    role: "AI 研究专家",
    avatar: "/avatars/mentor-1.png",
    description: "前 Google AI 研究员，在 AI 领域有超过10年经验",
    expertise: ["机器学习", "深度学习", "NLP"],
  },
  {
    name: "李老师",
    role: "全栈开发导师",
    avatar: "/avatars/mentor-2.png",
    description: "资深全栈工程师，曾主导多个百万级用户产品的开发",
    expertise: ["Web开发", "移动应用", "系统架构"],
  },
  {
    name: "王老师",
    role: "产品设计导师",
    avatar: "/avatars/mentor-3.png",
    description: "前字节跳动产品专家，擅长用户体验和产品规划",
    expertise: ["产品设计", "用户研究", "增长黑客"],
  },
  {
    name: "陈老师",
    role: "创业导师",
    avatar: "/avatars/mentor-4.png",
    description: "连续创业者，多个创业项目成功退出",
    expertise: ["商业模式", "融资规划", "团队管理"],
  },
]

export function Mentors() {
  return (
    <section className="container py-24">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">专业导师团队</h2>
          <p className="mt-4 text-muted-foreground">
            来自一线科技公司的资深专家，助你快速成长
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <Card key={mentor.name} className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-primary">{mentor.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {mentor.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

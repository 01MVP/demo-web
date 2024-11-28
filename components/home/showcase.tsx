import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const showcases = [
  {
    title: "AI 智能助手",
    description: "从0到1，3天内完成一个类似 ChatGPT 的智能助手产品，现已服务超过1000位用户",
    author: "张先生",
    role: "独立开发者",
    avatar: "/avatars/avatar-1.png",
    tags: ["AI", "ChatGPT", "Web开发"],
  },
  {
    title: "小红书带货机器人",
    description: "利用 AI 技术，开发自动化运营工具，帮助店铺提升销量300%",
    author: "李女士",
    role: "电商创业者",
    avatar: "/avatars/avatar-2.png",
    tags: ["自动化", "电商", "AI营销"],
  },
  {
    title: "AI 设计助手",
    description: "基于 Midjourney API 开发设计辅助工具，现已获得天使轮投资",
    author: "王先生",
    role: "设计师",
    avatar: "/avatars/avatar-3.png",
    tags: ["设计", "Midjourney", "创业"],
  },
]

export function Showcase() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">他们都在用 01MVP</h2>
        <p className="mt-4 text-muted-foreground">
          看看其他创作者是如何快速实现自己的想法的
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((showcase) => (
          <Card key={showcase.title} className="bg-muted/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={showcase.avatar} />
                  <AvatarFallback>{showcase.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{showcase.author}</h3>
                  <p className="text-sm text-muted-foreground">{showcase.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">{showcase.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {showcase.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {showcase.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

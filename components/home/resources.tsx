import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Download, FileText, Video, Code } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useToast } from "@/hooks/use-toast"

const resources = [
  {
    title: "AI 开发入门指南",
    description: "从零开始的 AI 开发学习路线图",
    icon: FileText,
    downloadText: "下载 PDF",
  },
  {
    title: "实战案例视频",
    description: "3个真实项目的开发全过程",
    icon: Video,
    downloadText: "观看视频",
  },
  {
    title: "代码模板合集",
    description: "常用功能的代码模板和示例",
    icon: Code,
    downloadText: "获取代码",
  },
]

export function Resources() {
  const { toast } = useToast()

  const handleDownload = () => {
    toast({
      title: "订阅成功",
      description: "资源下载链接已发送到您的邮箱",
    })
  }

  return (
    <section className="container py-24 bg-muted/30">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">免费学习资源</h2>
          <p className="mt-4 text-muted-foreground">
            订阅我们的更新，获取精选的学习资源
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="bg-background">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4" />
                  {resource.downloadText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            更多资源请关注我们的公众号和知识星球
          </p>
        </div>
      </AnimatedSection>
    </section>
  )
}

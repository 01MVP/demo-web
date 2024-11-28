import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "哔哩哔哩",
    url: "https://space.bilibili.com/3546733244058560",
    description: "视频教程和经验分享",
  },
  {
    name: "小红书",
    url: "https://www.xiaohongshu.com/user/profile/665db6cf0000000003033b8e",
    description: "创业心得和日常分享",
  },
  {
    name: "知乎",
    url: "https://www.zhihu.com/people/01mvp",
    description: "深度文章和问答",
  },
  {
    name: "微博",
    url: "https://weibo.com/u/7965621961",
    description: "最新动态和互动",
  },
]

export function Social() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">关注我们的社交媒体</h2>
        <p className="mt-4 text-muted-foreground">
          在各大平台获取最新资讯和干货内容
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((link) => (
          <Card key={link.name} className="bg-muted/50">
            <CardContent className="flex flex-col items-center justify-between p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold">{link.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-4"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                  访问主页 <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

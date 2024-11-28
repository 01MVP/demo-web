import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function CTA() {
  return (
    <section className="container py-24">
      <Card className="bg-muted/50">
        <CardContent className="p-12">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold">加入我们的社区</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                关注公众号，加入知识星球，与数千名创业者一起学习和成长
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="text-center">
                  <Image
                    src="/01mvp-wechat-service.jpg"
                    alt="微信公众号"
                    width={200}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-2 font-medium">微信公众号</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/01mvp-wechat-xiaozhushou.png"
                    alt="微信小助手"
                    width={200}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-2 font-medium">微信小助手</p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">加入知识星球，你将获得：</h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>系统的 AI 开发课程</li>
                  <li>创业经验分享和案例解析</li>
                  <li>专业导师 1 对 1 指导</li>
                  <li>活跃的创业者社群</li>
                  <li>优质项目对接机会</li>
                </ul>
                <div className="pt-4">
                  <Image
                    src="/01mvp-knowledge.jpg"
                    alt="知识星球"
                    width={200}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-2 text-center font-medium">扫码加入知识星球</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

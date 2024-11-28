import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { AnimatedSection } from "@/components/ui/animated-section"

export function Newsletter() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "订阅成功",
      description: "感谢订阅！我们会定期发送最新资讯给您",
    })
  }

  return (
    <section className="container py-24 bg-primary text-primary-foreground">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">订阅我们的更新</h2>
          <p className="mt-4 text-primary-foreground/80">
            获取最新的 AI 技术资讯、课程优惠和独家内容
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex gap-4 justify-center">
            <Input
              type="email"
              placeholder="输入您的邮箱"
              className="max-w-sm bg-primary-foreground text-primary"
            />
            <Button variant="secondary">立即订阅</Button>
          </form>
          <p className="mt-4 text-sm text-primary-foreground/60">
            我们承诺不会向您发送垃圾邮件，您可以随时取消订阅
          </p>
        </div>
      </AnimatedSection>
    </section>
  )
}

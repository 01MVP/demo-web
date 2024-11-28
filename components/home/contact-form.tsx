import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "提交成功",
      description: "我们会尽快与您联系！",
    })
  }

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-3xl font-bold text-center">免费咨询</h2>
          <p className="mt-2 text-center text-muted-foreground">
            留下您的需求，我们会在24小时内联系您
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input placeholder="您的称呼" />
              </div>
              <div className="space-y-2">
                <Input placeholder="联系方式（微信/手机）" />
              </div>
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="请简单描述您的项目需求或遇到的问题"
                className="min-h-[100px]"
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" size="lg">
                提交咨询
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

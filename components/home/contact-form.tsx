import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MessageCircle } from "lucide-react"

export function ContactForm() {
  return (
    <div className="relative py-24">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full bg-purple-600/30 blur-[128px] opacity-20" />
      <div className="absolute -bottom-40 left-0 h-[40rem] w-[40rem] rounded-full bg-blue-600/30 blur-[128px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            联系我们
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            有任何问题或建议？我们随时恭候您的来信
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">邮件咨询</h3>
                  <p className="mt-1 text-white/60">contact@01mvp.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">在线咨询</h3>
                  <p className="mt-1 text-white/60">工作日 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          <form className="mt-12 space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80">
                  姓名
                </label>
                <Input
                  type="text"
                  id="name"
                  className="mt-2 block w-full rounded-lg border-0 bg-white/5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  邮箱
                </label>
                <Input
                  type="email"
                  id="email"
                  className="mt-2 block w-full rounded-lg border-0 bg-white/5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500"
                  placeholder="您的邮箱"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80">
                留言内容
              </label>
              <Textarea
                id="message"
                rows={6}
                className="mt-2 block w-full rounded-lg border-0 bg-white/5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500"
                placeholder="请输入您的留言内容..."
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              >
                <Send className="mr-2 h-4 w-4" />
                发送留言
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

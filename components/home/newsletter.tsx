import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <div className="relative py-24">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] rounded-full bg-purple-600/30 blur-[128px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            订阅我们的更新
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            获取最新的产品动态、技术文章和学习资源
          </p>
        </div>

        <form className="mx-auto mt-10 max-w-md">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-white/40" />
                </div>
                <Input
                  type="email"
                  placeholder="输入你的邮箱"
                  className="block w-full rounded-lg border-0 bg-transparent pl-10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <Button
                type="submit"
                className="shrink-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              >
                订阅
              </Button>
            </div>

            {/* 发光效果 */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600/50 to-blue-600/50 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <p className="mt-4 text-center text-sm text-white/40">
            我们承诺不会向您发送垃圾邮件，您可以随时取消订阅
          </p>
        </form>
      </div>
    </div>
  )
}

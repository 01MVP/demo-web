import { Button } from "@/components/ui/button"
import { Download, FileText, Play, Book } from "lucide-react"

const resources = [
  {
    title: "AI 开发入门指南",
    description: "从零开始学习 AI 开发的完整指南",
    icon: Book,
    downloads: "1000+",
  },
  {
    title: "MVP 项目实战",
    description: "手把手教你打造第一个 MVP 产品",
    icon: Play,
    downloads: "800+",
  },
  {
    title: "创业资源包",
    description: "创业必备的工具和资源清单",
    icon: FileText,
    downloads: "500+",
  },
]

export function Resources() {
  return (
    <div className="relative py-24">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full bg-purple-600/30 blur-[128px] opacity-20" />
      <div className="absolute -bottom-40 left-0 h-[40rem] w-[40rem] rounded-full bg-blue-600/30 blur-[128px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            免费学习资源
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            精心准备的学习资料，助你快速入门
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 text-white/60">{resource.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-purple-400">
                    已下载 {resource.downloads}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    下载
                  </Button>
                </div>
              </div>

              {/* 悬停时显示的装饰性边框 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

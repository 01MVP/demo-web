import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

interface ResourcesProps {
  showAll?: boolean
}

export function Resources({ showAll = false }: ResourcesProps) {
  const resources = [
    {
      title: "MVP 开发指南",
      description: "从 0 到 1 完整的 MVP 开发流程和最佳实践",
      downloadCount: "2.5k",
      type: "PDF",
    },
    {
      title: "技术选型指南",
      description: "主流技术栈对比和选择建议",
      downloadCount: "1.8k",
      type: "PDF",
    },
    {
      title: "产品设计模板",
      description: "高质量的产品设计文档模板",
      downloadCount: "3.2k",
      type: "Figma",
    },
  ]

  const displayResources = showAll ? resources : resources.slice(0, 3)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            学习资源
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            精心整理的学习资料，助你更快掌握技能
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayResources.map((resource) => (
            <div
              key={resource.title}
              className="relative group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{resource.description}</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/40">
                  <Download className="h-4 w-4" />
                  <span>{resource.downloadCount}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400">
                  {resource.type}
                </span>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                  下载
                </Button>
              </div>

              {/* 发光效果 */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600/50 to-blue-600/50 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <Link href="/resources">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                查看更多资源
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

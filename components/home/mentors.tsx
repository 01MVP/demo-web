import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface MentorsProps {
  showAll?: boolean
}

const mentors = [
  {
    name: "张三",
    role: "技术导师",
    description: "前字节跳动技术专家，10年+开发经验",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "李四",
    role: "产品导师",
    description: "连续创业者，多个爆款产品操盘手",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "王五",
    role: "创业导师",
    description: "资深投资人，服务过100+创业团队",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "赵六",
    role: "运营导师",
    description: "前阿里运营总监，增长黑客专家",
    color: "from-green-500 to-yellow-500",
  },
]

export function Mentors({ showAll = false }: MentorsProps) {
  const displayMentors = showAll ? mentors : mentors.slice(0, 3)

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
            遇见你的导师
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            经验丰富的导师团队，助你少走弯路
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayMentors.map((mentor) => (
            <div
              key={mentor.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              {/* 头像容器 */}
              <div className="flex items-center gap-x-6">
                {/* Notion 风格头像 */}
                <div className={`relative h-16 w-16 rounded-xl bg-gradient-to-br ${mentor.color} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <span className="text-2xl font-bold text-white">
                    {mentor.name[0]}
                  </span>
                  {/* 发光效果 */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">
                    {mentor.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {mentor.role}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-base leading-7 text-white/60">
                {mentor.description}
              </p>

              {/* 卡片发光效果 */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600/50 to-blue-600/50 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <Link href="/mentors">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                了解更多导师
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  },
  {
    name: "李四",
    role: "产品导师",
    description: "连续创业者，多个爆款产品操盘手",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tigger",
  },
  {
    name: "王五",
    role: "创业导师",
    description: "资深投资人，服务过100+创业团队",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
  },
  {
    name: "赵六",
    role: "运营导师",
    description: "前阿里运营总监，增长黑客专家",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oscar",
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
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-white/20 transition-transform duration-300 group-hover:scale-105">
                {/* 发光效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                <p className="mt-1 text-sm text-purple-400">{mentor.role}</p>
                <p className="mt-3 text-sm text-white/60">{mentor.description}</p>
              </div>

              {/* 悬停时显示的装饰性边框 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
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

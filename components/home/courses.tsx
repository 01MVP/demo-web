import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const courses = [
  {
    name: "MVP 启航计划",
    description: "从 0 到 1 打造你的第一个产品",
    price: "¥999",
    features: [
      "产品定位与市场分析",
      "最小可行产品规划",
      "技术选型指导",
      "AI 开发工具使用",
      "产品发布与推广",
    ],
    featured: false,
  },
  {
    name: "创业加速营",
    description: "帮助你的产品快速成长",
    price: "¥2999",
    features: [
      "包含 MVP 启航计划全部内容",
      "一对一创业导师指导",
      "技术团队配套支持",
      "投资人对接机会",
      "创业社群资源",
    ],
    featured: true,
  },
]

export function Courses() {
  return (
    <div className="relative py-24">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full bg-purple-600/30 blur-[128px] opacity-20" />
      <div className="absolute -bottom-40 left-0 h-[40rem] w-[40rem] rounded-full bg-blue-600/30 blur-[128px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            选择适合你的课程
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            系统化的学习内容，助你更快地实现创业目标
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.name}
              className={`relative rounded-2xl ${
                course.featured
                  ? "border-purple-500/30 bg-purple-500/10"
                  : "border-white/10 bg-white/5"
              } border p-8 backdrop-blur-xl`}
            >
              {course.featured && (
                <div className="absolute -top-5 right-8">
                  <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-400 backdrop-blur-xl">
                    推荐课程
                  </div>
                </div>
              )}

              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white">{course.name}</h3>
                <p className="mt-2 text-white/60">{course.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-white">{course.price}</span>
                </p>

                <ul className="mt-8 space-y-4">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-purple-400" />
                      </div>
                      <span className="ml-3 text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 w-full ${
                    course.featured
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  立即报名
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

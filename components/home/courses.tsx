import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CoursesProps {
  showAll?: boolean
}

export function Courses({ showAll = false }: CoursesProps) {
  const courses = [
    {
      title: "MVP 开发入门",
      description: "从零开始学习如何构建 MVP，掌握基础开发技能",
      price: "¥299",
      features: ["基础开发技能", "项目实战", "导师指导", "社群交流"],
      recommended: false,
    },
    {
      title: "全栈开发进阶",
      description: "深入学习全栈开发技术，提升开发效率",
      price: "¥599",
      features: ["高级开发技术", "性能优化", "架构设计", "项目管理"],
      recommended: true,
    },
    {
      title: "创业实战课程",
      description: "从产品设计到上线运营的完整创业指南",
      price: "¥899",
      features: ["商业模式", "产品设计", "市场营销", "融资指导"],
      recommended: false,
    },
  ]

  const displayCourses = showAll ? courses : courses.slice(0, 3)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            精品课程
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            从零基础到项目落地，系统化的学习路径
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayCourses.map((course) => (
            <div
              key={course.title}
              className={`relative group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl ${
                course.recommended ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {course.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 text-sm font-medium text-white">
                    推荐课程
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                {course.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/60">
                {course.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {course.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-white/60">
                  /课程
                </span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-white/60">
                {course.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-purple-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 发光效果 */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600/50 to-blue-600/50 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <Link href="/courses">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                查看更多课程
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

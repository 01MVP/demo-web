import { Bot, Brain, Rocket, Users } from "lucide-react"

const features = [
  {
    name: "AI 驱动开发",
    description: "利用最新的 AI 技术，智能生成代码、设计和文档，加速产品开发流程",
    icon: Bot,
  },
  {
    name: "专家指导",
    description: "资深创业导师和技术专家一对一指导，帮助你避开创业陷阱",
    icon: Brain,
  },
  {
    name: "快速迭代",
    description: "敏捷开发方法论，帮助你在最短时间内验证产品价值",
    icon: Rocket,
  },
  {
    name: "创业社区",
    description: "连接优秀创业者，分享经验，共同成长",
    icon: Users,
  },
]

export function Features() {
  return (
    <div className="relative overflow-hidden py-24">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            为什么选择 01MVP
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            我们提供全方位的支持，帮助你快速将想法转化为可用的产品
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div className="absolute -inset-0.5 hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />
                
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-white/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

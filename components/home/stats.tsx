import { Card, CardContent } from "@/components/ui/card"
import { Users, Rocket, Trophy, Clock } from "lucide-react"

const stats = [
  { id: 1, name: "创业项目", value: "100+" },
  { id: 2, name: "成功案例", value: "50+" },
  { id: 3, name: "专家导师", value: "20+" },
  { id: 4, name: "社区成员", value: "1000+" },
]

export function Stats() {
  return (
    <div className="relative py-24">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] rounded-full bg-purple-600/30 blur-[128px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              数据说话
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/60">
              我们帮助创业者从0到1，打造成功的产品
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-center backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col p-8 hover:bg-white/10 transition-colors">
                <dt className="text-sm leading-6 text-white/60">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

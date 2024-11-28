import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative isolate">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full bg-purple-600/30 blur-[128px] opacity-20" />
      <div className="absolute -bottom-40 left-0 h-[40rem] w-[40rem] rounded-full bg-blue-600/30 blur-[128px] opacity-20" />

      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              关于 01MVP
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/60">
              01MVP 是一个专注于帮助创业者和开发者快速构建 MVP 的平台。我们相信，每个人都应该有机会将自己的想法转化为现实。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "我们的使命",
                description:
                  "让每个人都能快速打造自己的 MVP，降低创新创业的门槛，帮助更多人实现梦想。",
              },
              {
                title: "我们的愿景",
                description:
                  "成为全球领先的 MVP 开发平台，打造一个充满创新活力的创业者社区。",
              },
              {
                title: "我们的价值观",
                description:
                  "以用户为中心，注重实效，持续创新，开放共享。",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              加入我们
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              如果您对我们的使命感兴趣，欢迎加入我们的团队。我们正在寻找充满激情的人才，一起打造更好的产品。
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                  联系我们
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

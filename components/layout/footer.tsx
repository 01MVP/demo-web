import Link from "next/link"
import { Github } from "lucide-react"

const navigation = {
  main: [
    { name: "关于我们", href: "/about" },
    { name: "使用条款", href: "/terms" },
    { name: "隐私政策", href: "/privacy" },
    { name: "帮助中心", href: "/help" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/01mvp",
      icon: Github,
    },
  ],
}

export function Footer() {
  return (
    <footer className="relative mt-24 bg-black/50 backdrop-blur-xl border-t border-white/10">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[128px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                01MVP
              </span>
            </Link>
            <p className="text-sm leading-6 text-white/60">
              让每个人都能快速打造自己的 MVP
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/60 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">快速链接</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white/60 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and ICP */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-xs text-white/60 space-y-2">
            <p>© 2024 01MVP. All rights reserved.</p>
            <p>
              <Link href="https://beian.miit.gov.cn" target="_blank" className="hover:text-white">
                琼ICP备2024040807号-4
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

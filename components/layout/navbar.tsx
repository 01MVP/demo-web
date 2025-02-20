import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"

const navigation = [
  { name: "首页", href: "/" },
  { name: "课程", href: "/courses" },
  { name: "导师", href: "/mentors" },
  { name: "资源", href: "/resources" },
  { name: "关于", href: "/about" },
  { name: "飞书文档", href: "https://hackathonweekly.feishu.cn/wiki/space/7473044385272184860?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home" },
]

export function Navbar() {
  return (
    <nav className="sticky top-[40px] z-40 w-full backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/01mvp-logo.png"
                  alt="01MVP Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                01MVP
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
              登录
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
              立即开始
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden -mr-2">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}

"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: "首页", href: "/" },
  { name: "课程", href: "/courses" },
  { name: "导师", href: "/mentors" },
  { name: "资源", href: "/resources" },
  { name: "关于", href: "/about" },
  { name: "飞书文档", href: "https://hackathonweekly.feishu.cn/wiki/space/7473044385272184860?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black/95 border-white/10">
        <div className="flex flex-col space-y-6 mt-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg text-white/70 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 mt-4 px-4">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 w-full">
              登录
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 w-full">
              立即开始
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function AnnouncementBanner() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white">
          <strong className="font-semibold"> （网站建设中）直达 01MVP 飞书知识库：</strong>
          <span className="inline-block ml-1">
             打造你的最小可行产品
          </span>
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="bg-white/10 hover:bg-white/20 text-white"
          onClick={() => window.open('https://hackathonweekly.feishu.cn/wiki/space/7473044385272184860?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home', '_blank')}
        >
          进入知识库
        </Button>
      </div>
      <div className="flex flex-1 justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">关闭公告</span>
        </Button>
      </div>
    </div>
  )
}

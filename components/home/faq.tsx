import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "我完全不会编程，可以参加吗？",
    answer:
      "当然可以！我们的课程和工具专门为零基础的创作者设计。通过 AI 工具的帮助，即使不懂编程也能快速实现自己的想法。",
  },
  {
    question: "加入知识星球能获得什么？",
    answer:
      "你将获得：1) 系统的 AI 开发课程；2) 专业导师1对1指导；3) 活跃的创业者社群；4) 项目对接机会；5) 持续更新的 AI 工具和资源。",
  },
  {
    question: "如何快速开始我的第一个项目？",
    answer:
      "加入后，我们会为你提供详细的新手指南和项目模板。你可以选择适合自己的项目类型，在导师指导下，3-7天内完成第一个作品。",
  },
  {
    question: "我的项目想法能保密吗？",
    answer:
      "当然！我们非常重视成员的知识产权。社群内有严格的保密协议，你可以选择性分享，也可以寻求一对一指导。",
  },
  {
    question: "课程和指导的形式是怎样的？",
    answer:
      "我们提供在线视频课程、文字教程、每周直播答疑、1对1导师指导等多种形式。你可以根据自己的时间灵活安排学习。",
  },
]

export function FAQ() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">常见问题</h2>
        <p className="mt-4 text-muted-foreground">
          关于加入社区的一些常见问题解答
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

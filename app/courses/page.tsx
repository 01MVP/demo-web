import { Courses } from "@/components/home/courses"

export default function CoursesPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          精品课程
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/60">
          从零基础到项目落地，系统化的学习路径助您快速成长
        </p>
      </div>
      <Courses showAll={true} />
    </div>
  )
}

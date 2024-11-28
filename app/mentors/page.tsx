import { Mentors } from "@/components/home/mentors"

export default function MentorsPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          专业导师团队
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/60">
          我们的导师团队由经验丰富的技术专家和创业者组成，为您提供专业指导
        </p>
      </div>
      <Mentors showAll={true} />
    </div>
  )
}

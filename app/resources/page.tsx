import { Resources } from "@/components/home/resources"

export default function ResourcesPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          学习资源
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/60">
          丰富的学习资源和工具，助您快速掌握技能
        </p>
      </div>
      <Resources showAll={true} />
    </div>
  )
}

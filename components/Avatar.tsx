export default function Avatar({ src, name, size = "md" }: { src?: string; name?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  const sizes = { sm: "w-7 h-7 text-[10px]", md: "w-9 h-9 text-sm", lg: "w-10 h-10 text-sm", xl: "w-20 h-20 text-2xl" }
  const cls = `${sizes[size]} rounded-full shrink-0 overflow-hidden`

  if (src) {
    return (
      <div className={cls}>
        <img src={src} alt={name || ""} className="w-full h-full object-cover" loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`${cls} bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center font-bold`}>
      {name ? name.charAt(0).toUpperCase() : "?"}
    </div>
  )
}

export default function ExperienceCard({ img, title }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-10 bg-white rounded-lg shadow dark:bg-gray-800 relative z-20 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer">
      <img src={img} alt={title} className="w-13 h-8" />
      <p class="font-normal text-gray-400 dark:text-gray-200">{title}</p>
    </div>
  );
}

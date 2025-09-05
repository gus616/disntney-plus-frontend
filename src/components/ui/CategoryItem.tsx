import type { Category } from "../../models/Category"

type CategoryItemProps = {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return (
        <li
            key={category.id}
            className="relative w-[180px] h-[130px] p4 flex-shrink-0 rounded-2xl bg-[#2d2f36] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-4 hover:border-white group"
        >
            <img
                src={category?.gallery?.imageUrl}
                alt={category.name}
                className="absolute z-100 inset-0 w-full h-full object-cover"
            />
            {category?.gallery?.videoUrl && (
                <video
                    src={category.gallery.videoUrl}
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

            )}
        </li>
    )
}

export default CategoryItem
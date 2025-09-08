import type { Category } from "../../models/Category"

type CategoryItemProps = {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return (
        <li
            key={category.id}
                 className="relative bg-[#2d2f36] w-[180px] h-[130px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 group
                 hover:shadow-[0_12px_25px_rgba(0,0,0,0.8)]"
        >
            <img
            src={category?.gallery?.imageUrl}
            alt={category.name}
            className="absolute z-100 inset-0 w-full h-full object-cover scale-80"          
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
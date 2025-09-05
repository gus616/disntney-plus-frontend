import { useGetCategoriesQuery } from "../api/categorySlice"
import CategoryItem from "./ui/CategoryItem";

const CategoriesContainer = () => {
    const { data: categories, isLoading, isError } = useGetCategoriesQuery();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Something went wrong</div>

    if (!categories || categories.length === 0) return <div>No categories available</div>

    return (
        <div className="w-full flex flex-row items-center justify-start space-x-3 overflow-x-auto scrollbar-hide p-3">
            <ul className="flex space-x-3">
                {categories?.map((category) => (
                   <CategoryItem key={category.id} category={category} />
                ))}
            </ul>
        </div>

    )
}

export default CategoriesContainer
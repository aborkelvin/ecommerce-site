import React from 'react'

interface categoryProps {
    categoryName: string;
    categoryImage: string;
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    selectedCategoryImage: string;
}

const CategoryItem = ({categoryName, categoryImage, selectedCategoryImage, selectedCategory, setSelectedCategory }:categoryProps) => {
    return (
        <button className={` ${selectedCategory == categoryName ? 'bg-[#DB4444] text-[#FAFAFA] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] ' : 'border-[1px] border-[#0000004D]'} 
            rounded py-[15px] md:py-[25px] px-[15px] min-w-[140px] md:min-w-[170px] flex flex-col gap-2 items-center text-center cursor-pointer`}
            onClick={() => {
                setSelectedCategory(categoryName)
            }}
        >
            <img src={selectedCategory == categoryName ? selectedCategoryImage : categoryImage} alt={` ${categoryName} category`} className='w-[46px] md:w-[56px] h-[46px] md:h-[56px] ' />
            <span className = {``} >{ categoryName }</span>
        </button>
    )
}

export default CategoryItem

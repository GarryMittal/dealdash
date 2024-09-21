"use client"; // Mark as a client component

import { useEffect, useState } from "react";
import Image from "next/image";

type ProductActionsProps = {
  productId: string;
  
};

const ProductActions = ({ productId }: ProductActionsProps) => {
  
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Check if the product is in favorites or bookmarks on initial load
   
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    
    setIsBookmarked(bookmarks.includes(productId));
  }, [productId]);


  const handleToggleBookmark = () => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (bookmarks.includes(productId)) {
      bookmarks = bookmarks.filter((bookmarkId: string) => bookmarkId !== productId);
      setIsBookmarked(false);
    } else {
      bookmarks.push(productId);
      setIsBookmarked(true);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  return (
    <div className="flex items-center gap-3">
      
      <div
        className="p-2 bg-white-200 rounded-10 cursor-pointer"
        onClick={handleToggleBookmark}
      >
        <Image
          src={
            isBookmarked
              ? "/assets/icons/bookmark-filled.svg"
              : "/assets/icons/bookmark.svg"
          }
          alt="bookmark"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default ProductActions;

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react"; // إضافة أيقونة للبحث

const CategorySearch = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-16 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        <span className="text-lime-600">Search</span> Categories
      </h2>
      
      <p className="text-gray-500 mb-8 max-w-md">
        Find the best services and professionals in one click.
      </p>

      <div className="flex w-full max-w-md items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            type="text" 
            placeholder="Search for categories..." 
            className="pl-10 border-lime-200 focus-visible:ring-lime-500 shadow-sm transition-all" 
          />
        </div>
        <Button 
          type="submit" 
          className="bg-lime-600 hover:bg-lime-700 text-white px-6 shadow-md"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default CategorySearch;

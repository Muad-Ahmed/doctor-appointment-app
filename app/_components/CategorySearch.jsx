import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

const CategorySearch = () => {
  return (
    <div className="mb-10 mt-2 flex items-center flex-col">
      <h2 className="font-bold text-4xl mb-7">
        <span className="text-lime-600">Search</span> Categories
      </h2>
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input type="email" placeholder="Email" className="shadow-lime-300" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
};

export default CategorySearch;

'use client';

import { SearchInput } from "@/components/SearchInput"
import { ChangeEvent, useState } from "react";

export const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <section className="w-full flex flex-col sm:flex-row items-center justify-between">
        <h1 className="w-full text-h1 mb-4">Funcionários</h1>

        <SearchInput
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </section>
    </section>
  )
}

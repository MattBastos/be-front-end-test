'use client';

import { SearchInput } from "@/components/SearchInput"
import { ChangeEvent, useState } from "react";

import *  as S from './styles';

export const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tableColumns = [
    "Foto",
    "Nome",
    "Cargo",
    "Data de Admissão",
    "Telefone",
  ];

  const mockedEmployee = [
    {
      image: "/",
      name: "Giovana L. Arruda",
      role: "Front-end",
      date: "00/00/0000",
      phoneNumber: "+55 (55) 55555-5555"
    },
    {
      image: "/",
      name: "Vanessa Machado",
      role: "Back-end",
      date: "00/00/0000",
      phoneNumber: "+55 (55) 85921-5555"
    },
    {
      image: "/",
      name: "Juliana Borba",
      role: "Front-end",
      date: "00/00/0000",
      phoneNumber: "+55 (55) 88921-5555"
    }
  ]

  const filteredEmployees = mockedEmployee.filter((employee) => {
    const searchRegex = new RegExp(searchTerm, "i");

    return (
      searchRegex.test(employee.name) ||
      searchRegex.test(employee.phoneNumber) ||
      searchRegex.test(employee.role)
    );
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <S.MainContainer>
      <S.TitleAndSearchContainer>
        <S.Title>Funcionários</S.Title>

        <SearchInput
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </S.TitleAndSearchContainer>

      <S.Table>

        <S.THead>
          <tr>
            {tableColumns.map((column, index) => (
              <S.TH key={column} className={index >= 2 ? 'hidden sm:table-cell' : ''}>
                {column}
              </S.TH>
            ))}

            <S.TH className="sm:hidden text-4xl">•</S.TH>
          </tr>
        </S.THead>

        <tbody>
          {filteredEmployees.length > 0 && filteredEmployees.map((employee) => (
            <S.TR key={employee.name}>
              <S.TD>
                <span>{employee.image}</span>
              </S.TD>

              <S.TD>
                <span>{employee.name}</span>
              </S.TD>

              <S.TD className="hidden sm:table-cell">
                <span>{employee.role}</span>
              </S.TD>

              <S.TD className="hidden sm:table-cell">
                <span>{employee.date}</span>
              </S.TD>

              <S.TD className="hidden sm:table-cell">
                <span>{employee.phoneNumber}</span>
              </S.TD>

              <S.TD className="sm:hidden">
                <S.IconContainer>
                  <S.Icon
                    src={'/assets/images/icons/arrow-down.png'}
                    alt='Arrow Down Icon'
                    title='Arrow Down Icon'
                    height={500}
                    width={500}
                    priority
                    quality={100}
                  />
                </S.IconContainer>
              </S.TD>
            </S.TR>
          ))}
        </tbody>
      </S.Table>
    </S.MainContainer>
  )
}

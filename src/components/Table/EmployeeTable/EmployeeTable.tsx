'use client';

import { SearchInput } from "@/components/SearchInput"
import { ChangeEvent, useState } from "react";

import *  as S from './styles';

export const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const webTableColumns = [
    "Foto",
    "Nome",
    "Cargo",
    "Data de Admissão",
    "Telefone",
  ];

  const mobileTableColumns = [
    "Foto",
    "Nome",
    "•",
  ];

  const mockedEmployee = [
    {
      image: "/assets",
      name: "Giovana L. Arruda",
      role: "Front-end",
      date: "00/00/0000",
      phoneNumber: "+55 (55) 55555-5555"
    },
    {
      image: "/assets",
      name: "Vanessa Machado",
      role: "Back-end",
      date: "00/00/0000",
      phoneNumber: "+55 (55) 85921-5555"
    },
    {
      image: "/assets",
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
            {webTableColumns.map((column) => (
              <S.TH key={column}>
                {column}
              </S.TH>
            ))}
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
              <S.TD>
                <span>{employee.role}</span>
              </S.TD>
              <S.TD>
                <span>{employee.date}</span>
              </S.TD>
              <S.TD>
                <span>{employee.phoneNumber}</span>
              </S.TD>
            </S.TR>
          ))}
        </tbody>
      </S.Table>
    </S.MainContainer>
  )
}

'use client';

import { SearchInput } from "@/components/SearchInput"
import { ChangeEvent, useState, Fragment } from "react";

import *  as S from './styles';

export const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null);

  const tableColumns = [
    "Foto",
    "Nome",
    "Cargo",
    "Data de Admissão",
    "Telefone",
  ];

  const mockedEmployee = [
    {
      id: 1,
      image: "/",
      name: "Giovana L. Arruda",
      role: "Front-end",
      date: "00/00/0000",
      phoneNumber: "+55 (55) 55555-5555"
    },
    {
      id: 2,
      image: "/",
      name: "Vanessa Machado",
      role: "Back-end",
      date: "00/00/0000",
      phoneNumber: "+55 (55) 85921-5555"
    },
    {
      id: 3,
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

  const toggleEmployeeDetails = (id: number) => {
    setSelectedEmployeeId(selectedEmployeeId === id ? null : id);
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
            <Fragment key={employee.name}>
              <S.TR className={selectedEmployeeId === employee.id ? 'border-0' : ''}>
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
                  <S.IconContainer onClick={() => toggleEmployeeDetails(employee.id)}>
                    <S.Icon
                      src={selectedEmployeeId === employee.id ? '/assets/images/icons/arrow-up.png' : '/assets/images/icons/arrow-down.png'}
                      alt={selectedEmployeeId === employee.id ? 'Ícone de seta para cima' : 'Ícone de seta para baixo'}
                      title={selectedEmployeeId === employee.id ? 'Recolher detalhes do funcionário' : 'Expandir detalhes do funcionário'}
                      height={500}
                      width={500}
                      priority
                      quality={100}
                    />
                  </S.IconContainer>
                </S.TD>
              </S.TR>

              {selectedEmployeeId === employee.id && (
                <S.TR className="sm:hidden">
                  <S.TD colSpan={3} className="p-4">
                    <S.EmployeeDetailContainer>
                      <S.EmployeeDetailTitle>Cargo</S.EmployeeDetailTitle>
                      <span>{employee.role}</span>
                    </S.EmployeeDetailContainer>

                    <S.EmployeeDetailContainer>
                      <S.EmployeeDetailTitle>Data de admissão</S.EmployeeDetailTitle>
                      <span>{employee.date}</span>
                    </S.EmployeeDetailContainer>

                    <S.EmployeeDetailContainer>
                      <S.EmployeeDetailTitle>Telefone</S.EmployeeDetailTitle>
                      <span>{employee.phoneNumber}</span>
                    </S.EmployeeDetailContainer>
                  </S.TD>
                </S.TR>
              )}
            </Fragment>
          ))}
        </tbody>
      </S.Table>
    </S.MainContainer>
  )
}

'use client';

import { SearchInput } from "@/components/SearchInput"
import { Employee } from "@/types";
import { formatDate } from "@/utils";
import Image from 'next/image';
import { ChangeEvent, useState, Fragment, useEffect } from "react";

import *  as S from './styles';

export const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null);

  const tableColumns = [
    "Foto",
    "Nome",
    "Cargo",
    "Data de Admissão",
    "Telefone",
  ];

  const filteredEmployees = employees.filter((employee) => {
    const searchRegex = new RegExp(searchTerm, "i");

    return (
      searchRegex.test(employee.name) ||
      searchRegex.test(employee.phone) ||
      searchRegex.test(employee.job)
    );
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const toggleEmployeeDetails = (id: number) => {
    setSelectedEmployeeId(selectedEmployeeId === id ? null : id);
  }

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Erro ao buscar dados: ', error));
  }, []);

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
                  <Image
                    src={employee.image}
                    alt={`Imagem do(a) ${employee.name}`}
                    title={`Imagem do(a) ${employee.name}`}
                    height={500}
                    width={500}
                    priority
                    quality={100}
                    className="h-10 w-10 rounded-full"
                  />
                </S.TD>

                <S.TD>
                  <span>{employee.name}</span>
                </S.TD>

                <S.TD className="hidden sm:table-cell">
                  <span>{employee.job}</span>
                </S.TD>

                <S.TD className="hidden sm:table-cell">
                  <span>{formatDate(employee.admission_date)}</span>
                </S.TD>

                <S.TD className="hidden sm:table-cell">
                  <span>{employee.phone}</span>
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
                      <span>{employee.job}</span>
                    </S.EmployeeDetailContainer>

                    <S.EmployeeDetailContainer>
                      <S.EmployeeDetailTitle>Data de admissão</S.EmployeeDetailTitle>
                      <span>{formatDate(employee.admission_date)}</span>
                    </S.EmployeeDetailContainer>

                    <S.EmployeeDetailContainer>
                      <S.EmployeeDetailTitle>Telefone</S.EmployeeDetailTitle>
                      <span>{employee.phone}</span>
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

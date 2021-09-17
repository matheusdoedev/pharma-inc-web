import { ReactElement, useState } from 'react';

import { Input, Select } from '~/components';
import { DashboardLayout } from '~/layouts';

import * as S from './styles';

function Patients(): ReactElement {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [sortFilter, setSortFilter] = useState<string>('');

  return (
    <DashboardLayout>
      <S.Wrapper>
        <S.Filters>
          <Select
            name="sort_filter"
            label="Ordenar por"
            placeholder="Ordenar por"
            value={sortFilter}
            setValue={setSortFilter}
            containerStyle={{ maxWidth: '21.8rem' }}
          />
          <Input
            name="name_filter"
            label="Procurar"
            placeholder="Filtrar por nome ou nacionalidade"
            value={searchFilter}
            setValue={setSearchFilter}
            containerStyle={{ maxWidth: '38rem' }}
          />
        </S.Filters>
      </S.Wrapper>
    </DashboardLayout>
  );
}

export default Patients;

import React from 'react';
import { fetchOngs } from '../../actions';
import { IOngResponse } from '../../types';
import OngList from '../../components/OngList';
import PageContainer from '@/components/layout/PageContainer';

const OngsPage = async () => {
    const response = await fetchOngs();
    const ongs: IOngResponse = response;

    return (
        <PageContainer title='Ongs'>
            <OngList ongs={ongs.data} />
        </PageContainer>
    );
};

export default OngsPage;

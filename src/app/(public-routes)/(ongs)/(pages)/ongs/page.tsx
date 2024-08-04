// src/app/(public-routes)/(ongs)/ongs.tsx
import React from 'react';
import { fetchOngs } from '../../actions';
import { IOngResponse } from '../../types';
import OngList from '../../components/OngList';


const OngsPage = async () => {
    const response = await fetchOngs();

    if ('error' in response) {
        console.error(response.error);
        return (
            <main>
                <div>
                    <p>Error fetching ONGs: {response.error}</p>
                </div>
            </main>
        );
    }

    const ongs: IOngResponse = response;

    console.log(ongs);

    return (
        <main className='flex flex-1 bg-muted/40 flex-col gap-4 p-4 md:gap-8 md:p-8'>
            <h1 className='heading-1'>Ongs</h1>
            <div>
                <OngList ongs={ongs.data} />
            </div>
        </main>
    );
};

export default OngsPage;

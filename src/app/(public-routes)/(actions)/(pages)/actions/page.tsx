import React from 'react'
import { fetchActions } from '../../actions';
import { IActionResponse } from '../../types';

const Actions = async () => {
    const response = await fetchActions();

    if ('error' in response) {
        console.error(response.error);
        return (
            <main>
                <div>
                    <p>Error fetching actions: {response.error}</p>
                </div>
            </main>
        );
    }

    const actions: IActionResponse = response;

    console.log(actions);

    return (
        <div>Actions</div>
    )
}

export default Actions

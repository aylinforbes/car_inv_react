const token = 'a9d04db73ccc02b8d3a0d3a710373c9a7a14d0a676c7f621'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`http://127.0.0.1:5000/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

create: async (data: any = {}) => {
    const response = await fetch(`http://127.0.0.1:5000/api/cars`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
},

update: async (id: string, data:any = {}) => {
    const response = await fetch(`http://127.0.0.1:5000/api/cars/${id}`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to update data on the server')
    }

    return await response.json()
},

delete: async (id: string) => {
    const response = await fetch(`http://127.0.0.1:5000/api/cars/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },

    })

    if (!response.ok) {
        throw new Error('Failed to delete data from the server')
    }

    return;
},
}
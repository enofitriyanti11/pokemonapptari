import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header'

const IndexUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                console.log(response)
                setUser(response.data.data)
            }).catch(error => console.log(error))
    }, [])

    const arrUser = user.map((data) => {
        return (
            <div key={data.id} className='flex flex-col items-center'>
                <p className='pb-1 font-semibold' >
                    {data?.first_name} {data?.last_name}
                </p>
                <img alt='' key={data?.avatar} src={data?.avatar} />
                <p className='pt-2'>{data?.email}</p>
            </div>

        );
    })

    return (
        <div>
            <Header />
            <div className='px-14 py-16 pb-20 sm:px-3'>
                <div className='bg-white/50  rounded-3xl shadow-2xl max-w-md mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl'>
                    <h1 className='text-xl md:text-3xl font-extrabold text-center text-slate-600 py-8'>Users</h1>
                    <div >
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:gap-9 gap-16 pb-12 px-10'>
                            {arrUser}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IndexUser
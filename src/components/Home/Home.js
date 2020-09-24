import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Gif from '../Gif/Gif'
import './Home.css'

export const Home = () => {
    const [gifs, setGifs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
            try {
                const results = await axios('https://api.giphy.com/v1/gifs/trending', {
                params: {
                    api_key: 'TrUHw69I7SUa2jtOnPFjkGPZwKoxqQw1'
                }
            });
            setGifs(results.data.data)
            console.log(results.data.data)             
        } catch (error) {
            console.log(error);
        }
    } 

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try{
            const searchUser = await axios.get(`https://api.giphy.com/v1/gifs/search` , {
                params: {
                    api_key: 'TrUHw69I7SUa2jtOnPFjkGPZwKoxqQw1',
                    q : searchTerm
                }
            })
            setGifs(searchUser.data.data)
            setSearchTerm('')

        }catch (error) {
            console.log(error);
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                <input value={searchTerm} onChange={handleOnChange} className='search' type='text' placeholder='Buscar...'/>
                </form>
            </header>

            <div className='gif-container'>
                {gifs.length > 0 && gifs.map(gif => <Gif key={gif.id} {...gif}/>)}
            </div>
        </>
    )
}

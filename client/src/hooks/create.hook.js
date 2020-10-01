import {useContext, useState} from 'react'
import useHttp from './http.hook';
import { AuthContext } from './../context/AuthContext';
import { useHistory } from 'react-router-dom';

export const useCreate = () => {
    const auth = useContext(AuthContext);
    const [link, setLink] = useState('');
    const {request} = useHttp();
    const history = useHistory();

    const submitHandler = async () => {
        try {
            const data = await request('/api/link/generate', 'POST', {to: link}, {
                Authorization: `Bearer ${auth.token}`
            });
            history.push(`/detail/${data.link._id}`)
        } catch (error) {
            
        }
    }

    return {
        input: {
            value: link,
            onChange: (e) => setLink(e.target.value)
        },
        submit: {
            onClick: () => submitHandler()
        }
    }
}

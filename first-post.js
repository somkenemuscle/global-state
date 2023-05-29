import {useContext} from 'react';
import {AppContext} from '@/context/data';


export default function FirstPost() {
    const [data, setData] = useContext(AppContext);

    console.log(data);

    return (
        <>
            <h1>Hello World!</h1>
        </>
    );
}
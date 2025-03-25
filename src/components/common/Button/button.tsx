import { getUsersAPI } from '@/services/api';
import { Button } from 'antd';
import { useEffect } from 'react';



const ButtonDefault = () => {
    useEffect(() => {
        const data = async () => {
            const res = await getUsersAPI();

            if (res) {
                console.log(res);
            }
        }
        data();
    }, [])


    return (
        <>
            <Button>Bấm vào đây</Button>
        </>
    )
};

export default ButtonDefault;
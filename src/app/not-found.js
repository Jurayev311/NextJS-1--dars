import React from 'react'
import { Button, Result } from 'antd';

const NotFound = () => {
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    )
}

export default NotFound
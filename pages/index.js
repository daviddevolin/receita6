import Movies from "./movies33";
import { Space } from 'antd'

export default function Homne (){
    return(
        <div>
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center' }}>
                <Movies/>
            </Space>
        </div>
    )
}
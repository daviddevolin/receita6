import { Space, Input, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
export default function Search(){
    const onClickHandler = (e) => {
        e.preventDefault() 
        const value = document.getElementById('inputFilme').value;
        window.location.href= `/searchmovies/${value}`
    }
    const onKeyEnter = (e) => {
        if(e.charCode === 13){
            const value = document.getElementById('inputFilme').value;
            window.location.href= `/searchmovies/${value}`
        } 
    }
    return(
        <div> 
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                <Input placeholder="digite o nome do filme"  id="inputFilme" onKeyPress={onKeyEnter}/>    
                <Button type='primary'  icon={<SearchOutlined />} onClick={onClickHandler} id='buttonInput'> pesquisar</Button>
            </Space>
            
        </div>
    )
    
}
import { Input, Button , Form, Card, Space} from "antd";
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import useSWR from "swr";
import "antd/dist/antd.css";
export default function Movies33(){  
    const [state, setState] = useState({title:'', year:''});
    const onFinish =()=>{
        const value = document.getElementById('inputFilme').value;
        const value2 = document.getElementById('yearFilme').value;
        if (state.title === '') {
            setState({title:value,year:value2})
        }
        else{
            setState({title: state.title, year: state.year})
        }
        MovieSearch(value)
    }

    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 8,
        },
    };

    const formTailLayout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 8,
          offset: 4,
        },
    };
    return(
        <div>
            <Form form={form} name="dynamic_rule" onFinish={onFinish}>
                <Form.Item
                    {...formItemLayout}
                    name="tiltlefilm"
                    label="Title"
                    rules={[
                    {
                        required: true,
                        message: 'insira o título do filme',
                    },
                    ]}
                >
                    <Input 
                        placeholder="digite o título do filme"  
                        id="inputFilme" 
                    />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    name="yearfilme"
                    label="Year"
                    rules={[
                    {
                        required: true,
                        message: 'insira o ano do filme',
                    },
                    ]}
                >
                    <Input 
                        placeholder="digite o ano do filme"  
                        id="yearFilme" 
                    />
                </Form.Item>


                <Form.Item {...formTailLayout}>
                <Button 
                    type='primary'  
                    icon={<SearchOutlined />}
                    htmlType="submit" 
                    id='buttonInput'> pesquisar
                </Button>
                </Form.Item>
            </Form>
            <MovieSearch title={state.title} year={state.year} />
        </div>
    )
    
}

export  function MovieSearch({title,year}){

    const t=title;
    const y= year;
    if(t){
        const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=5d61b462&s=${t}&y=${y}`, fetcher)
        const { Meta } = Card;
        console.log(data)
        if (error) return <div>falha na requisição...</div>
        if (!data) return <div>carregando...</div>
        if (data.Response=="False")return<div>filme não encontrado...</div>
        console.log(data)
        return (
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', flexWrap:'wrap'}}>
                {data.Search.map((m) => (
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img src={m.Poster}/>}
                    >
                        <Meta  title={m.Title} description={m.Year} />
                    </Card>
                ))} 
            </Space>     
        ) 
    }   
  }

  async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }
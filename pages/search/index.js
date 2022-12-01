import { Space, Input, Button , Form} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
export default function Search(){   
    const onFinish =()=>{
        const value = document.getElementById('inputFilme').value;
        window.location.href= `/searchmovies/${value}`
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
                    name="username"
                    label="Name"
                    rules={[
                    {
                        required: true,
                        message: 'insira o nome do filme',
                    },
                    ]}
                >
                    <Input 
                        placeholder="digite o nome do filme"  
                        id="inputFilme" 
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
        </div>
    )
    
}
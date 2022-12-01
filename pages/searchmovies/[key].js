import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Card, Space} from 'antd';
import "antd/dist/antd.css";


export default function MovieSearch(){
    const router = useRouter()
    const {key} = router.query
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=5d61b462&s=${key}`, fetcher)
    const { Meta } = Card;

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

  async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }
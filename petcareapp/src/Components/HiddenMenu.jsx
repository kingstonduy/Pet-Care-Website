import { Avatar, Button, List,  } from 'antd';
import { useEffect, useState } from 'react';
import { apiClient } from './apiClient/Axios';

const count = 1;


const HiddenMenu = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);



    useEffect(() => {
        apiClient.get('/users/duy/orederedProducts')
        .then((res) => {
            setInitLoading(false);
            setData(res.data);
            setList(res.data.slice(0, count)); // Initialize the list with the first three items
            console.log(res.data);      
        });
    }, []);

    const onLoadMore = () => {
        // setLoading(true);
        // setList(
        //     data.concat(
        //         [...new Array(count)].map(() => ({
        //         loading: true,
        //         orderedProductDTOProductName: {},
        //         orderedProductId: {},
        //         })),
        //     ),
        // );
        // apiClient.get('/users/duy/orederedProducts')
        // .then((res) => {
        // const newData = data.concat(res.data); // Use res.data instead of res.results
        // setData(newData);
        // setList(newData);
        // setLoading(false);
        // window.dispatchEvent(new Event('resize'));
        // });
        setLoading(true);
        const nextItems = data.slice(list.length, list.length + 3); // Get the next three items
        setList((prevList) => [...prevList, ...nextItems]); // Append the next items to the current list
        setLoading(false);
        if (list.length + count >= data.length) {
            // Check if all items have been loaded
            setList((prevList) => [...prevList, ...nextItems]);
            setLoading(false);
        }
    };
    const loadMore =
    !initLoading && !loading && list.length < data.length ? (
        <div
            style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
            }}
        >
            <Button onClick={onLoadMore}>Load More</Button>
        </div>
    ) : null;

        
    return(
        <List
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            renderItem={(item, index) => {
            console.log(item); // Add console.log statement here
            return (
                <List.Item>
                    <div className="">{JSON.stringify(item.orderedProductId)}</div>
                </List.Item>
            );
            }}
        />
    )

    
    
}

export default HiddenMenu;

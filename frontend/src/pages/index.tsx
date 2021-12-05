import { useRequest } from 'umi';
import { Table }  from 'antd';
import styles from './index.less';


export default function IndexPage() {
  const init = useRequest("/api/test");

  if(init.loading || init.error || init.data == undefined){
    return (<h1>Error</h1>)
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height"
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight"
    }
  ]
  return (
    <div>
      <h1 className={styles.title}>My Meta Family</h1>
      < Table dataSource={init.data} columns={columns} bordered/>
    </div>
  );
}

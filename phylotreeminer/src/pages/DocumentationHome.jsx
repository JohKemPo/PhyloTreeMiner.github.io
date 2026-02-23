import { Layout } from 'antd';
import WokflowDocsHome from './docs/WokflowDocsHome';
import AppAppBar from './componentsHomepage/appBar';
const { Content } = Layout;


const DocumentationHome = () => {
  return (
    <Layout>
      <Content style={{
        padding: '24px', 
        backgroundColor: "#ffffff", 
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center' }}>

        <AppAppBar />
        <WokflowDocsHome/>
          
      </Content>
    </Layout>
  );
};

export default DocumentationHome;
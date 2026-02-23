import {
    Layout
} from 'antd';

const { Content } = Layout;

import AppAppBar from './componentsHomepage/appBar';
import Hero from './componentsHomepage/hero';
import Highlights from './componentsHomepage/highlights';
import Features from './componentsHomepage/features';
import FooterComponent from './componentsHomepage/footer';

import Divider from '@mui/material/Divider';


const HomePage = () => {

    return (
        <div>

            <Layout style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
                

                <AppAppBar />
                <Hero />
                <Content id='highlights' style={{ padding: '50px', backgroundColor: '#EEFAFF00' }}>

                    
                    <div id="features" style={{

                    }}>
                       
                        <Highlights />
                    </div>
                </Content>
                    <Features />

                    <Divider />
                <Divider />

                <FooterComponent />
            </Layout>
        </div>
    );
};

export default HomePage;
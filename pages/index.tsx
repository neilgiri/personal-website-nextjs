import {NextPage} from 'next';

import About from '../components/About';
import PublicationList from '../components/PublicationList';
import Teaching from '../components/Teaching';
import Education from '../components/Education';
import PreprintList from '../components/PreprintList';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <PublicationList/>
        <PreprintList/>
        <Teaching/>
        <Education/>
    </>
);

export default Index;

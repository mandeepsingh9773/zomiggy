import {useContext} from 'react';
import { MyContext } from '../../DataContext';


const About = () => {
  const contextValue = useContext(MyContext);
  console.log(contextValue);
  return <h1>About Us</h1>;
};

export default About;

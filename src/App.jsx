import Header from './Firstpage.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Buttons from './inlinecss.jsx'
import Student from './Studentprops.jsx'
import Employee from './ConditionalRendering.jsx'
import Age from './Age_rendering.jsx'
import Rendering from './Conditional_Rendering.jsx'
import Rendering_list from './Rendering_list.jsx'
import List from './RenderingList2.jsx'
import CalorieCheck from './Conditionalrendeing_filtering_list.jsx'
function App() {
  return (
    <>template tag
    <Header/>
   <Footer/>
   <Food/>
   <Card/>
   <Card/>
   <Card/>
   <Button/>
   <Buttons/>
   <Student name="krishu" age={23} Isstudent={true}/>
      <Student name="saki" age={21} Isstudent={false}/>
      <Student />

    <Employee isloggedin={true} username="Jimmy"/>
    <Age number={21}/>
    <Age />
    <Rendering name="krishala" isloggedin={true}/>
    <Rendering_list/>
    <List/>
    <CalorieCheck/>
   </>

  );
  
}

export default App;

import Header from './Firstpage.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Buttons from './inlinecss.jsx'
import Student from './Studentprops.jsx'
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

   </>

  );
  
}

export default App;

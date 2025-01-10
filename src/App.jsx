import Student from './Student.jsx'

function App() {
 
  return(
    <>
       <Student name ="Spongebob" age={30} isStudent={true}/>
       <Student name ="Patrick" age={42} isStudent={false}/>
       <Student name ="MrCrabs" age={54} isStudent={false}/>
       <Student name ="Sandy" age={27} isStudent={true}/>
       <Student />
    </>
  
  );
}

export default App

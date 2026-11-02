const express =require('express')

const server = express();

server.use(express.json())

const students =[]



server.get('/',(request,response)=>{
    response.send('server is working fine')
})


server.post('/api/student/create',(request,response)=>{
    console.log(request.body);

    students.push(request.body);
    
    const data ={
        _status : true,
        _message : 'Record Created Successfully',
        _data :{}
    }
    return response.send(data);
})



const PORT=5000
server.listen(PORT,()=>{
    console.log(`Server is working fine on port ${PORT}`);
    
})
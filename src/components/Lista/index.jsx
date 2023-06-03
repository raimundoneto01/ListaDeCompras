import { Button, ContainerScrol, Header, Row, TextInput, Texth4,  } from "../../theme";
import 'boxicons';
import { useState } from "react";
import Title from "../Title/Title";
import Alert from "../Alert/Alert";

const Lista =()=>{

    const [Lista, setlista] = useState([]);
    const [Item, setItem] = useState('');

    const deletarItem = (fruta)=>{
        setlista(Lista.filter(cadaFruta => cadaFruta !=fruta));
    }
    return(
        <>
        <Header>
            <Title titulo = 'Lista de Compras'/>
            
            <Row >
               
               <TextInput className="w100" type="text" 
               value={Item}
               placeholder="Digite o Produto" 
               onChange={(e)=>setItem(e.target.value)}
               />
               <Button  onClick={()=>{setlista([...Lista, Item]);
                 setItem('');}}>

               <box-icon name='plus-circle' color='white'></box-icon>
               </Button>
               
           </Row>
        </Header>

    

        <ContainerScrol>
            {
                Lista.map((item, key)=>(
                    <Row key={key} className="list-item">
               <Texth4>{item}</Texth4>
               <Button onClick={()=>deletarItem(item)}>
               <box-icon name='trash' color='white'></box-icon>
               </Button>
           </Row>
                ))
            }
        </ContainerScrol>
            <Alert/>
        </>
    );
};

export default Lista;
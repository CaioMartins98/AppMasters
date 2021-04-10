import React, { useState } from 'react';
import {Formik} from 'formik';

import Loading from '../Loading';
import * as Yup from 'yup';

import MessageOk from '../MessageOk';
import MessageError from '../MessageError';


import {Container,
        Button,
        Input, 
        Label, 
        StyledErrorMessage, 
        ContainerForm} from './styles';


const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Nome muito curto').required('* Nome obrigatório'),
  email: Yup.string().email('Email inválido!').required('* Email obrigatório'),
  phone: Yup.string().min(10).required('*Telefone obrigatório'),
  addressZip: Yup.string().required('*CEP obrigatório'),
  addressNumber: Yup.number().min(1).required('*Número obrigatório'),
  addressComplement: Yup.string().required('*Complemento obrigatório'),
  addressStreet: Yup.string().required('*Logradouro obrigatório'),
  addressDistrict: Yup.string().required('*Bairro obrigatório'),
  addressCity: Yup.string().required('*Cidade obrigatório'),
  addressState:Yup.string().required('*Estado obrigatório')
})




const StickerForm = () => {
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');

  
function handleSubmit(data) {
  console.log(data);
    setLoading(true);
    
      fetch('https://simple-api-selection.herokuapp.com/submit/',{
      method:'POST', 
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        addressZip: data.addressZip,
        addressStreet: data.addressStreet,
        addressNumber: data.addressNumber,
        addressComplement: data.addressComplement,
        addressDistrict: data.addressDistrict,
        addressCity: data.addressCity,
        addressState: data.addressState


      })}
      )
    .then((res)=> {
      setLoading(false);

      if(res.status === 200){
        setMessage('Success');
      }
      if(res.status === 400){
        setMessage('Error');
      }
    }).catch(err => {
      console.log(err);
      setLoading(false);
    })

  }

  const onBlurCep = (event, setFieldValue) =>{

    const { value } = event.target;
    const cep = value;
    

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((res) => res.json())
      .then((data) => {
        setFieldValue('addressStreet', data.logradouro);
        setFieldValue('addressDistrict', data.bairro);
        setFieldValue('addressCity', data.localidade);
        setFieldValue('addressState', data.uf)}
        )
        .catch((error)=> console.log(error));

      ;
  }
 
  return (
    
    <Container>
       
      {!loading && message === 'Success' && <MessageOk />}
      {loading && !message ? (<Loading/> ) : (
          <Formik
          validationSchema={schema}
          onSubmit={(values, actions) =>{
            handleSubmit(values);
           
          }}
          initialValues={{
            name: '',
            email: '',
            phone: '',
            addressZip: '',
            addressStreet: '',
            addressNumber: '',
            addressComplement: '',
            addressDistrict:'',
            addressCity: '',
            addressState: ''
          }}
         >
          
           {({setFieldValue}) => (
             
            <ContainerForm>
              {!loading && message === 'Error' && <MessageError />}
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input name="name" id="name"  type="text"/>
               
               <StyledErrorMessage component="span" name="name" />
               </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" type="email" />
               
               <StyledErrorMessage component="span" name="email" />
               </div>
              <div>
                <Label>Telefone</Label>
                <Input
                  name="phone"
                  id="phone"
                type="text" 
                maxLength='11'
                placeholder='(__)_____-____'
                />
              
              <StyledErrorMessage component="span" name="phone" />
              </div>
               
                <div>
                <Label>CEP</Label>
                <Input name="addressZip"
                        id="addressZip"
                        type="text"
                        maxLength='8'
                        placeholder='_____-___'
                        onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                        /> 
                 
                <StyledErrorMessage component="span" name="addressZip" />
                </div > 
                <div>
                <Label>Logradouro</Label>
                <Input name="addressStreet"
                      type="text" 
                      style= {{Input}} />
                
                <StyledErrorMessage component="span" name="addressStreet" />
                </div>
                <div>
                <Label>Número</Label>
                <Input name="addressNumber"  type="number" />
                
                <StyledErrorMessage component="span" name="addressNumber" />
                </div>
                <div>
                <Label>Complemento</Label>
                <Input name="addressComplement"  type="text" />
                
                <StyledErrorMessage component="span" name="addressComplement" />
                </div >
                <div>
                <Label>Bairro</Label>
                <Input name="addressDistrict"  type="text" />
               
                <StyledErrorMessage component="span" name="addressDistrict" />
                </div>
                <div>
                <Label>Cidade</Label>
                <Input name="addressCity"  type="text" />
                
                <StyledErrorMessage component="span" name="addressCity" />
                </div>
                <div>
                <Label>Estado</Label>
                <Input name="addressState" type="text" />
                
                <StyledErrorMessage component="span" name="addressState" />
                </div>
                <div>  
                  <Button> 
                    <button type="submit">Enviar</button>
                  </Button>
                </div>
                
            
            </ContainerForm>
            
            
          )}
           </Formik>
       )}
  
       
    </Container>

  )
       
}

export default StickerForm;

import { Container, Typography ,Button,Dialog,DialogTitle,DialogContent,TextField,DialogActions,Radio,} from '@mui/material';
import { pink } from '@mui/material/colors';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import Grid from '@mui/material/Grid2';
import { useEffect, useState ,Fragment } from 'react';
import Data from './AccountBtn';
import useFetch from '../hooks/useFetch';
import Divider from '@mui/material/Divider';
import AccounitnList from './AccountingList';
import axios from 'axios';
export default   function Acounting (){
  const [openAdd, setOpenAdd] = useState(false);
  const [edit, setEdit] = useState(false)
  const [selectedValue, setSelectedValue] = useState('a');
  const [id ,setId] = useState('1')
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const handleClose = () => {
    setOpenAdd(false);
    setEdit(false)
  };
const [btn, setBtn]= useState(true)
const [titles , setTitles]=useState('')
const [color,setColor]=useState('')
const data = useFetch('http://localhost:4000/accounting');
useEffect(()=>{
  setTitles('کارت خوان')
   setColor('#FFF8F0')
},[])
    return(
      <>
        <Container maxWidth="xxl" sx={{margin:6,marginTop:8}} >
          <Grid container columnSpacing={2} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ fontSize: '12px' }}
          size={11.6}
        >
          <Grid columnSpacing={1}>
          <Typography variant='h4' >
            <StarsOutlinedIcon  />حساب های تفصیلی
            </Typography>
          </Grid>
            <Grid>
            <Button
            onClick={()=>setOpenAdd(true)}
            color='custome'  sx={{
                width:200,
                height:50,
                fontSize:25,
                background:'#702963	',
                color:'white',
                '&:hover':{
                    background:'#C3B1E1	',
                    color:'white'
                }
            }}>افزودن گروه تفصیلی</Button>
                        <Button  variant='outlined'
                        onClick={()=>setEdit(true)}
                        sx={{
                width:150,
                height:50,
                fontSize:25,
                color:'black',
                borderColor:'black',
                marginRight:1,
                background:'#ffff	',
            }}>ویرایش</Button>
            <Button 
            onClick={(e=>{
              fetch('http://localhost:4000/accounting/'+id,{
                method:"DELETE",
                redirect:'follow'
              })    .then(response => {
                window.location.reload()
            })
              
            })}
            disabled={btn}
            variant='outlined' sx={{
                width:150,
                height:50,
                fontSize:25,
                color:'black',
                borderColor:'black',
                marginRight:1,
                background:'#ffff	',
            }}>حذف</Button>
                  
           </Grid>
          </Grid>
          <Container maxWidth="xxl" sx={{margin:6,marginTop:8}} >
            {data.isPending &&  <p>loadoing...</p> }
          {data.data && <Data setColor={setColor} setId={setId} set setTitles={setTitles} setBtn={setBtn} prop={data.data} 
          />            
          }
          {
            data.data && <AccounitnList color={color} titles={titles}  prop={data.data} />
          }
          </Container>
          </Grid>
        </Container>
        <>
        <Dialog
          open={openAdd}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (e) => {
              e.preventDefault();
              fetch('http://localhost:4000/accounting',{
                method:"POST",
                body:JSON.stringify({
                  name:e.target[0].value,
                  code:e.target[2].value,
                  color:selectedValue,
                  list:[]
                })
              }).then(res=>{
                handleClose();
                window.location.reload()
              })
            },
          }}
        >
          <DialogTitle>افزودن 
          گروه تفصیلی
          </DialogTitle>
          <Divider  variant="middle" sx={{ bgcolor: "black" }} />
          
          <DialogContent columnSpacing={2}>
            <div sx={{
              marginTop:1
            }}>
        <TextField required  sx={{width:315}} label="افزودن گروه تفصیلی" id="outlined-size-normal" defaultValue="" />
      </div>
      <div sx={{
              marginTop:2
            }}>
        <TextField  required margin='2' sx={{width :150,marginTop:2,marginLeft:2}} label="از کد" id="outlined-size-normal" defaultValue="" />
        <TextField  required sx={{width :150,marginTop:2,marginLeft:2}} label="تا کد" id="outlined-size-normal" defaultValue="" />

        
      </div>          
        <div sx={{
              marginTop:2
            }}>
                  
      <Radio value={'#7FD8BE'} {...controlProps('#7FD8BE')} />
      <Radio         sx={{
          color:'blue',
          '&.Mui-checked': {
            color:'blue',
          },
        }} value={'perple'} {...controlProps('#392F5A')} color="secondary" />
      <Radio
      value={'green'}
              sx={{
                color: 'green',
                '&.Mui-checked': {
                  color:'green',
                },
              }}
      {...controlProps('#BEE7B8')} color="success"  />
      <Radio 
      value={'gray'}
              sx={{
                color:'gray',
                '&.Mui-checked': {
                  color:'gray',
                },
              }}{...controlProps('#D9BBF9')} color="default" />
      <Radio
      value={'pink'}
        {...controlProps('#F4A698')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
      </div>
      
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>انصراف</Button>
            <Button type="submit">تایید</Button>
          </DialogActions>
        </Dialog>
      </>
      <Dialog
          open={edit}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (e) => {
              e.preventDefault();
              axios.patch('http://localhost:4000/accounting/'+id,{
                code:e.target[1].value
              })    .then(response => {
            }).then(res=>{
                handleClose();
              })
            },
          }}
      >

          <DialogTitle>ویرایش 
          گروه تفصیلی
          </DialogTitle>
          <Divider  variant="middle" sx={{ bgcolor: "black" }} />
          
          <DialogContent columnSpacing={2}>
            <div sx={{
              marginTop:1
            }}>
        <TextField disabled  sx={{width:315}} label={titles} id="outlined-size-normal" defaultValue="" />
      </div>
      <div sx={{
              marginTop:2
            }}>
        <TextField required margin='2' sx={{width :150,marginTop:2,marginLeft:2}} label="از کد" id="outlined-size-normal" defaultValue="" />
        <TextField required sx={{width :150,marginTop:2,marginLeft:2}} label="تا کد" id="outlined-size-normal" defaultValue="" />
        </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>انصراف</Button>
            <Button type="submit">تایید</Button>
          </DialogActions>
      </Dialog>
      </>
    )
}
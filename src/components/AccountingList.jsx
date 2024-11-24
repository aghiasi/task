import React, { useEffect, useState } from 'react';
import {Paper,Table,TableHead,TableCell,TableRow,TableBody,Container,Box,Grid,Typography,Button,Toolbar,Checkbox
  ,Dialog
  ,DialogTitle
  ,Divider
  ,DialogContent
  ,TextField
  ,DialogActions
} from '@mui/material'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function ListTable({prop,titles,color}) {
    const [listId ,setListId]= useState('')
    const [open,setOpen] = useState(false)
    const handleClose =()=>{
      setOpen(false)
    }
    useEffect(()=>{
        prop.map(i=>{
    
        })
    })
  return (
    <>
    <Paper sx={{marginTop:5, border:{
        size:0.01
    },
        borderRadius:2
    }} >
              <Toolbar
                      sx={{
                        background:`${color}`,
                        borderRadius:2
                    }}
      
      >
        
          <Box width={4/4}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  borderRadius: 1,
                }}
          >
            <Typography sx={{
              width:3/4
            }} variant="h6" id="tableTitle">
              {titles}
            </Typography>
            <Button
              onClick={()=>{
                setOpen(true)
              }}
              variant='outlined' sx={{
        
    width:150,
    height:50,
    fontSize:25,
    color:'black',
    background:'#F0F0F',


              }}>افزودن</Button>
            </Box>
        
      </Toolbar>

      <Table >
        <TableHead sx={{
            
        }}>
          <TableRow sx={{
            marginRight:0
          }}>
            <TableCell> </TableCell>
            <TableCell align="right">ردیف</TableCell>
            <TableCell align="right">کد</TableCell>
            <TableCell align="right">عنوان</TableCell>
            <TableCell align="right">
                حساب بانکی
            </TableCell>
            <TableCell align="right">شماره ترمینال</TableCell>
            <TableCell align="right">ارز</TableCell>
            <TableCell align="right">فعال</TableCell>
            <TableCell align="right">عملیات</TableCell>
          </TableRow>
        </TableHead>
        {
            prop.map((i)=>{
                if(i.name == titles){
                    return(
                        i.list.map(i=>{
                            return(
                                <TableBody>
                                <TableRow>
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell align="right">{i.id}</TableCell>
                                <TableCell align="right">{i.code}</TableCell>
                                <TableCell align="right">{i.title}</TableCell>
                                <TableCell align="right">{i.bank}</TableCell>
                                <TableCell align="right">{i.terminal}</TableCell>
                                <TableCell align="right">{i.forex}</TableCell>
                                <TableCell align="right">{i.activ &&  <Checkbox {...label} disabled checked />
                                    }{
                                        !i.activ &&       <Checkbox {...label} disabled  />

                                    }
                                    </TableCell>
                                <Button>حذف</Button>
                              </TableRow>
                              </TableBody>
                            )
                        }))

                    }}

                    )
                }

      </Table>
    </Paper>
    <Dialog
          width='xl'
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (e) => {
              e.preventDefault()
              }   
          }}
      >

          <DialogTitle>
          افزودن  {titles}  
          </DialogTitle>
          <Divider  variant="middle" sx={{ bgcolor: "black" }} />
          
          <DialogContent>

        <TextField   sx={{width:300}} label={titles} id="outlined-size-normal" defaultValue="" />
      
      <div sx={{
              marginTop:2
            }}>
        <TextField required margin='2' sx={{width :300,marginTop:2,marginLeft:2}} label="از کد" id="outlined-size-normal" defaultValue="" />
        <TextField required sx={{width :300,marginTop:2,marginLeft:2}} label="تا کد" id="outlined-size-normal" defaultValue="" />
        </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>انصراف</Button>
            <Button type="submit">تایید</Button>
          </DialogActions>
      </Dialog>
    </>
    
  );
}
export default ListTable;



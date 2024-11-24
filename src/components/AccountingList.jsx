import React, { useEffect } from 'react';
import {Paper,Table,TableHead,TableCell,TableRow,TableBody,Container,Grid,Typography,Button,Toolbar,Checkbox} from '@mui/material'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function ListTable({prop,titles,color}) {
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
        <Grid container width={4/4} columnSpacing={200}

        >
            <Typography variant="h6" id="tableTitle">
              {titles}
              <span><Button variant='outlined' sx={{marginRight:110,
    width:150,
    height:50,
    fontSize:25,
    color:'black',
    background:'#F0F0F',


              }}>افزودن</Button></span>

            </Typography>
        </Grid>
        
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
    </>
    
  );
}
export default ListTable;



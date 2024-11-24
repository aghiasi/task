import { useEffect, useState } from "react"
import { Button } from "@mui/material"

export default function Data ({prop,setBtn,setTitles,setColor,setId}){
    return(
        <>
            {prop.map(i=>{
                return(
                    <Button 
                    key={i.id}
                    onClick={()=>{
                        switch(i.name){
                            case 'صندوق':
                                setBtn(true)
                                break
                            case 'کارت خوان':
                                setBtn(true)
                                break
                            case 'حساب بانکی':
                                setBtn(true)
                                break
                            case 'مرکز هزینه':
                                setBtn(true)
                                break
                            case 'طرف مقابل':
                                setBtn(true)
                                break
                            default:
                                setBtn(false)
                                break
                        }
                        setTitles(i.name)
                        setColor(i.color)
                        setId(i.id)   
                    }}
                    sx={{
                        width:150,
                        height:50,
                        fontSize:25,
                        color:'black',
                        background:`${i.color}`,
                        marginRight:1,
                    }}>{i.name}</Button>
                )
            })}
        </>
    )
}
import React from 'react'
import {useState,useEffect} from 'react'
import { ChromePicker } from 'react-color';

import { UpdateColorsProject,UpdateFontsProject } from '../../redux/actions/projectActions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'



function Styles() {

    const dispatch = useDispatch()
    const { id } = useParams()

    const GetProjectDetailsReducer = useSelector(
        (state) => state.GetProjectDetailsReducer
    )
    const {
        project: projectDetails,
        loading: loadingProjectDetails,
        error,
    } = GetProjectDetailsReducer

        const [colorsState,setColorSt]=useState([])
        const [fontStyles,setFontStyles]=useState([])

        const [color,setColor]=useState('')
        const [hidden,setHidden]=useState(false)
        const [colTitle,setColTitle]=useState()
        const [hexId,setHexId]=useState()
        const [rowIndex,setRowIndex]=useState()


   const handleValidateCol=()=>{
    console.log('---------------',JSON.stringify(fontStyles));
    dispatch(UpdateColorsProject(id,colorsState))
   }

   const handleValidateFonts=()=>{
    dispatch(UpdateFontsProject(id,fontStyles))
   }

   const handleFontChange=(newFont,t)=>{
       let newFontStyles=fontStyles.map((f)=>{
               if(f.title==t)return {...f,
                [newFont.target.name]:newFont.target.value}
               return f;
       })
       
       setFontStyles(newFontStyles)
       
   }




    const preciseColorCercle=(colTitle,hexId,rowIndex)=>{
        setHidden(true)
        let initColor;
        colorsState[rowIndex].hexs.map((hx)=>{

               if(hx.id==hexId)  initColor=hx.hexCode;

        })
        setColor(initColor)
        setColTitle(colTitle)
        setHexId(hexId)
        setRowIndex(rowIndex)
    }

    const showPicker=()=>{
      
        let resColorHexs=colorsState[rowIndex].hexs.map((hex)=>{

           if(hex.id===hexId){
              return {...hex,hexCode:color}
           }

           return hex;
        })


        let newState=colorsState.map((colorObj)=>{
            if(colorObj.title==colTitle){

                return {...colorObj,hexs:resColorHexs}
            }

               return colorObj;

        }) 

        setColorSt(newState)

    }



    useEffect(()=>{
        if(color.length){
        showPicker();
       }
    },[color])

    
    useEffect(()=>{
        if (!loadingProjectDetails){
    
            setColorSt(projectDetails.projectColors)
            setFontStyles(projectDetails.projectFonts)

            
    }
    },[loadingProjectDetails])
            


  return (
 
      
    <div className=' w-[400px] ml-5 '>

        
         <div>
         {hidden &&
          <div className="z-10 max-w-max absolute left-[940px] mt-16">

               <strong class="text-xl z-20 absolute left-2  align-center cursor-pointer alert-del"
               onClick={()=>setHidden(false)}
                    >&times;
                </strong>

                <ChromePicker color={color}
                   onChange={(updatedColor)=>setColor(updatedColor.hex)}
                  />
          </div>
              }
    
    <div  className="glass  rounded-lg  h-[440px]  w-[350px] p-0 ">
                   
    <div className='mt-4 pt-2'>
        <span className="text-[2em] font-semibold text-[#EEEEEF]  pl-4 mb-2">Colors</span>
    </div>

    {!loadingProjectDetails && colorsState?.map((col,index)=>{
    
    
    
    return (<div key={index}>
    
            <div>
                <span className="text-[1em] font-semibold text-[#EEEEEF] pl-5">{col.title}</span>
            </div>

            <div className="grid grid-cols-1">
        
                    <div className="grid grid-cols-3 w-[200px]  mt-4 ml-[90px] mb-6 ">
                            
                        
                            {col.hexs.map((item,i)=>{
                        
                        
                        return (<div className="rounded-full bg-white h-10 w-10 cursor-pointer focus:border-2"
                            tabindex="1"
                            key={i}
                            style={{backgroundColor:item.hexCode}}
                            onClick={()=>preciseColorCercle(col.title,item.id,index)} >

                            </div>)

                            })}
                            
                        
                    </div>
                

            </div>
            </div>)
            })}
            <div className="text-center">  
                    <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleValidateCol}>
                    validate
                    </button>
            </div> 

            </div>



                <div className="glass  rounded-lg  h-[300px]  w-[350px] p-0 mt-6  font-semibold text-[#EEEEEF] ">

                        <div className='mt-4 pt-2'>
                                <span className="text-[1.8em] pl-4">Typography</span>
                        </div>


                    {!loadingProjectDetails && fontStyles?.map((fontsRow)=>{

                        return( <div className="grid grid-cols-3 gap-x-2 ">
                                <div className="mt-6 ml-5  w-[70px]">
                                    <span className="text-[1.1em]">{fontsRow.title}</span>
                                </div>

                                <div className="mt-2 ml-5 w-[150px]">
                                
                                <input
                                        className="rounded-lg bg-white mt-2 p-2 w-[110px] text-gray-900 text-center
                                      focus:border-blue-500  focus:outline-none "
                                        type="text"
                                        name="font"
                                        id="font"
                                        value={fontsRow.font}
                                        onChange={(e)=>handleFontChange(e,fontsRow.title)}
                                    
                                        
                                    />
                                    
                                </div>

                                <div className="mt-2 ml-8  w-[80px]">

                                <input
                                        className="rounded-lg bg-white mt-2 p-2 w-[50px] text-gray-900 text-center  focus:border-blue-500  focus:outline-none "
                                        type="text"
                                        name="size"
                                    
                                        id="size"
                                        value={fontsRow.size}
                                        onChange={(e)=>handleFontChange(e,fontsRow.title)}

                                        
                                    />

                                    
                                </div>


                        </div>)
            })}

               <div className="text-center mt-3">  
                        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleValidateFonts}>
                        validate
                        </button>
                </div> 
        </div >
        </div>

           
</div>
  )
}

export default Styles;
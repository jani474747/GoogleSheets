import TableData from './TableData'
import React from 'react'

const Data = ({data}) => {
    return data.map((tableData,index)=>(
                        <TableData tableData={tableData} key={index+1}
                            index={index+1}
                        />
                    ))
        }


export default Data
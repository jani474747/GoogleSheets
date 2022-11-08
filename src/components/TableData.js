import React from 'react'

const TableData = (tableData,index) => {
  return (
    <div>
        <tr>
            <th>{index}</th>
            <th>{tableData.name}</th>
            <th>{tableData.email}</th>
            <th>{tableData.mobile}</th>
            <th>{tableData.address}</th>
            <th>{tableData.country}</th>
        </tr>

    </div>
  )
}

export default TableData
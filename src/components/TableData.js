import React from 'react'
import { Placeholder } from 'semantic-ui-react'

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
           { !name&&!email&&!mobile&&!address&&!country == null ? Placeholder = 'false' : <th>{tableData.Status}</th>}
           { !name&&!email&&!mobile&&!address&&!country == null ? Placeholder = 'Error' : <th>{tableData.error}</th>}
        </tr>

    </div>
  )
}

export default TableData
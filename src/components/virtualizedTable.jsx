import React from 'react'
import { AutoSizer, Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css';


function VirtualizedTable({data}) {
    const rowHeight = 30;
  const columnWidth = 100;

  return (
    <AutoSizer>
        {({height, width})=>(
            <Table
            width={width}
            height={height}
            headerHeight={rowHeight}
            rowHeight={rowHeight}
            rowCount={data.length}
            rowGetter={({ index }) => data[index]}
            overscanRowCount={10} // Number of rows to render outside of the visible area
          >
            {/* Define columns */}
            <Column
              dataKey="column1"
              label="Column 1"
              width={columnWidth}
            />
            <Column
              dataKey="column2"
              label="Column 2"
              width={columnWidth}
            />
            {/* Add more columns as needed */}
          </Table>
        )}
    </AutoSizer>

  )
}

export default VirtualizedTable
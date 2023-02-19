import React from 'react'

export interface TableProps {
    rows: Array<object>,
}

const Table: React.FC<TableProps> = ({ rows }) => {
    return (
        <table className="min-w-full divide-y divide-gray-300">
            <tbody className="divide-y divide-gray-200 bg-white">
                {
                    rows.map((row, index) => (
                        <tr className='even:bg-babyboo' key={"row" + index}>
                            {Object.entries(row).map(([key, value], index) => (
                                <th key={key + index}>
                                    {value}
                                </th>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
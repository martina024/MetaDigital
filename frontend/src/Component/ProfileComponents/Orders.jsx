import React from 'react'

const Order = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className='table-responsive'>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr className={"alert-success"}>
                    <td>
                        <a href="" className='link'>1</a>
                    </td>
                    <td>Paid</td>
                    <td>20 Jan 2023</td>
                    <td>$234</td>
                </tr>

                {/* cancel */}

                <tr className={"alert-danger"}>
                    <td><a href="/" className='link'>2</a></td>
                    <td> Not Paid</td>
                    <td>20 Jan 2023</td>
                    <td>$34</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order

import React from 'react'

const Order = () => {
  return (
    <div >
      <div >
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a href="" >1</a>
                    </td>
                    <td>Paid</td>
                    <td>20 Jan 2023</td>
                    <td>$234</td>
                </tr>

                {/* cancel */}

                <tr >
                    <td><a href="/" >2</a></td>
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

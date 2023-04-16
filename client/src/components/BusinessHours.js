import React from 'react';

const BusinessHours = () => 
{
    return (
        <table className="table table-bordered contactComponent">
            <thead>
                <tr className="text-center align-middle contactComponentHeading">
                    <th scope="col" colSpan="3">Business Hours</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="align-middle" scope="row" colSpan="2">Monday &#8209; Saturday</th>
                    <td className="align-middle text-end">7:00 A.M. &#8209; 10:00 P.M.</td>
                </tr>
                <tr>
                    <th className="align-middle" scope="row" colSpan="2">Sunday</th>
                    <td className="align-middle text-end">7:00 A.M. &#8209; 10:00 P.M.<br/>&#40;No pick ups, deliveries of 2 doz or more&#41;</td>
                </tr>
            </tbody>
        </table>
    )
}

export default BusinessHours;
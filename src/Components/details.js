import React from 'react';
function Details({contryDetail}) {
    return (
        <div>
            {contryDetail.map((item, key) =>
                <div className="info-conent" key={key} >
                  <p className="p-3 mb-2 bg-success text-white">active: {item.Active}</p>
                    <p className="p-3 mb-2 bg-info text-white">Confirmed: {item.Confirmed}</p>
                    <p className="p-3 mb-2 bg-warning text-dark" >Recovered: {item.Recovered}</p>
                    <p className="p-3 mb-2 bg-danger text-white" >Deaths: {item.Deaths}</p>
                </div>

            )}

        </div>
    )
}
export default Details;
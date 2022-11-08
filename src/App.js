import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import { Footer, Header } from './components';
import { gapiInit,gapi } from './utils';
// extraneous comment to trigger rebuild by github actions
import './App.scss';

function App() {
  const [sheets,setSheets] = useState([]);
  useEffect(()=>{
    (async ()=>{
      try{
        await gapiInit();
        const response = await gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1zZ_Fx_04kvd2CRpVKdSDIGdLk5yRUVmMHatYkug662M',
          range:['Projects']
        }).then(r => {
          const values = r.result.values;
          const headers = values.shift();
          return values.map(v => headers.reduce((m,h,i) => { return {...m,[h]:v[i]} },{}));
        });
        setSheets(response);
      }catch(err){
        console.error(err);
        return;
      }
    })();
  },[]);

  return (
      <>
      <Header />
      <main>
        <Outlet context={{sheets}} />
      </main>
      <Footer />
      </>
  );
}

export default App;

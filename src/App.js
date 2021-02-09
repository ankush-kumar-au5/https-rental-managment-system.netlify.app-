import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Catalog from './Components/CatalogList';

const intialState = { home:false, branches:[] }

export default () => {

    const [state, setState] = useState(intialState)
    
    return<>
        <Navbar setState={setState} />
        { state.home? <Catalog branches={state.branches} /> : <Home/> }
    </>
}
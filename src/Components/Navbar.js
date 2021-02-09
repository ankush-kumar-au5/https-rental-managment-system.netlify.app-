import React, {useState, memo} from 'react';
import {data} from './catalog (1).json';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const intialState = { home:false, branches:[] }
const {locations} = data

const Navbar = ({setState}) =>{

    //To store Branches name
    const [Branches, setBranches] = useState([])

    // To catch selected value from dropdown
    const getValue = e=> setState({ home:true, branches:JSON.parse(e) })

    // To clean Branches data
    const remove = ()=>setTimeout(()=>setBranches([]),200)
    
    
    return<>
        <div className='nav'>
        
            <Button variant="primary" onClick={()=>setState(intialState)}> RENTAL MANAGEMENT SYSTEM </Button>

            <div>
                <DropdownButton className='d-inline p-1' title="Locations" onSelect={getValue} onBlur={remove} onClick={remove} >
                    {locations.map(val=>
                        <Dropdown.Item key={val.name} eventKey={JSON.stringify(val.branches)} onMouseEnter={()=>setBranches(val.branches)}>
                            {val.name}
                        </Dropdown.Item>
                    )}
                </DropdownButton>
                
                <DropdownButton className='d-inline' title="Branches" onSelect={getValue} disabled show={Branches[0] && true} >
                    {Branches.map(val=>
                        <Dropdown.Item key={val.name} eventKey={JSON.stringify([val])}> 
                            {val.name} 
                        </Dropdown.Item>
                    )}
                </DropdownButton>
            </div>
        </div>
    </>
}

export default memo(Navbar)
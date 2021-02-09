import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const intialState = { name:'', images:[] }

export default ({branches}) =>{

    const [subCategory, setSubCategory] = useState(intialState)

    const openSubCategory = val=>setSubCategory({ name: val.name, images: val.subcategories })

    useEffect(()=>()=>setSubCategory(intialState),[branches])

    return <div className='container'>
    
        <Breadcrumb className='mt-5'>
        
            <Breadcrumb.Item onClick={()=>setSubCategory(intialState)} active={!subCategory.name && true}  >
                Equipment Catalog 
             </Breadcrumb.Item>

            {subCategory.name && <Breadcrumb.Item active > {subCategory.name} </Breadcrumb.Item>}

        </Breadcrumb>

        {!subCategory.name? 
        
            branches.map(val=>
                <div key={val.name}>
                    <p className='text-info font-italic font-weight-bold mt-5'> Branch - {val.name}</p>
                    <div  className='row'>
                        {val.categories.map(value=>
                            <div className="text-center col-3 mb-4" key={value.name}>
                                <Card className='cursor' onClick={()=>openSubCategory(value)}>
                                    <Card.Img variant="top" src={`/category/${value.image}`} alt='Oops! Image not found'/>
                                    <Button variant="info" block> {value.name} </Button>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            )
        :

            <div className='row'>
                {subCategory.images.map(value=>
                    <div className="text-center col-3 mb-4" key={value.name}>
                        <Card>
                            <Card.Img variant="top" src={`/category/subcategory/${value.image}`} alt='Oops! Image not found'/>
                            <Button variant="info" disabled block> {value.name} </Button>
                        </Card>
                    </div>
                )}
            </div>
        }
    </div>
}
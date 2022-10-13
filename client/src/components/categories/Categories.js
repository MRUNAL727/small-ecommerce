import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../../pages/Product';
import Products from '../../pages/Products'


const Categories = () => {

  const [category, setCategory] = useState('');

  const handleClick = (value) => {
    setCategory(value);
    
  }

  return (
    <div style={{width:'80%', margin:'20px auto', }}>

        <div style={{textAlign: 'center'}}><h2>Title xyz xyz xyz</h2></div>

        <div style={{display:'grid', gridTemplateColumns:'30% 30% 30%', gap:'50px', margin:'auto', width:'80%'}}>

           <Link to='/products' onClick={()=>handleClick("shoes")}
            style={{border:'1px solid #D3D3D3', boxShadow:'1px 1px #D3D3D3', borderRadius:4, backgroundColor:''}}>
            <h4 style={{textAlign:'center'}}>Shoes</h4>
            <img src='/shoes1.jpg' style={{width:'90%', margin:'0px auto 5% auto', display:'block'}} />
           </Link>
           {/* </div> */}

           <div style={{border:'1px solid #D3D3D3', boxShadow:'1px 1px #D3D3D3', borderRadius:4, backgroundColor:''}}>
            <h4 style={{textAlign:'center'}}>Shoes</h4>
            <img src='/dress.jpg' style={{width:'50%', margin:'0px auto 1% auto', display:'block'}} />
           </div>

           <div style={{border:'1px solid #D3D3D3', boxShadow:'1px 1px #D3D3D3', borderRadius:4, backgroundColor:''}}>
            <h4 style={{textAlign:'center'}}>Shoes</h4>
            <img src='/shoes1.jpg' style={{width:'90%', margin:'0px auto 5% auto', display:'block'}} />
           </div>

           <div style={{border:'1px solid #D3D3D3', boxShadow:'1px 1px #D3D3D3', borderRadius:4, backgroundColor:''}}>
            <h4 style={{textAlign:'center'}}>Shoes</h4>
            <img src='/shoes1.jpg' style={{width:'90%', margin:'0px auto 5% auto', display:'block'}} />
           </div>

           <div style={{border:'1px solid #D3D3D3', boxShadow:'1px 1px #D3D3D3', borderRadius:4, backgroundColor:''}}>
            <h4 style={{textAlign:'center'}}>Shoes</h4>
            <img src='/shoes1.jpg' style={{width:'90%', margin:'0px auto 5% auto', display:'block'}} />
           </div>

           <div style={{border:'1px solid #D3D3D3', boxShadow:'1px 1px #D3D3D3', borderRadius:4, backgroundColor:''}}>
            <h4 style={{textAlign:'center'}}>Shoes</h4>
            <img src='/shoes1.jpg' style={{width:'90%', margin:'0px auto 5% auto', display:'block'}} />
           </div>

        </div>

        {
           category ? <Products category={category} /> : ''
        }
    </div>
  )
}

export default Categories
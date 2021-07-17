import React from 'react';
import { connect } from 'dva';
import ProductList from '../../components/ProductList';

// const Products = ({ dispatch, products }) => {
//   function handleDelete(id) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     });
//   }
//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} products={products} />
//     </div>
//   );
// };

// // export default Products;
// export default connect(({ products }) => ({
//   products,
// }))(Products);


class Products extends React.Component{
  constructor(props){
      super(props)
  }
  handleDelete =(id)=>{
      this.props.dispatch({
          type: 'products/delete',
          payload: id,
      });
  }
  render(){
      return (
          <div>
              <h2>List of Products</h2>
              <ProductList onDelete={this.handleDelete.bind(this)} products={this.props.products} />
          </div>
        );
  }
}

const mapStateToProps = state =>{
  // console.log(state)
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Products)
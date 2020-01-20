import styled from 'styled-components'

export const CartItemStyles = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  .product-details {
    margin-left: 10px;
    @media screen and (min-width: 600px) {
      display: flex;
      align-items: center;
    }
  }
  .product-name {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 6px;
    @media screen and (min-width: 600px) {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
  .product-price {
    font-size: 0.84rem;
    font-weight: bold;
    text-align: right;
    display: block;
    margin-bottom: 0px;
  }
`

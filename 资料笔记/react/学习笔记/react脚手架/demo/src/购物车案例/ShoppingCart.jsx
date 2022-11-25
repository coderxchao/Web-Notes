import React from "react"
import "./shppingcart.css"
import { books } from "./books.js";
import { formatPrice } from "./formatUtils.js";
class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      books: books
    }
  }
  increase(index) {
    const newBooks = [...this.state.books]
    newBooks[index].count++;
    this.setState({
      books: newBooks
    })
  }
  decrease(index) {
    const newBooks = [...this.state.books]
    newBooks[index].count--;
    this.setState({
      books: newBooks
    })
  }
  delete(index) {
    const newBooks = [...this.state.books];
    newBooks.splice(index, 1);
    this.setState({
      books: newBooks
    })
  }

  getTotalPrice() {
    const total = this.state.books.reduce((pre, cur) => (pre + cur.price * cur.count), 0)
    return formatPrice(total)
  }

  render() {
    const { books } = this.state;
    if (books.length === 0) {
      return <h2>购物车没东西了</h2>
    }
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>名称</th>
              <th>价格</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map((book, index) => {
                return (
                  <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.name}</td>
                    <td>{formatPrice(book.price)}</td>
                    <td>
                      <button disabled={book.count <= 1} onClick={() => this.decrease(index)}>-</button>
                      {book.count}
                      <button onClick={() => this.increase(index)}>+</button>
                    </td>
                    <td>
                      <button onClick={() => this.delete(index)}>删除</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <h2>总价格：{this.getTotalPrice()}</h2>
      </div>
    )
  }
}

export default ShoppingCart

import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, onRemove }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <Link className="btn btn-primary" to={`/products/add`}>
            thêm
          </Link>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">tên sản phẩm</th>
            <th scope="col">ảnh</th>
            <th scope="col">giá sản phẩm</th>
            <th scope="col">mô tả</th>
            <th scope="col">hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button
                  onClick={() => {
                    onRemove(item.id);
                  }}
                  className="btn btn-danger"
                >
                  xóa
                </button>
                <Link
                  className="btn btn-primary"
                  to={`/products/${item.id}/edit`}
                >
                  cập nhật
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

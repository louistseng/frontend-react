// 此為食譜首頁-下方（分頁）功能內容區塊

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function Ddd() {
  return (
    <div>
      <Pagination>
        <Pagination.First />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

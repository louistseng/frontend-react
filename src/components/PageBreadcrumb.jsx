import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

export default function PageBreadcrumb({ pages }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <FaHome className="me-1 mb-1" />
        首頁
      </Breadcrumb.Item>
      {pages.map((page, i, a) => (
        // eslint-disable-next-line react/no-array-index-key
        <Breadcrumb.Item href={page.href} active={i === a.length - 1} key={i}>
          {page.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

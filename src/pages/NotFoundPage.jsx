import React from 'react';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <section className="page_404 ">
      <div className="row ">
        <div className="col-sm-12 ">
          <div className="container d-flex justify-content-center">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg" />
              <div className="contant_box_404 ">
                <h3 className="h2">
                  看起來您迷路了
                </h3>
                <p>您正在找的這個頁面並不存在!</p>
                <a href="/" className="link_404">回首頁</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

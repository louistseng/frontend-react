import React from 'react';

const linestyle = {
  background: '#707070',
  height: '5px',

};
const Textstyle = {
  color: '#D86652',
};

export default function Title({ title }) {
  return (

    <div className="mainTitle container my-5">
      <div className="title">
        <div className="row  align-items-center">
          <div className="col-lg" style={linestyle}> </div>
          <div className="col-lg text-center h2 " style={Textstyle}>{title}</div>
          <div className="col-lg" style={linestyle}> </div>
        </div>
      </div>
    </div>
  );
}

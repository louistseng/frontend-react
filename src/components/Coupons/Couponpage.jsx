import React, { useState } from 'react';
// import styled from 'styled-components';
import Confetti from 'react-confetti';
import ScratchCard from 'react-scratch-coupon';
import couponCover from './Cart.jpg';
import TpModal from './TpModal.jsx';

const Couponpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* <h1> 打造 Modal 共用組件 </h1> */}

      {/* 開起視窗按鈕 */}

      <div className="d-flex justify-content-center">
        <input type="button" value="按鈕" onClick={handleToggleModalShowUp} />
      </div>

      {/* 彈跳視窗 */}
      <TpModal
        title="今日折價券"
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <Confetti />
        {/* <ModalContent> */}
        <ScratchCard width={300} height={300} cover={couponCover}>
          <form className="form">
            <h2>哈囉!</h2>
            <h1><code>折價券序號 : KBNCHVNP</code></h1>
            <div>
              <input type="text" name="code" placeholder="Coupon Code" />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </ScratchCard>
        {/* </ModalContent> */}

        {/* <ModalFooter /> */}

      </TpModal>

    </>
  );
};

export default Couponpage;

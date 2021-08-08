/* eslint-disable max-len */
import React from 'react';
import PageBreadcrumb from '@/components/PageBreadcrumb.jsx';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutPage() {
  return (
    <div>
      <div className="banner">
        <img src="img/001.jpg" className="img-fluid w-100 h-50" alt="" />
      </div>
      <div className="container g-4">
        <div className="jaibam py-4">
          <PageBreadcrumb
            pages={[
              { title: '關於我們', href: '/about' },
            ]}
          />
        </div>
        <ScrollAnimation
          // delay={400}
          animateIn="animate__fadeInLeft"
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 my-4">
              <div className="col order-md-first order-sm-last animate__fadeInLeft  animate__fadeOutRight">
                <h2>新鮮美味，接單後嚴謹排程細心挑選</h2>
                <h4 className="my-4 lh-sm">
                  今晚來點（Nightorder）不斷的創新，致力於家庭、小資族、學生族群、任何喜愛煮飯族群，改頭換新，由傳統市場買菜的模式轉型為網路銷售及配送，產品線包含新鮮蔬菜、生鮮牛雞豬魚肉 、海鮮等，只要是廚房下廚的食材，我們通通都有。我們堅持以合理價位提供美味、健康、方便的產品，以豐富每個家庭的生活。
                </h4>
              </div>
              <div className="col order-md-last order-sm-first ">
                <img src="img/001.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          // delay={500}
          animateIn="animate__fadeInRight"
        >
          <div className="container py-4">
            <div className="row row-cols-1 row-cols-lg-2   my-4">
              <div className="col order-lg-last">
                <h2>做菜將是便利、簡單的事情</h2>
                <h4 className="my-4 lh-sm">
                  忙著出門上班，沒有時間挑選下廚的食材，在外面吃多了油膩的食物，在家總希望有新鮮食材可以烹煮料理。今晚來點提供了完整的食譜的服務，讓您輕鬆備妥料理的食材以及不用手忙腳亂，能夠按照步驟一步一步來，完成你心目中的食材。
                </h4>
              </div>
              <div className="col order-lg-first">
                <img src="img/002.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          // delay={600}
          animateIn="animate__fadeInLeft"
        >
          <div className="container">
            <div className="row  row-cols-1 row-cols-lg-2 my-4">
              <div className="col">
                <h2>今晚來點讓做菜變得如此的「輕鬆」</h2>
                <h4 className="my-4 lh-sm">
                  今晚來點是為了幫助大家買到最健康的新鮮食材，對於吃進口中的食物更有安全的感受而誕生的。當新鮮的蔬菜、肉類由自己親手烹調為豐富口感、純粹美味的料理，不僅健康還能陪你用料理連繫家人的感情，全家人一起品嚐擁有屬於自己的家庭味，不但是下班後的生活療癒，也是一種平實的生活之美。
                </h4>
              </div>
              <div className="col">
                <img src="img/003.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

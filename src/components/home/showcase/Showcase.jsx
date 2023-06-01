

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import cheerio from 'cheerio';
// import Slider from '../../Slider';

// const Showcase = () => {
//   const [nfts, setNFTs] = useState([]);
//   const [recentNFTs, setRecentNFTs] = useState([]);

//   const fetchNFTs = async () => {
//     try {
//       // Fetch and extract NFT data
//       const response = await axios.get('https://delorean.markets/market');
//       const html = response.data;
//       const $ = cheerio.load(html);

//       const nftData = $('.nft-card').map((_, element) => {
//         const imgSrc = $(element).find('.nft-card-image').attr('src');
//         const title = $(element).find('.nft-card-title').text().trim();
//         const itemLink = $(element).find('.nft-card-link').attr('href');
//         return { imgSrc, title, itemLink };
//       }).get();

//       // Update the state with the extracted data
//       setNFTs(nftData);

//       // Update the recentNFTs state in the homepage component
//       if (nftData.length > 0) {
//         setRecentNFTs(nftData);
//       }
//     } catch (error) {
//       console.error('Error fetching NFTs:', error);
//     }
//   };

//   useEffect(() => {
//     fetchNFTs();
//     const interval = setInterval(fetchNFTs, 60000); // Fetch every 1 minute

//     return () => {
//       clearInterval(interval); // Clean up the interval on component unmount
//     };
//   }, []);

//   return (
//     <div>
//       {/* Rest of the showcase content */}
//       <div className="second-main-container">
//         <div className="flex-container">
//           <div className="second-main-title">
//             <h1>RESOURCES</h1>
//           </div>
//           <div className="first-item">
//             <div className="item1">
//               <p>
//                  How to link an item: Navigate to the Link page, upload an image of your item into the box on the left,
//                  enter other information in the other box, and press "Link item!" It may take a few minutes for your item
//                  to finish linking.
//               </p>
//             </div>
//             <div className="item2">
//               <p>
//                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, voluptatibus?Lorem, ipsum dolor sit amet
//                  consectetur adipisicing elit. Quas, laborum.
//               </p>
//             </div>
//             <div className="item3">
//               <p>
//                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, qui.Lorem, ipsum dolor sit amet
//                  consectetur adipisicing elit. Quas, laborum.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="second-item">
//           <div className="image1">
//             <img
//                className="second-item-image"
//                src="https://i.seadn.io/gae/2QsFxb14us6FSDu_Rkj4cXflv_ijntnySy_a3jDah0fS5TbszBKbye4wek0aNHWGZqkeQ1CmlqNUJf9TEIel7tcmFgTvPTK-dVAWmXM?auto=format&w=3840"
//                alt=""
//             />
//           </div>
//           <div className="image2">
//             <img
//                className="second-item-image"
//                src="https://i.seadn.io/gae/X4Q2rHfwRSUHRw9HLkKfG3J-8NjjhUTXV3sJ1CVvCtg-ycL-hHroQMiEUP9pqRNJvV7mjH2euA1jDxKvS1mhgQI-ZUljlhI-owP2GA?auto=format&w=3840"
//                alt=""
//             />
//           </div>
//           <div className="image3">
//             <img
//                className="second-item-image"
//                src="https://i.seadn.io/gae/ibjUDVjAvvT4yN5uuplWVSL7q9SD3WdDhJWkpdkHtT-NkOCdnKIuFVzdntP4sQ2BcLyf2I2hwFI-IdaxUOqXBZ6g0jS_jcR9ud2Syg?auto=format&w=3840"
//                alt=""
//             />
//           </div>
//           <div className="image4">
//             <img
//                className="second-item-image"
//                src="https://i.seadn.io/gae/YwG6cplD6vUrJzksp-BXVeYhQfroGPt0OVmXf-6t9dnblRkfgGdj_YUMXlPTqfzWnKwovYHRD3ud0zO_KMcadflBqcBsfdUm6YpOqA?auto=format&w=3840"
//                alt=""
//             />
//             <button className="btn">
//               <a href="/link">Link a Code</a>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="news-container">
//         <div className="show-btn-wrap">
//           <Link to="/link" className="btn showcase-btn light-btn">
//             Get Codes
//           </Link>
//         </div>
//         <div className="email-container">
//           <h1 className="news-title">Sign up for updates on Delorean!</h1>
//           <div className="news-flex">
//             <input className="email" type="email" id="email" name="email" placeholder="Enter your e-mail." />
//             <input className="submit" type="submit" />
//           </div>
//         </div>
//       </div>
//       <Slider nfts={nfts} />
//     </div>
//   );
// };

// export default Showcase;


import React from 'react'
import { Link } from 'react-router-dom'
import "./showcase.css"

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/1.png" height="150" width="240" alt="" />
            </a>
            <div className="carr-title">Red Honda Accord (used)</div>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/2.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Reading glasses (new)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/3.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Harry Potter books (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/4.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Samsung Galaxy (new)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/5.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Northface jacket (lightly used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/6.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Air Jordan's (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/7.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">MacBook Air (lightly used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/8.png" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">iPhone 11 (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/9.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">AirPods Gen 1 (new)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/1.png" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Red Honda Accord (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/2.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Reading glasses (new)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/3.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Harry Potter books (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/4.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Samsung Galaxy (new)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/5.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Northface jacket (lightly used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/6.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Air Jordan's (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/7.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">MacBook Air (lightly used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/8.png" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">iPhone 11 (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/9.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">AirPods Gen 1 (new)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/1.png" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Red Honda Accord (used)</p>
          </div>
          <div className="slide">
            <a href="https://delorean.markets/market">
              <img src="Images/2.jpg" height="150" width="240" alt="" />
            </a>
            <p className="carr-title">Reading glasses (new)</p>
          </div>
        </div>
      </div>
      <div class="slider2">
        <div class="slide-track2">
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/6.jpg" height="150" width="240" alt="" /></a><p class="carr-title">Air Jordan's (used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/7.jpg" height="150" width="240" alt="" /></a><p class="carr-title">MacBook Air (lightly used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/8.png" height="150" width="240" alt="" /></a><p class="carr-title">iPhone 11 (used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/9.jpg" height="150" width="240" alt="" /></a><p class="carr-title">AirPods Gen 1 (new)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/1.png" height="150" width="240" alt="" /></a><p class="carr-title">Red Honda Accord (used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/2.jpg" height="150" width="240" alt="" /></a><p class="carr-title">Reading glasses (new)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/3.jpg" height="150" width="240" alt="" /></a><p class="carr-title">Harry Potter books (used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/4.jpg" height="150" width="240" alt="" /></a><p class="carr-title">Samsung Galaxy (new)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/5.jpg" height="150" width="240" alt="" /></a><p class="carr-title">Northface jacket (lightly used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/6.jpg" height="150" width="240" alt="" /></a><p class="carr-title">Air Jordan's (used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/7.jpg" height="150" width="240" alt="" /></a><p class="carr-title">MacBook Air (lightly used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/8.png" height="150" width="240" alt="" /></a><p class="carr-title">iPhone 11 (used)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/9.jpg" height="150" width="240" alt="" /></a><p class="carr-title">AirPods Gen 1 (new)</p></div>
          <div class="slide2"><a href="https://delorean.markets/market)"><img src="Images/1.png" height="150" width="240" alt="" /></a><p class="carr-title">Red Honda Accord (used)</p></div>
        </div>
      </div>
      <div className="second-main-container">
        <div className="flex-container">
          <div className="second-main-title">
            <h1>RESOURCES</h1>
          </div>
          <div className="first-item">
            <div className="item1">
              <p>
                 How to link an item: Navigate to the Link page, upload an image of your item into the box on the left,
                 enter other information in the other box, and press "Link item!" It may take a few minutes for your item
                 to finish linking.
              </p>
            </div>
            <div className="item2">
              <p>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, voluptatibus?Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. Quas, laborum.
              </p>
            </div>
            <div className="item3">
              <p>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, qui.Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. Quas, laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="second-item">
          <div className="image1">
            <img
               className="second-item-image"
               src="https://i.seadn.io/gae/2QsFxb14us6FSDu_Rkj4cXflv_ijntnySy_a3jDah0fS5TbszBKbye4wek0aNHWGZqkeQ1CmlqNUJf9TEIel7tcmFgTvPTK-dVAWmXM?auto=format&w=3840"
               alt=""
            />
          </div>
          <div className="image2">
            <img
               className="second-item-image"
               src="https://i.seadn.io/gae/X4Q2rHfwRSUHRw9HLkKfG3J-8NjjhUTXV3sJ1CVvCtg-ycL-hHroQMiEUP9pqRNJvV7mjH2euA1jDxKvS1mhgQI-ZUljlhI-owP2GA?auto=format&w=3840"
               alt=""
            />
          </div>
          <div className="image3">
            <img
               className="second-item-image"
               src="https://i.seadn.io/gae/ibjUDVjAvvT4yN5uuplWVSL7q9SD3WdDhJWkpdkHtT-NkOCdnKIuFVzdntP4sQ2BcLyf2I2hwFI-IdaxUOqXBZ6g0jS_jcR9ud2Syg?auto=format&w=3840"
               alt=""
            />
          </div>
          <div className="image4">
            <img
               className="second-item-image"
               src="https://i.seadn.io/gae/YwG6cplD6vUrJzksp-BXVeYhQfroGPt0OVmXf-6t9dnblRkfgGdj_YUMXlPTqfzWnKwovYHRD3ud0zO_KMcadflBqcBsfdUm6YpOqA?auto=format&w=3840"
               alt=""
            />
            <button className="btn">
              <a href="/link">Link a Code</a>
            </button>
          </div>
        </div>
      </div>

      <div className="news-container">
        <div className="show-btn-wrap">
          <Link to="/link" className="btn showcase-btn light-btn">
            Get Codes
          </Link>
        </div>
        <div className="email-container">
          <h1 className="news-title">Sign up for updates on Delorean!</h1>
          <div className="news-flex">
            <input className="email" type="email" id="email" name="email" placeholder="Enter your e-mail." />
            <input className="submit" type="submit" />
          </div>
        </div>
      </div>
   );
};

export default Showcase;

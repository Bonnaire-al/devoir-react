import React from 'react';
import './style2.css';
import TopPage from '../components/TopPage';

export const Mention = () => {
  return (
    <div>
        <TopPage title="Mention Legal" subtitle="" />
        <div class="accordion mx-5  my-4" id="accordionExample">
          <div class="accordiolign-items-centern-item">
              <h2 class="accordion-header" id="headingOne">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Editeur du site
                  </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                    <h5>John Doe</h5>
                    <p>123 Main St, Anytown, USA</p>
                    <p>
                      Phone: <a href="tel:+1234567890">(123) 456-7890</a>
                    </p>
                    <p>
                      Email: <a href="mailto:johndoe@example.com">johndoe@example.com</a>
                    </p>
                 </div>
              </div>
          </div>
          <div class="accordion-item">
             <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 Hebergeur
                </button>
             </h2>
             <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
             </div>
           </div>
           <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Crédit
                 </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
              </div>
           </div>
       </div>
    </div>
);
};

export default Mention;
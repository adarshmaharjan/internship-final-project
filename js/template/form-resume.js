const formResume = ` <section id="cv-form-section">
<div class="wrapper" id="cv-form">
  <div class="row">
    <div class="col col-50">
      <h3>Personal Information</h3>
      <div class="form-group">
        <label for="nameField">Your Name</label>
        <input
          class="form-control"
          id="nameField"
          name="name"
          placeholder="Enter Your Name"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="contactField">Your contact Number</label>
        <input
          class="form-control"
          id="contactField"
          name="contact"
          type="text"
          placeholder="Your contact Number"
        />
      </div>
      <div class="form-group">
        <label for="addressField">Your Address</label>
        <textarea
          class="form-control"
          id="addressField"
          name="address"
          placeholder="Your Address"
          rows="5"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="fbField">Facebook Link</label>
        <input
          class="form-control"
          id="fbField"
          name="facebook-link"
          placeholder="Your Facebook"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="instagramField">Instagram Link</label>
        <input
          class="form-control"
          id="instagramField"
          name="instagram-link"
          placeholder="Your Instagram"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="linkedinField">Your LinkedIN</label>
        <input
          class="form-control"
          id="linkedinField"
          name="linkedIn-link"
          placeholder="Your Linkedin"
          type="text"
        />
      </div>
    </div>

    <div class="col col-50">
      <h3>Professional Information</h3>
      <div class="form-group">
        <label for="">Objective</label>
        <textarea
          class="form-control objectiveField"
          placeholder="Enter Here"
          rows="5"
        ></textarea>
      </div>
      <div class="form-group" id="we">
        <label for="">Work Experience</label>
        <textarea
          class="form-control weField"
          placeholder="Enter Here"
          rows="3"
        ></textarea>
        <button id="weAddButton" class="add-btn">Add</button>
      </div>
      <div class="form-group" id="aq">
        <label for="">Academic Qualification </label>
        <textarea
          class="form-control aqField"
          placeholder="Enter here"
          rows="3"
        ></textarea>
        <button class="add-btn" id="aqAddButton">Add</button>
      </div>
    </div>
  </div>
  <div class="cv-btn-container">
    <button id="generate-cv-btn">Generate CV</button>
  </div>
</div>
</section>

<section id="cv-template-section" class="hide">
<div class="wrapper" id="cv-template">
  <div class="row">
    <!--first-col-->
    <div class="col col-75">
      <h2 id="nameT2" class="text-center" style="font-weight: 900">
        Adarsh Maharjan
      </h2>
      <!-- Objective -->
      <div class="card">
        <div class="card-header">
          <h3>Objective</h3>
        </div>
        <div id="objectiveT" class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Alias aliquid architecto at beatae dolores est eveniet fugit
          illum iure laboriosam libero maiores minus modi nulla officia
          perspiciatis placeat quaerat quasi quidem quo, repellat veniam
          voluptatibus voluptatum. A, consequatur, eius ipsa iusto
          numquam officiis praesentium quia quis quisquam reprehenderit
          rerum tempore?
        </div>
      </div>
      <!-- Work Experience -->
      <div class="card">
        <div class="card-header">
          <h3>Work Experience</h3>
        </div>
        <div id class="card-body">
          <ul id="weT">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <!-- Academic Qualification -->
      <div class="card">
        <div class="card-header background">
          <h3>Academic Qualification</h3>
        </div>
        <div class="card-body">
          <ul id="aqT">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <div class="print-btn-wrapper text-center">
        <button id="print-btn" class="btn background">Print CV</button>
      </div>
    </div>

    <!--second-col-->
    <div class="col col-25">
      <div class="personal-info-wrapper background">
        <!-- <img
          alt="profile-pic"
          class="img-fluid mt-2 profile-image"
          src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
        /> -->
        <div class="personal-info">
          <div id="nameT1">Adarsh Maharjan</div>
          <div id="contactT">984112345</div>
          <div id="addressT">123456789/123456789 Nepal, Kathmandu</div>
          <hr />
          <div id="links">
            <div class="card">
              <div class="card-header"><h3>Links</h3></div>
              <div class="card-body">
                <ul>
                  <li>
                    <a id="fbT" href="#">Facebook</a>
                  </li>
                  <li>
                    <a id="instaT" href="#">Instagram</a>
                  </li>
                  <li>
                    <a id="linkedT" href="#">LinkedIN</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>`

export default formResume

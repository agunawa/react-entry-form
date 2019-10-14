import React from "react";

const bgWhite = {
  backgroundColor: "white"
};
const bgDark = {
  backgroundColor: "black",
  color: "white"
};

function FormComponent(props) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row grid-divider">
          <div className="col-lg-6 my-1">
            <div className="card-body">
              <h3>Entry Form</h3>

              <form>
                <div className="form-group row">
                  <label htmlFor="fullName" className="col-sm-3 col-form-label">
                    Full name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      value={props.fullName}
                      onChange={props.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="department"
                    className="col-sm-3 col-form-label"
                  >
                    Department
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="department"
                      name="department"
                      placeholder="Department"
                      value={props.department}
                      onChange={props.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="quote" className="col-sm-3 col-form-label">
                    Quote
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="quote"
                      name="quote"
                      placeholder="Quote"
                      value={props.quote}
                      onChange={props.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group row text-danger">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9">{props.genericError}</div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="isDarkTheme"
                        name="isDarkTheme"
                        checked={props.isDarkTheme}
                        onChange={props.handleChange}
                        className="form-check-input"
                      />
                      <label htmlFor="isDarkTheme" className="form-check-label">
                        Use dark theme
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9">
                    <button
                      className="btn btn-primary mb-2"
                      onClick={props.handleClick}
                    >
                      Next >
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 my-1">
            <h3>Card Preview</h3>
            <br></br>
            <div
              className="card text-center"
              style={props.isDarkTheme ? bgDark : bgWhite}
            >
              <div className="card-body">
                <h5 className="card-title">{props.fullName}</h5>
                <p className="card-text">{props.department}</p>
                <br />
                <i>{props.quote.length ? '"' + props.quote + '"' : ""}</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FormComponent;

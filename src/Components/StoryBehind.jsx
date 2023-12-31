import React from "react";
import "./Fonts.css";
export default function StoryBehind() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="row d-flex justify-content-between">
          {/* <div
            className="col-xl-6 col-md-12 col-sm-5 mt-5 mb-5"
            data-aos="fade-right"
          >
            <img
              src={"./images/bgcontact.png"}
              style={{ width: "100%", float: "right" }}
              alt=""
            />
          </div> */}
          <div className="col-xl-1"></div>
          <div
            className="col-xl-10 col-md-12 col-sm-5 ps-sm-5"
            style={{
              display: "fllex",
              alignSelf: "center",
              padding: "10px",
              textAlign: "center",
            }}
            data-aos="fade-left"
          >
            <div style={{ width: "100%" }}>
              <strong
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "82px",
                  lineHeight: "90px",
                  color: "#10265f",
                }}
                className="mt-5 mb-5"
              >
                Our Vision
              </strong>
            </div>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: "300",
                fontSize: "26px",
                lineHeight: "43.4px",
                letterSpacing: "2%",
                verticalAlign: "top",
                alignContent: "center",
                textAlign: "center",
              }}
              className="my-4"
            >
              “At its core, Azmuth stands for innovation. Azmuth came to life to
              create a world where complexities of shipping and delivery are
              transformed into effortless and delightful experiences. We strive
              to bring convenience and create unparalleled value for our
              customers.”
            </p>
          </div>
          <div className="col-xl-1"></div>
        </div>
      </div>
    </div>
  );
}

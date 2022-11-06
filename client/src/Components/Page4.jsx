import React, { useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import images from "./Image/images.png";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  overflowY: "scroll",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "3px solid black",
  borderRadius: "35px",
  boxShadow: 24,
  height: "60%",
  p: 18,
};
const Page4 = ({ handleBack }) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const [documentType, setDocumentType] = React.useState([]);
  const [upload, setUpload] = React.useState(null);
  const [open, setOpen] = useState(false);
  const handleProceed = () => {
    setOpen(true);
    // console.log("page1", data);
  };
  const handleClose = () => setOpen(false);
  const handleBackkk = () => {
    setOpen(false);
    handleBack();
  };
  const handleSubmit = () => {
    setOpen(true);
    alert("Click Ok to review your data");
  };

  let pincode = JSON.parse(localStorage.getItem("pincode")) || [];
  let shifting = JSON.parse(localStorage.getItem("text")) || [];
  let data = JSON.parse(localStorage.getItem("page1-data")) || [];
  let date = JSON.parse(localStorage.getItem("page2-data")) || [];
  const handleConfirm = () => {
    alert("Form Successfully submitted");
    window.location.reload();
  };
  return (
    <>
      <div>
        <Container
          maxWidth="sm"
          style={{
            alignItems: "center",
            padding: "10px 10px 10px 10px",
            border: "",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              height: "100vh",
              border: "1px solid red",
              borderRadius: "20px",
              padding: "20px 20px",
              alignItems: "center",
            }}
          >
            <div
              style={{ textAlign: "center", color: "gray", fontWeight: "50px" }}
            >
              <h3>Please upload the documents</h3>
              <h5>
                Dear customer, as a TRAI mendate we would require a proof of
                address
              </h5>
              <h5>documents for the connection to be shifted</h5>
            </div>
            <div className="">
              <FormControl sx={{ m: 2.5, width: 430 }} style={{ border: "" }}>
                <InputLabel id="demo-simple-select-label">
                  Choose Document type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={documentType}
                  label="Choose Document type"
                >
                  <MenuItem value="">Ten</MenuItem>
                  <MenuItem value="">Twenty</MenuItem>
                  <MenuItem value="">Thirty</MenuItem>
                </Select>
              </FormControl>
              <div>
                <h4
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontWeight: "50px",
                  }}
                >
                  Please upload a clear scanned copy of both front <br />
                  and back side of relevant document. In case the <br />
                  document is not readable or clear, shifting process <br />
                  may get delayed
                </h4>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <label htmlFor="">Front img</label>
                <label htmlFor="">Back img</label>
              </div>
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "20px 20px 15px 15px",
                }}
              >
                <div
                  className="image-upload"
                  style={{
                    border: "2px dashed grey",
                    width: "110px",
                    height: "90px",
                  }}
                >
                  <label for="file-input">
                    <img src={images} style={{ width: "100px" }} />
                  </label>

                  <input id="file-input" type="file" />
                  <br />
                  <br />
                  <div>
                    <input
                      accept="image/*"
                      type="file"
                      id="select-image"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="select-image">
                      <button
                        variant=""
                        component="span"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          height: "25px",
                          width: "",
                        }}
                      >
                        Upload
                      </button>
                    </label>
                  </div>
                  {/* <button accept="image/*" type="file"  style={{backgroundColor:'red', color:'rgba(255,255,255,1)',width:'110px', height:'25px',borderRadius:'10px'}}>Upload</button> */}
                </div>
                <div
                  className="image-upload"
                  style={{
                    border: "2px dashed grey",
                    width: "110px",
                    height: "90px",
                  }}
                >
                  <label for="file-input">
                    <img src={images} style={{ width: "100px" }} />
                  </label>

                  <br />
                  <br />
                  <div>
                    <input
                      accept="image/*"
                      type="file"
                      id="select-image"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="select-image">
                      <button
                        variant=""
                        component="span"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          height: "25px",
                          width: "",
                        }}
                      >
                        Upload
                      </button>
                    </label>
                  </div>
                </div>
              </div>{" "}
              <br /> <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "50px",
                }}
              >
                <button
                  onClick={handleBackkk}
                  style={{
                    backgroundColor: "red",
                    color: "rgba(255,255,255,1)",
                    width: "150px",
                    height: "35px",
                    fontWeight: "400px",
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    borderRadius: "10px",
                  }}
                >
                  BACK
                </button>

                <button
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "red",
                    color: "rgba(255,255,255,1)",
                    width: "150px",
                    height: "35px",
                    fontWeight: "500px",
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    borderRadius: "10px",
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </Box>
        </Container>
      </div>
      <div className="modal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              <h5>Complete Details of User</h5> <hr />
            </Typography>
            <div>
              <iframe
                title="gmap"
                name="gMap"
                className="map"
                src={`https://maps.google.com/maps?q=${data.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
            <Typography>
              <h5>Name of the User : {data.name}</h5>
              <h5>Current Address : {data.currentAddress}</h5>
              <h5>Date of Registration : {data.date}</h5>
              <h5>Multi Store Building : {data.radio}</h5>
              <h5>shifting address :{shifting}</h5>
              <h5>pincode :{pincode}</h5>
              <h5>Date of Appointment:{date.selectedDate}</h5>
            </Typography>

            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <button
                onClick={handleConfirm}
                style={{
                  backgroundColor: "red",
                  color: "rgba(255,255,255,1)",
                  width: "150px",
                  height: "35px",
                  fontWeight: "500px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  borderRadius: "10px",
                }}
              >
                CONFIRM
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Page4;

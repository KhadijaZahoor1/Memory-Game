import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TilesModal from "./TilesModal";

const PlayModal = ({ setIsOpenModal, handleClick, nmbr, setPlayAgain }) => {
  const [isTiles, setIsTiles] = useState(false);
  const [isNameAge, setIsNameAge] = useState(true);

  function handleDiv() {
    setIsNameAge(false);
    setIsTiles(true);
  }

  useEffect(() => {
    if (nmbr === 1) {
      setIsTiles(true);
      setIsNameAge(false);
    }
  }, [nmbr]);

  console.log(isTiles);
  // console.log(isNameAge);

  // formik form
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3)
        .max(15, "Name must be 3 characters or less then 15")
        .required("Required"),
      age: Yup.number()
        .integer()
        .min(1, "Age must be greater than 1")
        .max(100, "Age must be less than 100")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:7000/api/game/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          handleDiv();
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(values);
    },
  });

  // console.log(formik.values);

  return (
    <>
      <div onClick={() => setIsOpenModal(false)} />
      <div className="modal-bg">
        <div className="centered">
          {isNameAge && (
            <div>
              <form className="modal" onSubmit={formik.handleSubmit}>
                <div className="modalHeader">Enter the details below</div>
                <div
                  className="close"
                  onClick={() => setIsOpenModal(false)}
                ></div>

                <div>
                  <div className="modalContent">
                    <input
                      id="name"
                      type="text"
                      onBlur={formik.handleBlur}
                      placeholder="Enter your name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <p className="formikErrors">{formik.errors.name}</p>
                    ) : null}
                    <input
                      id="age"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Age"
                      value={formik.values.age}
                    />
                    {formik.touched.age && formik.errors.age ? (
                      <p className="formikErrors">{formik.errors.age}</p>
                    ) : null}
                  </div>
                  <div className="modalActions">
                    <div className="actionsContainer">
                      <button className="okBtn" type="submit">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
          {isTiles && (
            <TilesModal
              handleClick={handleClick}
              setIsOpenModal={setIsOpenModal}
            />
            // <div>
            //   <div className="modalContent">
            //     <select
            //       className=""
            //       id="gameType"
            //       type="number"
            //       onChange={formik.handleChange}
            //       onBlur={formik.handleBlur}
            //       value={formik.values.gameType}
            //     >
            //       <option className="">-- select Tiles --</option>
            //       <option className="">12</option>
            //       <option className="">16</option>
            //       <option className="">20</option>
            //     </select>
            //     {formik.touched.gameType && formik.errors.gameType ? (
            //       <p className="formikErrors">{formik.errors.gameType}</p>
            //     ) : null}

            //     <div>
            //       <input
            //         id="Free"
            //         type="radio"
            //         value="Free"
            //         name="gameMode"
            //         onChange={formik.handleChange}
            //         onBlur={formik.handleBlur}
            //         defaultChecked={formik.values.gameMode === "Free"}
            //       />{" "}
            //       <label>Free mode </label>
            //       <input
            //         id="Strict"
            //         type="radio"
            //         value="Strict"
            //         name="gameMode"
            //         onChange={formik.handleChange}
            //         onBlur={formik.handleBlur}
            //         defaultChecked={formik.values.gameMode === "Strict"}
            //       />{" "}
            //       <label>Strict mode</label>
            //     </div>
            //     {formik.touched.gameMode && formik.errors.gameMode ? (
            //       <p className="formikErrors">{formik.errors.gameMode}</p>
            //     ) : null}
            //   </div>
            //   <div className="modalActions">
            //     <div className="actionsContainer">
            //       {/* <button
            //       className="cancelBtn"
            //       onClick={() => setIsOpenModal(false)}
            //     >
            //       Cancel
            //     </button> */}
            //       <button className="okBtn" type="submit">
            //         Next
            //       </button>
            //     </div>
            //   </div>
            // </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayModal;

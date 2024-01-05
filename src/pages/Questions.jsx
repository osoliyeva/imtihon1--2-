import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Question = () => {
  const { id } = useParams();
  const [frontend_questions_data, set_frontend_questions_data] = useState([]);
  const [question_number, set_question_number] = useState(0);

  //get_question_data
  const get_question_data = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/frontend_questions?subject_id=${id}`,
      );
      set_frontend_questions_data(await res.json());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_question_data();
  }, []);

  // current_question
  const current_question = () => {
    if (!(frontend_questions_data.length - 1 === question_number)) {
      set_question_number(question_number + 1);
    }
  };
  return (
    <>
      <main className="app_section">
        <div className="main_section">
          <div className="title_section">
            <h2 style={{ fontSize: 42 }}>
              {frontend_questions_data.length > 0
                ? frontend_questions_data[question_number].question
                : null}
            </h2>
          </div>
          <div className="question_buttons">
            {frontend_questions_data.length > 0
              ? frontend_questions_data[question_number].answers.map(
                  (item, index) => (
                    <div
                      className="link select-btn"
                      key={item}
                      tabIndex="0"
                      onClick={() => console.log(index + 1)}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p>A</p>
                        <h3>{item}</h3>
                      </div>
                    </div>
                  ),
                )
              : null}
            <button className="submit-btn" onClick={() => current_question()}>
              Submit Answer
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Question;

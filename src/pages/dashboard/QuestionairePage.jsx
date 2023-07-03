import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import CameraComponent from "../../components/CameraComponent";

const QuestionnairePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const [notAtAll, setNotAtAll] = useState("");
  const [serveralDays, setSeveralDays] = useState("");
  const [moreThanHalfTheDays, setMoreThanHalfTheDays] = useState("");
  const [nearlyEveryDay, setNearlyEveryDay] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  const main_questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead, or of hurting yourself",
  ];
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="p-4 bg-white rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Questionnaire</h2>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((question, index) => (
          <div key={question.id} className="mb-6 w-full">
            <h3 className="text-lg font-semibold mb-2">{`Question ${index + 1}`}</h3>
            <div className="space-y-4">
              <input
                {...register(`questions.${index}.title`, { required: true })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Question"
              />
              <div className="grid grid-cols-6 gap-2">
                {['1', '2', '3', '4', '5'].map((rating) => (
                  <label
                    key={rating}
                    className="flex items-center justify-center p-2 bg-gray-100 rounded-md text-center"
                  >
                    <input
                      {...register(`questions.${index}.ratings[${rating}]`)}
                      type="radio"
                      value={rating}
                      className="sr-only"
                    />
                    {rating}
                  </label>
                ))}
              </div>
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 hover:text-red-700 ml-2 mt-2"
              >
                <MinusIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ title: '', ratings: {} })}
          className="text-blue-500 hover:text-blue-700 bg-[#fff] border my-4 flex py-3 px-4 rounded-lg"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Question
        </button>
       <div>
       <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
          Submit
        </button>
       </div>
      </form> */}
        {main_questions.map((q, index) => (
          <div className="mt-8 w-full">
            <label className="p-3 bg-blue-700 text-white font-bold w-full">
              {index + 1}. {q}
            </label>

            <table className="mt-8">
              <tr>
                <th>option</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
              <tr>
                <td>
                  <label>Not At All</label>
                </td>
                <td>
                  <input
                    name={notAtAll}
                    value="1"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={notAtAll}
                    value="2"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={notAtAll}
                    value="3"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={notAtAll}
                    value="4"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={notAtAll}
                    value="5"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
              </tr>
              <tr className="mt-8">
                <td>
                  <label>several Days</label>
                </td>
                <td>
                  <input
                    name={serveralDays}
                    value="1"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={serveralDays}
                    value="2"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={serveralDays}
                    value="3"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={serveralDays}
                    value="4"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={serveralDays}
                    value="5"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
              </tr>
              <tr className="mt-8">
                <td>
                  <label>More Than Half the days</label>
                </td>
                <td>
                  <input
                    name={moreThanHalfTheDays}
                    value="1"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={moreThanHalfTheDays}
                    value="2"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={moreThanHalfTheDays}
                    value="3"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={moreThanHalfTheDays}
                    value="4"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={moreThanHalfTheDays}
                    value="5"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
              </tr>
              <tr className="mt-8">
                <td>
                  <label>Nearly Everyday</label>
                </td>
                <td>
                  <input
                    name={nearlyEveryDay}
                    value="1"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={nearlyEveryDay}
                    value="2"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={nearlyEveryDay}
                    value="3"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={nearlyEveryDay}
                    value="4"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
                <td>
                  <input
                    name={nearlyEveryDay}
                    value="5"
                    type="radio"
                    className="border rounded-lg w-32"
                  />
                </td>
              </tr>
            </table>
          </div>
        ))}

        <div className="w-1/2 mt-16 text-right">
          <button className="bg-blue-600 text-white py-2 px-3 rounded-lg">
            Submit Response.
          </button>

    
          <CameraComponent />
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;

import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

const QuestionnairePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto py-8 px-4">
    <div className="p-4 bg-white rounded-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Questionnaire</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
    </div>
  );
};

export default QuestionnairePage;

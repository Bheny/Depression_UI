import React from 'react';
import img from '../assets/bg.jpg'

const StudentContent = () => {

  return (
    <>
      <div className='flex flex-row w-full gap-3 '>
        <div className="w-3/4 bg-white mt-3 shadow-xl p-4 rounded-lg">
          <h2 className='text-gray-700 font-bold text-lg'>Overview</h2>
          <div className='pt-3 w-full grid grid-cols-2 lg:grid-cols-4 gap-3'>
            <div className='shadow rounded p-2'>
              <span className='p-2 text-slate-400'>Courses Taking</span>
              <div className='my-4 rounded-full mx-auto h-16 w-16 text-center pt-3 bg-gray-100'>
                <span className='text-3xl font-bold'>2</span>
              </div>
            </div>

            <div className='shadow rounded p-2'>
              <span className='p-2 text-slate-400'>Courses Taking</span>
              <div className='my-4 rounded-full mx-auto h-16 w-16 text-center pt-3 bg-gray-100'>
                <span className='text-3xl font-bold'>2</span>
              </div>
            </div>

            <div className='shadow rounded p-2'>
              <span className='p-2 text-slate-400'>Courses Taking</span>
              <div className='my-4 rounded-full mx-auto h-16 w-16 text-center pt-3 bg-gray-100'>
                <span className='text-3xl font-bold'>2</span>
              </div>
            </div>

            <div className='shadow rounded p-2'>
              <span className='p-2 text-slate-400'>Courses Taking</span>
              <div className='my-4 rounded-full mx-auto h-16 w-16 text-center pt-3 bg-gray-100'>
                <span className='text-3xl font-bold'>2</span>
              </div>
            </div>
          </div>

          <h2 className='mt-8 mb-8 text-gray-700 font-bold text-lg'>Courses You're Taking</h2>
          <div>
            <table className='text-left mt-2 w-full' >
              <thead className='border-b text-gray-600'>
                <th>Course Title</th>
                <th>Lessons Completed</th>
                <th>Duration</th>
                <th>Instructor</th>
              </thead>
              <tbody>
                <tr className='pt-4 py-3'>
                  <td>
                    <div className='py-4 flex gap-2'>
                      <img src={img} className='rounded w-6 h-6 object-cover object-center' />
                      <div className='' >
                        <span className='font-bold p-2'>Basic Computer</span><br />
                      </div>
                    </div>
                  </td>
                  <td>
                    18/40(48%)
                  </td>
                  <td>
                    12h 30m 00s
                  </td>
                  <td>
                  <div className='py-4 flex gap-2'>
                      <img src={img} className='rounded-full w-6 h-6 object-cover object-center' />
                      <div className='' >
                        <span className='font-bold p-2'>Bernard Tay</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div className=' bg-white w-1/4 mt-3 shadow-xl p-4 rounded-lg'>
          <h2 className='pb-4'>Upcoming Tests</h2>
          <div className='py-2 flex'>
            <img src={img} className='rounded-lg w-8 h-8 object-cover object-center' />
            <div className='ml-3' >
              <span className='font-bold p-2'>Basic Computer</span><br />
              <span className='text-gray-500 p-2  '>Class Test #1</span>
              <span className='bg-[#fece48] text-xs ml-2 rounded-lg w-1/2 p-2 text-center '>19 June</span>
            </div>
          </div>
          <button className='rounded-full w-full p-3 text-white bg-[#fece48] mt-12'>See all upcoming tests</button>
        </div>
      </div>
      <div className='flex flex-row w-full gap-3 '>
        <div className="w-3/4 bg-white mt-3 shadow-xl p-4 rounded-lg">
          <h2 className='text-gray-700 font-bold text-lg'>Assignments</h2>
          <div className='pt-3 w-full grid grid-cols-2 lg:grid-cols-3 gap-3'>
            <div className='shadow rounded-lg p-2 text-center shadow'>
              <span className='p-2 text-slate-600 font-bold'>Creating Socials</span><br />  
              <span className='p-2 text-slate-400'>Activity</span>
              <div className='my-3  mx-auto h-16 w-16 text-center '>
                <img src={img} className='rounded-full h-16 w-16 object-cover object-center' />
              </div>
              <div className='w-full '>
                <span className='bg-[#fece48] float-left text-white text-xs p-2 rounded'>New</span>
                <span className='float-right text-slate-400 p-2'>20min ago</span>
              </div>
            </div>


          </div>

          <h2 className='mt-8 text-gray-700 font-bold text-lg'>Activities</h2>
          <div>
            <div className='flex gap-2 my-4'>
            <img src={img} className='rounded-full h-8 w-8 object-cover object-center' />
            <span><b className='font-bold'>Bernard Tay</b> shared two new assignment feedback for the <b className='font-bold'>Programming Class</b></span>
            <span className='text-gray-400 '>30min ago</span>
            </div>

          </div>

        </div>

        <div className=' bg-white w-1/4 mt-3 shadow-xl p-4 rounded-lg'>
          <h2 className='pb-4'>Upcoming Tests</h2>
          <div className='py-2 flex'>
            <img src={img} className='rounded-lg w-8 h-8 object-cover object-center' />
            <div className='ml-3' >
              <span className='font-bold p-2'>Basic Computer</span><br />
              <span className='text-gray-500 p-2  '>Class Test #1</span>
              <span className='bg-[#fece48] text-xs ml-2 rounded-lg w-1/2 p-2 text-center '>19 June</span>
            </div>
          </div>
          <button className='rounded-full w-full p-3 text-white bg-[#fece48] mt-12'>See all upcoming tests</button>
        </div>
      </div>
    </>

  )
}


export default StudentContent;
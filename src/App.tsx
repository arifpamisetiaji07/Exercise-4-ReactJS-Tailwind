import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {

  const question = [
    'Create Guest Experience mobile check-in',
    'Document current CI/CD process',
    'Perform Code Review for final Pillow-talk release',
    'implement new color palette from design team',
    'fix image uploading process for guest check in',
    'provide on-boarding documentation'
  ]

  return (
   <div className="bg-[#1a202c] text-white">

    <div className="text-center p-[2em]">
      <h1 className='text-xl font-bold'>Chores ToDo List</h1>
    </div>

    <div className="container mx-auto text-center">
      {question.map((q) => (
        <div className="flex flex-row p-4">
          <div className="basis-[10%]">
            <input
              type="checkbox"
              className="w-5 h-5 border-2 border-green-500 text-green-500 rounded accent-green-500 focus:outline-none"
            />
          </div>
          <div className="basis-[90%]">
            <p>{q}</p>
          </div>
          <div className="basis-[10%]">
            <button className="bg-transparent text-red-300 border border-red-300 py-1 px-2 rounded-md hover:bg-red-300 hover:text-white">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
      
    </div>

    <hr className='mt-[2em]'></hr>

    <div className="text-center p-[2em]">
      <h2>Done : 0</h2>
    </div>

    <div className='container mx-auto pb-[2em]'>
      <div>
        <div className='p-2'>
          <label htmlFor="">Add ToDo</label>
        </div>
        <div className='p-2'>
          <input type="text" className='border rounded w-[100%] bg-transparent h-[2em]' />
        </div>
        <div className='p-2'>
          <button className="bg-blue-400 text-black py-2 px-3 rounded-md">
            Add Task
          </button>
        </div>
      </div>
    </div>

   </div>
  )
}

export default App

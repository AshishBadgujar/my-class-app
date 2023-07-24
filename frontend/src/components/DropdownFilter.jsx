import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import CheckBoxes from './CheckBoxes';

function DropdownFilter({
  align,
  selectedSchools,
  selectedStds,

  setSelectedSchools,
  setSelectedStds,
}) {


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  const onClear = () => {
    setSelectedSchools([])
    setSelectedStds([])
  }

  const schools = ["skn", "shinde"]
  const stds = ["1st", "2nd"]

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white dark:bg-slate-800 border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <wbr />
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
        <div className="hidden sm:block ml-2">
          Filters
        </div>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full left-0 w-80 right-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pt-1.5 rounded shadow-lg overflow-auto mt-1 ${align === 'right' ? 'xl:left-auto xl:right-0' : 'xl:left-0 xl:right-auto'
          }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown}>

          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3">Schools</div>
          <CheckBoxes all={schools} values={selectedSchools} setValues={setSelectedSchools} />

          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3">Standards</div>
          <CheckBoxes all={stds} values={selectedStds} setValues={setSelectedStds} />

          {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3">Subjects</div>
          <CheckBoxes all={subjs} values={selectedSubjs} setValues={setSelectedSubjs} /> */}


          <div className="py-2 px-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/20">
            <ul className="flex items-center justify-between">
              <li>
                <button onClick={onClear} className="btn-xs bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-200">
                  Clear
                </button>
              </li>
              <li>
                <button
                  className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white"
                  onClick={() => setDropdownOpen(false)}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

function Alert() {
  const { alertControl } = useContext(MyContext);

  const colorMap = {
    SUCCESS: "emerald",
    ERROR: "red",
    WARNING: "amber",
    INFO: "blue",
    DEFAULT: "gray"
  };

  const typeColor = colorMap[alertControl.type] || colorMap.DEFAULT;

  return (
    <div className="w-[22rem] absolute top-[15px] right-2">
      {alertControl.messages.length > 0 &&
        alertControl.messages.map((message, index) => (
          <div
            key={index}
            className={`h-9 my-3 rounded-md flex items-center px-3
              ${typeColor === "emerald" && "bg-emerald-500"}
              ${typeColor === "red" && "bg-red-400"}
              ${typeColor === "amber" && "bg-amber-400"}
              ${typeColor === "blue" && "bg-indigo-500"}
              ${typeColor === "gray" && "bg-gray-500"}
            `}
          >
            <p className={`text-slate-50 text-sm font-bold`}>{message}</p>
          </div>
        ))}
    </div>
  );
}

export default Alert;

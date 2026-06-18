import React, { useContext, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { MyContext } from "../../contexts/MyContext";

function ExpenseDonutChart() {
  const { outTransactions } = useContext(MyContext);

  const expenseCategories = [
    { value: "FOOD", label: "Food" },
    { value: "TRANSPORT", label: "Transport" },
    { value: "SHOPPING", label: "Shopping" },
    { value: "BILLS", label: "Bills" },
    { value: "HEALTH", label: "Health" },
    { value: "ENTERTAINMENT", label: "Entertainment" },
    { value: "EDUCATION", label: "Education" },
    { value: "TRAVEL", label: "Travel" },
    { value: "CAR", label: "Car" },
    { value: "TAX", label: "Tax" },
    { value: "OTHER", label: "Other" },
  ];

  const COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#E91E63",
    "#3F51B5",
  ];

  const data = useMemo(() => {
    return expenseCategories
      .map((cat) => {
        const total = (outTransactions ?? [])
          .filter((t) => t?.cat === cat.value)
          .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

        return { name: cat.label, value: total };
      })
      .filter((d) => d.value > 0);
  }, [outTransactions]);

  const totalExpense = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="w-full h-56 gap-2 flex flex-col ">

      <h6 className="text-slate-50 pl-3 text-sm font-bold">Expenses By Category</h6>

      <div className="flex items-center mt-3">
        {/* DONUT - فضای بیشتر */}
        <div className="flex-1 flex justify-center items-center relative">
          <PieChart width={150} height={150}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={45}
              outerRadius={65}
              paddingAngle={3}
            >
              {data.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i % COLORS.length]}
                  stroke="#111"
                  strokeWidth={2}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>

          {/* CENTER TEXT */}
          <div className="absolute text-center pointer-events-none">
            <p className="text-[10px] text-gray-400">Total</p>
            <p className="text-sm font-bold text-white">
              ${totalExpense.toFixed(0)}
            </p>
          </div>
        </div>

        {/* LEGEND - خیلی فشرده */}
        <div className="w-24 h-full overflow-hidden flex flex-col justify-center gap-1 text-[9px]">

          {data.slice(0, 6).map((item, i) => {
            const percent = ((item.value / totalExpense) * 100 || 0).toFixed(0);

            return (
              <div key={i} className="flex items-center justify-between text-gray-300">

                <div className="flex items-center gap-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: COLORS[i % COLORS.length] }}
                  />
                  <span className="truncate max-w-[50px]">
                    {item.name}
                  </span>
                </div>

                <span className="text-gray-500">{percent}%</span>

              </div>
            );
          })}

        </div>
      </div>
 
    </div>
  );
}

export default ExpenseDonutChart;
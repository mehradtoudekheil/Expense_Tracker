import React, { useContext, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { MyContext } from "../../contexts/MyContext";

function WeeklyIncomeExpenseChart() {
  const { transactions, userData } = useContext(MyContext);

  const data = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const weeks = [
      { name: "Week 1", start: 1, end: 7 },
      { name: "Week 2", start: 8, end: 14 },
      { name: "Week 3", start: 15, end: 21 },
      { name: "Week 4", start: 22, end: 31 },
    ];

    return weeks.map((w) => {
      const inSum = (transactions ?? [])
        .filter((t) => {
          const d = new Date(t.date);
          const day = d.getDate();
          return (
            t?.user === userData?.email &&
            t.type === "IN" &&
            d.getFullYear() === year &&
            d.getMonth() === month &&
            day >= w.start &&
            day <= w.end
          );
        })
        .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

      const outSum = (transactions ?? [])
        .filter((t) => {
          const d = new Date(t.date);
          const day = d.getDate();
          return (
            t?.user === userData?.email &&
            t.type === "OUT" &&
            d.getFullYear() === year &&
            d.getMonth() === month &&
            day >= w.start &&
            day <= w.end
          );
        })
        .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

      return {
        week: w.name,
        income: inSum,
        expense: outSum,
      };
    });
  }, [transactions, userData]);

  return (
    <div className="w-full h-56 text-xs flex flex-col justify-between">
              <h6 className="text-slate-500 dark:text-slate-50 pl-3 text-sm font-bold">Income Vs Expenses</h6>

      <BarChart width={320} height={190} data={data}>

        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />

        {/* INCOME */}
        <Bar
          dataKey="income"
          fill="rgba(34,197,94,0.5)" // bg-green-400/50
          name="Income"
          radius={[4, 4, 0, 0]}
        />

        {/* EXPENSE */}
        <Bar
          dataKey="expense"
          fill="rgba(239,68,68,0.4)" // bg-red-400/40
          name="Expense"
          radius={[4, 4, 0, 0]}
        />

      </BarChart>
    </div>
  );
}

export default WeeklyIncomeExpenseChart;
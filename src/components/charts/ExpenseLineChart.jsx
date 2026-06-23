import React, { useContext, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { MyContext } from "../../contexts/MyContext";

function MonthlyExpenseChart() {
  const { outTransactions } = useContext(MyContext);

  // گرفتن ۶ ماه اخیر
  const getLast6Months = () => {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);

      months.push({
        key: `${date.getFullYear()}-${date.getMonth() + 1}`,
        label: date.toLocaleString("en-US", { month: "short" }) +
          " " +
          date.getFullYear(),
      });
    }

    return months;
  };

  // ساخت دیتا
  const data = useMemo(() => {
    const months = getLast6Months();

    return months.map((m) => {
      const total = (outTransactions ?? [])
        .filter((t) => {
          const d = new Date(t.date);
          const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
          return key === m.key;
        })
        .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

      return {
        month: m.label,
        expense: total,
      };
    });
  }, [outTransactions]);

  return (
    <div className="w-full h-56 text-xs flex flex-col justify-between">
      <h6 className="text-slate-500 dark:text-slate-50 pl-3 text-sm font-bold">Monthly Expenses</h6>
      <LineChart width={340} height={190} data={data}>

        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="expense"
          stroke="#FF6384"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />

      </LineChart>
    </div>
  );
}

export default MonthlyExpenseChart;
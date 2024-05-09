import clsx from 'clsx';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.header}>
        <tr>
          <th className={css.mainTitle}>Type</th>
          <th className={css.mainTitle}>Amount</th>
          <th className={css.mainTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, i) => {
          return (
            <tr
              className={clsx(css.listItem, i % 2 === 0 && css.listItemEven)}
              key={item.id}
            >
              <td className={css.text}>{item.type}</td>
              <td className={css.text}>{item.amount}</td>
              <td className={css.text}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

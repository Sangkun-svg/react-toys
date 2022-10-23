export const Table = ({ User }: any) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {User.map((el: any) => {
          return (
            <tr key={el.id} className="listItem">
              <td className="listContent">{el.first_name}</td>
              <td className="listContent">{el.last_name}</td>
              <td className="listContent">{el.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

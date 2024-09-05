export default function Task() {
  return (
    <>
      {/* При изменении добавляет класс к li (completed || editing) */}
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">Active task</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </>
  );
}

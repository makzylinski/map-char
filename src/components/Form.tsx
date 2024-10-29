export default function Form() {
  function handleForm(e: any) {
    console.log(e.target.value);
  }
  return (
    <form className="form">
      <h2>Player Form</h2>

      <div className="form__row">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={handleForm} />
      </div>

      <div className="form__row">
        <label htmlFor="color">Color</label>
        <select name="color" id="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </form>
  );
}

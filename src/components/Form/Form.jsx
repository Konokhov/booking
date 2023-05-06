import "./Form.css";

const Form = () => {
  const floors = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27,
  ];

  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const submitForm = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    console.log(JSON.stringify(formData));
  };

  return (
    <div className="form">
      <h1 className="form-title">Забронировать переговорку</h1>
      <form onSubmit={submitForm} className="select-form">
        <div className="select-container">
          <label className="select-label" htmlFor="tower-select">
            Выберите башню
          </label>
          <select name="tower" className="select" id="tower-select">
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>

        <div className="select-container">
          <label className="select-label" htmlFor="floors-select">
            Выберите этаж
          </label>
          <select name="floors" className="select" id="floors-select">
            {floors.map((elem) => (
              <option value={elem} key={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>

        <div className="select-container">
          <label className="select-label" htmlFor="rooms-select">
            Укажите номер переговорки
          </label>
          <select name="rooms" className="select" id="rooms-select">
            {rooms.map((elem) => (
              <option value={elem} key={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>

        <div className="select-container">
          <label htmlFor="date-input">Укажите дату</label>
          <input
            className="select"
            type="date"
            name="date"
            id="date-input"
            required
          />
        </div>

        <div className="select-container">
          <label htmlFor="time-input">Укажите время</label>
          <input
            className="select"
            type="time"
            name="time"
            id="time-input"
            required
          />
        </div>

        <div className="select-container">
          <label className="input-label" htmlFor="story">
            Добавьте коментарий
          </label>
          <textarea
            className="textarea"
            id="story"
            name="story"
            maxLength={200}
          ></textarea>
        </div>

        <div className="form-button">
          <input className="button" type="reset" value="Очистить" />
          <input className="button" type="submit" value="Отправить" />
        </div>
      </form>
    </div>
  );
};

export default Form;

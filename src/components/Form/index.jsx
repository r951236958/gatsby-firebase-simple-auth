import React from "react"
import { navigate } from "@reach/router"

export default ({ handleSubmit, handleUpdate }) => (
  <form
    className={styles.form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/profile`)
    }}
  >
    <p className="form__instructions">
      For this demo, please log in with the username <code>gatsby</code> and the
      password <code>demo</code>.
    </p>
    <label className="form__label">
      Username
      <input
        className="form__input"
        type="text"
        name="username"
        onChange={handleUpdate}
      />
    </label>
    <label className="form__label">
      Password
      <input
        className="form__input"
        type="password"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    <input className="form__button`]} type="submit" value="Log In" ">
  </form>
)

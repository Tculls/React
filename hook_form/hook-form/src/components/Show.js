

const Show = (props) => {
    const {firstname, lastname, email, password, confirm} = props
  return (
    <div>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm: {confirm}</p>
    </div>
  )
}

export default Show